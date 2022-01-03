import React from 'react';
import { styled } from '@shared/ui/theme';
import { FieldConfirmPay } from '../../atoms';
import { Button } from '..';

const Wrapper = styled.View`
  flex: 1;
`;

const textArray = [
  'Карта для оплаты',
  'Телефон получателя',
  'Мобильный оператор',
  'Имя получателя',
  'Сумма платежа',
  'Кешбек',
];

type TProps = {
  arrayInfo: Array<Array<string>>;
};

export const ConfirmPayInfo = ({ arrayInfo }: TProps) => {
  return (
    <Wrapper>
      {arrayInfo.map((item, index) =>
        index + 1 === arrayInfo.length ? (
          <FieldConfirmPay title={item[0]} info={item[1]} last={false} />
        ) : (
          <FieldConfirmPay title={item[0]} info={item[1]} />
        ),
      )}
    </Wrapper>
  );
};
