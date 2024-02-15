import { useDispatch, useSelector } from "react-redux"
import { store } from "../../redux/store"
import './singleCartProduct.css'
import { decreaseCartProductCount, increaseCartProductCount, removeProductFromCart } from "../../products/productSlice";

const SingleCartProduct = ({ id }) => {
    const cartProducts = useSelector((store) => store.productsState.products);
    const cartProduct = cartProducts.find((item) => item.id === id)
    let dispatch = useDispatch()
    const { image, name, price } = cartProduct.fields

    return (
        <div className="singleCartProduct">
            <div className="singleCartProduct-item">
                <img src={image} alt="" className="singleCartProduct-item-img" />
            </div>
            <div className="singleCartProduct-cart-info">
                <div className="singleCartProduct-item-name">{name}</div>
                <p className="singleCartProduct-item-price">{price}</p>
                <button
                    onClick={() => dispatch(removeProductFromCart(id))}
                    className="singleCartProduct-item-btn">
                    remove
                </button>
            </div>
            <div>
                <button className="singleCartProduct-item-up "
                    onClick={() => dispatch(increaseCartProductCount(id))}>
                    <i className="singleCartProduct-up arrow up"></i>
                </button>
                <p className="singleCartProduct-item-amount">{cartProduct.count}</p>
                <button className="singleCartProduct-item-down"
                    onClick={() => dispatch(decreaseCartProductCount(id))}>
                    <i className="singleCartProduct-down arrow down"></i>
                </button>
            </div>
        </div>
    )
}

export default SingleCartProduct