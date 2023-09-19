import './App.css';
import Entry from './components/Entry'
import Navbar from './components/Navbar'
import data from './data'

export default function App() {
    const travel = data.map(place => {
        
        return (
            <Entry
                key={place.id}
                {...place}
            />
        )
    })
    return (
        <>
            <Navbar />
            {travel}
        </>
    )
}
