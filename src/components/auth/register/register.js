import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage } from '../../../firebase'
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import Add from '../img/addAvatar.png'
import './register.css'
import { useState } from 'react'

const Register = () => {

    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`)

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        })
                        await setDoc(doc(db, "userChats", res.user.uid), {})
                        navigate('/')
                    } catch (err) {
                        console.log(err)
                        setErr(true);
                        setLoading(false)
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false)
        }
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo-form">Twilight Store</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit} className='form-login'>
                    <input className='input' required type="text" placeholder="display name" />
                    <input className='input' required type="email" placeholder="email" />
                    <input className='input' required type="password" placeholder="password" />
                    <input className='input' required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file" className='label'>
                        <img src={Add} alt="" className='avatar-img' />
                        <span className='avatar'>Add an avatar</span>
                    </label>
                    <button disabled={loading} className='sign-up'>Sign up</button>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span>Something went wrong</span>}
                </form>
                <p className='form-reg'>
                    You do have on account <Link to='/login' className='reg'>Login</Link>
                </p>
            </div>
        </div>
    )

}

export default Register
