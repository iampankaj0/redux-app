import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products)
    console.log(products);

    return (
        <div className='product_component'>
            <div className="row">
                {
                    products.map((products) => {
                        const { id, title, category, image } = products;
                        return (
                            <div className="col-md-4 col-lg-3 my-3" key={id}>
                                <Link to={`products/${id}`}>
                                    <div className="card h-100" style={{ 'borderColor': 'darkblue' }}>
                                        <img className="card-img-top" src={image} alt='Title' />
                                        <div className="card-body">
                                            <h4 className="card-title">{title}</h4>
                                            <p className="card-text">{category}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ProductComponent