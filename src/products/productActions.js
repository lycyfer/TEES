import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, onValue } from 'firebase/database';
import { dataBase } from '../firebase';

export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const productsRef = ref(dataBase, "products");
            // Проверяем, существует ли ссылка на узел "products"
            if (!productsRef) {
                throw new Error('Reference to "products" node does not exist.');
            }
            const snapshot = await new Promise((resolve, reject) => {
                onValue(productsRef, resolve, reject);
            });
            const data = snapshot.val();
            // Если данных нет, выбрасываем ошибку
            if (!data) {
                throw new Error('No data available for "products" node.');
            }
            const products = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            return products;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);