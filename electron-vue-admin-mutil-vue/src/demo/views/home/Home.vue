<template>
	<yd-layout>
		<router-view style="margin-bottom: 45.2px;" ></router-view>
		<!--<home-main style="margin-bottom: 45.2px;"></home-main>-->

		<v-tabbar-custom :menus="menus"
						 style="width: 100%;margin-bottom: -1px;"
						 v-on:tap="tap"></v-tabbar-custom>
	</yd-layout>
</template>

<script>
	import vTabbarCustom from './../../components/v-tabbar/v-tabbar-custom'

	export default {
        components: {
            vTabbarCustom
        },
		data() {
			return {
                menus : [
					{
					    icon : 'home',
						title : this.$t('home.common.homeVue.menus.mainPage'),
						active : false,
						routerPath : '/home'
					},
					// {
					//     icon : 'shopcart',
					// 	title : this.$t('home.common.homeVue.menus.list'),
                     //    active : false,
                     //    routerPath : '/home/list'
					// },
					{
					    icon : 'ucenter-outline',
						title : this.$t('home.common.homeVue.menus.user'),
                        active : false,
                        routerPath : '/home/user'
					}
				],
				tabHeight : '3em'
			}
		},
		methods: {
            tap(menu) {
                setTimeout((() => {
                    this.$router.push({
                        path : menu.routerPath
                    });
                }).bind(this))
			}
		},
		mounted() {
			this.menus.every(((m) => {
			    if (this.$route.path == m.routerPath) {
			        m.active = true;
				}
				return !m.active;
			}).bind(this));
			//todo 测试使用
            console.log(this)
		},
		watch : {
            '$route' (to, from) {
                this.menus.forEach(((m) => {
                    if (this.$route.path == m.routerPath) {
                        m.active = true;
                    } else {
                        m.active = false;
					}
                }).bind(this));
            }
		}
	}
</script>

<style lang="scss">
	footer {
		padding : 0px !important;
	}
	.yd-grids-item-custom:not(:nth-child(3n)):before {
		border-right: none !important;
	}
</style>