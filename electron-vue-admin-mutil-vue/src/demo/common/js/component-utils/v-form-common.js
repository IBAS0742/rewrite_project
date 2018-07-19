import * as verify from './v-form-common-verify'

export const formVFormCommonFields = (inputInfo) => {
    inputInfo.every((ii,ind) => {
        if ((ii.type + 'Verify') in verify) {
            inputInfo[ind] = verify[ii.type + 'Verify'](ii);
            return true;
        } else {
            console.error('类型【' + ii.type + '】 没有定义，请查看 ./src/components/v-form/v-form-common.vue 中的定义');
            console.log('如果需要定义新的类型请现在 vue 中进行添加后，在 ./src/common/js/component-util.js 中定义方法，然后注入到 【formVFormCommonFields】 方法中');
            return false;
        }
    });
    return inputInfo;
};