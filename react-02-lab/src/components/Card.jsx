import React from 'react'

function Card(props) {
  return (
<div className="card my-5" style={{width: '18rem'}}>
  <img src={props.scientistimg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.scientistName}</h5>
    <p className="card-text">{props.scientistBrief}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.scientistAch1}</li>
    <li className="list-group-item">{props.scientistAch2}</li>
    <li className="list-group-item">{props.scientistAch3}</li>
  </ul>
</div>
  )
}

export default Card