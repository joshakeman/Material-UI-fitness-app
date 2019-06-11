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

const useStyles = theme => ({

    formControl: {
      width: 500
    },

  });

export default withStyles(useStyles)(class extends React.Component {

    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }


    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: { value }}) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        })
      };

      handleSubmit = () => {
          const { exercise } = this.state

          this.props.onCreate({
              ...exercise,
              id: exercise.title.toLowerCase().replace(/ /g, '-')
          })

          this.setState({
              open: false,
              exercise: {
                  title: '',
                  description: '',
                  muscles: ''
              }
          })
      }

    render() {

        const { open, exercise : { title, description, muscles } } = this.state,
               { classes, muscles : categories } = this.props

        return <>
        <Fab  onClick={this.handleToggle}>
            <AddIcon />
        </Fab>
    <Dialog 
    open={open} 
    onClose={this.handleToggle} 
    >
        <DialogTitle id="form-dialog-title">
            Create a new exercise
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please fill out the form
            </DialogContentText>
            <form>
            <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.formControl}
            /> <br></br>
            <FormControl
                className={classes.formControl}
            >
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select
                value={muscles}
                onChange={this.handleChange('muscles')}
                >
                {categories.map(category => 
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>
                    )}
                </Select>
            </FormControl> 
            <br></br>
            <TextField
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
                multiline
                rows="4"
                className={classes.formControl}
            /><br></br>
   
            </form>

        </DialogContent>

        <DialogActions>
        <Button 
        color="primary" 
        variant="contained"
        onClick={this.handleSubmit}
        >
            Create
        </Button>
        </DialogActions>
    </Dialog>

</>
    }
}
)
