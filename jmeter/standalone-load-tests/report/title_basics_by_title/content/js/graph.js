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
        data: {"result": {"minY": 98.0, "minX": 0.0, "maxY": 7987.0, "series": [{"data": [[0.0, 98.0], [0.1, 110.0], [0.2, 128.0], [0.3, 144.0], [0.4, 146.0], [0.5, 161.0], [0.6, 170.0], [0.7, 178.0], [0.8, 187.0], [0.9, 191.0], [1.0, 201.0], [1.1, 202.0], [1.2, 207.0], [1.3, 210.0], [1.4, 218.0], [1.5, 224.0], [1.6, 228.0], [1.7, 231.0], [1.8, 234.0], [1.9, 236.0], [2.0, 244.0], [2.1, 249.0], [2.2, 255.0], [2.3, 267.0], [2.4, 271.0], [2.5, 274.0], [2.6, 277.0], [2.7, 279.0], [2.8, 288.0], [2.9, 288.0], [3.0, 290.0], [3.1, 298.0], [3.2, 300.0], [3.3, 303.0], [3.4, 308.0], [3.5, 311.0], [3.6, 311.0], [3.7, 318.0], [3.8, 321.0], [3.9, 324.0], [4.0, 325.0], [4.1, 327.0], [4.2, 330.0], [4.3, 333.0], [4.4, 339.0], [4.5, 342.0], [4.6, 343.0], [4.7, 352.0], [4.8, 357.0], [4.9, 368.0], [5.0, 374.0], [5.1, 377.0], [5.2, 378.0], [5.3, 381.0], [5.4, 382.0], [5.5, 384.0], [5.6, 385.0], [5.7, 387.0], [5.8, 388.0], [5.9, 389.0], [6.0, 394.0], [6.1, 395.0], [6.2, 397.0], [6.3, 397.0], [6.4, 401.0], [6.5, 404.0], [6.6, 404.0], [6.7, 406.0], [6.8, 411.0], [6.9, 417.0], [7.0, 419.0], [7.1, 421.0], [7.2, 424.0], [7.3, 433.0], [7.4, 437.0], [7.5, 440.0], [7.6, 444.0], [7.7, 445.0], [7.8, 450.0], [7.9, 456.0], [8.0, 460.0], [8.1, 462.0], [8.2, 471.0], [8.3, 478.0], [8.4, 481.0], [8.5, 484.0], [8.6, 487.0], [8.7, 490.0], [8.8, 492.0], [8.9, 495.0], [9.0, 495.0], [9.1, 498.0], [9.2, 505.0], [9.3, 506.0], [9.4, 507.0], [9.5, 512.0], [9.6, 517.0], [9.7, 522.0], [9.8, 528.0], [9.9, 530.0], [10.0, 531.0], [10.1, 534.0], [10.2, 536.0], [10.3, 538.0], [10.4, 546.0], [10.5, 552.0], [10.6, 553.0], [10.7, 558.0], [10.8, 561.0], [10.9, 564.0], [11.0, 569.0], [11.1, 578.0], [11.2, 581.0], [11.3, 584.0], [11.4, 585.0], [11.5, 588.0], [11.6, 591.0], [11.7, 595.0], [11.8, 596.0], [11.9, 598.0], [12.0, 599.0], [12.1, 605.0], [12.2, 609.0], [12.3, 613.0], [12.4, 616.0], [12.5, 624.0], [12.6, 630.0], [12.7, 632.0], [12.8, 637.0], [12.9, 645.0], [13.0, 653.0], [13.1, 660.0], [13.2, 663.0], [13.3, 669.0], [13.4, 676.0], [13.5, 683.0], [13.6, 686.0], [13.7, 692.0], [13.8, 694.0], [13.9, 700.0], [14.0, 702.0], [14.1, 704.0], [14.2, 709.0], [14.3, 710.0], [14.4, 713.0], [14.5, 715.0], [14.6, 720.0], [14.7, 720.0], [14.8, 723.0], [14.9, 724.0], [15.0, 725.0], [15.1, 728.0], [15.2, 729.0], [15.3, 729.0], [15.4, 733.0], [15.5, 739.0], [15.6, 745.0], [15.7, 750.0], [15.8, 754.0], [15.9, 759.0], [16.0, 762.0], [16.1, 763.0], [16.2, 766.0], [16.3, 771.0], [16.4, 778.0], [16.5, 782.0], [16.6, 785.0], [16.7, 786.0], [16.8, 788.0], [16.9, 793.0], [17.0, 794.0], [17.1, 797.0], [17.2, 801.0], [17.3, 805.0], [17.4, 806.0], [17.5, 810.0], [17.6, 815.0], [17.7, 817.0], [17.8, 819.0], [17.9, 820.0], [18.0, 820.0], [18.1, 823.0], [18.2, 827.0], [18.3, 830.0], [18.4, 832.0], [18.5, 843.0], [18.6, 851.0], [18.7, 854.0], [18.8, 861.0], [18.9, 873.0], [19.0, 875.0], [19.1, 882.0], [19.2, 886.0], [19.3, 890.0], [19.4, 892.0], [19.5, 895.0], [19.6, 910.0], [19.7, 910.0], [19.8, 914.0], [19.9, 914.0], [20.0, 921.0], [20.1, 925.0], [20.2, 928.0], [20.3, 932.0], [20.4, 941.0], [20.5, 950.0], [20.6, 952.0], [20.7, 953.0], [20.8, 955.0], [20.9, 955.0], [21.0, 959.0], [21.1, 962.0], [21.2, 974.0], [21.3, 978.0], [21.4, 986.0], [21.5, 991.0], [21.6, 993.0], [21.7, 996.0], [21.8, 998.0], [21.9, 1002.0], [22.0, 1005.0], [22.1, 1007.0], [22.2, 1012.0], [22.3, 1014.0], [22.4, 1020.0], [22.5, 1036.0], [22.6, 1048.0], [22.7, 1058.0], [22.8, 1062.0], [22.9, 1064.0], [23.0, 1071.0], [23.1, 1083.0], [23.2, 1092.0], [23.3, 1094.0], [23.4, 1097.0], [23.5, 1097.0], [23.6, 1100.0], [23.7, 1106.0], [23.8, 1115.0], [23.9, 1116.0], [24.0, 1118.0], [24.1, 1122.0], [24.2, 1131.0], [24.3, 1133.0], [24.4, 1140.0], [24.5, 1150.0], [24.6, 1158.0], [24.7, 1164.0], [24.8, 1167.0], [24.9, 1168.0], [25.0, 1175.0], [25.1, 1183.0], [25.2, 1192.0], [25.3, 1200.0], [25.4, 1204.0], [25.5, 1206.0], [25.6, 1208.0], [25.7, 1209.0], [25.8, 1216.0], [25.9, 1218.0], [26.0, 1225.0], [26.1, 1228.0], [26.2, 1239.0], [26.3, 1251.0], [26.4, 1256.0], [26.5, 1262.0], [26.6, 1274.0], [26.7, 1285.0], [26.8, 1290.0], [26.9, 1296.0], [27.0, 1299.0], [27.1, 1309.0], [27.2, 1310.0], [27.3, 1326.0], [27.4, 1333.0], [27.5, 1346.0], [27.6, 1346.0], [27.7, 1353.0], [27.8, 1366.0], [27.9, 1376.0], [28.0, 1377.0], [28.1, 1381.0], [28.2, 1393.0], [28.3, 1397.0], [28.4, 1405.0], [28.5, 1417.0], [28.6, 1424.0], [28.7, 1436.0], [28.8, 1442.0], [28.9, 1446.0], [29.0, 1450.0], [29.1, 1453.0], [29.2, 1459.0], [29.3, 1470.0], [29.4, 1492.0], [29.5, 1497.0], [29.6, 1508.0], [29.7, 1512.0], [29.8, 1516.0], [29.9, 1517.0], [30.0, 1521.0], [30.1, 1530.0], [30.2, 1534.0], [30.3, 1539.0], [30.4, 1549.0], [30.5, 1555.0], [30.6, 1558.0], [30.7, 1565.0], [30.8, 1567.0], [30.9, 1573.0], [31.0, 1591.0], [31.1, 1593.0], [31.2, 1597.0], [31.3, 1602.0], [31.4, 1610.0], [31.5, 1612.0], [31.6, 1612.0], [31.7, 1614.0], [31.8, 1616.0], [31.9, 1617.0], [32.0, 1621.0], [32.1, 1624.0], [32.2, 1636.0], [32.3, 1645.0], [32.4, 1649.0], [32.5, 1661.0], [32.6, 1669.0], [32.7, 1671.0], [32.8, 1678.0], [32.9, 1682.0], [33.0, 1684.0], [33.1, 1693.0], [33.2, 1698.0], [33.3, 1701.0], [33.4, 1701.0], [33.5, 1706.0], [33.6, 1714.0], [33.7, 1721.0], [33.8, 1726.0], [33.9, 1755.0], [34.0, 1760.0], [34.1, 1764.0], [34.2, 1772.0], [34.3, 1774.0], [34.4, 1783.0], [34.5, 1785.0], [34.6, 1794.0], [34.7, 1802.0], [34.8, 1805.0], [34.9, 1810.0], [35.0, 1812.0], [35.1, 1822.0], [35.2, 1824.0], [35.3, 1828.0], [35.4, 1837.0], [35.5, 1855.0], [35.6, 1860.0], [35.7, 1863.0], [35.8, 1865.0], [35.9, 1879.0], [36.0, 1881.0], [36.1, 1883.0], [36.2, 1886.0], [36.3, 1887.0], [36.4, 1901.0], [36.5, 1902.0], [36.6, 1906.0], [36.7, 1914.0], [36.8, 1927.0], [36.9, 1933.0], [37.0, 1934.0], [37.1, 1958.0], [37.2, 1967.0], [37.3, 1975.0], [37.4, 1983.0], [37.5, 1984.0], [37.6, 1984.0], [37.7, 1986.0], [37.8, 1990.0], [37.9, 1990.0], [38.0, 1993.0], [38.1, 2006.0], [38.2, 2010.0], [38.3, 2018.0], [38.4, 2024.0], [38.5, 2033.0], [38.6, 2038.0], [38.7, 2044.0], [38.8, 2055.0], [38.9, 2061.0], [39.0, 2067.0], [39.1, 2071.0], [39.2, 2078.0], [39.3, 2082.0], [39.4, 2090.0], [39.5, 2097.0], [39.6, 2102.0], [39.7, 2105.0], [39.8, 2112.0], [39.9, 2116.0], [40.0, 2120.0], [40.1, 2125.0], [40.2, 2128.0], [40.3, 2134.0], [40.4, 2141.0], [40.5, 2153.0], [40.6, 2156.0], [40.7, 2162.0], [40.8, 2166.0], [40.9, 2171.0], [41.0, 2174.0], [41.1, 2180.0], [41.2, 2186.0], [41.3, 2187.0], [41.4, 2189.0], [41.5, 2190.0], [41.6, 2191.0], [41.7, 2193.0], [41.8, 2194.0], [41.9, 2196.0], [42.0, 2198.0], [42.1, 2202.0], [42.2, 2202.0], [42.3, 2207.0], [42.4, 2208.0], [42.5, 2212.0], [42.6, 2214.0], [42.7, 2214.0], [42.8, 2216.0], [42.9, 2220.0], [43.0, 2224.0], [43.1, 2231.0], [43.2, 2237.0], [43.3, 2243.0], [43.4, 2246.0], [43.5, 2250.0], [43.6, 2259.0], [43.7, 2261.0], [43.8, 2267.0], [43.9, 2271.0], [44.0, 2273.0], [44.1, 2275.0], [44.2, 2277.0], [44.3, 2278.0], [44.4, 2281.0], [44.5, 2282.0], [44.6, 2285.0], [44.7, 2288.0], [44.8, 2289.0], [44.9, 2291.0], [45.0, 2291.0], [45.1, 2292.0], [45.2, 2292.0], [45.3, 2294.0], [45.4, 2297.0], [45.5, 2300.0], [45.6, 2304.0], [45.7, 2307.0], [45.8, 2307.0], [45.9, 2308.0], [46.0, 2310.0], [46.1, 2316.0], [46.2, 2319.0], [46.3, 2321.0], [46.4, 2329.0], [46.5, 2333.0], [46.6, 2333.0], [46.7, 2338.0], [46.8, 2341.0], [46.9, 2346.0], [47.0, 2347.0], [47.1, 2354.0], [47.2, 2355.0], [47.3, 2360.0], [47.4, 2370.0], [47.5, 2372.0], [47.6, 2375.0], [47.7, 2376.0], [47.8, 2379.0], [47.9, 2382.0], [48.0, 2384.0], [48.1, 2386.0], [48.2, 2387.0], [48.3, 2389.0], [48.4, 2390.0], [48.5, 2391.0], [48.6, 2392.0], [48.7, 2393.0], [48.8, 2395.0], [48.9, 2396.0], [49.0, 2397.0], [49.1, 2401.0], [49.2, 2402.0], [49.3, 2403.0], [49.4, 2405.0], [49.5, 2406.0], [49.6, 2410.0], [49.7, 2411.0], [49.8, 2413.0], [49.9, 2416.0], [50.0, 2419.0], [50.1, 2421.0], [50.2, 2423.0], [50.3, 2425.0], [50.4, 2433.0], [50.5, 2440.0], [50.6, 2443.0], [50.7, 2445.0], [50.8, 2451.0], [50.9, 2453.0], [51.0, 2457.0], [51.1, 2459.0], [51.2, 2462.0], [51.3, 2468.0], [51.4, 2469.0], [51.5, 2471.0], [51.6, 2474.0], [51.7, 2478.0], [51.8, 2479.0], [51.9, 2484.0], [52.0, 2486.0], [52.1, 2486.0], [52.2, 2492.0], [52.3, 2492.0], [52.4, 2493.0], [52.5, 2494.0], [52.6, 2497.0], [52.7, 2497.0], [52.8, 2498.0], [52.9, 2499.0], [53.0, 2502.0], [53.1, 2502.0], [53.2, 2503.0], [53.3, 2505.0], [53.4, 2508.0], [53.5, 2513.0], [53.6, 2516.0], [53.7, 2521.0], [53.8, 2523.0], [53.9, 2527.0], [54.0, 2528.0], [54.1, 2534.0], [54.2, 2535.0], [54.3, 2544.0], [54.4, 2546.0], [54.5, 2554.0], [54.6, 2556.0], [54.7, 2559.0], [54.8, 2562.0], [54.9, 2569.0], [55.0, 2571.0], [55.1, 2574.0], [55.2, 2575.0], [55.3, 2577.0], [55.4, 2578.0], [55.5, 2580.0], [55.6, 2582.0], [55.7, 2582.0], [55.8, 2583.0], [55.9, 2584.0], [56.0, 2586.0], [56.1, 2588.0], [56.2, 2589.0], [56.3, 2593.0], [56.4, 2597.0], [56.5, 2598.0], [56.6, 2603.0], [56.7, 2605.0], [56.8, 2606.0], [56.9, 2609.0], [57.0, 2612.0], [57.1, 2614.0], [57.2, 2621.0], [57.3, 2622.0], [57.4, 2623.0], [57.5, 2626.0], [57.6, 2636.0], [57.7, 2638.0], [57.8, 2645.0], [57.9, 2645.0], [58.0, 2656.0], [58.1, 2661.0], [58.2, 2669.0], [58.3, 2673.0], [58.4, 2674.0], [58.5, 2679.0], [58.6, 2681.0], [58.7, 2683.0], [58.8, 2685.0], [58.9, 2687.0], [59.0, 2690.0], [59.1, 2693.0], [59.2, 2695.0], [59.3, 2697.0], [59.4, 2699.0], [59.5, 2700.0], [59.6, 2703.0], [59.7, 2707.0], [59.8, 2708.0], [59.9, 2708.0], [60.0, 2710.0], [60.1, 2713.0], [60.2, 2717.0], [60.3, 2719.0], [60.4, 2726.0], [60.5, 2730.0], [60.6, 2733.0], [60.7, 2735.0], [60.8, 2744.0], [60.9, 2748.0], [61.0, 2756.0], [61.1, 2759.0], [61.2, 2767.0], [61.3, 2775.0], [61.4, 2777.0], [61.5, 2779.0], [61.6, 2788.0], [61.7, 2796.0], [61.8, 2798.0], [61.9, 2800.0], [62.0, 2807.0], [62.1, 2811.0], [62.2, 2811.0], [62.3, 2824.0], [62.4, 2825.0], [62.5, 2827.0], [62.6, 2843.0], [62.7, 2844.0], [62.8, 2863.0], [62.9, 2866.0], [63.0, 2875.0], [63.1, 2878.0], [63.2, 2879.0], [63.3, 2883.0], [63.4, 2888.0], [63.5, 2893.0], [63.6, 2900.0], [63.7, 2905.0], [63.8, 2908.0], [63.9, 2910.0], [64.0, 2917.0], [64.1, 2942.0], [64.2, 2951.0], [64.3, 2959.0], [64.4, 2967.0], [64.5, 2980.0], [64.6, 2998.0], [64.7, 3002.0], [64.8, 3004.0], [64.9, 3012.0], [65.0, 3016.0], [65.1, 3017.0], [65.2, 3026.0], [65.3, 3029.0], [65.4, 3037.0], [65.5, 3071.0], [65.6, 3084.0], [65.7, 3088.0], [65.8, 3092.0], [65.9, 3093.0], [66.0, 3101.0], [66.1, 3102.0], [66.2, 3107.0], [66.3, 3115.0], [66.4, 3142.0], [66.5, 3145.0], [66.6, 3145.0], [66.7, 3154.0], [66.8, 3169.0], [66.9, 3181.0], [67.0, 3185.0], [67.1, 3192.0], [67.2, 3194.0], [67.3, 3198.0], [67.4, 3205.0], [67.5, 3205.0], [67.6, 3218.0], [67.7, 3227.0], [67.8, 3237.0], [67.9, 3252.0], [68.0, 3266.0], [68.1, 3277.0], [68.2, 3287.0], [68.3, 3291.0], [68.4, 3300.0], [68.5, 3302.0], [68.6, 3304.0], [68.7, 3314.0], [68.8, 3317.0], [68.9, 3321.0], [69.0, 3328.0], [69.1, 3356.0], [69.2, 3358.0], [69.3, 3366.0], [69.4, 3371.0], [69.5, 3380.0], [69.6, 3386.0], [69.7, 3387.0], [69.8, 3395.0], [69.9, 3396.0], [70.0, 3399.0], [70.1, 3409.0], [70.2, 3413.0], [70.3, 3417.0], [70.4, 3443.0], [70.5, 3463.0], [70.6, 3477.0], [70.7, 3482.0], [70.8, 3489.0], [70.9, 3493.0], [71.0, 3499.0], [71.1, 3515.0], [71.2, 3521.0], [71.3, 3523.0], [71.4, 3532.0], [71.5, 3533.0], [71.6, 3548.0], [71.7, 3553.0], [71.8, 3563.0], [71.9, 3577.0], [72.0, 3581.0], [72.1, 3597.0], [72.2, 3599.0], [72.3, 3605.0], [72.4, 3615.0], [72.5, 3624.0], [72.6, 3631.0], [72.7, 3634.0], [72.8, 3678.0], [72.9, 3681.0], [73.0, 3687.0], [73.1, 3690.0], [73.2, 3703.0], [73.3, 3709.0], [73.4, 3720.0], [73.5, 3733.0], [73.6, 3766.0], [73.7, 3779.0], [73.8, 3784.0], [73.9, 3792.0], [74.0, 3796.0], [74.1, 3814.0], [74.2, 3815.0], [74.3, 3826.0], [74.4, 3832.0], [74.5, 3844.0], [74.6, 3878.0], [74.7, 3887.0], [74.8, 3899.0], [74.9, 3903.0], [75.0, 3912.0], [75.1, 3932.0], [75.2, 3957.0], [75.3, 3975.0], [75.4, 3982.0], [75.5, 4000.0], [75.6, 4016.0], [75.7, 4020.0], [75.8, 4024.0], [75.9, 4036.0], [76.0, 4059.0], [76.1, 4082.0], [76.2, 4092.0], [76.3, 4114.0], [76.4, 4132.0], [76.5, 4141.0], [76.6, 4164.0], [76.7, 4169.0], [76.8, 4188.0], [76.9, 4203.0], [77.0, 4213.0], [77.1, 4219.0], [77.2, 4233.0], [77.3, 4259.0], [77.4, 4302.0], [77.5, 4306.0], [77.6, 4313.0], [77.7, 4325.0], [77.8, 4338.0], [77.9, 4362.0], [78.0, 4377.0], [78.1, 4382.0], [78.2, 4411.0], [78.3, 4420.0], [78.4, 4428.0], [78.5, 4470.0], [78.6, 4473.0], [78.7, 4500.0], [78.8, 4519.0], [78.9, 4528.0], [79.0, 4547.0], [79.1, 4592.0], [79.2, 4603.0], [79.3, 4635.0], [79.4, 4643.0], [79.5, 4646.0], [79.6, 4677.0], [79.7, 4684.0], [79.8, 4703.0], [79.9, 4719.0], [80.0, 4781.0], [80.1, 4812.0], [80.2, 4817.0], [80.3, 4827.0], [80.4, 4830.0], [80.5, 4870.0], [80.6, 4885.0], [80.7, 4890.0], [80.8, 4918.0], [80.9, 4937.0], [81.0, 4972.0], [81.1, 4976.0], [81.2, 4993.0], [81.3, 4999.0], [81.4, 5032.0], [81.5, 5039.0], [81.6, 5043.0], [81.7, 5073.0], [81.8, 5085.0], [81.9, 5094.0], [82.0, 5111.0], [82.1, 5115.0], [82.2, 5125.0], [82.3, 5181.0], [82.4, 5197.0], [82.5, 5207.0], [82.6, 5229.0], [82.7, 5256.0], [82.8, 5290.0], [82.9, 5296.0], [83.0, 5304.0], [83.1, 5312.0], [83.2, 5329.0], [83.3, 5342.0], [83.4, 5364.0], [83.5, 5376.0], [83.6, 5382.0], [83.7, 5398.0], [83.8, 5410.0], [83.9, 5416.0], [84.0, 5431.0], [84.1, 5460.0], [84.2, 5494.0], [84.3, 5503.0], [84.4, 5525.0], [84.5, 5529.0], [84.6, 5575.0], [84.7, 5583.0], [84.8, 5592.0], [84.9, 5599.0], [85.0, 5618.0], [85.1, 5624.0], [85.2, 5634.0], [85.3, 5652.0], [85.4, 5671.0], [85.5, 5683.0], [85.6, 5686.0], [85.7, 5698.0], [85.8, 5705.0], [85.9, 5721.0], [86.0, 5749.0], [86.1, 5757.0], [86.2, 5784.0], [86.3, 5797.0], [86.4, 5805.0], [86.5, 5819.0], [86.6, 5825.0], [86.7, 5839.0], [86.8, 5842.0], [86.9, 5865.0], [87.0, 5870.0], [87.1, 5892.0], [87.2, 5902.0], [87.3, 5905.0], [87.4, 5913.0], [87.5, 5919.0], [87.6, 5952.0], [87.7, 5957.0], [87.8, 5968.0], [87.9, 5980.0], [88.0, 5984.0], [88.1, 5994.0], [88.2, 6022.0], [88.3, 6025.0], [88.4, 6038.0], [88.5, 6047.0], [88.6, 6061.0], [88.7, 6102.0], [88.8, 6106.0], [88.9, 6112.0], [89.0, 6118.0], [89.1, 6162.0], [89.2, 6173.0], [89.3, 6178.0], [89.4, 6187.0], [89.5, 6196.0], [89.6, 6202.0], [89.7, 6205.0], [89.8, 6211.0], [89.9, 6214.0], [90.0, 6220.0], [90.1, 6224.0], [90.2, 6236.0], [90.3, 6253.0], [90.4, 6257.0], [90.5, 6262.0], [90.6, 6272.0], [90.7, 6276.0], [90.8, 6282.0], [90.9, 6285.0], [91.0, 6296.0], [91.1, 6308.0], [91.2, 6313.0], [91.3, 6340.0], [91.4, 6356.0], [91.5, 6362.0], [91.6, 6374.0], [91.7, 6380.0], [91.8, 6390.0], [91.9, 6414.0], [92.0, 6421.0], [92.1, 6423.0], [92.2, 6430.0], [92.3, 6470.0], [92.4, 6479.0], [92.5, 6498.0], [92.6, 6512.0], [92.7, 6515.0], [92.8, 6524.0], [92.9, 6528.0], [93.0, 6538.0], [93.1, 6555.0], [93.2, 6575.0], [93.3, 6581.0], [93.4, 6588.0], [93.5, 6592.0], [93.6, 6593.0], [93.7, 6601.0], [93.8, 6616.0], [93.9, 6618.0], [94.0, 6626.0], [94.1, 6650.0], [94.2, 6676.0], [94.3, 6685.0], [94.4, 6694.0], [94.5, 6703.0], [94.6, 6711.0], [94.7, 6723.0], [94.8, 6731.0], [94.9, 6734.0], [95.0, 6760.0], [95.1, 6770.0], [95.2, 6773.0], [95.3, 6783.0], [95.4, 6796.0], [95.5, 6805.0], [95.6, 6814.0], [95.7, 6819.0], [95.8, 6828.0], [95.9, 6832.0], [96.0, 6851.0], [96.1, 6861.0], [96.2, 6870.0], [96.3, 6874.0], [96.4, 6883.0], [96.5, 6892.0], [96.6, 6897.0], [96.7, 6902.0], [96.8, 6914.0], [96.9, 6933.0], [97.0, 6935.0], [97.1, 6966.0], [97.2, 6974.0], [97.3, 6998.0], [97.4, 7008.0], [97.5, 7024.0], [97.6, 7069.0], [97.7, 7082.0], [97.8, 7116.0], [97.9, 7137.0], [98.0, 7162.0], [98.1, 7177.0], [98.2, 7187.0], [98.3, 7198.0], [98.4, 7222.0], [98.5, 7236.0], [98.6, 7257.0], [98.7, 7285.0], [98.8, 7287.0], [98.9, 7303.0], [99.0, 7315.0], [99.1, 7389.0], [99.2, 7403.0], [99.3, 7424.0], [99.4, 7446.0], [99.5, 7490.0], [99.6, 7582.0], [99.7, 7612.0], [99.8, 7666.0], [99.9, 7766.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 86.0, "series": [{"data": [[0.0, 1.0], [600.0, 41.0], [700.0, 73.0], [800.0, 52.0], [900.0, 52.0], [1000.0, 38.0], [1100.0, 38.0], [1200.0, 39.0], [1300.0, 30.0], [1400.0, 26.0], [1500.0, 38.0], [1600.0, 44.0], [1700.0, 32.0], [1800.0, 38.0], [1900.0, 37.0], [2000.0, 33.0], [2100.0, 56.0], [2200.0, 76.0], [2300.0, 79.0], [2400.0, 86.0], [2500.0, 80.0], [2600.0, 64.0], [2700.0, 53.0], [2800.0, 39.0], [2900.0, 24.0], [3000.0, 30.0], [3100.0, 30.0], [3300.0, 37.0], [3200.0, 23.0], [3400.0, 22.0], [3500.0, 26.0], [3600.0, 22.0], [3700.0, 18.0], [3800.0, 18.0], [3900.0, 15.0], [4000.0, 16.0], [4300.0, 16.0], [4100.0, 15.0], [4200.0, 11.0], [4400.0, 13.0], [4500.0, 10.0], [4600.0, 14.0], [4700.0, 7.0], [4800.0, 14.0], [5100.0, 11.0], [5000.0, 14.0], [4900.0, 13.0], [5300.0, 18.0], [5200.0, 11.0], [5400.0, 12.0], [5600.0, 18.0], [5500.0, 14.0], [5700.0, 14.0], [5800.0, 18.0], [5900.0, 21.0], [6100.0, 20.0], [6000.0, 12.0], [6200.0, 33.0], [6300.0, 19.0], [6400.0, 14.0], [6500.0, 25.0], [6600.0, 17.0], [6800.0, 28.0], [6900.0, 15.0], [6700.0, 22.0], [7000.0, 10.0], [7100.0, 12.0], [7200.0, 12.0], [7300.0, 7.0], [7400.0, 7.0], [7600.0, 5.0], [7500.0, 3.0], [7700.0, 1.0], [7900.0, 2.0], [100.0, 21.0], [200.0, 47.0], [300.0, 73.0], [400.0, 61.0], [500.0, 64.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 203.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1564.0, "series": [{"data": [[0.0, 203.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 453.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1564.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.2, "minX": 1.71897432E12, "maxY": 15.0, "series": [{"data": [[1.71897444E12, 15.0], [1.71897462E12, 15.0], [1.71897492E12, 8.2], [1.71897456E12, 15.0], [1.71897474E12, 15.0], [1.71897486E12, 15.0], [1.71897438E12, 15.0], [1.71897468E12, 15.0], [1.71897432E12, 14.340248962655613], [1.7189745E12, 15.0], [1.7189748E12, 15.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897492E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 613.75, "minX": 1.0, "maxY": 2863.0813045475393, "series": [{"data": [[8.0, 897.0], [9.0, 875.75], [10.0, 852.0], [11.0, 1673.25], [12.0, 1257.0], [13.0, 1462.25], [14.0, 613.75], [15.0, 2863.0813045475393], [4.0, 1926.4], [1.0, 2502.0], [5.0, 1282.5], [6.0, 997.5], [7.0, 740.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[14.882432432432447, 2830.793243243239]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 45.5, "minX": 1.71897432E12, "maxY": 21534.166666666668, "series": [{"data": [[1.71897444E12, 19173.233333333334], [1.71897462E12, 15029.0], [1.71897492E12, 812.4], [1.71897456E12, 17161.45], [1.71897474E12, 15486.133333333333], [1.71897486E12, 16410.35], [1.71897438E12, 19214.95], [1.71897468E12, 14638.633333333333], [1.71897432E12, 21413.966666666667], [1.7189745E12, 21534.166666666668], [1.7189748E12, 17644.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71897444E12, 668.2666666666667], [1.71897462E12, 607.9833333333333], [1.71897492E12, 45.5], [1.71897456E12, 567.5666666666667], [1.71897474E12, 568.95], [1.71897486E12, 651.55], [1.71897438E12, 664.85], [1.71897468E12, 532.5], [1.71897432E12, 673.5666666666667], [1.7189745E12, 663.1], [1.7189748E12, 591.7833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897492E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2109.4522821576757, "minX": 1.71897432E12, "maxY": 3496.663157894737, "series": [{"data": [[1.71897444E12, 2535.794871794872], [1.71897462E12, 3028.6529680365297], [1.71897492E12, 2456.4666666666662], [1.71897456E12, 3223.1280788177337], [1.71897474E12, 3191.48309178744], [1.71897486E12, 2779.9118942731275], [1.71897438E12, 2642.2145922746786], [1.71897468E12, 3496.663157894737], [1.71897432E12, 2109.4522821576757], [1.7189745E12, 2604.466386554623], [1.7189748E12, 2988.957746478872]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897492E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2108.531120331949, "minX": 1.71897432E12, "maxY": 3496.084210526314, "series": [{"data": [[1.71897444E12, 2534.572649572649], [1.71897462E12, 3028.187214611874], [1.71897492E12, 2456.0666666666666], [1.71897456E12, 3222.339901477834], [1.71897474E12, 3190.719806763283], [1.71897486E12, 2779.2819383259916], [1.71897438E12, 2641.261802575107], [1.71897468E12, 3496.084210526314], [1.71897432E12, 2108.531120331949], [1.7189745E12, 2603.449579831933], [1.7189748E12, 2988.1924882629114]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897492E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71897432E12, "maxY": 2.6894736842105242, "series": [{"data": [[1.71897444E12, 2.1153846153846136], [1.71897462E12, 2.369863013698633], [1.71897492E12, 0.0], [1.71897456E12, 2.522167487684729], [1.71897474E12, 2.4975845410628024], [1.71897486E12, 2.3171806167400875], [1.71897438E12, 2.1502145922746774], [1.71897468E12, 2.6894736842105242], [1.71897432E12, 2.12863070539419], [1.7189745E12, 2.1260504201680694], [1.7189748E12, 2.417840375586853]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897492E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 98.0, "minX": 1.71897432E12, "maxY": 7987.0, "series": [{"data": [[1.71897444E12, 7230.0], [1.71897462E12, 7613.0], [1.71897492E12, 4684.0], [1.71897456E12, 7462.0], [1.71897474E12, 7490.0], [1.71897486E12, 7182.0], [1.71897438E12, 7257.0], [1.71897468E12, 7677.0], [1.71897432E12, 7035.0], [1.7189745E12, 7987.0], [1.7189748E12, 7919.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71897444E12, 109.0], [1.71897462E12, 195.0], [1.71897492E12, 426.0], [1.71897456E12, 218.0], [1.71897474E12, 300.0], [1.71897486E12, 176.0], [1.71897438E12, 233.0], [1.71897468E12, 308.0], [1.71897432E12, 98.0], [1.7189745E12, 122.0], [1.7189748E12, 155.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71897444E12, 6145.5], [1.71897462E12, 6380.0], [1.71897492E12, 4258.6], [1.71897456E12, 6599.8], [1.71897474E12, 6504.000000000001], [1.71897486E12, 6176.000000000001], [1.71897438E12, 5481.4], [1.71897468E12, 6829.8], [1.71897432E12, 5121.400000000001], [1.7189745E12, 6104.2], [1.7189748E12, 5965.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71897444E12, 6967.95], [1.71897462E12, 7400.2], [1.71897492E12, 4684.0], [1.71897456E12, 7425.920000000001], [1.71897474E12, 7280.24], [1.71897486E12, 6905.64], [1.71897438E12, 7118.339999999999], [1.71897468E12, 7616.9400000000005], [1.71897432E12, 6897.199999999999], [1.7189745E12, 7705.939999999998], [1.7189748E12, 7623.299999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71897444E12, 2254.5], [1.71897462E12, 2588.0], [1.71897492E12, 2457.0], [1.71897456E12, 2638.0], [1.71897474E12, 2588.0], [1.71897486E12, 2307.0], [1.71897438E12, 2305.0], [1.71897468E12, 2773.0], [1.71897432E12, 1823.0], [1.7189745E12, 2194.5], [1.7189748E12, 2535.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71897444E12, 6582.25], [1.71897462E12, 6796.0], [1.71897492E12, 4684.0], [1.71897456E12, 7059.4], [1.71897474E12, 6831.599999999999], [1.71897486E12, 6567.0], [1.71897438E12, 6279.2], [1.71897468E12, 7098.449999999998], [1.71897432E12, 6028.299999999998], [1.7189745E12, 7156.799999999999], [1.7189748E12, 6522.599999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897492E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2106.5, "minX": 1.0, "maxY": 2958.0, "series": [{"data": [[2.0, 2510.0], [4.0, 2485.5], [8.0, 2522.0], [1.0, 2394.5], [9.0, 2106.5], [5.0, 2325.0], [10.0, 2277.5], [11.0, 2126.0], [3.0, 2493.0], [6.0, 2323.0], [12.0, 2958.0], [7.0, 2372.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2105.5, "minX": 1.0, "maxY": 2957.5, "series": [{"data": [[2.0, 2509.0], [4.0, 2484.5], [8.0, 2521.0], [1.0, 2393.0], [9.0, 2105.5], [5.0, 2324.0], [10.0, 2276.0], [11.0, 2123.0], [3.0, 2492.5], [6.0, 2323.0], [12.0, 2957.5], [7.0, 2372.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71897432E12, "maxY": 4.15, "series": [{"data": [[1.71897444E12, 3.9166666666666665], [1.71897462E12, 3.55], [1.71897492E12, 0.1], [1.71897456E12, 3.3833333333333333], [1.71897474E12, 3.4833333333333334], [1.71897486E12, 3.716666666666667], [1.71897438E12, 3.9166666666666665], [1.71897468E12, 3.216666666666667], [1.71897432E12, 4.15], [1.7189745E12, 4.0], [1.7189748E12, 3.566666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897492E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.71897432E12, "maxY": 4.016666666666667, "series": [{"data": [[1.71897444E12, 3.9], [1.71897462E12, 3.65], [1.71897492E12, 0.25], [1.71897456E12, 3.3833333333333333], [1.71897474E12, 3.45], [1.71897486E12, 3.783333333333333], [1.71897438E12, 3.8833333333333333], [1.71897468E12, 3.1666666666666665], [1.71897432E12, 4.016666666666667], [1.7189745E12, 3.966666666666667], [1.7189748E12, 3.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897492E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.71897432E12, "maxY": 4.016666666666667, "series": [{"data": [[1.71897444E12, 3.9], [1.71897462E12, 3.65], [1.71897492E12, 0.25], [1.71897456E12, 3.3833333333333333], [1.71897474E12, 3.45], [1.71897486E12, 3.783333333333333], [1.71897438E12, 3.8833333333333333], [1.71897468E12, 3.1666666666666665], [1.71897432E12, 4.016666666666667], [1.7189745E12, 3.966666666666667], [1.7189748E12, 3.55]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897492E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.71897432E12, "maxY": 4.016666666666667, "series": [{"data": [[1.71897444E12, 3.9], [1.71897462E12, 3.65], [1.71897492E12, 0.25], [1.71897456E12, 3.3833333333333333], [1.71897474E12, 3.45], [1.71897486E12, 3.783333333333333], [1.71897438E12, 3.8833333333333333], [1.71897468E12, 3.1666666666666665], [1.71897432E12, 4.016666666666667], [1.7189745E12, 3.966666666666667], [1.7189748E12, 3.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897492E12, "title": "Total Transactions Per Second"}},
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

