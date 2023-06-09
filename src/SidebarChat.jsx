import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './css/Sidebar.css';
import db from './firebase';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { LastPage } from '@material-ui/icons';
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function SidebarChat({id, name , addnewchat}) {
    const [seed, setseed] = useState("");
    const[lastmessage, setLastMessage] = useState("");
    useEffect(()=>{
        setseed(Math.floor(Math.random() * 5000))
        db.collection("rooms").doc(id).collection("message").orderBy("timestamp","desc").onSnapshot(snapshot=>setLastMessage(snapshot.docs.map(doc=>doc.data())))
    },[])

    const createChat = () =>{
      const room = prompt("Please Enter room name. ");
      if(room)
      {
        db.collection("rooms").add({
          name:room
        })
      }
    }



  return (
    !addnewchat ? (
      <Link to = {`/room/${id}`}>
      
    <div className='sidebar__chat'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className='sidebar__chatInfo'>
        <h3>{name}</h3>
        <p>{lastmessage[0]?.message}</p>
      </div>
    </div>
    </Link>

  
    ):(
        <div className='sidebar__chat' onClick={createChat} >
            <h2>Add New Chat </h2>
        </div>
    )

  )
}

export default SidebarChat;
