import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetails = () => {

    const product = useSelector((state) => state.product)
    // console.log(product);
    const { productId } = useParams();
    // console.log(productId);

    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log('Error', err)
            })
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== '') fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    const { title, image, price, description, category } = product;

    return (
        <div className="ui grid container mt-5">
            {
                Object.keys(product).length === 0 ? (
                    <div className="d-flex align-items-center justify-content-center">
                        <h1>...अभी रुक थोड़ी देर</h1>
                    </div>
                ) : (
                    <div className="ui segment">
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">AND</div>
                            <div className="middle aligned row">
                                <div className="column lp">
                                    <img className='ui fluid image' src={image} alt={title} />
                                </div>
                                <div className="column rp">
                                    <h1>{title}</h1>
                                    <h2>
                                        <a className="ui teal tag label">${price}</a>
                                    </h2>
                                    <h3 className='ui brown block heander'>{category}</h3>
                                    <p>{description}</p>
                                    <div className="ui vertical animated button" tabIndex='0'>
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default ProductDetails