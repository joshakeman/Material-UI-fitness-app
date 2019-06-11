import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CreateDialog from '../Exercises/Dialogs/Create'

const Header = ({ muscles, onExerciseCreate }) => {
    return (
    <div>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="headline" color="inherit" style={{flex: 1}}>
                Exercise Database
            </Typography>

            <CreateDialog 
            muscles={muscles} 
            onCreate={onExerciseCreate}
            />
            </Toolbar>
        </AppBar>        
    </div>
    )
}

export default Header