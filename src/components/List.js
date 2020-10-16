import React, {useEffect, useState} from 'react';
import './List.scss';
import Streamer from './Streamer';

function List({datas}) {
  return (
    <div className="list">
      {datas.live.map(e => 
        <Streamer player={e} key={e.twitch} />
      )} 
    </div>
  );
}

export default List;
