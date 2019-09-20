import React, {Component} from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Marry', age: 20},
//       {name: 'Ana', age: 31}
//     ],
//   });

//   const [otherState, setotherState] = useState('some other state');

//   console.log(personsState, otherState);

//   const switchNameHandler = (newName) => {
//     console.log('click');
//     setPersonsState({
//       persons: [
//         {name: newName, age: 28},
//         {name: 'Marryanna', age: 20},
//         {name: 'Anna', age: 31}
//       ],
//       otherState: personsState.otherState
//     })
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={function(){switchNameHandler('Maximilian')}}>Switch Name</button>
//         <p>Hi! I'm a React</p>
//         <Person 
//           name={personsState.persons[0].name}
//           age={personsState.persons[0].age} />
//         <Person
//           name={personsState.persons[1].name}
//           age={personsState.persons[1].age}
//           click={switchNameHandler.bind(this, 'Max!')}/>
//         <Person 
//           name={personsState.persons[2].name}
//           age={personsState.persons[2].age} />
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    console.log('[App.js] constructor');

    this.state = {
      persons: [
        {id: 'dc1231', name: 'Max', age: 28},
        {id: 'kd1232', name: 'Marry', age: 20},
        {id: 'as1233', name: 'Ana', age: 31}
      ],
      otherState: 'Some other state',
      showPersons: false
    }

  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProp')
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  // state = {
  //   persons: [
  //     {id: 'dc1231', name: 'Max', age: 28},
  //     {id: 'kd1232', name: 'Marry', age: 20},
  //     {id: 'as1233', name: 'Ana', age: 31}
  //   ],
  //   otherState: 'Some other state',
  //   showPersons: false
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons: persons,});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({persons: persons})
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      )
    }

    return (
      <div className={styles.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
