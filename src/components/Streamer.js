import React, {useEffect, useState} from 'react';
import './Streamer.scss';

function Streamer({player}) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  }

  return (
    <div className="streamer">
      <div className="streamer-top" onClick={() => {
         toggleSelected(); 
        }}>
        <div className={player.online ? 'streamer-online' : 'streamer-offline'}></div>

        <div className="streamer-img">
          <img src={player.profileUrl} />
        </div>    

        <p className="streamer-name">
          {player.display}
        </p>

        <div className="streamer-donations">
          {player.donationGoal.donationAmount ? 
            <React.Fragment>
              <p className="streamer-subtitle">Donations</p>
              <p className="streamer-amount">
                {player.donationGoal.donationAmount.formatted}
              </p>
            </React.Fragment>
          : null}
        </div>

        {player.viewersAmount.formatted ? 
          <div className="streamer-donations">
            <p className="streamer-subtitle">Viewers</p>
            <p className="streamer-amount">
              {player.viewersAmount.formatted}
            </p>
          </div>
        : null}

        {player.donationGoal.goals ?
          <div className={selected ? 'streamer-arrow streamer-arrow-opened' : 'streamer-arrow streamer-arrow-closed' }></div>
        : null}
      </div>

      {selected && player.donationGoal.goals ? 
        <div className="streamer-informations">
          {player.donationGoal.goals ?
            <React.Fragment>
              {player.donationGoal.goals.map(e => 
                <div className="streamer-goal">
                  <p className={e.amountRequired.number < player.donationGoal.donationAmount.number ? 'streamer-goal-amount green' : 'streamer-goal-amount red'}>
                    {e.amountRequired.formatted} 
                  </p>

                  <p className="streamer-goal-title">
                    {e.title} 
                  </p>
                </div>
              )}
            </React.Fragment>
          : null}
        </div>
      : null}
    </div>
  );
}

export default Streamer;
