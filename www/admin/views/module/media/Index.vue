<template>
    <bag-view>
        <div class="media">
            <h3>西瓜视频播放器-支持直播-点播-WebRtc-Mp4-Flv-Hls-Dash</h3>
            <div class="media-container">
                <div id="video" class="video"></div>
            </div>
        </div>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import $ from 'jquery';
import {browser} from 'pm-utils'
window.$ = $;
export default defineComponent({
    setup() {
        const media = ref()
        browser.loadScript('//unpkg.byted-static.com/xgplayer/2.31.2/browser/index.js').then(() => {
            let player = new Player({
                "id": "video",
                "url": "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
                "playsinline": true,
                "width": '100%',
                "height": '100%',
                "whitelist": [""],
                "poster": 'https://s4.ax1x.com/2021/12/24/TYAcLT.jpg',
                "danmu": {
                    "comments": [
                        {
                            "duration": 15000,
                            "id": "2",
                            "start": 3000,
                            "txt": "长弹幕长弹幕长弹幕",
                            "mode": "top"
                        },
                        {
                            "duration": 15000,
                            "id": "3",
                            "start": 4000,
                            "txt": "长弹幕长弹幕长弹幕",
                            "mode": "bottom"
                        },
                        {
                            "duration": 15000,
                            "id": "4",
                            "start": 5000,
                            "txt": "长弹幕长弹幕长弹幕",
                            "mode": "scroll"
                        },
                        {
                            "duration": 15000,
                            "id": "5",
                            "start": 8000,
                            "txt": "长弹幕长弹幕长弹幕",
                            "mode": "scroll"
                        }
                    ],
                    "area": {
                        "start": 0,
                        "end": 1
                    },
                    "closeDefaultBtn": false,
                    "defaultOff": false,
                    "panel": false
                },
                "screenShot": {
                    saveImg: true,
                    quality: 0.8,
                    type: 'image/png',
                    format: '.png'
                },
                "pip": true,
                "thumbnail": {
                    "pic_num": 44,
                    "width": 160,
                    "height": 90,
                    "col": 10,
                    "row": 10,
                    "urls": [
                        ""
                    ]
                },
                "progressDot": [
                    {
                        "time": 3,
                        "text": "text1"
                    },
                    {
                        "time": 5,
                        "text": "text2"
                    },
                    {
                        "time": 32,
                        "text": "text3"
                    },
                    {
                        "time": 36,
                        "text": "text4"
                    }
                ],
                "rotate": {
                    "clockwise": false,
                    "innerRotate": false
                },
                "playbackRate": [0.5, 1, 1.5, 2.5],
                "keyShortcut": "on",
                "closeVideoClick": true,
                "closeVideoDblclick": true,
                "closeVideoTouch": true,
                "autoplay": true, // 是否自动播放
            });
            player.emit('resourceReady', [{
                name: '超清',
                url: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4'
            }, {
                name: '高清',
                url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4'
            }, {
                name: '标清',
                url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4'
            }]);
            player.once('ready', () => {
                $('.media .xgplayer-screenshot p.name').find('span').text('截图');
                $('.media .xgplayer-pip p.name').find('span').text('画中画');
            })
        })
        return {
            media
        }
    }
})
</script>
<style lang="less" scoped>
.media {
    height: 100%;

    h3 {
        font-size: 20px;
        text-align: center;
        height: 30px;
    }

    &-container {
        height: calc(100% - 60px);
        width: 100%;
        margin-top: 20px;
        border-radius: 5px;
        overflow: hidden;
        .video{
            background-color: #1ec4c5;
        }
    }
}
</style>
<style lang="less">
.media {
    .danmu-switch, .xgplayer-pip, .xgplayer-screenshot {
        margin-right: 10px;
        margin-left: 10px;
    }
    .xgplayer-skin-default .xgplayer-controls{
        background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.0),rgba(0,0,0,.0),rgba(0,0,0,.0));
    }
}
</style>
