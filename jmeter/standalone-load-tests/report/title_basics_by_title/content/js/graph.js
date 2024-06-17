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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 8600.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 92.0], [0.3, 104.0], [0.4, 109.0], [0.5, 113.0], [0.6, 117.0], [0.7, 120.0], [0.8, 122.0], [0.9, 124.0], [1.0, 128.0], [1.1, 132.0], [1.2, 133.0], [1.3, 137.0], [1.4, 139.0], [1.5, 144.0], [1.6, 146.0], [1.7, 149.0], [1.8, 152.0], [1.9, 154.0], [2.0, 156.0], [2.1, 157.0], [2.2, 161.0], [2.3, 164.0], [2.4, 166.0], [2.5, 167.0], [2.6, 168.0], [2.7, 171.0], [2.8, 172.0], [2.9, 173.0], [3.0, 175.0], [3.1, 177.0], [3.2, 177.0], [3.3, 180.0], [3.4, 181.0], [3.5, 182.0], [3.6, 183.0], [3.7, 184.0], [3.8, 186.0], [3.9, 186.0], [4.0, 189.0], [4.1, 190.0], [4.2, 193.0], [4.3, 193.0], [4.4, 195.0], [4.5, 197.0], [4.6, 197.0], [4.7, 198.0], [4.8, 199.0], [4.9, 200.0], [5.0, 202.0], [5.1, 203.0], [5.2, 204.0], [5.3, 206.0], [5.4, 207.0], [5.5, 208.0], [5.6, 209.0], [5.7, 211.0], [5.8, 212.0], [5.9, 214.0], [6.0, 215.0], [6.1, 216.0], [6.2, 217.0], [6.3, 218.0], [6.4, 219.0], [6.5, 220.0], [6.6, 221.0], [6.7, 223.0], [6.8, 224.0], [6.9, 226.0], [7.0, 228.0], [7.1, 230.0], [7.2, 231.0], [7.3, 233.0], [7.4, 235.0], [7.5, 236.0], [7.6, 237.0], [7.7, 239.0], [7.8, 240.0], [7.9, 241.0], [8.0, 242.0], [8.1, 243.0], [8.2, 245.0], [8.3, 246.0], [8.4, 247.0], [8.5, 249.0], [8.6, 250.0], [8.7, 252.0], [8.8, 253.0], [8.9, 254.0], [9.0, 256.0], [9.1, 258.0], [9.2, 259.0], [9.3, 261.0], [9.4, 263.0], [9.5, 266.0], [9.6, 267.0], [9.7, 269.0], [9.8, 271.0], [9.9, 273.0], [10.0, 275.0], [10.1, 276.0], [10.2, 278.0], [10.3, 280.0], [10.4, 284.0], [10.5, 286.0], [10.6, 289.0], [10.7, 291.0], [10.8, 292.0], [10.9, 293.0], [11.0, 297.0], [11.1, 298.0], [11.2, 300.0], [11.3, 301.0], [11.4, 303.0], [11.5, 305.0], [11.6, 309.0], [11.7, 310.0], [11.8, 312.0], [11.9, 315.0], [12.0, 317.0], [12.1, 318.0], [12.2, 321.0], [12.3, 322.0], [12.4, 324.0], [12.5, 326.0], [12.6, 328.0], [12.7, 329.0], [12.8, 332.0], [12.9, 333.0], [13.0, 334.0], [13.1, 337.0], [13.2, 339.0], [13.3, 341.0], [13.4, 343.0], [13.5, 344.0], [13.6, 346.0], [13.7, 349.0], [13.8, 351.0], [13.9, 353.0], [14.0, 355.0], [14.1, 360.0], [14.2, 362.0], [14.3, 365.0], [14.4, 367.0], [14.5, 370.0], [14.6, 373.0], [14.7, 375.0], [14.8, 376.0], [14.9, 378.0], [15.0, 380.0], [15.1, 383.0], [15.2, 384.0], [15.3, 386.0], [15.4, 387.0], [15.5, 389.0], [15.6, 391.0], [15.7, 394.0], [15.8, 397.0], [15.9, 399.0], [16.0, 400.0], [16.1, 402.0], [16.2, 404.0], [16.3, 405.0], [16.4, 406.0], [16.5, 408.0], [16.6, 410.0], [16.7, 411.0], [16.8, 413.0], [16.9, 414.0], [17.0, 417.0], [17.1, 418.0], [17.2, 420.0], [17.3, 422.0], [17.4, 424.0], [17.5, 426.0], [17.6, 427.0], [17.7, 429.0], [17.8, 430.0], [17.9, 431.0], [18.0, 433.0], [18.1, 435.0], [18.2, 437.0], [18.3, 438.0], [18.4, 440.0], [18.5, 442.0], [18.6, 443.0], [18.7, 445.0], [18.8, 450.0], [18.9, 451.0], [19.0, 452.0], [19.1, 453.0], [19.2, 455.0], [19.3, 458.0], [19.4, 459.0], [19.5, 461.0], [19.6, 462.0], [19.7, 462.0], [19.8, 463.0], [19.9, 465.0], [20.0, 467.0], [20.1, 468.0], [20.2, 470.0], [20.3, 472.0], [20.4, 473.0], [20.5, 475.0], [20.6, 477.0], [20.7, 480.0], [20.8, 482.0], [20.9, 484.0], [21.0, 486.0], [21.1, 489.0], [21.2, 491.0], [21.3, 493.0], [21.4, 496.0], [21.5, 500.0], [21.6, 503.0], [21.7, 505.0], [21.8, 507.0], [21.9, 511.0], [22.0, 513.0], [22.1, 515.0], [22.2, 517.0], [22.3, 520.0], [22.4, 521.0], [22.5, 523.0], [22.6, 525.0], [22.7, 528.0], [22.8, 529.0], [22.9, 532.0], [23.0, 536.0], [23.1, 538.0], [23.2, 542.0], [23.3, 546.0], [23.4, 549.0], [23.5, 550.0], [23.6, 552.0], [23.7, 555.0], [23.8, 559.0], [23.9, 561.0], [24.0, 566.0], [24.1, 567.0], [24.2, 572.0], [24.3, 574.0], [24.4, 577.0], [24.5, 580.0], [24.6, 582.0], [24.7, 585.0], [24.8, 588.0], [24.9, 590.0], [25.0, 592.0], [25.1, 594.0], [25.2, 596.0], [25.3, 597.0], [25.4, 598.0], [25.5, 601.0], [25.6, 602.0], [25.7, 605.0], [25.8, 608.0], [25.9, 611.0], [26.0, 614.0], [26.1, 618.0], [26.2, 624.0], [26.3, 628.0], [26.4, 631.0], [26.5, 632.0], [26.6, 633.0], [26.7, 635.0], [26.8, 638.0], [26.9, 641.0], [27.0, 642.0], [27.1, 644.0], [27.2, 646.0], [27.3, 650.0], [27.4, 651.0], [27.5, 654.0], [27.6, 658.0], [27.7, 661.0], [27.8, 664.0], [27.9, 666.0], [28.0, 668.0], [28.1, 671.0], [28.2, 674.0], [28.3, 675.0], [28.4, 678.0], [28.5, 680.0], [28.6, 681.0], [28.7, 684.0], [28.8, 686.0], [28.9, 687.0], [29.0, 690.0], [29.1, 693.0], [29.2, 695.0], [29.3, 697.0], [29.4, 700.0], [29.5, 702.0], [29.6, 704.0], [29.7, 707.0], [29.8, 713.0], [29.9, 717.0], [30.0, 720.0], [30.1, 722.0], [30.2, 725.0], [30.3, 727.0], [30.4, 729.0], [30.5, 733.0], [30.6, 736.0], [30.7, 740.0], [30.8, 743.0], [30.9, 745.0], [31.0, 748.0], [31.1, 751.0], [31.2, 754.0], [31.3, 759.0], [31.4, 762.0], [31.5, 765.0], [31.6, 769.0], [31.7, 772.0], [31.8, 775.0], [31.9, 779.0], [32.0, 782.0], [32.1, 784.0], [32.2, 785.0], [32.3, 791.0], [32.4, 793.0], [32.5, 795.0], [32.6, 799.0], [32.7, 800.0], [32.8, 803.0], [32.9, 807.0], [33.0, 812.0], [33.1, 814.0], [33.2, 817.0], [33.3, 822.0], [33.4, 824.0], [33.5, 830.0], [33.6, 831.0], [33.7, 835.0], [33.8, 838.0], [33.9, 843.0], [34.0, 846.0], [34.1, 849.0], [34.2, 855.0], [34.3, 857.0], [34.4, 863.0], [34.5, 866.0], [34.6, 870.0], [34.7, 879.0], [34.8, 887.0], [34.9, 890.0], [35.0, 893.0], [35.1, 897.0], [35.2, 900.0], [35.3, 905.0], [35.4, 907.0], [35.5, 910.0], [35.6, 912.0], [35.7, 918.0], [35.8, 923.0], [35.9, 928.0], [36.0, 934.0], [36.1, 939.0], [36.2, 942.0], [36.3, 948.0], [36.4, 953.0], [36.5, 959.0], [36.6, 962.0], [36.7, 966.0], [36.8, 971.0], [36.9, 974.0], [37.0, 981.0], [37.1, 986.0], [37.2, 995.0], [37.3, 997.0], [37.4, 1002.0], [37.5, 1008.0], [37.6, 1012.0], [37.7, 1016.0], [37.8, 1022.0], [37.9, 1025.0], [38.0, 1030.0], [38.1, 1034.0], [38.2, 1036.0], [38.3, 1040.0], [38.4, 1048.0], [38.5, 1053.0], [38.6, 1058.0], [38.7, 1060.0], [38.8, 1065.0], [38.9, 1068.0], [39.0, 1076.0], [39.1, 1079.0], [39.2, 1086.0], [39.3, 1088.0], [39.4, 1091.0], [39.5, 1096.0], [39.6, 1101.0], [39.7, 1104.0], [39.8, 1110.0], [39.9, 1115.0], [40.0, 1119.0], [40.1, 1126.0], [40.2, 1130.0], [40.3, 1134.0], [40.4, 1135.0], [40.5, 1140.0], [40.6, 1143.0], [40.7, 1147.0], [40.8, 1152.0], [40.9, 1155.0], [41.0, 1163.0], [41.1, 1168.0], [41.2, 1175.0], [41.3, 1181.0], [41.4, 1184.0], [41.5, 1189.0], [41.6, 1196.0], [41.7, 1202.0], [41.8, 1207.0], [41.9, 1209.0], [42.0, 1216.0], [42.1, 1221.0], [42.2, 1225.0], [42.3, 1233.0], [42.4, 1238.0], [42.5, 1243.0], [42.6, 1248.0], [42.7, 1258.0], [42.8, 1263.0], [42.9, 1270.0], [43.0, 1272.0], [43.1, 1275.0], [43.2, 1283.0], [43.3, 1288.0], [43.4, 1294.0], [43.5, 1299.0], [43.6, 1303.0], [43.7, 1306.0], [43.8, 1313.0], [43.9, 1324.0], [44.0, 1328.0], [44.1, 1333.0], [44.2, 1338.0], [44.3, 1342.0], [44.4, 1346.0], [44.5, 1351.0], [44.6, 1354.0], [44.7, 1361.0], [44.8, 1369.0], [44.9, 1376.0], [45.0, 1381.0], [45.1, 1385.0], [45.2, 1390.0], [45.3, 1394.0], [45.4, 1398.0], [45.5, 1403.0], [45.6, 1410.0], [45.7, 1415.0], [45.8, 1421.0], [45.9, 1423.0], [46.0, 1429.0], [46.1, 1435.0], [46.2, 1440.0], [46.3, 1442.0], [46.4, 1447.0], [46.5, 1453.0], [46.6, 1457.0], [46.7, 1460.0], [46.8, 1463.0], [46.9, 1467.0], [47.0, 1473.0], [47.1, 1487.0], [47.2, 1495.0], [47.3, 1500.0], [47.4, 1511.0], [47.5, 1516.0], [47.6, 1520.0], [47.7, 1525.0], [47.8, 1536.0], [47.9, 1540.0], [48.0, 1546.0], [48.1, 1550.0], [48.2, 1553.0], [48.3, 1559.0], [48.4, 1564.0], [48.5, 1569.0], [48.6, 1573.0], [48.7, 1580.0], [48.8, 1588.0], [48.9, 1595.0], [49.0, 1601.0], [49.1, 1608.0], [49.2, 1611.0], [49.3, 1613.0], [49.4, 1619.0], [49.5, 1627.0], [49.6, 1632.0], [49.7, 1637.0], [49.8, 1645.0], [49.9, 1657.0], [50.0, 1663.0], [50.1, 1670.0], [50.2, 1674.0], [50.3, 1678.0], [50.4, 1683.0], [50.5, 1689.0], [50.6, 1693.0], [50.7, 1699.0], [50.8, 1704.0], [50.9, 1710.0], [51.0, 1714.0], [51.1, 1721.0], [51.2, 1734.0], [51.3, 1742.0], [51.4, 1749.0], [51.5, 1757.0], [51.6, 1761.0], [51.7, 1773.0], [51.8, 1779.0], [51.9, 1783.0], [52.0, 1790.0], [52.1, 1795.0], [52.2, 1800.0], [52.3, 1806.0], [52.4, 1810.0], [52.5, 1816.0], [52.6, 1820.0], [52.7, 1828.0], [52.8, 1834.0], [52.9, 1837.0], [53.0, 1846.0], [53.1, 1855.0], [53.2, 1860.0], [53.3, 1868.0], [53.4, 1876.0], [53.5, 1886.0], [53.6, 1889.0], [53.7, 1898.0], [53.8, 1902.0], [53.9, 1912.0], [54.0, 1920.0], [54.1, 1924.0], [54.2, 1930.0], [54.3, 1939.0], [54.4, 1944.0], [54.5, 1951.0], [54.6, 1956.0], [54.7, 1960.0], [54.8, 1970.0], [54.9, 1989.0], [55.0, 1996.0], [55.1, 2004.0], [55.2, 2009.0], [55.3, 2020.0], [55.4, 2025.0], [55.5, 2033.0], [55.6, 2038.0], [55.7, 2049.0], [55.8, 2058.0], [55.9, 2064.0], [56.0, 2067.0], [56.1, 2074.0], [56.2, 2078.0], [56.3, 2083.0], [56.4, 2091.0], [56.5, 2096.0], [56.6, 2104.0], [56.7, 2114.0], [56.8, 2117.0], [56.9, 2125.0], [57.0, 2134.0], [57.1, 2144.0], [57.2, 2154.0], [57.3, 2160.0], [57.4, 2174.0], [57.5, 2177.0], [57.6, 2182.0], [57.7, 2188.0], [57.8, 2192.0], [57.9, 2198.0], [58.0, 2206.0], [58.1, 2211.0], [58.2, 2218.0], [58.3, 2225.0], [58.4, 2231.0], [58.5, 2238.0], [58.6, 2248.0], [58.7, 2254.0], [58.8, 2261.0], [58.9, 2269.0], [59.0, 2274.0], [59.1, 2282.0], [59.2, 2288.0], [59.3, 2294.0], [59.4, 2304.0], [59.5, 2313.0], [59.6, 2324.0], [59.7, 2342.0], [59.8, 2357.0], [59.9, 2364.0], [60.0, 2376.0], [60.1, 2384.0], [60.2, 2389.0], [60.3, 2399.0], [60.4, 2406.0], [60.5, 2416.0], [60.6, 2420.0], [60.7, 2429.0], [60.8, 2436.0], [60.9, 2449.0], [61.0, 2455.0], [61.1, 2462.0], [61.2, 2474.0], [61.3, 2485.0], [61.4, 2493.0], [61.5, 2496.0], [61.6, 2501.0], [61.7, 2513.0], [61.8, 2524.0], [61.9, 2531.0], [62.0, 2542.0], [62.1, 2550.0], [62.2, 2557.0], [62.3, 2564.0], [62.4, 2568.0], [62.5, 2573.0], [62.6, 2581.0], [62.7, 2588.0], [62.8, 2594.0], [62.9, 2603.0], [63.0, 2608.0], [63.1, 2618.0], [63.2, 2627.0], [63.3, 2635.0], [63.4, 2644.0], [63.5, 2651.0], [63.6, 2660.0], [63.7, 2673.0], [63.8, 2679.0], [63.9, 2686.0], [64.0, 2693.0], [64.1, 2705.0], [64.2, 2714.0], [64.3, 2725.0], [64.4, 2738.0], [64.5, 2744.0], [64.6, 2755.0], [64.7, 2762.0], [64.8, 2767.0], [64.9, 2776.0], [65.0, 2783.0], [65.1, 2798.0], [65.2, 2806.0], [65.3, 2814.0], [65.4, 2825.0], [65.5, 2833.0], [65.6, 2845.0], [65.7, 2852.0], [65.8, 2861.0], [65.9, 2866.0], [66.0, 2876.0], [66.1, 2883.0], [66.2, 2890.0], [66.3, 2902.0], [66.4, 2911.0], [66.5, 2918.0], [66.6, 2926.0], [66.7, 2938.0], [66.8, 2950.0], [66.9, 2958.0], [67.0, 2964.0], [67.1, 2975.0], [67.2, 2992.0], [67.3, 2999.0], [67.4, 3007.0], [67.5, 3027.0], [67.6, 3034.0], [67.7, 3046.0], [67.8, 3055.0], [67.9, 3070.0], [68.0, 3099.0], [68.1, 3109.0], [68.2, 3118.0], [68.3, 3133.0], [68.4, 3149.0], [68.5, 3152.0], [68.6, 3158.0], [68.7, 3168.0], [68.8, 3174.0], [68.9, 3185.0], [69.0, 3189.0], [69.1, 3198.0], [69.2, 3206.0], [69.3, 3218.0], [69.4, 3228.0], [69.5, 3234.0], [69.6, 3240.0], [69.7, 3255.0], [69.8, 3264.0], [69.9, 3274.0], [70.0, 3284.0], [70.1, 3296.0], [70.2, 3302.0], [70.3, 3320.0], [70.4, 3330.0], [70.5, 3335.0], [70.6, 3346.0], [70.7, 3352.0], [70.8, 3366.0], [70.9, 3377.0], [71.0, 3384.0], [71.1, 3395.0], [71.2, 3405.0], [71.3, 3413.0], [71.4, 3423.0], [71.5, 3430.0], [71.6, 3441.0], [71.7, 3448.0], [71.8, 3456.0], [71.9, 3459.0], [72.0, 3468.0], [72.1, 3483.0], [72.2, 3495.0], [72.3, 3501.0], [72.4, 3509.0], [72.5, 3520.0], [72.6, 3539.0], [72.7, 3550.0], [72.8, 3563.0], [72.9, 3570.0], [73.0, 3576.0], [73.1, 3583.0], [73.2, 3592.0], [73.3, 3604.0], [73.4, 3614.0], [73.5, 3627.0], [73.6, 3634.0], [73.7, 3644.0], [73.8, 3648.0], [73.9, 3664.0], [74.0, 3666.0], [74.1, 3679.0], [74.2, 3688.0], [74.3, 3708.0], [74.4, 3719.0], [74.5, 3732.0], [74.6, 3745.0], [74.7, 3758.0], [74.8, 3767.0], [74.9, 3774.0], [75.0, 3785.0], [75.1, 3800.0], [75.2, 3810.0], [75.3, 3824.0], [75.4, 3837.0], [75.5, 3845.0], [75.6, 3853.0], [75.7, 3873.0], [75.8, 3882.0], [75.9, 3897.0], [76.0, 3912.0], [76.1, 3925.0], [76.2, 3931.0], [76.3, 3938.0], [76.4, 3951.0], [76.5, 3970.0], [76.6, 3979.0], [76.7, 3989.0], [76.8, 4006.0], [76.9, 4013.0], [77.0, 4020.0], [77.1, 4036.0], [77.2, 4051.0], [77.3, 4066.0], [77.4, 4086.0], [77.5, 4098.0], [77.6, 4111.0], [77.7, 4120.0], [77.8, 4141.0], [77.9, 4148.0], [78.0, 4162.0], [78.1, 4176.0], [78.2, 4199.0], [78.3, 4207.0], [78.4, 4227.0], [78.5, 4231.0], [78.6, 4250.0], [78.7, 4263.0], [78.8, 4282.0], [78.9, 4303.0], [79.0, 4323.0], [79.1, 4330.0], [79.2, 4358.0], [79.3, 4375.0], [79.4, 4404.0], [79.5, 4412.0], [79.6, 4430.0], [79.7, 4444.0], [79.8, 4467.0], [79.9, 4484.0], [80.0, 4498.0], [80.1, 4503.0], [80.2, 4522.0], [80.3, 4536.0], [80.4, 4549.0], [80.5, 4561.0], [80.6, 4573.0], [80.7, 4608.0], [80.8, 4622.0], [80.9, 4638.0], [81.0, 4650.0], [81.1, 4669.0], [81.2, 4694.0], [81.3, 4712.0], [81.4, 4734.0], [81.5, 4756.0], [81.6, 4775.0], [81.7, 4807.0], [81.8, 4822.0], [81.9, 4838.0], [82.0, 4850.0], [82.1, 4867.0], [82.2, 4879.0], [82.3, 4893.0], [82.4, 4912.0], [82.5, 4933.0], [82.6, 4948.0], [82.7, 4966.0], [82.8, 4978.0], [82.9, 4994.0], [83.0, 5011.0], [83.1, 5033.0], [83.2, 5044.0], [83.3, 5064.0], [83.4, 5075.0], [83.5, 5080.0], [83.6, 5096.0], [83.7, 5129.0], [83.8, 5145.0], [83.9, 5168.0], [84.0, 5180.0], [84.1, 5199.0], [84.2, 5217.0], [84.3, 5246.0], [84.4, 5265.0], [84.5, 5280.0], [84.6, 5298.0], [84.7, 5310.0], [84.8, 5321.0], [84.9, 5331.0], [85.0, 5353.0], [85.1, 5373.0], [85.2, 5386.0], [85.3, 5407.0], [85.4, 5420.0], [85.5, 5429.0], [85.6, 5445.0], [85.7, 5459.0], [85.8, 5481.0], [85.9, 5491.0], [86.0, 5511.0], [86.1, 5532.0], [86.2, 5551.0], [86.3, 5573.0], [86.4, 5591.0], [86.5, 5611.0], [86.6, 5631.0], [86.7, 5642.0], [86.8, 5671.0], [86.9, 5694.0], [87.0, 5718.0], [87.1, 5744.0], [87.2, 5765.0], [87.3, 5785.0], [87.4, 5810.0], [87.5, 5833.0], [87.6, 5856.0], [87.7, 5882.0], [87.8, 5902.0], [87.9, 5918.0], [88.0, 5930.0], [88.1, 5951.0], [88.2, 5968.0], [88.3, 5991.0], [88.4, 6011.0], [88.5, 6025.0], [88.6, 6038.0], [88.7, 6055.0], [88.8, 6066.0], [88.9, 6093.0], [89.0, 6103.0], [89.1, 6122.0], [89.2, 6132.0], [89.3, 6159.0], [89.4, 6171.0], [89.5, 6184.0], [89.6, 6205.0], [89.7, 6243.0], [89.8, 6262.0], [89.9, 6274.0], [90.0, 6290.0], [90.1, 6316.0], [90.2, 6331.0], [90.3, 6348.0], [90.4, 6361.0], [90.5, 6380.0], [90.6, 6396.0], [90.7, 6406.0], [90.8, 6422.0], [90.9, 6436.0], [91.0, 6451.0], [91.1, 6463.0], [91.2, 6482.0], [91.3, 6500.0], [91.4, 6526.0], [91.5, 6545.0], [91.6, 6557.0], [91.7, 6572.0], [91.8, 6597.0], [91.9, 6620.0], [92.0, 6636.0], [92.1, 6651.0], [92.2, 6663.0], [92.3, 6675.0], [92.4, 6686.0], [92.5, 6700.0], [92.6, 6708.0], [92.7, 6714.0], [92.8, 6733.0], [92.9, 6747.0], [93.0, 6770.0], [93.1, 6781.0], [93.2, 6790.0], [93.3, 6803.0], [93.4, 6813.0], [93.5, 6824.0], [93.6, 6833.0], [93.7, 6857.0], [93.8, 6867.0], [93.9, 6876.0], [94.0, 6885.0], [94.1, 6896.0], [94.2, 6909.0], [94.3, 6918.0], [94.4, 6924.0], [94.5, 6932.0], [94.6, 6949.0], [94.7, 6962.0], [94.8, 6981.0], [94.9, 6996.0], [95.0, 7005.0], [95.1, 7021.0], [95.2, 7035.0], [95.3, 7057.0], [95.4, 7062.0], [95.5, 7081.0], [95.6, 7105.0], [95.7, 7122.0], [95.8, 7134.0], [95.9, 7145.0], [96.0, 7155.0], [96.1, 7162.0], [96.2, 7176.0], [96.3, 7186.0], [96.4, 7195.0], [96.5, 7217.0], [96.6, 7236.0], [96.7, 7249.0], [96.8, 7266.0], [96.9, 7276.0], [97.0, 7291.0], [97.1, 7303.0], [97.2, 7325.0], [97.3, 7336.0], [97.4, 7345.0], [97.5, 7372.0], [97.6, 7380.0], [97.7, 7397.0], [97.8, 7416.0], [97.9, 7425.0], [98.0, 7454.0], [98.1, 7483.0], [98.2, 7507.0], [98.3, 7543.0], [98.4, 7557.0], [98.5, 7570.0], [98.6, 7606.0], [98.7, 7619.0], [98.8, 7655.0], [98.9, 7670.0], [99.0, 7705.0], [99.1, 7729.0], [99.2, 7771.0], [99.3, 7789.0], [99.4, 7865.0], [99.5, 7919.0], [99.6, 7962.0], [99.7, 8006.0], [99.8, 8048.0], [99.9, 8140.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 472.0, "series": [{"data": [[0.0, 16.0], [600.0, 293.0], [700.0, 246.0], [800.0, 189.0], [900.0, 164.0], [1000.0, 166.0], [1100.0, 157.0], [1200.0, 136.0], [1300.0, 145.0], [1400.0, 137.0], [1500.0, 127.0], [1600.0, 132.0], [1700.0, 110.0], [1800.0, 117.0], [1900.0, 97.0], [2000.0, 110.0], [2100.0, 106.0], [2200.0, 107.0], [2300.0, 70.0], [2400.0, 91.0], [2500.0, 101.0], [2600.0, 86.0], [2700.0, 82.0], [2800.0, 86.0], [2900.0, 78.0], [3000.0, 54.0], [3100.0, 82.0], [3300.0, 73.0], [3200.0, 76.0], [3400.0, 86.0], [3500.0, 76.0], [3600.0, 76.0], [3700.0, 60.0], [3800.0, 64.0], [3900.0, 61.0], [4000.0, 58.0], [4100.0, 50.0], [4200.0, 51.0], [4300.0, 37.0], [4500.0, 48.0], [4400.0, 48.0], [4600.0, 42.0], [4700.0, 32.0], [4800.0, 54.0], [5000.0, 50.0], [4900.0, 42.0], [5100.0, 37.0], [5200.0, 39.0], [5300.0, 46.0], [5400.0, 55.0], [5600.0, 36.0], [5500.0, 35.0], [5700.0, 34.0], [5800.0, 30.0], [6000.0, 49.0], [5900.0, 41.0], [6100.0, 45.0], [6300.0, 42.0], [6200.0, 35.0], [6500.0, 40.0], [6400.0, 50.0], [6600.0, 51.0], [6900.0, 60.0], [6700.0, 57.0], [6800.0, 65.0], [7100.0, 63.0], [7000.0, 49.0], [7200.0, 49.0], [7400.0, 35.0], [7300.0, 47.0], [7500.0, 32.0], [7600.0, 29.0], [7700.0, 25.0], [7900.0, 19.0], [7800.0, 9.0], [8000.0, 14.0], [8100.0, 3.0], [8400.0, 1.0], [8200.0, 2.0], [8500.0, 1.0], [8300.0, 1.0], [8600.0, 1.0], [100.0, 349.0], [200.0, 472.0], [300.0, 356.0], [400.0, 415.0], [500.0, 297.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3933.0, "series": [{"data": [[0.0, 1597.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1905.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3933.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 50.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.999999999999999, "minX": 1.71864612E12, "maxY": 60.0, "series": [{"data": [[1.71864636E12, 29.589041095890398], [1.71864654E12, 51.17879161528979], [1.71864648E12, 44.00980392156862], [1.71864666E12, 60.0], [1.71864618E12, 8.32960893854749], [1.7186466E12, 58.1121833534379], [1.71864612E12, 2.999999999999999], [1.7186463E12, 22.441475826972024], [1.71864672E12, 55.92378752886837], [1.71864624E12, 15.324099722991697], [1.71864642E12, 36.766297662976626]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864672E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 414.77777777777777, "minX": 1.0, "maxY": 3929.07635632954, "series": [{"data": [[2.0, 499.78260869565213], [3.0, 460.2258064516129], [4.0, 414.77777777777777], [5.0, 440.21818181818185], [6.0, 441.265625], [7.0, 451.3150684931505], [8.0, 489.30769230769215], [9.0, 547.8], [10.0, 585.8295454545454], [11.0, 647.844444444445], [12.0, 806.8314606741576], [13.0, 743.1145833333335], [14.0, 814.8118811881185], [15.0, 884.8712871287131], [16.0, 838.7523809523811], [17.0, 1037.34375], [18.0, 1083.1681415929208], [19.0, 995.64406779661], [20.0, 1343.0107526881725], [21.0, 1250.8362068965516], [22.0, 1313.4537037037037], [23.0, 1401.4259259259263], [24.0, 1313.3076923076928], [25.0, 1449.2758620689651], [26.0, 1501.1454545454544], [27.0, 1700.3153153153155], [28.0, 1658.0982142857147], [29.0, 1723.0263157894733], [30.0, 1826.6239316239316], [31.0, 1953.5412844036696], [32.0, 1891.9363636363637], [33.0, 2110.8278688524606], [34.0, 2080.102803738317], [35.0, 1992.827586206897], [36.0, 2419.7672413793107], [37.0, 2180.6181818181813], [38.0, 2619.3982300884954], [39.0, 2494.0619469026547], [40.0, 2520.033613445379], [41.0, 2604.4716981132065], [42.0, 2633.53982300885], [43.0, 2886.5178571428573], [44.0, 2596.898437500002], [45.0, 3311.3428571428562], [46.0, 2861.3697478991594], [47.0, 2861.136363636365], [48.0, 2962.3879310344814], [49.0, 3315.008771929824], [50.0, 3356.7094017094014], [51.0, 3063.3504273504277], [52.0, 3312.6875000000005], [53.0, 3712.469026548672], [54.0, 3480.3684210526317], [55.0, 3719.135135135135], [56.0, 3539.252032520324], [57.0, 3785.4220183486236], [58.0, 3654.0344827586205], [59.0, 3776.184873949581], [60.0, 3929.07635632954], [1.0, 645.7]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[38.340414161656575, 2449.0120240481046]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 284.7, "minX": 1.71864612E12, "maxY": 218633.91666666666, "series": [{"data": [[1.71864636E12, 64512.683333333334], [1.71864654E12, 66844.61666666667], [1.71864648E12, 67255.1], [1.71864666E12, 67823.55], [1.71864618E12, 45143.3], [1.7186466E12, 68060.05], [1.71864612E12, 8625.666666666666], [1.7186463E12, 63050.98333333333], [1.71864672E12, 218633.91666666666], [1.71864624E12, 58955.23333333333], [1.71864642E12, 66529.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71864636E12, 2248.5833333333335], [1.71864654E12, 2273.2166666666667], [1.71864648E12, 2285.0666666666666], [1.71864666E12, 2330.85], [1.71864618E12, 1511.6333333333334], [1.7186466E12, 2325.2], [1.71864612E12, 284.7], [1.7186463E12, 2210.366666666667], [1.71864672E12, 1218.6333333333334], [1.71864624E12, 2025.4], [1.71864642E12, 2281.483333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864672E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 372.8910891089107, "minX": 1.71864612E12, "maxY": 4011.886836027712, "series": [{"data": [[1.71864636E12, 1763.2490660024912], [1.71864654E12, 3313.081381011096], [1.71864648E12, 2793.859068627454], [1.71864666E12, 3938.2110311750635], [1.71864618E12, 479.78212290502796], [1.7186466E12, 3765.2460796139917], [1.71864612E12, 372.8910891089107], [1.7186463E12, 1306.1030534351128], [1.71864672E12, 4011.886836027712], [1.71864624E12, 851.8088642659279], [1.71864642E12, 2298.100861008611]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864672E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 372.1485148514851, "minX": 1.71864612E12, "maxY": 3984.5127020785226, "series": [{"data": [[1.71864636E12, 1762.028642590286], [1.71864654E12, 3311.68680641184], [1.71864648E12, 2792.5453431372553], [1.71864666E12, 3936.979616306957], [1.71864618E12, 478.5288640595902], [1.7186466E12, 3763.955367913152], [1.71864612E12, 372.1485148514851], [1.7186463E12, 1304.9058524173017], [1.71864672E12, 3984.5127020785226], [1.71864624E12, 850.5318559556789], [1.71864642E12, 2296.574415744156]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864672E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.6834264432029801, "minX": 1.71864612E12, "maxY": 2.822170900692839, "series": [{"data": [[1.71864636E12, 1.317559153175592], [1.71864654E12, 2.2392108508014816], [1.71864648E12, 1.8958333333333344], [1.71864666E12, 2.362110311750602], [1.71864618E12, 0.6834264432029801], [1.7186466E12, 2.3486127864897446], [1.71864612E12, 1.524752475247526], [1.7186463E12, 1.1743002544529266], [1.71864672E12, 2.822170900692839], [1.71864624E12, 0.8891966759002767], [1.71864642E12, 1.7404674046740474]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864672E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 92.0, "minX": 1.71864612E12, "maxY": 8600.0, "series": [{"data": [[1.71864636E12, 4561.0], [1.71864654E12, 7217.0], [1.71864648E12, 6396.0], [1.71864666E12, 8458.0], [1.71864618E12, 1663.0], [1.7186466E12, 8080.0], [1.71864612E12, 976.0], [1.7186463E12, 3581.0], [1.71864672E12, 8600.0], [1.71864624E12, 2201.0], [1.71864642E12, 5406.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71864636E12, 137.0], [1.71864654E12, 118.0], [1.71864648E12, 134.0], [1.71864666E12, 142.0], [1.71864618E12, 92.0], [1.7186466E12, 100.0], [1.71864612E12, 101.0], [1.7186463E12, 133.0], [1.71864672E12, 128.0], [1.71864624E12, 104.0], [1.71864642E12, 116.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71864636E12, 3544.3999999999996], [1.71864654E12, 6317.9], [1.71864648E12, 5356.0], [1.71864666E12, 7342.400000000001], [1.71864618E12, 765.5999999999999], [1.7186466E12, 7103.0], [1.71864612E12, 515.0], [1.7186463E12, 2679.6000000000004], [1.71864672E12, 7616.0], [1.71864624E12, 1814.7], [1.71864642E12, 4484.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71864636E12, 4111.9], [1.71864654E12, 6829.34], [1.71864648E12, 5998.85], [1.71864666E12, 7986.36], [1.71864618E12, 1530.3000000000002], [1.7186466E12, 7785.200000000001], [1.71864612E12, 973.5800000000005], [1.7186463E12, 3101.47], [1.71864672E12, 8229.819999999998], [1.71864624E12, 2134.3199999999997], [1.71864642E12, 5009.08]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71864636E12, 1438.0], [1.71864654E12, 3054.0], [1.71864648E12, 2546.0], [1.71864666E12, 3590.0], [1.71864618E12, 452.0], [1.7186466E12, 3542.0], [1.71864612E12, 401.0], [1.7186463E12, 1036.0], [1.71864672E12, 3928.5], [1.71864624E12, 692.5], [1.71864642E12, 2071.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71864636E12, 3755.6499999999996], [1.71864654E12, 6558.45], [1.71864648E12, 5510.0], [1.71864666E12, 7642.6], [1.71864618E12, 1161.4999999999998], [1.7186466E12, 7379.2], [1.71864612E12, 591.2999999999994], [1.7186463E12, 2861.65], [1.71864672E12, 7923.15], [1.71864624E12, 1957.4], [1.71864642E12, 4719.799999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864672E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2892.0, "series": [{"data": [[2.0, 424.0], [8.0, 534.0], [9.0, 751.0], [10.0, 1374.5], [11.0, 1283.0], [3.0, 415.0], [12.0, 1458.0], [13.0, 1836.0], [14.0, 2124.0], [15.0, 1960.0], [1.0, 305.0], [4.0, 399.0], [16.0, 2740.0], [17.0, 2280.5], [18.0, 2192.0], [19.0, 2189.0], [5.0, 427.0], [20.0, 1440.5], [21.0, 1886.5], [22.0, 2892.0], [23.0, 1893.5], [6.0, 639.0], [7.0, 461.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 1385.0], [8.0, 1271.0], [17.0, 1209.0], [18.0, 0.0], [9.0, 1410.0], [11.0, 1353.0], [22.0, 1440.5], [12.0, 1299.0], [13.0, 1554.5], [14.0, 0.0], [15.0, 1213.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2892.0, "series": [{"data": [[2.0, 422.5], [8.0, 532.0], [9.0, 751.0], [10.0, 1374.0], [11.0, 1281.0], [3.0, 415.0], [12.0, 1456.5], [13.0, 1836.0], [14.0, 2122.0], [15.0, 1958.0], [1.0, 305.0], [4.0, 398.0], [16.0, 2740.0], [17.0, 2277.0], [18.0, 2190.0], [19.0, 2187.0], [5.0, 427.0], [20.0, 1440.0], [21.0, 1884.5], [22.0, 2892.0], [23.0, 1893.5], [6.0, 638.0], [7.0, 460.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 1090.0], [8.0, 961.0], [17.0, 1009.0], [18.0, 0.0], [9.0, 1151.0], [11.0, 1126.0], [22.0, 1145.5], [12.0, 1041.5], [13.0, 1325.5], [14.0, 0.0], [15.0, 968.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.71864612E12, "maxY": 13.9, "series": [{"data": [[1.71864636E12, 13.55], [1.71864654E12, 13.7], [1.71864648E12, 13.716666666666667], [1.71864666E12, 13.9], [1.71864618E12, 9.05], [1.7186466E12, 13.816666666666666], [1.71864612E12, 1.7333333333333334], [1.7186463E12, 13.133333333333333], [1.71864672E12, 6.35], [1.71864624E12, 12.133333333333333], [1.71864642E12, 13.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864672E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71864612E12, "maxY": 13.85, "series": [{"data": [[1.71864636E12, 13.333333333333334], [1.71864654E12, 13.5], [1.71864648E12, 13.566666666666666], [1.71864666E12, 13.85], [1.71864618E12, 8.95], [1.7186466E12, 13.783333333333333], [1.71864612E12, 1.6833333333333333], [1.7186463E12, 13.1], [1.71864672E12, 6.6], [1.71864624E12, 12.033333333333333], [1.71864642E12, 13.516666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71864672E12, 0.6]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.71864636E12, 0.05], [1.71864654E12, 0.016666666666666666], [1.71864648E12, 0.03333333333333333], [1.71864666E12, 0.05], [1.7186466E12, 0.03333333333333333], [1.71864672E12, 0.016666666666666666], [1.71864642E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864672E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71864612E12, "maxY": 13.85, "series": [{"data": [[1.71864636E12, 13.333333333333334], [1.71864654E12, 13.5], [1.71864648E12, 13.566666666666666], [1.71864666E12, 13.85], [1.71864618E12, 8.95], [1.7186466E12, 13.783333333333333], [1.71864612E12, 1.6833333333333333], [1.7186463E12, 13.1], [1.71864672E12, 6.6], [1.71864624E12, 12.033333333333333], [1.71864642E12, 13.516666666666667]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}, {"data": [[1.71864636E12, 0.05], [1.71864654E12, 0.016666666666666666], [1.71864648E12, 0.03333333333333333], [1.71864666E12, 0.05], [1.7186466E12, 0.03333333333333333], [1.71864672E12, 0.6166666666666667], [1.71864642E12, 0.03333333333333333]], "isOverall": false, "label": "TitleBasics by primary_title-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864672E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71864612E12, "maxY": 13.85, "series": [{"data": [[1.71864636E12, 13.333333333333334], [1.71864654E12, 13.5], [1.71864648E12, 13.566666666666666], [1.71864666E12, 13.85], [1.71864618E12, 8.95], [1.7186466E12, 13.783333333333333], [1.71864612E12, 1.6833333333333333], [1.7186463E12, 13.1], [1.71864672E12, 6.6], [1.71864624E12, 12.033333333333333], [1.71864642E12, 13.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71864636E12, 0.05], [1.71864654E12, 0.016666666666666666], [1.71864648E12, 0.03333333333333333], [1.71864666E12, 0.05], [1.7186466E12, 0.03333333333333333], [1.71864672E12, 0.6166666666666667], [1.71864642E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864672E12, "title": "Total Transactions Per Second"}},
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

