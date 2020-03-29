import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './styles.css';


export  default function Register() {
    const [name, setName] = useState(''); // useState nome da ong
    const [email, setEmail] = useState(''); // useState email
    const [whatsapp, setWhatsapp] = useState(''); // useState whatsapp
    const [city, setCity] = useState('');
    const [uf, setUf]  = useState('');

    const history = useHistory();


    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const res = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${res.data.id}`);
            history.push('/');

        } catch (err) {
            console.log('ERRO! Tente novamente mais tarde.');

        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value = {name}
                        onChange = {e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="E-mail"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Whatsapp"
                        value = {whatsapp}
                        onChange = {e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                    <input
                        placeholder="Cidade"
                        value = {city}
                        onChange = {e => setCity(e.target.value)}
                    />
                    <input
                        placeholder="UF"
                        style={{ width: 80 }}
                        value = {uf}
                        onChange = {e => setUf(e.target.value)}
                    />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                
                </form>
            </div>
        </div>
    )
}