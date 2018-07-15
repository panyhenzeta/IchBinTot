import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import TextField from 'material-ui/TextField';

export default class Toolbar extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Grid container spacing={24}>
                    <Grid item xs />                      
                    <Grid item xs={6}>
                        <TextField hintText="Zeynep" />
                    </Grid>
                    <Grid item xs/>                      
                </Grid>           
            </MuiThemeProvider>
        );
    }
}