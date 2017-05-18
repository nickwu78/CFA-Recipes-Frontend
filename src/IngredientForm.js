import React, { Component } from 'react';
import axios from 'axios';

class IngredientForm extends Component {
  focus() {
    console.log(this.nameInput.focus());
  };

  newIngredient() {
    const URL = 'http://yamagucci.herokuapp.com/api/ingredients?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3VoZWkueWFtYXVjaGlAbGl2ZS5jb20iLCJpYXQiOjE0OTQ5OTMxMTV9.G0ctQghRRAqaZiGSZyT5Oi-YXUUfb3UsYQpsmMaVA0k'
    axios.post(URL + '&name=' + this.nameInput.value)
      .then((response) => {
        console.log(response)
        this.nameInput.value = '';
        this.props.getIngredientList();
      })
      .catch((error) => {
        console.log(error)
      });
  };

  render() {
    return (
      <div>
        <input type="text" ref={(input) => { this.nameInput = input; }} />
        <button onClick={() => this.newIngredient()}>Create</button>
      </div>
    )
  };
}

IngredientForm.propTypes = {
  getIngredientList: PropTypes.func.isRequired
}

export default IngredientForm