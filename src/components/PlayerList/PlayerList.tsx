import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { PlayerListItem } from '../../models/player.model';
import { Position } from '../../models/position.model';
import ListItem from './ListItem/ListItem';
import './PlayerList.scss';

export interface PositionProps {
  positions: Position[];
  children ?: React.ReactChild;
}

export interface IAppState {
}

export default class App extends React.Component<PositionProps, IAppState> {
  searchText: string = '';
  positionFilter: number = 0;
  positions: Position[];
  player: PlayerListItem = {
    id: '1',
    name: 'Karim',
    lastName: 'Benzema',
    team: 'Real Madrid',
    position: 4,
    squadNumber: 9,
    points: 101,
    value: 36000000
  };
  constructor(props: PositionProps) {
    super(props);
    this.positions = props.positions;

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <div className="form-area">
          <Form>
            <Row>
              <Col xs="9">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Search by Player Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter search term" size="lg" />
                </Form.Group>
              </Col>

              <Col xs="3">
                <Form.Label>Filter by Position:</Form.Label>
                <Form.Select size="lg">
                  <option value="0"></option>
                  <option value="1">Goalkeeper</option>
                  <option value="2">Defender</option>
                  <option value="3">Midfielder</option>
                  <option value="4">Striker</option>
                </Form.Select>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="list-area">
          <ListItem player={this.player}></ListItem>
        </div>
      </div>
    );
  }
}
