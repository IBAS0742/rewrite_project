<!--
    级联代码
    后面再搞
-->

<template>
    <div>
        <yd-cell-item>
            <span slot="left">{{selections.label}}：</span>
            <yd-input disabled slot="right" @click.native="selections.show = true"
                      v-model="selections.options[selections.selected]"
                      :placeholder="selections.placeholder"></yd-input>
        </yd-cell-item>
        <yd-popup v-model="selections.show" position="bottom" height="60%">
            <yd-radio-group v-model="selections.selected">
                <yd-radio class="yd-radio-option"
                             v-for="(op,ind) in selections.options" :key="ind" :val="op.value">{{op.label}}</yd-radio>
            </yd-radio-group>
        </yd-popup>
        <div  v-if="selections.children">
            <v-cascader-item v-for="(selection,ind) in selections.children" :selection="selection" :key="ind"></v-cascader-item>
        </div>
    </div>
</template>

<script>
    import vCascaderItem from './v-cascader-item'

    export default {
        name: "v-cascader",
        props : {
            selections: {},
        },
        components : {
            vCascaderItem
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>