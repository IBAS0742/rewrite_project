<template>
    <div class="v-card-custom">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name : 'v-card-custom'
    }
</script>

<style>
    .v-card-custom {
        font-size: 0.5rem;
        text-align: center;
        background: white;
        padding: 0.3em 0;
        width: 96%;
        margin: 0.5em 2% 0 2%;
        -webkit-box-shadow: 1px 1px 1px 1px #e0e0e0;
        -moz-box-shadow: 1px 1px 1px 1px #e0e0e0;
        box-shadow: 1px 1px 1px 1px #e0e0e0;
    }
</style>