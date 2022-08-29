import { createContext, useContext, useState } from "react";

const ResultContext = createContext()
const baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch'

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getResult = async (link) => {
        setIsLoading(true)
        const response = await fetch(baseUrl, {
            method: 'GET',
            params: {query: link},
            headers: {
                'X-RapidAPI-Key': '424037bb1dmshcc1ad79a496cdb6p14f695jsn42cb1e147ae6',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        })
        const data = await response.json()
        setResults(data)
        setIsLoading(false)
    }
    return (
        <ResultContext.Provider value={{getResult, results, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);