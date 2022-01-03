import { storiesOf } from '@storybook/react-native';

import { KeyboardCustom } from './keyboard-custom';

let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Отмена', '0', '1'];

storiesOf('ui/organisms', module).add('keyboard-custom', () => {
  return <KeyboardCustom keyArray={array} />;
});
