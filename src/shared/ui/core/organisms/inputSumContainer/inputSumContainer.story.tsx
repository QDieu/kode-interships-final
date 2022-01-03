import { storiesOf } from '@storybook/react-native';
import { ChipsContainer, InputSum } from '../../molecules';

import { InputSumContainer } from './inputSumContainer';

let chipsArray = ['100', '500', '1000', '2500', '5000'];

storiesOf('ui/organisms', module).add('sumInput', () => {
  return (
    <InputSumContainer
      up={<InputSum />}
      down={<ChipsContainer chipsArray={chipsArray} />}
    />
  );
});
