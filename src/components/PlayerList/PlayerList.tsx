import * as React from 'react';
import { PlayerListItem } from '../../models/player.model';
import { Position } from '../../models/position.model';
import ListItem from './ListItem/ListItem';
import './PlayerList.scss';
import SearchForm from './SearchForm/SearchForm';

export interface PlayerListProps {
  positions: Position[];
  children ?: React.ReactChild;
}

export interface PlayerListState {
  searchText: string;
  positionFilter: number;
  listDisplayed: PlayerListItem[];
}

export default class PlayerList extends React.Component<PlayerListProps, PlayerListState> {
  positions: Position[];
  static dummyList: PlayerListItem[] = [
    {
      id: '1',
      name: 'Karim',
      lastName: 'Benzema',
      team: 'Real Madrid',
      position: 4,
      squadNumber: 9,
      points: 101,
      value: 36000000,
      image: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203422115728&ssbinary=true'
    },
    {
      id: '2',
      name: 'Thibaut',
      lastName: 'Courtois',
      team: 'Real Madrid',
      position: 1,
      squadNumber: 1,
      points: 88,
      value: 25000000,
      image: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203422114860&ssbinary=true'
    },
    {
      id: '3',
      name: 'David',
      lastName: 'Alaba',
      team: 'Real Madrid',
      position: 2,
      squadNumber: 4,
      points: 77,
      value: 15000000,
      image: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203422519507&ssbinary=true'
    },
    {
      id: '4',
      name: 'Luka',
      lastName: 'Modric',
      team: 'Real Madrid',
      position: 3,
      squadNumber: 10,
      points: 63,
      value: 25200000,
      image: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203422115277&ssbinary=true'
    },
    {
      id: '5',
      name: 'Marco',
      lastName: 'Asensio',
      team: 'Real Madrid',
      position: 4,
      squadNumber: 11,
      points: 31,
      value: 6000000,
      image: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203422114536&ssbinary=true'
    },
    {
      id: '6',
      name: 'Vinicius',
      lastName: 'Junior',
      team: 'Real Madrid',
      position: 4,
      squadNumber: 20,
      points: 92,
      value: 29000000,
      image: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203422114806&ssbinary=true'
    },
    {
      id: '7',
      name: 'Federico',
      lastName: 'Valverde',
      team: 'Real Madrid',
      position: 3,
      squadNumber: 15,
      points: 69,
      value: 15000000,
      image: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203422114596&ssbinary=true'
    },
  ];
  constructor(props: PlayerListProps) {
    super(props);
    this.positions = props.positions;

    this.state = {
      searchText: '',
      positionFilter: 0,
      listDisplayed: PlayerList.dummyList,
    }
  }

  updatePositionFilter = (newPosition: number) => {
    this.setState({
      positionFilter: newPosition,
      listDisplayed: newPosition === 0 ? PlayerList.dummyList : PlayerList.dummyList.filter(element => element.position === newPosition)
    })
  };

  updateNameFilter = (newFilter: string) => {
    this.setState({
      searchText: newFilter,
      listDisplayed: PlayerList.dummyList.filter(element => element.name.toLocaleLowerCase().includes(newFilter) || element.lastName.toLocaleLowerCase().includes(newFilter))
    })
  };

  public render() {
    return (
      <div>
        <div className="form-area">
          <SearchForm onFilterPosition={this.updatePositionFilter}
            onFilterName={this.updateNameFilter}>
          </SearchForm>
        </div>
        <div className="list-area">
          {this.state.listDisplayed.map((item) => <ListItem player={item} key={item.id}></ListItem>)}
        </div>
      </div>
    );
  }
}
