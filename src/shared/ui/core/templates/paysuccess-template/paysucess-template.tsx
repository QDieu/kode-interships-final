import { ReactNode } from 'react';

import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  flex: 1;
`;

export type TProps = {
  paysuccess: ReactNode;
};

export const PaySuccessTemplate = ({ paysuccess }: TProps) => {
  return <Wrapper>{paysuccess}</Wrapper>;
};
