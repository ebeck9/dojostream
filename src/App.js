import logo from './logo.svg';
import React, {useState,useEffect} from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsExports from './aws-exports';

import {createUser} from './graphql/mutations'
import {getUser} from './graphql/queries'
import * as mutations from './graphql/mutations'

import './App.css';
Amplify.configure(awsExports);


var price = 0 

function App() {

  async function printTest(){
    const user = {
      id : 2,
      name: "Ethan B",
      phone: 2175551234,
      email: "test@test.com",
      money: 4,
    };
    try{
      return await API.graphql({query: mutations.createUser, variables: {input:user}})
    }catch(e){
      alert(e)
    }
  }

  ///usestate assigns userMoney to initial render state, and setUserMoney is a setmethod
  async function createNewUser(){
    const user = {
      id : 2,
      name: "Ethan B",
      phone: 2175551234,
      email: "test@test.com",
      money: 4,
    };
  }

  async function updatePrice(){
    price = price + 1
  }
  
  /*const [userMoney, setUserMoney] = useState(0);

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
  }, [])*/

  /*async function updateUserMoney(){

    console.log("Hello!")

    try{
      const userData = await API.graphql(graphqlOperation(getUser))
      const userMoney = userData.data.getUser + 1

      const updatedUserMoney = await API.graphql(graphqlOperation(updateUser,{input: userMoney}))
      setUserMoney(updatedUserMoney.data.updateUser)
    }catch(err){
      console.log('error updating userMoney')
      console.log(err)
    }

  }*/

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to dojostream</h1>
        <p>This website is still in development, but stay tuned for new updates.</p>    
        <h2>${price}</h2>
        <button onClick = {printTest}>Users money</button>
      </header>
    </div>
    
  );
}

export default App;
