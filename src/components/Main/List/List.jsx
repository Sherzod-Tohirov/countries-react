import './list.css';
import {countries} from './data';
import { Card } from './Card';

export const List = () => {
  return (
    <ul className='hero__list'>

      {
        countries.map(item => {
            return <Card data = {item} key={item?.id} />       
        })
        
      }

    </ul>
  )
}

