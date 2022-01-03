import { storiesOf } from '@storybook/react-native';

import { SplashScreenPages } from './splash-screen-pages';

storiesOf('ui/pages', module).add('splash-screen-pages', () => {
  return <SplashScreenPages />;
});
