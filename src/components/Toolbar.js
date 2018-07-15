import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Avatar from './Avatar';
import {
    amber500,
    grey900
} from 'material-ui/styles/colors';

export default class Toolbar extends Component {

    constructor(props) {
        super(props);

        this.titleStyle = {
            color: grey900,
            fontWeight: 'bold',
            fontFamily: 'Times New Roman',
            fontSize: '1.6em'
        };

        this.backgroundStyle = {
            backgroundColor: amber500
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="IK BEN DOOD"
                    showMenuIconButton={false}
                    iconElementRight={<Avatar/>}
                    style={this.backgroundStyle}
                    titleStyle={this.titleStyle} />
            </MuiThemeProvider>
        );
    }
}