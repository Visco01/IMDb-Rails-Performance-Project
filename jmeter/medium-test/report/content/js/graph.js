/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 116.0, "minX": 0.0, "maxY": 24338.0, "series": [{"data": [[0.0, 116.0], [0.1, 116.0], [0.2, 266.0], [0.3, 446.0], [0.4, 446.0], [0.5, 587.0], [0.6, 596.0], [0.7, 596.0], [0.8, 758.0], [0.9, 895.0], [1.0, 895.0], [1.1, 943.0], [1.2, 1103.0], [1.3, 1103.0], [1.4, 1275.0], [1.5, 1444.0], [1.6, 1444.0], [1.7, 1595.0], [1.8, 1779.0], [1.9, 1779.0], [2.0, 1821.0], [2.1, 1930.0], [2.2, 2107.0], [2.3, 2107.0], [2.4, 2231.0], [2.5, 2270.0], [2.6, 2270.0], [2.7, 2437.0], [2.8, 2590.0], [2.9, 2590.0], [3.0, 2746.0], [3.1, 2771.0], [3.2, 2771.0], [3.3, 8386.0], [3.4, 8388.0], [3.5, 8388.0], [3.6, 8397.0], [3.7, 8398.0], [3.8, 8398.0], [3.9, 8399.0], [4.0, 8400.0], [4.1, 8400.0], [4.2, 8405.0], [4.3, 8406.0], [4.4, 8408.0], [4.5, 8408.0], [4.6, 8410.0], [4.7, 8412.0], [4.8, 8412.0], [4.9, 8415.0], [5.0, 8415.0], [5.1, 8415.0], [5.2, 8417.0], [5.3, 8422.0], [5.4, 8422.0], [5.5, 8428.0], [5.6, 8455.0], [5.7, 8455.0], [5.8, 8469.0], [5.9, 8469.0], [6.0, 8469.0], [6.1, 8470.0], [6.2, 8471.0], [6.3, 8471.0], [6.4, 8471.0], [6.5, 8472.0], [6.6, 8472.0], [6.7, 8472.0], [6.8, 8472.0], [6.9, 8475.0], [7.0, 8475.0], [7.1, 8475.0], [7.2, 8477.0], [7.3, 8477.0], [7.4, 8481.0], [7.5, 8482.0], [7.6, 8482.0], [7.7, 8484.0], [7.8, 8485.0], [7.9, 8485.0], [8.0, 8486.0], [8.1, 8486.0], [8.2, 8486.0], [8.3, 8487.0], [8.4, 8490.0], [8.5, 8490.0], [8.6, 8490.0], [8.7, 8491.0], [8.8, 8491.0], [8.9, 8491.0], [9.0, 8494.0], [9.1, 8496.0], [9.2, 8496.0], [9.3, 8496.0], [9.4, 8496.0], [9.5, 8496.0], [9.6, 8497.0], [9.7, 8500.0], [9.8, 8500.0], [9.9, 8503.0], [10.0, 8504.0], [10.1, 8504.0], [10.2, 8506.0], [10.3, 8508.0], [10.4, 8508.0], [10.5, 8510.0], [10.6, 8511.0], [10.7, 8511.0], [10.8, 8511.0], [10.9, 8512.0], [11.0, 8517.0], [11.1, 8517.0], [11.2, 8517.0], [11.3, 8520.0], [11.4, 8520.0], [11.5, 8520.0], [11.6, 8520.0], [11.7, 8520.0], [11.8, 8521.0], [11.9, 8526.0], [12.0, 8526.0], [12.1, 8527.0], [12.2, 8527.0], [12.3, 8527.0], [12.4, 8528.0], [12.5, 8529.0], [12.6, 8529.0], [12.7, 8529.0], [12.8, 8531.0], [12.9, 8531.0], [13.0, 8532.0], [13.1, 8532.0], [13.2, 8532.0], [13.3, 8532.0], [13.4, 8532.0], [13.5, 8533.0], [13.6, 8533.0], [13.7, 8533.0], [13.8, 8533.0], [13.9, 8533.0], [14.0, 8534.0], [14.1, 8534.0], [14.2, 8534.0], [14.3, 8535.0], [14.4, 8535.0], [14.5, 8535.0], [14.6, 8535.0], [14.7, 8536.0], [14.8, 8536.0], [14.9, 8536.0], [15.0, 8536.0], [15.1, 8536.0], [15.2, 8537.0], [15.3, 8538.0], [15.4, 8538.0], [15.5, 8538.0], [15.6, 8539.0], [15.7, 8539.0], [15.8, 8539.0], [15.9, 8539.0], [16.0, 8541.0], [16.1, 8541.0], [16.2, 8541.0], [16.3, 8541.0], [16.4, 8541.0], [16.5, 8542.0], [16.6, 8542.0], [16.7, 8542.0], [16.8, 8543.0], [16.9, 8544.0], [17.0, 8544.0], [17.1, 8546.0], [17.2, 8549.0], [17.3, 8549.0], [17.4, 8552.0], [17.5, 8552.0], [17.6, 8554.0], [17.7, 8554.0], [17.8, 8557.0], [17.9, 8557.0], [18.0, 8557.0], [18.1, 8558.0], [18.2, 8560.0], [18.3, 8560.0], [18.4, 8563.0], [18.5, 8584.0], [18.6, 8584.0], [18.7, 8588.0], [18.8, 8590.0], [18.9, 8590.0], [19.0, 8591.0], [19.1, 8592.0], [19.2, 8592.0], [19.3, 8594.0], [19.4, 8595.0], [19.5, 8595.0], [19.6, 8595.0], [19.7, 8595.0], [19.8, 8596.0], [19.9, 8596.0], [20.0, 8596.0], [20.1, 8596.0], [20.2, 8596.0], [20.3, 8596.0], [20.4, 8597.0], [20.5, 8597.0], [20.6, 8597.0], [20.7, 8597.0], [20.8, 8597.0], [20.9, 8597.0], [21.0, 8597.0], [21.1, 8597.0], [21.2, 8598.0], [21.3, 8598.0], [21.4, 8598.0], [21.5, 8599.0], [21.6, 8600.0], [21.7, 8600.0], [21.8, 8600.0], [21.9, 8600.0], [22.0, 8600.0], [22.1, 8600.0], [22.2, 8601.0], [22.3, 8601.0], [22.4, 8601.0], [22.5, 8601.0], [22.6, 8601.0], [22.7, 8601.0], [22.8, 8601.0], [22.9, 8602.0], [23.0, 8602.0], [23.1, 8602.0], [23.2, 8602.0], [23.3, 8602.0], [23.4, 8602.0], [23.5, 8603.0], [23.6, 8603.0], [23.7, 8603.0], [23.8, 8603.0], [23.9, 8603.0], [24.0, 8603.0], [24.1, 8603.0], [24.2, 8603.0], [24.3, 8603.0], [24.4, 8604.0], [24.5, 8604.0], [24.6, 8604.0], [24.7, 8604.0], [24.8, 8604.0], [24.9, 8604.0], [25.0, 8605.0], [25.1, 8605.0], [25.2, 8605.0], [25.3, 8605.0], [25.4, 8605.0], [25.5, 8605.0], [25.6, 8605.0], [25.7, 8605.0], [25.8, 8605.0], [25.9, 8605.0], [26.0, 8606.0], [26.1, 8606.0], [26.2, 8606.0], [26.3, 8606.0], [26.4, 8606.0], [26.5, 8606.0], [26.6, 8606.0], [26.7, 8606.0], [26.8, 8606.0], [26.9, 8606.0], [27.0, 8607.0], [27.1, 8607.0], [27.2, 8607.0], [27.3, 8607.0], [27.4, 8607.0], [27.5, 8607.0], [27.6, 8607.0], [27.7, 8607.0], [27.8, 8607.0], [27.9, 8607.0], [28.0, 8607.0], [28.1, 8607.0], [28.2, 8607.0], [28.3, 8608.0], [28.4, 8608.0], [28.5, 8608.0], [28.6, 8608.0], [28.7, 8608.0], [28.8, 8608.0], [28.9, 8608.0], [29.0, 8608.0], [29.1, 8608.0], [29.2, 8608.0], [29.3, 8608.0], [29.4, 8609.0], [29.5, 8609.0], [29.6, 8609.0], [29.7, 8609.0], [29.8, 8609.0], [29.9, 8609.0], [30.0, 8609.0], [30.1, 8609.0], [30.2, 8609.0], [30.3, 8609.0], [30.4, 8609.0], [30.5, 8609.0], [30.6, 8609.0], [30.7, 8610.0], [30.8, 8610.0], [30.9, 8610.0], [31.0, 8610.0], [31.1, 8610.0], [31.2, 8610.0], [31.3, 8610.0], [31.4, 8610.0], [31.5, 8610.0], [31.6, 8610.0], [31.7, 8610.0], [31.8, 8610.0], [31.9, 8610.0], [32.0, 8610.0], [32.1, 8610.0], [32.2, 8611.0], [32.3, 8611.0], [32.4, 8611.0], [32.5, 8611.0], [32.6, 8611.0], [32.7, 8611.0], [32.8, 8611.0], [32.9, 8611.0], [33.0, 8612.0], [33.1, 8612.0], [33.2, 8612.0], [33.3, 8612.0], [33.4, 8612.0], [33.5, 8612.0], [33.6, 8612.0], [33.7, 8612.0], [33.8, 8612.0], [33.9, 8612.0], [34.0, 8612.0], [34.1, 8612.0], [34.2, 8613.0], [34.3, 8613.0], [34.4, 8613.0], [34.5, 8613.0], [34.6, 8613.0], [34.7, 8613.0], [34.8, 8613.0], [34.9, 8613.0], [35.0, 8613.0], [35.1, 8613.0], [35.2, 8614.0], [35.3, 8614.0], [35.4, 8614.0], [35.5, 8614.0], [35.6, 8614.0], [35.7, 8614.0], [35.8, 8614.0], [35.9, 8614.0], [36.0, 8615.0], [36.1, 8615.0], [36.2, 8615.0], [36.3, 8615.0], [36.4, 8615.0], [36.5, 8615.0], [36.6, 8615.0], [36.7, 8615.0], [36.8, 8615.0], [36.9, 8615.0], [37.0, 8616.0], [37.1, 8616.0], [37.2, 8616.0], [37.3, 8616.0], [37.4, 8616.0], [37.5, 8616.0], [37.6, 8616.0], [37.7, 8617.0], [37.8, 8617.0], [37.9, 8617.0], [38.0, 8617.0], [38.1, 8617.0], [38.2, 8617.0], [38.3, 8617.0], [38.4, 8617.0], [38.5, 8617.0], [38.6, 8617.0], [38.7, 8617.0], [38.8, 8618.0], [38.9, 8618.0], [39.0, 8618.0], [39.1, 8618.0], [39.2, 8618.0], [39.3, 8618.0], [39.4, 8618.0], [39.5, 8618.0], [39.6, 8619.0], [39.7, 8619.0], [39.8, 8619.0], [39.9, 8619.0], [40.0, 8619.0], [40.1, 8619.0], [40.2, 8619.0], [40.3, 8619.0], [40.4, 8619.0], [40.5, 8619.0], [40.6, 8619.0], [40.7, 8619.0], [40.8, 8619.0], [40.9, 8619.0], [41.0, 8620.0], [41.1, 8620.0], [41.2, 8620.0], [41.3, 8620.0], [41.4, 8620.0], [41.5, 8620.0], [41.6, 8620.0], [41.7, 8621.0], [41.8, 8621.0], [41.9, 8621.0], [42.0, 8621.0], [42.1, 8621.0], [42.2, 8621.0], [42.3, 8622.0], [42.4, 8622.0], [42.5, 8622.0], [42.6, 8622.0], [42.7, 8625.0], [42.8, 8625.0], [42.9, 8626.0], [43.0, 8626.0], [43.1, 8626.0], [43.2, 8626.0], [43.3, 8626.0], [43.4, 8626.0], [43.5, 8627.0], [43.6, 8628.0], [43.7, 8629.0], [43.8, 8629.0], [43.9, 8629.0], [44.0, 8633.0], [44.1, 8633.0], [44.2, 8635.0], [44.3, 16066.0], [44.4, 16066.0], [44.5, 16073.0], [44.6, 16075.0], [44.7, 16075.0], [44.8, 16075.0], [44.9, 16075.0], [45.0, 16075.0], [45.1, 16076.0], [45.2, 16077.0], [45.3, 16077.0], [45.4, 16078.0], [45.5, 16080.0], [45.6, 16080.0], [45.7, 16080.0], [45.8, 16080.0], [45.9, 16081.0], [46.0, 16081.0], [46.1, 16083.0], [46.2, 16084.0], [46.3, 16084.0], [46.4, 16085.0], [46.5, 16085.0], [46.6, 16085.0], [46.7, 16086.0], [46.8, 16086.0], [46.9, 16086.0], [47.0, 16087.0], [47.1, 16088.0], [47.2, 16088.0], [47.3, 16088.0], [47.4, 16089.0], [47.5, 16089.0], [47.6, 16090.0], [47.7, 16092.0], [47.8, 16092.0], [47.9, 16092.0], [48.0, 16093.0], [48.1, 16095.0], [48.2, 16095.0], [48.3, 16096.0], [48.4, 16097.0], [48.5, 16097.0], [48.6, 16098.0], [48.7, 16099.0], [48.8, 16099.0], [48.9, 16101.0], [49.0, 16102.0], [49.1, 16102.0], [49.2, 16102.0], [49.3, 16103.0], [49.4, 16103.0], [49.5, 16104.0], [49.6, 16106.0], [49.7, 16106.0], [49.8, 16106.0], [49.9, 16108.0], [50.0, 16108.0], [50.1, 16118.0], [50.2, 16137.0], [50.3, 16140.0], [50.4, 16140.0], [50.5, 16141.0], [50.6, 16142.0], [50.7, 16142.0], [50.8, 16143.0], [50.9, 16143.0], [51.0, 16143.0], [51.1, 16145.0], [51.2, 16146.0], [51.3, 16146.0], [51.4, 16148.0], [51.5, 16148.0], [51.6, 16148.0], [51.7, 16149.0], [51.8, 16149.0], [51.9, 16149.0], [52.0, 16150.0], [52.1, 16150.0], [52.2, 16151.0], [52.3, 16151.0], [52.4, 16152.0], [52.5, 16152.0], [52.6, 16152.0], [52.7, 16154.0], [52.8, 16156.0], [52.9, 16156.0], [53.0, 16156.0], [53.1, 16158.0], [53.2, 16158.0], [53.3, 16158.0], [53.4, 16158.0], [53.5, 16158.0], [53.6, 16159.0], [53.7, 16159.0], [53.8, 16159.0], [53.9, 16160.0], [54.0, 16161.0], [54.1, 16161.0], [54.2, 16161.0], [54.3, 16162.0], [54.4, 16163.0], [54.5, 16163.0], [54.6, 16164.0], [54.7, 16165.0], [54.8, 16165.0], [54.9, 16167.0], [55.0, 16167.0], [55.1, 16167.0], [55.2, 16169.0], [55.3, 16172.0], [55.4, 16172.0], [55.5, 16173.0], [55.6, 16174.0], [55.7, 16174.0], [55.8, 16176.0], [55.9, 16177.0], [56.0, 16177.0], [56.1, 16178.0], [56.2, 16183.0], [56.3, 16183.0], [56.4, 16183.0], [56.5, 16185.0], [56.6, 16185.0], [56.7, 16185.0], [56.8, 16186.0], [56.9, 16187.0], [57.0, 16187.0], [57.1, 16187.0], [57.2, 16189.0], [57.3, 16189.0], [57.4, 16189.0], [57.5, 16189.0], [57.6, 16189.0], [57.7, 16190.0], [57.8, 16191.0], [57.9, 16191.0], [58.0, 16191.0], [58.1, 16192.0], [58.2, 16192.0], [58.3, 16192.0], [58.4, 16195.0], [58.5, 16195.0], [58.6, 16195.0], [58.7, 16195.0], [58.8, 16196.0], [58.9, 16196.0], [59.0, 16197.0], [59.1, 16197.0], [59.2, 16197.0], [59.3, 16198.0], [59.4, 16198.0], [59.5, 16198.0], [59.6, 16198.0], [59.7, 16199.0], [59.8, 16199.0], [59.9, 16199.0], [60.0, 16199.0], [60.1, 16199.0], [60.2, 16199.0], [60.3, 16199.0], [60.4, 16199.0], [60.5, 16200.0], [60.6, 16202.0], [60.7, 16202.0], [60.8, 16202.0], [60.9, 16202.0], [61.0, 16203.0], [61.1, 16203.0], [61.2, 16203.0], [61.3, 16203.0], [61.4, 16203.0], [61.5, 16203.0], [61.6, 16203.0], [61.7, 16203.0], [61.8, 16204.0], [61.9, 16204.0], [62.0, 16204.0], [62.1, 16204.0], [62.2, 16205.0], [62.3, 16205.0], [62.4, 16205.0], [62.5, 16206.0], [62.6, 16206.0], [62.7, 16207.0], [62.8, 16208.0], [62.9, 16208.0], [63.0, 16208.0], [63.1, 16209.0], [63.2, 16210.0], [63.3, 16210.0], [63.4, 16210.0], [63.5, 16210.0], [63.6, 16210.0], [63.7, 16210.0], [63.8, 16210.0], [63.9, 16210.0], [64.0, 16210.0], [64.1, 16211.0], [64.2, 16211.0], [64.3, 16211.0], [64.4, 16212.0], [64.5, 16212.0], [64.6, 16212.0], [64.7, 16212.0], [64.8, 16212.0], [64.9, 16213.0], [65.0, 16213.0], [65.1, 16213.0], [65.2, 16213.0], [65.3, 16214.0], [65.4, 16214.0], [65.5, 16214.0], [65.6, 16216.0], [65.7, 16217.0], [65.8, 16217.0], [65.9, 16217.0], [66.0, 16218.0], [66.1, 16218.0], [66.2, 16218.0], [66.3, 16219.0], [66.4, 16219.0], [66.5, 16219.0], [66.6, 16219.0], [66.7, 16219.0], [66.8, 16220.0], [66.9, 16220.0], [67.0, 16220.0], [67.1, 16222.0], [67.2, 16223.0], [67.3, 16223.0], [67.4, 16225.0], [67.5, 16226.0], [67.6, 16226.0], [67.7, 16226.0], [67.8, 16226.0], [67.9, 16226.0], [68.0, 16226.0], [68.1, 16227.0], [68.2, 16228.0], [68.3, 16228.0], [68.4, 16229.0], [68.5, 16229.0], [68.6, 16229.0], [68.7, 16229.0], [68.8, 16229.0], [68.9, 16229.0], [69.0, 16232.0], [69.1, 16233.0], [69.2, 16233.0], [69.3, 16234.0], [69.4, 16234.0], [69.5, 16234.0], [69.6, 16236.0], [69.7, 16236.0], [69.8, 16237.0], [69.9, 16237.0], [70.0, 16237.0], [70.1, 16237.0], [70.2, 16237.0], [70.3, 16237.0], [70.4, 16239.0], [70.5, 16239.0], [70.6, 16240.0], [70.7, 16240.0], [70.8, 16240.0], [70.9, 16241.0], [71.0, 16242.0], [71.1, 16242.0], [71.2, 16242.0], [71.3, 16242.0], [71.4, 16242.0], [71.5, 16243.0], [71.6, 16244.0], [71.7, 16244.0], [71.8, 16246.0], [71.9, 16246.0], [72.0, 16247.0], [72.1, 16247.0], [72.2, 16247.0], [72.3, 16248.0], [72.4, 16248.0], [72.5, 16252.0], [72.6, 16253.0], [72.7, 16253.0], [72.8, 16253.0], [72.9, 16254.0], [73.0, 16254.0], [73.1, 16255.0], [73.2, 16257.0], [73.3, 16257.0], [73.4, 16262.0], [73.5, 16264.0], [73.6, 16264.0], [73.7, 16271.0], [73.8, 16273.0], [73.9, 16273.0], [74.0, 16274.0], [74.1, 16275.0], [74.2, 16276.0], [74.3, 16276.0], [74.4, 16277.0], [74.5, 16281.0], [74.6, 16281.0], [74.7, 16282.0], [74.8, 16282.0], [74.9, 16282.0], [75.0, 16284.0], [75.1, 16285.0], [75.2, 16285.0], [75.3, 16286.0], [75.4, 16288.0], [75.5, 16288.0], [75.6, 16289.0], [75.7, 16290.0], [75.8, 16290.0], [75.9, 16293.0], [76.0, 16293.0], [76.1, 16293.0], [76.2, 16293.0], [76.3, 16293.0], [76.4, 16294.0], [76.5, 16294.0], [76.6, 16294.0], [76.7, 16295.0], [76.8, 16295.0], [76.9, 16295.0], [77.0, 16297.0], [77.1, 16297.0], [77.2, 16299.0], [77.3, 16300.0], [77.4, 16300.0], [77.5, 16300.0], [77.6, 16300.0], [77.7, 16300.0], [77.8, 16300.0], [77.9, 16300.0], [78.0, 16300.0], [78.1, 16301.0], [78.2, 16302.0], [78.3, 16305.0], [78.4, 16305.0], [78.5, 16305.0], [78.6, 16305.0], [78.7, 16305.0], [78.8, 16306.0], [78.9, 16307.0], [79.0, 16307.0], [79.1, 16307.0], [79.2, 16308.0], [79.3, 16308.0], [79.4, 16315.0], [79.5, 16322.0], [79.6, 16322.0], [79.7, 16322.0], [79.8, 16326.0], [79.9, 16326.0], [80.0, 16328.0], [80.1, 16330.0], [80.2, 16330.0], [80.3, 16332.0], [80.4, 16333.0], [80.5, 16334.0], [80.6, 16334.0], [80.7, 16335.0], [80.8, 16335.0], [80.9, 16335.0], [81.0, 16337.0], [81.1, 16337.0], [81.2, 16337.0], [81.3, 16338.0], [81.4, 16338.0], [81.5, 16338.0], [81.6, 16339.0], [81.7, 16341.0], [81.8, 16341.0], [81.9, 16341.0], [82.0, 16341.0], [82.1, 16341.0], [82.2, 16341.0], [82.3, 16342.0], [82.4, 16342.0], [82.5, 16343.0], [82.6, 16343.0], [82.7, 16344.0], [82.8, 16344.0], [82.9, 16346.0], [83.0, 16346.0], [83.1, 16346.0], [83.2, 16346.0], [83.3, 16348.0], [83.4, 16348.0], [83.5, 16348.0], [83.6, 16349.0], [83.7, 16349.0], [83.8, 16351.0], [83.9, 16352.0], [84.0, 16352.0], [84.1, 16353.0], [84.2, 16353.0], [84.3, 16353.0], [84.4, 16353.0], [84.5, 16354.0], [84.6, 16354.0], [84.7, 16357.0], [84.8, 16357.0], [84.9, 16357.0], [85.0, 16357.0], [85.1, 16357.0], [85.2, 16359.0], [85.3, 16359.0], [85.4, 16364.0], [85.5, 16369.0], [85.6, 16369.0], [85.7, 16374.0], [85.8, 16374.0], [85.9, 16374.0], [86.0, 16375.0], [86.1, 16376.0], [86.2, 16376.0], [86.3, 16376.0], [86.4, 16377.0], [86.5, 16377.0], [86.6, 16379.0], [86.7, 16380.0], [86.8, 16380.0], [86.9, 16381.0], [87.0, 16382.0], [87.1, 16383.0], [87.2, 16383.0], [87.3, 16383.0], [87.4, 16383.0], [87.5, 16383.0], [87.6, 16385.0], [87.7, 16386.0], [87.8, 16386.0], [87.9, 16386.0], [88.0, 16387.0], [88.1, 16387.0], [88.2, 16389.0], [88.3, 16390.0], [88.4, 16390.0], [88.5, 16391.0], [88.6, 16392.0], [88.7, 16392.0], [88.8, 16394.0], [88.9, 16394.0], [89.0, 16394.0], [89.1, 16395.0], [89.2, 16396.0], [89.3, 16396.0], [89.4, 16396.0], [89.5, 16397.0], [89.6, 16398.0], [89.7, 16398.0], [89.8, 16398.0], [89.9, 16398.0], [90.0, 16398.0], [90.1, 16400.0], [90.2, 16401.0], [90.3, 16401.0], [90.4, 16404.0], [90.5, 16404.0], [90.6, 16404.0], [90.7, 16405.0], [90.8, 16406.0], [90.9, 16406.0], [91.0, 16407.0], [91.1, 16407.0], [91.2, 16407.0], [91.3, 24279.0], [91.4, 24290.0], [91.5, 24291.0], [91.6, 24291.0], [91.7, 24292.0], [91.8, 24292.0], [91.9, 24292.0], [92.0, 24292.0], [92.1, 24292.0], [92.2, 24292.0], [92.3, 24293.0], [92.4, 24294.0], [92.5, 24294.0], [92.6, 24294.0], [92.7, 24294.0], [92.8, 24294.0], [92.9, 24295.0], [93.0, 24299.0], [93.1, 24299.0], [93.2, 24300.0], [93.3, 24300.0], [93.4, 24300.0], [93.5, 24301.0], [93.6, 24302.0], [93.7, 24303.0], [93.8, 24303.0], [93.9, 24303.0], [94.0, 24304.0], [94.1, 24304.0], [94.2, 24307.0], [94.3, 24307.0], [94.4, 24307.0], [94.5, 24307.0], [94.6, 24308.0], [94.7, 24308.0], [94.8, 24308.0], [94.9, 24309.0], [95.0, 24309.0], [95.1, 24309.0], [95.2, 24310.0], [95.3, 24310.0], [95.4, 24310.0], [95.5, 24310.0], [95.6, 24310.0], [95.7, 24310.0], [95.8, 24311.0], [95.9, 24311.0], [96.0, 24311.0], [96.1, 24311.0], [96.2, 24312.0], [96.3, 24312.0], [96.4, 24312.0], [96.5, 24313.0], [96.6, 24313.0], [96.7, 24314.0], [96.8, 24314.0], [96.9, 24314.0], [97.0, 24314.0], [97.1, 24315.0], [97.2, 24315.0], [97.3, 24316.0], [97.4, 24318.0], [97.5, 24318.0], [97.6, 24318.0], [97.7, 24319.0], [97.8, 24319.0], [97.9, 24319.0], [98.0, 24319.0], [98.1, 24320.0], [98.2, 24320.0], [98.3, 24320.0], [98.4, 24320.0], [98.5, 24320.0], [98.6, 24320.0], [98.7, 24321.0], [98.8, 24321.0], [98.9, 24324.0], [99.0, 24325.0], [99.1, 24325.0], [99.2, 24327.0], [99.3, 24327.0], [99.4, 24327.0], [99.5, 24330.0], [99.6, 24334.0], [99.7, 24334.0], [99.8, 24335.0], [99.9, 24338.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 155.0, "series": [{"data": [[8500.0, 81.0], [8600.0, 155.0], [8300.0, 5.0], [8400.0, 39.0], [700.0, 1.0], [800.0, 1.0], [900.0, 1.0], [16300.0, 87.0], [16200.0, 115.0], [16100.0, 79.0], [16000.0, 31.0], [16400.0, 8.0], [1100.0, 1.0], [1200.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [24300.0, 47.0], [24200.0, 13.0], [100.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [2100.0, 1.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2700.0, 2.0], [200.0, 1.0], [400.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 74.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 608.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 608.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 74.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.71880998E12, "maxY": 40.0, "series": [{"data": [[1.71881034E12, 40.0], [1.7188104E12, 35.925], [1.71881028E12, 40.0]], "isOverall": false, "label": "Directors by name B", "isController": false}, {"data": [[1.71881016E12, 20.0], [1.71881022E12, 20.0], [1.71881028E12, 20.0], [1.71880998E12, 31.52439024390244]], "isOverall": false, "label": "Directors by name A", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7188104E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1144.25, "minX": 1.0, "maxY": 24334.0, "series": [{"data": [[32.0, 24320.0], [35.0, 24309.0], [38.0, 24303.0], [40.0, 16248.900662251648], [45.0, 24293.0], [47.0, 24303.0], [46.0, 24299.0], [48.0, 24334.0], [49.0, 24307.0], [3.0, 18152.75], [50.0, 24314.0], [53.0, 24327.0], [55.0, 24319.0], [54.0, 24292.0], [56.0, 24310.0], [59.0, 24321.0], [58.0, 24298.5], [60.0, 24306.700000000004], [4.0, 24313.0], [6.0, 16090.333333333334], [7.0, 8952.0], [8.0, 8724.666666666668], [9.0, 24320.0], [10.0, 13264.285714285716], [13.0, 14954.4], [14.0, 13228.8], [15.0, 8900.0], [16.0, 2771.0], [1.0, 1444.0], [17.0, 2231.0], [20.0, 8625.010676156595], [21.0, 2746.0], [22.0, 12618.5], [23.0, 1144.25], [24.0, 2437.0], [25.0, 24304.0], [26.0, 24314.75], [27.0, 20200.75], [28.0, 24325.0], [31.0, 24301.0]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[30.05278592375366, 13324.63049853372]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 21.466666666666665, "minX": 1.71880998E12, "maxY": 3437.7833333333333, "series": [{"data": [[1.71881016E12, 1890.6333333333334], [1.71881034E12, 2317.233333333333], [1.71881022E12, 2237.2], [1.7188104E12, 2216.0833333333335], [1.71881028E12, 2608.1666666666665], [1.71880998E12, 3437.7833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71881016E12, 268.3333333333333], [1.71881034E12, 326.0], [1.71881022E12, 316.0], [1.7188104E12, 314.6666666666667], [1.71881028E12, 372.6666666666667], [1.71880998E12, 21.466666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7188104E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 8555.64, "minX": 1.71880998E12, "maxY": 18186.43902439024, "series": [{"data": [[1.71881016E12, 8555.64], [1.71881034E12, 16233.491666666663], [1.71881022E12, 8593.233333333335], [1.7188104E12, 16196.833333333334], [1.71881028E12, 12983.70714285714], [1.71880998E12, 18186.43902439024]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7188104E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1565.0000000000005, "minX": 1.71880998E12, "maxY": 16233.491666666663, "series": [{"data": [[1.71881016E12, 8555.630000000005], [1.71881034E12, 16233.491666666663], [1.71881022E12, 8593.233333333335], [1.7188104E12, 16196.833333333334], [1.71881028E12, 12983.678571428563], [1.71880998E12, 1565.0000000000005]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7188104E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.71880998E12, "maxY": 34.96341463414634, "series": [{"data": [[1.71881016E12, 7.810000000000001], [1.71881034E12, 12.341666666666667], [1.71881022E12, 6.216666666666671], [1.7188104E12, 0.0], [1.71881028E12, 10.33571428571428], [1.71880998E12, 34.96341463414634]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7188104E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1821.0, "minX": 1.71880998E12, "maxY": 24324.0, "series": [{"data": [[1.71881016E12, 8635.0], [1.71881034E12, 16359.0], [1.71881022E12, 8633.0], [1.7188104E12, 16315.0], [1.71881028E12, 16407.0], [1.71880998E12, 24324.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71881016E12, 8386.0], [1.71881034E12, 16137.0], [1.71881022E12, 8490.0], [1.7188104E12, 16066.0], [1.71881028E12, 8455.0], [1.71880998E12, 1821.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71881016E12, 8618.9], [1.71881034E12, 16348.9], [1.71881022E12, 8619.0], [1.7188104E12, 16300.0], [1.71881028E12, 16395.9], [1.71880998E12, 24324.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71881016E12, 8634.94], [1.71881034E12, 16358.58], [1.71881022E12, 8632.16], [1.7188104E12, 16313.53], [1.71881028E12, 16407.0], [1.71880998E12, 24324.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71881016E12, 8599.0], [1.71881034E12, 16202.0], [1.71881022E12, 8608.0], [1.7188104E12, 16207.0], [1.71881028E12, 16230.5], [1.71880998E12, 24294.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71881016E12, 8624.85], [1.71881034E12, 16353.95], [1.71881022E12, 8625.8], [1.7188104E12, 16305.0], [1.71881028E12, 16400.95], [1.71880998E12, 24324.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7188104E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1275.0, "minX": 2.0, "maxY": 24310.0, "series": [{"data": [[2.0, 2026.0], [20.0, 8603.0], [40.0, 16226.0], [60.0, 24301.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[20.0, 1275.0], [60.0, 24310.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 24301.0, "series": [{"data": [[2.0, 2026.0], [20.0, 8603.0], [40.0, 16226.0], [60.0, 24301.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[20.0, 0.0], [60.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.71880998E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.71881016E12, 1.6666666666666667], [1.71881034E12, 2.0], [1.71881022E12, 2.3333333333333335], [1.7188104E12, 1.3333333333333333], [1.71881028E12, 2.6666666666666665], [1.71880998E12, 1.3666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7188104E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71880998E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.71881016E12, 1.6666666666666667], [1.71881034E12, 2.0], [1.71881022E12, 2.0], [1.7188104E12, 2.0], [1.71881028E12, 2.3333333333333335], [1.71880998E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71880998E12, 1.2333333333333334]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7188104E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71880998E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.71880998E12, 1.2333333333333334]], "isOverall": false, "label": "Directors by name-failure", "isController": false}, {"data": [[1.71881016E12, 1.6666666666666667], [1.71881034E12, 2.0], [1.71881022E12, 2.0], [1.7188104E12, 2.0], [1.71881028E12, 2.3333333333333335], [1.71880998E12, 0.13333333333333333]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7188104E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71880998E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.71881016E12, 1.6666666666666667], [1.71881034E12, 2.0], [1.71881022E12, 2.0], [1.7188104E12, 2.0], [1.71881028E12, 2.3333333333333335], [1.71880998E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71880998E12, 1.2333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7188104E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

