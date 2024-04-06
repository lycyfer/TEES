import './productDetails.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProductToCart, addProductToFavorites } from '../../products/productSlice';
import { useLocation } from 'react-router-dom';
import like from '../productList/img/klipartz.com.png'
import './productDetails.css'
import PageHero from '../page/pageHero';
import { useState, useEffect } from 'react';
import { fetchProductsAsync } from '../../products/productActions';

const ProductDetails = ({ fields, currentSize, setCurrentSize, handleAddToCart }) => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const location = useLocation();

    const {
        name,
        sizes,
        price,
        image,
        description,
        type,
        model,
        productMaterial,
        brand,
        collection,
        insert,
        countryOfManufacture,
        productWeight,
        mechanism,
        forWhom,
        braceletMaterial,
        caseMaterial,
        typeCoverage,
        diameter,
        glass,
        colorBelt,
        beltWidth,
        waterProtection,
        grant,
        timeDisplay,
        markup,
        typeMechanism,
        chainWidth,
        weaving,
    } = fields;
    const size = (type) => {
        switch (type) {
            case 'Ring':
                return <div>
                    {sizes.map((size) => (
                        <button onClick={() => setCurrentSize(size)} key={size} className={`size-block ${currentSize === size ? 'selected' : ''}`}>
                            {size}
                        </button>
                    ))}
                </div>
            case 'Chain':
                return <div>
                    {sizes.map((size) => (
                        <button onClick={() => setCurrentSize(size)} key={size} className={`size-block ${currentSize === size ? 'selected' : ''}`}>
                            {size}
                        </button>
                    ))}
                </div>
            case 'Bracelet':
                return <div>
                    {sizes.map((size) => (
                        <button onClick={() => setCurrentSize(size)} key={size} className={`size-block ${currentSize === size ? 'selected' : ''}`}>
                            {size}
                        </button>
                    ))}
                </div>
            case 'Necklace':
                return <div>
                    {sizes.map((size) => (
                        <button onClick={() => setCurrentSize(size)} key={size} className={`size-block ${currentSize === size ? 'selected' : ''}`}>
                            {size}
                        </button>
                    ))}
                </div>
        }
    }
    const moreInfo = (
        type,
        model,
        productMaterial,
        brand,
        collection,
        insert,
        countryOfManufacture,
        productWeight,
        mechanism,
        forWhom,
        braceletMaterial,
        caseMaterial,
        typeCoverage,
        diameter,
        glass,
        colorBelt,
        beltWidth,
        waterProtection,
        grant,
        timeDisplay,
        markup,
        typeMechanism,
        chainWidth,
        weaving
    ) => {
        switch (type) {
            case 'Ring':
                return <div className='qualityAssurance'>
                    <p className='qualityAssurance-title'>Гарантия Качества</p>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Бренд</p>

                        <p className='qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{brand}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Коллекция</p>

                        <p className='qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{collection}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Модель</p>

                        <p className='qualityAssurance_block-title'>{model}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал изделия</p>

                        <p className='qualityAssurance_block-title'>{productMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вставка</p>

                        <p className='qualityAssurance_block-title'>{insert}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Страна производства</p>

                        <p className='qualityAssurance_block-title'>{countryOfManufacture}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вес изделия</p>
                        <p className='qualityAssurance_block-title'>{productWeight}</p>
                    </div>

                </div>
            case 'Watch':
                return <div className='qualityAssurance'>
                    <p className='qualityAssurance-title'>Гарантия Качества</p>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Бренд</p>
                        <p className='
                        qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{brand}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Коллекция</p>
                        <p className='qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{collection}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Модель</p>
                        <p className='qualityAssurance_block-title '>{model}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Механизм</p>
                        <p className='qualityAssurance_block-title '>{mechanism}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Тип механизма</p>
                        <p className='qualityAssurance_block-title '>{typeMechanism}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Для кого</p>
                        <p className='qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{forWhom}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал браслета</p>
                        <p className='qualityAssurance_block-title'>{braceletMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал корпуса</p>
                        <p className='  qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{caseMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Тип покрытия</p>
                        <p className='qualityAssurance_block-title '>{typeCoverage}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Диаметр</p>
                        <p className='qualityAssurance_block-title '>{diameter}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Стекло</p>
                        <p className='qualityAssurance_block-title '>{glass}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Цвет ремня</p>
                        <p className='qualityAssurance_block-title '>{colorBelt}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Ширина ремня</p>
                        <p className='qualityAssurance_block-title '>{beltWidth}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Водозащита</p>
                        <p className='qualityAssurance_block-title '>{waterProtection}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Гарантия</p>
                        <p className='qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{grant}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Отображение времени</p>
                        <p className='qualityAssurance_block-title'>{timeDisplay}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Разметка</p>
                        <p className='qualityAssurance_block-title'>{markup}</p>
                    </div>
                </div>
            case 'Piercing':
                return <div className='qualityAssurance'>
                    <p className='qualityAssurance-title'>Гарантия Качества</p>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Бренд</p>
                        <p className='
                        qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{brand}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Коллекция</p>
                        <p className='qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{collection}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Модель</p>
                        <p className='qualityAssurance_block-title '>{model}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал изделия</p>
                        <p className='qualityAssurance_block-title'>{productMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вставка</p>
                        <p className='qualityAssurance_block-title'>{insert}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Страна производства</p>
                        <p className='qualityAssurance_block-title'>{countryOfManufacture}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вес изделия</p>
                        <p className='qualityAssurance_block-title'>{productWeight}</p>
                    </div>
                </div>
            case 'Earrings':
                return <div className='qualityAssurance'>
                    <p className='qualityAssurance-title'>Гарантия Качества</p>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Бренд</p>
                        <p className='
                        qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{brand}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Коллекция</p>
                        <p className='qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{collection}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Модель</p>
                        <p className='qualityAssurance_block-title '>{model}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал изделия</p>
                        <p className='qualityAssurance_block-title'>{productMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вставка</p>
                        <p className='qualityAssurance_block-title'>{insert}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Страна производства</p>
                        <p className='qualityAssurance_block-title'>{countryOfManufacture}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вес изделия</p>
                        <p className='qualityAssurance_block-title'>{productWeight}</p>
                    </div>
                </div>
            case 'Chain':
                return <div className='qualityAssurance'>
                    <p className='qualityAssurance-title'>Гарантия Качества</p>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Бренд</p>
                        <p className='
                        qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{brand}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Модель</p>
                        <p className='qualityAssurance_block-title '>{model}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал изделия</p>
                        <p className='qualityAssurance_block-title'>{productMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Ширина цепи</p>
                        <p className='qualityAssurance_block-title'>{chainWidth} мм</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Плетение</p>
                        <p className='qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{weaving}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Страна производства</p>
                        <p className='qualityAssurance_block-title'>{countryOfManufacture}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вес изделия</p>
                        <p className='qualityAssurance_block-title'>{productWeight} г</p>
                    </div>
                </div>
            case 'Cufflinks':
                return <div className='qualityAssurance'>
                    <p className='qualityAssurance-title'>Гарантия Качества</p>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Бренд</p>
                        <p className='
                        qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{brand}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Модель</p>
                        <p className='qualityAssurance_block-title '>{model}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал изделия</p>
                        <p className='qualityAssurance_block-title'>{productMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Страна производства</p>
                        <p className='qualityAssurance_block-title'>{countryOfManufacture}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вес изделия</p>
                        <p className='qualityAssurance_block-title'>{productWeight} г</p>
                    </div>
                </div>
            case 'Bracelet':
                return <div className='qualityAssurance'>
                    <p className='qualityAssurance-title'>Гарантия Качества</p>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Бренд</p>
                        <p className='
                        qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{brand}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Коллекция</p>
                        <p className='qualityAssurance_block-title 
                    qualityAssurance_block-title_active'>{collection}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Модель</p>
                        <p className='qualityAssurance_block-title '>{model}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал изделия</p>
                        <p className='qualityAssurance_block-title'>{productMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Ширина цепи</p>
                        <p className='qualityAssurance_block-title'>{chainWidth} мм</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вес изделия</p>
                        <p className='qualityAssurance_block-title'>{productWeight} г</p>
                    </div>
                </div>
            case 'Necklace':
                return <div className='qualityAssurance'>
                    <p className='qualityAssurance-title'>Гарантия Качества</p>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Бренд</p>
                        <p className='
                        qualityAssurance_block-title 
                        qualityAssurance_block-title_active'>{brand}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Коллекция</p>
                        <p className='qualityAssurance_block-title 
                    qualityAssurance_block-title_active'>{collection}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Модель</p>
                        <p className='qualityAssurance_block-title '>{model}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Материал изделия</p>
                        <p className='qualityAssurance_block-title'>{productMaterial}</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вставка</p>
                        <p className='qualityAssurance_block-title'>{insert} мм</p>
                    </div>
                    <div className='qualityAssurance_block'>
                        <p className='qualityAssurance_block-title'>Вес изделия</p>
                        <p className='qualityAssurance_block-title'>{productWeight} г</p>
                    </div>
                </div>
        }

    }

    return (
        <div className='productDetails'>
            <PageHero path={location.pathname} />
            <div className='productDetails-block'>
                <div className='productDetails-img'>
                    <img src={image} alt="" />
                </div>
                <div className='productDetails-text'>
                    <h2 className='productDetails-name'>{name}</h2>
                    <div className='productDetails-type'>{type}</div>
                    <div className='productDetails-price'>{price} ₽</div>
                    <div className='productDetails-size-block'>
                        {sizes && sizes.length > 0 && (
                            <>
                                <p className='size'>Размер</p>
                                {size(type)}
                            </>
                        )}
                    </div>
                    <div className='addButton'>
                        {sizes && sizes.length > 0 ? (
                            <button
                                onClick={handleAddToCart}
                                className='productDetails-button'
                                disabled={!currentSize}
                            >
                                {currentSize ? 'Добавить в корзину' : 'Выбери размер'}
                            </button>
                        ) : (
                            <button
                                onClick={() => dispatch(addProductToCart({ productId: id }))}
                                className='productDetails-button'
                            >
                                Добавить в корзину
                            </button>
                        )}

                        <button onClick={() => dispatch(addProductToFavorites(id, currentSize))} className='productDetails-like'><img src={like} alt="" className='like2' /></button>
                    </div>
                    <p className='desc'>Описание</p>
                    <div className='productDetails-desc'>
                        <p>{description}</p>
                    </div>
                    {moreInfo(type,
                        model,
                        productMaterial,
                        brand,
                        collection,
                        insert,
                        countryOfManufacture,
                        productWeight,
                        mechanism,
                        forWhom,
                        braceletMaterial,
                        caseMaterial,
                        typeCoverage,
                        diameter,
                        glass,
                        colorBelt,
                        beltWidth,
                        waterProtection,
                        grant,
                        timeDisplay,
                        markup,
                        typeMechanism,
                        chainWidth,
                        weaving
                    )}
                </div>
            </div>

        </div>
    )
}

export default ProductDetails