import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.items.imageUrl} alt={props.title} />
      </div>
      <div className="card-body">
        <div className="card-location">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Japan</p>
          </div>
          <div className="view-location">
            <a href={props.items.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </div>
        </div>
        <h2 className="card-title">{ props.items.title }</h2>
        <h4 className="card-dates">
          <span>{ props.items.startDate }</span>
          <span> - </span>
          <span>{ props.items.endDate }</span>
        </h4>
        <p className="card-description">
          { props.items.description }
        </p>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default Card