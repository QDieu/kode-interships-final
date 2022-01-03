import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { NameCard } from './nameCard';

storiesOf('ui/atoms', module).add('name-card', () => {
  return (
    <NameCard
      nameCard={text('nameCard', 'Карта зарплатная')}
      amountCard={text('amountCard', '457 334,00')}
    />
  );
});
