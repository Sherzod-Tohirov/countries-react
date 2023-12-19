import './list.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './Card';
import {ScaleLoader} from 'react-spinners';
export const List = ({filter, search}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [fields, setFields] = useState('name,flags,region,population,capital');
  useEffect(() => {
    getData(`https://restcountries.com/v3.1/all?fields=${fields}`);
  }, [fields]);

  useEffect(() => {
    if(search !== '') getData(`https://restcountries.com/v3.1/name/${String(search).toLowerCase()}`);
    if(!data.length) getData(`https://restcountries.com/v3.1/all?fields=${fields}`);
  }, [search]);
  useEffect(() => {
    if(filter !== '' && filter !== 'all') getData(`https://restcountries.com/v3.1/region/${filter}`);
    if(!data.length || filter === 'all') getData(`https://restcountries.com/v3.1/all?fields=${fields}`);
  }, [filter]);
  function getData(url) {
    axios.get(url)
    .then(res => {
      if(res.status === 200) {
        setError('');
        setData(res.data);
      }

      if(res.status === 404) {
        setError(res.statusText);
      }
    })
    .catch(err => {
      setData([]);
      console.log(err);
      setError(err.response?.statusText);
    });
  }
  return (
    <ul className='hero__list'>

      {
        data.length ? data.map(item => {
            return <Card key={item?.name?.common} data = {item} />       
        }) : !error ?
        <div className='loader-wrapper'>
          <ScaleLoader color='#ccc' width={10} height={60} />
        <p className='loader-text'>Loading...</p>
        </div>
        : <p className='error'>{error}</p>
      }



    </ul>
  )
}

