import React from 'react';

const CartList = ({product}) => {
    const{product_title}=product;
    return (
        <div className="card card-side bg-base-100 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product_title}</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
    );
};

export default CartList;