import Data from './../../data'
import './Body.css'
import Card from '../Card/Card.jsx'

function Body() {
  const destinations = Data.map((destination) => {
    return (
      <Card
        key = {destination.id}
        items = {destination}
      />
    )
  })
  return (
    <div className="body">
      { destinations }
    </div>
  )
}

export default Body