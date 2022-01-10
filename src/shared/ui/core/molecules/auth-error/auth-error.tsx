import React from 'react';
import styled from 'styled-components/native';
import { Icons } from '../../atoms';

import { Typography } from '../../typography';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.View`
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

type TProps = {};

export const AuthError = ({}: TProps) => {
  return (
    <Wrapper>
      <Icons.Error />
      <ContentWrapper>
        <Typography variant="subtitle" style={{ marginBottom: 16 }}>
          Все готово
        </Typography>
        <Typography variant="body15Regular" style={{ textAlign: 'center' }}>
          {`Сервер временно недоступен.${'\n'} Пожалуйста, повторите попытку ${'\n'} позднее`}
        </Typography>
      </ContentWrapper>
    </Wrapper>
  );
};
