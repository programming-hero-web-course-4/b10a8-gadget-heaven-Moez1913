import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <Helmet>
                <title>Error - Gadget Heaven</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                    <h2 className="text-4xl font-bold text-red-600 mb-4">Oops!</h2>
                    <p className="text-lg text-gray-700 mb-4">Something went wrong.</p>
                    {error && <p className="text-sm text-gray-500 mb-4">{error.message}</p>}
                    <Link to="/" className="text-purple-600 hover:underline">
                        Go back to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;