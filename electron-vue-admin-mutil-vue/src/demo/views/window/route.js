import Window from './window'
import main from './main'
import addCheck from './addCheck'
import repairs from './repairs'
import checkList from './checkList'
import addCheckFields from './addCheckFields'
import windowCheckStepOne from './check/window-check-step-one'
import windowCheckStepTwo from './check/window-check-step-two'

let window = {
    path : '/window',
    component : Window,
    children : [
        {
            path : '/window',
            component : main,
        },
        {
            path : '/window/add',
            component : addCheck
        },
        {
            path : '/window/addFields',
            component : addCheckFields
        },
        {
            path : '/window/list',
            component : checkList
        },
        {
            path : '/window/repairs',
            component : repairs
        },
        {
            path : '/window/check/stepOne',
            component : windowCheckStepOne
        },
        {
            path : '/window/check/stepTwo',
            component : windowCheckStepTwo
        }
    ]
};

export default window;