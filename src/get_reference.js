import { getDatabase, ref, set } from "firebase/database";
// import { products } from "./products/productsData";

const database = getDatabase()

// writeData = (id, featured, categories, type, price, name, description, sizes, image) => {
//     set(ref(database, 'products/' + id), {
//         fields: {
//             featured: featured,
//             categories: categories,
//             type: type,
//             price: price,
//             name: name,
//             description: description,
//             image: image,
//             sizes: [sizes]
//         }
//     })
// }

function writeProductsToFirebase(products) {
    const db = getDatabase();
    products.forEach(product => {
        // Проверяем, определены ли все необходимые свойства
        if (product.fields.name && product.fields.description && product.fields.price) {
            set(ref(db, 'products/' + product.id), {
                name: product.fields.name,
                description: product.fields.description,
                price: product.fields.price,
                // Добавьте другие свойства по необходимости
            })
                .then(() => {
                    console.log('Продукт с ID ' + product.id + ' успешно сохранен.');
                })
                .catch((error) => {
                    console.error('Ошибка при записи продукта с ID ' + product.id + ': ', error);
                });
        } else {
            console.error('Продукт с ID ' + product.id + ' содержит неопределенные свойства.');
        }
    });
}

export default writeProductsToFirebase