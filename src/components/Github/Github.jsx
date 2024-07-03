import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md mx-auto">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <img
              src={data.avatar_url}
              alt="GitHub Avatar"
              className="rounded-full border-4 border-gray-300 w-32 h-32"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800">{data.name}</h1>
            <p className="text-gray-600">@{data.login}</p>
            <p className="mt-4 text-gray-700">{data.bio}</p>
          </div>
          <div className="mt-6 flex justify-around text-center">
            <div>
              <p className="text-gray-600">Repositories</p>
              <p className="text-lg font-medium text-gray-800">{data.public_repos}</p>
            </div>
            <div>
              <p className="text-gray-600">Followers</p>
              <p className="text-lg font-medium text-gray-800">{data.followers}</p>
            </div>
            <div>
              <p className="text-gray-600">Following</p>
              <p className="text-lg font-medium text-gray-800">{data.following}</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-medium rounded-lg px-4 py-2"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/agrawal-2005");
  return response.json();
};
