import clienteFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import './Cliente.css';

import useToast from "../hook/useToast";


const Cliente = () => {
    const { id } = useParams();

    const [cliente, setCliente] = useState(null);

    const navigate = useNavigate();

    // Carregar cliente
    useEffect(() => {
        const loadCliente = async () => {
            const res = await clienteFetch.get(`/clientes/${id}`);
            console.log(res.data);

            setCliente(res.data)
        };

        loadCliente();
    }, []);

    //Deletar Cliente
    const handleDelete = async () => {
        const res = await clienteFetch.delete(`/clientes/${id}`);

        if(res.status === 200){
            navigate('/');
            useToast(res.data.msg)
        }
    }

    if(!cliente) return <p>Carregando...</p>

    return(
    <div className="cliente">
        <h1>{cliente.numero}</h1>
        <div className="acitions-container">
            <Link to={`/cliente/edit/${cliente._id}`}className="btn">Editar</Link>
            <button onClick={handleDelete} className="btn-secondary">Excluir</button>
        </div>
    </div>
    )
}

export default Cliente;