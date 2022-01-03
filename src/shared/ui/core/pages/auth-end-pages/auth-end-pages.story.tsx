import { storiesOf } from '@storybook/react-native';
import { Keyboard } from 'react-native';

import { AuthEndPages } from './auth-end-pages';

storiesOf('ui/pages', module).add('auth-end', () => {
  return <AuthEndPages />;
});
