import collage from './collage.png'

export default function Hero() {
    return (
        <section className="hero">
            <img src={collage} className="hero--collage" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activites led by <br/> one-of-a-kind hosts - all without leaving <br/>home</p>
        </section>
    )
}