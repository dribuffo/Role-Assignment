//dependencies
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

//components

const Player = ({toggle, handleMyRaidTeam}) => {
    let params = useParams();

    return (
      <div>
        <h1>This is the player page.</h1>
      </div>
    );
  };
  
  export default Player;