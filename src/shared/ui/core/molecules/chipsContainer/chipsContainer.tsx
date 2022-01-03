import { styled } from '@shared/ui/theme';
import React from 'react';
import { FlatList } from 'react-native';
import { Chips } from '../../atoms/chips';
import { Typography } from '../../typography';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px 0px;
  padding-left: ${({ theme }) => theme.spacing(2)}px;
`;

const TText = styled.Text`
  font-family: ${({ theme }) => theme.typography['caption1'].fontFamily};
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  font-size: 13;
  line-height: 16;
  color: #c2c1c6;
`;

type TProps = {
  chipsArray: Array<string>;
  onPressChips: (sum: string) => void;
  valueSum: string;
  cashback: number;
};

export const ChipsContainer: React.FC<TProps> = ({
  chipsArray,
  onPressChips,
  valueSum,
  cashback,
}) => {
  return (
    <Wrapper>
      {!+valueSum ? (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={chipsArray}
          keyExtractor={index => index}
          renderItem={({ item }) => (
            <Chips sum={item} onPressChips={onPressChips} />
          )}
        />
      ) : (
        <TText>
          Ваш кешбек составит {cashback}% - {Math.floor(+valueSum / cashback)} ₽
        </TText>
      )}
    </Wrapper>
  );
};
