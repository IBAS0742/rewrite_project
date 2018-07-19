<template :prop="0">
   <div>
       <yd-cell-group :prop="cellGroup1531878588774">
           <yd-cell-item :prop="cellItem1531896088179">
               <span slot="left">hei:</span>
               <yd-input slot="right" :prop="cellItem1531896088179right"></yd-input>
           </yd-cell-item>
           <yd-cell-item :prop="cellItem1531896113706">
               <span slot="left">adf:</span>
               <yd-input slot="right" :prop="cellItem1531896113706right"></yd-input>
           </yd-cell-item>
       </yd-cell-group>
       <yd-cell-group>
           <yd-cell-item>
               <span slot="left">用户名：</span>
               <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
           </yd-cell-item>
           <yd-cell-item>
               <span slot="left">密码：</span>
               <yd-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></yd-input>
           </yd-cell-item>
       </yd-cell-group>
   </div>
</template>

<script>
    require('./../ydui/extern/ydui.flexible')
    require('./../ydui/extern/fastclick')

    export default {
        name: "one",
        data() {
            return {
                "cellItem1531896088179right": {
                    "name": "",
                    "placeholder": "",
                    "value": "asdf",
                    "readonly": false,
                    "disabled": false,
                    "regex": "",
                    "autocomplete": "off",
                    "show-clear-icon": true,
                    "show-error-icon": true,
                    "show-success-icon": true,
                    "show-required-icon": true,
                    "required": false,
                    "type": "text",
                    "max": 0,
                    "min": 0
                },
                "cellItem1531896088179": {
                    "actionType": "button",
                    "type": "div",
                    "shape": "square",
                    "arrow": false,
                    "href": ""
                },
                "cellGroup1531878588774": {
                    "actionType": "button",
                    "type": "primary",
                    "shape": "square",
                    "title": ""
                },
                "cellItem1531896113706right": {
                    "name": "",
                    "placeholder": "",
                    "value": "",
                    "readonly": false,
                    "disabled": false,
                    "regex": "",
                    "autocomplete": "off",
                    "show-clear-icon": true,
                    "show-error-icon": true,
                    "show-success-icon": true,
                    "show-required-icon": true,
                    "required": false,
                    "type": "text",
                    "max": 0,
                    "min": 0
                },
                "cellItem1531896113706": {
                    "actionType": "button",
                    "type": "div",
                    "shape": "square",
                    "arrow": false,
                    "href": ""
                },
                input1: '',
                input2: ''
            }
        }
    }
</script>

<style scoped>
    @import "./../ydui/extern/ydui.base.css";

</style>