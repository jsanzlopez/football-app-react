import React, { Fragment, useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FieldControl, FieldGroup, FormBuilder, Validators } from 'react-reactive-form';
import AuthContext from '../../store/auth-context';
import Card from '../common/Card/Card';
import './Login.scss'

const Login: React.FunctionComponent = () => {
  const ctx = useContext(AuthContext);

  const loginForm = FormBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6)]],
  });

  const handleReset = () => {
    loginForm.reset();
  }

  const submitHandler = (event: any) => {
    event.preventDefault();
    ctx.onLogIn(loginForm.get('username').value, loginForm.get('password').value);
  };

  return (
    <Fragment>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="5">
            <Card clickable={false}>
              <div className="p-3">
                <FieldGroup
                  control={loginForm}
                  render={({ get, invalid }) => (
                    <form onSubmit={submitHandler}>
                      <label htmlFor="username">UserName:</label>
                      <FieldControl
                        name="username"
                        render={({ handler, touched, hasError }) => (
                          <div className="input-control">
                            <input {...handler()} />
                            <span className="text-danger">
                              {touched
                                && hasError("required")
                                && "Username is required"}
                            </span>
                          </div>
                        )}
                      />
                      <label htmlFor="password">Password:</label>
                      <FieldControl
                        name="password"
                        render={({ handler, touched, hasError }) => (
                          <div className="input-control">
                            <input {...handler()} />
                            <span>
                              {touched
                                && hasError("required")
                                && "Password is required"}
                            </span>
                          </div>
                        )}
                      />
                      <div className="form-buttons-area pt-3">
                        <Button type="button" size="lg" onClick={handleReset}>
                          Reset
                        </Button>
                        <Button type="submit" disabled={loginForm.invalid} size="lg">
                          Login
                        </Button>
                      </div>
                    </form>
                  )}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
