import * as React from 'react';
import { useParams } from 'react-router';
import './PlayerDetail.scss';

interface IAppProps {
}

interface PlayerDetailParams {
  id: string;
}

const PlayerDetail: React.FunctionComponent<IAppProps> = (props) => {
  const params: PlayerDetailParams = useParams();

  return (
    <div>{params.id}</div>
  );
};

export default PlayerDetail;
