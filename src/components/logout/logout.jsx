import { Component } from 'react'

import userService from '../../services/userService';

class Logout extends Component {
    state = {};
    componentDidMount() {
        userService.logout();
        window.location = "/"; //using window location and not replace/push as we would like to refresh the state to remove the user (we do not have a global state yet) -> to improve after redux/mobex implementation
    }

    render() { 
        return null;
    }
}
 
export default Logout;