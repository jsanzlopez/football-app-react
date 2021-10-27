import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import Home from '../../home/home';
import TeamList from '../../TeamList/TeamList';
import PlayerList from '../../PlayerList/PlayerList';
import './Routes.scss';
import BestEleven from '../../BestEleven/BestEleven';
import PlayerDetail from '../../PlayerDetail/PlayerDetail';

interface IAppProps {
}

const Routes: React.FunctionComponent<IAppProps> = (props) => {

  return (
    <React.Fragment>
      <Container>
        
        <Row className='main-area home-top-container'>
          <Col xs='10'>
            <Route path='/' exact>
              <Redirect to='/home'></Redirect>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/players' exact>
              <PlayerList></PlayerList>
            </Route>
            <Route path='/players/:id'>
              <PlayerDetail></PlayerDetail>
            </Route>
            <Route path='/teams'>
              <TeamList></TeamList>
            </Route>
            <Route path='/best-eleven'>
              <BestEleven></BestEleven>
            </Route>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Routes;
