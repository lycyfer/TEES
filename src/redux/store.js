import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../products/productSlice'

/**
 * @constant
 * @name store
 * @description Инициализирует Redux хранилище с использованием productsReducer.
 */
/**
 * @function
 * @name configureStore
 * @description Функция, которая настраивает и инициализирует Redux хранилище.
 * @param {Object} config - Конфигурация хранилища.
 * @param {Object} config.reducer - Редюсеры, используемые в хранилище.
 * @returns {Object} Возвращает инициализированное Redux хранилище.
 */

export const store = configureStore({
    reducer: {
        productsState: productsReducer,
    },
});