import './productDetails.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProductToCart } from '../../products/productSlice';
import './productDetails.css'


const ProductDetails = () => {

    let dispatch = useDispatch()
    let { id } = useParams()
    console.log(id)
    const products = useSelector((store) => store.productsState.products);
    const product = products.find((item) => item.id === id)
    const { name, price, image, description, type } = product.fields
    console.log(name)
    // let product = products.filter((item) => item.id)
    console.log(product)

    return (
        <div className='productDetails'>
            <div className='productDetails-block'>
                <div className='productDetails-img'>
                    <img src={image} alt="" />
                </div>
                <div className='productDetails-text'>
                    <h2 className='productDetails-name'>{name}</h2>
                    <div className='productDetails-type'>{type}</div>
                    <div className='productDetails-price'>{price}</div>
                    <div className='productDetails-desc'>{description}</div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails