import { Link } from 'react-router-dom';
import './header.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  function handleTheme() {
     if(theme === 'light') {
        setTheme('dark');
     }else {
        setTheme('light');
     }
  }
  return (
    <header className={`site-header ${theme === 'dark' ? 'dark-header' : ""}`}>
        <div className='container'>
           <div className='site-header__wrapper'>
                <Link className='logo' to={'/'}>Where in the world?</Link>
                <button className='site-header__btn' onClick={handleTheme} type='button'>Dark mode</button>
           </div>
        </div>
    </header>
  )
}
