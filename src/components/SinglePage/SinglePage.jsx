import { useContext, useEffect, useState } from 'react';
import './singlepage.css';
import {Link, useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../Loader';
import { ThemeContext } from '../../context/ThemeContext';
export const SinglePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [change, setChange] = useState(false);
  const [url, setUrl] = useState(`https://restcountries.com/v3.1/name/${params?.name}`);
  const {theme, setTheme} = useContext(ThemeContext);
  useEffect(() => {
    console.log(params);
    if(params?.name) {
        axios.get(url)
        .then(res => {
            if(res.status === 200) {
                setLoading(false);
                setData({...res.data[0]});
                navigate(`/${res.data?.[0]?.name?.common}`);
            }
        })
        .catch(err => console.log(err));
    }
  }, [change]);


  return (
    <div className='container'>
        <div className='singlepage__wrapper sp'>
            {
                !loading ? (
                    <>
                        <button onClick={() => navigate(-1)} className={`sp__btn ${theme === 'dark' ? 'dark-btn' : ''}`} type='button'>Back</button>
                        <div className={`sp__data-wrapper row ${theme === 'dark' ? 'dark-text' : ''}`}>
                            <div className='col sp__img-wrapper'>
                                <img className='sp__img' src={data?.flags?.svg || data?.flags?.png} alt="" width={560} height={401} />
                            </div>
                            <div className='col sp__data-inner-wrapper'>
                                <h2 className='sp__title' title=''>
                                    {data?.name?.common}
                                </h2>
                                <div className='sp__inner-wrapper'>
                                    <div className='sp__lt-data text-wrapper'>
                                        <p className='sp__text'><strong className='sp__text-bold'>Native name: </strong> {data?.name?.official}</p>
                                        <p className='sp__text'><strong className='sp__text-bold'>Population: </strong> {Number(data?.population).toLocaleString()}</p>
                                        <p className='sp__text'><strong className='sp__text-bold'>Region: </strong> {data?.region}</p>
                                        <p className='sp__text'><strong className='sp__text-bold'>Sub Region: </strong> {data?.subregion}</p>
                                        <p className='sp__text'><strong className='sp__text-bold'>Capital: </strong> {data?.capital?.[0]}</p>
                                    </div>
                                    <div className='sp__rt-data text-wrapper'>
                                        <p className='sp__text'><strong className='sp__text-bold'>Top Level Domain: </strong> {data?.tld?.[0]}</p>
                                        <p className='sp__text'><strong className='sp__text-bold'>Currencies: </strong> {data?.currencies[Object.keys(data?.currencies)[0]]?.name}</p>
                                        <p className='sp__text'><strong className='sp__text-bold'>Languages: </strong> {(Object.values(data?.languages)).join(", ")}</p>
                                    </div>
                                </div>
                                <div className='sp__border-data'>
                                    <p className='sp__border-text'>
                                    <span className='mr-15 d-i-flex'>Border Countries: </span>{
                                        data?.borders?.length ? (data.borders.map((item, index) => {
                                            return <Link key={index} className='sp__border-link' onClick={() => {
                                                setUrl(`https://restcountries.com/v3.1/alpha?codes=${item}`);
                                                setChange((prev) => !prev);
                                            } }>{item}</Link>
                                        })) : "No data"
                                    }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : <Loader />
            }
        </div>
    </div>
  )
}

