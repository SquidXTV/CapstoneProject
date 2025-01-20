import logo from '../assets/logo.svg'
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <section>
                <h2 className="karla-font">Navigation</h2>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </section>
            <section>
                <h2 className="karla-font">Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>E-Mail</li>
                </ul>
            </section>
            <section>
                <h2 className="karla-font">Social Media Links</h2>
                <ul>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                    <li><a href="https://www.x.com">Twitter</a></li>
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;