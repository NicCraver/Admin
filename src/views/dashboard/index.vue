<template>
  <div class="dashboard_wrap">
    <div class="dashboard_header">
      <Box :header="`总销售额`" :description="`指标说明`">
        <div>
          <div class="box_content">
            ￥300,000
          </div>
          <div id="chartId" class="content_box">
            周同比增长12% 
          </div>
          <div class="box_footer">
            <div class="el_divider">
              <el-divider></el-divider>
            </div>
            <div class="box_footer_content">
              日均销售额￥ 12555.56
            </div>
          </div>
        </div>
      </Box>
      <Box :header="`访问次数`" :description="`访问次数`">
        <div>
          <div class="box_content">
            36,870
          </div>
          <div id="chartId" class="chart_box">
            <div id='main' ref="main" :style="{width:chartWidth,height:chartHeight}"></div>
          </div>
          <div class="box_footer">
            <div class="el_divider">
              <el-divider></el-divider>
            </div>
            <div class="box_footer_content">
              日访问量 1,234
            </div>
          </div>
        </div>
      </Box>
      <Box :header="`支付笔数`" :description="`支付笔数`">
        <div>
          <div class="box_content">
            22,122
          </div>
          <div id="chartId" class="chart_box">
            <div id='main2' ref="main" :style="{width:chartWidth,height:chartHeight}"></div>
          </div>
          <div class="box_footer">
            <div class="el_divider">
              <el-divider></el-divider>
            </div>
            <div class="box_footer_content">
              转化率 60%
            </div>
          </div>
        </div>
      </Box>
      <Box :header="`下单率`" :description="`指标说明`">
        <div>
          <div id="chartId" class="box_content">
            76%
          </div>
          <div class="chart_box">
            <div id='main3' ref="main" :style="{width:chartWidth,height:chartHeight}"></div>
          </div>
          <div class="box_footer">
            <div class="el_divider">
              <el-divider></el-divider>
            </div>
            <div class="box_footer_content">
              124125125
            </div>
          </div>
        </div>
      </Box>
    </div>
    <div class="dashboard_charts">
      <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
    </div>
  </div>
</template>
<script>
import Box from "./components/box";
import elementResizeDetectorMaker from "element-resize-detector";
export default {
  name: "Dashboard",
  components: {
    Box
  },
  data() {
    this.chartSettings = {
      axisSite: { right: ["下单率"] },
      yAxisType: ["KMB", "percent"],
      yAxisName: ["数值", "比率"]
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      eWidth: ""
    };
  },
  created() {},
  mounted() {
    var that = this;
    var erd = elementResizeDetectorMaker();
    erd.listenTo(document.getElementById("chartId"), function(element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      that.$nextTick(function() {
        // console.log("Size: " + width + "x" + height);
        //使echarts尺寸重置
        that.$echarts.init(document.getElementById("main")).resize();
        that.$echarts.init(document.getElementById("main2")).resize();
        that.$echarts.init(document.getElementById("main3")).resize();
      });
    });
    this.drawChart();
    this.drawChart2();
    this.drawChart3();
    // this.ClientWidthChange();
    // this.chart_box();
  },
  methods: {
    // 宽度变化时改变
    ClientWidthChange() {
      var that = this;
      window.onresize = function() {
        console.log("21515125 :", 21515125);
      };
    },
    chart_box() {
      const eWidth = this.$refs.chart_box.clientWidth;
      this.eWidth = eWidth;
      console.log("eWidth", eWidth);
    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        color: ["#409EFF"],
        tooltip: {
          position: function(point, params, dom, rect, size) {
            // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
            // 提示框位置
            var x = 0; // x坐标位置
            var y = 0; // y坐标位置

            // 当前鼠标位置
            var pointX = point[0];
            var pointY = point[1];

            // 外层div大小
            // var viewWidth = size.viewSize[0];
            // var viewHeight = size.viewSize[1];

            // 提示框大小
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];

            // boxWidth > pointX 说明鼠标左边放不下提示框
            if (boxWidth > pointX) {
              x = 5;
            } else {
              // 左边放的下
              x = pointX - boxWidth;
            }

            // boxHeight > pointY 说明鼠标上边放不下提示框
            if (boxHeight > pointY) {
              y = 5;
            } else {
              // 上边放得下
              y = pointY - boxHeight;
            }

            return [x, y];
          },
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false,
            show: false,
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            show: false,
            type: "value"
          }
        ],
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
            smooth: true
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main2"));
      // 指定图表的配置项和数据
      let option = {
        color: ["#409EFF"],
        tooltip: {
          position: function(point, params, dom, rect, size) {
            // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
            // 提示框位置
            var x = 0; // x坐标位置
            var y = 0; // y坐标位置

            // 当前鼠标位置
            var pointX = point[0];
            var pointY = point[1];

            // 外层div大小
            // var viewWidth = size.viewSize[0];
            // var viewHeight = size.viewSize[1];

            // 提示框大小
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];

            // boxWidth > pointX 说明鼠标左边放不下提示框
            if (boxWidth > pointX) {
              x = 5;
            } else {
              // 左边放的下
              x = pointX - boxWidth;
            }

            // boxHeight > pointY 说明鼠标上边放不下提示框
            if (boxHeight > pointY) {
              y = 5;
            } else {
              // 上边放得下
              y = pointY - boxHeight;
            }

            return [x, y];
          },
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            show: false,
            boundaryGap: false,
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            show: false,
            type: "value"
          }
        ],
        series: [
          {
            name: "访问次数",
            type: "bar",
            barWidth: "50%",
            data: [1000, 1000, 200, 334, 390, 1000, 220]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main3"));
      // 指定图表的配置项和数据
      let option = {
        color: ["#409EFF"],
        tooltip: {
          position: function(point, params, dom, rect, size) {
            // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
            // 提示框位置
            var x = 0; // x坐标位置
            var y = 0; // y坐标位置

            // 当前鼠标位置
            var pointX = point[0];
            var pointY = point[1];

            // 外层div大小
            // var viewWidth = size.viewSize[0];
            // var viewHeight = size.viewSize[1];

            // 提示框大小
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];

            // boxWidth > pointX 说明鼠标左边放不下提示框
            if (boxWidth > pointX) {
              x = 5;
            } else {
              // 左边放的下
              x = pointX - boxWidth;
            }

            // boxHeight > pointY 说明鼠标上边放不下提示框
            if (boxHeight > pointY) {
              y = 5;
            } else {
              // 上边放得下
              y = pointY - boxHeight;
            }

            return [x, y];
          },
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            show: false,
            boundaryGap: false,
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            show: false,
            type: "value"
          }
        ],
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  watch: {},
  computed: {
    chartWidth() {
      // return this.eWidth - 10;
      return "100%";
    },
    chartHeight() {
      return "150px";
    }
  }
};
</script>

<style lang="scss">
.dashboard_wrap {
  margin: 5px;
  .dashboard_header {
    display: flex;
    flex-direction: row;
    // flex-flow: wrap;
    height: auto;
    box-sizing: border-box;
    .box_content {
      color: #000;
      font-size: 30px;
      line-height: 38px;
    }
    .chart_box {
      margin-left: -30px;
      margin-top: -40px;
    }
    .content_box {
      line-height: 110px;
    }
    .box_footer {
      .el_divider {
        margin-top: -20px;
        .el-divider--horizontal {
          margin: 10px 0;
        }
      }
      .box_footer_content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
      }
    }
  }
  .dashboard_charts {
    margin-top: 20px;
    padding: 20px;
    background: #fff;
    box-sizing: border-box;
    // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }
}
</style>
