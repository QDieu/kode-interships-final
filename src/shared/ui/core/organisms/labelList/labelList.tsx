import { TMobileListParams } from '@pages/ui/Payments/categoryMobile/types';
import { TPayFormContainer } from '@pages/ui/Payments/payForm/types';
import React, { ComponentProps, Fragment } from 'react';
import { FlatList } from 'react-native';
import { LabelInfo } from '../../molecules';
import { TLabelInfo } from '../../molecules/labelInfo/labelInfo';

export type TMenuList = {
  category: TLabelInfo[];
};

type TProps = TMenuList & {
  pressLink: (services: TMobileListParams | TPayFormContainer) => void;
};

export const LabelList: React.FC<TProps> = ({ category, pressLink }) => (
  <FlatList
    data={category}
    renderItem={({ item, index }) => {
      if (index + 1 == category.length)
        return <LabelInfo {...item} last={true} pressLink={pressLink} />;
      return <LabelInfo {...item} pressLink={pressLink} />;
    }}
    keyExtractor={item => item.category_id}
  />
);
