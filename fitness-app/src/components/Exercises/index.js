import React from 'react'
import { Grid, Paper, Typography, List } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

export default ({ exercises }) => 
    <Grid container spacing={2}>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => 
                    <div>
                        <Typography variant="headline" style={{textTransform: 'capitalize'}}>
                            {group}
                        </Typography>
                        <List component="ul" aria-label="Secondary mailbox folders">
                            {exercises.map(({ title }) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                                )}
                        </List>
                    </div>
                    )}
            </Paper>
        </Grid>

        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                variant="h2"
                >
                    Welcome!
                </Typography>

                <Typography
                variant="subheading"
                style={{marginTop: 20}}
                >
                    Please select an exercise from the list on the left
                </Typography>
            </Paper>        
        </Grid>

    </Grid>