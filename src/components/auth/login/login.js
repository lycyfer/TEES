import { useNavigate, Link } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from '../../../firebase'
import { useState } from "react";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'



import './login.css'

const Login = () => {

    const [error, setError] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        }
        catch (err) {
            setError(true)
        }

    }


    return (
        <div className="login-form">
            <div className="form-container">
                <div className="form-wrapper">
                    <span className="logo-form">
                        Twilight Store
                    </span>
                    <span className="title">
                        Авторизоваться
                    </span>
                    <form onSubmit={handleSubmit} className="form-login">
                        <input className="input" type="email" placeholder="email" />
                        <input className="input" type="text" placeholder="password" />
                        <button className='sign-in'>Войти</button>
                        {error && <span>Error</span>}
                    </form>
                    <p className="form-reg">У вас нет учетной записи для  <Link to='/register' className="reg">Регистрации</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login