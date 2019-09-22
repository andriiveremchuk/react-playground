import React, { useEffect, useContext} from 'react';
import styles from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
  const toggleBtnRef = React.useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click();
    // setTimeout(() => {
    //   alert('Saved data to the cloud')
    // }, 1000)
    return(() => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    })
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  });

  let classes = [];
  let btnClass = '';

  if(props.showPersons) {
    btnClass = styles.Red;
  }

  if(props.personsLength <= 2) {
    classes.push(styles.red);
  }

  if(props.personsLength <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <p className={classes.join(' ')}>React is cool</p>
      <button 
        className={btnClass}
        ref={toggleBtnRef}
        onClick={props.toggle}>Toggle Persons</button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  )
}

export default React.memo(Cockpit);