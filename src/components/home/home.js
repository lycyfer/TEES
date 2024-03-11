import React, { useContext } from 'react';
import './home.css';
import Logo from '../logo/logo';
import exit from '../logo/img/4213459-common-door-exit-logout-out-signout_115411.svg'
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../context/AuthContext';


/**
 * Компонент Home, который отвечает за главную страницу приложения.
 * @module Home
 */

/**
 * @function
 * @name Home
 * @description Функция-компонент, которая рендерит главную страницу приложения.
 * @returns {JSX.Element} Возвращает JSX элемент, представляющий главную страницу приложения.
 */

const Home = () => {

    const { currentUser } = useContext(AuthContext)

    return (
        <header>
            <div className='header-content'>
                {/* <div>
                <Logo />
            </div> */}
                <div className='home-info'>
                    <div className='header-text'>
                        <span>
                            <b className='logo'>Twilight</b>
                        </span>
                        <p>
                            <b>магазин женских аксессуаров</b>
                        </p>
                    </div>
                    {/* <div className='user-block'>
                        <div className='user'>
                            <div className='user-info'>
                                <img src={currentUser.photoURL} alt="" className='user-img' />
                                <span className='user-name'>{currentUser.displayName}</span>
                            </div>
                            <button className='user-logout' onClick={() => signOut(auth)}>
                                Logout
                            </button>
                        </div>
                    </div> */}


                </div>
                <div className='content-main'>
                    <h1>Все женские украшения</h1>
                    <p>По-настоящему роскошное украшение для самых красивых женщин</p>
                    <Link to='/product' className='content-main_button'>
                        Покупайте сейчас
                    </Link>
                </div>
            </div>
        </header>
    )


}

export default Home;
