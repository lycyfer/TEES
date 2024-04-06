import { createSlice } from '@reduxjs/toolkit';
// import { products } from './productsData';
import { getStorageItem, setStorageItem } from '../components/utils/utrils';
import { fetchProductsAsync } from './productActions';

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
    favoriteType: 'all',
    favoriteProducts: [],
    products: [],
    status: 'idle',
    error: null,
    showCart: false,
    showNavBar: false,
    showCheckoutModal: false,
    cartProducts: getStorageItem('cartProducts'),
    favoriteProducts: getStorageItem('favoriteProducts')
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
            const { productId, size } = action.payload;
            const product = state.products.find((p) => p.id === productId);
            let cartProduct = state.cartProducts.find(
                (cp) => cp.id === productId && cp.size === size
            );
            if (cartProduct) {
                cartProduct.count++;
            } else {
                cartProduct = { ...product, count: 1, size };
                state.cartProducts.push(cartProduct);
            }
            setStorageItem('cartProducts', state.cartProducts);
        },
        setFavoriteType: (state, action) => {
            state.favoriteType = action.payload;
        },
        // addProductToFavorites: (state, action) => {
        //     const productId = action.payload;
        //     const product = state.products.find((p) => p.id === productId);
        //     if (product) {
        //         let favoriteProduct = state.favoriteProducts.find(
        //             (fp) => fp.id === productId
        //         );
        //         // console.log(favoriteProduct)
        //         if (favoriteProduct) {
        //             // console.log(favoriteProduct)
        //             favoriteProduct.count++;
        //         } else {
        //             // console.log(favoriteProduct)

        //             favoriteProduct = { ...product, count: 1 };
        //             state.favoriteProducts.push(favoriteProduct);
        //         }
        //         setStorageItem('favoriteProducts', state.favoriteProducts);
        //     } else {
        //         console.error(`Product with id ${productId} not found in state.products`);
        //     }
        // },


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
            const index = action.payload;
            if (state.cartProducts[index].count > 1) {
                state.cartProducts[index].count--;
            }
            setStorageItem('cartProducts', state.cartProducts);
        },

        increaseCartProductCount: (state, action) => {
            const index = action.payload;
            state.cartProducts[index].count++;
            setStorageItem('cartProducts', state.cartProducts);
        },

        /**
         * @function
         * @name removeProductFromCart
         * @description Функция-редюсер, которая удаляет продукт из корзины.
         * @param {Object} state - Текущее состояние.
         * @param {Object} action - Действие.
         */


        addProductToCart: (state, action) => {
            const { productId, size } = action.payload;
            const product = state.products.find((p) => p.id === productId);
            if (product) {
                // Создаем новый товар с уникальным индексом
                const newCartProduct = { ...product, size, count: 1, index: state.cartProducts.length };
                state.cartProducts.push(newCartProduct);
                setStorageItem('cartProducts', state.cartProducts);
            } else {
                console.error(`Product with id ${productId} not found in state.products`);
            }
        },

        removeProductFromCart: (state, action) => {
            const indexToRemove = action.payload;

            state.cartProducts = state.cartProducts.filter((cp, index) => index !== indexToRemove);
            setStorageItem('cartProducts', state.cartProducts);
        },
        removeProductFromFavorite: (state, action) => {
            state.favoriteProducts = state.favoriteProducts.filter(
                (cp) => cp.id !== action.payload
            );
            setStorageItem('favoriteProducts', state.favoriteProducts);
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProductsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
})

export const {
    categoriesCart,
    addProductToCart,
    addProductToFavorites,
    displayCart,
    removeProductFromCart,
    increaseCartProductCount,
    decreaseCartProductCount,
    displayCheckoutModal,
    displayNavBar,
    removeProductFromFavorite,
    setFavoriteType
} = productSlice.actions;


export default productSlice.reducer