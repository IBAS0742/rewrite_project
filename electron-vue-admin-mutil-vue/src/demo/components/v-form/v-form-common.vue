<template>
    <div>
        <div v-for="(ii,ind) in inputInfo" :key="ind">
            <div v-if="ii.type=='input'" class="v-form-common-item" v-show="!ii.hide">
                <yd-cell-item>
                    <span slot="left">{{ii.label}}：</span>
                    <yd-input ref="input" slot="right"  v-model="ii.value"
                              @change.native="$emit('change',ii)"
                              type="text"
                              :disabled="!editable"
                              :regex="ii.regex || '[\s\S]*'"
                              :required="ii.required"
                              :placeholder="ii.placeholder"></yd-input>
                </yd-cell-item>
            </div>

            <div v-else-if="ii.type=='captcha'" class="v-form-common-item" v-show="!ii.hide">
                <yd-cell-item>
                    <span slot="left">{{ii.label}}：</span>
                    <div slot="right" style="width: 100%;">
                        <div :style="'float: left;width:calc(100% - ' + ii.width + 'px)'">
                            <yd-input  v-model="ii.value" tar="captcha"
                                       @change.native="$emit('change',ii)"
                                       type="text" ref="input"
                                       :disabled="!editable"
                                       :required="true"
                                       :placeholder="ii.placeholder"></yd-input>
                        </div>
                        <div @click="newCaptcha($event,ii,ind)"
                                :style="'float:right;height: 1rem;width:' + ii.width + 'px;'">
                            <img @load="imageLoad" :src="ii.src" alt="">
                        </div>
                    </div>
                </yd-cell-item>
            </div>

            <div v-else-if="ii.type=='password'" class="v-form-common-item" v-show="!ii.hide">
                <yd-cell-item>
                    <span slot="left">{{ii.label}}：</span>
                    <yd-input ref="input" slot="right"  v-model="ii.value"
                              @change.native="$emit('change',ii)"
                              type="password"
                              :disabled="!editable"
                              required
                              :placeholder="ii.placeholder"></yd-input>
                </yd-cell-item>
            </div>

            <div v-else-if="ii.type=='radioSelect'" class="v-form-common-item" v-show="!ii.hide">
                <yd-cell-item>
                    <span slot="left">{{ii.label}}：</span>
                    <yd-input ref="input" disabled slot="right" @click.native="showSelect(ii)"
                              @change.native="$emit('change',ii)"
                              type="text"
                              v-model="ii.selectLabel"
                              :required="ii.required"
                              :placeholder="ii.placeholder"></yd-input>
                </yd-cell-item>
                <yd-popup v-model="ii.show" position="bottom" height="60%">
                    <yd-radio-group v-model="ii.value">
                        <yd-radio @click.native="radioSelectChange(ii,ind,op,ind_)"
                                class="yd-radio-option"
                                regex="[\w]+"
                                v-for="(op,ind_) in ii.options" :key="ind_"
                                :val="op.value">{{op.label}}</yd-radio>
                    </yd-radio-group>
                </yd-popup>
            </div>

            <div v-else-if="ii.type=='radioSelectVer'" class="v-form-common-item" v-show="!ii.hide">
                <div class="yd-cell-item" style="display: block;">
                    <div class="v-form-common-ver-label">
                        <span>{{ii.label}}：</span>
                    </div>
                    <yd-input ref="input" class="v-form-common-yd-input" disabled
                              @change.native="$emit('change',ii)"
                              type="text"
                              :required="ii.required"
                              @click.native="showSelect(ii)"
                              v-model="ii.selectLabel"
                              :placeholder="ii.placeholder"></yd-input>
                </div>
                <yd-popup v-model="ii.show" position="bottom" height="60%">
                    <yd-radio-group v-model="ii.value">
                        <yd-radio @click.native="radioSelectChange(ii,ind,op,ind_)"
                                class="yd-radio-option"
                                regex="[\w]+"
                                v-for="(op,ind_) in ii.options" :key="ind_"
                                :val="op.value">{{op.label}}</yd-radio>
                    </yd-radio-group>
                </yd-popup>
            </div>

            <div v-else-if="ii.type=='checkboxSelect'" class="v-form-common-item" v-show="!ii.hide">
                <yd-cell-item>
                    <span slot="left">{{ii.label}}：</span>
                    <yd-input ref="input" disabled slot="right" @click.native="showSelect(ii)"
                              @change.native="$emit('change',ii)"
                              type="text"
                              :required="ii.required"
                              v-model="ii.value.join()"
                              :placeholder="ii.placeholder"></yd-input>
                </yd-cell-item>
                <yd-popup v-model="ii.show" position="bottom" height="60%">
                    <yd-checkbox-group v-model="ii.value">
                        <yd-checkbox
                                class="yd-radio-option"
                                v-for="(op,ind) in ii.options" :key="ind"
                                :val="op.value">{{op.label}}</yd-checkbox>
                    </yd-checkbox-group>
                </yd-popup>
            </div>

            <div v-else-if="ii.type=='checkbox'" class="v-form-common-item v-form-common-checkbox"v-show="!ii.hide">
                <yd-checkbox :disabled="!editable" v-model="ii.value">{{ii.label}}</yd-checkbox>
                <yd-badge v-show="ii.badge" type="primary" @click.native="checkboxBadgeClick(ii)">{{ii.badge}}</yd-badge>
            </div>

            <div v-if="ii.type=='datetime'" class="v-form-common-item" v-show="!ii.hide">
                <yd-cell-item>
                    <span slot="left">{{ii.label}}：</span>
                    <yd-datetime type="date" v-model="ii.value" :placeholder="ii.placeholder" slot="right"></yd-datetime>
                </yd-cell-item>
            </div>

            <div v-else-if="ii.type=='selectInput'" class="v-form-common-item"v-show="!ii.hide">
                <yd-radio-group v-model="ii.selected">
                    <yd-radio @click.native="radioClick(ind,op,ind_)"
                              :disabled="!editable"
                              class="selectInput-radio" :key="ind_"
                              v-for="(op,ind_) in ii.options" :val="ind_">{{op.label}}</yd-radio>
                </yd-radio-group>
                <yd-cell-item>
                    <span slot="left">{{ii.options[ii.selected].label}}：</span>
                    <yd-input ref="input" :disabled="!editable"
                              @change.native="$emit('change',ii)"
                              type="text"
                              :required="ii.required"
                              slot="right" v-model="ii.value"
                              max="20" :placeholder="ii.options[ii.selected].placeholder"></yd-input>
                </yd-cell-item>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * options 中的定义有几种
     * 1. input { type : 'input' , label : '' , placeholder : '' , regex : '' , value : '' }
     * 2. checkbox { type : 'checkbox' , label : '' , value : Boolean }
     * 3. radioSelect{ type : 'radioSelect' , label : '' , placeholder : '' , options : [] , value : '' , show : false }
     * 4. checkboxSelect{ type : 'checkboxSelect' , label : '' , placeholder : '' , options : [] , value : [] , show : false }
     * 5. selectInput { selected : 0 , value : '' , name : '' , label : '' , type : 'selectInput' , placeholder : '' , options : [ { label , name , placeholder } ] }
     * */
    import vSelectCustom from './../../components/v-select/v-select-custom'

    const createType = {
        random() {
            return Math.random();
        }
    };

    export default {
        name: "v-form-common",
        components : {
            vSelectCustom
        },
        props : {
            inputInfo : {
                type : Array,
                required : true
            },
            disabled : {
                type:Boolean,
                required:false
            }
        },
        computed : {
            editable() {
                return !this.disabled;
            }
        },
        data() {
            return {
            }
        },
        methods : {
            radioClick(ind,op,selectInd) {
                for (var i in op) {
                    this.inputInfo[ind][i] = op[i];
                }
                this.inputInfo[ind].selected = selectInd;
            },
            showSelect(ii) {
                if (this.editable) {
                    ii.show=true;
                }
            },
            radioSelectChange(ii,ind,op,ind_) {
                ii.selectLabel = ii.options[ind_].label;
                ii.selected = ind_;
                this.$emit('radioSelectChange',ii,ind,op,ind_);
            },
            newCaptcha(e,ii,ind) {
                let uuid = '';
                if (ii.info instanceof Array) {
                    ii.info.forEach(_ => {
                        if (_.type) {
                            _.value = createType[_.type]();
                        }
                        uuid += _.name + "=" + _.value;
                    });
                } else {
                    uuid = '?' + (Math.random());
                }
                ii.src = ii.src.split('?')[0] + '?' + uuid;
                this.$dialog.loading.open('获取验证码');
            },
            imageLoad() {
                this.$dialog.loading.close();
            },
            vertify() {
                this.$refs.input;
            },
            checkboxBadgeClick(ii) {
                this.$emit('checkboxBadgeClick',ii);
            }
        },
        mounted() {
        },
        watch : {
        }
    }
</script>

<style scoped>
    .v-form-common-item {
        width: 100%;
        font-size: .26rem;
        border-bottom: 1px solid #d9d9d9;
        background: #fff;
    }
    .v-form-common-checkbox {
        padding: .24rem .24rem .24rem 0;
        padding-left: .24rem;
    }
    .yd-radio-option {
        display: block;
        padding: 10px;
    }
    .selectInput-radio {
        display: block;
        width : 100%;
        padding: 0.2em 0.5em;
    }

    .v-form-common-ver-label {
        color: #333;
        white-space: nowrap;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-size: .3rem;
        display: block;
        width: 100%;
        padding: 0.1rem 0.1rem 0.1rem 0;
    }

    .v-form-common-yd-input {
        display: block;
        width: calc(100% - 0.2rem);
        margin-right: 0.2rem;
        height: 0.7rem;
        border-bottom: 1px solid;
        margin-bottom: 0.2rem;
    }

</style>