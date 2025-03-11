
import { Link, NavLink } from 'react-router-dom';
const Catagory = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  return (
    <div className="p-5 bg-base-100 w-80 shadow-xl border-2 border-solid border-base-300 rounded-lg ">
      <figure>
        <img className='w-72 h-48 object-cover border-2 border-solid border-base-300 rounded-lg'
          src={product_image}
          alt="Shoes" />
      </figure>
      <div className="card-body items-start">
        <h2 className="card-title">{product_title}</h2>
        <p>Price:{price}</p>
        <Link to={`/dtails/${product_id}`} >  <button className="btn bg-white text-purple-500 border-2 border-solid border-purple-600 rounded-3xl w-40 h-12">View Details</button></Link>
      

      </div>
    </div>
  );
};

export default Catagory;