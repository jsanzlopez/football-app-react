import React, { Fragment, useState, useEffect, useReducer, useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AuthContext from '../../store/auth-context';
import Card from '../common/Card/Card';
import './Login.scss'

interface LoginAction {
  type: string,
  val: string,
}

const emailReducer = (state: any, action: LoginAction) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')};
  }
  else if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
}

const passwordReducer = (state: any, action: LoginAction) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6};
  }
  else if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: (state.value as string).trim().length > 6};
  }
  return {value: '', isValid: false};
}

const Login: React.FunctionComponent = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false,
  });

  const {isValid: isEmailValid} = emailState;
  const {isValid: isPasswordValid} = passwordState;

  useEffect(() => {
    const timerToExecute = setTimeout(() => {
      setFormIsValid(
        isEmailValid && isPasswordValid
      );
    }, 500)
    return () => {
      clearTimeout(timerToExecute);
    }
  }, [isEmailValid, isPasswordValid])

  const emailChangeHandler = (event: any) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    });
  };

  const passwordChangeHandler = (event: any) => {
    dispatchPassword({
      type: 'USER_INPUT',
      val: event.target.value
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR',
      val: ''
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_BLUR',
      val: ''
    });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    ctx.onLogIn(emailState.value, passwordState.value);
  };

  return (
    <Fragment>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="5">
            <Card>
              <div className="p-3">
                <Form onSubmit={submitHandler}>
                  <div className={`input-control ${emailState.isValid === false ? 'invalid' : ''}`}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>E-Mail</Form.Label>
                      <Form.Control type="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler} size="lg" />
                    </Form.Group>
                  </div>
                  <div className={`input-control ${passwordState.isValid === false ? 'invalid' : ''}`}>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler} size="lg" />
                    </Form.Group>
                  </div>
                  <div className="submit-button-area">
                    <Button type="submit" 
                      variant={formIsValid ? 'primary' : 'secondary'} 
                      disabled={!formIsValid} 
                      size="lg">
                        Login
                    </Button>
                  </div>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
