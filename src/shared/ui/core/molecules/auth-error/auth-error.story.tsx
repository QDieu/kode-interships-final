import { storiesOf } from '@storybook/react-native';

import { AuthError } from './auth-error';

storiesOf('ui/molecules', module).add('auth-error', () => {
  return <AuthError />;
});
