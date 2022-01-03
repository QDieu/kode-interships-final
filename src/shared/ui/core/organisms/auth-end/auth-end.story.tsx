import { storiesOf } from '@storybook/react-native';

import { AuthEnd } from './auth-end';

storiesOf('ui/organisms', module).add('auth-end', () => {
  return <AuthEnd />;
});
