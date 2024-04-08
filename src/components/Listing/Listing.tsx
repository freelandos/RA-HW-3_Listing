import data from '../../data/etsy.json'
import { Item } from './Item'

export function Listing() {
  return (
    <div className="items-container">
      <div className="item-list">
        {
          data.map((item) => item.state === "active" && (
            <Item key={item.listing_id} item={item} />
          ))
        }
      </div>
    </div>
  )
}