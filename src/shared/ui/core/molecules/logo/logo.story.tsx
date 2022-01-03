import { storiesOf } from '@storybook/react-native';
import { Logo } from '.';

storiesOf('ui/molecules', module).add('logo', () => {
  return <Logo bigSize="very-small" />;
});
