import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync } from "../../products/productActions";
import { addProductToCart } from "../../products/productSlice";
import ProductDetails from "./productDetails";
import { useState, useEffect } from "react";

const ProductContainer = () => {
    const [productFields, setProductFields] = useState(null);
    const [currentSize, setCurrentSize] = useState(null);
    const dispatch = useDispatch();
    const { id } = useParams();
    const products = useSelector((state) => state.productsState.products);
    const status = useSelector((state) => state.productsState.status);
    const error = useSelector((state) => state.productsState.error);

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    useEffect(() => {
        if (products && products.length > 0) {
            const product = products.find((item) => item.id === id);
            if (product) {
                setProductFields(product.fields);
            }
        }
    }, [products, id]);

    const handleAddToCart = () => {
        if (currentSize) {
            dispatch(addProductToCart({
                productId: id,
                size: currentSize
            }));
        } else {
            alert('Пожалуйста, выберите размер');
        }
    };

    return (
        <div>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'failed' && <div>Error: {error}</div>}
            {productFields && (
                <ProductDetails
                    fields={productFields}
                    currentSize={currentSize}
                    setCurrentSize={setCurrentSize}
                    handleAddToCart={handleAddToCart}
                />
            )}
        </div>
    );
};


export default ProductContainer