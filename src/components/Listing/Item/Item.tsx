type ItemProps = {
  item: {
    listing_id: number,
    url: string,
    title: string,
    price: string,
    currency_code: string,
    quantity: number,
    MainImage:  {
      url_570xN: string,
    }
  }
}

export function Item(props: ItemProps) {
  const { url, MainImage, title, currency_code,  price, quantity } = props.item;
  const title_short = (title && title.length > 50) ? title.slice(0, 50) + "..." : title;
  let formattedPrice: string;
  let level: string;

  switch (currency_code) {
    case 'USD':
      formattedPrice = '$' + price;
      break;
    case 'EUR':
      formattedPrice = '€' + price;
      break;
    default:
      formattedPrice = currency_code + ' ' + price;
      break;
  }

  if (quantity > 20) {
    level = "level-high";
  } else if (quantity > 10) {
    level = "level-medium";
  } else {
    level = "level-low";
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={ url }>
          <img src={ MainImage.url_570xN } alt={ title }/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{ title_short }</p>
        <p className="item-price">{ formattedPrice }</p>
        <p className={`item-quantity ${level}`}>{ quantity } left</p>
      </div>
    </div>
  )
}
