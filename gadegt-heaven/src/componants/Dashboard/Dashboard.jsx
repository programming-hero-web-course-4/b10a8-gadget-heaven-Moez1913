import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCart, getStoredWhisList } from '../../utility/addToDB';
import CartList from './CartList';
import WhisList from './WhisList';

const Dashboard = () => {
    const[cartList,setCartList]=useState([]);
    const[whisList,setWhisList]=useState([])    
    const allProduct=useLoaderData();
    useEffect(()=>{
        const storedCartList=getStoredCart();
       const addedToCart=allProduct.filter((product)=>storedCartList.includes(product.product_id));
         setCartList(addedToCart);
      
    },[])

    useEffect(()=>{
        const storedWhisList=getStoredWhisList();
        const addwhisList=allProduct.filter(product=>storedWhisList.includes(product.product_id));
        setWhisList(addwhisList)
    },[])

   
    return (

        <Tabs>
            <div className="text-center bg-[#9538E2]  ">
                <h1 className="font-bold text-5xl text-white mb-6">Dashboard</h1>
                <p className="font-normal text-sm text-white mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <TabList>
                  <Tab>Title 1</Tab>
                   
                   <Tab>Title 2</Tab>
                   </TabList>
                
            </div>


            <TabPanel>
                 {
                    cartList.map((product,index)=><CartList key={index} product={product}></CartList>)
                 }
            </TabPanel>
            <TabPanel>
                
                    {
                    whisList.map(product=><CartList key={product.product_id} product={product}></CartList>)
                    }
                
            </TabPanel>
        </Tabs>

    );
};

export default Dashboard;