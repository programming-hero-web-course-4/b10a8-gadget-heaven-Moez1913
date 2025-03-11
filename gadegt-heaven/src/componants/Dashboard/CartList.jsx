import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";

const CartList = ({ product }) => {
    const { product_title, product_image, description, price } = product;
    return (
        <div className="card card-side bg-base-100 shadow-sm justify-between p-4 border-2 border-solid border-base-300 rounded-lg mb-5">
            <div className='flex flex-row gap-4'>
                <img className='w-44 h-28 border-2 border-solid border-base-300 rounded-lg object-cover'
                    src={product_image}
                    alt="Product" />
                <div className='flex flex-col'>
                    <h2 className="card-title">{product_title}</h2>
                    <p>{description}</p>
                    <p className='flex gap-1 items-center'>{price} <MdAttachMoney /> </p>
                </div>

            </div>


           

                    <button className="text-3xl text-red-600"><MdOutlineCancel /></button>
           
        </div>
    );
};

export default CartList;