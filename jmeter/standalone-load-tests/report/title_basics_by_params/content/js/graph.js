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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 16840.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 7.0], [0.3, 8.0], [0.4, 9.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 12.0], [0.9, 12.0], [1.0, 13.0], [1.1, 14.0], [1.2, 15.0], [1.3, 16.0], [1.4, 17.0], [1.5, 19.0], [1.6, 22.0], [1.7, 28.0], [1.8, 38.0], [1.9, 45.0], [2.0, 53.0], [2.1, 64.0], [2.2, 70.0], [2.3, 75.0], [2.4, 83.0], [2.5, 89.0], [2.6, 95.0], [2.7, 99.0], [2.8, 103.0], [2.9, 107.0], [3.0, 112.0], [3.1, 115.0], [3.2, 118.0], [3.3, 121.0], [3.4, 124.0], [3.5, 126.0], [3.6, 132.0], [3.7, 134.0], [3.8, 138.0], [3.9, 141.0], [4.0, 145.0], [4.1, 148.0], [4.2, 152.0], [4.3, 155.0], [4.4, 159.0], [4.5, 164.0], [4.6, 165.0], [4.7, 168.0], [4.8, 170.0], [4.9, 172.0], [5.0, 175.0], [5.1, 178.0], [5.2, 180.0], [5.3, 181.0], [5.4, 183.0], [5.5, 185.0], [5.6, 187.0], [5.7, 188.0], [5.8, 190.0], [5.9, 191.0], [6.0, 193.0], [6.1, 194.0], [6.2, 196.0], [6.3, 197.0], [6.4, 199.0], [6.5, 199.0], [6.6, 201.0], [6.7, 203.0], [6.8, 204.0], [6.9, 206.0], [7.0, 208.0], [7.1, 210.0], [7.2, 212.0], [7.3, 215.0], [7.4, 216.0], [7.5, 217.0], [7.6, 219.0], [7.7, 222.0], [7.8, 224.0], [7.9, 226.0], [8.0, 228.0], [8.1, 230.0], [8.2, 232.0], [8.3, 235.0], [8.4, 237.0], [8.5, 240.0], [8.6, 243.0], [8.7, 245.0], [8.8, 249.0], [8.9, 252.0], [9.0, 255.0], [9.1, 258.0], [9.2, 260.0], [9.3, 262.0], [9.4, 265.0], [9.5, 267.0], [9.6, 269.0], [9.7, 271.0], [9.8, 274.0], [9.9, 277.0], [10.0, 279.0], [10.1, 281.0], [10.2, 282.0], [10.3, 284.0], [10.4, 286.0], [10.5, 287.0], [10.6, 289.0], [10.7, 291.0], [10.8, 293.0], [10.9, 295.0], [11.0, 296.0], [11.1, 298.0], [11.2, 300.0], [11.3, 302.0], [11.4, 305.0], [11.5, 307.0], [11.6, 309.0], [11.7, 310.0], [11.8, 313.0], [11.9, 315.0], [12.0, 317.0], [12.1, 321.0], [12.2, 325.0], [12.3, 328.0], [12.4, 334.0], [12.5, 337.0], [12.6, 340.0], [12.7, 344.0], [12.8, 349.0], [12.9, 353.0], [13.0, 356.0], [13.1, 359.0], [13.2, 364.0], [13.3, 367.0], [13.4, 372.0], [13.5, 374.0], [13.6, 378.0], [13.7, 380.0], [13.8, 383.0], [13.9, 385.0], [14.0, 389.0], [14.1, 391.0], [14.2, 393.0], [14.3, 395.0], [14.4, 397.0], [14.5, 399.0], [14.6, 400.0], [14.7, 402.0], [14.8, 404.0], [14.9, 406.0], [15.0, 408.0], [15.1, 409.0], [15.2, 411.0], [15.3, 412.0], [15.4, 414.0], [15.5, 416.0], [15.6, 419.0], [15.7, 421.0], [15.8, 424.0], [15.9, 426.0], [16.0, 429.0], [16.1, 431.0], [16.2, 435.0], [16.3, 438.0], [16.4, 441.0], [16.5, 445.0], [16.6, 447.0], [16.7, 449.0], [16.8, 453.0], [16.9, 456.0], [17.0, 460.0], [17.1, 463.0], [17.2, 468.0], [17.3, 470.0], [17.4, 473.0], [17.5, 474.0], [17.6, 477.0], [17.7, 480.0], [17.8, 483.0], [17.9, 486.0], [18.0, 487.0], [18.1, 489.0], [18.2, 491.0], [18.3, 492.0], [18.4, 494.0], [18.5, 496.0], [18.6, 498.0], [18.7, 500.0], [18.8, 503.0], [18.9, 505.0], [19.0, 508.0], [19.1, 510.0], [19.2, 514.0], [19.3, 516.0], [19.4, 518.0], [19.5, 522.0], [19.6, 524.0], [19.7, 527.0], [19.8, 531.0], [19.9, 534.0], [20.0, 538.0], [20.1, 542.0], [20.2, 545.0], [20.3, 548.0], [20.4, 552.0], [20.5, 554.0], [20.6, 557.0], [20.7, 560.0], [20.8, 563.0], [20.9, 567.0], [21.0, 570.0], [21.1, 572.0], [21.2, 575.0], [21.3, 579.0], [21.4, 582.0], [21.5, 585.0], [21.6, 587.0], [21.7, 590.0], [21.8, 592.0], [21.9, 594.0], [22.0, 595.0], [22.1, 599.0], [22.2, 600.0], [22.3, 602.0], [22.4, 604.0], [22.5, 606.0], [22.6, 608.0], [22.7, 610.0], [22.8, 612.0], [22.9, 614.0], [23.0, 617.0], [23.1, 619.0], [23.2, 621.0], [23.3, 623.0], [23.4, 625.0], [23.5, 628.0], [23.6, 630.0], [23.7, 632.0], [23.8, 635.0], [23.9, 638.0], [24.0, 641.0], [24.1, 644.0], [24.2, 646.0], [24.3, 649.0], [24.4, 651.0], [24.5, 653.0], [24.6, 656.0], [24.7, 658.0], [24.8, 661.0], [24.9, 663.0], [25.0, 666.0], [25.1, 668.0], [25.2, 671.0], [25.3, 673.0], [25.4, 675.0], [25.5, 677.0], [25.6, 680.0], [25.7, 682.0], [25.8, 685.0], [25.9, 687.0], [26.0, 689.0], [26.1, 691.0], [26.2, 693.0], [26.3, 695.0], [26.4, 697.0], [26.5, 700.0], [26.6, 703.0], [26.7, 704.0], [26.8, 706.0], [26.9, 708.0], [27.0, 711.0], [27.1, 713.0], [27.2, 716.0], [27.3, 718.0], [27.4, 722.0], [27.5, 725.0], [27.6, 729.0], [27.7, 733.0], [27.8, 736.0], [27.9, 739.0], [28.0, 742.0], [28.1, 747.0], [28.2, 751.0], [28.3, 755.0], [28.4, 758.0], [28.5, 762.0], [28.6, 765.0], [28.7, 770.0], [28.8, 773.0], [28.9, 775.0], [29.0, 779.0], [29.1, 782.0], [29.2, 785.0], [29.3, 787.0], [29.4, 790.0], [29.5, 793.0], [29.6, 796.0], [29.7, 799.0], [29.8, 802.0], [29.9, 804.0], [30.0, 810.0], [30.1, 814.0], [30.2, 820.0], [30.3, 824.0], [30.4, 828.0], [30.5, 832.0], [30.6, 837.0], [30.7, 841.0], [30.8, 846.0], [30.9, 851.0], [31.0, 855.0], [31.1, 859.0], [31.2, 864.0], [31.3, 870.0], [31.4, 874.0], [31.5, 878.0], [31.6, 882.0], [31.7, 886.0], [31.8, 889.0], [31.9, 893.0], [32.0, 896.0], [32.1, 899.0], [32.2, 902.0], [32.3, 907.0], [32.4, 909.0], [32.5, 913.0], [32.6, 918.0], [32.7, 923.0], [32.8, 928.0], [32.9, 933.0], [33.0, 938.0], [33.1, 943.0], [33.2, 949.0], [33.3, 955.0], [33.4, 960.0], [33.5, 967.0], [33.6, 974.0], [33.7, 979.0], [33.8, 982.0], [33.9, 986.0], [34.0, 989.0], [34.1, 993.0], [34.2, 996.0], [34.3, 999.0], [34.4, 1003.0], [34.5, 1006.0], [34.6, 1009.0], [34.7, 1013.0], [34.8, 1016.0], [34.9, 1019.0], [35.0, 1024.0], [35.1, 1027.0], [35.2, 1031.0], [35.3, 1036.0], [35.4, 1040.0], [35.5, 1046.0], [35.6, 1051.0], [35.7, 1058.0], [35.8, 1064.0], [35.9, 1069.0], [36.0, 1074.0], [36.1, 1077.0], [36.2, 1082.0], [36.3, 1086.0], [36.4, 1089.0], [36.5, 1093.0], [36.6, 1096.0], [36.7, 1099.0], [36.8, 1101.0], [36.9, 1105.0], [37.0, 1111.0], [37.1, 1116.0], [37.2, 1122.0], [37.3, 1128.0], [37.4, 1134.0], [37.5, 1143.0], [37.6, 1151.0], [37.7, 1158.0], [37.8, 1168.0], [37.9, 1175.0], [38.0, 1180.0], [38.1, 1186.0], [38.2, 1192.0], [38.3, 1198.0], [38.4, 1205.0], [38.5, 1211.0], [38.6, 1217.0], [38.7, 1224.0], [38.8, 1230.0], [38.9, 1237.0], [39.0, 1249.0], [39.1, 1259.0], [39.2, 1267.0], [39.3, 1274.0], [39.4, 1283.0], [39.5, 1292.0], [39.6, 1300.0], [39.7, 1305.0], [39.8, 1310.0], [39.9, 1317.0], [40.0, 1322.0], [40.1, 1327.0], [40.2, 1335.0], [40.3, 1344.0], [40.4, 1354.0], [40.5, 1362.0], [40.6, 1370.0], [40.7, 1378.0], [40.8, 1390.0], [40.9, 1397.0], [41.0, 1407.0], [41.1, 1416.0], [41.2, 1424.0], [41.3, 1434.0], [41.4, 1444.0], [41.5, 1456.0], [41.6, 1470.0], [41.7, 1481.0], [41.8, 1487.0], [41.9, 1494.0], [42.0, 1503.0], [42.1, 1509.0], [42.2, 1519.0], [42.3, 1525.0], [42.4, 1539.0], [42.5, 1546.0], [42.6, 1555.0], [42.7, 1566.0], [42.8, 1580.0], [42.9, 1592.0], [43.0, 1600.0], [43.1, 1607.0], [43.2, 1618.0], [43.3, 1627.0], [43.4, 1638.0], [43.5, 1650.0], [43.6, 1660.0], [43.7, 1669.0], [43.8, 1681.0], [43.9, 1690.0], [44.0, 1701.0], [44.1, 1709.0], [44.2, 1717.0], [44.3, 1728.0], [44.4, 1734.0], [44.5, 1744.0], [44.6, 1756.0], [44.7, 1763.0], [44.8, 1773.0], [44.9, 1782.0], [45.0, 1789.0], [45.1, 1795.0], [45.2, 1800.0], [45.3, 1804.0], [45.4, 1809.0], [45.5, 1815.0], [45.6, 1821.0], [45.7, 1829.0], [45.8, 1834.0], [45.9, 1843.0], [46.0, 1848.0], [46.1, 1855.0], [46.2, 1861.0], [46.3, 1868.0], [46.4, 1874.0], [46.5, 1879.0], [46.6, 1884.0], [46.7, 1888.0], [46.8, 1896.0], [46.9, 1900.0], [47.0, 1905.0], [47.1, 1909.0], [47.2, 1914.0], [47.3, 1920.0], [47.4, 1928.0], [47.5, 1934.0], [47.6, 1945.0], [47.7, 1952.0], [47.8, 1962.0], [47.9, 1972.0], [48.0, 1977.0], [48.1, 1988.0], [48.2, 1993.0], [48.3, 1995.0], [48.4, 2000.0], [48.5, 2004.0], [48.6, 2009.0], [48.7, 2015.0], [48.8, 2018.0], [48.9, 2025.0], [49.0, 2030.0], [49.1, 2036.0], [49.2, 2042.0], [49.3, 2047.0], [49.4, 2053.0], [49.5, 2059.0], [49.6, 2063.0], [49.7, 2065.0], [49.8, 2071.0], [49.9, 2076.0], [50.0, 2081.0], [50.1, 2086.0], [50.2, 2089.0], [50.3, 2095.0], [50.4, 2100.0], [50.5, 2102.0], [50.6, 2106.0], [50.7, 2110.0], [50.8, 2116.0], [50.9, 2119.0], [51.0, 2126.0], [51.1, 2131.0], [51.2, 2138.0], [51.3, 2144.0], [51.4, 2148.0], [51.5, 2153.0], [51.6, 2158.0], [51.7, 2162.0], [51.8, 2166.0], [51.9, 2170.0], [52.0, 2174.0], [52.1, 2178.0], [52.2, 2182.0], [52.3, 2188.0], [52.4, 2193.0], [52.5, 2196.0], [52.6, 2200.0], [52.7, 2205.0], [52.8, 2208.0], [52.9, 2212.0], [53.0, 2216.0], [53.1, 2220.0], [53.2, 2224.0], [53.3, 2228.0], [53.4, 2233.0], [53.5, 2236.0], [53.6, 2240.0], [53.7, 2242.0], [53.8, 2246.0], [53.9, 2249.0], [54.0, 2252.0], [54.1, 2255.0], [54.2, 2261.0], [54.3, 2264.0], [54.4, 2267.0], [54.5, 2270.0], [54.6, 2274.0], [54.7, 2276.0], [54.8, 2279.0], [54.9, 2281.0], [55.0, 2283.0], [55.1, 2286.0], [55.2, 2287.0], [55.3, 2290.0], [55.4, 2292.0], [55.5, 2294.0], [55.6, 2296.0], [55.7, 2297.0], [55.8, 2299.0], [55.9, 2301.0], [56.0, 2302.0], [56.1, 2304.0], [56.2, 2306.0], [56.3, 2307.0], [56.4, 2309.0], [56.5, 2310.0], [56.6, 2312.0], [56.7, 2315.0], [56.8, 2316.0], [56.9, 2318.0], [57.0, 2320.0], [57.1, 2322.0], [57.2, 2325.0], [57.3, 2327.0], [57.4, 2329.0], [57.5, 2331.0], [57.6, 2334.0], [57.7, 2336.0], [57.8, 2339.0], [57.9, 2341.0], [58.0, 2344.0], [58.1, 2346.0], [58.2, 2348.0], [58.3, 2349.0], [58.4, 2351.0], [58.5, 2353.0], [58.6, 2356.0], [58.7, 2358.0], [58.8, 2361.0], [58.9, 2363.0], [59.0, 2365.0], [59.1, 2366.0], [59.2, 2369.0], [59.3, 2370.0], [59.4, 2372.0], [59.5, 2373.0], [59.6, 2375.0], [59.7, 2376.0], [59.8, 2378.0], [59.9, 2380.0], [60.0, 2382.0], [60.1, 2383.0], [60.2, 2385.0], [60.3, 2385.0], [60.4, 2387.0], [60.5, 2388.0], [60.6, 2390.0], [60.7, 2391.0], [60.8, 2392.0], [60.9, 2393.0], [61.0, 2394.0], [61.1, 2395.0], [61.2, 2397.0], [61.3, 2398.0], [61.4, 2398.0], [61.5, 2400.0], [61.6, 2401.0], [61.7, 2402.0], [61.8, 2403.0], [61.9, 2404.0], [62.0, 2405.0], [62.1, 2406.0], [62.2, 2408.0], [62.3, 2409.0], [62.4, 2410.0], [62.5, 2411.0], [62.6, 2412.0], [62.7, 2413.0], [62.8, 2414.0], [62.9, 2415.0], [63.0, 2416.0], [63.1, 2417.0], [63.2, 2419.0], [63.3, 2420.0], [63.4, 2421.0], [63.5, 2422.0], [63.6, 2422.0], [63.7, 2423.0], [63.8, 2425.0], [63.9, 2425.0], [64.0, 2426.0], [64.1, 2428.0], [64.2, 2429.0], [64.3, 2430.0], [64.4, 2432.0], [64.5, 2434.0], [64.6, 2435.0], [64.7, 2436.0], [64.8, 2437.0], [64.9, 2439.0], [65.0, 2440.0], [65.1, 2441.0], [65.2, 2442.0], [65.3, 2444.0], [65.4, 2445.0], [65.5, 2446.0], [65.6, 2447.0], [65.7, 2449.0], [65.8, 2450.0], [65.9, 2451.0], [66.0, 2453.0], [66.1, 2455.0], [66.2, 2456.0], [66.3, 2457.0], [66.4, 2459.0], [66.5, 2461.0], [66.6, 2462.0], [66.7, 2463.0], [66.8, 2465.0], [66.9, 2466.0], [67.0, 2467.0], [67.1, 2468.0], [67.2, 2470.0], [67.3, 2471.0], [67.4, 2472.0], [67.5, 2472.0], [67.6, 2473.0], [67.7, 2474.0], [67.8, 2475.0], [67.9, 2476.0], [68.0, 2477.0], [68.1, 2479.0], [68.2, 2479.0], [68.3, 2480.0], [68.4, 2481.0], [68.5, 2482.0], [68.6, 2483.0], [68.7, 2484.0], [68.8, 2485.0], [68.9, 2486.0], [69.0, 2486.0], [69.1, 2487.0], [69.2, 2488.0], [69.3, 2488.0], [69.4, 2489.0], [69.5, 2489.0], [69.6, 2490.0], [69.7, 2491.0], [69.8, 2491.0], [69.9, 2492.0], [70.0, 2493.0], [70.1, 2493.0], [70.2, 2494.0], [70.3, 2494.0], [70.4, 2495.0], [70.5, 2495.0], [70.6, 2496.0], [70.7, 2497.0], [70.8, 2497.0], [70.9, 2498.0], [71.0, 2499.0], [71.1, 2500.0], [71.2, 2500.0], [71.3, 2501.0], [71.4, 2501.0], [71.5, 2502.0], [71.6, 2503.0], [71.7, 2503.0], [71.8, 2504.0], [71.9, 2505.0], [72.0, 2505.0], [72.1, 2506.0], [72.2, 2506.0], [72.3, 2507.0], [72.4, 2507.0], [72.5, 2508.0], [72.6, 2509.0], [72.7, 2509.0], [72.8, 2510.0], [72.9, 2510.0], [73.0, 2511.0], [73.1, 2512.0], [73.2, 2513.0], [73.3, 2513.0], [73.4, 2514.0], [73.5, 2515.0], [73.6, 2515.0], [73.7, 2516.0], [73.8, 2517.0], [73.9, 2517.0], [74.0, 2518.0], [74.1, 2519.0], [74.2, 2519.0], [74.3, 2520.0], [74.4, 2520.0], [74.5, 2521.0], [74.6, 2522.0], [74.7, 2523.0], [74.8, 2524.0], [74.9, 2524.0], [75.0, 2525.0], [75.1, 2526.0], [75.2, 2527.0], [75.3, 2528.0], [75.4, 2529.0], [75.5, 2529.0], [75.6, 2530.0], [75.7, 2531.0], [75.8, 2532.0], [75.9, 2533.0], [76.0, 2533.0], [76.1, 2534.0], [76.2, 2536.0], [76.3, 2537.0], [76.4, 2538.0], [76.5, 2538.0], [76.6, 2540.0], [76.7, 2541.0], [76.8, 2542.0], [76.9, 2542.0], [77.0, 2544.0], [77.1, 2544.0], [77.2, 2545.0], [77.3, 2546.0], [77.4, 2547.0], [77.5, 2548.0], [77.6, 2549.0], [77.7, 2550.0], [77.8, 2551.0], [77.9, 2552.0], [78.0, 2553.0], [78.1, 2553.0], [78.2, 2554.0], [78.3, 2555.0], [78.4, 2556.0], [78.5, 2556.0], [78.6, 2557.0], [78.7, 2558.0], [78.8, 2559.0], [78.9, 2560.0], [79.0, 2561.0], [79.1, 2562.0], [79.2, 2563.0], [79.3, 2564.0], [79.4, 2564.0], [79.5, 2565.0], [79.6, 2566.0], [79.7, 2567.0], [79.8, 2568.0], [79.9, 2569.0], [80.0, 2570.0], [80.1, 2570.0], [80.2, 2571.0], [80.3, 2572.0], [80.4, 2573.0], [80.5, 2574.0], [80.6, 2575.0], [80.7, 2576.0], [80.8, 2577.0], [80.9, 2578.0], [81.0, 2579.0], [81.1, 2580.0], [81.2, 2581.0], [81.3, 2581.0], [81.4, 2582.0], [81.5, 2583.0], [81.6, 2584.0], [81.7, 2585.0], [81.8, 2586.0], [81.9, 2587.0], [82.0, 2588.0], [82.1, 2588.0], [82.2, 2589.0], [82.3, 2590.0], [82.4, 2591.0], [82.5, 2592.0], [82.6, 2593.0], [82.7, 2594.0], [82.8, 2595.0], [82.9, 2596.0], [83.0, 2596.0], [83.1, 2597.0], [83.2, 2598.0], [83.3, 2599.0], [83.4, 2600.0], [83.5, 2600.0], [83.6, 2601.0], [83.7, 2602.0], [83.8, 2603.0], [83.9, 2604.0], [84.0, 2605.0], [84.1, 2606.0], [84.2, 2607.0], [84.3, 2608.0], [84.4, 2609.0], [84.5, 2610.0], [84.6, 2611.0], [84.7, 2612.0], [84.8, 2613.0], [84.9, 2614.0], [85.0, 2616.0], [85.1, 2617.0], [85.2, 2618.0], [85.3, 2620.0], [85.4, 2621.0], [85.5, 2623.0], [85.6, 2624.0], [85.7, 2626.0], [85.8, 2627.0], [85.9, 2630.0], [86.0, 2633.0], [86.1, 2636.0], [86.2, 2638.0], [86.3, 2640.0], [86.4, 2642.0], [86.5, 2645.0], [86.6, 2647.0], [86.7, 2649.0], [86.8, 2651.0], [86.9, 2653.0], [87.0, 2656.0], [87.1, 2659.0], [87.2, 2661.0], [87.3, 2664.0], [87.4, 2666.0], [87.5, 2668.0], [87.6, 2671.0], [87.7, 2674.0], [87.8, 2677.0], [87.9, 2679.0], [88.0, 2681.0], [88.1, 2683.0], [88.2, 2685.0], [88.3, 2689.0], [88.4, 2691.0], [88.5, 2694.0], [88.6, 2696.0], [88.7, 2699.0], [88.8, 2702.0], [88.9, 2706.0], [89.0, 2708.0], [89.1, 2711.0], [89.2, 2715.0], [89.3, 2717.0], [89.4, 2721.0], [89.5, 2726.0], [89.6, 2730.0], [89.7, 2733.0], [89.8, 2737.0], [89.9, 2743.0], [90.0, 2748.0], [90.1, 2753.0], [90.2, 2756.0], [90.3, 2760.0], [90.4, 2764.0], [90.5, 2768.0], [90.6, 2773.0], [90.7, 2777.0], [90.8, 2782.0], [90.9, 2786.0], [91.0, 2789.0], [91.1, 2793.0], [91.2, 2798.0], [91.3, 2801.0], [91.4, 2806.0], [91.5, 2810.0], [91.6, 2813.0], [91.7, 2819.0], [91.8, 2823.0], [91.9, 2828.0], [92.0, 2834.0], [92.1, 2839.0], [92.2, 2846.0], [92.3, 2852.0], [92.4, 2857.0], [92.5, 2865.0], [92.6, 2872.0], [92.7, 2875.0], [92.8, 2879.0], [92.9, 2882.0], [93.0, 2886.0], [93.1, 2890.0], [93.2, 2895.0], [93.3, 2901.0], [93.4, 2906.0], [93.5, 2912.0], [93.6, 2919.0], [93.7, 2926.0], [93.8, 2933.0], [93.9, 2938.0], [94.0, 2946.0], [94.1, 2950.0], [94.2, 2956.0], [94.3, 2964.0], [94.4, 2972.0], [94.5, 2982.0], [94.6, 2990.0], [94.7, 3001.0], [94.8, 3008.0], [94.9, 3017.0], [95.0, 3028.0], [95.1, 3049.0], [95.2, 3058.0], [95.3, 3072.0], [95.4, 3081.0], [95.5, 3092.0], [95.6, 3108.0], [95.7, 3115.0], [95.8, 3123.0], [95.9, 3130.0], [96.0, 3138.0], [96.1, 3151.0], [96.2, 3162.0], [96.3, 3171.0], [96.4, 3186.0], [96.5, 3198.0], [96.6, 3208.0], [96.7, 3223.0], [96.8, 3251.0], [96.9, 3271.0], [97.0, 3289.0], [97.1, 3308.0], [97.2, 3325.0], [97.3, 3340.0], [97.4, 3364.0], [97.5, 3381.0], [97.6, 3403.0], [97.7, 3425.0], [97.8, 3449.0], [97.9, 3467.0], [98.0, 3503.0], [98.1, 3539.0], [98.2, 3572.0], [98.3, 3603.0], [98.4, 3653.0], [98.5, 3704.0], [98.6, 3751.0], [98.7, 3802.0], [98.8, 3865.0], [98.9, 3903.0], [99.0, 3935.0], [99.1, 4034.0], [99.2, 4225.0], [99.3, 4427.0], [99.4, 4554.0], [99.5, 4628.0], [99.6, 4786.0], [99.7, 5425.0], [99.8, 6978.0], [99.9, 8096.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2490.0, "series": [{"data": [[0.0, 552.0], [600.0, 878.0], [700.0, 651.0], [800.0, 487.0], [900.0, 446.0], [1000.0, 489.0], [1100.0, 324.0], [1200.0, 256.0], [1300.0, 279.0], [1400.0, 204.0], [1500.0, 207.0], [1600.0, 201.0], [1700.0, 244.0], [1800.0, 343.0], [1900.0, 306.0], [2000.0, 407.0], [2100.0, 443.0], [2200.0, 658.0], [2300.0, 1138.0], [2400.0, 1955.0], [2500.0, 2490.0], [2600.0, 1081.0], [2800.0, 409.0], [2700.0, 511.0], [2900.0, 288.0], [3000.0, 177.0], [3100.0, 196.0], [3200.0, 106.0], [3300.0, 106.0], [3400.0, 85.0], [3500.0, 61.0], [3700.0, 44.0], [3600.0, 38.0], [3800.0, 38.0], [3900.0, 36.0], [4000.0, 16.0], [4100.0, 9.0], [4200.0, 10.0], [4300.0, 11.0], [4400.0, 14.0], [4500.0, 15.0], [4600.0, 27.0], [4700.0, 7.0], [4800.0, 4.0], [4900.0, 5.0], [5100.0, 2.0], [5000.0, 1.0], [5200.0, 4.0], [5300.0, 2.0], [5400.0, 4.0], [5500.0, 9.0], [5600.0, 3.0], [6200.0, 1.0], [6300.0, 1.0], [6400.0, 2.0], [6500.0, 1.0], [6900.0, 4.0], [7000.0, 5.0], [7100.0, 2.0], [7400.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7900.0, 1.0], [7700.0, 6.0], [8000.0, 1.0], [8100.0, 2.0], [8200.0, 1.0], [8300.0, 1.0], [9200.0, 1.0], [9500.0, 1.0], [9700.0, 2.0], [12000.0, 1.0], [12100.0, 1.0], [12300.0, 3.0], [12500.0, 1.0], [12600.0, 1.0], [12800.0, 1.0], [12900.0, 1.0], [13200.0, 2.0], [16800.0, 1.0], [100.0, 767.0], [200.0, 943.0], [300.0, 688.0], [400.0, 832.0], [500.0, 708.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3795.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 11756.0, "series": [{"data": [[0.0, 3795.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4711.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11756.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 81.99922360248442, "minX": 1.71922656E12, "maxY": 100.0, "series": [{"data": [[1.71922662E12, 100.0], [1.7192271E12, 100.0], [1.71922692E12, 100.0], [1.71922674E12, 100.0], [1.71922656E12, 81.99922360248442], [1.71922704E12, 100.0], [1.71922686E12, 100.0], [1.71922668E12, 100.0], [1.71922716E12, 95.45871559633026], [1.71922698E12, 100.0], [1.7192268E12, 100.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922716E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 110.55555555555556, "minX": 1.0, "maxY": 2867.0, "series": [{"data": [[2.0, 2494.0], [3.0, 2489.0], [4.0, 2508.0], [5.0, 2507.0], [6.0, 2552.0], [7.0, 1324.5], [8.0, 1252.0], [9.0, 1257.5], [10.0, 1286.0], [11.0, 1276.5], [12.0, 1272.5], [13.0, 1317.5], [14.0, 662.25], [15.0, 852.3333333333334], [16.0, 819.0], [17.0, 867.6666666666666], [18.0, 880.6666666666666], [19.0, 846.0], [20.0, 609.4], [21.0, 668.0], [22.0, 671.5], [23.0, 687.25], [24.0, 694.0], [25.0, 701.0], [26.0, 701.5], [27.0, 509.0], [28.0, 554.0], [29.0, 556.0], [30.0, 562.2], [31.0, 565.4], [32.0, 553.8], [33.0, 552.0], [34.0, 443.5], [35.0, 486.42857142857144], [36.0, 445.66666666666663], [37.0, 460.0], [38.0, 558.0], [39.0, 452.50000000000006], [40.0, 627.2], [41.0, 1654.0], [42.0, 330.29411764705884], [43.0, 501.99999999999994], [44.0, 377.14285714285717], [45.0, 385.57142857142856], [46.0, 442.66666666666663], [47.0, 1308.0], [48.0, 209.23076923076923], [49.0, 429.57142857142856], [50.0, 457.28571428571433], [51.0, 2867.0], [52.0, 710.7692307692307], [53.0, 520.0833333333333], [54.0, 212.28571428571428], [55.0, 312.75], [56.0, 285.1111111111111], [57.0, 2428.0], [58.0, 852.3333333333334], [59.0, 341.0], [60.0, 203.875], [61.0, 250.79999999999998], [62.0, 368.75], [63.0, 794.6666666666666], [64.0, 792.0], [65.0, 263.5], [66.0, 534.3333333333334], [67.0, 413.4666666666667], [68.0, 325.04], [69.0, 451.5], [70.0, 693.25], [71.0, 404.16666666666663], [72.0, 348.75], [73.0, 179.10526315789474], [74.0, 354.5], [75.0, 335.23809523809524], [76.0, 319.0], [77.0, 350.99999999999994], [78.0, 236.36363636363637], [79.0, 146.70588235294116], [80.0, 206.23076923076923], [81.0, 212.42857142857144], [82.0, 291.08333333333337], [83.0, 278.8125], [84.0, 815.3333333333334], [85.0, 270.2], [86.0, 256.8181818181818], [87.0, 299.0833333333333], [88.0, 229.16666666666669], [89.0, 110.55555555555556], [90.0, 538.8], [91.0, 389.6], [92.0, 467.4], [93.0, 848.25], [94.0, 573.8095238095239], [95.0, 501.0], [96.0, 654.5555555555555], [97.0, 575.5217391304348], [98.0, 623.2307692307693], [99.0, 464.33333333333337], [100.0, 1771.9159905515069], [1.0, 2484.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[98.6114401342411, 1720.3506070476603]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3281.866666666667, "minX": 1.71922656E12, "maxY": 379483.1666666667, "series": [{"data": [[1.71922662E12, 379483.1666666667], [1.7192271E12, 227026.51666666666], [1.71922692E12, 227446.76666666666], [1.71922674E12, 253884.95], [1.71922656E12, 162880.81666666668], [1.71922704E12, 243082.3], [1.71922686E12, 256812.03333333333], [1.71922668E12, 248157.21666666667], [1.71922716E12, 122470.2], [1.71922698E12, 256666.16666666666], [1.7192268E12, 278941.43333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71922662E12, 9018.55], [1.7192271E12, 5153.45], [1.71922692E12, 5060.466666666666], [1.71922674E12, 6045.65], [1.71922656E12, 3869.0666666666666], [1.71922704E12, 5746.55], [1.71922686E12, 5467.85], [1.71922668E12, 5519.483333333334], [1.71922716E12, 3281.866666666667], [1.71922698E12, 5406.683333333333], [1.7192268E12, 6460.183333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922716E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 256.6055900621115, "minX": 1.71922656E12, "maxY": 2328.2471709350752, "series": [{"data": [[1.71922662E12, 756.1562082777031], [1.7192271E12, 2243.316219369896], [1.71922692E12, 2328.2471709350752], [1.71922674E12, 1837.2124999999992], [1.71922656E12, 256.6055900621115], [1.71922704E12, 2005.3980125523021], [1.71922686E12, 2139.518518518516], [1.71922668E12, 2059.532970027249], [1.71922716E12, 1958.0431192660553], [1.71922698E12, 2115.149470161742], [1.7192268E12, 1594.8336439888164]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922716E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 256.5986024844724, "minX": 1.71922656E12, "maxY": 2328.226325193569, "series": [{"data": [[1.71922662E12, 756.1491989319086], [1.7192271E12, 2243.308634772459], [1.71922692E12, 2328.226325193569], [1.71922674E12, 1837.2055000000025], [1.71922656E12, 256.5986024844724], [1.71922704E12, 2005.3912133891213], [1.71922686E12, 2139.5091210613678], [1.71922668E12, 2059.5247956403286], [1.71922716E12, 1958.0385321100914], [1.71922698E12, 2115.1444506413827], [1.7192268E12, 1594.8173345759549]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922716E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.001834862385321104, "minX": 1.71922656E12, "maxY": 0.03493788819875771, "series": [{"data": [[1.71922662E12, 0.006008010680907894], [1.7192271E12, 0.01575262543757293], [1.71922692E12, 0.010720667063728416], [1.71922674E12, 0.009500000000000001], [1.71922656E12, 0.03493788819875771], [1.71922704E12, 0.009937238493723851], [1.71922686E12, 0.016030956329463806], [1.71922668E12, 0.012534059945504099], [1.71922716E12, 0.001834862385321104], [1.71922698E12, 0.013385387618516454], [1.7192268E12, 0.011649580615097884]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922716E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.71922656E12, "maxY": 16840.0, "series": [{"data": [[1.71922662E12, 4541.0], [1.7192271E12, 4611.0], [1.71922692E12, 5650.0], [1.71922674E12, 12879.0], [1.71922656E12, 1213.0], [1.71922704E12, 3954.0], [1.71922686E12, 8202.0], [1.71922668E12, 6992.0], [1.71922716E12, 7762.0], [1.71922698E12, 16840.0], [1.7192268E12, 12994.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71922662E12, 6.0], [1.7192271E12, 17.0], [1.71922692E12, 403.0], [1.71922674E12, 5.0], [1.71922656E12, 5.0], [1.71922704E12, 26.0], [1.71922686E12, 7.0], [1.71922668E12, 196.0], [1.71922716E12, 70.0], [1.71922698E12, 116.0], [1.7192268E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71922662E12, 1408.6000000000004], [1.7192271E12, 2782.0], [1.71922692E12, 2856.0], [1.71922674E12, 2760.8], [1.71922656E12, 617.2000000000016], [1.71922704E12, 2782.4], [1.71922686E12, 2837.0], [1.71922668E12, 2933.8], [1.71922716E12, 2949.5], [1.71922698E12, 2902.2000000000003], [1.7192268E12, 2777.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71922662E12, 2859.370000000016], [1.7192271E12, 3562.0], [1.71922692E12, 3705.2000000000003], [1.71922674E12, 4601.98], [1.71922656E12, 852.4399999999996], [1.71922704E12, 3431.959999999999], [1.71922686E12, 3794.500000000007], [1.71922668E12, 5069.439999999988], [1.71922716E12, 4787.9699999999975], [1.71922698E12, 3957.419999999997], [1.7192268E12, 3983.880000000019]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71922662E12, 630.0], [1.7192271E12, 2456.0], [1.71922692E12, 2469.0], [1.71922674E12, 2058.0], [1.71922656E12, 214.0], [1.71922704E12, 2485.0], [1.71922686E12, 2464.0], [1.71922668E12, 2306.0], [1.71922716E12, 2387.0], [1.71922698E12, 2444.0], [1.7192268E12, 1555.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71922662E12, 1882.4500000000003], [1.7192271E12, 3312.5], [1.71922692E12, 2998.0], [1.71922674E12, 3041.6499999999987], [1.71922656E12, 706.0], [1.71922704E12, 2906.7], [1.71922686E12, 3015.0], [1.71922668E12, 3865.0], [1.71922716E12, 3149.7000000000003], [1.71922698E12, 3172.8999999999996], [1.7192268E12, 3125.6499999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922716E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 2570.0, "series": [{"data": [[2.0, 1753.5], [3.0, 2255.5], [4.0, 2014.0], [5.0, 2392.0], [6.0, 2262.0], [7.0, 2415.0], [8.0, 2315.0], [9.0, 2321.0], [10.0, 1939.5], [11.0, 2055.0], [12.0, 1812.0], [13.0, 2372.0], [14.0, 2312.5], [15.0, 1308.0], [16.0, 2289.5], [17.0, 2235.0], [18.0, 2514.0], [19.0, 2324.5], [20.0, 2442.5], [21.0, 2570.0], [22.0, 1462.5], [23.0, 2328.0], [24.0, 1889.5], [25.0, 643.0], [26.0, 926.0], [27.0, 2337.0], [28.0, 2203.5], [29.0, 2239.5], [30.0, 619.0], [31.0, 1075.0], [33.0, 1091.0], [32.0, 1488.5], [35.0, 2410.0], [34.0, 2341.5], [36.0, 1096.5], [37.0, 2419.0], [39.0, 1288.0], [38.0, 2490.5], [41.0, 2067.0], [40.0, 2326.5], [42.0, 2533.5], [43.0, 2325.5], [45.0, 1300.0], [44.0, 1895.0], [47.0, 1601.5], [46.0, 2176.0], [48.0, 2061.5], [49.0, 2385.0], [50.0, 1514.5], [51.0, 2400.5], [53.0, 2294.0], [52.0, 1905.5], [55.0, 2364.0], [54.0, 1957.5], [56.0, 1209.0], [57.0, 2471.0], [58.0, 2033.0], [59.0, 1857.5], [60.0, 2316.0], [61.0, 2553.0], [62.0, 1817.0], [63.0, 2216.0], [66.0, 754.0], [67.0, 2131.0], [64.0, 2328.5], [65.0, 2444.0], [68.0, 1350.5], [69.0, 570.5], [70.0, 2257.0], [71.0, 2412.5], [75.0, 293.0], [72.0, 862.0], [73.0, 508.0], [74.0, 2504.0], [76.0, 397.5], [77.0, 603.0], [78.0, 308.0], [86.0, 424.5], [1.0, 2316.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 2570.0, "series": [{"data": [[2.0, 1753.5], [3.0, 2255.5], [4.0, 2014.0], [5.0, 2392.0], [6.0, 2262.0], [7.0, 2415.0], [8.0, 2315.0], [9.0, 2321.0], [10.0, 1939.5], [11.0, 2055.0], [12.0, 1812.0], [13.0, 2372.0], [14.0, 2312.5], [15.0, 1308.0], [16.0, 2289.5], [17.0, 2235.0], [18.0, 2514.0], [19.0, 2324.5], [20.0, 2442.5], [21.0, 2570.0], [22.0, 1462.5], [23.0, 2328.0], [24.0, 1889.5], [25.0, 643.0], [26.0, 926.0], [27.0, 2337.0], [28.0, 2203.5], [29.0, 2239.5], [30.0, 619.0], [31.0, 1075.0], [33.0, 1091.0], [32.0, 1488.5], [35.0, 2410.0], [34.0, 2341.5], [36.0, 1096.5], [37.0, 2419.0], [39.0, 1288.0], [38.0, 2490.5], [41.0, 2067.0], [40.0, 2326.5], [42.0, 2533.0], [43.0, 2325.5], [45.0, 1300.0], [44.0, 1895.0], [47.0, 1601.5], [46.0, 2176.0], [48.0, 2061.5], [49.0, 2385.0], [50.0, 1514.5], [51.0, 2400.5], [53.0, 2294.0], [52.0, 1905.5], [55.0, 2364.0], [54.0, 1957.5], [56.0, 1209.0], [57.0, 2471.0], [58.0, 2033.0], [59.0, 1857.5], [60.0, 2316.0], [61.0, 2553.0], [62.0, 1817.0], [63.0, 2216.0], [66.0, 754.0], [67.0, 2131.0], [64.0, 2328.5], [65.0, 2444.0], [68.0, 1350.5], [69.0, 570.0], [70.0, 2257.0], [71.0, 2412.5], [75.0, 293.0], [72.0, 862.0], [73.0, 508.0], [74.0, 2504.0], [76.0, 397.5], [77.0, 603.0], [78.0, 308.0], [86.0, 424.5], [1.0, 2316.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.55, "minX": 1.71922656E12, "maxY": 51.13333333333333, "series": [{"data": [[1.71922662E12, 51.13333333333333], [1.7192271E12, 29.216666666666665], [1.71922692E12, 28.35], [1.71922674E12, 32.36666666666667], [1.71922656E12, 21.883333333333333], [1.71922704E12, 31.166666666666668], [1.71922686E12, 30.083333333333332], [1.71922668E12, 30.433333333333334], [1.71922716E12, 16.55], [1.71922698E12, 30.366666666666667], [1.7192268E12, 36.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922716E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 18.166666666666668, "minX": 1.71922656E12, "maxY": 49.93333333333333, "series": [{"data": [[1.71922662E12, 49.93333333333333], [1.7192271E12, 28.566666666666666], [1.71922692E12, 27.983333333333334], [1.71922674E12, 33.333333333333336], [1.71922656E12, 21.466666666666665], [1.71922704E12, 31.866666666666667], [1.71922686E12, 30.15], [1.71922668E12, 30.583333333333332], [1.71922716E12, 18.166666666666668], [1.71922698E12, 29.883333333333333], [1.7192268E12, 35.766666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922716E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 18.166666666666668, "minX": 1.71922656E12, "maxY": 49.93333333333333, "series": [{"data": [[1.71922662E12, 49.93333333333333], [1.7192271E12, 28.566666666666666], [1.71922692E12, 27.983333333333334], [1.71922674E12, 33.333333333333336], [1.71922656E12, 21.466666666666665], [1.71922704E12, 31.866666666666667], [1.71922686E12, 30.15], [1.71922668E12, 30.583333333333332], [1.71922716E12, 18.166666666666668], [1.71922698E12, 29.883333333333333], [1.7192268E12, 35.766666666666666]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922716E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 18.166666666666668, "minX": 1.71922656E12, "maxY": 49.93333333333333, "series": [{"data": [[1.71922662E12, 49.93333333333333], [1.7192271E12, 28.566666666666666], [1.71922692E12, 27.983333333333334], [1.71922674E12, 33.333333333333336], [1.71922656E12, 21.466666666666665], [1.71922704E12, 31.866666666666667], [1.71922686E12, 30.15], [1.71922668E12, 30.583333333333332], [1.71922716E12, 18.166666666666668], [1.71922698E12, 29.883333333333333], [1.7192268E12, 35.766666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922716E12, "title": "Total Transactions Per Second"}},
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

