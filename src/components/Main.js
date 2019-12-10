import React from 'react';
import { DataViewContainer } from './DataViewContainer';
import Profile from './Profile';
import { SearchBar } from './SearchBar';
import { DEFAULT_PLAYER_INFO } from './constants';
import nba from 'nba';

// This is the main part of the web page
export class Main extends React.Component {
  state = {
    playerInfo: DEFAULT_PLAYER_INFO
  };

  // Lifecycle, show default player once open the web-page.
  componentDidMount() {
    this.loadPlayerInfo(this.state.playerInfo.fullName);
  }

  loadPlayerInfo = playerName => {
    console.log(this.state.playerInfo);
    nba.stats
      .playerInfo({ PlayerID: nba.findPlayer(playerName).playerId })
      .then(info => {
        const { commonPlayerInfo, playerHeadlineStats } = info;
        const playerInfo = {
          ...commonPlayerInfo[0],
          ...playerHeadlineStats[0]
        };
        this.setState({ playerInfo });
      });
  };

  handleSelectPlayer = playerName => {
    this.loadPlayerInfo(playerName);
  };

  render() {
    return (
      <div className='main'>
        <SearchBar handleSelectPlayer={this.handleSelectPlayer} />
        <div className='player'>
          <Profile playerInfo={this.state.playerInfo} />
          <DataViewContainer playerId={this.state.playerInfo.playerId} />
        </div>
      </div>
    );
  }
}
