import { Link } from 'react-router-dom';
import './card.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';

export const Card = ({data}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <li className={`hero__item item ${theme === 'dark' ? 'dark-card' : ''} `}>
        <Link className={`hero__link ${theme === 'dark' ? 'dark-item' : ''}`} to={`/${data?.name?.common}`}>
          <img className='item__img' src={data.flags?.svg} alt={data?.name?.official} width={267} height={160} />
          <div className='item__details'>
            <h3 className='item__title' title={data?.name?.official}>{data?.name?.official}</h3>
            <div className='item__text-wrapper'>
              <p className='item__text' title={`Population: ${Number(data?.population).toLocaleString()}`}>
                <strong className='item__bold'>Population: </strong>
                {Number(data?.population).toLocaleString()}
              </p>
              <p className='item__text' title={`Region: ${data?.region}`}>
                <strong className='item__bold'>Region: </strong>
                {data?.region}
              </p>
              <p className='item__text' title={`Capital: ${data?.capital}`}>
                <strong className='item__bold'>Capital: </strong>
                {data?.capital}
              </p>

            </div>
          </div>
        </Link>
    </li>
  )
}
