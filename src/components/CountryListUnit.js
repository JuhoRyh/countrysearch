import {Link} from 'react-router-dom'

const CountryListUnit = (props) => {

  //Render with link to countries own page
  return(
    <Link to={`/${props.country.alpha3Code}`}>
      <div className="flex items-center justify-between bg-gray-400 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div className="flex-1">
          <img className="max-h-12" src={props.country.flag} alt={`Flag of ${props.name}`}/>
        </div>
        <p className="flex-1">{props.country.name}</p>
        <p className="flex-1">{props.country.subregion}</p>
        <p className="flex-1 text-right pr-2">{props.country.population}</p>
      </div>
    </Link>
  )
}

export default CountryListUnit



