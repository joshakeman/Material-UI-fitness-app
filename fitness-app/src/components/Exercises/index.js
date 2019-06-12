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
    Paper: { 
        padding: 20, 
        marginTop: 5, 
        height: 500, 
        overflowY: 'auto' 
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
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.Paper}>
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

        <Grid item xs={12} sm={6}>
            <Paper className={classes.Paper}>
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