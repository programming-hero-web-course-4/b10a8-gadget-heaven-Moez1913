

const Laptop = ({laptop}) => {
    const{product_title,product_image}=laptop
    return (
        <div className="card bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">ssss</button>
    </div>
  </div>
</div>
    );
};

export default Laptop;