import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-7xl font-bold text-gray-900">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p className="mt-3 text-gray-600">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-block rounded-lg bg-black px-6 py-3 text-white font-medium transition hover:bg-gray-800"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;