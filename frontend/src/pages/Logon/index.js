import React from 'react';

import './styles.css';

import heroImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" type="text" />
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        Não tenho cadastro
                    </a>
                </form>

            </section>
            <img src={heroImg} alt="Heroes" />
        </div>
    );
}