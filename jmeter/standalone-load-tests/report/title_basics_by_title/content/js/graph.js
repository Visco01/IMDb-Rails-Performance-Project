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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 8684.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 103.0], [0.3, 109.0], [0.4, 116.0], [0.5, 120.0], [0.6, 123.0], [0.7, 126.0], [0.8, 130.0], [0.9, 134.0], [1.0, 138.0], [1.1, 140.0], [1.2, 142.0], [1.3, 145.0], [1.4, 146.0], [1.5, 149.0], [1.6, 151.0], [1.7, 154.0], [1.8, 156.0], [1.9, 157.0], [2.0, 160.0], [2.1, 162.0], [2.2, 164.0], [2.3, 167.0], [2.4, 168.0], [2.5, 171.0], [2.6, 172.0], [2.7, 173.0], [2.8, 174.0], [2.9, 176.0], [3.0, 177.0], [3.1, 179.0], [3.2, 180.0], [3.3, 181.0], [3.4, 183.0], [3.5, 185.0], [3.6, 185.0], [3.7, 187.0], [3.8, 187.0], [3.9, 190.0], [4.0, 191.0], [4.1, 192.0], [4.2, 193.0], [4.3, 194.0], [4.4, 195.0], [4.5, 197.0], [4.6, 197.0], [4.7, 199.0], [4.8, 201.0], [4.9, 203.0], [5.0, 203.0], [5.1, 206.0], [5.2, 208.0], [5.3, 210.0], [5.4, 212.0], [5.5, 213.0], [5.6, 214.0], [5.7, 216.0], [5.8, 218.0], [5.9, 219.0], [6.0, 220.0], [6.1, 221.0], [6.2, 222.0], [6.3, 224.0], [6.4, 226.0], [6.5, 227.0], [6.6, 229.0], [6.7, 230.0], [6.8, 233.0], [6.9, 234.0], [7.0, 236.0], [7.1, 238.0], [7.2, 240.0], [7.3, 241.0], [7.4, 243.0], [7.5, 244.0], [7.6, 246.0], [7.7, 247.0], [7.8, 249.0], [7.9, 251.0], [8.0, 254.0], [8.1, 255.0], [8.2, 256.0], [8.3, 258.0], [8.4, 260.0], [8.5, 261.0], [8.6, 263.0], [8.7, 265.0], [8.8, 266.0], [8.9, 267.0], [9.0, 269.0], [9.1, 270.0], [9.2, 272.0], [9.3, 274.0], [9.4, 275.0], [9.5, 278.0], [9.6, 280.0], [9.7, 282.0], [9.8, 284.0], [9.9, 286.0], [10.0, 288.0], [10.1, 289.0], [10.2, 292.0], [10.3, 293.0], [10.4, 295.0], [10.5, 297.0], [10.6, 300.0], [10.7, 302.0], [10.8, 305.0], [10.9, 307.0], [11.0, 309.0], [11.1, 311.0], [11.2, 312.0], [11.3, 315.0], [11.4, 316.0], [11.5, 317.0], [11.6, 320.0], [11.7, 322.0], [11.8, 323.0], [11.9, 324.0], [12.0, 326.0], [12.1, 329.0], [12.2, 331.0], [12.3, 332.0], [12.4, 334.0], [12.5, 338.0], [12.6, 341.0], [12.7, 345.0], [12.8, 346.0], [12.9, 348.0], [13.0, 351.0], [13.1, 354.0], [13.2, 355.0], [13.3, 358.0], [13.4, 359.0], [13.5, 362.0], [13.6, 366.0], [13.7, 369.0], [13.8, 373.0], [13.9, 377.0], [14.0, 379.0], [14.1, 382.0], [14.2, 383.0], [14.3, 385.0], [14.4, 386.0], [14.5, 388.0], [14.6, 390.0], [14.7, 391.0], [14.8, 392.0], [14.9, 394.0], [15.0, 396.0], [15.1, 397.0], [15.2, 399.0], [15.3, 401.0], [15.4, 403.0], [15.5, 405.0], [15.6, 407.0], [15.7, 410.0], [15.8, 411.0], [15.9, 413.0], [16.0, 415.0], [16.1, 416.0], [16.2, 418.0], [16.3, 418.0], [16.4, 422.0], [16.5, 423.0], [16.6, 424.0], [16.7, 428.0], [16.8, 429.0], [16.9, 431.0], [17.0, 432.0], [17.1, 434.0], [17.2, 437.0], [17.3, 438.0], [17.4, 441.0], [17.5, 443.0], [17.6, 445.0], [17.7, 447.0], [17.8, 449.0], [17.9, 450.0], [18.0, 452.0], [18.1, 454.0], [18.2, 457.0], [18.3, 458.0], [18.4, 461.0], [18.5, 465.0], [18.6, 468.0], [18.7, 471.0], [18.8, 473.0], [18.9, 474.0], [19.0, 476.0], [19.1, 478.0], [19.2, 481.0], [19.3, 483.0], [19.4, 486.0], [19.5, 487.0], [19.6, 488.0], [19.7, 491.0], [19.8, 494.0], [19.9, 496.0], [20.0, 497.0], [20.1, 499.0], [20.2, 499.0], [20.3, 501.0], [20.4, 502.0], [20.5, 506.0], [20.6, 510.0], [20.7, 514.0], [20.8, 516.0], [20.9, 519.0], [21.0, 520.0], [21.1, 523.0], [21.2, 526.0], [21.3, 528.0], [21.4, 529.0], [21.5, 534.0], [21.6, 536.0], [21.7, 537.0], [21.8, 540.0], [21.9, 542.0], [22.0, 545.0], [22.1, 547.0], [22.2, 548.0], [22.3, 549.0], [22.4, 553.0], [22.5, 557.0], [22.6, 559.0], [22.7, 562.0], [22.8, 564.0], [22.9, 568.0], [23.0, 572.0], [23.1, 574.0], [23.2, 576.0], [23.3, 580.0], [23.4, 584.0], [23.5, 586.0], [23.6, 589.0], [23.7, 592.0], [23.8, 593.0], [23.9, 597.0], [24.0, 602.0], [24.1, 604.0], [24.2, 607.0], [24.3, 610.0], [24.4, 611.0], [24.5, 614.0], [24.6, 618.0], [24.7, 621.0], [24.8, 623.0], [24.9, 625.0], [25.0, 627.0], [25.1, 628.0], [25.2, 631.0], [25.3, 634.0], [25.4, 637.0], [25.5, 639.0], [25.6, 641.0], [25.7, 643.0], [25.8, 646.0], [25.9, 648.0], [26.0, 653.0], [26.1, 656.0], [26.2, 659.0], [26.3, 663.0], [26.4, 666.0], [26.5, 667.0], [26.6, 669.0], [26.7, 671.0], [26.8, 673.0], [26.9, 676.0], [27.0, 678.0], [27.1, 681.0], [27.2, 687.0], [27.3, 688.0], [27.4, 690.0], [27.5, 693.0], [27.6, 695.0], [27.7, 698.0], [27.8, 701.0], [27.9, 703.0], [28.0, 709.0], [28.1, 712.0], [28.2, 715.0], [28.3, 716.0], [28.4, 718.0], [28.5, 720.0], [28.6, 722.0], [28.7, 726.0], [28.8, 730.0], [28.9, 733.0], [29.0, 738.0], [29.1, 741.0], [29.2, 744.0], [29.3, 745.0], [29.4, 748.0], [29.5, 750.0], [29.6, 751.0], [29.7, 754.0], [29.8, 757.0], [29.9, 759.0], [30.0, 762.0], [30.1, 768.0], [30.2, 769.0], [30.3, 773.0], [30.4, 774.0], [30.5, 780.0], [30.6, 784.0], [30.7, 787.0], [30.8, 794.0], [30.9, 796.0], [31.0, 799.0], [31.1, 800.0], [31.2, 804.0], [31.3, 809.0], [31.4, 812.0], [31.5, 816.0], [31.6, 818.0], [31.7, 820.0], [31.8, 823.0], [31.9, 828.0], [32.0, 831.0], [32.1, 835.0], [32.2, 836.0], [32.3, 840.0], [32.4, 843.0], [32.5, 846.0], [32.6, 849.0], [32.7, 852.0], [32.8, 854.0], [32.9, 860.0], [33.0, 863.0], [33.1, 870.0], [33.2, 872.0], [33.3, 875.0], [33.4, 877.0], [33.5, 884.0], [33.6, 886.0], [33.7, 889.0], [33.8, 893.0], [33.9, 900.0], [34.0, 905.0], [34.1, 909.0], [34.2, 912.0], [34.3, 915.0], [34.4, 920.0], [34.5, 923.0], [34.6, 926.0], [34.7, 929.0], [34.8, 935.0], [34.9, 938.0], [35.0, 941.0], [35.1, 946.0], [35.2, 950.0], [35.3, 953.0], [35.4, 958.0], [35.5, 965.0], [35.6, 970.0], [35.7, 974.0], [35.8, 979.0], [35.9, 986.0], [36.0, 989.0], [36.1, 993.0], [36.2, 1000.0], [36.3, 1004.0], [36.4, 1010.0], [36.5, 1014.0], [36.6, 1021.0], [36.7, 1024.0], [36.8, 1029.0], [36.9, 1032.0], [37.0, 1036.0], [37.1, 1040.0], [37.2, 1046.0], [37.3, 1050.0], [37.4, 1053.0], [37.5, 1056.0], [37.6, 1063.0], [37.7, 1070.0], [37.8, 1074.0], [37.9, 1080.0], [38.0, 1083.0], [38.1, 1086.0], [38.2, 1096.0], [38.3, 1099.0], [38.4, 1104.0], [38.5, 1109.0], [38.6, 1113.0], [38.7, 1116.0], [38.8, 1121.0], [38.9, 1127.0], [39.0, 1132.0], [39.1, 1136.0], [39.2, 1141.0], [39.3, 1148.0], [39.4, 1153.0], [39.5, 1159.0], [39.6, 1164.0], [39.7, 1169.0], [39.8, 1177.0], [39.9, 1182.0], [40.0, 1187.0], [40.1, 1194.0], [40.2, 1201.0], [40.3, 1202.0], [40.4, 1208.0], [40.5, 1212.0], [40.6, 1215.0], [40.7, 1221.0], [40.8, 1224.0], [40.9, 1230.0], [41.0, 1231.0], [41.1, 1237.0], [41.2, 1239.0], [41.3, 1243.0], [41.4, 1248.0], [41.5, 1254.0], [41.6, 1260.0], [41.7, 1266.0], [41.8, 1270.0], [41.9, 1273.0], [42.0, 1280.0], [42.1, 1284.0], [42.2, 1287.0], [42.3, 1293.0], [42.4, 1298.0], [42.5, 1301.0], [42.6, 1309.0], [42.7, 1313.0], [42.8, 1321.0], [42.9, 1324.0], [43.0, 1327.0], [43.1, 1333.0], [43.2, 1339.0], [43.3, 1343.0], [43.4, 1347.0], [43.5, 1351.0], [43.6, 1353.0], [43.7, 1358.0], [43.8, 1363.0], [43.9, 1367.0], [44.0, 1376.0], [44.1, 1377.0], [44.2, 1383.0], [44.3, 1388.0], [44.4, 1391.0], [44.5, 1399.0], [44.6, 1404.0], [44.7, 1413.0], [44.8, 1418.0], [44.9, 1423.0], [45.0, 1429.0], [45.1, 1432.0], [45.2, 1435.0], [45.3, 1439.0], [45.4, 1446.0], [45.5, 1451.0], [45.6, 1457.0], [45.7, 1459.0], [45.8, 1469.0], [45.9, 1476.0], [46.0, 1481.0], [46.1, 1484.0], [46.2, 1489.0], [46.3, 1493.0], [46.4, 1503.0], [46.5, 1513.0], [46.6, 1520.0], [46.7, 1524.0], [46.8, 1530.0], [46.9, 1537.0], [47.0, 1541.0], [47.1, 1544.0], [47.2, 1550.0], [47.3, 1556.0], [47.4, 1565.0], [47.5, 1568.0], [47.6, 1576.0], [47.7, 1580.0], [47.8, 1584.0], [47.9, 1590.0], [48.0, 1593.0], [48.1, 1598.0], [48.2, 1602.0], [48.3, 1608.0], [48.4, 1616.0], [48.5, 1621.0], [48.6, 1626.0], [48.7, 1630.0], [48.8, 1637.0], [48.9, 1641.0], [49.0, 1646.0], [49.1, 1651.0], [49.2, 1658.0], [49.3, 1667.0], [49.4, 1672.0], [49.5, 1675.0], [49.6, 1681.0], [49.7, 1689.0], [49.8, 1698.0], [49.9, 1706.0], [50.0, 1710.0], [50.1, 1716.0], [50.2, 1720.0], [50.3, 1724.0], [50.4, 1729.0], [50.5, 1735.0], [50.6, 1739.0], [50.7, 1748.0], [50.8, 1753.0], [50.9, 1756.0], [51.0, 1765.0], [51.1, 1773.0], [51.2, 1780.0], [51.3, 1785.0], [51.4, 1794.0], [51.5, 1802.0], [51.6, 1807.0], [51.7, 1813.0], [51.8, 1819.0], [51.9, 1823.0], [52.0, 1829.0], [52.1, 1836.0], [52.2, 1839.0], [52.3, 1842.0], [52.4, 1848.0], [52.5, 1855.0], [52.6, 1864.0], [52.7, 1878.0], [52.8, 1884.0], [52.9, 1889.0], [53.0, 1896.0], [53.1, 1906.0], [53.2, 1913.0], [53.3, 1919.0], [53.4, 1922.0], [53.5, 1930.0], [53.6, 1939.0], [53.7, 1941.0], [53.8, 1950.0], [53.9, 1957.0], [54.0, 1963.0], [54.1, 1975.0], [54.2, 1980.0], [54.3, 1985.0], [54.4, 1989.0], [54.5, 1994.0], [54.6, 2001.0], [54.7, 2009.0], [54.8, 2012.0], [54.9, 2022.0], [55.0, 2025.0], [55.1, 2030.0], [55.2, 2034.0], [55.3, 2049.0], [55.4, 2054.0], [55.5, 2059.0], [55.6, 2067.0], [55.7, 2072.0], [55.8, 2080.0], [55.9, 2093.0], [56.0, 2099.0], [56.1, 2103.0], [56.2, 2110.0], [56.3, 2118.0], [56.4, 2124.0], [56.5, 2131.0], [56.6, 2145.0], [56.7, 2151.0], [56.8, 2158.0], [56.9, 2165.0], [57.0, 2172.0], [57.1, 2179.0], [57.2, 2185.0], [57.3, 2191.0], [57.4, 2199.0], [57.5, 2201.0], [57.6, 2210.0], [57.7, 2216.0], [57.8, 2222.0], [57.9, 2227.0], [58.0, 2234.0], [58.1, 2245.0], [58.2, 2251.0], [58.3, 2256.0], [58.4, 2264.0], [58.5, 2273.0], [58.6, 2281.0], [58.7, 2287.0], [58.8, 2299.0], [58.9, 2305.0], [59.0, 2308.0], [59.1, 2315.0], [59.2, 2321.0], [59.3, 2328.0], [59.4, 2339.0], [59.5, 2344.0], [59.6, 2350.0], [59.7, 2354.0], [59.8, 2361.0], [59.9, 2369.0], [60.0, 2380.0], [60.1, 2389.0], [60.2, 2400.0], [60.3, 2406.0], [60.4, 2412.0], [60.5, 2417.0], [60.6, 2422.0], [60.7, 2431.0], [60.8, 2440.0], [60.9, 2451.0], [61.0, 2458.0], [61.1, 2472.0], [61.2, 2477.0], [61.3, 2483.0], [61.4, 2488.0], [61.5, 2497.0], [61.6, 2503.0], [61.7, 2510.0], [61.8, 2513.0], [61.9, 2518.0], [62.0, 2535.0], [62.1, 2544.0], [62.2, 2551.0], [62.3, 2560.0], [62.4, 2567.0], [62.5, 2574.0], [62.6, 2579.0], [62.7, 2587.0], [62.8, 2593.0], [62.9, 2598.0], [63.0, 2607.0], [63.1, 2611.0], [63.2, 2619.0], [63.3, 2630.0], [63.4, 2636.0], [63.5, 2651.0], [63.6, 2661.0], [63.7, 2669.0], [63.8, 2678.0], [63.9, 2684.0], [64.0, 2690.0], [64.1, 2701.0], [64.2, 2710.0], [64.3, 2722.0], [64.4, 2729.0], [64.5, 2734.0], [64.6, 2740.0], [64.7, 2746.0], [64.8, 2750.0], [64.9, 2761.0], [65.0, 2770.0], [65.1, 2784.0], [65.2, 2794.0], [65.3, 2807.0], [65.4, 2814.0], [65.5, 2817.0], [65.6, 2825.0], [65.7, 2834.0], [65.8, 2847.0], [65.9, 2859.0], [66.0, 2869.0], [66.1, 2889.0], [66.2, 2900.0], [66.3, 2908.0], [66.4, 2914.0], [66.5, 2920.0], [66.6, 2926.0], [66.7, 2933.0], [66.8, 2944.0], [66.9, 2959.0], [67.0, 2979.0], [67.1, 2990.0], [67.2, 3001.0], [67.3, 3010.0], [67.4, 3015.0], [67.5, 3019.0], [67.6, 3026.0], [67.7, 3040.0], [67.8, 3054.0], [67.9, 3062.0], [68.0, 3072.0], [68.1, 3078.0], [68.2, 3088.0], [68.3, 3101.0], [68.4, 3114.0], [68.5, 3118.0], [68.6, 3126.0], [68.7, 3131.0], [68.8, 3141.0], [68.9, 3147.0], [69.0, 3157.0], [69.1, 3171.0], [69.2, 3178.0], [69.3, 3185.0], [69.4, 3194.0], [69.5, 3210.0], [69.6, 3220.0], [69.7, 3229.0], [69.8, 3237.0], [69.9, 3242.0], [70.0, 3247.0], [70.1, 3258.0], [70.2, 3265.0], [70.3, 3275.0], [70.4, 3284.0], [70.5, 3292.0], [70.6, 3302.0], [70.7, 3317.0], [70.8, 3328.0], [70.9, 3342.0], [71.0, 3350.0], [71.1, 3363.0], [71.2, 3373.0], [71.3, 3382.0], [71.4, 3391.0], [71.5, 3402.0], [71.6, 3411.0], [71.7, 3424.0], [71.8, 3429.0], [71.9, 3447.0], [72.0, 3454.0], [72.1, 3460.0], [72.2, 3468.0], [72.3, 3474.0], [72.4, 3482.0], [72.5, 3492.0], [72.6, 3502.0], [72.7, 3510.0], [72.8, 3517.0], [72.9, 3526.0], [73.0, 3531.0], [73.1, 3543.0], [73.2, 3549.0], [73.3, 3557.0], [73.4, 3568.0], [73.5, 3578.0], [73.6, 3589.0], [73.7, 3601.0], [73.8, 3607.0], [73.9, 3617.0], [74.0, 3635.0], [74.1, 3649.0], [74.2, 3658.0], [74.3, 3668.0], [74.4, 3682.0], [74.5, 3703.0], [74.6, 3714.0], [74.7, 3723.0], [74.8, 3730.0], [74.9, 3750.0], [75.0, 3760.0], [75.1, 3765.0], [75.2, 3778.0], [75.3, 3787.0], [75.4, 3803.0], [75.5, 3816.0], [75.6, 3828.0], [75.7, 3838.0], [75.8, 3848.0], [75.9, 3858.0], [76.0, 3872.0], [76.1, 3884.0], [76.2, 3889.0], [76.3, 3898.0], [76.4, 3913.0], [76.5, 3930.0], [76.6, 3948.0], [76.7, 3968.0], [76.8, 3986.0], [76.9, 4000.0], [77.0, 4015.0], [77.1, 4039.0], [77.2, 4054.0], [77.3, 4068.0], [77.4, 4083.0], [77.5, 4090.0], [77.6, 4108.0], [77.7, 4125.0], [77.8, 4134.0], [77.9, 4148.0], [78.0, 4165.0], [78.1, 4173.0], [78.2, 4180.0], [78.3, 4194.0], [78.4, 4225.0], [78.5, 4246.0], [78.6, 4256.0], [78.7, 4268.0], [78.8, 4289.0], [78.9, 4303.0], [79.0, 4324.0], [79.1, 4341.0], [79.2, 4361.0], [79.3, 4379.0], [79.4, 4390.0], [79.5, 4415.0], [79.6, 4431.0], [79.7, 4450.0], [79.8, 4463.0], [79.9, 4475.0], [80.0, 4497.0], [80.1, 4511.0], [80.2, 4528.0], [80.3, 4541.0], [80.4, 4555.0], [80.5, 4568.0], [80.6, 4589.0], [80.7, 4608.0], [80.8, 4628.0], [80.9, 4645.0], [81.0, 4658.0], [81.1, 4681.0], [81.2, 4687.0], [81.3, 4699.0], [81.4, 4707.0], [81.5, 4721.0], [81.6, 4741.0], [81.7, 4756.0], [81.8, 4767.0], [81.9, 4788.0], [82.0, 4794.0], [82.1, 4815.0], [82.2, 4824.0], [82.3, 4847.0], [82.4, 4856.0], [82.5, 4883.0], [82.6, 4895.0], [82.7, 4913.0], [82.8, 4922.0], [82.9, 4937.0], [83.0, 4946.0], [83.1, 4969.0], [83.2, 4981.0], [83.3, 5000.0], [83.4, 5021.0], [83.5, 5038.0], [83.6, 5056.0], [83.7, 5072.0], [83.8, 5082.0], [83.9, 5101.0], [84.0, 5113.0], [84.1, 5128.0], [84.2, 5140.0], [84.3, 5150.0], [84.4, 5165.0], [84.5, 5189.0], [84.6, 5204.0], [84.7, 5233.0], [84.8, 5244.0], [84.9, 5254.0], [85.0, 5262.0], [85.1, 5279.0], [85.2, 5316.0], [85.3, 5332.0], [85.4, 5344.0], [85.5, 5356.0], [85.6, 5398.0], [85.7, 5410.0], [85.8, 5433.0], [85.9, 5441.0], [86.0, 5469.0], [86.1, 5484.0], [86.2, 5505.0], [86.3, 5523.0], [86.4, 5535.0], [86.5, 5551.0], [86.6, 5558.0], [86.7, 5574.0], [86.8, 5600.0], [86.9, 5620.0], [87.0, 5643.0], [87.1, 5664.0], [87.2, 5708.0], [87.3, 5733.0], [87.4, 5745.0], [87.5, 5768.0], [87.6, 5785.0], [87.7, 5808.0], [87.8, 5824.0], [87.9, 5834.0], [88.0, 5854.0], [88.1, 5868.0], [88.2, 5881.0], [88.3, 5896.0], [88.4, 5910.0], [88.5, 5922.0], [88.6, 5944.0], [88.7, 5960.0], [88.8, 5981.0], [88.9, 5995.0], [89.0, 6012.0], [89.1, 6030.0], [89.2, 6042.0], [89.3, 6057.0], [89.4, 6076.0], [89.5, 6100.0], [89.6, 6118.0], [89.7, 6136.0], [89.8, 6149.0], [89.9, 6159.0], [90.0, 6174.0], [90.1, 6200.0], [90.2, 6206.0], [90.3, 6226.0], [90.4, 6239.0], [90.5, 6252.0], [90.6, 6269.0], [90.7, 6284.0], [90.8, 6300.0], [90.9, 6320.0], [91.0, 6334.0], [91.1, 6345.0], [91.2, 6368.0], [91.3, 6375.0], [91.4, 6394.0], [91.5, 6408.0], [91.6, 6422.0], [91.7, 6438.0], [91.8, 6456.0], [91.9, 6469.0], [92.0, 6478.0], [92.1, 6491.0], [92.2, 6507.0], [92.3, 6521.0], [92.4, 6533.0], [92.5, 6544.0], [92.6, 6554.0], [92.7, 6570.0], [92.8, 6577.0], [92.9, 6597.0], [93.0, 6613.0], [93.1, 6629.0], [93.2, 6637.0], [93.3, 6642.0], [93.4, 6655.0], [93.5, 6666.0], [93.6, 6678.0], [93.7, 6689.0], [93.8, 6699.0], [93.9, 6718.0], [94.0, 6740.0], [94.1, 6751.0], [94.2, 6756.0], [94.3, 6776.0], [94.4, 6793.0], [94.5, 6800.0], [94.6, 6814.0], [94.7, 6822.0], [94.8, 6830.0], [94.9, 6844.0], [95.0, 6857.0], [95.1, 6862.0], [95.2, 6869.0], [95.3, 6886.0], [95.4, 6899.0], [95.5, 6915.0], [95.6, 6925.0], [95.7, 6931.0], [95.8, 6940.0], [95.9, 6962.0], [96.0, 6979.0], [96.1, 6985.0], [96.2, 7004.0], [96.3, 7020.0], [96.4, 7037.0], [96.5, 7044.0], [96.6, 7052.0], [96.7, 7058.0], [96.8, 7064.0], [96.9, 7071.0], [97.0, 7086.0], [97.1, 7108.0], [97.2, 7124.0], [97.3, 7155.0], [97.4, 7161.0], [97.5, 7177.0], [97.6, 7194.0], [97.7, 7213.0], [97.8, 7230.0], [97.9, 7242.0], [98.0, 7259.0], [98.1, 7278.0], [98.2, 7301.0], [98.3, 7324.0], [98.4, 7357.0], [98.5, 7378.0], [98.6, 7407.0], [98.7, 7434.0], [98.8, 7452.0], [98.9, 7481.0], [99.0, 7515.0], [99.1, 7524.0], [99.2, 7558.0], [99.3, 7592.0], [99.4, 7619.0], [99.5, 7642.0], [99.6, 7670.0], [99.7, 7752.0], [99.8, 7899.0], [99.9, 8030.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 440.0, "series": [{"data": [[0.0, 13.0], [600.0, 283.0], [700.0, 246.0], [800.0, 214.0], [900.0, 171.0], [1000.0, 159.0], [1100.0, 141.0], [1200.0, 168.0], [1300.0, 157.0], [1400.0, 137.0], [1500.0, 136.0], [1600.0, 123.0], [1700.0, 125.0], [1800.0, 116.0], [1900.0, 114.0], [2000.0, 109.0], [2100.0, 107.0], [2300.0, 103.0], [2200.0, 103.0], [2400.0, 101.0], [2500.0, 104.0], [2600.0, 87.0], [2700.0, 88.0], [2800.0, 70.0], [2900.0, 74.0], [3000.0, 83.0], [3100.0, 87.0], [3200.0, 85.0], [3300.0, 66.0], [3400.0, 82.0], [3500.0, 85.0], [3700.0, 67.0], [3600.0, 58.0], [3800.0, 71.0], [3900.0, 42.0], [4000.0, 50.0], [4100.0, 59.0], [4300.0, 42.0], [4200.0, 40.0], [4500.0, 49.0], [4600.0, 48.0], [4400.0, 44.0], [4800.0, 45.0], [4700.0, 53.0], [5000.0, 45.0], [4900.0, 51.0], [5100.0, 50.0], [5300.0, 37.0], [5200.0, 44.0], [5400.0, 40.0], [5500.0, 46.0], [5600.0, 28.0], [5700.0, 37.0], [5800.0, 49.0], [5900.0, 46.0], [6000.0, 42.0], [6100.0, 45.0], [6200.0, 52.0], [6300.0, 49.0], [6400.0, 53.0], [6500.0, 57.0], [6600.0, 67.0], [6900.0, 57.0], [6700.0, 52.0], [6800.0, 68.0], [7000.0, 67.0], [7100.0, 42.0], [7300.0, 30.0], [7400.0, 29.0], [7200.0, 41.0], [7500.0, 29.0], [7600.0, 23.0], [7800.0, 7.0], [7700.0, 5.0], [7900.0, 6.0], [8000.0, 3.0], [8600.0, 1.0], [8200.0, 3.0], [8300.0, 1.0], [100.0, 340.0], [200.0, 440.0], [300.0, 347.0], [400.0, 373.0], [500.0, 283.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4018.0, "series": [{"data": [[0.0, 1504.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1953.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4018.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 15.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.151202749140894, "minX": 1.71821304E12, "maxY": 59.83732057416268, "series": [{"data": [[1.7182131E12, 11.600000000000007], [1.7182134E12, 47.36992840095464], [1.71821346E12, 54.61865407319952], [1.71821322E12, 25.790382244143018], [1.71821364E12, 22.069767441860467], [1.71821304E12, 5.151202749140894], [1.71821334E12, 40.19444444444451], [1.71821352E12, 59.773722627737214], [1.71821316E12, 18.633514986376024], [1.71821328E12, 33.02822085889571], [1.71821358E12, 59.83732057416268]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821364E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 427.2258064516129, "minX": 1.0, "maxY": 3956.402824478817, "series": [{"data": [[2.0, 531.0], [3.0, 427.2258064516129], [4.0, 568.8372093023254], [5.0, 509.3265306122449], [6.0, 502.7586206896552], [7.0, 480.01428571428545], [8.0, 571.7837837837837], [9.0, 661.2328767123289], [10.0, 680.2439024390245], [11.0, 742.8000000000002], [12.0, 723.7789473684211], [13.0, 802.2340425531916], [14.0, 759.0849056603776], [15.0, 975.0568181818182], [16.0, 949.2815533980586], [17.0, 1012.7358490566038], [18.0, 1108.8181818181815], [19.0, 1085.1081081081081], [20.0, 1205.2403846153845], [21.0, 1200.9714285714285], [22.0, 1381.7663551401865], [23.0, 1309.108108108108], [24.0, 1561.363636363636], [25.0, 1436.4375000000007], [26.0, 1410.2295081967209], [27.0, 1622.9122807017545], [28.0, 1662.1869158878505], [29.0, 1752.6500000000008], [30.0, 1691.834862385322], [31.0, 2188.78761061947], [32.0, 1894.7280701754396], [33.0, 2105.8878504672907], [34.0, 1989.271186440678], [35.0, 2081.4482758620675], [36.0, 2272.850000000001], [37.0, 2263.1619047619047], [38.0, 2201.4032258064512], [39.0, 2474.5000000000014], [40.0, 2376.356521739131], [41.0, 2476.865546218488], [42.0, 2487.813559322034], [43.0, 2720.646551724138], [44.0, 2851.745454545455], [45.0, 2882.8067226890744], [46.0, 2868.16806722689], [47.0, 2795.863247863247], [48.0, 2946.3839999999996], [49.0, 3250.9454545454555], [50.0, 3076.7177419354844], [51.0, 3238.083333333334], [52.0, 3517.9067796610175], [53.0, 3484.165217391304], [54.0, 3255.183333333334], [55.0, 3456.4827586206893], [56.0, 3215.093023255815], [57.0, 3774.5454545454536], [58.0, 3519.1260504201678], [59.0, 3663.983999999998], [60.0, 3956.402824478817], [1.0, 698.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[38.665687583444644, 2443.7755674232203]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 124.43333333333334, "minX": 1.71821304E12, "maxY": 77317.71666666666, "series": [{"data": [[1.7182131E12, 51811.8], [1.7182134E12, 68567.93333333333], [1.71821346E12, 69547.31666666667], [1.71821322E12, 64815.333333333336], [1.71821364E12, 3002.8], [1.71821304E12, 24594.75], [1.71821334E12, 67731.61666666667], [1.71821352E12, 66858.58333333333], [1.71821316E12, 59641.8], [1.71821328E12, 66005.93333333333], [1.71821358E12, 77317.71666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7182131E12, 1753.5333333333333], [1.7182134E12, 2347.633333333333], [1.71821346E12, 2374.25], [1.71821322E12, 2273.116666666667], [1.71821364E12, 124.43333333333334], [1.71821304E12, 821.6833333333333], [1.71821334E12, 2320.133333333333], [1.71821352E12, 2302.983333333333], [1.71821316E12, 2062.366666666667], [1.71821328E12, 2288.05], [1.71821358E12, 2341.2166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821364E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 449.29896907216505, "minX": 1.71821304E12, "maxY": 4195.7674418604665, "series": [{"data": [[1.7182131E12, 677.5519999999993], [1.7182134E12, 2973.8019093078747], [1.71821346E12, 3420.883116883117], [1.71821322E12, 1497.0764488286059], [1.71821364E12, 4195.7674418604665], [1.71821304E12, 449.29896907216505], [1.71821334E12, 2444.8417874396127], [1.71821352E12, 3951.718978102189], [1.71821316E12, 1087.7438692098083], [1.71821328E12, 1995.3558282208573], [1.71821358E12, 3909.474880382773]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821364E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 448.23024054982824, "minX": 1.71821304E12, "maxY": 4194.976744186047, "series": [{"data": [[1.7182131E12, 676.3967999999995], [1.7182134E12, 2972.61813842482], [1.71821346E12, 3419.657615112162], [1.71821322E12, 1495.921085080148], [1.71821364E12, 4194.976744186047], [1.71821304E12, 448.23024054982824], [1.71821334E12, 2443.5048309178746], [1.71821352E12, 3950.4781021897793], [1.71821316E12, 1086.212534059946], [1.71821328E12, 1994.0503067484656], [1.71821358E12, 3907.651913875598]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821364E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.9767441860465116, "minX": 1.71821304E12, "maxY": 6.125603864734301, "series": [{"data": [[1.7182131E12, 1.3216], [1.7182134E12, 3.8305489260143255], [1.71821346E12, 3.755608028335303], [1.71821322E12, 3.282367447595561], [1.71821364E12, 0.9767441860465116], [1.71821304E12, 3.65635738831615], [1.71821334E12, 6.125603864734301], [1.71821352E12, 5.244525547445247], [1.71821316E12, 3.4673024523160807], [1.71821328E12, 3.7067484662576664], [1.71821358E12, 4.178229665071774]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821364E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 102.0, "minX": 1.71821304E12, "maxY": 8684.0, "series": [{"data": [[1.7182131E12, 2767.0], [1.7182134E12, 6979.0], [1.71821346E12, 8684.0], [1.71821322E12, 3760.0], [1.71821364E12, 6466.0], [1.71821304E12, 1748.0], [1.71821334E12, 5487.0], [1.71821352E12, 8263.0], [1.71821316E12, 3297.0], [1.71821328E12, 5053.0], [1.71821358E12, 8312.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7182131E12, 105.0], [1.7182134E12, 130.0], [1.71821346E12, 147.0], [1.71821322E12, 123.0], [1.71821364E12, 1024.0], [1.71821304E12, 102.0], [1.71821334E12, 141.0], [1.71821352E12, 160.0], [1.71821316E12, 103.0], [1.71821328E12, 142.0], [1.71821358E12, 142.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7182131E12, 1485.3999999999996], [1.7182134E12, 5641.700000000001], [1.71821346E12, 6514.700000000001], [1.71821322E12, 3058.0], [1.71821364E12, 6123.2], [1.71821304E12, 758.2000000000007], [1.71821334E12, 4777.6], [1.71821352E12, 7162.0], [1.71821316E12, 2208.0], [1.71821328E12, 3885.0], [1.71821358E12, 7256.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7182131E12, 1977.2400000000007], [1.7182134E12, 6448.08], [1.71821346E12, 7118.949999999997], [1.71821322E12, 3559.1], [1.71821364E12, 6466.0], [1.71821304E12, 1612.7999999999995], [1.71821334E12, 5292.52], [1.71821352E12, 7795.199999999997], [1.71821316E12, 2601.2499999999995], [1.71821328E12, 4389.200000000001], [1.71821358E12, 7860.86]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7182131E12, 560.0], [1.7182134E12, 2627.0], [1.71821346E12, 3114.0], [1.71821322E12, 1230.0], [1.71821364E12, 4173.0], [1.71821304E12, 411.0], [1.71821334E12, 2177.0], [1.71821352E12, 3602.0], [1.71821316E12, 873.5], [1.71821328E12, 1779.5], [1.71821358E12, 3601.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7182131E12, 1679.4999999999995], [1.7182134E12, 5905.75], [1.71821346E12, 6776.0], [1.71821322E12, 3276.0], [1.71821364E12, 6378.0], [1.71821304E12, 1213.7999999999997], [1.71821334E12, 4981.599999999999], [1.71821352E12, 7465.0], [1.71821316E12, 2383.25], [1.71821328E12, 4108.75], [1.71821358E12, 7487.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821364E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3158.5, "series": [{"data": [[2.0, 396.5], [8.0, 1032.0], [9.0, 936.5], [10.0, 1445.0], [11.0, 1357.0], [3.0, 431.0], [12.0, 1324.0], [13.0, 1621.0], [14.0, 1948.0], [15.0, 1738.0], [1.0, 393.5], [4.0, 481.0], [16.0, 2374.0], [17.0, 2306.0], [18.0, 2624.0], [19.0, 2572.0], [5.0, 430.0], [20.0, 3158.5], [21.0, 1864.0], [22.0, 3053.0], [23.0, 2744.5], [6.0, 483.5], [7.0, 564.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 0.0], [17.0, 0.0], [18.0, 590.0], [19.0, 0.0], [10.0, 0.0], [21.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 1297.0], [15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3157.0, "series": [{"data": [[2.0, 395.0], [8.0, 1031.5], [9.0, 935.5], [10.0, 1443.0], [11.0, 1357.0], [3.0, 430.0], [12.0, 1323.0], [13.0, 1619.0], [14.0, 1946.0], [15.0, 1736.0], [1.0, 392.0], [4.0, 480.0], [16.0, 2374.0], [17.0, 2304.0], [18.0, 2622.0], [19.0, 2572.0], [5.0, 429.0], [20.0, 3157.0], [21.0, 1864.0], [22.0, 3051.5], [23.0, 2743.5], [6.0, 480.5], [7.0, 563.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 0.0], [17.0, 0.0], [18.0, 468.0], [19.0, 0.0], [10.0, 0.0], [21.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 1019.0], [15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71821298E12, "maxY": 14.266666666666667, "series": [{"data": [[1.7182131E12, 10.466666666666667], [1.7182134E12, 14.016666666666667], [1.71821346E12, 14.266666666666667], [1.71821322E12, 13.616666666666667], [1.71821304E12, 4.916666666666667], [1.71821334E12, 13.966666666666667], [1.71821352E12, 13.716666666666667], [1.71821316E12, 12.4], [1.71821298E12, 0.016666666666666666], [1.71821328E12, 13.7], [1.71821358E12, 13.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821358E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71821304E12, "maxY": 14.1, "series": [{"data": [[1.7182131E12, 10.416666666666666], [1.7182134E12, 13.933333333333334], [1.71821346E12, 14.1], [1.71821322E12, 13.483333333333333], [1.71821364E12, 0.7166666666666667], [1.71821304E12, 4.85], [1.71821334E12, 13.75], [1.71821352E12, 13.65], [1.71821316E12, 12.233333333333333], [1.71821328E12, 13.566666666666666], [1.71821358E12, 13.883333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71821358E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.7182134E12, 0.03333333333333333], [1.71821346E12, 0.016666666666666666], [1.71821322E12, 0.03333333333333333], [1.71821334E12, 0.05], [1.71821352E12, 0.05], [1.71821328E12, 0.016666666666666666], [1.71821358E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821364E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71821304E12, "maxY": 14.1, "series": [{"data": [[1.7182131E12, 10.416666666666666], [1.7182134E12, 13.933333333333334], [1.71821346E12, 14.1], [1.71821322E12, 13.483333333333333], [1.71821364E12, 0.7166666666666667], [1.71821304E12, 4.85], [1.71821334E12, 13.75], [1.71821352E12, 13.65], [1.71821316E12, 12.233333333333333], [1.71821328E12, 13.566666666666666], [1.71821358E12, 13.883333333333333]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}, {"data": [[1.7182134E12, 0.03333333333333333], [1.71821346E12, 0.016666666666666666], [1.71821322E12, 0.03333333333333333], [1.71821334E12, 0.05], [1.71821352E12, 0.05], [1.71821328E12, 0.016666666666666666], [1.71821358E12, 0.05]], "isOverall": false, "label": "TitleBasics by primary_title-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821364E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71821304E12, "maxY": 14.1, "series": [{"data": [[1.7182131E12, 10.416666666666666], [1.7182134E12, 13.933333333333334], [1.71821346E12, 14.1], [1.71821322E12, 13.483333333333333], [1.71821364E12, 0.7166666666666667], [1.71821304E12, 4.85], [1.71821334E12, 13.75], [1.71821352E12, 13.65], [1.71821316E12, 12.233333333333333], [1.71821328E12, 13.566666666666666], [1.71821358E12, 13.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7182134E12, 0.03333333333333333], [1.71821346E12, 0.016666666666666666], [1.71821322E12, 0.03333333333333333], [1.71821334E12, 0.05], [1.71821352E12, 0.05], [1.71821328E12, 0.016666666666666666], [1.71821358E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821364E12, "title": "Total Transactions Per Second"}},
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

