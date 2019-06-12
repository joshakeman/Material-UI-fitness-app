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

    componentWillReceiveProps({ exercise }) {
        this.setState({
            ...exercise
        })
    }

    handleChange = name => ({ target: { value }}) => 
        this.setState({
            [name]: value
        })

      handleSubmit = () => {

          this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
              ...this.state
          })

          this.setState(this.getInitState())
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
                {this.props.exercise ? 'Edit' : 'Create'}
            </Button>
            </form>
    }
}
)