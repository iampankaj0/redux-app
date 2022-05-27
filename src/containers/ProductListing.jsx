import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('Error ', err);
            })
        dispatch(setProducts(response.data));
        // console.log(response.data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    

    return (

        <section className="product_listing">
            <div className="container">
                <ProductComponent />
            </div>
        </section>

    )
}

export default ProductListing