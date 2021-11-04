import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import NumberFormat from 'react-number-format';
import { Player } from '../../../models/player.model';
import Card from '../../common/Card/Card';
import './PlayerDetailCard.scss';

interface PlayerDetailCardProps {
  player: Player;
}

const PlayerDetailCard: React.FunctionComponent<PlayerDetailCardProps> = (props) => {

  const data: any = {
    labels: props.player.playerStats.map(item => `J${item.weekNumber}`),
    datasets: [
      {
        label: 'Points Per Game',
        data: props.player.playerStats.map(item => item.totalPoints),
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Card clickable={false}>
        <div className="image-area detail-image-area" style={{ 'height': 'auto', 'position': 'relative' }}>
          <img src={props.player.image} alt={props.player.nickname} height="200" />
          <div className="team-badge p-2">
            <img src={props.player.team.badge} alt={props.player.team.shortName} />
            <h6 className="text-white pt-2">{props.player.team.name}</h6>
          </div>
        </div>
        <Row className="p-3">
          <Col xs="8" className="text-start text-white">
            <h1>{props.player.name}</h1>
            <h3>{props.player.playerStatus}</h3>
            <h3><NumberFormat value={props.player.marketValue} displayType={'text'} thousandSeparator={true} prefix={'€'} /></h3>
          </Col>
          <Col xs="4" className="text-end text-white">
            <h1>{props.player.points}</h1>
            <h3>20/21: {props.player.lastSeasonPoints}</h3>
            <h3>Average: {props.player.averagePoints.toFixed(2)}</h3>
          </Col>
        </Row>
        <Row className="p-3 text-center d-flex justify-content-center">
          <Col xs="6">
            <h3 className="mb-2 text-white">Points Chart</h3>
            <Bar data={data} options={options} />
          </Col>
          <Col xs="6">
          <h3 className="mb-2 text-white">Value Chart</h3>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default PlayerDetailCard;
