import React, { useState } from 'react'
import './card.css'

export default function Card(props) {
    const { title, items, color } = props;
    return (
        <div className='card-container' style={{ "backgroundColor": color }}>
            <div>{title}</div>
            <div className="card-items" > {items} items</div>
        </div >
    )
}
