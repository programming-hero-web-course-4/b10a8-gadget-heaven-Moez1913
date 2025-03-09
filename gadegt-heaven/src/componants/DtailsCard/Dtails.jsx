
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { addTostoredCart, addTostoredList } from '../../utility/addToDB';
 

const Dtails = () => {
    const {productId}=useParams();
    const id= parseInt(productId);
    const data =useLoaderData();
    const product=data.find((product)=>product.product_id===id);
    console.log(product);
  const{product_title,product_image}=product;
   
   const handelCart=(id)=>{
    addTostoredCart(id);  
   }

   const handelWhisList=(id)=>{
    addTostoredList(id);
   }

   
   
    return (
       <section> 
        <div>
           
        </div>

        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img
     src={product_image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{product_title}</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div>
      <button onClick={()=>{handelCart(id)}} className="btn btn-primary">Add To Cart</button>
      <button onClick={()=>{handelWhisList(id)}} className="btn btn-primary">WhisList</button>
      </div>
    </div>
  </div>
</div>
       </section>
    );
};

export default Dtails;