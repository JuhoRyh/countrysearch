import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

const Country = () => {
  const [country, setCountry] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { isocode } = useParams()

  //Loads country data using url param (error handling bit of a mess atm)
  useEffect(() => {
      axios.get(`https://restcountries.eu/rest/v2/alpha/${isocode}`).then(res => {
        setCountry(res.data)
        setLoading(false)
      }).catch(err => {
        setError(true)
        setLoading(false)
      })
    },[isocode])

    //Conditional rendering to catch errors and rendering before loading complete
    if(loading){
      return(<div className="w-screen h-screen text-white text-center bg-gray-800">Loading</div>)
    }else if(error){
      return(<div className="w-screen h-screen text-white text-center bg-gray-800">Error with isocode</div>)
    }else{
      return(
        <div className="bg-gray-800 min-h-screen">
          <h1 className="text-white text-5xl text-center p-6">{country.name}</h1>
          <div className="flex flex-col bg-gray-400 mx-6 p-4 rounded-md md:w-2/3 xl:w-1/2 sm:flex-row mx-auto">
            <div className="flex-1">
              <p className="text-2xl">Capital City: {country.capital}</p>
              <p className="text-2xl">Population: {country.population}</p>
              <p className="text-2xl">Languages: {country.languages.map(language => `${language.name}, `)}</p>
              <p className="text-2xl pb-4">Currencies: {country.currencies.map(currency => `${currency.name}, `)}</p>
            </div>
            <div className="flex-1">
              <img className="w-3/4 sm:w-full mx-auto" src={country.flag} alt={`The flag of ${country.name}`} />
            </div>
          </div>
        </div>
      )
    }

}

export default Country