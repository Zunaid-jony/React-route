import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {

    // friendId Ata hocche  apps.js a a change akrlam oi ta onn id change hoye name hoilo friendId

    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    const history = useHistory();
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${friendId}`)
        .then(response => response.json())
        .then(data => setFriend(data));
    },[]);
    const handelClick =()=>{
        history.push('/friends')

    }
    return (
        <div >
            <h1> FriendDetail coming soon! {friendId} </h1>
          <div className='friedId'>
          <h6> FriendDetail:  {friend.title} </h6>
            <button  className='friedId2' onClick={handelClick}>Click Nwe</button>
            
          </div>
        </div>
    );
};

export default FriendDetail;