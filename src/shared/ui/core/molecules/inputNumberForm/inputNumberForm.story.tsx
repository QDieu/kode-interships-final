import { storiesOf } from '@storybook/react-native';

import { InputNumberForm } from './inputNumberForm';
import { IconLabelSmall } from '../../atoms';

storiesOf('ui/molecules', module).add('input-form', () => {
  return (
    <InputNumberForm
      left={
        <IconLabelSmall
          uri={'https://github.com/kode-frontend/files/raw/main/MTS.png'}
        />
      }
    />
  );
});
