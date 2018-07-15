import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

import avatarImage from '../images/Orphan.jpg';

export default class Toolbar extends Component {

    render() {
        return (
            <Avatar src={avatarImage} />
        );
    }
}