import model1 from './img/model-demonstrating-earrings-and-ring.jpg'
import './productList.css'
import like from './img/klipartz.com.png'
import SingleProduct from './singleProduct';
import { addProductToCart } from '../../products/productSlice';
import { Link, useParams } from 'react-router-dom';

import { formatType } from '../utils/utrils';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchProductsAsync } from '../../products/productActions';
/**
 * Компонент ProductList, который отвечает за отображение списка товаров.
 * @module ProductList
 */

/**
 * @function
 * @name ProductList
 * @description Функция-компонент, которая рендерит список товаров.
 * @returns {JSX.Element} Возвращает JSX элемент, представляющий список товаров.
 */


const ProductList = () => {


    const [priceInputVal, setPriceInputVal] = useState(50);
    const [searchVal, setSearchVal] = useState('')
    const [productType, setProductType] = useState('all');


    let { id } = useParams
    // Redux hooks
    let dispatch = useDispatch();
    const products = useSelector((state) => state.productsState.products);
    const status = useSelector((state) => state.productsState.status);
    const error = useSelector((state) => state.productsState.error);
    console.log(products)
    // Filter products
    // let product = products.filter((item) => item.fields.visible === 'product');

    let product = products.filter((item) => item.id && item.fields.visible === 'product')
    let filteredProducts = products.filter((product) => product.fields.categories === false);
    // console.log(product)
    const filterProduct = product.filter((item) => {
        return (item.fields.price / 100).toFixed(2) < Number(priceInputVal)
    })
    let testId = products.filter((item) => item.id)
    // console.log(testId)

    /**
     * @function
     * @name changeTypeProduct
     * @description Функция, которая изменяет тип товара.
     * @param {string} name - Имя типа товара.
     */
    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);
    const changeTypeProduct = (name) => {
        // console.log(name)
        setProductType(name)
    }

    const type = ['all', ...new Set(products.map((item) => item.fields.type))]
    // console.log(type)

    product = productType === 'all' ? products.filter((item) => item.fields.visible === 'product') : products.filter((item) => item.fields.type === productType && item.fields.visible === 'product')

    // console.log(product)

    const testType = type.map((item, count) => {
        // console.log(item, count)
        const btnClass = item === productType ? 'type_filter active' : 'type_filter'
        return (
            <article className='productList-type'>
                <button onClick={() => changeTypeProduct(item)} className={btnClass} key={count}>
                    {formatType(item)}
                </button>
            </article>
        )
    })




    const productList = product.map((item) => {
        const { name, price, image, description } = item.fields;
        // console.log(testId.id)
        return (
            <Link to={`/product/${item.id}`} className='productList-arrivals'>
                <div className='cart-productList'>
                    <img src={image} alt="" className='cart-productList-image' />
                </div>
                <p className='cart-productList-name'>{name}</p>
                <p className='cart-productList-price'>
                    {price} ₽
                </p>
                <div className='cart-arrivals_more'>
                    <div className='cart-productList-description'>
                        {description}
                    </div>
                    {/* <div className='flex-button'>
                        <button onClick={() => dispatch(addProductToCart(id))} className='cart-productList-button'>Add to Cart</button>
                        <button className='cart-productList-like'><img src={like} alt="" className='like' /></button>
                    </div> */}
                </div>
            </Link>
        )
    });

    // const [priceInputVal, setPriceInputVal] = useState(50);
    // const [searchVal, setSearchVal] = useState('')
    // const [productType, setProductType] = useState('all');


    // let { id } = useParams
    // let dispatch = useDispatch();
    // let products = useSelector((store) => store.productsState.products);

    // console.log(products)

    // let product = products.filter((item) => item.id)

    // const filterProduct = product.filter((item) => {
    //     return (item.fields.price / 100).toFixed(2) < Number(priceInputVal)
    // })
    // let testId = products.filter((item) => item.id)

    // const changeTypeProduct = (name) => {
    //     setProductType(name)
    // }

    // const type = ['all', ...new Set(products.map((item) => item.fields.type))]
    // product = productType === 'all' ? products.filter((item) => item.fields.visible === 'product') : products.filter((item) => item.fields.type === productType)
    // const testType = type.map((item, count) => {
    //     const btnClass = item === productType ? 'type_filter active' : 'type_filter'
    //     return (
    //         <article className='productList-type'>
    //             <button onClick={() => changeTypeProduct(item)} className={btnClass} key={count}>
    //                 {formatType(item)}
    //             </button>
    //         </article>
    //     )
    // })
    // const dispatch = useDispatch();
    // const products = useSelector((state) => state.productsState.products);
    // const status = useSelector((state) => state.productsState.status);
    // const error = useSelector((state) => state.productsState.error);
    // console.log(products)
    // console.log(products[1].id)
    // console.log(status)
    // console.log(error)
    // const [priceInputVal, setPriceInputVal] = useState(50);
    // const [searchVal, setSearchVal] = useState('');
    // const [productType, setProductType] = useState('all');

    // useEffect(() => {
    //     dispatch(fetchProductsAsync());
    // }, [dispatch]);

    // const changeTypeProduct = (name) => {
    //     setProductType(name);
    // };

    // const filteredProducts = products.filter((item) => {
    //     return (item.price / 100).toFixed(2) < Number(priceInputVal);
    // });

    // const filteredByTypeProducts = productType === 'all'
    //     ? filteredProducts
    //     : filteredProducts.filter((item) => item.type === productType);

    // const types = ['all', ...new Set(products.map((item) => item.type))];
    // const testType = types.map((item, count) => {
    //     const btnClass = item === productType ? 'type_filter active' : 'type_filter';
    //     return (
    //         <article className='productList-type' key={count}>
    //             <button onClick={() => changeTypeProduct(item)} className={btnClass}>
    //                 {formatType(item)}
    //             </button>
    //         </article>
    //     );
    // });

    // const productList = filteredByTypeProducts.map((item) => {
    //     if (!item || !item.fields || !item.fields.price) {

    //         return null;
    //     }

    //     const { name, price, image, description } = item.fields;

    //     return (
    //         <Link to={`/product/${item.id}`} className='productList-arrivals' key={item.id}>
    //             <div className='cart-productList'>
    //                 <img src={image} alt="" className='cart-productList-image' />
    //             </div>
    //             <p className='cart-productList-name'>{name}</p>
    //             <p className='cart-productList-price'>
    //                 {price} ₽
    //             </p>
    //             <div className='cart-arrivals_more'>
    //                 <div className='cart-productList-description'>
    //                     {description}
    //                 </div>
    //                 {/* <div className='flex-button'>
    //             <button onClick={() => dispatch(addProductToCart(id))} className='cart-productList-button'>Add to Cart</button>
    //             <button className='cart-productList-like'><img src={like} alt="" className='like' /></button>
    //           </div> */}
    //             </div>
    //         </Link>
    //     );
    // });

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="productList">
            {/* <div className='productList-info'>
                <div className='productList-blockInfo'>
                    <p className='productList-title'>All jewelry</p>
                </div>
                <div className='productList-text-second'>
                    <div>
                        <span>
                            <div className='productList-logo'>Twilight</div>
                        </span>
                        <p>
                            <div className='productList-subLogo'>women's accessories store</div>
                        </p>
                    </div>
                </div>
            </div> */}
            <div className="productList-banner">
                <img src={model1} alt="" />
                <div className='productList-banner_info'>
                    <span className='productList-banner_logo'>Twilight</span>
                    <div className='productList-subLogo'>women's accessories store</div>
                </div>
            </div>
            <div className='productList-details'>All jewelry</div>
            <div className='productList-actions'>
                <div className='catalog-filter-items'>
                    <div className='catalog-filter-items'>
                        <span className='catalog-filter-link'>Product type</span>
                        <div className='m-close'></div>
                        <div className='product_type-filter'>
                            {/* <div className='js-ga-filter'>
                                <input type="checkbox" name="All" id='All' className='custom-checkbox' />
                                <label for="All" className='custom-label'>All</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Rings" id='Rings' className='custom-checkbox' />
                                <label for="Rings" className='custom-label'>Rings</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Watch" id='Watch' className='custom-checkbox' />
                                <label for="Watch" className='custom-label'>Watch</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Piercing" id='Piercing' className='custom-checkbox' />
                                <label for="Piercing" className='custom-label'>Piercing</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Earrings" id='Earrings' className='custom-checkbox' />
                                <label for="Earrings" className='custom-label'>Earrings</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Chain" id='Chain' className='custom-checkbox' />
                                <label for="Chain" className='custom-label'>Chain</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Cufflinks" id='Cufflinks' className='custom-checkbox' />
                                <label for="Cufflinks" className='custom-label'>Cufflinks</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Bracelet" id='Bracelet' className='custom-checkbox' />
                                <label for="Bracelet" className='custom-label'>Bracelet</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Necklace" id='Necklace' className='custom-checkbox' />
                                <label for="Necklace" className='custom-label'>Necklace</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Cross" id='Cross' className='custom-checkbox' />
                                <label for="Cross" className='custom-label'>Cross</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Pendant" id='Pendant' className='custom-checkbox' />
                                <label for="Pendant" className='custom-label'>Pendant</label>
                            </div>
                            <div className='js-ga-filter'>
                                <input type="checkbox" name="Brooch" id='Brooch' className='custom-checkbox' />
                                <label for="Brooch" className='custom-label'>Brooch</label>
                            </div> */}
                            {testType}
                            {/* <article className='productList-type'>
                                {type.map((c, ind) => {
                                    console.log(c, ind)
                                    const btnClass =
                                        c === productType ? 'type_filter active' : 'type_filter'
                                    return (
                                        <button
                                            className={btnClass}
                                            key={ind}
                                            onClick={changeTypeProduct(c)}>
                                            {formatType(c)}
                                        </button>
                                    )
                                })}

                            </article> */}
                        </div>
                    </div>
                </div>
                <div className='productList-item'>
                    {productList}
                    {/* {product.map((item) => {
                        return <SingleProduct item={item} key={item.id} />
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default ProductList