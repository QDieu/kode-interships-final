import React from 'react';
import { AuthPasswordInput } from '../../organisms';
import { AuthPasswordTemplate } from '../../templates';

type TProps = {
  password: string;
  onChangeText: (text: string) => void;
  checkData: () => void;
};

export const AuthPasswordPages = ({
  password,
  onChangeText,
  checkData,
}: TProps) => {
  return (
    <AuthPasswordTemplate
      content={
        <AuthPasswordInput
          password={password}
          onChangeText={onChangeText}
          checkData={checkData}
        />
      }
    />
  );
};
