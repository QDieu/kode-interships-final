import { Tuple } from 'effector';
import React from 'react';
import { ConfirmPay } from '../../organisms';
import { ConfirmPayTemplate } from '../../templates/';

type TProps = {
  checkData: () => void;
  arrayInfo: Array<Array<string>>;
};

export const ConfrimpayPages: React.FC<TProps> = ({ checkData, arrayInfo }) => {
  return (
    <ConfirmPayTemplate
      main={<ConfirmPay checkData={checkData} arrayInfo={arrayInfo} />}
    />
  );
};
