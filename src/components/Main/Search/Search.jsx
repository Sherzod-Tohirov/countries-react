import './search.css';
import { CONTINENTS as continents } from './continents';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
export const Search = ({ type, observer}) => {
    const searchRef = useRef();
    const {theme} = useContext(ThemeContext);
    let timer = '';
    function handleSearch(evt) {
        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            observer.setSearch(evt.target.value);
        }, 800);
     
    }
    function handleFilter(evt) {
        observer.setFilter(evt.target.value);
    }
   if(type === 'search') {

        return ( 
            <form className="hero__form" onSubmit={(evt) => evt.preventDefault()}>
                <input
                ref={searchRef}
                onChange={(evt) => handleSearch(evt)} 
                type="search"
                name='search'
                className={`hero__form-input search ${theme === 'dark' ? 'dark-search' : ''}`} 
                placeholder="Search for a country…" 
                aria-label="Search for a country…" 
                
                />
            </form>
        )
   }

   if(type === 'filter') {
        return ( 
            <form className="hero__form">
                <select className={`hero__form-input filter ${theme === 'dark' ? 'dark-filter' : ''}`}   name='filter' onChange={(evt) => handleFilter(evt)}>
                    <option value='' hidden>Filter by Region</option>
                    {
                        continents.map(item => {
                            return <option key={item.id} value={item.value}>{item.continent}</option>
                        })
                    }
                </select>
            </form>
        )
   }
}


