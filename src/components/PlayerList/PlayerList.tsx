import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Position, PositionProps } from '../../models/position.model';
import './PlayerList.scss';

export interface IAppState {
}

export default class App extends React.Component<PositionProps, IAppState> {
  searchText: string = '';
  positionFilter: number = 0;
  positions: Position[];
  constructor(props: PositionProps) {
    super(props);
    this.positions = props.positions;

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <Form>
          <Row>
            <Col xs="8">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search by Player Name</Form.Label>
                <Form.Control type="text" placeholder="Enter search term" size="lg" />
              </Form.Group>
            </Col>

            <Col xs="4">
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
    );
  }
}
