<template>
    <div>
        <yd-cell-item>
            <span slot="left">{{label}}：</span>
            <yd-input disabled slot="right" @click.native="show=true"
                      v-model="value"
                      :placeholder="placeholder"></yd-input>
        </yd-cell-item>
        <yd-popup v-model="show" position="bottom" height="60%">
            <yd-radio-group v-model="value" v-if="selectType=='radio'">
                <yd-radio class="yd-radio-option" v-for="(op,ind) in options" :key="ind" :val="op.value">{{op.label}}</yd-radio>
            </yd-radio-group>
            <yd-checkbox-group v-model="value" v-if="selectType=='checkbox'">
                <yd-radio class="yd-radio-option" v-for="(op,ind) in options" :key="ind" :val="op.value">{{op.label}}</yd-radio>
            </yd-checkbox-group>
        </yd-popup>
    </div>
</template>

<script>
    import {Popup} from 'vue-ydui/dist/lib.rem/popup';

    export default {
        components : {
            Popup
        },
        name: "v-select-custom",
        props : {
            /**
             * options : [ { value : '' , label : '' } ]
             * */
            options : {
                type : Array,
                required : true
            },
            label : {
                type : String,
                required : true
            },
            placeholder : {
                type : String,
                required : true
            },
            selectType : {
                type : String,
                default : 'radio'
            }
        },
        data() {
            return {
                value : '',
                show : false
            }
        }
    }
</script>

<style scoped>
    .yd-radio-option {
        display: block;
        padding: 10px;
    }
</style>