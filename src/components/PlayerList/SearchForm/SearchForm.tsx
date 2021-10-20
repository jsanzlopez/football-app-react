import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Position } from '../../../models/position.model';

export interface SearchFormProps {
  onFilterPosition: Function;
  onFilterName: Function;
}

const SearchForm: React.FunctionComponent<SearchFormProps> = (props) => {
  const positions : Position[] = [
    {label: 'Goalkeepers', value: 1},
    {label: 'Defenders', value: 2},
    {label: 'Midfielders', value: 3},
    {label: 'Strikers', value: 4}
  ];  
  const [nameFilter, setNameFilter] = useState('');
  const [positionFilter, setPositionFilter] = useState(0);
  
  const filterByPosition = (event: any) => {
    setPositionFilter(event.target.value);
    props.onFilterPosition(parseInt(event.target.value));
  }
  
  const filterByName = (event: any) => {
    setNameFilter(event.target.value);
    props.onFilterName(event.target.value);
  }
  
  return (
    <React.Fragment>
      <Form>
        <Row>
          <Col xs="9">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search by Player Name</Form.Label>
              <Form.Control type="text" value={nameFilter}
                onChange={filterByName} size="lg"
                placeholder="Enter search term" />
            </Form.Group>
          </Col>

          <Col xs="3">
            <Form.Label>Filter by Position:</Form.Label>
            <Form.Select size="lg" value={positionFilter}
              onChange={filterByPosition}>
              <option value={0}>All</option>
              {positions.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default SearchForm;
