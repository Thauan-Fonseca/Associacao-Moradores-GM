import clienteFetch from '../axios/config';

import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import Secao from '../components/Secao';

import './Home.css'


const Home = () => {
    
    const [clientes, setClientes]= useState(null);

    // Carregar clientes
    useEffect(() => {
        const loadClientes = async () => {
            const res = await clienteFetch.get('/clientes');
            console.log(res.data)            

            setClientes(res.data);
        };

        loadClientes()
    }, [])

    if(!clientes) return <p>Carregando...</p>;
    
    return (
        
        <div className='home'>
            <Secao />
            <h1>Clientes</h1>
        
            <div className='clientes-container'>
                {clientes.length === 0 && <p> Não há clientes cadastrados! </p>}
                {clientes.map((cliente) => (
                    <div className='cliente' key={cliente._id}>
                        <h3>Número da matrícula: {cliente.numero}</h3>
                        <h3>Nome do cliente: {cliente.nome}</h3>
                        <h3>Leitura anterior: {cliente.leitAnt} m<sup>3</sup></h3>
                        <h3>Leitura atual: {cliente.leitAtual} m<sup>3</sup></h3>
                        <Link to={`/cliente/${cliente._id}`} className="btn-secondary">Detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;