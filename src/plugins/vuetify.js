import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: false, //可以控制整个vue项目的主题颜色
    themes: {
      light: {
        primary: '#424242',  //override原来的颜色
        secondary: colors.grey.darken1,  //可以直接使用vuetify中的库的字体颜色
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
