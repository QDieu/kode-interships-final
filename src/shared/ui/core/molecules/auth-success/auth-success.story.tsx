import { storiesOf } from '@storybook/react-native';

import { AuthSuccess } from './auth-success';

storiesOf('ui/molecules', module).add('auth-success', () => {
  return <AuthSuccess />;
});
