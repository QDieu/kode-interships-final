import { storiesOf } from '@storybook/react-native';

import { LabelInfo } from '.';

storiesOf('ui/molecules', module).add('LabelInfo', () => {
  return (
    <LabelInfo
      category_icon="https://github.com/kode-frontend/files/raw/main/1_mobile.png"
      category_name={'Мобильная связь'}
      last={false}
      category_id="1"
      services={[]}
      pressLink={() => {}}
    />
  );
});
