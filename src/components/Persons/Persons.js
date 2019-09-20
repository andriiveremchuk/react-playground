import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  static getDeriveStateFromProps(props, state) {
    console.log('[Persons.js] getDeriveStateFromProps')
    
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');

    return true;
  }

  getSnepshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnepshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] rendering...')
    return (
      this.props.persons.map((person, index) => {
        return (
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} 
          />
        )
      })
    );
  }
}

export default Persons;