import React from 'react';

import { AuthEnd } from '../../organisms';
import { AuthEndTemplate } from '../../templates';

type TProps = {};

export const AuthEndPages = ({}: TProps) => {
  return <AuthEndTemplate content={<AuthEnd />} />;
};
