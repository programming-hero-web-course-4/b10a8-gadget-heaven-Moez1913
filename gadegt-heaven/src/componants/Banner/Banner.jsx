import React from 'react';
import img from '../../../public/assets/banner.jpg'
const Banner = ({setActive,scrollToCardsSection}) => {

    const handelClick=()=>{
        setActive(0);
        scrollToCardsSection();
    }
    return (
        <div>
         
        <section>
            <div  className="text-center bg-[#9538E2] h-[500px] max-w-7xl mx-auto  p-5 border-b-2 border-solid border-base-400 rounded-b-lg">
                <h1 className="font-bold text-5xl text-white mb-6">Upgrade Your Tech Accessorize With <br /> Gadget Heaven Accessories</h1>
                <p className="font-normal text-sm text-white mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button onClick={handelClick} className="btn h-10  w-36 rounded-[32px] bg-white text-purple-600 ">Shop Now</button>
            </div>
            <div className="">
                <img className=" p-5 border-2 border-solid border-base-400 rounded-lg backdrop-blur-md  relative   bottom-56 w-9/12 h-[500px] object-cover mx-auto " src={img} alt="" />
            </div>
        </section>  
        </div>
    );
};

export default Banner;