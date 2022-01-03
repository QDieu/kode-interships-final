import { storiesOf } from '@storybook/react-native';

import { LabelList } from '.';

let category = {
  category: [
    {
      category_id: '1',
      category_name: 'Мобильная связь',
      category_icon:
        'https://github.com/kode-frontend/files/raw/main/1_mobile.png',
      services: [],
    },
    {
      category_id: '2',
      category_name: 'ЖКХ',
      category_icon:
        'https://github.com/kode-frontend/files/raw/main/1_JKH.png',
      services: [],
    },
    {
      category_id: '3',
      category_name: 'Интернет',
      category_icon:
        'https://github.com/kode-frontend/files/raw/main/1_Internet.png',
      services: [],
    },
  ],
};

storiesOf('ui/organisms', module).add('labelList', () => {
  return <LabelList category={category.category} pressLink={() => {}} />;
});
