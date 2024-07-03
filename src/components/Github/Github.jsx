import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

export default function Github() {
  const { user, repos } = useLoaderData();

  const getLanguageColor = (language) => {
    switch (language) {
      case 'HTML':
        return 'text-red-500';
      case 'CSS':
        return 'text-purple-500';
      case 'JavaScript':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md mx-auto">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <img
              src={user.avatar_url}
              alt="GitHub Avatar"
              className="rounded-full border-4 border-gray-300 w-32 h-32"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">@{user.login}</p>
            <p className="mt-4 text-gray-700">{user.bio}</p>
          </div>
          <div className="mt-6 flex justify-around text-center">
            <div>
              <p className="text-gray-600">Repositories</p>
              <p className="text-lg font-medium text-gray-800">{user.public_repos}</p>
            </div>
            <div>
              <p className="text-gray-600">Followers</p>
              <p className="text-lg font-medium text-gray-800">{user.followers}</p>
            </div>
            <div>
              <p className="text-gray-600">Following</p>
              <p className="text-lg font-medium text-gray-800">{user.following}</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-medium rounded-lg px-4 py-2"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">My Repositories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-700">{repo.description || "Not Provided"}</p>
              <p className="mt-2 text-sm text-gray-500">
                Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
              </p>
              <div className="mt-2">
                {repo.language && (
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-md ${getLanguageColor(
                      repo.language
                    )}`}
                  >
                    {repo.language}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const userResponse = await axios.get('https://api.github.com/users/agrawal-2005');
  const reposResponse = await axios.get('https://api.github.com/users/agrawal-2005/repos');
  return { user: userResponse.data, repos: reposResponse.data };
};
