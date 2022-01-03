import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { FieldConfirmPay } from './field-confirm-pay';

storiesOf('ui/atoms', module).add('field-confrim-pay', () => {
  return <FieldConfirmPay text={text('alert', 'Карта для оплаты')} />;
});
