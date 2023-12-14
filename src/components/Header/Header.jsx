import './header.css';

export const Header = () => {
  return (
    <header className='site-header'>
        <div className='container'>
           <div className='site-header__wrapper'>
                <a className='logo' href='./index.html'>Where in the world?</a>
                <button className='site-header__btn' type='button'>Dark mode</button>
           </div>
        </div>
    </header>
  )
}
