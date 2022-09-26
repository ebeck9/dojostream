import logo from './logo.svg';
import React, {useState,useEffect} from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsExports from './aws-exports';

import {updateUser} from './graphql/mutations'
import {getUser} from './graphql/queries'

import './App.css';
Amplify.configure(awsExports);

function App() {
  const [userMoney, setUserMoney] = useState(0);

  async function fetchUserMoney(){
    try{
      const userData = await API.graphql(graphqlOperation(getUser))
      const userMoney = userData.data.getUser.money
      setUserMoney(userMoney)
    }
    catch(err){
      console.log('error fetching userMoney')
      console.log(err)
    }
  }

  


  useEffect(() => {
    fetchUserMoney()
  }, [])

  async function updateUserMoney(){

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to dojostream</h1>
        <p>This website is still in development, but stay tuned for new updates.</p>    
        <h2>${userMoney}</h2>
        <button onClick ={updateUserMoney}>Users money</button>
      </header>
    </div>
  );
}

export default App;
