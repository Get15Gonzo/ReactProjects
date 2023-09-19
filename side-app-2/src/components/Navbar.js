import InternetLogo from '../images/internet-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={InternetLogo} className="nav--img" />
            <p className="nav--title">my travel journal.</p>
        </nav>
    )
}