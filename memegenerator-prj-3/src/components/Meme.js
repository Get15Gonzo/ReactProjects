import React from "react"
import memesData from '../memes-data.js'

export default function Meme() {

    const [meme, SetMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"https://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const [name, value] = event.target
        SetMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = memesData.data
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        SetMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }
    
    return (
       <main>
           <div className="form">
               <input 
                className="form--input" 
                type="text" 
                placeholder="Top text"
                name="topText"
                onChange={handleChange}
                value={meme.topText}
               />
               <input 
                className = "form--input" 
                type="text" 
                placeholder="Bottom text"
                name="bottomText"
                onChange={handleChange} 
                value={meme.bottomText}
               />
               <button 
               className="form--button" 
               onClick={getMemeImage}
               >
                   Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
               <img src={meme.randomImage} className="meme--img" />
               <h2 className="meme--text top">ONe</h2>
               <h2 className="meme--text bottom">Morder</h2>
           </div>
       </main>
    )
}