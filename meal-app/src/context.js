import React, { useContext, useEffect } from 'react';
import Axios from 'axios';

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
    
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await Axios('https://randomuser.me/api/')
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        // fetch().then
        // .then async/await
        //
    },[])
    return <AppContext.Provider value ='hello'>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}