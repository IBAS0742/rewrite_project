<template>
    <div class="v-fab" :style="fabStyle">
        <yd-icon style="font-size: 0.5rem !important;" :name="iconName" custom></yd-icon>
    </div>
</template>

<script>
    export default {
        name: "v-fab",
        props : {
            fabStyle : {
                required : true,
                type : Object
            },
            iconName : {
                required : true,
                type : String
            }
        }
    }
</script>

<style scoped>
    .v-fab {
        border: 1px solid silver;
        width: 1rem;
        height: 1rem;
        background-color: hsla(0,0%,100%,.85);
        position: fixed;
        border-radius: 50%;
        right: 5%;
        bottom: 100px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        z-index: 1000;
    }
</style>