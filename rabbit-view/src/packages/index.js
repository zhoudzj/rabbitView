import Button from './Button.vue';
import Icon from './Icon.vue';
import ButtonGroup from './ButtonGroup.vue';

const install = (Vue)=>{
  //把所有的组件设成全局组件
  // Vue.component(Button.name,Button);
  // Vue.component(Icon.name,Icon);
  // Vue.component(ButtonGroup.name,ButtonGroup);
  const requireComponent = require.context(".",true,/\.vue/);
  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName);
    Vue.component(config.default.name,config.default);
  });

}

export default {
  install
}