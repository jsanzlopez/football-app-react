import moment, { Moment } from 'moment';
import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import Home from '../../home/home';
import PlayerList from '../../PlayerList/PlayerList';
import './Routes.scss';

interface IAppProps {
}

const Routes: React.FunctionComponent<IAppProps> = (props) => {

  const appversion: string = '0.0.1';
  const date = moment();

  const getFormattedDate = (date: Moment): string => date.format('DD/MM/YYYY');

  return (
    <React.Fragment>
      <Container>
        <Row className='home-top-container'>
          <Col xs='8' className='app-title'>
            <h2>Total Football App</h2>
          </Col>
        </Row>
        <Row className='version-container'>
          <Col xs='6'>{getFormattedDate(date)}</Col>
          <Col xs='6'>Version {appversion}</Col>
        </Row>
        <Row className='main-area home-top-container'>
          <Col xs='10'>
            <Route path='/' exact>
              <Redirect to='/home'></Redirect>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/player-list'>
              <PlayerList></PlayerList>
            </Route>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Routes;
