import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCart, getStoredWhisList } from '../../utility/addToDB';
import CartList from './CartList';
import { MdAttachMoney } from "react-icons/md";
import { Helmet } from 'react-helmet';
import '../Home/Tabs.css';

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [whisList, setWhisList] = useState([])
    const allProduct = useLoaderData();
    const navegate=useNavigate();
    useEffect(() => {
        const storedCartList = getStoredCart();
        const addedToCart = allProduct.filter((product) => storedCartList.includes(product.product_id));
        setCartList(addedToCart);

    }, [])

    useEffect(() => {
        const storedWhisList = getStoredWhisList();
        const addwhisList = allProduct.filter(product => storedWhisList.includes(product.product_id));
        setWhisList(addwhisList)
    }, [])

    const totalPrice = cartList.reduce((total, product) => total + product.price, 0);
    const handelPurchase = () => {
        setCartList([]);
        localStorage.removeItem('cart');
    }

    const handelClose=()=>{
        handelPurchase();
        navegate('/');
    }

    const cart = document.getElementById('cart');
    const wishlist = document.getElementById('wishlist');
    const handelCart = () => {
        cart.style.backgroundColor = 'white';
        cart.style.color = 'black';
        wishlist.style.backgroundColor = 'purple';
        wishlist.style.color = 'white';

    }

    const handelWishlist = () => {
        wishlist.style.backgroundColor = 'white';
        wishlist.style.color = 'black';
        cart.style.backgroundColor = 'purple';
        cart.style.color = 'white';
    }

    const sortByPrice = () => {
        const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCartList);
    };



    return (

        <Tabs>
            <Helmet>
                <title>DashBoard - Gadget Heaven</title>
            </Helmet>
            <div className="text-center bg-[#9538E2]  ">
                <h1 className="font-bold text-5xl text-white mb-6">Dashboard</h1>
                <p className="font-normal text-sm text-white mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

                <div className='p-5'>
                    <Tab className="tab"><button onClick={handelCart} id='cart' className='h-10 w-40 bg-white border-2 border-solid border-base-300 rounded-[32px] text-purple-600'>Cart</button></Tab>
                    <Tab className="tab"><button onClick={handelWishlist} id='wishlist' className='h-10 w-40 border-2 border-solid border-base-300 rounded-[32px] text-base-300'>Wishlist</button></Tab>
                </div>





            </div>


            <TabPanel>
                <div>
                    <div className='flex items-center justify-between my-8 max-w-6xl mx-auto'>
                        <h3 className='text-block text-xl font-bold'>Cart</h3>
                        <div className='flex items-center gap-3'>
                            <h1 className='text-block text-xl font-bold flex items-center'>Total cost:{totalPrice} <MdAttachMoney /></h1>
                            <button onClick={sortByPrice} className='h-10 w-40 font-bold border-2 border-solid border-purple-600 rounded-[32px] text-purple-600'>Sort by Price</button>

                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className='h-10 w-32 font-bold border-2 border-solid border-purple-600 rounded-[32px] text-purple-600' onClick={() => document.getElementById('my_modal_1').showModal()} disabled={totalPrice==0}>Purchase</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box flex flex-col items-center justify-items-center">
                                    <img src="../../../public/assets/Group.png" alt="" />
                                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                                    <p className="py-4">Thanks for Purchasing</p>
                                    <p className='text-xm flex items-center'>Total:{totalPrice} <MdAttachMoney /></p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button onClick={handelClose} className="h-8 w-60 bg-base-300 text-blak font-bold border border-solid rounded-[32px]">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className='flex flex-col  max-w-6xl mx-auto'>
                        {
                            cartList.map((product, index) => <CartList key={index} product={product}></CartList>)
                        }
                    </div>
                </div>
            </TabPanel>
            <TabPanel>

                <div>
                    <div className='flex items-center justify-between my-8 max-w-6xl mx-auto'>
                        <h3 className='text-block text-xl font-bold'>Wishlist</h3>

                    </div>
                    <div className='flex flex-col  max-w-6xl mx-auto'>
                        {
                            whisList.map(product => <CartList key={product.product_id} product={product}></CartList>)
                        }
                    </div>
                </div>

            </TabPanel>
        </Tabs>

    );
};

export default Dashboard;