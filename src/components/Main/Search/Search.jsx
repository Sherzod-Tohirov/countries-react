import './search.css';

export const Search = ({ type }) => {
   if(type === 'search') {
        return ( 
            <form className="hero__form">
                <span className="hero__icon icon-search"></span>
                <input 
                type="search"
                name='search'
                className="hero__form-input search" 
                placeholder="Search for a country…" 
                aria-label="Search for a country…" 
                
                />
            </form>
        )
   }

   if(type === 'filter') {
        return ( 
            <form className="hero__form">
                <select className="hero__form-input filter" name='filter'>
                    <option value='' hidden>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        )
   }
}


