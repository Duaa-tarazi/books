import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { withAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
// import style from 'react/style-prop-object'
// (JSX attribute) React.HTMLAttributes<T>.style?: React.CSSProperties
class Login extends React.Component {
  render() {
    const {isAuthenticated,loginWithPopup} = this.props.auth0;
    return(
        <div>
          
          {
           !isAuthenticated && (
            (<Button onClick={loginWithPopup} variant="primary" size="lg" active>
              Log in
            </Button>) )
          }
        </div> 
    )
  }
}

export default withAuth0(Login);
