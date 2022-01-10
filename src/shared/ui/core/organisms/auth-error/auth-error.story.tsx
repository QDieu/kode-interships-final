import { storiesOf } from '@storybook/react-native';

import { AuthErrorMolec } from './auth-error';

storiesOf('ui/organisms', module).add('auth-error', () => {
  return <AuthErrorMolec checkData={() => {}} />;
});
