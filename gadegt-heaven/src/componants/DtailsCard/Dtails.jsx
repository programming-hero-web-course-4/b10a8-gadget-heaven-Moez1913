import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { addTostoredCart, addTostoredList } from '../../utility/addToDB';
import { MdAttachMoney } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";


const Dtails = () => {
  const { productId } = useParams();
  const id = parseInt(productId);
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === id);

  
  const { product_title, product_image,price,availability,description,specification,warranty,rating } = product;

  const handelCart = (id,product_title) => {
    
    addTostoredCart(id,product_title);

  }

  const handelWhisList = (id,product_title) => {
    addTostoredList(id,product_title);
  }



  return (
    <section>
      <div className="text-center bg-[#9538E2] h-[300px] mx-auto  p-5 border-b-2 border-solid border-base-400 rounded-b-lg">
        <h1 className="font-bold text-xl text-white mb-6">Product Detials</h1>
        <p className="text-sm text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

      </div>

      <div className="p-5 h-[360] w-[800px] border-2 border-solid border-base-400 rounded-lg bg-white  relative   bottom-40  mx-auto flex">
        <div className="flex gap-5">
          <img
            src={product_image}
            className="h-80 w-60 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-xl  text-black font-bold">{product_title}</h1>
            <p className="flex items-center text-gray-600  font-bold">
              Price:<MdAttachMoney /> {price}
            </p>
          <button className='h-7 border-2 border-solid border-[#309C08] rounded-[32px] text-[#309C08] bg-green-300 px-2'>
            {
              availability ? 'In Stock' : 'Out of Stock'
            }
            </button>
            <p className='text-sm text-gray-500'> {description}</p>
            <div>
              <h3>Specification:</h3>
              <ol className="list-decimal pl-5 text-sm text-gray-500">
                {
                specification.map((spec,index) => <li key={index}>{spec}</li>)
                }
              </ol>
            </div>
            <h3>
              Warranty:{warranty}
            </h3>
            <h2>Rating</h2>
            <p>Rating:{rating}</p>

            <div className='mt-1 flex items-center gap-2'>
              <button onClick={() => { handelCart(id,product_title) }} className="h-8 flex items-center justify-center w-36 border-2 border-solid  border-purple-600 rounded-[32px] text-gray-200 bg-purple-600">Add To Cart <IoCartOutline className="ml-2" /></button>

              <button onClick={() => { handelWhisList(id,product_title) }} className="h-8 items-center w-8 pl-[6px] border-2 border-solid border-purple-600 rounded-full"><CiHeart/></button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Dtails;