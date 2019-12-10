import React from 'react';
import { PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX } from './constants';
import ProfileList from './ProfileList';

const Profile = props => {
  const {
    teamAbbreviation,
    teamCity,
    teamName,
    playerName,
    height,
    weight,
    playerId,
    pts,
    reb,
    ast,
    pie
  } = props.playerInfo;
  return (
    <div className='profile'>
      <div className='profile-entry player-name'>{`${playerName}`}</div>
      <img
        className='profile-pic'
        src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
        alt='Profile'
      />
      <ProfileList property='Team' value={`${teamCity} ${teamName}`} />
      <img
        className='team-logo'
        src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
        alt='Team'
      />
      <ProfileList property='Height' value={`${height}`} />
      <ProfileList property='Weight' value={`${weight}`} />
      <ProfileList property='PTS' value={`${pts}`} />
      <ProfileList property='REB' value={`${reb}`} />
      <ProfileList property='AST' value={`${ast}`} />
      <ProfileList property='PIE' value={`${pie}`} />
    </div>
  );
};
export default Profile;
