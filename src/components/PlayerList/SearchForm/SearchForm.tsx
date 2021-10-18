import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Position } from '../../../models/position.model';

export interface SearchFormProps {
  onFilterPosition: Function;
  onFilterName: Function;
}

export interface SearchFormState {
  filterPosition: number;
  filterName: string;
}

export default class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
  static positions : Position[] = [
    {label: 'Goalkeepers', value: 1},
    {label: 'Defenders', value: 2},
    {label: 'Midfielders', value: 3},
    {label: 'Strikers', value: 4}
  ];
  constructor(props: SearchFormProps) {
    super(props);

    this.state = {
      filterPosition: 0,
      filterName: '',
    }
  }
  
  filterByPosition = (event: any) => {
    this.setState({
      filterPosition: event.target.value,
    });
    this.props.onFilterPosition(parseInt(event.target.value));
  }

  filterByName = (event: any) => {
    this.setState({
      filterName: event.target.value,
    });
    this.props.onFilterName(event.target.value);
  }

  public render() {
    return (
      <div>
        <Form>
            <Row>
              <Col xs="9">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Search by Player Name</Form.Label>
                  <Form.Control type="text" value={this.state.filterName}
                    onChange={this.filterByName} size="lg"
                    placeholder="Enter search term"/>
                </Form.Group>
              </Col>

              <Col xs="3">
                <Form.Label>Filter by Position:</Form.Label>
                <Form.Select size="lg" value={this.state.filterPosition}
                  onChange={this.filterByPosition}>
                  <option value={0}>All</option>
                  {SearchForm.positions.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
                </Form.Select>
              </Col>
            </Row>
          </Form>
      </div>
    );
  }
}
