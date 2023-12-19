import './card.css';

export const Card = ({data}) => {
  return (
    <li className='hero__item item'>
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
    </li>
  )
}
