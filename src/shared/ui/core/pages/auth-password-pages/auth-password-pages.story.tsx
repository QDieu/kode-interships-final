import { storiesOf } from '@storybook/react-native';
import { Keyboard } from 'react-native';

import { AuthPasswordPages } from './auth-password-pages';

storiesOf('ui/pages', module).add('auth-password-page', () => {
  return <AuthPasswordPages />;
});
