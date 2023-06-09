import './App.css';
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Login from './Login';
import Chat from './Chat';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

  



function App()
{
    const [{user},dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(user=>{
            dispatch({
                type:"SET_USER",
                user:user
            })
        })
    },[])


    return (
        <Router>
            <Switch>
             {
                !user ? (<Login/> ) : (
                    <div className='App'>
            <div className='app__body'>
                {/* Side Bar*/}
                <Sidebar></Sidebar>
                {/* Chatbox */}

                <Route exact path='/'>
                <Chat/>
                </Route>

                <Route path='/room/:roomId'>
                <Chat/>
                </Route>
            </div>
        </div>
                )
        } 
        
        </Switch>
        </Router>

    )
}
export default App;