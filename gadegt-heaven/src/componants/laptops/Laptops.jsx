import { useState,useEffect } from 'react';
import Laptop from './Laptop';
import Catagory from '../catagory/Catagory';


const Laptops = () => {
    
    const [laptops, setLaptops] = useState([]);
    const [phons, setPhons] = useState([]);

    useEffect(() => {
        fetch('/catagory.json')
            .then(response => response.json())
            .then(data => {
                const filteredLaptops = data.filter(item => item.category === 'Laptops');
                setLaptops(filteredLaptops);
               
            });
    }, []);
    
    return (
        <div className='grid grid-cols-3 object-cover gap-3'>
           {
            laptops.map(catagory=><Catagory catagory={catagory}></Catagory>)
           }
        
        </div>
    );
};

export default Laptops;