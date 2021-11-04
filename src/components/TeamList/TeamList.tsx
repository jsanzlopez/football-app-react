import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { TeamListItem } from '../../models/team.model';
import Card from '../common/Card/Card';


const TeamList: React.FunctionComponent = () => {
  const [listDisplayed, setListDisplayed] = useState(([] as TeamListItem[]));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    axios.get<any>('https://api.laligafantasymarca.com/api/v3/teams-master')
      .then((response) => {
        const data: any[] = response.data.teams;
        const modifiedData: TeamListItem[] = data.map(item => {
          return {
            id: item.id,
            name: item.name,
            image: item.badgeColor,
          }
        });
        setIsLoading(false);
        setListDisplayed(modifiedData);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [])

  const goToTeamDetail = (id: string) => {
    history.push(`/teams/${id}`);
  }


  return (
    <React.Fragment>
      <div className="list-area">
        <Row>
          {isLoading && <Spinner animation="border" role="status"></Spinner>}
          {!isLoading && !error && listDisplayed.length > 0
            && listDisplayed.map((item) => {
              return (
                <Col xs="3" className="mb-3" key={item.id}>
                  <Card clickable={true}>
                    <div onClick={() => goToTeamDetail(item.id)} className="text-white">
                      <div className="image-area detail-image-area py-2" style={{ 'height': 'auto', 'position': 'relative' }}>
                        <img src={item.image} alt={item.name} height="100"/>
                      </div>
                      {item.name}
                    </div>
                  </Card>
                </Col>
              )
            })}
        </Row>
        {!isLoading && !error && listDisplayed.length === 0 && 'The are no matches'}
        {!isLoading && error && <div className="text-danger">{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default TeamList;
