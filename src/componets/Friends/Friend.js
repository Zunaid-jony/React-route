import React, { useEffect, useState } from 'react';
import Friend1 from '../Friend1/Friend1';
import './Friend.css'

const Friend = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch(`jony.JSON`)
        .then(response => response.json())
        .then(data => setFriends(data))
    },[])
    return (
        
        <div >
           <h2> THIS IS FRIEND PAGES {friends.length}</h2>
           <div className='carts'>
           {
               friends.map( friend => <Friend1
               key={friend.id}
               friend={friend}
               >
               </Friend1>)
           }
           </div>
        </div>
    );
};

export default Friend;