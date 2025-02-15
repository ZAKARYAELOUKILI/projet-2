import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
       
        if (username === 'zzzz' && password === 'zzzz') {
            onLogin(); 
            navigate('/'); 
        } else {
            alert('Mots de passe incorrect ');
        }
    };

    return (
        <div>
            <h2>Logiin </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=" Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password "
                    placeholder=" Mots de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit"> Se Connecter </button>
            </form>
        </div>
    );
};

export default Login