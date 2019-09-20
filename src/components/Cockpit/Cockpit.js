import React from 'react';
import styles from './Cockpit.module.css'

const cockpit = (props) => {
  let classes = [];
  let btnClass = '';

  if(props.showPersons) {
    btnClass = styles.Red;
  }

  if(props.persons.length <= 2) {
    classes.push(styles.red);
  }

  if(props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <p className={classes.join(' ')}>React is cool</p>
      <button 
        className={btnClass}
        onClick={props.toggle}>Toogle Persons</button>
    </div>
  )
}

export default cockpit;