import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { Check } from './check';

storiesOf('ui/atoms', module).add('check', () => {
  return <Check success={true} />;
});
