import { useContext } from 'react';
import {ScaleLoader} from 'react-spinners';
import { ThemeContext } from '../../context/ThemeContext';

export const Loader = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className='loader-wrapper'>
          <ScaleLoader color='#ccc' width={10} height={60} />
        <p className={`loader-text ${theme === 'dark' ? 'dark-loader' : ''}`}>Loading...</p>
    </div>
  )
}
