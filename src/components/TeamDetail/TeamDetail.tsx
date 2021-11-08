import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { Calendar } from '../../models/calendar.model';
import { PlayerStats } from '../../models/player.model';
import { Team } from '../../models/team.model';
import './TeamDetail.scss'

const TeamDetail: React.FunctionComponent = () => {
  const [teamDisplayed, setTeamDisplayed] = useState(({} as Team));
  const [calendar, setCalendar] = useState(([] as Calendar[]));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id: teamId }: any = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios.get<any>(`https://api.laligafantasymarca.com/api/v3/player/team/${teamId}`)
      .then((response) => {
        const data: any = response.data;
        const assets = JSON.parse(data.assets);

        const modifiedData: Team = {
          id: data.id,
          name: data.name,
          image: assets.color,
          players: data.players.map((item: any) => {
            return {
              id: item.id,
              image: item.images.transparent['512x512'] || '',
              initialMarketValue: data.initialMarketValue,
              lastStats: (item.lastStats as PlayerStats[]),
              marketValue: item.marketValue,
              name: item.name,
              nickname: item.nickname,
              playerStats: (item.playerStats as PlayerStats[]),
              playerStatus: item.playerStatus,
              points: item.points,
              position: item.positionId,
            }
          })
        };

        setIsLoading(false);
        setTeamDisplayed(modifiedData);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [teamId])

  useEffect(() => {
    setIsLoading(true);
    axios.get<any>(`https://api.laligafantasymarca.com/api/v3/calendar/team/${teamId}`)
      .then((response) => {
        const data: any[] = response.data;
        const modifiedData: Calendar[] = data.map((element) => {
          return {
            date: moment(element.date),
            featured: element.featured,
            id: element.element,
            local: {
              badge: element.local.badgeColor,
              dspId: 0,
              id: element.local.id,
              name: element.local.name,
              shortName: element.local.shortName,
            },
            localScore: element.localScore,
            matchDate: moment(element.matchDate),
            matchState: element.matchState,
            time: moment(element.time),
            visitor: {
              badge: element.visitor.badgeColor,
              dspId: 0,
              id: element.visitor.id,
              name: element.visitor.name,
              shortName: element.visitor.shortName,
            },
            visitorScore: element.visitorScore,
          }
        });
        setIsLoading(false);
        setCalendar(modifiedData);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [teamId])

  const goBack = () => {
    navigate('/teams');
  }

  return (
    <React.Fragment>
      <div className="mb-3  d-flex justify-content-start">
        <Button variant="outline-primary"
          onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} className="me-2"></FontAwesomeIcon>
          Back
        </Button>
      </div>
      <Row>
        <Col xs="12">
          <div className="team-title-area d-flex align-items-center text-white p-3">
            <img src={teamDisplayed.image} alt={teamDisplayed.name} height="105" />
            <div className="ps-2">{teamDisplayed.name}</div>
          </div>
        </Col>
      </Row>
      {isLoading && <Spinner animation="border" role="status"></Spinner>}
      {!isLoading && !error &&
        <Row className="mt-4">
          <Col xs="4" className="position-relative">
            <div className="field-area">
              <img src='/field-outline.png' alt="field" />
            </div>
            <div className="players-area">
              Holi
            </div>
          </Col>
          <Col xs="4">
            {!isLoading && !error && calendar.length > 0 
            && calendar.map((item) => {
              return (
                <div className="calendar-item" key={item.time.format('DD/MM/YYYY')}>
                  {item.date.format('DD-MM-YYYY')}
                </div>
              )
            })}
          </Col>
          <Col xs="4">
            Players
          </Col>
        </Row>
      }
      {!isLoading && error && <div className="text-danger">{error}</div>}
    </React.Fragment>
  );
};

export default TeamDetail;
