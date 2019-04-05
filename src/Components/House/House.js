import React from 'react';
import '../../App.css'

const House = (props) => (
    <div key={props.house.id}>
        <h3>{props.house.property_name}</h3>
        <img src={props.house.property_url} alt='Property Pic' />
        <div>Address: {props.house.property_address}</div>
        <div>City: {props.house.property_city}</div>
        <div>State: {props.house.property_state}</div>
        <div>Zip: {props.house.property_zip}</div>
        <div>Monthly Mortgage: ${props.house.property_mortgage}</div>
        <div>Desired Rent: ${props.house.property_rent}</div>
        <button onClick={() => props.delete(props.house.id)}>Delete</button>
    </div>
);

export default House;