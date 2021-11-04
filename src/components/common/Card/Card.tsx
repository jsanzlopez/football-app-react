import * as React from 'react';
import './Card.scss';

interface CardProps {
  clickable: boolean;
  children: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  return (
    <div className={`card-item mb-3 ${props.clickable ? 'clickable': ''}`}>
      {props.children}
    </div>
  );
};

export default Card;
