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

export const AuthSuccess = ({}: TProps) => {
  return (
    <Wrapper>
      <Icons.AuthSuccess />
      <ContentWrapper>
        <Typography variant="subtitle" style={{ marginBottom: 16 }}>
          Все готово
        </Typography>
        <Typography variant="body15Regular" style={{ textAlign: 'center' }}>
          {`Теперь вы можете использовать ${'\n'}мобильное приложение Kode bank`}
        </Typography>
      </ContentWrapper>
    </Wrapper>
  );
};
