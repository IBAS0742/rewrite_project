<!--
    水平放置信息的卡片
    上方是标题，下方是图片
-->
<template>
    <yd-flexbox style="display: inline-block;">
        <yd-flexbox-item style="display: inline-block;width: 50%;float: left;">
            <slot name="left"></slot>
        </yd-flexbox-item>
        <yd-flexbox-item style="display: inline-block;width: 50%;">
            <slot name="right"></slot>
        </yd-flexbox-item>
    </yd-flexbox>
</template>

<script>
    export default {
        name : 'vCardHorLayout'
    }
</script>