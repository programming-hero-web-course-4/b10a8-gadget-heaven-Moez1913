import React, { useEffect, useState } from 'react';
import Catagory from '../catagory/Catagory';

const Catagories = () => {
    const [catagories,setCatagories]=useState([]);
    useEffect(()=>{
        fetch('./catagory.json')
        .then(res=>res.json())
        .then(data=>setCatagories(data))
    },[])
    return (
        <div className='grid grid-cols-3 object-cover gap-3'>
           {
            catagories.map(catagory=><Catagory key={catagory.id} catagory={catagory}></Catagory>)
           }
            
            
        </div>
    );
};

export default Catagories;
