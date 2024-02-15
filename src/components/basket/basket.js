import { useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import { displayCart } from "../../products/productSlice";
import SingleCartProduct from "../singleCartProduct/singleCartProduct";
import './basket.css'

function Basket() {
    const dispatch = useDispatch();
    const showCart = useSelector((store) => store.productsState.showCart);
    const showCartClassName = showCart ? 'cart-overlay show' : 'cart-overlay'
    const cartProducts = useSelector((store) => store.productsState.cartProducts)

    return (
        <div className={showCartClassName}>
            <aside className="basket-cart">
                <div onClick={() => dispatch(displayCart())} className="basket-cart_close">
                    {/* <i className="fa fa-times"></i> */}
                </div>
                <div className="basket-header" >
                    <div className="basket-text">Ваша корзина</div>
                </div>
                <div className="basket-cart_items">
                    {
                        cartProducts.map((item) => {
                            const { id } = item
                            return <SingleCartProduct key={id} id={id} />
                        })
                    }
                </div>
            </aside>
        </div>
    )
}

export default Basket