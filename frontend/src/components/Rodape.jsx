import brasao from '../../assets/imgCabecalho/brasao.png';
import './Rodape.css';
import { NavLink } from 'react-router-dom';



const Rodape = () => {
    return(
    <div className='rodape'>
        

        <div className='info'>
            <div>
                <img src={brasao} alt="" />
            </div>
            <ul>
                <li>
                    <NavLink to="/">
                        Propósito
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sobre" className="btn">
                        Sobre
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='texto'>
            <h3>Associção do desenvolvimento comum rural de Garrota Morta</h3>
            <h3>ADECORGAM - CNPJ: 05.983.194/0001-06</h3>
            <h3>Sítio Garrota Morta - Zona Rural </h3>
            <h3> Antônio Martins - CEP: 59870-000 </h3>
        </div>
        
    </div>
    )
}

export default Rodape;
