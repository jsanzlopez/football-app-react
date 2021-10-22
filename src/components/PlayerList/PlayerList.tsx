import React, { useEffect, useState } from 'react';
import { PlayerListItem } from '../../models/player.model';
import ListItem from './ListItem/ListItem';
import SearchForm from './SearchForm/SearchForm';
import './PlayerList.scss';
import { Button } from 'react-bootstrap';
import AddPlayer from './AddPlayer/AddPlayer';
import axios from 'axios';

const PlayerList: React.FunctionComponent<any> = () => {
  const [fullList, setFullList] = useState(([] as PlayerListItem[]));
  const [listDisplayed, setListDisplayed] = useState(([] as PlayerListItem[]));
  const [showAddPlayer, setShowAddPlayer] = useState(false);

  useEffect(() => {
    axios.get<any>('https://api.laligafantasymarca.com/api/v3/players').then((response) => {
      const data: any[] = response.data;
      const modifiedData: PlayerListItem[] = data.map(item => {
        return {
          id: item.id,
          name: item.nickname,
          team: item.team.name,
          position: item.positionId,
          points: item.points,
          value: item.marketValue,
          image: item.images.transparent['512x512'] || '',
          status: item.playerStatus,
        }
      });
      setFullList(modifiedData);
      setListDisplayed(modifiedData);
    });
  }, [])

  const updatePositionFilter = (newPosition: string) => {
    const result = newPosition === '0' ? fullList : fullList.filter(element => element.position === newPosition);
    setListDisplayed(result);
  };

  const updateNameFilter = (newFilter: string) => {
    const result = fullList.filter((element) => {
      return element.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase());
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
      {
        false &&
        <div className="test-button-area mb-4">
          <div className="d-flex justify-content-end mb-2">
            <Button onClick={toggleAddNewPlayer} variant="outline-primary">
              {showAddPlayer ? 'Close Add Player' : 'Add Player'}
            </Button>
          </div>
          <hr className="mb-4" />
          {showAddPlayer && <AddPlayer onAddPlayer={addNewPlayer}></AddPlayer>}
        </div>
      }
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
