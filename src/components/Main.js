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

// import React, { useState, useEffect } from 'react';
// import { DataViewContainer } from './DataViewContainer';
// import Profile from './Profile';
// import { SearchBar } from './SearchBar';
// // import { DEFAULT_PLAYER_INFO } from './constants';
// import nba from 'nba';

// // This is the main part of the web page
// const Main = () => {
//   const [playerInfo, setPlayerInfo] = useState({
//     playerId: 2544,
//     fullName: 'Lebron James',
//     teamAbbreviation: 'LAL'
//   });

//   // Lifecycle, show default player once open the web-page.
//   useEffect((playerInfo, loadPlayerInfo) => {
//     loadPlayerInfo(playerInfo.fullName);
//   }, []);

//   const loadPlayerInfo = playerName => {
//     console.log(playerInfo);
//     nba.stats
//       .playerInfo({ PlayerID: nba.findPlayer(playerName).playerId })
//       .then(info => {
//         const { commonPlayerInfo, playerHeadlineStats } = info;
//         const newPlayerInfo = {
//           ...commonPlayerInfo[0],
//           ...playerHeadlineStats[0]
//         };
//         setPlayerInfo(newPlayerInfo);
//       });
//   };

//   const handleSelectPlayer = playerName => {
//     loadPlayerInfo(playerName);
//   };
//   return (
//     <div className='main'>
//       <SearchBar handleSelectPlayer={handleSelectPlayer} />
//       <div className='player'>
//         <Profile playerInfo={playerInfo} />
//         <DataViewContainer playerId={playerInfo.playerId} />
//       </div>
//     </div>
//   );
// };
// export default Main;
