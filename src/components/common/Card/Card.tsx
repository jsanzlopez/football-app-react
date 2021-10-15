import React, { Component } from 'react'
import './Card.scss';
interface Props {
  
}
interface State {
  
}

export default class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="card-item">
        {this.props.children}
      </div>
    )
  }
}
