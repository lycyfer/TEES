import './main.css'
import { categoriesCart } from '../../products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../redux/store'
import Home from '../home/home'
import like from './klipartz.com.png'

/**
 * Основной компонент, отображающий категории товаров и новые поступления.
 * @param {object} props - Реквизит, передаваемый основному компоненту.
 * @returns {JSX.Element} Основной компонент пользовательского интерфейса.
 */

const Main = (props) => {

    // Redux hooks
    let dispatch = useDispatch();
    const products = useSelector((store) => store.productsState.products);

    // Filter products
    const product = products.filter((item) => item.fields.featured === true);
    const productCategory = products.filter((item) => item.fields.categories === true);

    // Map categories
    const listCategories = productCategory.map((item) => {
        const { name, image } = item.fields;
        return (
            <div className='cart-categories'>
                <div className="cart-categories_item">
                    <img src={image} alt="" className='cart-categories_item-image' />
                </div>
                <p className='cart-categories_item-name'>{name}</p>
            </div>
        )
    });

    // Map new arrivals
    const listArrivals = product.map((item) => {
        const { name, price, image, description } = item.fields;
        return (
            <div className='cart-arrivals'>
                <div className='cart-arrivals_item'>
                    <img src={image} alt="" className='cart-arrivals_item-image' />
                </div>
                <p className='cart-arrivals_item-name'>{name}</p>
                <p className='cart-arrivals_item-price'>
                    {price} ₽
                </p>
                <div className='cart-arrivals_more'>
                    <div className='cart-arrivals_item-description'>
                        {description}
                    </div>
                    <div className='flex-button'>
                        <button className='cart-arrivals_button'>Add to Cart</button>
                        <button className='cart-arrivals_button-like'><img src={like} alt="" className='like' /></button>
                    </div>
                </div>
            </div>
        )
    });

    // Main component UI
    return (

        <div>
            <Home />
            <div className="main-container">
                <div className="categories">
                    <h2>Shop by categories</h2>
                    <div className='categories-list'>
                        {listCategories}
                    </div>
                </div>
                <div className='arrivals'>
                    <h2>New arrivals</h2>
                    <div className='arrivals-list'>
                        {listArrivals}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main