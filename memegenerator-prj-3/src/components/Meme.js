import MemesData from '../memes-data.js'

export default function Meme() {

    return (
       <main>
           <div className="form">
               <input className="form--input" type="text" placeholder="Top text" />
               <input className = "form--input" type="text" placeholder="Bottom text" />
               <button className="form--button">Get a new meme image 🖼️</button>
           </div>
       </main>
    )
}