import { storiesOf } from '@storybook/react-native';

import { AuthErrorPages } from './auth-error-pages';

storiesOf('ui/pages', module).add('auth-error-page', () => {
  return <AuthErrorPages onPress={() => {}} />;
});
