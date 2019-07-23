<template>
  <div>
    <el-alert title="腾讯音视频测试" type="success">
    </el-alert>
    <div>
      <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
      
    </div>
    <div>
      <video id="localVideo" autoplay="" muted="" playsinline=""></video>
    </div>
  </div>
</template>

<script>
import WebRTCAPI from "trtc-sdk";
WebRTCAPI.fn.detectRTC(
  {
    screenshare: false
  },
  function(info) {
    if (info.support) {
      console.log("support trtc");
      // alert("support trtc")
    }
  }
);
//调试模式
var RTC = new WebRTCAPI({
  userId: "Web_trtc_01",
  sdkAppId: 1400232125, //此处填写你的sdkappid
  userSig:
    "eJxlj0FrgzAAhe-*Csl1YySxaclgB21rqUuZRe3oLsGapIZSTTV2k7H-PuYKE-au38d7vE-HdV2QsuQhL4q6qyy3vZHAfXQBBPd-0BgteG6514h-UH4Y3UieKyubASJCCIZw7GghK6uVvhmv8sBtYwsO0UhqxYkPS78tEwixhxEmY0UfB7hZZvN1YOiqPkVpQhLfqC4TPbsYU4Sqj1l09xyiw7RexPF7uA59vfT1bruC56vYdLTsfROVSZkugt3kRbH5fouCLGBvsyO9RO3*aTRp9Vnebk0xxXRGvRG9yqbVdTUIGCKCsAd-Apwv5xuXzF7m",
  debug: {
    log: true, //是否在控制台打印调试日志 ,默认为false
    vconsole: true, //是否展示 vconsole （方便在移动端查看日志）
    uploadLog: true //是否上报日志
  }
});
export default {
  name: "",
  components: {},
  data() {
    return { input: "" };
  },
  created() {},
  mounted() {
    // RTC.getLocalStream(
    //   {
    //     video: true,
    //     audio: true,
    //     attributes: {
    //       width: 640,
    //       height: 480,
    //       frameRate: 20
    //     }
    //   },
    //   function(info) {
    //     // info { stream }
    //     var stream = info.stream;
    //     document.getElementById("localVideo").srcObject = stream;
    //   },
    //   function(error) {
    //     console.error(error);
    //   }
    // );
    // RTC.enterRoom(
    //   {
    //     roomid: 123456,
    //     role: "user"
    //     // privateMapKey: "xxxxxxxxxxxxx" //不必须
    //   },
    //   function() {
    //     console.log("进房房间成功");
    //   },
    //   function(data) {
    //     //进入房间失败
    //     console.log("进入房间失败");
    //   }
    // );
    // RTC.on("onRemoteStreamUpdate", function(data) {
    //   console.log("onRemoteStreamUpdate");
    // });
  },
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
</style>