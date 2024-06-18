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
        data: {"result": {"minY": 1074.0, "minX": 0.0, "maxY": 44400.0, "series": [{"data": [[0.0, 1074.0], [0.1, 1097.0], [0.2, 1102.0], [0.3, 1147.0], [0.4, 1147.0], [0.5, 1175.0], [0.6, 1180.0], [0.7, 1191.0], [0.8, 1195.0], [0.9, 1224.0], [1.0, 1227.0], [1.1, 1240.0], [1.2, 1246.0], [1.3, 1255.0], [1.4, 1267.0], [1.5, 1267.0], [1.6, 1327.0], [1.7, 1329.0], [1.8, 1351.0], [1.9, 1356.0], [2.0, 1382.0], [2.1, 1382.0], [2.2, 1409.0], [2.3, 1425.0], [2.4, 1431.0], [2.5, 1436.0], [2.6, 1446.0], [2.7, 1448.0], [2.8, 1449.0], [2.9, 1463.0], [3.0, 1475.0], [3.1, 1484.0], [3.2, 1497.0], [3.3, 1551.0], [3.4, 1554.0], [3.5, 1636.0], [3.6, 1638.0], [3.7, 1642.0], [3.8, 1644.0], [3.9, 1647.0], [4.0, 1652.0], [4.1, 1655.0], [4.2, 1656.0], [4.3, 1656.0], [4.4, 1659.0], [4.5, 1659.0], [4.6, 1669.0], [4.7, 1675.0], [4.8, 1700.0], [4.9, 1706.0], [5.0, 1715.0], [5.1, 1718.0], [5.2, 1725.0], [5.3, 1730.0], [5.4, 1747.0], [5.5, 1749.0], [5.6, 1765.0], [5.7, 1773.0], [5.8, 1776.0], [5.9, 1791.0], [6.0, 1797.0], [6.1, 1799.0], [6.2, 1803.0], [6.3, 1951.0], [6.4, 2040.0], [6.5, 2067.0], [6.6, 2092.0], [6.7, 2110.0], [6.8, 2149.0], [6.9, 2154.0], [7.0, 2158.0], [7.1, 2161.0], [7.2, 2163.0], [7.3, 2165.0], [7.4, 2295.0], [7.5, 2298.0], [7.6, 2305.0], [7.7, 2307.0], [7.8, 2313.0], [7.9, 2316.0], [8.0, 2323.0], [8.1, 2325.0], [8.2, 2552.0], [8.3, 2552.0], [8.4, 2560.0], [8.5, 2561.0], [8.6, 2563.0], [8.7, 2566.0], [8.8, 2568.0], [8.9, 2571.0], [9.0, 2574.0], [9.1, 2576.0], [9.2, 2579.0], [9.3, 2579.0], [9.4, 2580.0], [9.5, 2585.0], [9.6, 2589.0], [9.7, 2944.0], [9.8, 2947.0], [9.9, 2963.0], [10.0, 2969.0], [10.1, 2972.0], [10.2, 2975.0], [10.3, 2977.0], [10.4, 2979.0], [10.5, 2980.0], [10.6, 2986.0], [10.7, 2987.0], [10.8, 2989.0], [10.9, 3211.0], [11.0, 3339.0], [11.1, 3384.0], [11.2, 3386.0], [11.3, 3389.0], [11.4, 3394.0], [11.5, 3401.0], [11.6, 3404.0], [11.7, 3486.0], [11.8, 3493.0], [11.9, 3497.0], [12.0, 3499.0], [12.1, 3502.0], [12.2, 3503.0], [12.3, 3582.0], [12.4, 3583.0], [12.5, 3596.0], [12.6, 3603.0], [12.7, 3604.0], [12.8, 3608.0], [12.9, 3608.0], [13.0, 3702.0], [13.1, 3979.0], [13.2, 3983.0], [13.3, 3983.0], [13.4, 3987.0], [13.5, 3993.0], [13.6, 4001.0], [13.7, 4006.0], [13.8, 4118.0], [13.9, 4198.0], [14.0, 4201.0], [14.1, 4209.0], [14.2, 4214.0], [14.3, 4214.0], [14.4, 4215.0], [14.5, 4248.0], [14.6, 4333.0], [14.7, 4369.0], [14.8, 4396.0], [14.9, 4407.0], [15.0, 4411.0], [15.1, 4420.0], [15.2, 4422.0], [15.3, 4422.0], [15.4, 4499.0], [15.5, 4502.0], [15.6, 4506.0], [15.7, 4510.0], [15.8, 4512.0], [15.9, 4515.0], [16.0, 4521.0], [16.1, 4537.0], [16.2, 4554.0], [16.3, 4692.0], [16.4, 4706.0], [16.5, 4708.0], [16.6, 4722.0], [16.7, 4723.0], [16.8, 4727.0], [16.9, 4727.0], [17.0, 4729.0], [17.1, 4739.0], [17.2, 4802.0], [17.3, 4973.0], [17.4, 5125.0], [17.5, 5384.0], [17.6, 5426.0], [17.7, 5456.0], [17.8, 5456.0], [17.9, 5512.0], [18.0, 5535.0], [18.1, 5546.0], [18.2, 5549.0], [18.3, 6133.0], [18.4, 6327.0], [18.5, 6433.0], [18.6, 6450.0], [18.7, 6478.0], [18.8, 6573.0], [18.9, 6587.0], [19.0, 6737.0], [19.1, 6765.0], [19.2, 6894.0], [19.3, 6910.0], [19.4, 7125.0], [19.5, 7161.0], [19.6, 7276.0], [19.7, 7278.0], [19.8, 7382.0], [19.9, 7493.0], [20.0, 7524.0], [20.1, 7759.0], [20.2, 7870.0], [20.3, 7892.0], [20.4, 7900.0], [20.5, 7913.0], [20.6, 7927.0], [20.7, 8113.0], [20.8, 8123.0], [20.9, 8202.0], [21.0, 8211.0], [21.1, 8314.0], [21.2, 8333.0], [21.3, 8342.0], [21.4, 8401.0], [21.5, 8425.0], [21.6, 8500.0], [21.7, 8553.0], [21.8, 8559.0], [21.9, 8566.0], [22.0, 8583.0], [22.1, 8584.0], [22.2, 8602.0], [22.3, 8607.0], [22.4, 8607.0], [22.5, 8613.0], [22.6, 8628.0], [22.7, 8637.0], [22.8, 8644.0], [22.9, 8647.0], [23.0, 8648.0], [23.1, 8653.0], [23.2, 8667.0], [23.3, 8744.0], [23.4, 8747.0], [23.5, 8767.0], [23.6, 8783.0], [23.7, 8786.0], [23.8, 8792.0], [23.9, 8797.0], [24.0, 8798.0], [24.1, 8800.0], [24.2, 8801.0], [24.3, 8803.0], [24.4, 8810.0], [24.5, 8838.0], [24.6, 8879.0], [24.7, 8883.0], [24.8, 8900.0], [24.9, 8907.0], [25.0, 8914.0], [25.1, 8915.0], [25.2, 8940.0], [25.3, 8940.0], [25.4, 8957.0], [25.5, 8977.0], [25.6, 8994.0], [25.7, 9013.0], [25.8, 9013.0], [25.9, 9021.0], [26.0, 9047.0], [26.1, 9055.0], [26.2, 9063.0], [26.3, 9066.0], [26.4, 9070.0], [26.5, 9110.0], [26.6, 9114.0], [26.7, 9203.0], [26.8, 9204.0], [26.9, 9206.0], [27.0, 9207.0], [27.1, 9218.0], [27.2, 9220.0], [27.3, 9221.0], [27.4, 9248.0], [27.5, 9274.0], [27.6, 9289.0], [27.7, 9301.0], [27.8, 9318.0], [27.9, 9322.0], [28.0, 9329.0], [28.1, 9330.0], [28.2, 9335.0], [28.3, 9338.0], [28.4, 9342.0], [28.5, 9344.0], [28.6, 9403.0], [28.7, 9438.0], [28.8, 9441.0], [28.9, 9511.0], [29.0, 9521.0], [29.1, 9528.0], [29.2, 9529.0], [29.3, 9533.0], [29.4, 9545.0], [29.5, 9607.0], [29.6, 9608.0], [29.7, 9613.0], [29.8, 9650.0], [29.9, 9672.0], [30.0, 9675.0], [30.1, 9676.0], [30.2, 9679.0], [30.3, 9681.0], [30.4, 9687.0], [30.5, 9690.0], [30.6, 9695.0], [30.7, 9696.0], [30.8, 9715.0], [30.9, 9731.0], [31.0, 9736.0], [31.1, 9736.0], [31.2, 9745.0], [31.3, 9750.0], [31.4, 9784.0], [31.5, 10007.0], [31.6, 10009.0], [31.7, 10037.0], [31.8, 10040.0], [31.9, 10043.0], [32.0, 10045.0], [32.1, 10060.0], [32.2, 10133.0], [32.3, 10155.0], [32.4, 10157.0], [32.5, 10169.0], [32.6, 10171.0], [32.7, 10179.0], [32.8, 10180.0], [32.9, 10197.0], [33.0, 10205.0], [33.1, 10206.0], [33.2, 10208.0], [33.3, 10210.0], [33.4, 10215.0], [33.5, 10215.0], [33.6, 10229.0], [33.7, 10240.0], [33.8, 10279.0], [33.9, 10280.0], [34.0, 10293.0], [34.1, 10360.0], [34.2, 10826.0], [34.3, 10862.0], [34.4, 10865.0], [34.5, 10879.0], [34.6, 10887.0], [34.7, 10891.0], [34.8, 10892.0], [34.9, 10893.0], [35.0, 10895.0], [35.1, 10905.0], [35.2, 10911.0], [35.3, 10937.0], [35.4, 10942.0], [35.5, 10945.0], [35.6, 10948.0], [35.7, 10951.0], [35.8, 10964.0], [35.9, 10966.0], [36.0, 11256.0], [36.1, 11266.0], [36.2, 11268.0], [36.3, 11268.0], [36.4, 11271.0], [36.5, 11279.0], [36.6, 11283.0], [36.7, 11285.0], [36.8, 11289.0], [36.9, 11291.0], [37.0, 11448.0], [37.1, 11453.0], [37.2, 11478.0], [37.3, 11532.0], [37.4, 11536.0], [37.5, 11539.0], [37.6, 11550.0], [37.7, 11559.0], [37.8, 11560.0], [37.9, 11565.0], [38.0, 11566.0], [38.1, 11577.0], [38.2, 11967.0], [38.3, 12045.0], [38.4, 12046.0], [38.5, 12057.0], [38.6, 12060.0], [38.7, 12061.0], [38.8, 12084.0], [38.9, 12086.0], [39.0, 12088.0], [39.1, 12089.0], [39.2, 12095.0], [39.3, 12096.0], [39.4, 12098.0], [39.5, 12098.0], [39.6, 12106.0], [39.7, 12114.0], [39.8, 12141.0], [39.9, 12147.0], [40.0, 12148.0], [40.1, 12150.0], [40.2, 12150.0], [40.3, 12198.0], [40.4, 12201.0], [40.5, 12409.0], [40.6, 12411.0], [40.7, 12421.0], [40.8, 12422.0], [40.9, 12427.0], [41.0, 12427.0], [41.1, 12498.0], [41.2, 12502.0], [41.3, 12508.0], [41.4, 12509.0], [41.5, 12530.0], [41.6, 13107.0], [41.7, 13108.0], [41.8, 13113.0], [41.9, 13114.0], [42.0, 13114.0], [42.1, 13116.0], [42.2, 13120.0], [42.3, 13123.0], [42.4, 13130.0], [42.5, 13130.0], [42.6, 13543.0], [42.7, 13544.0], [42.8, 13547.0], [42.9, 13554.0], [43.0, 13555.0], [43.1, 13559.0], [43.2, 13560.0], [43.3, 13560.0], [43.4, 13561.0], [43.5, 13569.0], [43.6, 13575.0], [43.7, 13714.0], [43.8, 13724.0], [43.9, 13725.0], [44.0, 13726.0], [44.1, 13727.0], [44.2, 13728.0], [44.3, 13730.0], [44.4, 13734.0], [44.5, 13736.0], [44.6, 13739.0], [44.7, 13741.0], [44.8, 13987.0], [44.9, 14326.0], [45.0, 14335.0], [45.1, 14335.0], [45.2, 14339.0], [45.3, 14339.0], [45.4, 14340.0], [45.5, 14341.0], [45.6, 14346.0], [45.7, 14346.0], [45.8, 14346.0], [45.9, 14347.0], [46.0, 14348.0], [46.1, 14351.0], [46.2, 14351.0], [46.3, 14353.0], [46.4, 14355.0], [46.5, 14357.0], [46.6, 14362.0], [46.7, 14374.0], [46.8, 14377.0], [46.9, 14383.0], [47.0, 14384.0], [47.1, 14389.0], [47.2, 14903.0], [47.3, 14922.0], [47.4, 14929.0], [47.5, 14931.0], [47.6, 14934.0], [47.7, 14939.0], [47.8, 14941.0], [47.9, 14941.0], [48.0, 14943.0], [48.1, 14945.0], [48.2, 14946.0], [48.3, 14948.0], [48.4, 14953.0], [48.5, 14953.0], [48.6, 14954.0], [48.7, 14958.0], [48.8, 14960.0], [48.9, 14962.0], [49.0, 14963.0], [49.1, 14966.0], [49.2, 14970.0], [49.3, 14974.0], [49.4, 14974.0], [49.5, 14981.0], [49.6, 15269.0], [49.7, 15553.0], [49.8, 15557.0], [49.9, 15559.0], [50.0, 15561.0], [50.1, 15561.0], [50.2, 15563.0], [50.3, 15564.0], [50.4, 15567.0], [50.5, 15568.0], [50.6, 15568.0], [50.7, 15569.0], [50.8, 15572.0], [50.9, 15572.0], [51.0, 15573.0], [51.1, 15574.0], [51.2, 15575.0], [51.3, 15575.0], [51.4, 15576.0], [51.5, 15576.0], [51.6, 15577.0], [51.7, 15579.0], [51.8, 15580.0], [51.9, 15583.0], [52.0, 15584.0], [52.1, 15591.0], [52.2, 15597.0], [52.3, 16583.0], [52.4, 16584.0], [52.5, 16590.0], [52.6, 16591.0], [52.7, 16593.0], [52.8, 16593.0], [52.9, 16594.0], [53.0, 16596.0], [53.1, 16596.0], [53.2, 16597.0], [53.3, 16597.0], [53.4, 16598.0], [53.5, 16598.0], [53.6, 16602.0], [53.7, 16602.0], [53.8, 16604.0], [53.9, 16604.0], [54.0, 16606.0], [54.1, 16606.0], [54.2, 16609.0], [54.3, 16609.0], [54.4, 16610.0], [54.5, 16612.0], [54.6, 16612.0], [54.7, 16614.0], [54.8, 16615.0], [54.9, 16628.0], [55.0, 17195.0], [55.1, 17202.0], [55.2, 17208.0], [55.3, 17209.0], [55.4, 17211.0], [55.5, 17221.0], [55.6, 17223.0], [55.7, 17228.0], [55.8, 17229.0], [55.9, 17229.0], [56.0, 17230.0], [56.1, 17230.0], [56.2, 17232.0], [56.3, 17233.0], [56.4, 17234.0], [56.5, 17234.0], [56.6, 17235.0], [56.7, 17237.0], [56.8, 17238.0], [56.9, 17239.0], [57.0, 17241.0], [57.1, 17242.0], [57.2, 17243.0], [57.3, 17244.0], [57.4, 17245.0], [57.5, 17246.0], [57.6, 17250.0], [57.7, 17251.0], [57.8, 17509.0], [57.9, 17989.0], [58.0, 17993.0], [58.1, 17998.0], [58.2, 18000.0], [58.3, 18000.0], [58.4, 18003.0], [58.5, 18007.0], [58.6, 18007.0], [58.7, 18007.0], [58.8, 18008.0], [58.9, 18008.0], [59.0, 18008.0], [59.1, 18008.0], [59.2, 18009.0], [59.3, 18011.0], [59.4, 18012.0], [59.5, 18013.0], [59.6, 18013.0], [59.7, 18016.0], [59.8, 18017.0], [59.9, 18017.0], [60.0, 18022.0], [60.1, 18022.0], [60.2, 18024.0], [60.3, 18025.0], [60.4, 18026.0], [60.5, 18038.0], [60.6, 18038.0], [60.7, 18047.0], [60.8, 18395.0], [60.9, 18828.0], [61.0, 18831.0], [61.1, 18837.0], [61.2, 18839.0], [61.3, 18839.0], [61.4, 18839.0], [61.5, 18840.0], [61.6, 18841.0], [61.7, 18841.0], [61.8, 18842.0], [61.9, 18842.0], [62.0, 18844.0], [62.1, 18846.0], [62.2, 18846.0], [62.3, 18847.0], [62.4, 18847.0], [62.5, 18848.0], [62.6, 18849.0], [62.7, 18849.0], [62.8, 18850.0], [62.9, 18850.0], [63.0, 18851.0], [63.1, 18852.0], [63.2, 18854.0], [63.3, 18857.0], [63.4, 18857.0], [63.5, 18859.0], [63.6, 18859.0], [63.7, 18860.0], [63.8, 18863.0], [63.9, 18874.0], [64.0, 19094.0], [64.1, 19667.0], [64.2, 19704.0], [64.3, 20053.0], [64.4, 20067.0], [64.5, 20069.0], [64.6, 20070.0], [64.7, 20071.0], [64.8, 20075.0], [64.9, 20075.0], [65.0, 20076.0], [65.1, 20077.0], [65.2, 20077.0], [65.3, 20078.0], [65.4, 20079.0], [65.5, 20079.0], [65.6, 20080.0], [65.7, 20080.0], [65.8, 20081.0], [65.9, 20081.0], [66.0, 20082.0], [66.1, 20082.0], [66.2, 20083.0], [66.3, 20085.0], [66.4, 20085.0], [66.5, 20086.0], [66.6, 20086.0], [66.7, 20087.0], [66.8, 20087.0], [66.9, 20088.0], [67.0, 20089.0], [67.1, 20093.0], [67.2, 20099.0], [67.3, 20100.0], [67.4, 20104.0], [67.5, 20425.0], [67.6, 20871.0], [67.7, 20872.0], [67.8, 20876.0], [67.9, 20880.0], [68.0, 20885.0], [68.1, 20885.0], [68.2, 20887.0], [68.3, 20887.0], [68.4, 20889.0], [68.5, 20890.0], [68.6, 20891.0], [68.7, 20892.0], [68.8, 20892.0], [68.9, 20894.0], [69.0, 20894.0], [69.1, 20895.0], [69.2, 20895.0], [69.3, 20896.0], [69.4, 20897.0], [69.5, 20898.0], [69.6, 20899.0], [69.7, 20900.0], [69.8, 20901.0], [69.9, 20903.0], [70.0, 20904.0], [70.1, 20904.0], [70.2, 20906.0], [70.3, 20907.0], [70.4, 20910.0], [70.5, 20910.0], [70.6, 20913.0], [70.7, 20919.0], [70.8, 20921.0], [70.9, 20927.0], [71.0, 21482.0], [71.1, 21694.0], [71.2, 22108.0], [71.3, 22115.0], [71.4, 22116.0], [71.5, 22117.0], [71.6, 22119.0], [71.7, 22122.0], [71.8, 22122.0], [71.9, 22124.0], [72.0, 22125.0], [72.1, 22126.0], [72.2, 22128.0], [72.3, 22128.0], [72.4, 22129.0], [72.5, 22131.0], [72.6, 22131.0], [72.7, 22131.0], [72.8, 22132.0], [72.9, 22133.0], [73.0, 22133.0], [73.1, 22134.0], [73.2, 22134.0], [73.3, 22134.0], [73.4, 22134.0], [73.5, 22135.0], [73.6, 22136.0], [73.7, 22136.0], [73.8, 22138.0], [73.9, 22139.0], [74.0, 22139.0], [74.1, 22140.0], [74.2, 22141.0], [74.3, 22142.0], [74.4, 22143.0], [74.5, 22147.0], [74.6, 22148.0], [74.7, 22315.0], [74.8, 23124.0], [74.9, 23128.0], [75.0, 23131.0], [75.1, 23135.0], [75.2, 23135.0], [75.3, 23136.0], [75.4, 23138.0], [75.5, 23139.0], [75.6, 23140.0], [75.7, 23141.0], [75.8, 23141.0], [75.9, 23143.0], [76.0, 23144.0], [76.1, 23144.0], [76.2, 23145.0], [76.3, 23146.0], [76.4, 23146.0], [76.5, 23147.0], [76.6, 23148.0], [76.7, 23148.0], [76.8, 23148.0], [76.9, 23149.0], [77.0, 23151.0], [77.1, 23151.0], [77.2, 23151.0], [77.3, 23153.0], [77.4, 23153.0], [77.5, 23154.0], [77.6, 23154.0], [77.7, 23156.0], [77.8, 23156.0], [77.9, 23157.0], [78.0, 23158.0], [78.1, 23158.0], [78.2, 23161.0], [78.3, 23162.0], [78.4, 23164.0], [78.5, 23743.0], [78.6, 23745.0], [78.7, 23753.0], [78.8, 23754.0], [78.9, 23754.0], [79.0, 23757.0], [79.1, 23758.0], [79.2, 23759.0], [79.3, 23759.0], [79.4, 23761.0], [79.5, 23761.0], [79.6, 23761.0], [79.7, 23762.0], [79.8, 23764.0], [79.9, 23764.0], [80.0, 23764.0], [80.1, 23764.0], [80.2, 23765.0], [80.3, 23765.0], [80.4, 23766.0], [80.5, 23768.0], [80.6, 23768.0], [80.7, 23769.0], [80.8, 23770.0], [80.9, 23771.0], [81.0, 23771.0], [81.1, 23772.0], [81.2, 23772.0], [81.3, 23773.0], [81.4, 23774.0], [81.5, 23775.0], [81.6, 23775.0], [81.7, 23776.0], [81.8, 23777.0], [81.9, 23778.0], [82.0, 23780.0], [82.1, 23780.0], [82.2, 23782.0], [82.3, 23789.0], [82.4, 24057.0], [82.5, 24158.0], [82.6, 24337.0], [82.7, 24344.0], [82.8, 24345.0], [82.9, 24348.0], [83.0, 24350.0], [83.1, 24352.0], [83.2, 24353.0], [83.3, 24369.0], [83.4, 24373.0], [83.5, 24374.0], [83.6, 24374.0], [83.7, 24376.0], [83.8, 24377.0], [83.9, 24378.0], [84.0, 24378.0], [84.1, 24380.0], [84.2, 24382.0], [84.3, 24383.0], [84.4, 24384.0], [84.5, 24385.0], [84.6, 24386.0], [84.7, 24388.0], [84.8, 24389.0], [84.9, 24390.0], [85.0, 24392.0], [85.1, 24392.0], [85.2, 24393.0], [85.3, 24394.0], [85.4, 24395.0], [85.5, 24395.0], [85.6, 24398.0], [85.7, 24398.0], [85.8, 24401.0], [85.9, 24402.0], [86.0, 24402.0], [86.1, 24403.0], [86.2, 24404.0], [86.3, 24406.0], [86.4, 24406.0], [86.5, 24408.0], [86.6, 24409.0], [86.7, 24410.0], [86.8, 24410.0], [86.9, 24412.0], [87.0, 24413.0], [87.1, 24413.0], [87.2, 24414.0], [87.3, 24414.0], [87.4, 24416.0], [87.5, 24417.0], [87.6, 24417.0], [87.7, 24418.0], [87.8, 24420.0], [87.9, 24420.0], [88.0, 24420.0], [88.1, 24421.0], [88.2, 24423.0], [88.3, 24423.0], [88.4, 24424.0], [88.5, 24424.0], [88.6, 24424.0], [88.7, 24425.0], [88.8, 24426.0], [88.9, 24427.0], [89.0, 24427.0], [89.1, 24428.0], [89.2, 24429.0], [89.3, 24429.0], [89.4, 24430.0], [89.5, 24432.0], [89.6, 24433.0], [89.7, 24435.0], [89.8, 24435.0], [89.9, 24437.0], [90.0, 24441.0], [90.1, 24441.0], [90.2, 24443.0], [90.3, 24449.0], [90.4, 24453.0], [90.5, 24454.0], [90.6, 24459.0], [90.7, 24460.0], [90.8, 24503.0], [90.9, 24507.0], [91.0, 24510.0], [91.1, 24510.0], [91.2, 24513.0], [91.3, 24514.0], [91.4, 24516.0], [91.5, 24518.0], [91.6, 24519.0], [91.7, 24521.0], [91.8, 24522.0], [91.9, 24522.0], [92.0, 24523.0], [92.1, 24524.0], [92.2, 24524.0], [92.3, 24525.0], [92.4, 24527.0], [92.5, 24527.0], [92.6, 24527.0], [92.7, 24528.0], [92.8, 24529.0], [92.9, 24529.0], [93.0, 24532.0], [93.1, 24532.0], [93.2, 24534.0], [93.3, 24536.0], [93.4, 24538.0], [93.5, 24539.0], [93.6, 24543.0], [93.7, 24544.0], [93.8, 24544.0], [93.9, 24545.0], [94.0, 24568.0], [94.1, 24568.0], [94.2, 24570.0], [94.3, 24572.0], [94.4, 24573.0], [94.5, 24575.0], [94.6, 24575.0], [94.7, 24577.0], [94.8, 24577.0], [94.9, 24578.0], [95.0, 24578.0], [95.1, 24579.0], [95.2, 24581.0], [95.3, 24582.0], [95.4, 24582.0], [95.5, 24583.0], [95.6, 24583.0], [95.7, 24584.0], [95.8, 24585.0], [95.9, 24585.0], [96.0, 24586.0], [96.1, 24586.0], [96.2, 24587.0], [96.3, 24587.0], [96.4, 24588.0], [96.5, 24588.0], [96.6, 24588.0], [96.7, 24588.0], [96.8, 24589.0], [96.9, 24590.0], [97.0, 24591.0], [97.1, 24592.0], [97.2, 24592.0], [97.3, 24593.0], [97.4, 24594.0], [97.5, 24594.0], [97.6, 24595.0], [97.7, 24595.0], [97.8, 24596.0], [97.9, 24596.0], [98.0, 24596.0], [98.1, 24597.0], [98.2, 24599.0], [98.3, 24601.0], [98.4, 24602.0], [98.5, 24603.0], [98.6, 24604.0], [98.7, 24604.0], [98.8, 24605.0], [98.9, 24607.0], [99.0, 27083.0], [99.1, 27441.0], [99.2, 27845.0], [99.3, 28061.0], [99.4, 29791.0], [99.5, 30028.0], [99.6, 32480.0], [99.7, 36070.0], [99.8, 36910.0], [99.9, 38360.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 110.0, "series": [{"data": [[36100.0, 1.0], [38300.0, 1.0], [36900.0, 1.0], [1000.0, 2.0], [1100.0, 10.0], [1200.0, 11.0], [1300.0, 8.0], [1400.0, 16.0], [1500.0, 3.0], [1600.0, 19.0], [1700.0, 21.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 4.0], [2100.0, 10.0], [2300.0, 9.0], [2200.0, 3.0], [2400.0, 1.0], [2500.0, 21.0], [2600.0, 1.0], [2900.0, 17.0], [3300.0, 7.0], [3200.0, 2.0], [3400.0, 8.0], [3500.0, 8.0], [3700.0, 1.0], [3600.0, 6.0], [3900.0, 8.0], [4000.0, 3.0], [4200.0, 9.0], [4100.0, 2.0], [4300.0, 4.0], [4400.0, 9.0], [4500.0, 12.0], [4600.0, 1.0], [4800.0, 1.0], [4700.0, 12.0], [4900.0, 2.0], [5100.0, 1.0], [5300.0, 2.0], [5400.0, 5.0], [5500.0, 6.0], [6100.0, 1.0], [6300.0, 2.0], [6400.0, 3.0], [6500.0, 3.0], [6600.0, 1.0], [6700.0, 2.0], [6800.0, 2.0], [6900.0, 2.0], [7100.0, 3.0], [7200.0, 2.0], [7400.0, 1.0], [7300.0, 2.0], [7500.0, 2.0], [7800.0, 3.0], [7900.0, 4.0], [7700.0, 1.0], [8100.0, 3.0], [8000.0, 1.0], [8300.0, 4.0], [8400.0, 3.0], [8700.0, 12.0], [8600.0, 16.0], [8200.0, 3.0], [8500.0, 9.0], [8800.0, 10.0], [8900.0, 13.0], [9000.0, 12.0], [9100.0, 3.0], [9200.0, 14.0], [9400.0, 5.0], [9300.0, 13.0], [9700.0, 11.0], [9500.0, 9.0], [9600.0, 18.0], [10200.0, 17.0], [10000.0, 10.0], [10100.0, 11.0], [10300.0, 2.0], [11200.0, 14.0], [10900.0, 13.0], [10800.0, 13.0], [11300.0, 1.0], [11400.0, 4.0], [11500.0, 13.0], [11900.0, 2.0], [12100.0, 12.0], [12000.0, 18.0], [12200.0, 1.0], [12400.0, 11.0], [12500.0, 5.0], [13100.0, 15.0], [13000.0, 1.0], [13700.0, 16.0], [13500.0, 16.0], [13900.0, 1.0], [14300.0, 34.0], [15200.0, 1.0], [14900.0, 35.0], [15500.0, 38.0], [16500.0, 19.0], [16600.0, 21.0], [17200.0, 40.0], [17100.0, 1.0], [17500.0, 1.0], [18300.0, 1.0], [18000.0, 38.0], [17900.0, 5.0], [19000.0, 1.0], [18700.0, 1.0], [18800.0, 45.0], [19600.0, 1.0], [20400.0, 1.0], [19700.0, 1.0], [20000.0, 44.0], [20100.0, 3.0], [19500.0, 1.0], [20500.0, 1.0], [21400.0, 1.0], [20800.0, 31.0], [20900.0, 18.0], [21100.0, 1.0], [22300.0, 1.0], [22100.0, 51.0], [21900.0, 1.0], [21600.0, 1.0], [23100.0, 55.0], [24000.0, 1.0], [24100.0, 1.0], [23700.0, 57.0], [24300.0, 47.0], [24400.0, 73.0], [24500.0, 110.0], [24600.0, 10.0], [27400.0, 1.0], [26700.0, 1.0], [27000.0, 1.0], [28000.0, 1.0], [27800.0, 1.0], [28500.0, 1.0], [27700.0, 1.0], [29700.0, 1.0], [30000.0, 1.0], [32300.0, 1.0], [32400.0, 1.0], [36000.0, 1.0], [44400.0, 1.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 44400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1418.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 47.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1418.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.170212765957447, "minX": 1.7187321E12, "maxY": 60.0, "series": [{"data": [[1.71873246E12, 44.11904761904762], [1.71873228E12, 22.563492063492074], [1.71873258E12, 58.52678571428572], [1.7187321E12, 3.170212765957447], [1.7187324E12, 36.34782608695651], [1.7187327E12, 56.31666666666664], [1.71873222E12, 14.947368421052632], [1.71873252E12, 51.75167785234902], [1.71873234E12, 29.258992805755394], [1.71873264E12, 60.0], [1.71873216E12, 8.12418300653595]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187327E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1161.5, "minX": 1.0, "maxY": 24601.0, "series": [{"data": [[2.0, 1161.5], [3.0, 1346.142857142857], [4.0, 1355.8124999999998], [5.0, 1751.0], [6.0, 1667.875], [7.0, 1988.5714285714284], [8.0, 2393.5833333333335], [9.0, 2744.962962962963], [10.0, 3405.05], [11.0, 3731.636363636364], [12.0, 4260.249999999999], [13.0, 4602.999999999999], [14.0, 4986.925925925927], [15.0, 6283.375], [16.0, 7299.125], [17.0, 8284.4375], [18.0, 8456.571428571428], [19.0, 8768.923076923076], [20.0, 9486.785714285714], [21.0, 9377.21052631579], [22.0, 8928.650000000003], [23.0, 9091.045454545456], [24.0, 9213.238095238094], [25.0, 9792.374999999998], [26.0, 10143.999999999998], [28.0, 10490.076923076922], [29.0, 11301.17857142857], [30.0, 11580.357142857143], [31.0, 11542.466666666667], [32.0, 12730.03125], [34.0, 13247.151515151516], [35.0, 15033.473684210525], [37.0, 14526.62857142857], [36.0, 24586.0], [39.0, 15399.972972972977], [41.0, 15931.179487179488], [40.0, 24563.0], [43.0, 16909.902439024398], [45.0, 18273.416666666668], [44.0, 24587.666666666668], [47.0, 18351.48888888889], [49.0, 19567.779999999995], [51.0, 24594.6], [50.0, 24577.0], [52.0, 20547.340000000004], [53.0, 24600.5], [54.0, 21312.44444444444], [55.0, 24596.0], [57.0, 22594.464285714283], [59.0, 24601.0], [60.0, 24279.467692307684], [1.0, 2065.6666666666665]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[37.22866894197953, 14896.54266211604]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 125.41666666666667, "minX": 1.7187321E12, "maxY": 3461.233333333333, "series": [{"data": [[1.71873246E12, 3227.8], [1.71873228E12, 2407.2166666666667], [1.71873258E12, 2159.366666666667], [1.7187321E12, 878.9333333333333], [1.7187324E12, 2649.6833333333334], [1.7187327E12, 2302.55], [1.71873222E12, 2563.483333333333], [1.71873252E12, 2875.75], [1.71873234E12, 2689.883333333333], [1.71873264E12, 3461.233333333333], [1.71873216E12, 2920.866666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71873246E12, 448.9], [1.71873228E12, 336.9166666666667], [1.71873258E12, 299.25], [1.7187321E12, 125.41666666666667], [1.7187324E12, 369.0833333333333], [1.7187327E12, 320.85], [1.71873222E12, 355.5833333333333], [1.71873252E12, 398.25], [1.71873234E12, 371.48333333333335], [1.71873264E12, 480.93333333333334], [1.71873216E12, 408.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187327E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1378.4468085106382, "minX": 1.7187321E12, "maxY": 24563.10000000001, "series": [{"data": [[1.71873246E12, 17230.119047619042], [1.71873228E12, 9302.07142857142], [1.71873258E12, 23029.116071428565], [1.7187321E12, 1378.4468085106382], [1.7187324E12, 14229.818840579705], [1.7187327E12, 24563.10000000001], [1.71873222E12, 6202.8796992481175], [1.71873252E12, 20360.26845637583], [1.71873234E12, 11228.741007194247], [1.71873264E12, 24397.455555555556], [1.71873216E12, 2551.4967320261444]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187327E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1378.4468085106382, "minX": 1.7187321E12, "maxY": 24563.10000000001, "series": [{"data": [[1.71873246E12, 17230.119047619042], [1.71873228E12, 9302.07142857142], [1.71873258E12, 23029.116071428565], [1.7187321E12, 1378.4468085106382], [1.7187324E12, 14229.818840579705], [1.7187327E12, 24563.10000000001], [1.71873222E12, 6202.8796992481175], [1.71873252E12, 20360.261744966432], [1.71873234E12, 11228.733812949638], [1.71873264E12, 24397.455555555556], [1.71873216E12, 2551.4967320261444]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187327E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.8169934640522882, "minX": 1.7187321E12, "maxY": 15.107142857142863, "series": [{"data": [[1.71873246E12, 10.279761904761909], [1.71873228E12, 5.706349206349203], [1.71873258E12, 15.107142857142863], [1.7187321E12, 3.361702127659576], [1.7187324E12, 8.550724637681158], [1.7187327E12, 12.100000000000003], [1.71873222E12, 4.563909774436089], [1.71873252E12, 10.40268456375839], [1.71873234E12, 7.906474820143886], [1.71873264E12, 14.855555555555558], [1.71873216E12, 2.8169934640522882]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187327E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1074.0, "minX": 1.7187321E12, "maxY": 44400.0, "series": [{"data": [[1.71873246E12, 29791.0], [1.71873228E12, 13141.0], [1.71873258E12, 38360.0], [1.7187321E12, 3702.0], [1.7187324E12, 27441.0], [1.7187327E12, 24607.0], [1.71873222E12, 9110.0], [1.71873252E12, 36175.0], [1.71873234E12, 20528.0], [1.71873264E12, 44400.0], [1.71873216E12, 4006.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71873246E12, 15553.0], [1.71873228E12, 8553.0], [1.71873258E12, 21694.0], [1.7187321E12, 1074.0], [1.7187324E12, 12405.0], [1.7187327E12, 24500.0], [1.71873222E12, 3253.0], [1.71873252E12, 18828.0], [1.71873234E12, 9597.0], [1.71873264E12, 23743.0], [1.71873216E12, 1335.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71873246E12, 18024.1], [1.71873228E12, 10007.6], [1.71873258E12, 23158.0], [1.7187321E12, 1572.0000000000002], [1.7187324E12, 14963.1], [1.7187327E12, 24597.0], [1.71873222E12, 8625.0], [1.71873252E12, 20910.0], [1.71873234E12, 12141.0], [1.71873264E12, 24434.8], [1.71873216E12, 3603.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71873246E12, 28597.300000000003], [1.71873228E12, 12828.610000000004], [1.71873258E12, 38171.50000000001], [1.7187321E12, 3702.0], [1.7187324E12, 25441.859999999924], [1.7187327E12, 24606.58], [1.71873222E12, 9100.82], [1.71873252E12, 34327.5], [1.71873234E12, 20183.599999999995], [1.71873264E12, 37652.69999999998], [1.71873216E12, 4003.3]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71873246E12, 17219.5], [1.71873228E12, 9211.5], [1.71873258E12, 23129.5], [1.7187321E12, 1327.0], [1.7187324E12, 14337.5], [1.7187327E12, 24577.0], [1.71873222E12, 5549.0], [1.71873252E12, 20083.0], [1.71873234E12, 10951.0], [1.71873264E12, 24388.5], [1.71873216E12, 2559.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71873246E12, 18238.399999999994], [1.71873228E12, 10366.5], [1.71873258E12, 23165.05], [1.7187321E12, 1672.6], [1.7187324E12, 14981.0], [1.7187327E12, 24602.95], [1.71873222E12, 8861.1], [1.71873252E12, 21028.0], [1.71873234E12, 12198.0], [1.71873264E12, 24451.85], [1.71873216E12, 3983.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187327E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1656.0, "minX": 1.0, "maxY": 24508.0, "series": [{"data": [[2.0, 5945.5], [34.0, 13719.0], [35.0, 14350.0], [37.0, 14953.0], [39.0, 15573.0], [41.0, 16602.0], [43.0, 17234.0], [45.0, 18011.0], [47.0, 24368.5], [3.0, 7692.5], [50.0, 20081.0], [52.0, 20896.5], [55.0, 22133.0], [57.0, 23148.0], [60.0, 24508.0], [4.0, 8607.0], [5.0, 1656.0], [6.0, 7523.5], [7.0, 2579.0], [8.0, 2574.0], [9.0, 5893.5], [10.0, 3496.5], [11.0, 8583.0], [12.0, 4290.5], [13.0, 4727.0], [14.0, 11279.5], [15.0, 10870.5], [1.0, 3910.0], [16.0, 12427.0], [25.0, 9695.0], [28.0, 10908.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1656.0, "minX": 1.0, "maxY": 24508.0, "series": [{"data": [[2.0, 5945.5], [34.0, 13719.0], [35.0, 14350.0], [37.0, 14953.0], [39.0, 15573.0], [41.0, 16602.0], [43.0, 17234.0], [45.0, 18011.0], [47.0, 24368.5], [3.0, 7692.5], [50.0, 20081.0], [52.0, 20896.5], [55.0, 22133.0], [57.0, 23148.0], [60.0, 24508.0], [4.0, 8607.0], [5.0, 1656.0], [6.0, 7523.5], [7.0, 2579.0], [8.0, 2574.0], [9.0, 5893.5], [10.0, 3496.5], [11.0, 8583.0], [12.0, 4290.5], [13.0, 4727.0], [14.0, 11279.5], [15.0, 10870.5], [1.0, 3910.0], [16.0, 12427.0], [25.0, 9695.0], [28.0, 10908.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.7187321E12, "maxY": 3.0, "series": [{"data": [[1.71873246E12, 2.9166666666666665], [1.71873228E12, 2.216666666666667], [1.71873258E12, 1.95], [1.7187321E12, 0.8666666666666667], [1.7187324E12, 2.433333333333333], [1.7187327E12, 1.0], [1.71873222E12, 2.3333333333333335], [1.71873252E12, 2.6], [1.71873234E12, 2.433333333333333], [1.71873264E12, 3.0], [1.71873216E12, 2.6666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187327E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.7187321E12, "maxY": 3.0, "series": [{"data": [[1.71873246E12, 2.8], [1.71873228E12, 2.1], [1.71873258E12, 1.8666666666666667], [1.7187321E12, 0.7833333333333333], [1.7187324E12, 2.3], [1.7187327E12, 2.0], [1.71873222E12, 2.216666666666667], [1.71873252E12, 2.4833333333333334], [1.71873234E12, 2.316666666666667], [1.71873264E12, 3.0], [1.71873216E12, 2.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187327E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.7187321E12, "maxY": 3.0, "series": [{"data": [[1.71873246E12, 2.8], [1.71873228E12, 2.1], [1.71873258E12, 1.8666666666666667], [1.7187321E12, 0.7833333333333333], [1.7187324E12, 2.3], [1.7187327E12, 2.0], [1.71873222E12, 2.216666666666667], [1.71873252E12, 2.4833333333333334], [1.71873234E12, 2.316666666666667], [1.71873264E12, 3.0], [1.71873216E12, 2.55]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187327E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.7187321E12, "maxY": 3.0, "series": [{"data": [[1.71873246E12, 2.8], [1.71873228E12, 2.1], [1.71873258E12, 1.8666666666666667], [1.7187321E12, 0.7833333333333333], [1.7187324E12, 2.3], [1.7187327E12, 2.0], [1.71873222E12, 2.216666666666667], [1.71873252E12, 2.4833333333333334], [1.71873234E12, 2.316666666666667], [1.71873264E12, 3.0], [1.71873216E12, 2.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187327E12, "title": "Total Transactions Per Second"}},
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

