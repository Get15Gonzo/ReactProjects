import RedStarLogo from '../images/red-star.png'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--img" />
            <div className="card--stats">
                <img src={RedStarLogo} className="card--star" />
                <span>{props.stats.rating}</span> 
                <span className="gray">({props.stats.reviewCount}) - </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / Person</p>
        </div>
    )
}