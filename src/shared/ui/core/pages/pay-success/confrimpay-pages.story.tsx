import { storiesOf } from '@storybook/react-native';

import { PaySuccessPages } from './pay-success';

storiesOf('ui/pages', module).add('pay-success-pages', () => {
  return (
    <PaySuccessPages checkData={() => {}} success={true} sum={'20 000,00'} />
  );
});
