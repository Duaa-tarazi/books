// Add a `Profile` component that is only visible when the user is logged in. 
// This component should display information about the user provided by Auth0, 
// such as name, profile picture, and email address.

import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component{
    render() {
        const { user } = this.props.auth0;

        return <div>Hello {user.name} 
        {user.email}
        <img src={user.picture} alt={user.name}/>
        </div>;
    }
 
}

export default withAuth0(Profile);