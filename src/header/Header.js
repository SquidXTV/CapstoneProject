import logo from '../assets/logo.svg';
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo"/>
            <nav className="navigation">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;