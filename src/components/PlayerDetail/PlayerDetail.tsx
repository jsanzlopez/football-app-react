import { cleanup } from '@testing-library/react';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Player } from '../../models/player.model';
import './PlayerDetail.scss';

interface IAppProps {
}

interface PlayerDetailParams {
  id: string;
}

const PlayerDetail: React.FunctionComponent<IAppProps> = (props) => {
  const params: PlayerDetailParams = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [player, setPlayer] = useState(({} as Player));

  const mapNewPlayer = (data: any): Player => {
    return {
      averagePoints: data.averagePoints,
      birthDate: moment(data.birthDate),
      birthplace: data.birthplace,
      height: data.height,
      id: data.id,
      image: data.images.transparent['512x512'] || '',
      lastSeasonPoints: data.lastSeasonPoints,
      marketValue: data.marketValue,
      name: data.name,
      nickname: data.nickname,
      playerStats: data.playerStats.map((item: any) => {
        return {
          totalPoints: item.totalPoints,
          weekNumber: item.weekNumber,
        }
      }),
      playerStatus: data.playerStatus,
      points: data.points,
      // PositionId
      position: data.PositionId,
      team: {
        badge: data.team.badgeColor,
        dspId: data.team.dspId,
        id: data.team.id,
        name: data.team.name,
        shortName: data.team.shortName,
      },
    }
  }

  useEffect(() => {
    setIsLoading(true);
    axios.get<any>(`https://api.laligafantasymarca.com/api/v3/player/${params.id}`)
      .then((response) => {
        const newPlayer: Player = mapNewPlayer(response.data)
        setPlayer(newPlayer);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [params])

  return (
    <React.Fragment>
      {isLoading && <Spinner animation="border" role="status"></Spinner>}
      {!isLoading && !error && <div>{player.name}</div>}
      {!isLoading && error && <div className="text-danger">{error}</div>}
    </React.Fragment>
  );
};

export default PlayerDetail;
