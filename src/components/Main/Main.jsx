import { List } from './List';
import { Search } from './Search';
import './main.css';
export const Main = () => {
  return (
    <main className='site-main'>
       <section className='hero'>
                <div className='container'>
                    <div className='hero__wrapper'>
                        <div className='hero__form-wrapper'>
                            <Search type='search' />
                            <Search type='filter' />
                        </div>
                        <List />
                    </div>
                </div>
       </section>
    </main>
  )
}
