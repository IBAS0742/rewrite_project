import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button'
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell'
import {Icons} from 'vue-ydui/dist/lib.rem/icons'
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list'
import {Badge} from 'vue-ydui/dist/lib.rem/badge'
import {GridsGroup, GridsItem} from 'vue-ydui/dist/lib.rem/grids'
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar'
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
import {Layout} from 'vue-ydui/dist/lib.rem/layout'
import {TextArea} from 'vue-ydui/dist/lib.rem/textarea'
import {Input} from 'vue-ydui/dist/lib.rem/input'
import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.rem/flexbox'
import {Switch} from 'vue-ydui/dist/lib.rem/switch'
import {Radio, RadioGroup} from 'vue-ydui/dist/lib.rem/radio'
import {CheckBox, CheckBoxGroup} from 'vue-ydui/dist/lib.rem/checkbox'
import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.rem/timeline'
import {Step, StepItem} from 'vue-ydui/dist/lib.rem/step'
import {Preview, PreviewHeader, PreviewItem} from 'vue-ydui/dist/lib.rem/preview'
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
import {ProgressBar} from 'vue-ydui/dist/lib.rem/progressbar'
import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet'
import {Tab, TabPanel} from 'vue-ydui/dist/lib.rem/tab'
import {ScrollTab, ScrollTabPanel} from 'vue-ydui/dist/lib.rem/scrolltab'
import {KeyBoard} from 'vue-ydui/dist/lib.rem/keyboard'
import {Spinner} from 'vue-ydui/dist/lib.rem/spinner'
import {SendCode} from 'vue-ydui/dist/lib.rem/sendcode'
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect'
import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll'
import {PullRefresh} from 'vue-ydui/dist/lib.rem/pullrefresh'
import {CountUp} from 'vue-ydui/dist/lib.rem/countup'
import {CountDown} from 'vue-ydui/dist/lib.rem/countdown'
import {Rate} from 'vue-ydui/dist/lib.rem/rate'
import {Popup} from 'vue-ydui/dist/lib.rem/popup'
import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice'
import {BackTop} from 'vue-ydui/dist/lib.rem/backtop'
import {Accordion, AccordionItem} from 'vue-ydui/dist/lib.rem/accordion'
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime'
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox'
import {CheckList, CheckListItem} from 'vue-ydui/dist/lib.rem/checklist'
import {Search} from 'vue-ydui/dist/lib.rem/search'
import {ScrollNav, ScrollNavPanel} from 'vue-ydui/dist/lib.rem/scrollnav'

const ydui = {
    Button,
    ButtonGroup,
    CellGroup,
    CellItem,
    Icons,
    ListTheme, ListItem, ListOther,
    Badge,
    GridsGroup, GridsItem,
    NavBar, NavBarBackIcon, NavBarNextIcon,
    TabBar, TabBarItem,
    Layout,
    TextArea,
    Input,
    FlexBox,
    FlexBoxItem,
    Switch,
    Radio,
    RadioGroup,
    CheckBox,
    CheckBoxGroup,
    TimeLine,
    TimeLineItem,
    Step,
    StepItem,
    Preview,
    PreviewHeader,
    PreviewItem,
    Confirm, Alert, Toast, Notify, Loading,
    Slider, SliderItem,
    ProgressBar,
    ActionSheet,
    Tab, TabPanel,
    ScrollTab, ScrollTabPanel,
    KeyBoard,
    Spinner,
    SendCode,
    CitySelect,
    InfiniteScroll,
    PullRefresh,
    CountDown,
    CountUp,
    Rate,
    Popup,
    RollNotice,
    RollNoticeItem,
    BackTop,
    Accordion,
    AccordionItem,
    DateTime,
    LightBox, LightBoxImg, LightBoxTxt,
    CheckList, CheckListItem,
    Search,
    ScrollNav,
    ScrollNavPanel
}

export const installYdui = (Vue) => {
    Vue.temp = {
        ydui
    }
    for (const i in ydui) {
        Vue.component('Yd' + i, ydui[i])
    }
}
