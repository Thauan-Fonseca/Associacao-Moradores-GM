import { useState, useEffect } from 'react';

import { useNavigate, useParams } from "react-router-dom";

import useToast from "../hook/useToast";

import clienteFetch from "../axios/config";

import './Form.css';


const EditCliente = () => {
    const {id} = useParams()
    const [cliente, setCliente] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadCliente = async () => {
            const res = await clienteFetch.get(`/clientes/${id}`);
            console.log(res.data);

            setCliente(res.data)
        };

        loadCliente();
    }, []);

    const updateCliente = async (e) => {
        e.preventDefault();

        try {
            
            const res = await clienteFetch.put(`/clientes/${cliente._id}`, cliente);

            console.log(res.data.msg);

            if(res.status === 200){
                navigate(`/cliente/${id}`)

                useToast(res.data.msg);
            }

        } catch (error) {
            useToast(error.response.data.msg, "error")
        }
    }

    if(!cliente) return <p>Carregando...</p>

    return(
        <div className="form-page">
        <h2>Editando: {cliente.nome}</h2>
        <p>Atualize o valor da leitura</p>
        <form action="" onSubmit={(e) => updateCliente(e)}>
            <label >
                <span>Número da casa: </span>
                <input type="number" placeholder='N° da casa' required onChange={(e) => setCliente({...cliente, numero: e.target.value})}
                value={cliente.numero}
                />
                
                <span>Nome do morador: </span>
                <input type="text" placeholder='Nome morador' required onChange={(e) => setCliente({...cliente, nome: e.target.value})}
                value={cliente.nome}
                />

                <span>Leitura anterior: </span>
                <input type="number"  
                required 
                placeholder='Lei. anterior'
                onChange={(e) => setCliente({...cliente, leitAnt: e.target.value})}
                value={cliente.leitAnt}
                />

                <span>Leitura atual: </span>
                <input type="number"  
                required
                placeholder='lei. atual' 
                onChange={(e) => setCliente({...cliente, leitAtual: e.target.value})}
                value={cliente.leitAtual }
                />

                <input type="submit" value="Editar cliente" className="btn"/>
            </label>
        </form>
    </div>
    )
};

export default EditCliente;