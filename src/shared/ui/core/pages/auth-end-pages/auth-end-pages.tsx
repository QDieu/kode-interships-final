import React from 'react';

import { AuthEnd } from '../../organisms';
import { AuthEndTemplate } from '../../templates';

type TProps = {
  checkData: () => void;
};

export const AuthEndPages = ({ checkData }: TProps) => {
  return <AuthEndTemplate content={<AuthEnd checkData={checkData} />} />;
};
