<template>
    <div class="project-info-div">
        <div style="display: block;width: 100%;">
            <div class="project-info-block">
                <slot name="up-left"></slot>
            </div>
            <div class="project-info-block">
                <slot name="up-right"></slot>
            </div>
        </div>
        <div style="display: block;width: 100%;">
            <div class="project-info-block">
                <slot name="down-left"></slot>
            </div>
            <div class="project-info-block">
                <slot name="down-right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "project-info-btns"
    }
</script>

<style scoped>
    .project-info-div {
        padding: .24rem;
        font-size: 0.4rem;
    }
    .project-info-block {
        display: inline-block;
        width: 49%;
    }
</style>