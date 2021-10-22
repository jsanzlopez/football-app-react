import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { PlayerListItem } from '../../../models/player.model';
import Card from '../../common/Card/Card';
import './ListItem.scss';

export interface ListItemProps {
  player: PlayerListItem;
  children?: React.ReactChild;
}

const ListItem: React.FunctionComponent<ListItemProps> = (props) => {

  const getPositionLabel = (position: string): string => {
    let result = '';
    switch (position) {
      case '1':
        result = 'Goalkeeper';
        break;

      case '2':
        result = 'Defender';
        break;

      case '3':
        result = 'Midfielder';
        break;

      case '4':
        result = 'Striker';
        break;
    }
    return result;
  }

  const getStatusIcon = (status: string): any => {
    let result = undefined;
    switch (status) {
      case 'ok':
        result = faCheck;
        break;

      case 'injured':
        result = faQuestion;
        break;

      case 'doubtful':
        result = faPlus;
        break;
    }
    return result;
  }

  const getColorClass = (status: string): string => {
    let result = '';
    switch (status) {
      case 'ok':
        result = 'success';
        break;

      case 'injured':
        result = 'warning';
        break;

      case 'doubtful':
        result = 'danger';
        break;
    }
    return result;
  }

  return (
    <Card>
      <Row>
        <Col xs="2">
          <div className="image-area position-relative">
            <img src={props.player.image} alt="benze" />
          </div>
        </Col>
        <Col xs="6" className="py-3 text-start text-white">
          <div className="fs-2">{props.player.name}
            <FontAwesomeIcon icon={getStatusIcon(props.player.status)}
              className={`ms-2 fs-4 text-${getColorClass(props.player.status)}`}></FontAwesomeIcon>
          </div>
          <div>{props.player.team}</div>
          <div>{getPositionLabel(props.player.position)}</div>
        </Col>
        <Col xs="4" className="py-3 text-start text-white text-end">
          <div className="pe-3">
            <div className="points-area fs-2">
              {props.player.points}
            </div>
            <div className="fs-3">€ {props.player.value}</div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ListItem;
