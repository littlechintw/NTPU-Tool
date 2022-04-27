<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["customChartData", "options"],
  mounted() {
    this.renderChart(this.customChartData, this.options);
  },
  watch: {
    customChartData(value) {
      if (value) {
        // 測試新增一筆數據時的程式碼
        // this.renderChart(this.customChartDatas, this.options);

        // delegate update method in __prtot__
        // 測試更新一筆數據時的程式碼
        this.$data._chart.update();
      }
    },
  },
};
</script>