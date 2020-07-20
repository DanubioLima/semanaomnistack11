import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import heroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';


export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory()

    async function handleLogin(event){
        event.preventDefault();
        
        try{
            const response = await api.post('session', {id});
            localStorage.setItem('ong_id', id)
            localStorage.setItem('ong_name', response.data.name)
            history.push('/profile')
        }catch(error){
            alert(error)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}