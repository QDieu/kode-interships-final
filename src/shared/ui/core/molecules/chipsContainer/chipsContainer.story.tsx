import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { ChipsContainer } from './chipsContainer';

let chipsArray = ['100', '500', '1000', '2500', '5000'];

storiesOf('ui/molecules', module).add('chipsContainer', () => {
  return <ChipsContainer chipsArray={chipsArray} />;
});
