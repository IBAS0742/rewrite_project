<template>
	<div id="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>

    import * as api from './api/accountApi'

export default {
	name: 'app',
	components: {
	},
	computed:{
    },
	mounted(){
	    let token = localStorage.getItem('token');
	    if (token) {
            api.getUserInfo()
                .then(_ => {
                    if (_.code == 200) {
                        _ = _.user;
                        delete _.roleIdList;
                        delete _.id;
                        delete _.createTime;
                        delete _.password;
                        return _;
					} else {
                        return null;
					}
                })
                .then(_ => {
                    if (_) {
                        this.userInfo = {};
                        this.$store.state.userInfo = _;
                        this.$store.state.logined = true;
                        this.logined = true;
					} else {
                        this.userInfo = {};
                        this.$store.state.logined = false;
					}
                });
		}
		window.$this = this;
	}
}

</script>

<style src="./icon/ali/iconfont.css"></style>

<style lang="scss">
	@font-face {
		font-family: 'ali';
		src: url('./icon/ali/iconfont.ttf') format('truetype');
	}
	[class^="icon-custom-"]:before, [class*=" icon-custom-"]:before {
		font-family: 'ali';
	}

</style>