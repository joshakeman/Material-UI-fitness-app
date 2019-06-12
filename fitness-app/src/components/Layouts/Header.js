import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import CreateDialog from '../Exercises/Dialog'

const styles = {
    flex : {
        flex: 1
    }
}

const Header = ({ classes, muscles, onExerciseCreate }) => {
    return (
    <div>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h5" color="inherit" className={classes.flex}>
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

export default withStyles(styles)(Header)