import React from 'react';
import './Friend1.css'
import { Link } from 'react-router-dom';

const Friend1 = (props) => {
    const {name, id, price, category,imageURL,description} =props.friend;

    const Url = `/friend/${id}`//ata link are jonn kora hoise 
    return (
        <div className='cart-img'>
            <img src={imageURL}></img>
            <h6> Name:{name}</h6>
            <p>Price:{price} TAKA</p>
            <p>{description}</p>
            <button className='button'>Buy Nwe</button>
            <br></br>
            <Link to={Url}> Visit Me</Link>
    

        </div>
    );
};

export default Friend1;