import { storiesOf } from '@storybook/react-native';

import { ConfirmPay } from './confirm-pay';

storiesOf('ui/organisms', module).add('confirm-pay', () => {
  return <ConfirmPay checkData={() => {}} />;
});
