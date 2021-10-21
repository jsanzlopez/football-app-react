import * as React from 'react';
import './home.scss';
import moment, { Moment } from 'moment';
import { Col, Container, Row } from 'react-bootstrap';
import PlayerList from '../PlayerList/PlayerList';

const Home: React.FunctionComponent = () => {
  const appversion: string = '0.0.1';
  const date = moment();

  const getFormattedDate = (date: Moment): string => date.format('DD/MM/YYYY');
  return (
    <Container>
      <Row className="home-top-container">
        <Col xs="8" className="app-title">
          <h2>Total Football App</h2>
        </Col>
      </Row>
      <Row className="version-container">
        <Col xs="6">{getFormattedDate(date)}</Col>
        <Col xs="6">Version {appversion}</Col>
      </Row>
      <Row className="main-area home-top-container">
        <Col xs="10">
          <PlayerList></PlayerList>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
