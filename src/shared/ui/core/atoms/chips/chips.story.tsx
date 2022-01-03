import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { Chips } from './chips';

storiesOf('ui/atoms', module).add('chips', () => {
  return <Chips sum={text('sum', '100')} />;
});
