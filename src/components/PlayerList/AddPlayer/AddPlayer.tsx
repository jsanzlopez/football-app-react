import React, { FormEvent, Fragment, useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { PlayerListItem } from '../../../models/player.model';

interface AddPlayerProps {
  onAddPlayer: Function;
}

const AddPlayer: React.FunctionComponent<AddPlayerProps> = (props) => {

  const firstNameEntered = useRef<HTMLInputElement>(null);
  
  const addNewPlayer = (event: FormEvent) => {
    event.preventDefault();

    const player: PlayerListItem = {
      id: '15',
      name: firstNameEntered.current ? firstNameEntered.current.value : '',
      team: 'Atletico de Madrid',
      position: '2',
      points: 30,
      value: 1000000,
      image: '',
      status: 'ok',
    }

    props.onAddPlayer(player);

  }

  return (
    <Fragment>
      <Form onSubmit={addNewPlayer}>
        <Row>
          <Col xs="6">
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" ref={firstNameEntered} size="lg"
                placeholder="Enter First Name" />
            </Form.Group>
          </Col>
          <Col xs="4" className="d-flex justify-content-end align-items-center">
            <Button type="submit" size="lg">Add</Button>
          </Col>
        </Row>
      </Form>
      <hr className="mb-4" />
    </Fragment>
  );
};

export default AddPlayer;
