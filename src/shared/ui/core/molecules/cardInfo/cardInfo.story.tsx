import { storiesOf } from '@storybook/react-native';

import { CardInfo } from './cardInfo';
import { Icons } from '../../atoms/icons';
import { NameCard } from '../../atoms';

storiesOf('ui/molecules', module).add('card-info', () => {
  return (
    <CardInfo
      centerInfo={
        <NameCard nameCard={'Карта зарплатная'} amountCard={'450 000'} />
      }
      left={<Icons.BankCard width={40} height={28} />}
      right={<Icons.ShevronDown />}
    />
  );
});
