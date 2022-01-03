import React from 'react';

import { styled } from '@shared/ui/theme';
import { IconLabel } from '../../atoms';
import { Typography } from '../../typography';
import { TMobileListParams } from '@pages/ui/Payments/categoryMobile/types';
import { TPayFormContainer } from '@pages/ui/Payments/payForm/types';

const WrapperHeight = 68;

const TouchWrapper = styled.TouchableOpacity`
  height: ${() => WrapperHeight}px;
  padding-left: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  flex-direction: row;
`;

interface StyleProps {
  readonly last?: boolean;
}

const TypographyWrapper = styled.View<StyleProps>`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(1)}px;
  text-align: center;
  flex: 1;
  border-bottom-width: ${props => (props.last ? 0 : 1)};
  border-color: #403a47;
`;

type TService = {
  service_id: string;
  service_name: string;
  service_icon: string;
};

export type TLabelInfo = {
  category_icon: string;
  category_name: string;
  last?: boolean;
  category_id: string;
  services: Array<TService> | null;
  bigIcon?: boolean;
};

type TProps = TLabelInfo & {
  pressLink: (services: TMobileListParams | TPayFormContainer) => void;
};

export const LabelInfo: React.FC<TProps> = ({
  category_icon,
  category_name,
  last,
  category_id,
  services,
  pressLink,
  bigIcon,
}) => {
  return (
    <TouchWrapper
      activeOpacity={0.7}
      onPress={() => {
        if (services == null)
          pressLink({
            uri: category_icon,
            name: category_name,
            id: category_id,
          });
        else pressLink({ serviсes: services });
      }}
    >
      {bigIcon ? (
        <IconLabel uri={category_icon} bigIcon={bigIcon} />
      ) : (
        <IconLabel uri={category_icon} />
      )}
      <TypographyWrapper last={last}>
        <Typography
          variant="body15Regular"
          style={{
            color: '#fff',
            fontSize: 15,
            lineHeight: 20,
            letterSpacing: -0.24,
          }}
        >
          {category_name}
        </Typography>
      </TypographyWrapper>
    </TouchWrapper>
  );
};
