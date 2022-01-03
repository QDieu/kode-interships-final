export default ({ config }) => {
  // Почему, а главное зачем мы так делаем?
  //
  // Однажды, на RN проекте со Storybook у одного из разработчиков
  // возникла проблема, при которой не отправлялись запросы.
  // Непонятно почему, но причиной тому послужил Storybook.
  //
  // Потому здесь он запускается из отдельного файла, чтобы
  // по возможности не мешать основной работе приложения.
  if (true) {
    return { ...config, entryPoint: './storybook' };
  }
  return config;
};
