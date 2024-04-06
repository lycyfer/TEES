import { useDispatch, useSelector } from "react-redux"
import { store } from "../../redux/store"
import FavoriteCartProduct from "../favoriteCartProduct/favoriteCartProduct"
import './favoriteProduct.css'
import { useState } from 'react';
import { formatType } from "../utils/utrils";

const FavoriteProduct = () => {
    const dispatch = useDispatch()
    const [favoriteType, setFavoriteType] = useState('all');
    const changeTypeProduct = (name) => {
        setFavoriteType(name)
    }
    // const favoriteProducts = useSelector((store) => store.productsState.favoriteProducts)
    // let favoriteProduct = favoriteProducts.filter((item) => item.id)

    // const type = ['all', ...new Set(favoriteProducts.map((item) => item.fields.type))]

    // favoriteProduct = favoriteProducts === 'all' ? favoriteProducts.filter((item) => item.fields.visible === 'product') : favoriteProducts.filter((item) => item.fields.type === favoriteType)
    const favoriteProducts = useSelector((store) => store.productsState.favoriteProducts);

    // Filter favoriteProducts based on the current favoriteType
    const favoriteProduct = favoriteType === 'all'
        ? favoriteProducts.filter((item) => item.fields.visible === 'product')
        : favoriteProducts.filter((item) => item.fields.type === favoriteType);

    // Get unique types from favoriteProducts, excluding 'all'
    const type = ['all', ...new Set(favoriteProducts.map((item) => item.fields.type))]


    const testType = type.map((item, count) => {
        // console.log(item, count)
        const btnClass = item === favoriteType ? 'type_filter_favorite active_favorite' : 'type_filter_favorite'
        return (
            <article className='productList-type-favorite'>
                <button onClick={() => changeTypeProduct(item)} className={btnClass} key={count}>
                    {formatType(item)}
                </button>
            </article>
        )
    })
    return (
        <div className="favorite">
            <span>
                <b className='logo'>Twilight | Favorite</b>
            </span>
            <div className="line"></div>
            <div className="favorite-list">
                <div className="favorite-item-filter">
                    {testType}
                </div>
                <div className="favorite-cart_items">
                    {
                        favoriteProduct.map((item) => {
                            const { id } = item
                            return <FavoriteCartProduct key={id} id={id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FavoriteProduct