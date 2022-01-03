import React from 'react';
import { IconLabelSmall, NameCard } from '../../atoms';
import { Icons } from '../../atoms/icons';
import {
  CardInfo,
  ChipsContainer,
  InputNumberForm,
  InputSum,
} from '../../molecules';
import { Button } from '../../molecules';
import { InputSumContainer } from '../../organisms';
import { PayformTemplate } from '../../templates';

//Информация по карте при нужде выносим наружу и взаимодействуем
const cardInfoLeft = <Icons.BankCard width={40} height={28} />;
const centerInfoCard = (
  <NameCard nameCard={'Карта зарплатная'} amountCard={'450 000'} />
);

//Информация по "чипсам" с суммами
const chipsArray = ['100', '500', '1000', '2500', '5000'];

type TNumberFunction = {
  onFocusNumber: () => void;
  onChangeTextNumber: (number: string) => void;
  resetTextNumber: () => void;
  valueNumber: string;
  mask?: string;
};

type TSumFunction = {
  onChangeTextSum: (sum: string) => void;
  valueSum: string;
  cashback: number;
};

type TChipsFunction = {
  onPressChips: (sum: string) => void;
};

type TProps = {
  uri: string;
  numberFunction: TNumberFunction;
  sumFunction: TSumFunction;
  chipsFunction: TChipsFunction;
  checkData: () => void;
};

export const PayformPages: React.FC<TProps> = ({
  uri,
  numberFunction,
  sumFunction,
  chipsFunction,
  checkData,
}) => {
  return (
    <PayformTemplate
      cardInfo={
        <CardInfo
          left={cardInfoLeft}
          right={<Icons.ShevronDown />}
          centerInfo={centerInfoCard}
        />
      }
      inputNumberForm={
        <InputNumberForm
          onFocusNumber={numberFunction.onFocusNumber}
          onChangeTextNumber={numberFunction.onChangeTextNumber}
          resetTextNumber={numberFunction.resetTextNumber}
          left={<IconLabelSmall uri={uri} />}
          valueNumber={numberFunction.valueNumber}
          mask={numberFunction.mask}
        />
      }
      inputSumContainer={
        <InputSumContainer
          up={
            <InputSum
              value={sumFunction.valueSum}
              onChangeTextSum={sumFunction.onChangeTextSum}
            />
          }
          down={
            <ChipsContainer
              chipsArray={chipsArray}
              onPressChips={chipsFunction.onPressChips}
              valueSum={sumFunction.valueSum}
              cashback={sumFunction.cashback}
            />
          }
        />
      }
      button={<Button text={'Продолжить'} checkData={checkData} />}
    />
  );
};
