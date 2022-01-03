import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode } from 'react';

import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  flex: 1;
`;

export type TCategoryTemplate = {
  labelList: ReactNode;
};

export const CategoryTemplate = ({ labelList }: TCategoryTemplate) => {
  return <Wrapper>{labelList}</Wrapper>;
};
