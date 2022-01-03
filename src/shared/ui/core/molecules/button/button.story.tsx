import { storiesOf } from '@storybook/react-native';

import { Button } from './button';

storiesOf('ui/molecules', module).add('button', () => {
  return <Button text={'Продолжить'} />;
});
