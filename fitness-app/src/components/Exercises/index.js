import React from 'react'
import { Grid, Paper, Typography, List } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { Delete, Edit } from '@material-ui/icons'
import Form from './Form'

const styles = {
    Paper: { 
        padding: 20, 
        marginTop: 10, 
        marginBottom: 10, 
        height: 500, 
        overflowY: 'auto' 
    }
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default ({ 
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
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                    ? <div key={group}>
                        <Typography variant="headline" style={{textTransform: 'capitalize'}}>
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
                                        <IconButton onClick={() => onSelectEdit(id)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => onDelete(id)}>
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

        <Grid item sm>
            <Paper style={styles.Paper}>
                {editMode
                ? <Form
                exercise={exercise} 
                muscles={muscles}
                onSubmit={onEdit}
                />
                : <>
                <Typography
                variant="h2"
                >
                    {title}
                </Typography>

                <Typography
                variant="subheading"
                style={{marginTop: 20}}
                >
                    {description}
                </Typography>
                </>}
            </Paper>        
        </Grid>

    </Grid>