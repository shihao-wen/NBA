import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from './constants';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
  state = {
    dataSource: []
  };

  // During search, we pass the search value to nba to get matching results.
  // Controlled component, every single letter typed will be combined with
  // previous history (i.e. value) and passed to the backend nba.
  // The backend nba responds any matching results.
  handleSearch = value => {
    console.log(value);
    this.setState({
      dataSource: !value
        ? []
        : nba.searchPlayers(value).map(player => ({
            fullName: player.fullName,
            playerId: player.playerId
          }))
    });
  };

  // Once we select the player, pass the search value to
  // Profile and Shotchart components.
  onSelect = playerName => {
    this.props.handleSelectPlayer(playerName);
  };

  render() {
    const { dataSource } = this.state;
    // Option is the component below search bar showing all the matching options during search.
    // It's in a form of option list given by Ant design.
    // To map dataSource, we need the handleSearch.
    const options = dataSource.map(player => (
      // In Option, show player image on the left and full name on the right.
      <Option
        key={player.fullName}
        value={player.fullName}
        className='player-option'
      >
        <img
          className='player-option-image'
          src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}
          alt=''
        />
        <span className='player-option-label'>{player.fullName}</span>
      </Option>
    ));

    return (
      <AutoComplete
        className='search-bar'
        size='large'
        dataSource={options}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        // this is the default text in the search bar
        placeholder='Search NBA Player'
        optionLabelProp='value'
      >
        <Input
          suffix={<Icon type='search' className='certain-category-icon' />}
        />
      </AutoComplete>
    );
  }
}
