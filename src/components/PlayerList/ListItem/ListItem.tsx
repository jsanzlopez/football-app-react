import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { PlayerListItem } from '../../../models/player.model';
import Card from '../../common/Card/Card';
import './ListItem.scss';

export interface ListItemProps {
  player: PlayerListItem;
  children ?: React.ReactChild;
}

export interface IAppState {
  player: PlayerListItem;
}

export default class ListItem extends React.Component<ListItemProps, IAppState> {
  player: PlayerListItem;
  constructor(props: ListItemProps) {
    super(props);
    this.player = props.player;
    this.state = {
      player: props.player,
    }
  }

  getPositionLabel(position: number): string {
    let result = '';
    switch (position) {
      case 1:
        result = 'Goalkeeper';
        break;

      case 2:
        result = 'Defender';
        break;

      case 3:
        result = 'Midfielder';
        break;

      case 4:
        result = 'Striker';
        break;
    }
    return result;
  }

  getStatusIcon(status: number): any {
    let result = undefined;
    switch (status) {
      case 1:
        result = faCheck;
        break;

      case 2:
        result = faQuestion;
        break;

      case 3:
        result = faPlus;
        break;
    }
    return result;
  }

  getColorClass(status: number): string {
    let result = '';
    switch (status) {
      case 1:
        result = 'success';
        break;

      case 2:
        result = 'warning';
        break;

      case 3:
        result = 'danger';
        break;
    }
    return result;
  }

  public render() {
    return (
      <div className="pb-3">
        <Card>
          <Row>
            <Col xs="2">
              <div className="image-area position-relative">
                <img src={this.player.image} alt="benze"/>
                <div className="player-number text-white">
                  {this.player.squadNumber}
                </div>
              </div>
            </Col>
            <Col xs="6" className="py-3 text-start text-white">
              <div className="fs-2">{this.player.name} {this.player.lastName}
                <FontAwesomeIcon icon={this.getStatusIcon(this.player.status)}
                  className={`ms-2 fs-4 text-${this.getColorClass(this.player.status)}`}></FontAwesomeIcon>
              </div>
              <div>{this.player.team}</div>
              <div>{this.getPositionLabel(this.player.position)}</div>
            </Col>
            <Col xs="4" className="py-3 text-start text-white text-end">
              <div className="pe-3">
              <div className="points-area fs-2">
                {this.player.points}
              </div>
              <div className="fs-3">$ {this.player.value}</div>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
