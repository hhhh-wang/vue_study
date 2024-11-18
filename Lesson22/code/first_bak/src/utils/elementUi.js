import Vue from "vue";
import {Button, Message,MessageBox, Row} from 'element-ui';
Vue.use(Button);
Vue.use(Row);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;