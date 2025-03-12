import React from 'react';
import { Helmet } from 'react-helmet';

const Help = () => {
    return (
        <>
            <Helmet>
                <title>Help - Gadget Heaven</title>
            </Helmet>
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Help & Support</h1>
                
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">How do I track my order?</h3>
                            <p className="text-gray-600">You can track your order by logging into your account and visiting the "Orders" section.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">What is the return policy?</h3>
                            <p className="text-gray-600">We offer a 30-day return policy on all items. Please visit our return policy page for more details.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">How do I contact customer support?</h3>
                            <p className="text-gray-600">You can contact our customer support team via email at support@gadgetheaven.com or call us at (123) 456-7890.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-4">If you have any questions or need further assistance, please feel free to reach out to us:</p>
                    <p className="text-gray-600"><strong>Email:</strong> support@gadgetheaven.com</p>
                    <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
                    <p className="text-gray-600"><strong>Address:</strong> 123 Gadget Heaven St, Tech City, TX 12345</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Support Form</h2>
                    <form className="space-y-4  w-[400px] mx-auto">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button className="w-full bg-purple-600 text-white p-2 rounded font-semibold hover:bg-purple-700" type="submit">Submit</button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default Help;