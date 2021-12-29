import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './card.css'

export default function Card(props) {
    const { title, items, color, id } = props;
    return (
        <div className='card-container' style={{ "backgroundColor": color }}>
            <Link to={`/list/${id}`}>
                <div className='card-title'>{title}</div>
            </Link>
            <div className="card-items" > {items} items</div>
        </div >
    )
}
