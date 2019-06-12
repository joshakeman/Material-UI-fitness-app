import React from 'react'
import { Grid, Paper, Typography, List } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { Delete, Edit } from '@material-ui/icons'
import Form from './Form'
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: { 
        padding: 20, 
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginTop: 5, 
            height: 'calc(100% - 10px)', 
        },
        [theme.breakpoints.down('xs')]: {
            height: '100%'
        }
    },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px - 48px)'
        },
        [theme.breakpoints.up('xs')]: {
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '50%'
        }
    }
})

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default withStyles(styles)(
    ({ 
    classes,
    exercises, 
    category, 
    onSelect,
    muscles,
    exercise,
    editMode, 
    exercise: {
        id, 
        title = 'Welcome!', 
        description = 'Please select an exercise from the list on the left.'
    },
    onDelete,
    onSelectEdit,
    onEdit
}) => 
    <Grid container spacing={2} className={classes.container}>
        <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                    ? <div key={group}>
                        <Typography 
                        color='secondary'
                        variant="h4" 
                        style={{textTransform: 'capitalize'}}>
                            {group}
                        </Typography>
                        <List component="ul" aria-label="Secondary mailbox folders">
                            {exercises.map(({ id, title }) =>
                                <ListItem 
                                    key={id}
                                    button
                                    onClick={()=> onSelect(id)}
                                >
                                    <ListItemText primary={title} />
                                    <ListItemSecondaryAction>
                                        <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color='primary' onClick={() => onDelete(id)}>
                                            <Delete />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                )}
                        </List>
                    </div>
                    : null 
                    )}
            </Paper>
        </Grid>

        <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography
                    variant="h2"
                    gutterBottom
                    color='secondary'
                    >
                        {title}
                </Typography>
                {editMode
                ? <Form
                key={id}
                exercise={exercise} 
                muscles={muscles}
                onSubmit={onEdit}
                />
                : <Typography
                variant="subtitle1"
                >
                    {description}
                </Typography>
                }
            </Paper>        
        </Grid>

    </Grid>
)