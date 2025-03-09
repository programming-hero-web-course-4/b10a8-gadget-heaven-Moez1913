
import { NavLink } from 'react-router-dom';
const Catagory = ({catagory}) => {
    const {product_id,product_title,product_image}=catagory
    return (
        <div className="card bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><NavLink to={`/dtails/${product_id}`}>Details</NavLink></button>
    </div>
  </div>
</div>
    );
};

export default Catagory;