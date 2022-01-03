import { storiesOf } from '@storybook/react-native';

import { CheckPay } from './check-pay';

storiesOf('ui/molecules', module).add('check-pay', () => {
  return <CheckPay success={true} sum={'1 500,00'} />;
});
