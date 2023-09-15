import AirbnbLogo from '../images/airbnb.png'

export default function Navbar() {
    return (
        <nav>
            <img src={AirbnbLogo} classname="nav--logo" />
        </nav>
    )
}