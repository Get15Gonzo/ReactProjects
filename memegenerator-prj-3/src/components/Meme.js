import React from "react"

export default function Meme() {

    const [meme, SetMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"https://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes)) 
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        SetMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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
               <h2 className="meme--text top">{meme.topText}</h2>
               <h2 className="meme--text bottom">{meme.bottomText}</h2>
           </div>
       </main>
    )
}