import React, { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const { firebaseSignUp } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            setLoading(true);

            await firebaseSignUp(emailRef.current.value, passwordRef.current.value);

            history.push('/')

        } catch (error) {
            alert('error')
        }

        setLoading(false);
    }

    return (
        <>
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" ref={nameRef} autoComplete="off" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={emailRef} autoComplete="off" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={passwordRef} required />
                    </div>
                    <button type="submit" disabled={loading}>Sign Up</button>
                </form>
            </div>
            <div>
                Alredy have an account? <Link to="/signin">Sign In</Link>
            </div>
        </>
    )
}

export default SignUp
