import Vue from 'vue'
// import { Button } from 'element-ui'
// 按需导入
import {
    Form,
    FormItem,
    Button,
    Input,
    Message
} from "element-ui";
// import { Input } from "element-ui";
// 导入弹框组件
// import { Message } from "element-ui";


Vue.use(Button)
// 注册全局组件
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 全局挂载
Vue.prototype.$message = Message
