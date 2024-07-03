import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-gray-800 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-12 lg:items-center">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="React Development"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
                            Passionate React Development
                        </h2>
                        <p className="mt-6 text-gray-700 leading-relaxed">
                            Our team of dedicated developers is committed to creating exceptional web
                            experiences using React. We thrive on building interactive, user-friendly
                            interfaces that bring your ideas to life.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            With a focus on innovation and performance, we leverage the latest technologies
                            and best practices to deliver high-quality solutions tailored to your needs.
                            Whether it's a complex application or a simple website, we ensure each project
                            exceeds expectations.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Join us on our journey to build the future of web development, one React component
                            at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
