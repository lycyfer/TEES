import { ref, onValue, set } from 'firebase/database';
import { dataBase } from "../firebase";

export const fetchProduct = () => {

    if (!dataBase) {
        throw new Error('Database is not initialized');
    }

    return new Promise((resolve, reject) => {
        const productsRef = ref(dataBase, "products");
        onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            const products = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            resolve(products);
        }, (error) => {
            reject(error);
        });
    });
};