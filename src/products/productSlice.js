import { createSlice } from '@reduxjs/toolkit';
import { products } from './productsData';
import { getStorageItem, setStorageItem } from '../components/utils/utrils';

const initialState = {
    products,
    showCart: false,
    showNavBar: false,
    showCheckoutModal: false,
    cartProducts: getStorageItem('cartProducts'),
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        categoriesCart: (state) => {
            return state.products.find((item) => item.categories === true)
        },
        addProductToCart: (state, action) => {
            const product = state.products.find((p) => p.id === action.payload);
            let cartProduct = state.cartProducts.find(
                (cp) => cp.id === action.payload
            );
            if (cartProduct) {
                cartProduct.count++;
            } else {
                cartProduct = product;
                cartProduct['count'] = 1;
                state.cartProducts.push(product);
            }
            setStorageItem('cartProducts', state.cartProducts);
        },
        displayCart: (state) => {
            state.showCart = !state.showCart;
        },
        decreaseCartProductCount: (state, action) => {
            state.cartProducts.forEach((item) => {
                if (item.id === action.payload) {
                    item.count--;
                }
            });
            setStorageItem('cartProducts', state.cartProducts);
        },
        increaseCartProductCount: (state, action) => {
            state.cartProducts.forEach((item) => {
                if (item.id === action.payload) {
                    item.count++;
                }
            });
            setStorageItem('cartProducts', state.cartProducts);
        },

        removeProductFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(
                (cp) => cp.id !== action.payload
            );
            setStorageItem('cartProducts', state.cartProducts);
        },

    }
})

export const {
    categoriesCart,
    addProductToCart,
    displayCart,
    removeProductFromCart,
    increaseCartProductCount,
    decreaseCartProductCount,
    displayCheckoutModal,
    displayNavBar
} = productSlice.actions;


export default productSlice.reducer