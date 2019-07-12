<template>
  <div>
    <el-alert title="menu1-demo1" type="success">
    </el-alert>
    <div>
      <video id="localVideo" autoplay="" muted="" playsinline=""></video>
    </div>
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
    WebRTCAPI.fn.detectRTC(
      {
        screenshare: false
      },
      function(info) {
        if (info.support) {
          console.log("support trtc");
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
    var a = {
      sdkappid: 1400232125,
      users: [
        {
          userId: "Web_trtc_01",
          userToken:
            "eJxlj0FrgzAAhe-*Csl1YySxaclgB21rqUuZRe3oLsGapIZSTTV2k7H-PuYKE-au38d7vE-HdV2QsuQhL4q6qyy3vZHAfXQBBPd-0BgteG6514h-UH4Y3UieKyubASJCCIZw7GghK6uVvhmv8sBtYwsO0UhqxYkPS78tEwixhxEmY0UfB7hZZvN1YOiqPkVpQhLfqC4TPbsYU4Sqj1l09xyiw7RexPF7uA59vfT1bruC56vYdLTsfROVSZkugt3kRbH5fouCLGBvsyO9RO3*aTRp9Vnebk0xxXRGvRG9yqbVdTUIGCKCsAd-Apwv5xuXzF7m"
        },
        {
          userId: "Web_trtc_02",
          userToken:
            "eJxlj11PgzAYhe-5FQ3XRssLXamJF36QDJw6MpiTm4a1HWsmHyvVzRj-uxGXSOK5fZ6ck-PpIITcbLY4L4Vo3xrL7UenXHSJXOye-cGu05KXlvtG-oPq2GmjeLmxygzQI4QAxmNHS9VYvdEn41mtuTVWcAwjqZc7Piz9tgQYgw8ekLGiqwE*RPltnN6JXZ4tqjBPwnkxV0GY7SP9KlZ1OgkYha2Z0UReCCgIO8SViFZFoFkwpfujuF4v6WEJ90X0kk*3NavS*LFP*qc2rPqb9mo0aXWtTrcmwIBR5o-ouzK9bptBAOwRD3z8E9f5cr4BGQReKw__"
        },
        {
          userId: "Web_trtc_03",
          userToken:
            "eJxlj1FPgzAUhd-5FYRnY27LugUTH5jinGOOyZbJU8PaDq9k0EFVGuN-N*ISSbyv35dzzv10XNf1NnF6mQtRv1WGG6uV5165HngXf1BrlDw33G-kP6g6jY3i*cGopoeEMUYBhg5KVRk84NnYqT03jREc-IHUypL3Tb8pIwDqU0LZUMGih8toezOf7vZjISNLq*VDto5Pr0E7g6kt6mKSVLa7u8-T2wwt2LkOMQqBJOFmIXCVBI9lCsdVacTzS7z9WJsn0Y3IjGXyZBdZm8H1oNLgUZ3fGtOABpNguPldNS3WVS9QIIxQH37Oc76cb8y*X5E_"
        },
        {
          userId: "Web_trtc_04",
          userToken:
            "eJxlj11LwzAYhe-7K0puFU3SZTbCLuI2xKFDuy-1JnTt25lsS7M0rRPxv4t1YMFz*zycw-kMwjBE8-vZRZplZW289B8WUHgdIozO-6C1Kpepl5HL-0E4WuVApoUH10LCGKMYdx2Vg-GqUCdjBWvpnc8k7nWkKt-Kdum3pYcxjSihrKuoTQsfxk-DO2E2cant27iMbtfL3dkNZ5C8X6rhoXoUlGCiC62butlSEEo8T2e7*hiLiRWeT-R*VBmY9q2J62LEBXuxiasXy*T1sBKDQWfSqz2cbvUpp-yKRx3agKtUaVqBYsIIjfBPUPAVfAPP-F*g"
        }
      ]
    };
    RTC.getLocalStream(
      {
        video: true,
        audio: true,
        attributes: {
          width: 640,
          height: 480,
          frameRate: 20
        }
      },
      function(info) {
        // info { stream }
        var stream = info.stream;
        document.getElementById("localVideo").srcObject = stream;
      },
      function(error) {
        console.error(error);
      }
    );
    RTC.enterRoom(
      {
        roomid: 123456,
        role: "user"
        // privateMapKey: "xxxxxxxxxxxxx" //不必须
      },
      function() {
        console.log("进房房间成功");
      },
      function(data) {
        //进入房间失败
        console.log("进入房间失败");
      }
    );
    RTC.on("onRemoteStreamUpdate", function(data) {
      console.log("onRemoteStreamUpdate");
    });
  },
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
</style>