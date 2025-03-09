import React, { useEffect, useState } from 'react';
import Catagory from '../catagory/Catagory';

const Phons = () => {
    const[phons, setPhons] = useState([])
    useEffect(()=>{
        fetch('/catagory.json')
        .then(res=>res.json())
        .then(data=>{
            const filteredPhons = data.filter(item=>item.category === 'Phones')
            setPhons(filteredPhons) 
        })
    },[])
    return (
        <div>
            {
            phons.map(catagory=><Catagory catagory={catagory}></Catagory>)
            }
        </div>
    );
};

export default Phons;