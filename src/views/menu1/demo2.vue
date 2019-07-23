<template>
  <div>
    <video id="localVideo" muted autoplay playinline></video>
    <video id="remoteVideo" muted autoplay playinline></video>
  </div>
</template>

<script>
import WebRTCAPI from "trtc-sdk";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.getApi();
  },
  methods: {
    getApi() {
      var RTC = new WebRTCAPI(
        {
          userId: "Web_trtc_01",
          sdkAppId: 1400232125, //此处填写你的sdkappid
          userSig:
            "eJxlj0FrgzAAhe-*Csl1YySxaclgB21rqUuZRe3oLsGapIZSTTV2k7H-PuYKE-au38d7vE-HdV2QsuQhL4q6qyy3vZHAfXQBBPd-0BgteG6514h-UH4Y3UieKyubASJCCIZw7GghK6uVvhmv8sBtYwsO0UhqxYkPS78tEwixhxEmY0UfB7hZZvN1YOiqPkVpQhLfqC4TPbsYU4Sqj1l09xyiw7RexPF7uA59vfT1bruC56vYdLTsfROVSZkugt3kRbH5fouCLGBvsyO9RO3*aTRp9Vnebk0xxXRGvRG9yqbVdTUIGCKCsAd-Apwv5xuXzF7m",
          debug: {
            log: true, //是否在控制台打印调试日志 ,默认为false
            vconsole: true, //是否展示 vconsole （方便在移动端查看日志）
            uploadLog: true //是否上报日志
          }
        },
        function() {
          RTC.createRoom(
            {
              roomid: 1234566,
              // privateMapKey: privateMapKey,
              role: "miniwhite"
            },
            function() {
              //进房房间成功
              console.log("进入房间成功");
            },
            function(data) {
              //进入房间失败
              console.log("进入房间失败" + data);
            }
          );
        },
        function(error) {
          console.error(error);
        }
      );

      //本地视频流新增/更新通知
      RTC.on("onLocalStreamAdd", function(info) {
        var videoElement = document.getElementById("localVideo");
        videoElement.srcObject = info.stream;
        videoElement.muted = true;
      });

      //远程视频流新增/更新通知
      RTC.on("onRemoteStreamUpdate", function(info) {
        var videoElement = document.getElementById("remoteVideo");
        videoElement.srcObject = info.stream;
        videoElement.muted = false;
      });
      //检测房间人员退出
      RTC.on("onRemoteStreamRemove", function(info) {
        console.log(
          "当前房间有人退出：" +
            info.userId +
            " leave this room with unique videoId " +
            info.videoId
        );
        $("#remoteVideo").css("display", "none");
      });

      RTC.on("onKickOut", function() {
        console.log("其他地方登录，被踢下线");
      });

      RTC.on("onWebSocketClose", function() {
        console.log("websocket断开");
      });

      RTC.on("onRelayTimeout", function() {
        console.log("服务器超时断开");
      });
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
</style>