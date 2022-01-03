import { storiesOf } from '@storybook/react-native';

import { AuthPhoneInput } from './auth-phone-input';

storiesOf('ui/organisms', module).add('auth-phone-input', () => {
  return (
    <AuthPhoneInput
      onFocusNumber={() => {}}
      onChangeTextNumber={() => {}}
      valueNumber=""
    />
  );
});
