import React, { Fragment, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Card from '../common/Card/Card';

interface LoginProps {
  onLogin: Function;
}

const Login: React.FunctionComponent<LoginProps> = (props) => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event: any) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event: any) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Fragment>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="5">
            <Card>
              <div className="p-3">
                <Form onSubmit={submitHandler}>
                  <div className={`input-control ${emailIsValid === false ? 'invalid' : ''}`}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>E-Mail</Form.Label>
                      <Form.Control type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler} size="lg" />
                    </Form.Group>
                  </div>
                  <div className={`input-control ${passwordIsValid === false ? 'invalid' : ''}`}>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password"
                        id="password"
                        value={enteredPassword}
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
