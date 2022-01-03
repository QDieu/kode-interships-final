import { storiesOf } from '@storybook/react-native';

import { ConfrimpayPages } from './confrimpay-pages';

storiesOf('ui/pages', module).add('confirm-pay-page', () => {
  return <ConfrimpayPages checkData={() => {}} />;
});
