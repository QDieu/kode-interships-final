import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode } from 'react';

import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  flex: 1;
  background-color: #312c39;
`;

export type TCategoryTemplate = {
  logo: ReactNode;
};

export const SplashScreenTemplate = ({ logo }: TCategoryTemplate) => {
  return <Wrapper>{logo}</Wrapper>;
};
