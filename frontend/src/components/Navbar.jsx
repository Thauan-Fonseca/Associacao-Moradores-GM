import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return(
        <nav>
            <h2>Associação do moradores da comunidade de garrota morta</h2>
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