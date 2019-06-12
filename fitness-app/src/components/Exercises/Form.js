import React from 'react'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


export default class extends React.Component {

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

          this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
              ...this.state
          })

      }

    render() {
        const { title, description, muscles } = this.state,
              {  muscles : categories } = this.props

        return <form>
            <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                fullWidth
            /> <br></br>
            <FormControl
                fullWidth
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
                fullWidth
            /><br></br>
            <Button 
                color="primary" 
                variant="contained"
                onClick={this.handleSubmit}
                disabled={!title || !muscles}
                >
                {this.props.exercise ? 'Edit' : 'Create'}
            </Button>
            </form>
    }
}
