import RyanGoslingLogo from '../images/ryan-gosling.jpg'
import RedStarLogo from '../images/red-star.png'

export default function Card() {
    return (
        <div className="card">
            <img src={RyanGoslingLogo} className="card--img" />
            <div className="card--stats">
                <img src={RedStarLogo} className="card--star" />
                <span>5.0</span> 
                <span className="gray">(6) - </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons w/ Ryan Gosling</p>
            <p><b>From $136</b> / Person</p>
        </div>
    )
}