import * as ydButton from "./components/ydButton"
import * as ydCell from "./components/ydCell"
import * as ydIcons from "./components/ydIcons"
import * as ydInput from "./components/ydInput"
import * as ydList from "./components/ydList"

export const ydComponent = {
	...ydButton, ...ydCell, ...ydIcons, ...ydInput, ...ydList
}

export const ydComponentName = ["Button","ButtonGroup","CellGroup","CellItem","Icons","ListTheme","ListItem","ListOther","Badge","GridsGroup","GridsItem","NavBar","NavBarBackIcon","NavBarNextIcon","TabBar","TabBarItem","Layout","TextArea","Input","FlexBox","FlexBoxItem","Switch","Radio","RadioGroup","CheckBox","CheckBoxGroup","TimeLine","TimeLineItem","Step","StepItem","Preview","PreviewHeader","PreviewItem","Confirm","Alert","Toast","Notify","Loading","Slider","SliderItem","ProgressBar","ActionSheet","Tab","TabPanel","ScrollTab","ScrollTabPanel","KeyBoard","Spinner","SendCode","CitySelect","InfiniteScroll","PullRefresh","CountDown","CountUp","Rate","Popup","RollNotice","RollNoticeItem","BackTop","Accordion","AccordionItem","DateTime","LightBox","LightBoxImg","LightBoxTxt","CheckList","CheckListItem","Search","ScrollNav","ScrollNavPanel"];