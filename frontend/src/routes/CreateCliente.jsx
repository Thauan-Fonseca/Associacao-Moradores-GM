import  { useState } from 'react';
import { useNavigate } from "react-router-dom";
import clienteFetch from '../axios/config';
import useToast from '../hook/useToast';
import './Form.css';


const CreateCliente = () => {

    const [numero, setNumero] = useState(0);
    const [nome, setNome] = useState('');
    const [leitAnt, SetleitAnt] = useState(0);
    const [leitAtual, setLeitAtual] = useState(0);

    const navigate = useNavigate();

    const createNewCliente = async (e) => {
        e.preventDefault();

        try {
            const cliente = {
                numero,
                nome,
                leitAnt,
                leitAtual,
            };
            
            const res = await clienteFetch.post('/clientes', cliente);

            if(res.status === 201) {
                navigate("/");
                useToast(res.data.msg);
            }
        } catch(error){
            useToast(err.response.data.msg, "error");
        }
         
        
    };

    return (
        <div className="form-page">
            <h2>Criar novo cliente</h2>
            <p>Insira os dados</p>
            <form action="" onSubmit={(e) => createNewCliente(e)}>
                <label >
                    <span>Número da casa: </span>
                    <input type="number" placeholder='N° da casa' required onChange={(e) => setNumero(e.target.value)}
                    value={numero}
                    />

                    <span>Nome do morador: </span>
                    <input type="text" placeholder='Nome morador' required onChange={(e) => setNome(e.target.value)}
                    value={nome}
                    />

                    <span>Leitura anterior: </span>
                    <input type="number"  required placeholder='Lei. anterior'onChange={(e) => SetleitAnt(e.target.value)}
                    value={leitAnt}
                    />

                    <span>Leitura atual: </span>
                    <input type="number"  required placeholder='lei. atual' onChange={(e) => setLeitAtual(e.target.value)}
                    value={leitAtual}
                    />

                    <input type="submit" value="Criar cliente"/>
                </label>
            </form>
        </div>
    )
}

export default CreateCliente;