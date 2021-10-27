import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card/Card';
import './home.scss';

const Home: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Card>
        <Link to='/player-list'>
          Player List
        </Link>
      </Card>
      <Card>
        <Link to='/make-your-eleven'>
          Make your 11
        </Link>
      </Card>
    </React.Fragment>
  );
};

export default Home;
