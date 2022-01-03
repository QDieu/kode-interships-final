import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { Key } from './key';

storiesOf('ui/atoms', module).add('key', () => {
  return <Key text={text('key', '2')} />;
});
