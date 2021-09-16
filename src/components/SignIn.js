import React, { useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const { firebaseSignIn } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            setLoading(true);

            await firebaseSignIn(emailRef.current.value, passwordRef.current.value);

            history.push('/')

        } catch (error) {
            alert('error')
        }
    }

    return (
        <>
            <div>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={emailRef} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={passwordRef} required />
                    </div>
                    <button type="submit" disabled={loading}>Login</button>
                </form>
            </div>
            <div>
                Alredy have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}

export default SignIn
