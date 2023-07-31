import {useGlobalContext} from '../context';
import {BsHandThumbsUp} from 'react-icons/bs';

const Meals = () => {
const {meals, loading} = useGlobalContext()
    
if(loading) {
    return <section className="section">
        <h4>Loading...</h4>
    </section>
}
if(meals.length < 1) {
    return <section className="section">
        <h4>No meals matched your search term. Please try again.</h4>
    </section>
}

    return <section class="section-center">
        {meals.map((singleMeal)=> {
            const {idMeal, strMeal:title, strMealThumb:image} = singleMeal
            return <article key={idMeal} class='single-meal'>
            <img src={image} class="img"/>
            <footer>
                <h5>{title}</h5>
                <button class="like-btn"><BsHandThumbsUp/></button>
            </footer>
            </article>
        })}
    </section>
}

export default Meals