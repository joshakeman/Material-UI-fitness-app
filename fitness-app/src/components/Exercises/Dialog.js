import React from 'react'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Form from './Form'

export default class extends React.Component {

    state = {
        open: false,
    }


    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleFormSubmit = exercise => {
        this.handleToggle()

        this.props.onCreate(exercise)
    }

    render() {

        const { open } = this.state,
              { muscles } = this.props

        return <>
        <Fab  onClick={this.handleToggle}>
            <AddIcon />
        </Fab>
    <Dialog 
    open={open} 
    onClose={this.handleToggle} 
    >
        <DialogTitle>
            Create a new exercise
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please fill out the form
            </DialogContentText>
            <Form 
                muscles={muscles}
                onSubmit={this.handleFormSubmit}
            />

        </DialogContent>

        <DialogActions>
 
        </DialogActions>
    </Dialog>

</>
    }
}

