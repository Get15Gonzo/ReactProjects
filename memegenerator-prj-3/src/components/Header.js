import MemeFace from '../images/meme-face.png'

export default function Header() {
    return (
        <div className ="header">
            <img src={MemeFace} className="header--img" />
            <p className="header--title">Meme Generator</p>
            <p className="header--course">React Course - Project 3</p>
        </div>
    )
}