import * as React from 'react';
import './Card.scss';

const Card: React.FunctionComponent<any> = (props) => {
  return (
    <div className="card-item mb-3">
      {props.children}
    </div>
  );
};

export default Card;
