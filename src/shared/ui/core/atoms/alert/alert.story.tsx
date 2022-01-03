import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { AlertView } from './alert';

storiesOf('ui/atoms', module).add('alert', () => {
  return <AlertView text={text('alert', 'Мало деняк')} onPress={() => {}} />;
});
