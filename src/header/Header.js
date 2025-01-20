import logo from '../assets/logo.svg';
import "./Header.css"

function Header() {

    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a className="header-link" href="/home">Home</a></li>
                    <li><a className="header-link" href="/about">About</a></li>
                    <li><a className="header-link" href="/menu">Menu</a></li>
                    <li><a className="header-link" href="/reservations">Reservations</a></li>
                    <li><a className="header-link" href="/order-online">Order online</a></li>
                    <li><a className="header-link" href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;