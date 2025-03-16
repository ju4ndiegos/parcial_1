import { Figure } from 'react-bootstrap';
import './login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

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
    if(! (emailState && passwordState)){
      alert("Invalid email or password")
    }
  })

  return (
    <div className='loginTodo'>
        <div className='banner'>
          <Figure>
              <img src="./logo.png"
              width={100} 
              alt="Logo"
              className="logo">
              </img>
            </Figure>
            
            <h1>
              <FormattedMessage id="title"/>
            </h1>
            <h2>
              <FormattedMessage id="subtitle"/>
            </h2>
            
            <Figure>
              <img src="./baner.webp"
              width={550} 
              alt="Banner"
              className='banner'>
              </img>
            </Figure>
        </div>
      
        <div className='formulario'>
        <Form>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Username" onChange={handleEmailChange} value={formValues.email} isInvalid={!validationStates.emailState}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isInvalid={!validationStates.passwordState} />

            <Form.Control.Feedback type="invalid"><FormattedMessage id='password'/> </Form.Control.Feedback>
            <Form.Label> <FormattedMessage id='forgotPassword'/> </Form.Label>
        </Form.Group>
    </Form>

    <Link to = '/home'>
        <Button variant="primary" onClick={clickSubmit}>
        <FormattedMessage id='login'/>
        </Button>
      </Link>

        </div>
    </div>
  );
}

export default Login;