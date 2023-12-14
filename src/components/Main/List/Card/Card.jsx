import './card.css';

export const Card = ({data}) => {
  return (
    <li className='hero__item item'>
        <img className='item__img' src={data?.flag} alt={data?.title} width={267} height={160} />
        <div className='item__details'>
          <h3 className='item__title' title={data?.title}>{data?.title}</h3>
          <div className='item__text-wrapper'>
            <p className='item__text' title={`Population: ${data?.population}`}>
              <strong className='item__bold'>Population: </strong>
              {data?.population}
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
