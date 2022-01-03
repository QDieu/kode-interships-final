import { storiesOf } from '@storybook/react-native';

import { InputPassword } from './input-password';
import { IconLabelSmall } from '../../atoms';
import { Icons } from '../../atoms/icons';

storiesOf('ui/molecules', module).add('input-password', () => {
  return <InputPassword left={<Icons.Lock />} />;
});
