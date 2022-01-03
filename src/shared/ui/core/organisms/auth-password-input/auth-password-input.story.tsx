import { storiesOf } from '@storybook/react-native';

import { AuthPasswordInput } from './auth-password-input';

storiesOf('ui/organisms', module).add('auth-password-input', () => {
  return <AuthPasswordInput />;
});
