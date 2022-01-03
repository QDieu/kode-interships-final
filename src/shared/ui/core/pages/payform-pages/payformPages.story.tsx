import { storiesOf } from '@storybook/react-native';

import { PayformPages } from './payformPages';

storiesOf('ui/pages', module).add('payform-page', () => {
  return (
    <PayformPages
      uri={'https://github.com/kode-frontend/files/raw/main/MTS.png'}
    />
  );
});
