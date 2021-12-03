import { Theme, devuiLightTheme, devuiDarkTheme } from 'ng-devui/theme';

export const lightTheme: Theme = new Theme({
  id: 'light-theme',
  name: 'Light Theme',

  data: Object.assign({}, devuiLightTheme.data, {
    'devui-global-bg': '#cccccc',
  }),
  isDark: false,
});

export const darkTheme: Theme = new Theme({
  id: 'dark-theme',
  name: 'Dark Theme',

  data: Object.assign({}, devuiDarkTheme.data, {
    'devui-global-bg': '#33333',
  }),
  isDark: true,
});
