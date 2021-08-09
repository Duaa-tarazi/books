import React from 'react';
import Header from './Header';
import Slide from './Slide';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { withAuth0 } from "@auth0/auth0-react";
import Login from  "./Login";
import BestBooks from "./BestBooks";
import Profile from './Profile';
import axios from 'axios';


class App extends React.Component {
state={
  title: '',
  description: '',
  status: '',
  email: '',

}
  gitbooksData=()=>
{
  axios.get('/book')
  .then((response)=>{
   const data=response.data;
  this.setState
  })
  .catch(()=>{
    console.log('data has been recived');

  })
}
  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Slide/>

            <Switch>
              <Route exact path="/">
               {
                 this.props.auth0.isAuthanticated && <Login/>
               }

              {
                this.props.auth0.isAuthanticated &&<BestBooks/>
              }
              </Route>
              
        <Route exact path="/Profile">
        <Profile/>
          
        </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
