import { storiesOf } from '@storybook/react-native';

import { IconLabel } from '.';

storiesOf('ui/atoms', module).add('iconLabel', () => {
  return (
    <IconLabel uri="https://github.com/kode-frontend/files/raw/main/1_mobile.png" />
  );
});
