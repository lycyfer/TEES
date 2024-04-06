import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './twilight.png'
import twilight from './NVIDIA_Share_N1ra9oxd6x-transformed.png'
import './logo.css';
import basket from './img/shopping-cart_icon-icons.com_72552.svg'
import like from './img/like-heart-outline-symbol_icon-icons.com_73226.svg'
import likeTest from './img/1993288.svg'
import exit from './img/4213459-common-door-exit-logout-out-signout_115411.svg'
import profileUser from './img/1499345621-contact_85338.svg'

import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { displayCart } from '../../products/productSlice';


/**
 * Компонент Logo, который отвечает за отображение логотипа и навигационных ссылок.
 * @module Logo
 */

/**
 * @function
 * @name Logo
 * @description Функция-компонент, которая рендерит логотип и навигационные ссылки.
 * @returns {JSX.Element} Возвращает JSX элемент, представляющий логотип и навигационные ссылки.
 */

const Logo = () => {

    const { currentUser } = useContext(AuthContext)

    const dispatch = useDispatch();
    const cartProducts = useSelector((store) => store.productsState.cartProducts)
    const cartCount = cartProducts.reduce((sum, item) => sum + item.count, 0);

    const [isScrolled, setIsScrolled] = useState(false)
    // console.log(window.location.pathname)
    var url = window.location.pathname
    const currentUrl = window.location.href;
    // console.log(url)
    // console.log(typeof (currentUrl))


    /**
     * @function
     * @name actionTest
     * @description Функция, которая определяет, какие навигационные ссылки отображать на основе текущего URL.
     * @returns {JSX.Element} Возвращает JSX элемент, представляющий навигационные ссылки.
     */

    // const actionTest = () => {
    //     if (url == 'http://localhost:3000/login') {
    //         console.log(url)
    //         return (
    //             <div className='header-text-second'>
    //                 <span>
    //                     <b className='logo'>Twilight</b>
    //                 </span>
    //                 <p>
    //                     <b>магазин женских аксессуаров</b>
    //                 </p>
    //             </div>
    //         )
    //     } else {
    //         console.log(url)
    //         return (
    //             <div className='header-links'>
    //                 <Link to='/' className='Home link'>Главная</Link>
    //                 <Link to='/product' className='Products link'>Продукты</Link>
    //                 <Link to='/about' className='About link'>О нас</Link>
    //             </div>
    //         )
    //     }

    // }
    const actionTest = () => {
        switch (window.location.pathname) {
            case '/login':
                return (
                    <div className='header-text-second'>
                        <span>
                            <b className='logo'>Twilight</b>
                        </span>
                        <p>
                            <b>магазин женских аксессуаров</b>
                        </p>
                    </div>
                )
            case '/signup':
                return (
                    <div className='header-text-second'>
                        <span>
                            <b className='logo'>Twilight</b>
                        </span>
                        <p>
                            <b>Регистрация</b>
                        </p>
                    </div>
                )
            default:
                return (
                    <div className='header-text-second'>
                        {/* <span>
                            <b className='logo'>Twilight</b>
                        </span> */}
                        <p>
                            <Link to='/' className='Home link'>Главная</Link>
                            <Link to='/product' className='Products link'>Продукты</Link>
                            <Link to='/about' className='About link'>О нас</Link>
                        </p>
                    </div>
                )
        }
    }

    /**
 * @function
 * @name actionTestSecond
 * @description Функция, которая определяет, какие действия отображать на основе текущего URL.
 * @returns {JSX.Element} Возвращает JSX элемент, представляющий действия пользователя.
 */

    const actionTestSecond = () => {
        if (url === '/login') {
            return (
                <div className='navbar-content_action'>
                    <Link className='profile p-active' >
                        <img src={profileUser} alt="" />
                    </Link>
                    <div className='basket basket-active toggle-cart' >
                        <img src={basket} alt="" />
                        {/* <span className='cart-item-count'>{cartCount}</span> */}
                    </div>
                    <div className='like like-active'>
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
            )
        } else {
            if (currentUser) {
                return (
                    <div className='navbar-content_action'>
                        <div className='user-block'>
                            <div className='user'>
                                <div className='user-info'>
                                    {currentUser.photoURL && (
                                        <img src={currentUser.photoURL} alt="" className='user-img' />
                                    )}
                                    <span className='user-name'>{currentUser.displayName}</span>
                                </div>
                                <Link to='/login' className='user-logout' onClick={() => signOut(auth)}>
                                    Logout
                                </Link>
                            </div>
                        </div>
                        <div onClick={() => dispatch(displayCart())} className='basket basket-active toggle-cart' >
                            <img src={basket} alt="" />
                            <span className='cart-item-count'>{cartCount}</span>
                        </div>
                        <Link to='/favorite' className='like like-active'>
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
                        </Link>
                    </div>
                )
            } else {
                <div className='navbar-content_action'>
                    <div className='user-block'>
                        <div className='user'>
                            {/* <div className='user-info'>
                                {currentUser.photoURL && (
                                    <img src={currentUser.photoURL} alt="" className='user-img' />
                                )}
                                <span className='user-name'>{currentUser.displayName}</span>
                            </div> */}
                            <Link to='/login' className='user-logout' onClick={() => signOut(auth)}>
                                Logout
                            </Link>
                        </div>
                    </div>
                    <div className='basket basket-active toggle-cart' >
                        <img src={basket} alt="" />
                        {/* <span className='cart-item-count'>{cartCount}</span> */}
                    </div>
                    <div className='like like-active'>
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
            }

        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    })

    return (
        <div className={isScrolled ? 'navBar scroll' : 'navBar'}>
            {actionTest()}
            <div className='navbar-content_logo'>
                {/* <img src={twilight} alt="" /> */}
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="88pt" height="82pt" viewBox="0 0 202.000000 189.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,189.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M891 1679 c-2 -49 -22 -88 -49 -97 l-27 -9 26 -13 c31 -14 49 -47 50
-93 1 -28 2 -27 10 12 9 46 33 81 56 81 7 0 13 5 13 10 0 6 -6 10 -13 10 -23
0 -47 35 -56 81 -6 29 -9 35 -10 18z"/>
                        <path d="M1308 1537 c-10 -95 -38 -154 -82 -172 -20 -8 -45 -15 -56 -15 -33 0
-23 -17 14 -24 38 -7 81 -37 98 -69 6 -12 17 -58 24 -102 6 -44 12 -69 13 -56
1 13 6 54 12 90 14 78 53 125 112 136 43 8 41 20 -6 29 -66 12 -97 71 -119
226 -2 14 -7 -5 -10 -43z"/>
                        <path d="M461 1568 c-1 -16 -10 -37 -22 -49 l-21 -21 21 -14 c12 -9 21 -27 22
-42 l1 -27 9 30 c5 16 16 36 26 42 15 12 16 14 1 26 -9 6 -21 28 -26 47 -10
33 -10 33 -11 8z"/>
                        <path d="M647 1584 c-4 -4 -7 -21 -7 -38 0 -17 -7 -76 -15 -131 -28 -182 -77
-243 -228 -281 -40 -10 -63 -20 -52 -22 11 -2 49 -13 84 -24 78 -25 131 -71
160 -137 21 -49 51 -207 51 -269 0 -66 17 -21 24 63 14 165 51 256 124 305 41
27 114 54 172 62 18 3 7 8 -35 17 -179 39 -229 108 -258 354 -6 60 -15 105
-20 101z"/>
                        <path d="M1023 1312 c-8 -20 -21 -36 -35 -40 l-22 -5 23 -8 c12 -5 27 -23 34
-41 l11 -33 6 30 c3 17 15 34 28 41 l22 11 -24 11 c-16 7 -26 21 -28 39 l-3
28 -12 -33z"/>
                        <path d="M1452 1060 c-10 -17 -10 -24 0 -39 13 -18 14 -18 25 5 6 13 7 24 3
24 -5 0 -10 7 -12 15 -2 12 -6 11 -16 -5z"/>
                        <path d="M1147 1030 c-3 -14 -9 -42 -12 -62 -6 -37 -43 -78 -71 -78 -8 0 -14
-4 -14 -10 0 -5 6 -10 14 -10 29 0 67 -44 72 -85 9 -66 17 -73 25 -22 10 62
33 96 69 104 38 7 38 19 0 26 -38 8 -60 43 -69 109 -6 42 -9 48 -14 28z"/>
                        <path d="M494 936 c-6 -14 -6 -28 1 -42 l11 -22 10 22 c6 14 6 28 -1 42 l-11
22 -10 -22z"/>
                        <path d="M901 895 c0 -12 -6 -26 -13 -33 -9 -9 -9 -12 0 -12 7 0 12 -10 12
-22 0 -21 2 -20 15 6 9 17 12 32 6 35 -5 3 -11 15 -14 26 -5 20 -5 20 -6 0z"/>
                        <path d="M370 790 c0 -11 -9 -28 -20 -37 -19 -17 -19 -17 0 -30 11 -8 20 -21
20 -29 0 -8 5 -14 10 -14 6 0 10 6 10 14 0 8 9 21 21 30 l21 14 -21 11 c-12 7
-21 20 -21 31 0 10 -4 22 -10 25 -5 3 -10 -3 -10 -15z"/>
                        <path d="M1421 729 c-1 -38 -14 -60 -46 -77 -17 -10 -17 -11 -3 -12 23 0 48
-38 49 -75 1 -26 2 -24 12 15 8 29 20 48 34 56 l23 11 -24 11 c-18 8 -27 22
-31 49 -10 56 -13 62 -14 22z"/>
                        <path d="M807 703 c-4 -22 -12 -33 -24 -33 -15 0 -14 -2 4 -15 12 -8 24 -25
26 -38 l4 -22 2 22 c0 12 11 29 23 37 18 13 19 16 6 16 -11 0 -21 12 -26 33
l-8 32 -7 -32z"/>
                        <path d="M1061 369 c-37 -14 -50 -39 -51 -91 0 -35 5 -53 20 -68 22 -22 26
-23 87 -24 l43 -1 0 38 c0 20 -4 37 -10 37 -5 0 -10 -13 -10 -29 0 -22 -6 -30
-25 -35 -67 -17 -113 79 -69 143 14 19 24 22 60 19 45 -3 47 5 4 15 -14 3 -36
1 -49 -4z"/>
                        <path d="M323 363 l37 -4 0 -90 c0 -58 4 -88 10 -84 6 3 10 44 10 90 l0 84 33
4 c17 2 -4 4 -48 4 -44 0 -63 -2 -42 -4z"/>
                        <path d="M460 363 c0 -21 52 -173 59 -173 5 0 17 29 26 65 10 36 21 68 25 70
3 2 15 -28 25 -66 11 -39 23 -73 27 -75 4 -3 19 35 34 83 14 48 28 91 31 96 2
4 0 7 -4 7 -5 0 -17 -31 -28 -70 -11 -38 -22 -70 -26 -70 -3 0 -14 29 -24 65
-9 36 -21 68 -26 70 -4 3 -18 -26 -30 -65 -12 -40 -25 -68 -29 -63 -3 4 -15
36 -25 71 -10 34 -22 62 -27 62 -4 0 -8 -3 -8 -7z"/>
                        <path d="M720 281 c0 -50 5 -93 10 -96 6 -4 10 28 10 89 0 57 -4 96 -10 96 -6
0 -10 -36 -10 -89z"/>
                        <path d="M800 275 l0 -95 50 0 c28 0 50 5 50 10 0 6 -18 10 -40 10 l-40 0 0
85 c0 50 -4 85 -10 85 -6 0 -10 -38 -10 -95z"/>
                        <path d="M940 275 c0 -57 4 -95 10 -95 6 0 10 38 10 95 0 57 -4 95 -10 95 -6
0 -10 -38 -10 -95z"/>
                        <path d="M1220 274 c0 -61 4 -93 10 -89 6 3 10 24 10 46 l0 39 50 0 50 0 0
-39 c0 -22 5 -43 10 -46 6 -4 10 28 10 89 0 57 -4 96 -10 96 -5 0 -10 -20 -10
-45 l0 -45 -50 0 -50 0 0 45 c0 25 -4 45 -10 45 -6 0 -10 -39 -10 -96z"/>
                        <path d="M1428 363 l32 -4 0 -84 c0 -46 5 -87 10 -90 6 -4 10 26 10 84 l0 90
33 4 c17 2 -2 4 -43 4 -41 0 -60 -2 -42 -4z"/>
                    </g>
                </svg>
            </div>
            {actionTestSecond()}
            {/* <div className='navbar-content_action'>
                <Link className='basket active' >
                    <img src={basket} alt="" />
                </Link>
                <Link className='like active'>
                    <img src={like} alt="" />
                </Link>
            </div> */}
        </div >

    )
}

export default Logo