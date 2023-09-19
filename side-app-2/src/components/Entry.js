import pinpoint from '../images/pinpoint.png'

export default function Entry(props) {
    return (
        <div className="entry">
            <img src={props.img} className="entry--img" />
            <div className="container">
            <div className="entry--firstline">
                <img src={pinpoint} className="entry--pinpoint" />
                <span className="entry--location">{props.location}</span>
                <a className="entry--link" href={props.link}>View on Google Maps</a>
            </div>
            <h3 className="entry--destination">{props.destination}</h3>
            <p className="entry--date">{props.date.start} - {props.date.end}</p>
            <p className ="entry--description">{props.description}</p>
            </div>
        </div>
    )
}