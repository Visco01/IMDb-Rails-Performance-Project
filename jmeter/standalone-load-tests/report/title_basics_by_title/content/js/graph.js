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
        data: {"result": {"minY": 125.0, "minX": 0.0, "maxY": 7962.0, "series": [{"data": [[0.0, 125.0], [0.1, 129.0], [0.2, 138.0], [0.3, 150.0], [0.4, 154.0], [0.5, 162.0], [0.6, 172.0], [0.7, 184.0], [0.8, 190.0], [0.9, 195.0], [1.0, 195.0], [1.1, 199.0], [1.2, 200.0], [1.3, 205.0], [1.4, 213.0], [1.5, 219.0], [1.6, 222.0], [1.7, 225.0], [1.8, 228.0], [1.9, 243.0], [2.0, 245.0], [2.1, 249.0], [2.2, 251.0], [2.3, 257.0], [2.4, 267.0], [2.5, 279.0], [2.6, 285.0], [2.7, 287.0], [2.8, 291.0], [2.9, 297.0], [3.0, 308.0], [3.1, 310.0], [3.2, 310.0], [3.3, 312.0], [3.4, 314.0], [3.5, 315.0], [3.6, 319.0], [3.7, 322.0], [3.8, 324.0], [3.9, 329.0], [4.0, 331.0], [4.1, 336.0], [4.2, 337.0], [4.3, 339.0], [4.4, 342.0], [4.5, 352.0], [4.6, 361.0], [4.7, 363.0], [4.8, 368.0], [4.9, 374.0], [5.0, 377.0], [5.1, 381.0], [5.2, 383.0], [5.3, 383.0], [5.4, 386.0], [5.5, 388.0], [5.6, 390.0], [5.7, 393.0], [5.8, 397.0], [5.9, 400.0], [6.0, 407.0], [6.1, 407.0], [6.2, 411.0], [6.3, 413.0], [6.4, 416.0], [6.5, 419.0], [6.6, 421.0], [6.7, 422.0], [6.8, 425.0], [6.9, 428.0], [7.0, 432.0], [7.1, 436.0], [7.2, 440.0], [7.3, 447.0], [7.4, 452.0], [7.5, 461.0], [7.6, 465.0], [7.7, 473.0], [7.8, 478.0], [7.9, 481.0], [8.0, 484.0], [8.1, 488.0], [8.2, 491.0], [8.3, 494.0], [8.4, 498.0], [8.5, 500.0], [8.6, 503.0], [8.7, 505.0], [8.8, 506.0], [8.9, 509.0], [9.0, 514.0], [9.1, 515.0], [9.2, 516.0], [9.3, 520.0], [9.4, 525.0], [9.5, 532.0], [9.6, 534.0], [9.7, 536.0], [9.8, 543.0], [9.9, 545.0], [10.0, 546.0], [10.1, 551.0], [10.2, 552.0], [10.3, 562.0], [10.4, 563.0], [10.5, 568.0], [10.6, 572.0], [10.7, 580.0], [10.8, 583.0], [10.9, 588.0], [11.0, 591.0], [11.1, 593.0], [11.2, 594.0], [11.3, 600.0], [11.4, 602.0], [11.5, 606.0], [11.6, 606.0], [11.7, 616.0], [11.8, 618.0], [11.9, 625.0], [12.0, 634.0], [12.1, 640.0], [12.2, 640.0], [12.3, 642.0], [12.4, 643.0], [12.5, 649.0], [12.6, 650.0], [12.7, 650.0], [12.8, 653.0], [12.9, 657.0], [13.0, 663.0], [13.1, 667.0], [13.2, 671.0], [13.3, 674.0], [13.4, 676.0], [13.5, 677.0], [13.6, 681.0], [13.7, 684.0], [13.8, 687.0], [13.9, 690.0], [14.0, 694.0], [14.1, 696.0], [14.2, 703.0], [14.3, 711.0], [14.4, 716.0], [14.5, 730.0], [14.6, 731.0], [14.7, 732.0], [14.8, 734.0], [14.9, 736.0], [15.0, 744.0], [15.1, 752.0], [15.2, 755.0], [15.3, 757.0], [15.4, 764.0], [15.5, 774.0], [15.6, 785.0], [15.7, 788.0], [15.8, 789.0], [15.9, 790.0], [16.0, 795.0], [16.1, 797.0], [16.2, 801.0], [16.3, 805.0], [16.4, 808.0], [16.5, 810.0], [16.6, 819.0], [16.7, 826.0], [16.8, 847.0], [16.9, 849.0], [17.0, 852.0], [17.1, 862.0], [17.2, 872.0], [17.3, 874.0], [17.4, 876.0], [17.5, 881.0], [17.6, 883.0], [17.7, 888.0], [17.8, 889.0], [17.9, 896.0], [18.0, 901.0], [18.1, 906.0], [18.2, 908.0], [18.3, 910.0], [18.4, 912.0], [18.5, 912.0], [18.6, 914.0], [18.7, 916.0], [18.8, 920.0], [18.9, 922.0], [19.0, 926.0], [19.1, 926.0], [19.2, 935.0], [19.3, 942.0], [19.4, 945.0], [19.5, 957.0], [19.6, 962.0], [19.7, 965.0], [19.8, 974.0], [19.9, 975.0], [20.0, 984.0], [20.1, 993.0], [20.2, 994.0], [20.3, 997.0], [20.4, 997.0], [20.5, 1005.0], [20.6, 1008.0], [20.7, 1009.0], [20.8, 1012.0], [20.9, 1021.0], [21.0, 1027.0], [21.1, 1034.0], [21.2, 1038.0], [21.3, 1047.0], [21.4, 1054.0], [21.5, 1060.0], [21.6, 1063.0], [21.7, 1064.0], [21.8, 1070.0], [21.9, 1070.0], [22.0, 1074.0], [22.1, 1076.0], [22.2, 1080.0], [22.3, 1083.0], [22.4, 1087.0], [22.5, 1092.0], [22.6, 1098.0], [22.7, 1104.0], [22.8, 1112.0], [22.9, 1112.0], [23.0, 1118.0], [23.1, 1121.0], [23.2, 1129.0], [23.3, 1132.0], [23.4, 1132.0], [23.5, 1151.0], [23.6, 1154.0], [23.7, 1158.0], [23.8, 1162.0], [23.9, 1168.0], [24.0, 1176.0], [24.1, 1184.0], [24.2, 1185.0], [24.3, 1193.0], [24.4, 1199.0], [24.5, 1215.0], [24.6, 1219.0], [24.7, 1227.0], [24.8, 1233.0], [24.9, 1243.0], [25.0, 1246.0], [25.1, 1247.0], [25.2, 1253.0], [25.3, 1257.0], [25.4, 1260.0], [25.5, 1261.0], [25.6, 1274.0], [25.7, 1278.0], [25.8, 1285.0], [25.9, 1286.0], [26.0, 1297.0], [26.1, 1301.0], [26.2, 1301.0], [26.3, 1304.0], [26.4, 1308.0], [26.5, 1312.0], [26.6, 1316.0], [26.7, 1325.0], [26.8, 1326.0], [26.9, 1335.0], [27.0, 1343.0], [27.1, 1355.0], [27.2, 1363.0], [27.3, 1381.0], [27.4, 1381.0], [27.5, 1383.0], [27.6, 1389.0], [27.7, 1390.0], [27.8, 1395.0], [27.9, 1398.0], [28.0, 1403.0], [28.1, 1416.0], [28.2, 1417.0], [28.3, 1421.0], [28.4, 1426.0], [28.5, 1427.0], [28.6, 1438.0], [28.7, 1443.0], [28.8, 1446.0], [28.9, 1452.0], [29.0, 1460.0], [29.1, 1462.0], [29.2, 1466.0], [29.3, 1477.0], [29.4, 1482.0], [29.5, 1487.0], [29.6, 1491.0], [29.7, 1494.0], [29.8, 1511.0], [29.9, 1518.0], [30.0, 1545.0], [30.1, 1553.0], [30.2, 1564.0], [30.3, 1574.0], [30.4, 1578.0], [30.5, 1585.0], [30.6, 1589.0], [30.7, 1612.0], [30.8, 1620.0], [30.9, 1625.0], [31.0, 1634.0], [31.1, 1644.0], [31.2, 1659.0], [31.3, 1666.0], [31.4, 1670.0], [31.5, 1677.0], [31.6, 1682.0], [31.7, 1683.0], [31.8, 1684.0], [31.9, 1688.0], [32.0, 1691.0], [32.1, 1696.0], [32.2, 1702.0], [32.3, 1705.0], [32.4, 1719.0], [32.5, 1720.0], [32.6, 1733.0], [32.7, 1749.0], [32.8, 1756.0], [32.9, 1767.0], [33.0, 1770.0], [33.1, 1770.0], [33.2, 1773.0], [33.3, 1774.0], [33.4, 1781.0], [33.5, 1790.0], [33.6, 1795.0], [33.7, 1802.0], [33.8, 1804.0], [33.9, 1808.0], [34.0, 1811.0], [34.1, 1816.0], [34.2, 1822.0], [34.3, 1829.0], [34.4, 1842.0], [34.5, 1845.0], [34.6, 1848.0], [34.7, 1858.0], [34.8, 1863.0], [34.9, 1872.0], [35.0, 1873.0], [35.1, 1875.0], [35.2, 1879.0], [35.3, 1881.0], [35.4, 1882.0], [35.5, 1883.0], [35.6, 1889.0], [35.7, 1903.0], [35.8, 1912.0], [35.9, 1915.0], [36.0, 1915.0], [36.1, 1916.0], [36.2, 1921.0], [36.3, 1927.0], [36.4, 1930.0], [36.5, 1935.0], [36.6, 1937.0], [36.7, 1943.0], [36.8, 1947.0], [36.9, 1953.0], [37.0, 1957.0], [37.1, 1963.0], [37.2, 1964.0], [37.3, 1969.0], [37.4, 1971.0], [37.5, 1977.0], [37.6, 1979.0], [37.7, 1981.0], [37.8, 1992.0], [37.9, 1993.0], [38.0, 1997.0], [38.1, 1998.0], [38.2, 2002.0], [38.3, 2012.0], [38.4, 2016.0], [38.5, 2020.0], [38.6, 2022.0], [38.7, 2028.0], [38.8, 2029.0], [38.9, 2035.0], [39.0, 2049.0], [39.1, 2055.0], [39.2, 2064.0], [39.3, 2070.0], [39.4, 2076.0], [39.5, 2079.0], [39.6, 2084.0], [39.7, 2086.0], [39.8, 2089.0], [39.9, 2093.0], [40.0, 2094.0], [40.1, 2098.0], [40.2, 2100.0], [40.3, 2103.0], [40.4, 2110.0], [40.5, 2114.0], [40.6, 2115.0], [40.7, 2116.0], [40.8, 2119.0], [40.9, 2123.0], [41.0, 2131.0], [41.1, 2138.0], [41.2, 2139.0], [41.3, 2142.0], [41.4, 2151.0], [41.5, 2153.0], [41.6, 2161.0], [41.7, 2165.0], [41.8, 2169.0], [41.9, 2171.0], [42.0, 2174.0], [42.1, 2174.0], [42.2, 2176.0], [42.3, 2179.0], [42.4, 2180.0], [42.5, 2183.0], [42.6, 2187.0], [42.7, 2190.0], [42.8, 2193.0], [42.9, 2197.0], [43.0, 2200.0], [43.1, 2203.0], [43.2, 2205.0], [43.3, 2206.0], [43.4, 2208.0], [43.5, 2209.0], [43.6, 2211.0], [43.7, 2213.0], [43.8, 2218.0], [43.9, 2228.0], [44.0, 2229.0], [44.1, 2230.0], [44.2, 2234.0], [44.3, 2237.0], [44.4, 2242.0], [44.5, 2243.0], [44.6, 2244.0], [44.7, 2251.0], [44.8, 2255.0], [44.9, 2257.0], [45.0, 2261.0], [45.1, 2262.0], [45.2, 2265.0], [45.3, 2267.0], [45.4, 2270.0], [45.5, 2271.0], [45.6, 2274.0], [45.7, 2276.0], [45.8, 2278.0], [45.9, 2279.0], [46.0, 2284.0], [46.1, 2285.0], [46.2, 2287.0], [46.3, 2289.0], [46.4, 2292.0], [46.5, 2295.0], [46.6, 2295.0], [46.7, 2298.0], [46.8, 2301.0], [46.9, 2304.0], [47.0, 2308.0], [47.1, 2308.0], [47.2, 2310.0], [47.3, 2315.0], [47.4, 2316.0], [47.5, 2320.0], [47.6, 2323.0], [47.7, 2326.0], [47.8, 2327.0], [47.9, 2328.0], [48.0, 2331.0], [48.1, 2337.0], [48.2, 2343.0], [48.3, 2346.0], [48.4, 2352.0], [48.5, 2356.0], [48.6, 2360.0], [48.7, 2366.0], [48.8, 2367.0], [48.9, 2369.0], [49.0, 2370.0], [49.1, 2371.0], [49.2, 2375.0], [49.3, 2377.0], [49.4, 2379.0], [49.5, 2379.0], [49.6, 2383.0], [49.7, 2384.0], [49.8, 2386.0], [49.9, 2389.0], [50.0, 2392.0], [50.1, 2394.0], [50.2, 2395.0], [50.3, 2397.0], [50.4, 2398.0], [50.5, 2401.0], [50.6, 2403.0], [50.7, 2404.0], [50.8, 2407.0], [50.9, 2408.0], [51.0, 2410.0], [51.1, 2412.0], [51.2, 2417.0], [51.3, 2418.0], [51.4, 2426.0], [51.5, 2429.0], [51.6, 2430.0], [51.7, 2434.0], [51.8, 2435.0], [51.9, 2439.0], [52.0, 2442.0], [52.1, 2446.0], [52.2, 2449.0], [52.3, 2454.0], [52.4, 2455.0], [52.5, 2460.0], [52.6, 2460.0], [52.7, 2462.0], [52.8, 2465.0], [52.9, 2467.0], [53.0, 2473.0], [53.1, 2475.0], [53.2, 2485.0], [53.3, 2485.0], [53.4, 2488.0], [53.5, 2488.0], [53.6, 2490.0], [53.7, 2494.0], [53.8, 2496.0], [53.9, 2498.0], [54.0, 2501.0], [54.1, 2507.0], [54.2, 2507.0], [54.3, 2508.0], [54.4, 2510.0], [54.5, 2512.0], [54.6, 2516.0], [54.7, 2519.0], [54.8, 2526.0], [54.9, 2529.0], [55.0, 2532.0], [55.1, 2539.0], [55.2, 2548.0], [55.3, 2550.0], [55.4, 2559.0], [55.5, 2567.0], [55.6, 2569.0], [55.7, 2573.0], [55.8, 2578.0], [55.9, 2582.0], [56.0, 2586.0], [56.1, 2591.0], [56.2, 2591.0], [56.3, 2594.0], [56.4, 2594.0], [56.5, 2596.0], [56.6, 2598.0], [56.7, 2600.0], [56.8, 2601.0], [56.9, 2602.0], [57.0, 2603.0], [57.1, 2606.0], [57.2, 2606.0], [57.3, 2611.0], [57.4, 2612.0], [57.5, 2617.0], [57.6, 2620.0], [57.7, 2625.0], [57.8, 2626.0], [57.9, 2626.0], [58.0, 2628.0], [58.1, 2630.0], [58.2, 2631.0], [58.3, 2638.0], [58.4, 2639.0], [58.5, 2644.0], [58.6, 2645.0], [58.7, 2649.0], [58.8, 2657.0], [58.9, 2657.0], [59.0, 2660.0], [59.1, 2668.0], [59.2, 2671.0], [59.3, 2678.0], [59.4, 2679.0], [59.5, 2680.0], [59.6, 2681.0], [59.7, 2683.0], [59.8, 2684.0], [59.9, 2685.0], [60.0, 2687.0], [60.1, 2691.0], [60.2, 2692.0], [60.3, 2692.0], [60.4, 2696.0], [60.5, 2700.0], [60.6, 2704.0], [60.7, 2705.0], [60.8, 2707.0], [60.9, 2713.0], [61.0, 2715.0], [61.1, 2718.0], [61.2, 2721.0], [61.3, 2727.0], [61.4, 2731.0], [61.5, 2736.0], [61.6, 2737.0], [61.7, 2748.0], [61.8, 2754.0], [61.9, 2756.0], [62.0, 2761.0], [62.1, 2770.0], [62.2, 2775.0], [62.3, 2776.0], [62.4, 2783.0], [62.5, 2789.0], [62.6, 2792.0], [62.7, 2796.0], [62.8, 2797.0], [62.9, 2798.0], [63.0, 2802.0], [63.1, 2810.0], [63.2, 2816.0], [63.3, 2818.0], [63.4, 2825.0], [63.5, 2830.0], [63.6, 2832.0], [63.7, 2838.0], [63.8, 2845.0], [63.9, 2850.0], [64.0, 2856.0], [64.1, 2858.0], [64.2, 2860.0], [64.3, 2868.0], [64.4, 2869.0], [64.5, 2880.0], [64.6, 2881.0], [64.7, 2887.0], [64.8, 2893.0], [64.9, 2897.0], [65.0, 2899.0], [65.1, 2902.0], [65.2, 2916.0], [65.3, 2920.0], [65.4, 2921.0], [65.5, 2925.0], [65.6, 2929.0], [65.7, 2930.0], [65.8, 2939.0], [65.9, 2942.0], [66.0, 2950.0], [66.1, 2952.0], [66.2, 2956.0], [66.3, 2961.0], [66.4, 2973.0], [66.5, 2990.0], [66.6, 2992.0], [66.7, 2997.0], [66.8, 2998.0], [66.9, 3002.0], [67.0, 3003.0], [67.1, 3007.0], [67.2, 3011.0], [67.3, 3016.0], [67.4, 3029.0], [67.5, 3038.0], [67.6, 3066.0], [67.7, 3084.0], [67.8, 3092.0], [67.9, 3098.0], [68.0, 3101.0], [68.1, 3110.0], [68.2, 3124.0], [68.3, 3131.0], [68.4, 3133.0], [68.5, 3162.0], [68.6, 3180.0], [68.7, 3187.0], [68.8, 3187.0], [68.9, 3189.0], [69.0, 3198.0], [69.1, 3203.0], [69.2, 3210.0], [69.3, 3217.0], [69.4, 3224.0], [69.5, 3243.0], [69.6, 3253.0], [69.7, 3255.0], [69.8, 3272.0], [69.9, 3274.0], [70.0, 3284.0], [70.1, 3303.0], [70.2, 3306.0], [70.3, 3315.0], [70.4, 3325.0], [70.5, 3328.0], [70.6, 3330.0], [70.7, 3343.0], [70.8, 3345.0], [70.9, 3364.0], [71.0, 3370.0], [71.1, 3392.0], [71.2, 3404.0], [71.3, 3416.0], [71.4, 3421.0], [71.5, 3433.0], [71.6, 3441.0], [71.7, 3444.0], [71.8, 3453.0], [71.9, 3469.0], [72.0, 3482.0], [72.1, 3484.0], [72.2, 3490.0], [72.3, 3494.0], [72.4, 3498.0], [72.5, 3505.0], [72.6, 3508.0], [72.7, 3515.0], [72.8, 3519.0], [72.9, 3525.0], [73.0, 3541.0], [73.1, 3543.0], [73.2, 3567.0], [73.3, 3573.0], [73.4, 3582.0], [73.5, 3589.0], [73.6, 3597.0], [73.7, 3611.0], [73.8, 3617.0], [73.9, 3618.0], [74.0, 3630.0], [74.1, 3649.0], [74.2, 3651.0], [74.3, 3669.0], [74.4, 3680.0], [74.5, 3703.0], [74.6, 3708.0], [74.7, 3714.0], [74.8, 3722.0], [74.9, 3738.0], [75.0, 3750.0], [75.1, 3780.0], [75.2, 3789.0], [75.3, 3792.0], [75.4, 3844.0], [75.5, 3854.0], [75.6, 3875.0], [75.7, 3897.0], [75.8, 3908.0], [75.9, 3924.0], [76.0, 3938.0], [76.1, 3939.0], [76.2, 3955.0], [76.3, 3968.0], [76.4, 3985.0], [76.5, 3990.0], [76.6, 3994.0], [76.7, 4003.0], [76.8, 4010.0], [76.9, 4023.0], [77.0, 4036.0], [77.1, 4058.0], [77.2, 4059.0], [77.3, 4079.0], [77.4, 4105.0], [77.5, 4122.0], [77.6, 4135.0], [77.7, 4136.0], [77.8, 4151.0], [77.9, 4173.0], [78.0, 4188.0], [78.1, 4204.0], [78.2, 4209.0], [78.3, 4219.0], [78.4, 4225.0], [78.5, 4245.0], [78.6, 4315.0], [78.7, 4368.0], [78.8, 4399.0], [78.9, 4400.0], [79.0, 4402.0], [79.1, 4432.0], [79.2, 4483.0], [79.3, 4502.0], [79.4, 4521.0], [79.5, 4544.0], [79.6, 4586.0], [79.7, 4588.0], [79.8, 4609.0], [79.9, 4622.0], [80.0, 4633.0], [80.1, 4652.0], [80.2, 4665.0], [80.3, 4695.0], [80.4, 4711.0], [80.5, 4753.0], [80.6, 4773.0], [80.7, 4796.0], [80.8, 4822.0], [80.9, 4888.0], [81.0, 4890.0], [81.1, 4901.0], [81.2, 4914.0], [81.3, 4930.0], [81.4, 4957.0], [81.5, 4960.0], [81.6, 4971.0], [81.7, 4977.0], [81.8, 5013.0], [81.9, 5024.0], [82.0, 5034.0], [82.1, 5056.0], [82.2, 5088.0], [82.3, 5118.0], [82.4, 5126.0], [82.5, 5146.0], [82.6, 5198.0], [82.7, 5221.0], [82.8, 5237.0], [82.9, 5269.0], [83.0, 5275.0], [83.1, 5276.0], [83.2, 5294.0], [83.3, 5298.0], [83.4, 5316.0], [83.5, 5348.0], [83.6, 5366.0], [83.7, 5380.0], [83.8, 5388.0], [83.9, 5401.0], [84.0, 5408.0], [84.1, 5430.0], [84.2, 5454.0], [84.3, 5473.0], [84.4, 5478.0], [84.5, 5498.0], [84.6, 5518.0], [84.7, 5536.0], [84.8, 5540.0], [84.9, 5554.0], [85.0, 5567.0], [85.1, 5572.0], [85.2, 5586.0], [85.3, 5596.0], [85.4, 5605.0], [85.5, 5613.0], [85.6, 5632.0], [85.7, 5641.0], [85.8, 5647.0], [85.9, 5664.0], [86.0, 5681.0], [86.1, 5686.0], [86.2, 5692.0], [86.3, 5700.0], [86.4, 5708.0], [86.5, 5711.0], [86.6, 5722.0], [86.7, 5734.0], [86.8, 5741.0], [86.9, 5759.0], [87.0, 5761.0], [87.1, 5763.0], [87.2, 5781.0], [87.3, 5783.0], [87.4, 5795.0], [87.5, 5813.0], [87.6, 5818.0], [87.7, 5826.0], [87.8, 5841.0], [87.9, 5854.0], [88.0, 5861.0], [88.1, 5873.0], [88.2, 5886.0], [88.3, 5904.0], [88.4, 5905.0], [88.5, 5921.0], [88.6, 5951.0], [88.7, 5962.0], [88.8, 5967.0], [88.9, 5976.0], [89.0, 5994.0], [89.1, 6001.0], [89.2, 6006.0], [89.3, 6014.0], [89.4, 6021.0], [89.5, 6028.0], [89.6, 6039.0], [89.7, 6045.0], [89.8, 6055.0], [89.9, 6078.0], [90.0, 6082.0], [90.1, 6097.0], [90.2, 6099.0], [90.3, 6108.0], [90.4, 6115.0], [90.5, 6119.0], [90.6, 6144.0], [90.7, 6166.0], [90.8, 6181.0], [90.9, 6192.0], [91.0, 6198.0], [91.1, 6213.0], [91.2, 6232.0], [91.3, 6251.0], [91.4, 6262.0], [91.5, 6285.0], [91.6, 6286.0], [91.7, 6296.0], [91.8, 6297.0], [91.9, 6302.0], [92.0, 6320.0], [92.1, 6332.0], [92.2, 6343.0], [92.3, 6356.0], [92.4, 6375.0], [92.5, 6395.0], [92.6, 6406.0], [92.7, 6410.0], [92.8, 6434.0], [92.9, 6440.0], [93.0, 6455.0], [93.1, 6470.0], [93.2, 6475.0], [93.3, 6479.0], [93.4, 6491.0], [93.5, 6504.0], [93.6, 6525.0], [93.7, 6547.0], [93.8, 6553.0], [93.9, 6565.0], [94.0, 6567.0], [94.1, 6582.0], [94.2, 6585.0], [94.3, 6590.0], [94.4, 6612.0], [94.5, 6624.0], [94.6, 6635.0], [94.7, 6648.0], [94.8, 6662.0], [94.9, 6667.0], [95.0, 6673.0], [95.1, 6675.0], [95.2, 6679.0], [95.3, 6681.0], [95.4, 6684.0], [95.5, 6691.0], [95.6, 6739.0], [95.7, 6753.0], [95.8, 6772.0], [95.9, 6778.0], [96.0, 6788.0], [96.1, 6791.0], [96.2, 6798.0], [96.3, 6805.0], [96.4, 6815.0], [96.5, 6821.0], [96.6, 6853.0], [96.7, 6871.0], [96.8, 6887.0], [96.9, 6895.0], [97.0, 6901.0], [97.1, 6914.0], [97.2, 6931.0], [97.3, 6943.0], [97.4, 6951.0], [97.5, 6973.0], [97.6, 6988.0], [97.7, 6997.0], [97.8, 7002.0], [97.9, 7011.0], [98.0, 7050.0], [98.1, 7070.0], [98.2, 7089.0], [98.3, 7097.0], [98.4, 7106.0], [98.5, 7159.0], [98.6, 7188.0], [98.7, 7196.0], [98.8, 7241.0], [98.9, 7260.0], [99.0, 7314.0], [99.1, 7397.0], [99.2, 7408.0], [99.3, 7420.0], [99.4, 7479.0], [99.5, 7489.0], [99.6, 7553.0], [99.7, 7608.0], [99.8, 7646.0], [99.9, 7717.0], [100.0, 7962.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 85.0, "series": [{"data": [[600.0, 65.0], [700.0, 43.0], [800.0, 41.0], [900.0, 55.0], [1000.0, 50.0], [1100.0, 40.0], [1200.0, 37.0], [1300.0, 42.0], [1400.0, 41.0], [1500.0, 19.0], [1600.0, 34.0], [1700.0, 34.0], [1800.0, 44.0], [1900.0, 55.0], [2000.0, 45.0], [2100.0, 64.0], [2200.0, 83.0], [2300.0, 84.0], [2400.0, 77.0], [2500.0, 62.0], [2600.0, 85.0], [2700.0, 55.0], [2800.0, 47.0], [2900.0, 39.0], [3000.0, 26.0], [3100.0, 25.0], [3200.0, 22.0], [3300.0, 25.0], [3400.0, 29.0], [3500.0, 26.0], [3700.0, 19.0], [3600.0, 18.0], [3800.0, 10.0], [3900.0, 20.0], [4000.0, 15.0], [4100.0, 16.0], [4200.0, 11.0], [4300.0, 8.0], [4400.0, 9.0], [4600.0, 12.0], [4500.0, 11.0], [4700.0, 9.0], [4800.0, 8.0], [5100.0, 8.0], [5000.0, 13.0], [4900.0, 14.0], [5200.0, 15.0], [5300.0, 13.0], [5400.0, 14.0], [5500.0, 19.0], [5600.0, 20.0], [5800.0, 19.0], [5700.0, 26.0], [6000.0, 26.0], [5900.0, 17.0], [6100.0, 18.0], [6200.0, 18.0], [6300.0, 17.0], [6600.0, 27.0], [6400.0, 20.0], [6500.0, 19.0], [6800.0, 16.0], [6700.0, 16.0], [6900.0, 17.0], [7000.0, 14.0], [7100.0, 9.0], [7200.0, 5.0], [7400.0, 10.0], [7300.0, 3.0], [7600.0, 4.0], [7500.0, 3.0], [7900.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [100.0, 26.0], [200.0, 40.0], [300.0, 65.0], [400.0, 58.0], [500.0, 63.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 190.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1569.0, "series": [{"data": [[0.0, 190.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 476.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1569.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.70588235294118, "minX": 1.71896112E12, "maxY": 15.0, "series": [{"data": [[1.71896136E12, 15.0], [1.71896154E12, 15.0], [1.71896124E12, 15.0], [1.71896172E12, 14.464285714285712], [1.71896142E12, 15.0], [1.71896112E12, 10.70588235294118], [1.7189616E12, 15.0], [1.7189613E12, 15.0], [1.71896148E12, 15.0], [1.71896118E12, 15.0], [1.71896166E12, 15.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896172E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 511.33333333333337, "minX": 1.0, "maxY": 2899.0, "series": [{"data": [[8.0, 635.25], [2.0, 2899.0], [9.0, 629.0], [10.0, 646.0], [11.0, 830.8], [12.0, 774.0], [3.0, 2819.0], [13.0, 1680.0], [14.0, 1849.5], [15.0, 2827.092069279855], [4.0, 926.0], [1.0, 2316.0], [5.0, 1828.3333333333333], [6.0, 511.33333333333337], [7.0, 580.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[14.88769574944071, 2795.647427293068]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 92.85, "minX": 1.71896112E12, "maxY": 22219.766666666666, "series": [{"data": [[1.71896136E12, 22219.766666666666], [1.71896154E12, 12698.716666666667], [1.71896124E12, 20576.366666666665], [1.71896172E12, 14207.75], [1.71896142E12, 15953.683333333332], [1.71896112E12, 3617.65], [1.7189616E12, 17663.9], [1.7189613E12, 16674.283333333333], [1.71896148E12, 17471.316666666666], [1.71896118E12, 22161.25], [1.71896166E12, 16269.233333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71896136E12, 652.3166666666667], [1.71896154E12, 509.6166666666667], [1.71896124E12, 718.05], [1.71896172E12, 566.6], [1.71896142E12, 579.1666666666666], [1.71896112E12, 92.85], [1.7189616E12, 595.4666666666667], [1.7189613E12, 607.15], [1.71896148E12, 631.6], [1.71896118E12, 720.8333333333334], [1.71896166E12, 605.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896172E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 886.0588235294119, "minX": 1.71896112E12, "maxY": 3714.3681318681306, "series": [{"data": [[1.71896136E12, 2679.8723404255325], [1.71896154E12, 3714.3681318681306], [1.71896124E12, 2436.241106719368], [1.71896172E12, 2615.7653061224473], [1.71896142E12, 3218.092233009709], [1.71896112E12, 886.0588235294119], [1.7189616E12, 2827.0412844036696], [1.7189613E12, 2843.2311320754698], [1.71896148E12, 2716.916666666667], [1.71896118E12, 2322.0624999999986], [1.71896166E12, 3197.2558139534876]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896172E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 884.7352941176471, "minX": 1.71896112E12, "maxY": 3713.8956043956036, "series": [{"data": [[1.71896136E12, 2678.7872340425533], [1.71896154E12, 3713.8956043956036], [1.71896124E12, 2435.4545454545446], [1.71896172E12, 2614.9846938775513], [1.71896142E12, 3217.3398058252437], [1.71896112E12, 884.7352941176471], [1.7189616E12, 2826.366972477063], [1.7189613E12, 2842.165094339624], [1.71896148E12, 2716.263157894736], [1.71896118E12, 2320.72265625], [1.71896166E12, 3196.576744186045]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896172E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.226415094339624, "minX": 1.71896112E12, "maxY": 15.499999999999998, "series": [{"data": [[1.71896136E12, 1.8127659574468078], [1.71896154E12, 3.1758241758241756], [1.71896124E12, 2.2529644268774707], [1.71896172E12, 2.933673469387753], [1.71896142E12, 2.7087378640776714], [1.71896112E12, 15.499999999999998], [1.7189616E12, 2.6834862385321085], [1.7189613E12, 1.226415094339624], [1.71896148E12, 2.381578947368422], [1.71896118E12, 2.14453125], [1.71896166E12, 2.967441860465113]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896172E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 125.0, "minX": 1.71896112E12, "maxY": 7962.0, "series": [{"data": [[1.71896136E12, 7408.0], [1.71896154E12, 7717.0], [1.71896124E12, 7241.0], [1.71896172E12, 6898.0], [1.71896142E12, 7962.0], [1.71896112E12, 3421.0], [1.7189616E12, 7646.0], [1.7189613E12, 7608.0], [1.71896148E12, 7617.0], [1.71896118E12, 6684.0], [1.71896166E12, 7875.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71896136E12, 133.0], [1.71896154E12, 400.0], [1.71896124E12, 139.0], [1.71896172E12, 190.0], [1.71896142E12, 249.0], [1.71896112E12, 128.0], [1.7189616E12, 220.0], [1.7189613E12, 125.0], [1.71896148E12, 215.0], [1.71896118E12, 156.0], [1.71896166E12, 228.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71896136E12, 6121.2], [1.71896154E12, 6803.900000000001], [1.71896124E12, 5762.6], [1.71896172E12, 5736.1], [1.71896142E12, 6795.9], [1.71896112E12, 1907.5], [1.7189616E12, 6013.8], [1.7189613E12, 6238.400000000001], [1.71896148E12, 6056.5], [1.71896118E12, 4662.800000000001], [1.71896166E12, 6460.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71896136E12, 7289.319999999996], [1.71896154E12, 7544.359999999997], [1.71896124E12, 7007.22], [1.71896172E12, 6680.72], [1.71896142E12, 7663.370000000001], [1.71896112E12, 3421.0], [1.7189616E12, 7477.76], [1.7189613E12, 7398.860000000001], [1.71896148E12, 7175.800000000001], [1.71896118E12, 6520.500000000002], [1.71896166E12, 7477.96]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71896136E12, 2328.0], [1.71896154E12, 2823.5], [1.71896124E12, 2089.0], [1.71896172E12, 2187.0], [1.71896142E12, 2575.5], [1.71896112E12, 545.5], [1.7189616E12, 2422.5], [1.7189613E12, 2467.0], [1.71896148E12, 2385.0], [1.71896118E12, 2204.0], [1.71896166E12, 2620.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71896136E12, 6705.199999999999], [1.71896154E12, 7171.75], [1.71896124E12, 6257.499999999999], [1.71896172E12, 6114.699999999998], [1.71896142E12, 7096.65], [1.71896112E12, 3072.25], [1.7189616E12, 6556.549999999998], [1.7189613E12, 6764.65], [1.71896148E12, 6665.599999999999], [1.71896118E12, 5487.149999999999], [1.71896166E12, 6822.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896172E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1635.0, "minX": 1.0, "maxY": 2961.5, "series": [{"data": [[4.0, 2583.5], [2.0, 2386.5], [1.0, 2426.0], [8.0, 2327.0], [9.0, 2261.0], [5.0, 2388.0], [10.0, 1756.0], [11.0, 2961.5], [6.0, 2432.0], [3.0, 2448.0], [12.0, 1635.0], [7.0, 2275.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1635.0, "minX": 1.0, "maxY": 2960.5, "series": [{"data": [[4.0, 2582.5], [2.0, 2384.5], [1.0, 2426.0], [8.0, 2327.0], [9.0, 2259.0], [5.0, 2387.0], [10.0, 1755.0], [11.0, 2960.5], [6.0, 2430.0], [3.0, 2448.0], [12.0, 1635.0], [7.0, 2275.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.71896112E12, "maxY": 4.25, "series": [{"data": [[1.71896136E12, 3.8833333333333333], [1.71896154E12, 2.966666666666667], [1.71896124E12, 4.133333333333334], [1.71896172E12, 3.1166666666666667], [1.71896142E12, 3.4833333333333334], [1.71896112E12, 0.75], [1.7189616E12, 3.716666666666667], [1.7189613E12, 3.65], [1.71896148E12, 3.8], [1.71896118E12, 4.25], [1.71896166E12, 3.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896172E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.71896112E12, "maxY": 4.266666666666667, "series": [{"data": [[1.71896136E12, 3.9166666666666665], [1.71896154E12, 3.033333333333333], [1.71896124E12, 4.216666666666667], [1.71896172E12, 3.2666666666666666], [1.71896142E12, 3.433333333333333], [1.71896112E12, 0.5666666666666667], [1.7189616E12, 3.6333333333333333], [1.7189613E12, 3.533333333333333], [1.71896148E12, 3.8], [1.71896118E12, 4.266666666666667], [1.71896166E12, 3.5833333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896172E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.71896112E12, "maxY": 4.266666666666667, "series": [{"data": [[1.71896136E12, 3.9166666666666665], [1.71896154E12, 3.033333333333333], [1.71896124E12, 4.216666666666667], [1.71896172E12, 3.2666666666666666], [1.71896142E12, 3.433333333333333], [1.71896112E12, 0.5666666666666667], [1.7189616E12, 3.6333333333333333], [1.7189613E12, 3.533333333333333], [1.71896148E12, 3.8], [1.71896118E12, 4.266666666666667], [1.71896166E12, 3.5833333333333335]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896172E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.71896112E12, "maxY": 4.266666666666667, "series": [{"data": [[1.71896136E12, 3.9166666666666665], [1.71896154E12, 3.033333333333333], [1.71896124E12, 4.216666666666667], [1.71896172E12, 3.2666666666666666], [1.71896142E12, 3.433333333333333], [1.71896112E12, 0.5666666666666667], [1.7189616E12, 3.6333333333333333], [1.7189613E12, 3.533333333333333], [1.71896148E12, 3.8], [1.71896118E12, 4.266666666666667], [1.71896166E12, 3.5833333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896172E12, "title": "Total Transactions Per Second"}},
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

