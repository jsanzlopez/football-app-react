import React, { useState } from 'react';
import { PlayerListItem } from '../../models/player.model';
import ListItem from './ListItem/ListItem';
import SearchForm from './SearchForm/SearchForm';
import './PlayerList.scss';
import { Button } from 'react-bootstrap';
import AddPlayer from './AddPlayer/AddPlayer';

const PlayerList: React.FunctionComponent<any> = () => {
  const dummyList: PlayerListItem[] = [
    {
      id: '1',
      name: 'Karim',
      lastName: 'Benzema',
      team: 'Real Madrid',
      position: 4,
      squadNumber: 9,
      points: 101,
      value: 36000000,
      status: 1,
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
      status: 2,
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
      status: 1,
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
      status: 1,
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
      status: 3,
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
      status: 1,
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
      status: 3,
      image: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203422114596&ssbinary=true'
    },
  ];


  const [listDisplayed, setListDisplayed] = useState(dummyList);
  const [showAddPlayer, setShowAddPlayer] = useState(false);
 

  const updatePositionFilter = (newPosition: number) => {
    const result = newPosition === 0 ? dummyList : dummyList.filter(element => element.position === newPosition);
    setListDisplayed(result);
  };

  const updateNameFilter = (newFilter: string) => {
    const result = dummyList.filter((element) => {
      return element.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase())
        || element.lastName.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase())
    });
    setListDisplayed(result);
  };
  const toggleAddNewPlayer = () => setShowAddPlayer((state) => !state);
  const closeAddNewPlayer = () => setShowAddPlayer(false);

  const addNewPlayer = (player: PlayerListItem) => {

    setListDisplayed([...listDisplayed, player]);
    closeAddNewPlayer();
  }



  return (
    <React.Fragment>
      <div className="test-button-area mb-4">
        <div className="d-flex justify-content-end mb-2">
          <Button onClick={toggleAddNewPlayer} variant="outline-primary">
            {showAddPlayer ? 'Close Add Player' : 'Add Player'}
          </Button>
        </div>
        <hr className="mb-4" />
        {showAddPlayer && <AddPlayer onAddPlayer={addNewPlayer}></AddPlayer>}
      </div>
      <div className="form-area">
        <SearchForm onFilterPosition={updatePositionFilter}
          onFilterName={updateNameFilter}>
        </SearchForm>
      </div>
      <div className="list-area">
        {listDisplayed.map((item) => <ListItem player={item} key={item.id}></ListItem>)}
      </div>
    </React.Fragment>
  );
}

export default PlayerList;
