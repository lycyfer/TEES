import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import './favoriteCartProduct.css'
import { useLocation, useParams } from "react-router-dom";
import { addProductToCart, removeProductFromFavorite } from "../../products/productSlice";
import { Link } from "react-router-dom";

const FavoriteCartProduct = ({ id }) => {

    let dispatch = useDispatch()
    const favoriteProducts = useSelector((store) => store.productsState.favoriteProducts);
    const favoriteProduct = favoriteProducts.find((item) => item.id === id)
    if (!favoriteProduct || !favoriteProduct.fields) {
        // Handle the case where favoriteProduct or favoriteProduct.fields is undefined
        return <div>Product not found</div>;
    }

    const {
        name,
        price,
        image,
        description
    } = favoriteProduct.fields
    // console.log(name)

    return (
        <div className="favoriteCartProduct">
            <Link to={`/product/${id}`} className="favoriteCartProduct-item">
                <img src={image} alt="" className="favoriteCartProduct-item-img" />
            </Link>
            <div className="favoriteCartProduct-cart-info">
                <div className="favoriteCartProduct-item-name">
                    {name}
                </div>
                <div className="favoriteCartProduct-item-desc">
                    {description}
                </div>
                <p className="favoriteCartProduct-item-price">{price}P</p>
                {/* <div className="favoriteCartProduct-addButton">
                    <button onClick={() => dispatch(addProductToCart(id))} className="favoriteCartProduct-button">
                        Добавить в корзину
                    </button>
                </div> */}
                <div onClick={() => dispatch(removeProductFromFavorite(id))} className='like-favorite'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="40px" height="40px" viewBox="0 0 1280.000000 1280.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                        </metadata>
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M3820 10864 c-238 -21 -540 -87 -750 -164 -252 -92 -562 -265 -764
-428 -39 -31 -122 -106 -185 -167 -429 -417 -689 -967 -750 -1589 -16 -159
-14 -484 5 -649 83 -762 416 -1452 1058 -2197 123 -143 467 -491 656 -665 322
-295 676 -588 1355 -1120 799 -626 1062 -851 1385 -1181 244 -250 418 -476
522 -679 24 -47 45 -85 48 -85 3 0 24 38 48 85 104 203 278 429 522 679 323
330 586 555 1385 1181 918 719 1287 1036 1715 1471 283 289 463 499 655 769
404 567 637 1147 700 1748 17 170 20 485 4 643 -61 622 -321 1172 -750 1589
-63 61 -146 136 -185 167 -202 163 -512 336 -764 428 -153 56 -384 114 -561
141 -208 33 -591 33 -794 1 -275 -43 -500 -114 -740 -232 -576 -284 -993 -786
-1197 -1442 -18 -59 -35 -108 -38 -108 -3 0 -20 49 -38 108 -204 656 -621
1158 -1197 1442 -351 173 -673 249 -1085 255 -118 1 -235 1 -260 -1z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )

}

export default FavoriteCartProduct;