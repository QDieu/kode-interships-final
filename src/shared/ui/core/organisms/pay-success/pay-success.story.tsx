import { storiesOf } from '@storybook/react-native';

import { PaySuccess } from './pay-success';

storiesOf('ui/organisms', module).add('pay-success', () => {
  return <PaySuccess success={true} sum={'1 500,00'} checkData={() => {}} />;
});
