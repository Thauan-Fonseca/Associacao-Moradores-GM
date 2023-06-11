import { NavLink } from 'react-router-dom';
import './Navbar.css';


const NavBar = () => {
    return(
        <nav id='navegacao'>
            <h2>Associação de morados do sítio Garrota Morta</h2>
            
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