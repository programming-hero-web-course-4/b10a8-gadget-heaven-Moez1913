import Banner from "../Banner/Banner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from "react-router-dom";
import Catagory from "../catagory/Catagory";
import { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet';
import './Tabs.css';

const Home = () => {
    const [laptops, setLaptops] = useState([]);
    const [phones, setPhones] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [smartWatches, setSmartWatches] = useState([]);
    const [iphon, setIphon] = useState([]);
    const [active, setActive] = useState(0);
    const [mackBook, setMackBook] = useState([]);
    const allProduct = useLoaderData();
    const cardsSectionRef = useRef(null);

    useEffect(() => {
        const filteredLaptops = allProduct.filter(item => item.category === 'Laptops');
        setLaptops(filteredLaptops);

        const filteredPhones = allProduct.filter(item => item.category === 'Phones');
        setPhones(filteredPhones);

        const filreredAccessories = allProduct.filter(item => item.category === 'Accessories');
        setAccessories(filreredAccessories);

        const smartwatch = allProduct.filter(item => item.category === 'Smartwatch');
        setSmartWatches(smartwatch);

        const mackBook = allProduct.filter(item => item.category === 'MacBook');
        setMackBook(mackBook);

        const iphons = allProduct.filter(item => item.category === 'iPhone');
        setIphon(iphons);
    }, [allProduct]);

    const scrollToCardsSection = () => {
        cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Helmet>
                <title>Home - Gadget Heaven</title>
            </Helmet>
            <Banner setActive={setActive} scrollToCardsSection={scrollToCardsSection}></Banner>
            <Tabs selectedIndex={active} onSelect={index => setActive(index)}>
                <section className="flex flex-row justify-between gap-5 w-11/12 mx-auto" ref={cardsSectionRef}>
                    <div className="flex flex-col gap-5 w-60 h-[400px] p-5 border-2 border-solid border-base-300 rounded-lg">
                        <Tab className="tab">
                            <button
                                className={`btn w-48 h-12 border-2 border-solid border-base-300 rounded-[32px] ${active === 0 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}
                            >
                                All Product
                            </button>
                        </Tab>
                        <Tab className="tab">
                            <button
                                className={`btn w-48 h-12 border-2 border-solid border-base-300 rounded-[32px] ${active === 1 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}
                            >
                                Laptops
                            </button>
                        </Tab>
                        <Tab className="tab">
                            <button
                                className={`btn w-48 h-12 border-2 border-solid border-base-300 rounded-[32px] ${active === 2 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}
                            >
                                Phones
                            </button>
                        </Tab>
                        <Tab className="tab">
                            <button
                                className={`btn w-48 h-12 border-2 border-solid border-base-300 rounded-[32px] ${active === 3 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}
                            >
                                Accessories
                            </button>
                        </Tab>
                        <Tab className="tab">
                            <button
                                className={`btn w-48 h-12 border-2 border-solid border-base-300 rounded-[32px] ${active === 4 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}
                            >
                                Smart Watches
                            </button>
                        </Tab>
                        <Tab className="tab">
                            <button
                                className={`btn w-48 h-12 border-2 border-solid border-base-300 rounded-[32px] ${active === 5 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}
                            >
                                MacBook
                            </button>
                        </Tab>
                        <Tab className="tab">
                            <button
                                className={`btn w-48 h-12 border-2 border-solid border-base-300 rounded-[32px] ${active === 6 ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}
                            >
                                iPhone
                            </button>
                        </Tab>
                    </div>

                    <div className="grid gap-4 col-span-3">
                        <TabPanel>
                            <div className='grid grid-cols-3 object-cover gap-3'>
                                {allProduct.map(product => <Catagory key={product.product_id} product={product}></Catagory>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 object-cover gap-3'>
                                {laptops.map(product => <Catagory key={product.product_id} product={product}></Catagory>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 object-cover gap-3'>
                                {phones.map(product => <Catagory key={product.product_id} product={product}></Catagory>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 object-cover gap-3'>
                                {accessories.map(product => <Catagory key={product.product_id} product={product}></Catagory>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 object-cover gap-3'>
                                {smartWatches.map(product => <Catagory key={product.product_id} product={product}></Catagory>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 object-cover gap-3'>
                                {mackBook.map(product => <Catagory key={product.product_id} product={product}></Catagory>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 object-cover gap-3'>
                                {iphon.map(product => <Catagory key={product.product_id} product={product}></Catagory>)}
                            </div>
                        </TabPanel>
                    </div>
                </section>
            </Tabs>
        </div>
    );
};

export default Home;