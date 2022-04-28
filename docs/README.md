# 快速开始

### 安装组件库
```bash
    npm install ou-ui --save
```

### 引用组件库
> 在main.js中引用组件库

```javascript
//全部引入
import 'ou-ui/dist/css/index.css';
import OUI from 'ou-ui';
Vue.use(OUI);

//按需引入
import 'ou-ui/dist/css/demo.css';
import Demo from 'ou-ui';
Vue.use(Demo);
```
