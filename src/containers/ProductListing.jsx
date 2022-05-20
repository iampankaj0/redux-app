import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    const products = useSelector((state) => state);
    console.log("products:", products);

    // DISPATCH THE PRODUCTS API DATA
    const dispatch = useDispatch();


    const fetchproducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('Err', err)
            })
        dispatch(setProducts(response.data));
        console.log(response.data);
    }


    useEffect(() => {
        fetchproducts()
    }, []);



    return (
        <div className='ui grid container' style={{ "height": "100%" }}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing