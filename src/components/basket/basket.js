import { useDispatch, useSelector } from "react-redux";
import { displayCart } from "../../products/productSlice";
import SingleCartProduct from "../singleCartProduct/singleCartProduct";
import './basket.css'



function Basket() {
    const dispatch = useDispatch();
    const showCart = useSelector((store) => store.productsState.showCart);
    const showCartClassName = showCart ? 'cart-overlay show' : 'cart-overlay'
    const cartProducts = useSelector((store) => store.productsState.cartProducts)
    const handleCloseCart = () => {
        dispatch(displayCart());
    };

    const totalPrice = cartProducts.reduce((total, product) => {
        return total + product.fields.price * product.count;
    }, 0);
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={showCartClassName} onClick={handleCloseCart}>
            <aside className="basket-cart" onClick={handleModalClick}>
                <div onClick={handleCloseCart} className="basket-cart_close">
                    {/* <i className="fa fa-times"></i> */}
                </div>
                <div className="basket-header" >
                    <div className="basket-text">Ваша корзина</div>
                </div>
                <div className="basket-cart_items">
                    {
                        cartProducts.map((item, index) => {
                            const { id } = item
                            return <SingleCartProduct key={id} id={id} currentSize={item.size} index={index} />
                        })
                    }
                </div>
                <div className="basket-total">
                    <p>Общая сумма: {totalPrice}</p>
                </div>
            </aside>
        </div>
    )
}

export default Basket