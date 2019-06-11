import React from 'react'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';



const useStyles = theme => ({

    formControl: {
      width: 300
    },

  });

export default withStyles(useStyles)(class extends React.Component {

    state = this.getInitState()

    getInitState() {
        const { exercise } = this.props
        
        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleChange = name => ({ target: { value }}) => 
        this.setState({
            [name]: value
        })

      handleSubmit = () => {
          const { exercise } = this.state

          this.props.onSubmit({
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
        const { title, description, muscles } = this.state,
              { classes, muscles : categories } = this.props

        return <form>
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
            <Button 
                color="primary" 
                variant="contained"
                onClick={this.handleSubmit}
                >
                    Create
            </Button>
            </form>
    }
}
)