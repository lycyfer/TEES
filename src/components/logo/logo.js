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

const Logo = () => {

    const { currentUser } = useContext(AuthContext)

    const dispatch = useDispatch();
    const cartProducts = useSelector((store) => store.productsState.cartProducts)
    const cartCount = cartProducts.reduce((sum, item) => sum + item.count, 0);

    const [isScrolled, setIsScrolled] = useState(false)
    // console.log(window.location.pathname)
    var url = window.location.pathname
    const currentUrl = window.location.href;
    console.log(url)
    console.log(typeof (currentUrl))

    const actionTest = () => {
        if (url == 'http://localhost:3000/login') {
            console.log(url)
            return (
                <div className='header-text-second'>
                    <span>
                        <b className='logo'>Twilight</b>
                    </span>
                    <p>
                        <b>women's accessories store</b>
                    </p>
                </div>
            )
        } else {
            console.log(url)
            return (
                <div className='header-links'>
                    <Link to='/' className='Home link'>Home</Link>
                    <Link to='/product' className='Products link'>Products</Link>
                    <Link to='/about' className='About link'>About</Link>
                </div>
            )
        }

    }


    const actionTestSecond = () => {
        if (url === '/login') {
            return (
                <div className='navbar-content_action'>
                    <Link className='profile p-active' >
                        <img src={profileUser} alt="" />
                    </Link>
                    <div onClick={() => dispatch(displayCart())} className='basket basket-active toggle-cart' >
                        <img src={basket} alt="" />
                        <span className='cart-item-count'>{cartCount}</span>
                    </div>
                    <Link className='like like-active'>
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
            return (
                <div className='navbar-content_action'>
                    <div className='user-block'>
                        <div className='user'>
                            <div className='user-info'>
                                <img src={currentUser.photoURL} alt="" className='user-img' />
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
                    <Link className='like like-active'>
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
                <img src={twilight} alt="" />
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