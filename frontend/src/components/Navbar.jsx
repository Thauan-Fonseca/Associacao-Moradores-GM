import { NavLink } from 'react-router-dom';
import './Navbar.css';
import brasao from '../../assets/imgCabecalho/brasao.png'

const NavBar = () => {
    return(
        <nav id='navegacao'>
            <img src={brasao} alt="" />
            
            <ul>
                <li>
                    <NavLink to="/">
                        Lista de Clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clientes/new" className="btn">
                        Criar Cliente
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar