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
        data: {"result": {"minY": 1106.0, "minX": 0.0, "maxY": 5551.0, "series": [{"data": [[0.0, 1106.0], [0.1, 1106.0], [0.2, 1119.0], [0.3, 1119.0], [0.4, 1127.0], [0.5, 1127.0], [0.6, 1144.0], [0.7, 1144.0], [0.8, 1146.0], [0.9, 1153.0], [1.0, 1153.0], [1.1, 1164.0], [1.2, 1164.0], [1.3, 1170.0], [1.4, 1170.0], [1.5, 1178.0], [1.6, 1178.0], [1.7, 1187.0], [1.8, 1194.0], [1.9, 1194.0], [2.0, 1197.0], [2.1, 1197.0], [2.2, 1212.0], [2.3, 1212.0], [2.4, 1213.0], [2.5, 1213.0], [2.6, 1224.0], [2.7, 1237.0], [2.8, 1237.0], [2.9, 1251.0], [3.0, 1251.0], [3.1, 1259.0], [3.2, 1259.0], [3.3, 1264.0], [3.4, 1268.0], [3.5, 1268.0], [3.6, 1271.0], [3.7, 1271.0], [3.8, 1273.0], [3.9, 1273.0], [4.0, 1275.0], [4.1, 1275.0], [4.2, 1281.0], [4.3, 1284.0], [4.4, 1284.0], [4.5, 1290.0], [4.6, 1290.0], [4.7, 1294.0], [4.8, 1294.0], [4.9, 1317.0], [5.0, 1317.0], [5.1, 1319.0], [5.2, 1324.0], [5.3, 1324.0], [5.4, 1326.0], [5.5, 1326.0], [5.6, 1345.0], [5.7, 1345.0], [5.8, 1352.0], [5.9, 1352.0], [6.0, 1353.0], [6.1, 1357.0], [6.2, 1357.0], [6.3, 1360.0], [6.4, 1360.0], [6.5, 1360.0], [6.6, 1360.0], [6.7, 1361.0], [6.8, 1368.0], [6.9, 1368.0], [7.0, 1373.0], [7.1, 1373.0], [7.2, 1375.0], [7.3, 1375.0], [7.4, 1375.0], [7.5, 1375.0], [7.6, 1378.0], [7.7, 1379.0], [7.8, 1379.0], [7.9, 1388.0], [8.0, 1388.0], [8.1, 1392.0], [8.2, 1392.0], [8.3, 1396.0], [8.4, 1396.0], [8.5, 1398.0], [8.6, 1410.0], [8.7, 1410.0], [8.8, 1416.0], [8.9, 1416.0], [9.0, 1437.0], [9.1, 1437.0], [9.2, 1450.0], [9.3, 1450.0], [9.4, 1451.0], [9.5, 1456.0], [9.6, 1456.0], [9.7, 1469.0], [9.8, 1469.0], [9.9, 1470.0], [10.0, 1470.0], [10.1, 1484.0], [10.2, 1487.0], [10.3, 1487.0], [10.4, 1491.0], [10.5, 1491.0], [10.6, 1498.0], [10.7, 1498.0], [10.8, 1499.0], [10.9, 1499.0], [11.0, 1500.0], [11.1, 1500.0], [11.2, 1500.0], [11.3, 1505.0], [11.4, 1505.0], [11.5, 1518.0], [11.6, 1518.0], [11.7, 1518.0], [11.8, 1518.0], [11.9, 1519.0], [12.0, 1521.0], [12.1, 1521.0], [12.2, 1522.0], [12.3, 1522.0], [12.4, 1526.0], [12.5, 1526.0], [12.6, 1526.0], [12.7, 1526.0], [12.8, 1531.0], [12.9, 1532.0], [13.0, 1532.0], [13.1, 1532.0], [13.2, 1532.0], [13.3, 1535.0], [13.4, 1535.0], [13.5, 1536.0], [13.6, 1538.0], [13.7, 1538.0], [13.8, 1538.0], [13.9, 1538.0], [14.0, 1538.0], [14.1, 1538.0], [14.2, 1539.0], [14.3, 1539.0], [14.4, 1540.0], [14.5, 1542.0], [14.6, 1542.0], [14.7, 1543.0], [14.8, 1543.0], [14.9, 1544.0], [15.0, 1544.0], [15.1, 1544.0], [15.2, 1544.0], [15.3, 1545.0], [15.4, 1547.0], [15.5, 1547.0], [15.6, 1549.0], [15.7, 1549.0], [15.8, 1550.0], [15.9, 1550.0], [16.0, 1551.0], [16.1, 1551.0], [16.2, 1551.0], [16.3, 1551.0], [16.4, 1551.0], [16.5, 1555.0], [16.6, 1555.0], [16.7, 1559.0], [16.8, 1559.0], [16.9, 1563.0], [17.0, 1564.0], [17.1, 1564.0], [17.2, 1586.0], [17.3, 1586.0], [17.4, 1587.0], [17.5, 1587.0], [17.6, 1593.0], [17.7, 1593.0], [17.8, 1596.0], [17.9, 1611.0], [18.0, 1611.0], [18.1, 1617.0], [18.2, 1617.0], [18.3, 1622.0], [18.4, 1622.0], [18.5, 1637.0], [18.6, 1637.0], [18.7, 1661.0], [18.8, 1669.0], [18.9, 1669.0], [19.0, 1683.0], [19.1, 1683.0], [19.2, 1687.0], [19.3, 1687.0], [19.4, 1689.0], [19.5, 1694.0], [19.6, 1694.0], [19.7, 1713.0], [19.8, 1713.0], [19.9, 1736.0], [20.0, 1736.0], [20.1, 1739.0], [20.2, 1739.0], [20.3, 1747.0], [20.4, 1749.0], [20.5, 1749.0], [20.6, 1754.0], [20.7, 1754.0], [20.8, 1756.0], [20.9, 1756.0], [21.0, 1773.0], [21.1, 1773.0], [21.2, 1773.0], [21.3, 1774.0], [21.4, 1774.0], [21.5, 1775.0], [21.6, 1775.0], [21.7, 1782.0], [21.8, 1782.0], [21.9, 1809.0], [22.0, 1809.0], [22.1, 1841.0], [22.2, 1842.0], [22.3, 1842.0], [22.4, 1844.0], [22.5, 1844.0], [22.6, 1863.0], [22.7, 1863.0], [22.8, 1864.0], [22.9, 1864.0], [23.0, 1864.0], [23.1, 1866.0], [23.2, 1866.0], [23.3, 1875.0], [23.4, 1875.0], [23.5, 1879.0], [23.6, 1879.0], [23.7, 1883.0], [23.8, 1891.0], [23.9, 1891.0], [24.0, 1897.0], [24.1, 1897.0], [24.2, 1899.0], [24.3, 1899.0], [24.4, 1901.0], [24.5, 1901.0], [24.6, 1903.0], [24.7, 1903.0], [24.8, 1903.0], [24.9, 1908.0], [25.0, 1908.0], [25.1, 1918.0], [25.2, 1918.0], [25.3, 1927.0], [25.4, 1927.0], [25.5, 1940.0], [25.6, 1947.0], [25.7, 1947.0], [25.8, 1962.0], [25.9, 1962.0], [26.0, 1966.0], [26.1, 1966.0], [26.2, 1989.0], [26.3, 1991.0], [26.4, 1991.0], [26.5, 1992.0], [26.6, 1992.0], [26.7, 1996.0], [26.8, 1996.0], [26.9, 1997.0], [27.0, 1997.0], [27.1, 1998.0], [27.2, 1998.0], [27.3, 1998.0], [27.4, 1999.0], [27.5, 1999.0], [27.6, 2000.0], [27.7, 2000.0], [27.8, 2006.0], [27.9, 2006.0], [28.0, 2008.0], [28.1, 2008.0], [28.2, 2008.0], [28.3, 2008.0], [28.4, 2008.0], [28.5, 2010.0], [28.6, 2010.0], [28.7, 2010.0], [28.8, 2010.0], [28.9, 2011.0], [29.0, 2014.0], [29.1, 2014.0], [29.2, 2017.0], [29.3, 2017.0], [29.4, 2017.0], [29.5, 2017.0], [29.6, 2023.0], [29.7, 2026.0], [29.8, 2026.0], [29.9, 2027.0], [30.0, 2027.0], [30.1, 2039.0], [30.2, 2039.0], [30.3, 2039.0], [30.4, 2039.0], [30.5, 2041.0], [30.6, 2059.0], [30.7, 2059.0], [30.8, 2064.0], [30.9, 2064.0], [31.0, 2071.0], [31.1, 2071.0], [31.2, 2073.0], [31.3, 2073.0], [31.4, 2074.0], [31.5, 2074.0], [31.6, 2074.0], [31.7, 2077.0], [31.8, 2077.0], [31.9, 2079.0], [32.0, 2079.0], [32.1, 2080.0], [32.2, 2080.0], [32.3, 2086.0], [32.4, 2086.0], [32.5, 2086.0], [32.6, 2095.0], [32.7, 2095.0], [32.8, 2095.0], [32.9, 2095.0], [33.0, 2101.0], [33.1, 2116.0], [33.2, 2116.0], [33.3, 2125.0], [33.4, 2125.0], [33.5, 2128.0], [33.6, 2128.0], [33.7, 2140.0], [33.8, 2140.0], [33.9, 2141.0], [34.0, 2148.0], [34.1, 2148.0], [34.2, 2154.0], [34.3, 2154.0], [34.4, 2157.0], [34.5, 2157.0], [34.6, 2165.0], [34.7, 2165.0], [34.8, 2165.0], [34.9, 2166.0], [35.0, 2166.0], [35.1, 2167.0], [35.2, 2167.0], [35.3, 2169.0], [35.4, 2169.0], [35.5, 2170.0], [35.6, 2172.0], [35.7, 2172.0], [35.8, 2174.0], [35.9, 2174.0], [36.0, 2176.0], [36.1, 2176.0], [36.2, 2180.0], [36.3, 2180.0], [36.4, 2185.0], [36.5, 2187.0], [36.6, 2187.0], [36.7, 2190.0], [36.8, 2190.0], [36.9, 2190.0], [37.0, 2190.0], [37.1, 2190.0], [37.2, 2190.0], [37.3, 2195.0], [37.4, 2196.0], [37.5, 2196.0], [37.6, 2199.0], [37.7, 2199.0], [37.8, 2203.0], [37.9, 2203.0], [38.0, 2214.0], [38.1, 2214.0], [38.2, 2218.0], [38.3, 2227.0], [38.4, 2227.0], [38.5, 2253.0], [38.6, 2253.0], [38.7, 2256.0], [38.8, 2256.0], [38.9, 2256.0], [39.0, 2258.0], [39.1, 2258.0], [39.2, 2262.0], [39.3, 2262.0], [39.4, 2268.0], [39.5, 2268.0], [39.6, 2269.0], [39.7, 2269.0], [39.8, 2269.0], [39.9, 2272.0], [40.0, 2272.0], [40.1, 2278.0], [40.2, 2278.0], [40.3, 2279.0], [40.4, 2279.0], [40.5, 2288.0], [40.6, 2288.0], [40.7, 2288.0], [40.8, 2289.0], [40.9, 2289.0], [41.0, 2290.0], [41.1, 2290.0], [41.2, 2290.0], [41.3, 2290.0], [41.4, 2293.0], [41.5, 2293.0], [41.6, 2294.0], [41.7, 2300.0], [41.8, 2300.0], [41.9, 2304.0], [42.0, 2304.0], [42.1, 2305.0], [42.2, 2305.0], [42.3, 2315.0], [42.4, 2316.0], [42.5, 2316.0], [42.6, 2318.0], [42.7, 2318.0], [42.8, 2321.0], [42.9, 2321.0], [43.0, 2326.0], [43.1, 2326.0], [43.2, 2326.0], [43.3, 2329.0], [43.4, 2329.0], [43.5, 2329.0], [43.6, 2329.0], [43.7, 2330.0], [43.8, 2330.0], [43.9, 2335.0], [44.0, 2335.0], [44.1, 2337.0], [44.2, 2338.0], [44.3, 2338.0], [44.4, 2338.0], [44.5, 2338.0], [44.6, 2339.0], [44.7, 2339.0], [44.8, 2340.0], [44.9, 2340.0], [45.0, 2345.0], [45.1, 2346.0], [45.2, 2346.0], [45.3, 2350.0], [45.4, 2350.0], [45.5, 2351.0], [45.6, 2351.0], [45.7, 2352.0], [45.8, 2356.0], [45.9, 2356.0], [46.0, 2358.0], [46.1, 2358.0], [46.2, 2360.0], [46.3, 2360.0], [46.4, 2365.0], [46.5, 2365.0], [46.6, 2369.0], [46.7, 2371.0], [46.8, 2371.0], [46.9, 2371.0], [47.0, 2371.0], [47.1, 2373.0], [47.2, 2373.0], [47.3, 2374.0], [47.4, 2374.0], [47.5, 2374.0], [47.6, 2375.0], [47.7, 2375.0], [47.8, 2377.0], [47.9, 2377.0], [48.0, 2378.0], [48.1, 2378.0], [48.2, 2378.0], [48.3, 2378.0], [48.4, 2379.0], [48.5, 2381.0], [48.6, 2381.0], [48.7, 2385.0], [48.8, 2385.0], [48.9, 2386.0], [49.0, 2386.0], [49.1, 2389.0], [49.2, 2389.0], [49.3, 2389.0], [49.4, 2390.0], [49.5, 2390.0], [49.6, 2391.0], [49.7, 2391.0], [49.8, 2391.0], [49.9, 2391.0], [50.0, 2392.0], [50.1, 2393.0], [50.2, 2393.0], [50.3, 2394.0], [50.4, 2394.0], [50.5, 2398.0], [50.6, 2398.0], [50.7, 2403.0], [50.8, 2403.0], [50.9, 2408.0], [51.0, 2408.0], [51.1, 2408.0], [51.2, 2410.0], [51.3, 2410.0], [51.4, 2412.0], [51.5, 2412.0], [51.6, 2416.0], [51.7, 2416.0], [51.8, 2416.0], [51.9, 2417.0], [52.0, 2417.0], [52.1, 2417.0], [52.2, 2417.0], [52.3, 2418.0], [52.4, 2418.0], [52.5, 2418.0], [52.6, 2425.0], [52.7, 2425.0], [52.8, 2427.0], [52.9, 2427.0], [53.0, 2431.0], [53.1, 2431.0], [53.2, 2435.0], [53.3, 2435.0], [53.4, 2438.0], [53.5, 2442.0], [53.6, 2442.0], [53.7, 2443.0], [53.8, 2443.0], [53.9, 2443.0], [54.0, 2443.0], [54.1, 2443.0], [54.2, 2443.0], [54.3, 2446.0], [54.4, 2448.0], [54.5, 2448.0], [54.6, 2448.0], [54.7, 2448.0], [54.8, 2450.0], [54.9, 2450.0], [55.0, 2450.0], [55.1, 2452.0], [55.2, 2452.0], [55.3, 2452.0], [55.4, 2452.0], [55.5, 2453.0], [55.6, 2453.0], [55.7, 2453.0], [55.8, 2453.0], [55.9, 2455.0], [56.0, 2455.0], [56.1, 2455.0], [56.2, 2455.0], [56.3, 2455.0], [56.4, 2457.0], [56.5, 2457.0], [56.6, 2458.0], [56.7, 2458.0], [56.8, 2459.0], [56.9, 2460.0], [57.0, 2460.0], [57.1, 2460.0], [57.2, 2460.0], [57.3, 2461.0], [57.4, 2461.0], [57.5, 2461.0], [57.6, 2461.0], [57.7, 2463.0], [57.8, 2464.0], [57.9, 2464.0], [58.0, 2464.0], [58.1, 2464.0], [58.2, 2464.0], [58.3, 2464.0], [58.4, 2464.0], [58.5, 2465.0], [58.6, 2465.0], [58.7, 2465.0], [58.8, 2465.0], [58.9, 2465.0], [59.0, 2465.0], [59.1, 2465.0], [59.2, 2465.0], [59.3, 2465.0], [59.4, 2467.0], [59.5, 2467.0], [59.6, 2467.0], [59.7, 2467.0], [59.8, 2467.0], [59.9, 2467.0], [60.0, 2468.0], [60.1, 2468.0], [60.2, 2469.0], [60.3, 2471.0], [60.4, 2471.0], [60.5, 2472.0], [60.6, 2472.0], [60.7, 2472.0], [60.8, 2472.0], [60.9, 2472.0], [61.0, 2472.0], [61.1, 2473.0], [61.2, 2474.0], [61.3, 2474.0], [61.4, 2475.0], [61.5, 2475.0], [61.6, 2476.0], [61.7, 2476.0], [61.8, 2476.0], [61.9, 2478.0], [62.0, 2478.0], [62.1, 2478.0], [62.2, 2478.0], [62.3, 2481.0], [62.4, 2481.0], [62.5, 2485.0], [62.6, 2485.0], [62.7, 2490.0], [62.8, 2491.0], [62.9, 2491.0], [63.0, 2493.0], [63.1, 2493.0], [63.2, 2494.0], [63.3, 2494.0], [63.4, 2501.0], [63.5, 2501.0], [63.6, 2503.0], [63.7, 2508.0], [63.8, 2508.0], [63.9, 2509.0], [64.0, 2509.0], [64.1, 2511.0], [64.2, 2511.0], [64.3, 2514.0], [64.4, 2514.0], [64.5, 2514.0], [64.6, 2517.0], [64.7, 2517.0], [64.8, 2518.0], [64.9, 2518.0], [65.0, 2519.0], [65.1, 2519.0], [65.2, 2524.0], [65.3, 2529.0], [65.4, 2529.0], [65.5, 2534.0], [65.6, 2534.0], [65.7, 2535.0], [65.8, 2535.0], [65.9, 2538.0], [66.0, 2538.0], [66.1, 2542.0], [66.2, 2542.0], [66.3, 2542.0], [66.4, 2543.0], [66.5, 2543.0], [66.6, 2555.0], [66.7, 2555.0], [66.8, 2556.0], [66.9, 2556.0], [67.0, 2559.0], [67.1, 2563.0], [67.2, 2563.0], [67.3, 2563.0], [67.4, 2563.0], [67.5, 2574.0], [67.6, 2574.0], [67.7, 2577.0], [67.8, 2578.0], [67.9, 2578.0], [68.0, 2582.0], [68.1, 2582.0], [68.2, 2585.0], [68.3, 2585.0], [68.4, 2586.0], [68.5, 2586.0], [68.6, 2586.0], [68.7, 2587.0], [68.8, 2587.0], [68.9, 2592.0], [69.0, 2592.0], [69.1, 2593.0], [69.2, 2593.0], [69.3, 2595.0], [69.4, 2595.0], [69.5, 2597.0], [69.6, 2598.0], [69.7, 2598.0], [69.8, 2598.0], [69.9, 2598.0], [70.0, 2599.0], [70.1, 2599.0], [70.2, 2599.0], [70.3, 2599.0], [70.4, 2601.0], [70.5, 2602.0], [70.6, 2602.0], [70.7, 2602.0], [70.8, 2602.0], [70.9, 2604.0], [71.0, 2604.0], [71.1, 2606.0], [71.2, 2607.0], [71.3, 2607.0], [71.4, 2607.0], [71.5, 2607.0], [71.6, 2607.0], [71.7, 2607.0], [71.8, 2607.0], [71.9, 2607.0], [72.0, 2608.0], [72.1, 2610.0], [72.2, 2610.0], [72.3, 2611.0], [72.4, 2611.0], [72.5, 2611.0], [72.6, 2611.0], [72.7, 2611.0], [72.8, 2611.0], [72.9, 2618.0], [73.0, 2620.0], [73.1, 2620.0], [73.2, 2621.0], [73.3, 2621.0], [73.4, 2624.0], [73.5, 2624.0], [73.6, 2625.0], [73.7, 2625.0], [73.8, 2630.0], [73.9, 2631.0], [74.0, 2631.0], [74.1, 2632.0], [74.2, 2632.0], [74.3, 2636.0], [74.4, 2636.0], [74.5, 2637.0], [74.6, 2639.0], [74.7, 2639.0], [74.8, 2640.0], [74.9, 2640.0], [75.0, 2641.0], [75.1, 2641.0], [75.2, 2641.0], [75.3, 2641.0], [75.4, 2642.0], [75.5, 2643.0], [75.6, 2643.0], [75.7, 2645.0], [75.8, 2645.0], [75.9, 2645.0], [76.0, 2645.0], [76.1, 2654.0], [76.2, 2654.0], [76.3, 2657.0], [76.4, 2658.0], [76.5, 2658.0], [76.6, 2664.0], [76.7, 2664.0], [76.8, 2666.0], [76.9, 2666.0], [77.0, 2667.0], [77.1, 2667.0], [77.2, 2668.0], [77.3, 2669.0], [77.4, 2669.0], [77.5, 2669.0], [77.6, 2669.0], [77.7, 2673.0], [77.8, 2673.0], [77.9, 2674.0], [78.0, 2674.0], [78.1, 2674.0], [78.2, 2675.0], [78.3, 2675.0], [78.4, 2677.0], [78.5, 2677.0], [78.6, 2678.0], [78.7, 2678.0], [78.8, 2679.0], [78.9, 2683.0], [79.0, 2683.0], [79.1, 2684.0], [79.2, 2684.0], [79.3, 2687.0], [79.4, 2687.0], [79.5, 2694.0], [79.6, 2694.0], [79.7, 2697.0], [79.8, 2697.0], [79.9, 2697.0], [80.0, 2698.0], [80.1, 2698.0], [80.2, 2699.0], [80.3, 2699.0], [80.4, 2702.0], [80.5, 2702.0], [80.6, 2706.0], [80.7, 2706.0], [80.8, 2706.0], [80.9, 2709.0], [81.0, 2709.0], [81.1, 2711.0], [81.2, 2711.0], [81.3, 2715.0], [81.4, 2718.0], [81.5, 2718.0], [81.6, 2721.0], [81.7, 2721.0], [81.8, 2723.0], [81.9, 2723.0], [82.0, 2724.0], [82.1, 2724.0], [82.2, 2752.0], [82.3, 2758.0], [82.4, 2758.0], [82.5, 2758.0], [82.6, 2758.0], [82.7, 2761.0], [82.8, 2761.0], [82.9, 2765.0], [83.0, 2765.0], [83.1, 2767.0], [83.2, 2768.0], [83.3, 2768.0], [83.4, 2772.0], [83.5, 2772.0], [83.6, 2772.0], [83.7, 2772.0], [83.8, 2774.0], [83.9, 2776.0], [84.0, 2776.0], [84.1, 2777.0], [84.2, 2777.0], [84.3, 2777.0], [84.4, 2777.0], [84.5, 2778.0], [84.6, 2778.0], [84.7, 2779.0], [84.8, 2783.0], [84.9, 2783.0], [85.0, 2783.0], [85.1, 2783.0], [85.2, 2784.0], [85.3, 2784.0], [85.4, 2784.0], [85.5, 2784.0], [85.6, 2785.0], [85.7, 2787.0], [85.8, 2787.0], [85.9, 2789.0], [86.0, 2789.0], [86.1, 2792.0], [86.2, 2792.0], [86.3, 2798.0], [86.4, 2798.0], [86.5, 2805.0], [86.6, 2808.0], [86.7, 2808.0], [86.8, 2809.0], [86.9, 2809.0], [87.0, 2836.0], [87.1, 2836.0], [87.2, 2837.0], [87.3, 2840.0], [87.4, 2840.0], [87.5, 2843.0], [87.6, 2843.0], [87.7, 2858.0], [87.8, 2858.0], [87.9, 2861.0], [88.0, 2861.0], [88.1, 2862.0], [88.2, 2864.0], [88.3, 2864.0], [88.4, 2867.0], [88.5, 2867.0], [88.6, 2886.0], [88.7, 2886.0], [88.8, 2889.0], [88.9, 2889.0], [89.0, 2899.0], [89.1, 2899.0], [89.2, 2899.0], [89.3, 2900.0], [89.4, 2900.0], [89.5, 2902.0], [89.6, 2902.0], [89.7, 2910.0], [89.8, 2910.0], [89.9, 2911.0], [90.0, 2916.0], [90.1, 2916.0], [90.2, 2935.0], [90.3, 2935.0], [90.4, 2943.0], [90.5, 2943.0], [90.6, 2946.0], [90.7, 2951.0], [90.8, 2951.0], [90.9, 2982.0], [91.0, 2982.0], [91.1, 2985.0], [91.2, 2985.0], [91.3, 2994.0], [91.4, 2994.0], [91.5, 3003.0], [91.6, 3009.0], [91.7, 3009.0], [91.8, 3011.0], [91.9, 3011.0], [92.0, 3029.0], [92.1, 3029.0], [92.2, 3030.0], [92.3, 3030.0], [92.4, 3031.0], [92.5, 3034.0], [92.6, 3034.0], [92.7, 3037.0], [92.8, 3037.0], [92.9, 3041.0], [93.0, 3041.0], [93.1, 3077.0], [93.2, 3077.0], [93.3, 3084.0], [93.4, 3087.0], [93.5, 3087.0], [93.6, 3088.0], [93.7, 3088.0], [93.8, 3100.0], [93.9, 3100.0], [94.0, 3101.0], [94.1, 3137.0], [94.2, 3137.0], [94.3, 3137.0], [94.4, 3137.0], [94.5, 3170.0], [94.6, 3170.0], [94.7, 3231.0], [94.8, 3231.0], [94.9, 3233.0], [95.0, 3234.0], [95.1, 3234.0], [95.2, 3254.0], [95.3, 3254.0], [95.4, 3284.0], [95.5, 3284.0], [95.6, 3323.0], [95.7, 3323.0], [95.8, 3366.0], [95.9, 3380.0], [96.0, 3380.0], [96.1, 3435.0], [96.2, 3435.0], [96.3, 3443.0], [96.4, 3443.0], [96.5, 3451.0], [96.6, 3451.0], [96.7, 3472.0], [96.8, 3478.0], [96.9, 3478.0], [97.0, 3478.0], [97.1, 3478.0], [97.2, 3479.0], [97.3, 3479.0], [97.4, 3486.0], [97.5, 3496.0], [97.6, 3496.0], [97.7, 3532.0], [97.8, 3532.0], [97.9, 3544.0], [98.0, 3544.0], [98.1, 3586.0], [98.2, 3586.0], [98.3, 3641.0], [98.4, 3773.0], [98.5, 3773.0], [98.6, 3816.0], [98.7, 3816.0], [98.8, 3833.0], [98.9, 3833.0], [99.0, 3912.0], [99.1, 3912.0], [99.2, 3914.0], [99.3, 3915.0], [99.4, 3915.0], [99.5, 4143.0], [99.6, 4143.0], [99.7, 4533.0], [99.8, 4533.0], [99.9, 5551.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 71.0, "series": [{"data": [[1100.0, 12.0], [1200.0, 15.0], [1300.0, 21.0], [1400.0, 13.0], [1500.0, 39.0], [1600.0, 10.0], [1700.0, 12.0], [1800.0, 14.0], [1900.0, 18.0], [2000.0, 30.0], [2100.0, 27.0], [2200.0, 22.0], [2300.0, 50.0], [2400.0, 71.0], [2500.0, 39.0], [2600.0, 56.0], [2700.0, 34.0], [2800.0, 16.0], [2900.0, 12.0], [3000.0, 13.0], [3100.0, 5.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 9.0], [3500.0, 3.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 3.0], [4100.0, 1.0], [4500.0, 1.0], [5500.0, 1.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 63.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 496.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 63.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 496.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.6000000000000005, "minX": 1.71819918E12, "maxY": 24.22471910112359, "series": [{"data": [[1.7182005E12, 22.132812500000004], [1.7182002E12, 20.038674033149178], [1.71819924E12, 24.22471910112359], [1.71820014E12, 4.6000000000000005], [1.71819918E12, 15.043478260869566], [1.71820044E12, 11.271186440677969]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1131.5, "minX": 1.0, "maxY": 2974.333333333334, "series": [{"data": [[2.0, 1131.5], [3.0, 1786.75], [4.0, 2153.0], [5.0, 1698.5714285714284], [6.0, 2433.8181818181815], [7.0, 1339.1], [8.0, 1521.8], [9.0, 1381.75], [10.0, 1688.2272727272727], [11.0, 1488.6363636363635], [12.0, 1538.2272727272727], [13.0, 2063.964285714286], [14.0, 1749.8125], [15.0, 1961.8666666666666], [16.0, 2305.258064516129], [1.0, 2758.0], [17.0, 2225.4761904761904], [18.0, 2202.0], [19.0, 2172.5454545454545], [20.0, 2193.0], [21.0, 2553.9999999999995], [22.0, 2770.6250000000005], [23.0, 2566.1111111111113], [24.0, 2466.7619047619046], [25.0, 2546.9375], [26.0, 2603.842105263158], [27.0, 2695.7931034482763], [28.0, 2846.3750000000005], [29.0, 2974.333333333334], [30.0, 2682.2187499999995]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[19.161001788908784, 2304.1932021466887]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 26.533333333333335, "minX": 1.71819918E12, "maxY": 3395.3333333333335, "series": [{"data": [[1.7182005E12, 2397.4333333333334], [1.7182002E12, 3395.3333333333335], [1.71819924E12, 1669.15], [1.71820014E12, 186.61666666666667], [1.71819918E12, 1727.1333333333334], [1.71820044E12, 1108.9166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7182005E12, 340.03333333333336], [1.7182002E12, 481.68333333333334], [1.71819924E12, 236.33333333333334], [1.71820014E12, 26.533333333333335], [1.71819918E12, 245.43333333333334], [1.71820044E12, 157.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1230.0, "minX": 1.71819918E12, "maxY": 2725.269662921348, "series": [{"data": [[1.7182005E12, 2502.9375], [1.7182002E12, 2355.9392265193396], [1.71819924E12, 2725.269662921348], [1.71820014E12, 1230.0], [1.71819918E12, 2048.9891304347825], [1.71820044E12, 1659.1016949152547]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1229.9, "minX": 1.71819918E12, "maxY": 2725.2584269662925, "series": [{"data": [[1.7182005E12, 2502.929687499999], [1.7182002E12, 2355.9226519337017], [1.71819924E12, 2725.2584269662925], [1.71820014E12, 1229.9], [1.71819918E12, 2048.9673913043475], [1.71820044E12, 1659.0847457627121]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 5.39325842696629, "minX": 1.71819918E12, "maxY": 29.932203389830512, "series": [{"data": [[1.7182005E12, 9.664062499999998], [1.7182002E12, 18.889502762430936], [1.71819924E12, 5.39325842696629], [1.71820014E12, 24.6], [1.71819918E12, 26.326086956521735], [1.71820044E12, 29.932203389830512]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1106.0, "minX": 1.71819918E12, "maxY": 5551.0, "series": [{"data": [[1.7182005E12, 3773.0], [1.7182002E12, 3915.0], [1.71819924E12, 4143.0], [1.71820014E12, 1410.0], [1.71819918E12, 5551.0], [1.71820044E12, 2783.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7182005E12, 1756.0], [1.7182002E12, 1212.0], [1.71819924E12, 2386.0], [1.71820014E12, 1106.0], [1.71819918E12, 1197.0], [1.71820044E12, 1119.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7182005E12, 3018.600000000001], [1.7182002E12, 2944.0000000000005], [1.71819924E12, 3084.0], [1.71820014E12, 1406.5], [1.71819918E12, 2633.4], [1.71820044E12, 2514.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7182005E12, 3734.7199999999993], [1.7182002E12, 3914.18], [1.71819924E12, 4143.0], [1.71820014E12, 1410.0], [1.71819918E12, 5551.0], [1.71820044E12, 2783.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7182005E12, 2421.5], [1.7182002E12, 2448.0], [1.71819924E12, 2639.0], [1.71820014E12, 1174.0], [1.71819918E12, 2057.5], [1.71820044E12, 1536.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7182005E12, 3344.5499999999993], [1.7182002E12, 3469.9], [1.71819924E12, 3288.5], [1.71820014E12, 1410.0], [1.71819918E12, 2784.6], [1.71820044E12, 2718.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1263.5, "minX": 1.0, "maxY": 2742.5, "series": [{"data": [[2.0, 1653.0], [8.0, 2179.5], [9.0, 2008.0], [10.0, 1852.5], [11.0, 2442.0], [3.0, 1360.0], [12.0, 2537.0], [13.0, 2401.0], [14.0, 2405.5], [1.0, 1263.5], [4.0, 2108.5], [16.0, 2602.5], [17.0, 2535.5], [18.0, 2742.5], [5.0, 2522.5], [22.0, 2471.5], [6.0, 2174.0], [7.0, 2405.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1263.5, "minX": 1.0, "maxY": 2742.5, "series": [{"data": [[2.0, 1653.0], [8.0, 2179.5], [9.0, 2008.0], [10.0, 1852.5], [11.0, 2442.0], [3.0, 1360.0], [12.0, 2537.0], [13.0, 2401.0], [14.0, 2405.5], [1.0, 1263.5], [4.0, 2108.5], [16.0, 2602.5], [17.0, 2535.5], [18.0, 2742.5], [5.0, 2522.5], [22.0, 2471.5], [6.0, 2174.0], [7.0, 2405.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.71819918E12, "maxY": 2.9166666666666665, "series": [{"data": [[1.7182005E12, 1.8833333333333333], [1.7182002E12, 2.9166666666666665], [1.71819924E12, 1.1833333333333333], [1.71820014E12, 0.26666666666666666], [1.71819918E12, 1.8333333333333333], [1.71820044E12, 1.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.71819918E12, "maxY": 3.0166666666666666, "series": [{"data": [[1.7182005E12, 2.1333333333333333], [1.7182002E12, 3.0166666666666666], [1.71819924E12, 1.4833333333333334], [1.71820014E12, 0.16666666666666666], [1.71819918E12, 1.5333333333333334], [1.71820044E12, 0.9833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.71819918E12, "maxY": 3.0166666666666666, "series": [{"data": [[1.7182005E12, 2.1333333333333333], [1.7182002E12, 3.0166666666666666], [1.71819924E12, 1.4833333333333334], [1.71820014E12, 0.16666666666666666], [1.71819918E12, 1.5333333333333334], [1.71820044E12, 0.9833333333333333]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.71819918E12, "maxY": 3.0166666666666666, "series": [{"data": [[1.7182005E12, 2.1333333333333333], [1.7182002E12, 3.0166666666666666], [1.71819924E12, 1.4833333333333334], [1.71820014E12, 0.16666666666666666], [1.71819918E12, 1.5333333333333334], [1.71820044E12, 0.9833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Total Transactions Per Second"}},
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

