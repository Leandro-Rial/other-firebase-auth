import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const history = useHistory();

    const { currentUser, firebaseSignOut } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
            history.push('/signin')
        } catch {
            alert('error')
        }
    }

    return (
        <div>
            <p>{currentUser.email}</p>
            <button onClick={handleLogout}>SignOut</button>
        </div>
    )
}

export default Navbar
