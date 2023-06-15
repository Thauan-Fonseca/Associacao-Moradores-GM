import clienteFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import './Cliente.css';

import useToast from "../hook/useToast";

import { pdf, Document, Page, Text, View } from '@react-pdf/renderer';




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

    const consumo = () => {
        const anterior = cliente.leitAnt;
        const atual = cliente.leitAtual;

        const consumido = (atual - anterior);
        return consumido
    }

    const excesso = () => {
        const anterior = cliente.leitAnt;
        const atual = cliente.leitAtual;

        const consumido = (atual - anterior);
        let sobra = 0

        if(consumido > 15){
            sobra = consumido - 15
            return sobra
        } else {
            sobra = 0
            return sobra
        }
    }

    const totalAPagar = () => {
        const anterior = cliente.leitAnt;
        const atual = cliente.leitAtual;

        const consumido = (atual - anterior);
        let sobra = 0
        let subTotal = 0;
        let total = 0;

        if(consumido > 15){
            sobra = consumido - 15;
            subTotal = sobra * 5;
            total = subTotal +25
            return total
        } else {
            total = 25
            return total
        }
    }

    const dataAtual = () => {
        let data = new Date();
        let novaData = new Date(data);

        return `05/${novaData.getMonth() + 1}/${novaData.getFullYear()}`
        
    }

    const proximaData = () => {
        let data = new Date();
        let novaData = new Date(data);

        return `05/${novaData.getMonth() + 2}/${novaData.getFullYear()}`
    }

    const dataVencimento = () => {
        let data = new Date();
        let novaData = new Date(data);

        return `20/${novaData.getMonth() + 1}/${novaData.getFullYear()}`
    }

    const handlePrint = async () => {
  const doc = (
    <Document>
      <Page>
        <Text style={{ textAlign: "center", marginTop: "20px",fontSize: "24px" }}>Associação do desenvolvimento comum rural do sítio Garrota Morta  </Text>
        <Text  style={{textAlign: "center", marginBottom: "75px", marginTop: "20px"}}>
            ADECORGAM - CNPJ: 05.983.194/0001-06
            Sítio Garrota Morta - Zona Rural
            Antônio Martins - CEP: 59870-000
        </Text>
        <View style={{display: "flex", justifyContent: "space-around"}}>

            <Text style={{textAlign: "center"}}>Cliente: {cliente.nome}</Text>
            <Text style={{textAlign: "center",marginBottom: "20px"}}>Núnmero da casa: {cliente.numero}</Text>

            <Text style={{borderBottom: "1px solid #000000", paddingLeft: "40px", marginTop: "100px"}}>Taxa Máxima(m3)    Preço/Taxa    Valor em excesso    Subtotal</Text>
            <Text style={{ paddingLeft: "75px", marginTop: "8px"}}>    15(m3)                 R$25,00              R$5,00            R$25,00</Text>
            
            <Text style={{borderBottom: "1px solid #000000", paddingLeft: "48px", marginTop: "16px"}}>Leitura Anterior        Leitura Atual       Consumo          Excesso</Text>
            
            <Text style={{paddingLeft: "70px", marginTop: "8px"}}>{cliente.leitAnt}(m3)                  {cliente.leitAtual}(m3)             {consumo()}(m3)            {excesso()}(m3)</Text>

            <Text style={{borderBottom: "1px solid #000000", paddingLeft: "48px", marginTop: "16px"}}>Data da leitura      Próxima Leitura   Data Vencimento     Total</Text>
            <Text style={{paddingLeft: "62px", marginTop: "8px"}}>{dataAtual()}                {proximaData()}          {dataVencimento()}          R${totalAPagar()},00</Text>
        </View>

      </Page>
    </Document>
    
  );

  const asPdf = pdf();
  asPdf.updateContainer(doc);
  const blob = await asPdf.toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'cliente.pdf';
  link.click();
  useToast('PDF impresso com sucesso')
};


    return(
    <div className="cliente" id="documento">

        <h1>Associação do desenvolvimento comum rural do sítio Garrota Morta - ADECORGAM</h1>
        <h3>Dados Do Cliente</h3>
        <h3>Número da casa: {cliente.numero}</h3>
        <h3>Cliente: {cliente.nome}</h3>
        <table>
           <thead>
                <tr  className="tabela">
                    <td >Taxa máxima</td>
                    <td>Preço/taxa</td>
                    <td>Valor m<sup>3</sup> em excesso</td>
                    <td>Valor mínimo</td>
                </tr>

                <tr className="tabela">
                    <td>15 m<sup>3</sup></td>
                    <td>R$25,00</td>
                    <td>R$5,00</td>
                    <td>R$25,00</td>
                </tr>
           </thead>

           <tbody>
                <tr className="tabela">
                    <td>Leitura anterior</td>
                    <td>Leitura atual</td>
                    <td>Consumo</td>
                    <td>Excesso</td>
                </tr>
                   
                
                <tr className="tabela">
                    <td>{cliente.leitAnt} m<sup>3</sup></td>
                    <td>{cliente.leitAtual} m<sup>3</sup></td>
                    <td>{consumo()}m<sup>3</sup></td>
                    <td>{excesso()} m<sup>3</sup></td>
                </tr>

                <tr className="tabela">
                    <td>Data da leitura</td>
                    <td>Próxima leitura</td>
                    <td>Data do vencimento</td>
                    <td>Total a pagar</td>
                </tr>

                <tr className="tabela">
                    <td>{dataAtual()}</td>
                    <td>{proximaData()}</td>
                    <td>{dataVencimento()}</td>
                    <td>R${totalAPagar()},00</td>
                </tr>


           </tbody>
        </table>

        <div className="container-botoes">
            <Link to={`/cliente/edit/${cliente._id}`}className="btn2">Editar</Link>
            <Link className="btn1" onClick={handlePrint}>Imprimir</Link>
            <Link onClick={handleDelete} className="btn3">Excluir</Link>
        </div>
    </div>
    )
}

export default Cliente;