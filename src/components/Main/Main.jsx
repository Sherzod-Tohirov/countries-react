import { useState } from 'react';
import { List } from './List';
import { Search } from './Search';
import './main.css';
export const Main = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  return (
    <main className='site-main'>
       <section className='hero'>
                <div className='container'>
                    <div className='hero__wrapper'>
                        <div className='hero__form-wrapper'>
                            <Search type='search' observer={{search, setSearch}} />
                            <Search type='filter' observer={{filter, setFilter}} />
                        </div>
                        <List filter={filter} search={search} />
                    </div>
                </div>
       </section>
    </main>
  )
}
