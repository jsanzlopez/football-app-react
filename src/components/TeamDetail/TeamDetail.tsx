import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

interface TeamDetailParams {
  id: string;
}

const TeamDetail: React.FunctionComponent = () => {

  const params: TeamDetailParams = useParams();
  const teamId = params.id;

  const history = useHistory();

  const goBack = () => {
    history.goBack();
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
      <div>{teamId}</div>
    </React.Fragment>
  );
};

export default TeamDetail;
