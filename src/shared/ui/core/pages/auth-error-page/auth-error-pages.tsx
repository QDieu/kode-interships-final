import React from 'react';

import { AuthErrorMolec } from '../../organisms';
import { AuthEndTemplate } from '../../templates';

type TProps = {
  onPress: () => void;
};

export const AuthErrorPages = ({ onPress }: TProps) => {
  return <AuthEndTemplate content={<AuthErrorMolec onPress={onPress} />} />;
};
