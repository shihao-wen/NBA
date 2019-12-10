import React from 'react';

function ProfileList(props) {
  return (
    <div className='profile-entry'>
      <div className='profile-entry-left'>{props.property}</div>
      <div className='profile-entry-right'>{props.value}</div>
    </div>
  );
}

export default ProfileList;
