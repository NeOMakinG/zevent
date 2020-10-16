import React, {useEffect, useState} from 'react';
import './Informations.scss';

function Informations({datas}) {
  return (
    <div className="informations">
      <div className="informations-donations">
        <p className="informations-donations-title">Total donations</p>
        <p className="informations-donations-amount">{datas.donationAmount.formatted}</p>
      </div>

      <div className="informations-viewers">
        <p className="informations-viewers-title">Total viewers</p>
        <p className="informations-viewers-amount">{datas.viewersCount.formatted}</p>
      </div>
    </div>
  );
}

export default Informations;
