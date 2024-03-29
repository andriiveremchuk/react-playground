import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  static getDeriveStateFromProps(props, state) {
    console.log('[Persons.js] getDeriveStateFromProps')
    
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) { 
  //     return true; 
  //   } else {
  //     return false;
  //   }
  // }

  getSnepshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnepshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
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
            isAuth={this.props.isAuthenticated}
          />
        )
      })
    );
  }
}

export default Persons;