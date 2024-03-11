import { createSlice } from '@reduxjs/toolkit';
import { products } from './productsData';
import { getStorageItem, setStorageItem } from '../components/utils/utrils';

/**
 * @constant
 * @name initialState
 * @description Инициализирует начальное состояние для productSlice.
 * @property {Array} products - Массив продуктов.
 * @property {boolean} showCart - Флаг, указывающий, отображать ли корзину.
 * @property {boolean} showNavBar - Флаг, указывающий, отображать ли навигационную панель.
 * @property {boolean} showCheckoutModal - Флаг, указывающий, отображать ли модальное окно оформления заказа.
 * @property {Array} cartProducts - Массив продуктов в корзине.
 */

const initialState = {
    products,
    showCart: false,
    showNavBar: false,
    showCheckoutModal: false,
    cartProducts: getStorageItem('cartProducts'),
}

/**
 * @constant
 * @name productSlice
 * @description Создает slice для работы с продуктами.
 */

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {


        /**
         * @function
         * @name categoriesCart
         * @description Функция-редюсер, которая возвращает категории продуктов.
         * @param {Object} state - Текущее состояние.
         * @returns {Object} Возвращает категории продуктов.
         */

        categoriesCart: (state) => {
            return state.products.find((item) => item.categories === true)
        },

        /**
         * @function
         * @name addProductToCart
         * @description Функция-редюсер, которая добавляет продукт в корзину.
         * @param {Object} state - Текущее состояние.
         * @param {Object} action - Действие.
         */

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

        /**
         * @function
         * @name displayCart
         * @description Функция-редюсер, которая отображает корзину.
         * @param {Object} state - Текущее состояние.
         */

        displayCart: (state) => {
            state.showCart = !state.showCart;
        },

        /**
         * @function
         * @name decreaseCartProductCount
         * @description Функция-редюсер, которая уменьшает количество продукта в корзине.
         * @param {Object} state - Текущее состояние.
         * @param {Object} action - Действие.
         */

        decreaseCartProductCount: (state, action) => {
            state.cartProducts.forEach((item) => {
                if (item.id === action.payload) {
                    item.count--;
                }
            });
            setStorageItem('cartProducts', state.cartProducts);
        },

        /**
         * @function
         * @name increaseCartProductCount
         * @description Функция-редюсер, которая увеличивает количество продукта в корзине.
         * @param {Object} state - Текущее состояние.
         * @param {Object} action - Действие.
         */

        increaseCartProductCount: (state, action) => {
            state.cartProducts.forEach((item) => {
                if (item.id === action.payload) {
                    item.count++;
                }
            });
            setStorageItem('cartProducts', state.cartProducts);
        },

        /**
         * @function
         * @name removeProductFromCart
         * @description Функция-редюсер, которая удаляет продукт из корзины.
         * @param {Object} state - Текущее состояние.
         * @param {Object} action - Действие.
         */

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