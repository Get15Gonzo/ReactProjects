import React from "react"
import memesData from '../memes-data.js'

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    let answer = isGoingOut ? "yes" : "no"
    return (
       <main>
           <div className="form">
               <input className="form--input" type="text" placeholder="Top text" />
               <input className = "form--input" type="text" placeholder="Bottom text" />
               <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
               <img src={memeImage} className="meme--img" />
           </div>
       </main>
    )
}