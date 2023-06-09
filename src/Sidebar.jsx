import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './css/Sidebar.css'
import SidebarChat from './SidebarChat';
import { useEffect } from 'react';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{user},dispatch] = useStateValue()
    useEffect(() =>{
        db.collection("rooms").onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc=>({
                id: doc.id,
                data:doc.data()
            })))
        })
    },[])
    console.log(rooms);

  return (
    <div className='sidebar'>
        {/* Left Side*/}
        <div className='sidebar__header'>
            <Avatar src={user.photoURL} onclick={e=>firebase.auth().signOut()}></Avatar>
        {/* Right Side*/}

            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>

                <IconButton>
                    <ChatIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>


        </div>
             {/* Search Icon */}
        <div className='sidebar__search'>
            <div className='sidebar__searchcontainer'>
                <SearchIcon/>
                <input type="text" placeholder='Search or start a new chat' />
            </div>

        </div>

        {/* Chat */}
        <div className='sidebar__Chats'>
            <SidebarChat addnewchat/>
            {
                rooms.map(room=>{
                    return <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                })
            }
            



        </div>


      
    </div>
  )
}
export default Sidebar;
