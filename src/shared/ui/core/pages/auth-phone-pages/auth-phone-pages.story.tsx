import { storiesOf } from '@storybook/react-native';
import { Keyboard } from 'react-native';

import { AuthPhonePages } from './auth-phone-pages';

let array = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'Отмена',
  '0',
  'delete',
];

storiesOf('ui/pages', module).add('auth-phone-page', () => {
  return (
    <AuthPhonePages
      checkData={() => {}}
      onChangeTextNumber={() => {}}
      valueNumber=""
      onFocusNumber={() => {}}
      keyArray={array}
    />
  );
});
