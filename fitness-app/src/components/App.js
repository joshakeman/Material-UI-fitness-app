import React from 'react';
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { muscles , exercises } from '../store'

class App extends React.Component {

  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise]

        return exercises
    }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState ({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState (({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {

    const exercises = this.getExercisesByMuscles(),
    { category, exercise } = this.state

    return (
      <div>
        <Header />

        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />

        <Footer 
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />

      </div>
    );
  } 
}

export default App;
