import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';
import NumberFormat from 'react-number-format';
import { useNavigate } from 'react-router';
import { Player } from '../../../models/player.model';
import Card from '../../common/Card/Card';
import './PlayerDetailCard.scss';

interface PlayerDetailCardProps {
  player: Player;
}

const PlayerDetailCard: React.FunctionComponent<PlayerDetailCardProps> = (props) => {

  const navigate = useNavigate();
  const { player } = props;
  const [marketValues, setMarketValues] = useState(([] as any[]));

  useEffect(() => {
    axios.get<any>(`https://api.laligafantasymarca.com/api/v3/player/${player.id}/market-value`)
      .then((response) => {
        setMarketValues(response.data);
      });
  }, [player])

  const barData: any = {
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

  const lineData: any = {
    labels: marketValues.map(item => moment(item.date).format('DD/MM')),
    datasets: [
      {
        label: 'Market Value',
        data: marketValues.map(item => item.marketValue),
        backgroundColor: [
          '#dc3545',
        ],
        borderColor: [
          '#dc3545',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options: any = {
    pointRadius: 0,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  const goBack = () => {
    navigate('/players');
  };

  return (
    <React.Fragment>
      <div className="mb-3  d-flex justify-content-start">
        <Button variant="outline-primary"
          onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} className="me-2"></FontAwesomeIcon>
          Back
        </Button>
      </div>
      <Card clickable={false}>
        <div className="image-area detail-image-area" style={{ 'height': 'auto', 'position': 'relative' }}>
          <img src={props.player.image} alt={props.player.nickname} height="200" />
          <div className="team-badge p-2">
            <img className="full-width" src={props.player.team.badge} alt={props.player.team.shortName} height="100"/>
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
            <Bar data={barData} options={options} />
          </Col>
          <Col xs="6">
            <h3 className="mb-2 text-white">Value Chart</h3>
            <Line data={lineData} options={options} />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default PlayerDetailCard;
