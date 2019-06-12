import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { muscles , exercises } from '../store'

class App extends React.Component {

  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {

    const initialExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    console.log(muscles, initialExercises)

    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = [...exercises[muscles], exercise]

        return exercises
    }, initialExercises)
    )
  }

  handleCategorySelect = category => 
    this.setState ({
      category
    })
  

  handleExerciseSelect = id => 
    this.setState (({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))
  

  handleExerciseCreate = exercise => 
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]     
    }))
  

  handleExerciseDelete = id => 
    this.setState(( { exercises, exercise, editMode })=> ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  

  handleExerciseSelectEdit = id => 
    this.setState (({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))

  handleExerciseEdit = exercise => 
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }))
  
  

  render() {

    const exercises = this.getExercisesByMuscles(),
    { category, exercise, editMode } = this.state

    return (
      <div>
        <CssBaseline />
        <Header 
        muscles={muscles}
        onExerciseCreate={this.handleExerciseCreate}
        />

        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          editMode={editMode}
          muscles={muscles}
          onEdit={this.handleExerciseEdit}
        />

        <Footer 
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />

      </div>
    );
  } 
}

export default App;
