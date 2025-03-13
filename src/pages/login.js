import './login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Outlet, Link } from "react-router-dom";

function Login(navigated) {
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
  const [validationStates, setValidationStates] = useState({emailState: true, passwordState: true})
  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });
 
  const handlePasswordChange = ((e) => {
    setValidationStates({...validationStates, passwordState: validatePassword(e.target.value)});
    setFormValues({...formValues, password: e.target.value})
  });
 

  const validateEmail = ((email) => {
    // regular expression para un email, sin espacios @ sin espacios y un punto y al menos un caracter despues del punto
    return true;
  });

  const validatePassword = ((password) => {
    return password.length > 5 && password.length <8;
  });


  const clickSubmit = (() => {
    //Call fetch
    const emailState = validateEmail(formValues.email);
    const passwordState = validationStates.passwordState;
    setValidationStates({emailState: emailState, passwordState: passwordState})
    if(emailState && passwordState){
        alert("Good")
    }
    else{
      alert("Invalid email or password")
    }
  })

  return (
    <div className='loginTodo'>
        <div className='derecha'>
            <h1>TOO GOOD TO GO</h1>
            <h2>FOOD WASTING SOLUTION</h2>
        </div>
      
        <div className='formulario'>
      <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter username" onChange={handleEmailChange} value={formValues.email} isInvalid={!validationStates.emailState}/>
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isInvalid={!validationStates.passwordState} />
      
        <Form.Control.Feedback type="invalid"> Your password should be at least 6 char long and 8 char tops </Form.Control.Feedback>
      </Form.Group>
      <Button>
        Forgot Password?
      </Button>
      

      <Button variant="primary" onClick={clickSubmit}>
        Login
      </Button>
      <Link to = '/home'>Login to HOme</Link>
    </Form>

    </div>
    </div>
  );
}

export default Login;