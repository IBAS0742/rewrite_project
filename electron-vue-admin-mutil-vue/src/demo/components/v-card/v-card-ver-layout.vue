<!--
    垂直放置信息的卡片
    上方是标题，下方是图片
-->
<template>
    <yd-flexbox direction="vertical">
        <slot name="top-title"></slot>
        <yd-flexbox-item>
            <slot name="content"></slot>
        </yd-flexbox-item>
        <slot name="bottom-title"></slot>
    </yd-flexbox>
</template>

<script>
    export default {
        name : 'vCardVerLayout'
    }
</script>