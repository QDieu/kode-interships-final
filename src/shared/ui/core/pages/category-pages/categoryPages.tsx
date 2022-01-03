import React, { ComponentProps } from 'react';

import { CategoryTemplate } from '../../templates';
import { LabelList } from '../../organisms';
import { TMenuList } from '../../organisms/labelList/labelList';
import { TMobileListParams } from '@pages/ui/Payments/categoryMobile/types';
import { TPayFormContainer } from '@pages/ui/Payments/payForm/types';

export type TCategoryPage = {
  category: TMenuList;
};

type TProps = TCategoryPage & {
  pressLink(services: TMobileListParams | TPayFormContainer): void;
};

export const CategoryPages: React.FC<TProps> = ({ category, pressLink }) => {
  return (
    <CategoryTemplate
      labelList={
        <LabelList category={category.category} pressLink={pressLink} />
      }
    />
  );
};
