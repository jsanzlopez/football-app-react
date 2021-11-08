import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../home/home';
import TeamList from '../../TeamList/TeamList';
import PlayerList from '../../PlayerList/PlayerList';
import './Routes.scss';
import BestEleven from '../../BestEleven/BestEleven';
import PlayerDetail from '../../PlayerDetail/PlayerDetail';
import TeamDetail from '../../TeamDetail/TeamDetail';

interface IAppProps {
}

const RoutesFile: React.FunctionComponent<IAppProps> = (props) => {

  return (
    <React.Fragment>
      <Container>

        <Row className='main-area home-top-container'>
          <Col xs='10'>
            <Routes>
              <Route path='/' element={<Navigate replace to='/home' />} />
              <Route path='/home' element={<Home></Home>} />
              <Route path='/players' element={<PlayerList></PlayerList>} />
              <Route path='/players/:id' element={<PlayerDetail></PlayerDetail>} />
              <Route path='/teams' element={<TeamList></TeamList>} />
              <Route path='/teams/:id' element={<TeamDetail></TeamDetail>} />
              <Route path='/best-eleven' element={<BestEleven></BestEleven>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default RoutesFile;
