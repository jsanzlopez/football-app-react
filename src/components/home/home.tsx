import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../common/Card/Card';
import './home.scss';
import moment, { Moment } from 'moment';


const Home: React.FunctionComponent = () => {
  const appversion: string = '0.0.1';
  const date = moment();

  const getFormattedDate = (date: Moment): string => date.format('DD/MM/YYYY');

  return (
    <React.Fragment>
      <Row className='home-top-container'>
        <Col xs='8' className='app-title'>
          <h2>Total Football App</h2>
        </Col>
      </Row>
      <Row className='version-container mb-5'>
        <Col xs='6'>{getFormattedDate(date)}</Col>
        <Col xs='6'>Version {appversion}</Col>
      </Row>
      <Row>
        <Col xs='4'>
          <Card clickable={true}>
            <Link to='/players'>
              <div className="large-image-area">
                <img src={process.env.PUBLIC_URL + 'soccer-player.jpg'}
                  alt="player" height='200' />
              </div>
              <div className="p-3">
                <h2 className='text-white text-decoration-none mb-2'>
                  Player List
                </h2>
                <hr className="my-2 text-white" />
                <div className="text-white text-decoration-none">
                  Display the list of all the players that play in LaLiga and check out the status and their point statistics.
                </div>
              </div>
            </Link>
          </Card>
        </Col>
        <Col xs='4'>
          <Card clickable={true}>
            <Link to='/teams'>
              <div className="large-image-area">
                <img src={process.env.PUBLIC_URL + 'soccer-team.jpeg'}
                  alt="team" height='200' />
              </div>
              <div className="p-3">
                <h2 className='text-white text-decoration-none mb-2'>
                  Teams
                </h2>
                <hr className="my-2 text-white" />
                <div className="text-white text-decoration-none">
                  Display all the teams that play in LaLiga this season, and check out their statistics and their best eleven.
                </div>
              </div>
            </Link>
          </Card>
        </Col>
        <Col xs='4'>
          <Card clickable={true}>
            <Link to='/best-eleven'>
              <div className="large-image-area">
                <img src={process.env.PUBLIC_URL + 'soccer-field.jpeg'}
                  alt="best-eleven" height='200' />
              </div>
              <div className="p-3">
                <h2 className='text-white text-decoration-none mb-2'>
                  Make your 11
                </h2>
                <hr className="my-2 text-white" />
                <div className="text-white text-decoration-none">
                  Use our incredible tool to choose your best lineup for the next match date!
                </div>
              </div>
            </Link>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
