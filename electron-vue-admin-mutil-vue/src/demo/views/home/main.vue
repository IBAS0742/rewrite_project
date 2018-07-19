<template>
    <div>
        <slot>
            <yd-slider autoplay="3000" :show-pagination="false">
                <yd-slider-item>
                    <img :src="image[0]">
                </yd-slider-item>
                <yd-slider-item>
                    <img :src="image[1]">
                </yd-slider-item>
                <yd-slider-item>
                    <img :src="image[2]">
                </yd-slider-item>
            </yd-slider>
            <yd-grids-group :rows="4" :item-height="icons.height">
                <yd-grids-item v-for="(icon,ind) in icons.icons" :key="ind">
                    <router-link slot="else" style="text-align: center;" :to="icon.routerPath || '#'">
                        <yd-icon :size="icons.size" :name="icon.iconName" custom></yd-icon>
                        <p v-html="icon.title"></p>
                    </router-link>
                </yd-grids-item>
            </yd-grids-group>
        </slot>

        <div>
            <yd-flexbox direction="vertical">
                <div><span style="font-size: 1.4em;">行业新闻</span></div>
                <yd-flexbox-item>
                    <v-card-ver-layout class="v-card-ver-layout" @click.native="show(firstNew)">
                        <div slot="top-title" class="ver-text">{{firstNew.title}}</div>
                        <div slot="content">
                            <img class="ver-picture" :src="firstNew.image">
                        </div>
                    </v-card-ver-layout>
                </yd-flexbox-item>
                <yd-flexbox-item v-for="(n,ind) in news">
                    <v-card-hor-layout class="v-card-hor-layout" @click.native="show(n)">
                        <div slot="left">
                            <p class="v-card-hor-title">{{n.title}}</p>
                            <p class="v-card-hor-digest">{{n.digest}}</p>
                        </div>
                        <div slot="right">
                            <img class="ver-picture" :src="n.image">
                        </div>
                    </v-card-hor-layout>
                </yd-flexbox-item>
                <yd-flexbox-item v-show="more">
                    <yd-button size="large" @click.native="fetchCMS(true)">加载更多</yd-button>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>

        <yd-popup v-model="showNew" position="bottom" height="100%" width="100%">
            <v-fab @click.native="showNew=false;" :fab-style="{bottom : '0.5rem',background: '#d9d9d9'}" icon-name="fanhui1"></v-fab>
            <div style="padding: 0.1rem;">
                <p class="cms-title">{{curCMS.title}}</p>
                <p class="cms-time">{{curCMS.promulgatorTime}}</p>
                <p class="cms-digest">{{curCMS.digest}}</p>
                <p class="cms-content" v-html="curCMS.content"></p>
            </div>
        </yd-popup>
    </div>
</template>

<script>
    import vCardVerLayout from './../../components/v-card/v-card-ver-layout'
    import vCardHorLayout from './../../components/v-card/v-card-hor-layout'
    import vFab from './../../components/v-fab/v-fab'
    import * as api from './../../api/api'
    import {baseUrl} from "../../config";

    export default {
        components: {
            vCardVerLayout,
            vCardHorLayout,
            vFab
        },
        name : 'home-main',
        data() {
            return {
                icons : {
                    size : '40px',
                    icons : [
                        {
                            iconName : 'chuanghu',
                            title : this.$t('home.icons.checkWindow'),
                            routerPath : '/window'
                        },
                        {
                            iconName : 'gongchengjianshe',
                            title : '维修',
                            routerPath : '/home/blank'
                        },
                        {
                            iconName : 'yangtai',
                            title : '检验露台',
                            routerPath : '/home/blank'
                        },
                        {
                            iconName : 'loufang',
                            title : '检验楼房',
                            routerPath : '/home/blank'
                        }
                    ],
                    height : '80px',
                },
                news : [],
                more : true,
                firstNew : {},
                page : 0,
                showNew : false,
                curCMS : {}
            }
        },
        computed : {
            image() {
                return [
                    require('./static/bg1.png'),
                    require('./static/bg2.png'),
                    require('./static/bg3.png') 
                ];
            },
            newsImage() {
                return require('./static/news.png');
            },
        },
        methods : {
            fetchCMS(more) {
                let size = 10;
                let $this = this;
                this.page++;
                api.cmsList({ page : this.page, size})
                    .then(_ => _.page.list)
                    .then(_ => {
                        _.forEach(news => {
                            let obj = {
                                id : news.id,
                                title : news.title,
                                content : news.content,
                                digest : news.digest,
                                time : news.promulgatorTime,
                                image : (news.image ? baseUrl + news.image : $this.newsImage)
                            };
                            $this.news.push(obj);
                            $this.$store.state.cms.list.push(obj);
                        });
                        $this.$store.state.page = $this.page;
                        if (!!!more) {
                            $this.$store.state.cms.init = true;
                            $this.firstNew = $this.news.shift();
                        }
                        if (_.length < size) {
                            $this.$store.state.cms.init = false;
                            $this.more = false;
                        }
                    });
            },
            show(n) {
                console.log(n);
                api.getOneCms(n.id)
                    .then(_ => {
                        console.log(_)
                        if (_.code == 200) {
                            this.curCMS = _.content;
                            this.showNew = true;
                        }
                    })
            }
        },
        mounted() {
            if (this.$store.state.cms.init) {
                this.news = this.$store.state.cms.list;
                this.more = this.$store.state.cms.init;
                this.firstNew = this.news.shift();
                this.page = this.$store.state.page;
            } else {
                this.fetchCMS();
            }
        }
    }
</script>

<style scoped>
    .cms-title {
        font-size: 0.5rem;
        text-align: center;
    }
    .cms-time {
        text-indent:2em;
    }
    .cms-digest {
        text-indent:2em;
        font-size: 0.3rem;
        color: #444;
        padding-bottom: 0.2rem;
    }
    .cms-content {}
    .v-card-ver-layout {
        padding : 0.7em 1.2em 0 1.2em;
    }
    .ver-picture {
        width : 100%;
    }
    .ver-text {
        padding-bottom: 0.5em;
    }
    .v-card-hor-layout {
        padding : 0.7em 1.2em 0 1.2em;
    }
    .v-card-hor-title {
        font-weight: bold;
        font-size: 0.3rem;
        padding-bottom: 0.1rem;
    }
    .v-card-hor-digest {
        font-weight: 300;
    }
</style>