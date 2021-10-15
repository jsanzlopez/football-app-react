import * as React from 'react';
import './home.scss';
import moment, { Moment } from 'moment';
import { Col, Container, Row } from 'react-bootstrap';
import PlayerList from '../PlayerList/PlayerList';
import { Position } from '../../models/position.model';
export interface IAppProps {
}

export interface IAppState {
}

export default class Home extends React.Component<IAppProps, IAppState> {
  appversion: string = '0.0.1';
  date = moment();
  positions: Position[] = [
    {label: 'Goalkeeper', value: 1},
    {label: 'Defended', value: 2},
    {label: 'Midfielder', value: 3},
    {label: 'Striker', value: 4},
  ];

  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

  private getFormattedDate(date: Moment) {
    return date.format('DD/MM/YYYY');
  }

  public render() {
    return (
      <Container>
        <Row className="home-top-container">
          <Col xs="8" className="app-title">
            <h2>Total Football App</h2>
          </Col>
        </Row>
        <Row className="version-container">
          <Col xs="6">{this.getFormattedDate(this.date)}</Col>
          <Col xs="6">Version {this.appversion}</Col>
        </Row>
        <Row className="main-area home-top-container">
          <Col xs="10">
            <PlayerList positions={this.positions}></PlayerList>
          </Col>
        </Row>
      </Container>
    );
  }
}
