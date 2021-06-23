import CountryListUnit from './CountryListUnit'

const CountryList = (props) => {

  //Render countries from array that match the filter, also slices array to first 20 so list is more compact 
  return(
    <div>
      {props.countries.filter(country => country.name.toLowerCase().includes(props.search) || country.subregion.toLowerCase().includes(props.search)).slice(0,20).map(country => {
        return <CountryListUnit country={country} key={country.alpha3Code} />
      })}
    </div>
  )
}

export default CountryList