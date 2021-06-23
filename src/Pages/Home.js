import { useState, useEffect } from "react"
import axios from 'axios'
import CountryList from '../components/CountryList'

const Home = () => {
  const [countries, setCountries] = useState()
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  //Loads data of all countries which it stores in state defined above
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      setCountries(res.data)
      setLoading(false)
    })
  },[])

  //Sets term which user inputs to be later used with filtering
  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  //Conditional rendering to stop from rendering before data
  if(loading){
    return(<div className="w-screen h-screen text-white text-center bg-gray-800">Loading</div>)
  }else{
    return(
      <div className="flex-col justify-center max-w-screen min-h-screen bg-gray-800">
        <h1 className="text-white text-5xl text-center py-8">Country Search</h1>
        <div className="mx-auto sm:w-full md:w-2/3 xl:w-1/2 pb-6">
          <input className="w-full mb-4 p-4 focus:ring outline-none rounded-md" onChange={searchHandler} placeholder="Search by countrys name or sub region"></input>
          <CountryList countries={countries} search={search}/>
        </div>
      </div>
    )
  }

}

export default Home