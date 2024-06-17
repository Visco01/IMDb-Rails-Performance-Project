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
        data: {"result": {"minY": 900.0, "minX": 0.0, "maxY": 12891.0, "series": [{"data": [[0.0, 900.0], [0.1, 1116.0], [0.2, 1147.0], [0.3, 1176.0], [0.4, 1213.0], [0.5, 1232.0], [0.6, 1239.0], [0.7, 1244.0], [0.8, 1254.0], [0.9, 1267.0], [1.0, 1295.0], [1.1, 1304.0], [1.2, 1343.0], [1.3, 1352.0], [1.4, 1360.0], [1.5, 1389.0], [1.6, 1411.0], [1.7, 1426.0], [1.8, 1428.0], [1.9, 1436.0], [2.0, 1437.0], [2.1, 1439.0], [2.2, 1443.0], [2.3, 1444.0], [2.4, 1448.0], [2.5, 1449.0], [2.6, 1451.0], [2.7, 1452.0], [2.8, 1456.0], [2.9, 1458.0], [3.0, 1464.0], [3.1, 1474.0], [3.2, 1503.0], [3.3, 1519.0], [3.4, 1526.0], [3.5, 1532.0], [3.6, 1536.0], [3.7, 1539.0], [3.8, 1543.0], [3.9, 1545.0], [4.0, 1548.0], [4.1, 1551.0], [4.2, 1555.0], [4.3, 1562.0], [4.4, 1567.0], [4.5, 1570.0], [4.6, 1576.0], [4.7, 1585.0], [4.8, 1599.0], [4.9, 1610.0], [5.0, 1617.0], [5.1, 1621.0], [5.2, 1628.0], [5.3, 1629.0], [5.4, 1636.0], [5.5, 1638.0], [5.6, 1641.0], [5.7, 1642.0], [5.8, 1642.0], [5.9, 1646.0], [6.0, 1646.0], [6.1, 1648.0], [6.2, 1649.0], [6.3, 1651.0], [6.4, 1652.0], [6.5, 1653.0], [6.6, 1655.0], [6.7, 1655.0], [6.8, 1657.0], [6.9, 1659.0], [7.0, 1659.0], [7.1, 1661.0], [7.2, 1662.0], [7.3, 1671.0], [7.4, 1675.0], [7.5, 1683.0], [7.6, 1694.0], [7.7, 1715.0], [7.8, 1739.0], [7.9, 1744.0], [8.0, 1747.0], [8.1, 1751.0], [8.2, 1753.0], [8.3, 1756.0], [8.4, 1759.0], [8.5, 1765.0], [8.6, 1778.0], [8.7, 1793.0], [8.8, 1802.0], [8.9, 1815.0], [9.0, 1829.0], [9.1, 1841.0], [9.2, 1849.0], [9.3, 1855.0], [9.4, 1866.0], [9.5, 1880.0], [9.6, 1890.0], [9.7, 1905.0], [9.8, 1909.0], [9.9, 1923.0], [10.0, 1933.0], [10.1, 1941.0], [10.2, 1955.0], [10.3, 1963.0], [10.4, 1971.0], [10.5, 1979.0], [10.6, 1998.0], [10.7, 2010.0], [10.8, 2013.0], [10.9, 2029.0], [11.0, 2034.0], [11.1, 2039.0], [11.2, 2043.0], [11.3, 2047.0], [11.4, 2055.0], [11.5, 2063.0], [11.6, 2070.0], [11.7, 2074.0], [11.8, 2087.0], [11.9, 2101.0], [12.0, 2107.0], [12.1, 2129.0], [12.2, 2138.0], [12.3, 2141.0], [12.4, 2148.0], [12.5, 2156.0], [12.6, 2162.0], [12.7, 2168.0], [12.8, 2173.0], [12.9, 2183.0], [13.0, 2190.0], [13.1, 2206.0], [13.2, 2215.0], [13.3, 2220.0], [13.4, 2226.0], [13.5, 2234.0], [13.6, 2244.0], [13.7, 2256.0], [13.8, 2260.0], [13.9, 2264.0], [14.0, 2267.0], [14.1, 2274.0], [14.2, 2277.0], [14.3, 2281.0], [14.4, 2289.0], [14.5, 2291.0], [14.6, 2301.0], [14.7, 2308.0], [14.8, 2313.0], [14.9, 2316.0], [15.0, 2324.0], [15.1, 2327.0], [15.2, 2330.0], [15.3, 2334.0], [15.4, 2354.0], [15.5, 2360.0], [15.6, 2364.0], [15.7, 2369.0], [15.8, 2371.0], [15.9, 2374.0], [16.0, 2377.0], [16.1, 2380.0], [16.2, 2381.0], [16.3, 2384.0], [16.4, 2387.0], [16.5, 2388.0], [16.6, 2391.0], [16.7, 2393.0], [16.8, 2395.0], [16.9, 2399.0], [17.0, 2404.0], [17.1, 2406.0], [17.2, 2411.0], [17.3, 2413.0], [17.4, 2414.0], [17.5, 2416.0], [17.6, 2417.0], [17.7, 2419.0], [17.8, 2420.0], [17.9, 2422.0], [18.0, 2425.0], [18.1, 2427.0], [18.2, 2429.0], [18.3, 2434.0], [18.4, 2436.0], [18.5, 2438.0], [18.6, 2439.0], [18.7, 2443.0], [18.8, 2446.0], [18.9, 2450.0], [19.0, 2452.0], [19.1, 2454.0], [19.2, 2456.0], [19.3, 2458.0], [19.4, 2461.0], [19.5, 2462.0], [19.6, 2465.0], [19.7, 2469.0], [19.8, 2471.0], [19.9, 2474.0], [20.0, 2480.0], [20.1, 2482.0], [20.2, 2484.0], [20.3, 2485.0], [20.4, 2488.0], [20.5, 2492.0], [20.6, 2494.0], [20.7, 2497.0], [20.8, 2502.0], [20.9, 2508.0], [21.0, 2512.0], [21.1, 2517.0], [21.2, 2519.0], [21.3, 2522.0], [21.4, 2530.0], [21.5, 2539.0], [21.6, 2545.0], [21.7, 2550.0], [21.8, 2556.0], [21.9, 2561.0], [22.0, 2569.0], [22.1, 2573.0], [22.2, 2575.0], [22.3, 2581.0], [22.4, 2588.0], [22.5, 2592.0], [22.6, 2602.0], [22.7, 2615.0], [22.8, 2620.0], [22.9, 2627.0], [23.0, 2642.0], [23.1, 2650.0], [23.2, 2657.0], [23.3, 2659.0], [23.4, 2662.0], [23.5, 2665.0], [23.6, 2667.0], [23.7, 2669.0], [23.8, 2670.0], [23.9, 2670.0], [24.0, 2672.0], [24.1, 2673.0], [24.2, 2674.0], [24.3, 2675.0], [24.4, 2676.0], [24.5, 2677.0], [24.6, 2679.0], [24.7, 2680.0], [24.8, 2682.0], [24.9, 2684.0], [25.0, 2686.0], [25.1, 2689.0], [25.2, 2691.0], [25.3, 2697.0], [25.4, 2700.0], [25.5, 2705.0], [25.6, 2712.0], [25.7, 2740.0], [25.8, 2764.0], [25.9, 2780.0], [26.0, 2785.0], [26.1, 2789.0], [26.2, 2801.0], [26.3, 2808.0], [26.4, 2815.0], [26.5, 2832.0], [26.6, 2843.0], [26.7, 2848.0], [26.8, 2850.0], [26.9, 2851.0], [27.0, 2853.0], [27.1, 2854.0], [27.2, 2858.0], [27.3, 2862.0], [27.4, 2868.0], [27.5, 2871.0], [27.6, 2876.0], [27.7, 2887.0], [27.8, 2895.0], [27.9, 2914.0], [28.0, 2936.0], [28.1, 2938.0], [28.2, 2949.0], [28.3, 2952.0], [28.4, 2964.0], [28.5, 2967.0], [28.6, 2971.0], [28.7, 2974.0], [28.8, 2977.0], [28.9, 2983.0], [29.0, 2986.0], [29.1, 2989.0], [29.2, 2991.0], [29.3, 2997.0], [29.4, 3002.0], [29.5, 3007.0], [29.6, 3035.0], [29.7, 3037.0], [29.8, 3050.0], [29.9, 3056.0], [30.0, 3061.0], [30.1, 3064.0], [30.2, 3069.0], [30.3, 3072.0], [30.4, 3075.0], [30.5, 3076.0], [30.6, 3077.0], [30.7, 3078.0], [30.8, 3081.0], [30.9, 3082.0], [31.0, 3086.0], [31.1, 3088.0], [31.2, 3091.0], [31.3, 3092.0], [31.4, 3096.0], [31.5, 3105.0], [31.6, 3139.0], [31.7, 3227.0], [31.8, 3242.0], [31.9, 3264.0], [32.0, 3269.0], [32.1, 3271.0], [32.2, 3273.0], [32.3, 3274.0], [32.4, 3276.0], [32.5, 3278.0], [32.6, 3279.0], [32.7, 3280.0], [32.8, 3281.0], [32.9, 3282.0], [33.0, 3283.0], [33.1, 3283.0], [33.2, 3284.0], [33.3, 3285.0], [33.4, 3286.0], [33.5, 3287.0], [33.6, 3288.0], [33.7, 3290.0], [33.8, 3291.0], [33.9, 3292.0], [34.0, 3293.0], [34.1, 3294.0], [34.2, 3295.0], [34.3, 3295.0], [34.4, 3297.0], [34.5, 3298.0], [34.6, 3301.0], [34.7, 3304.0], [34.8, 3306.0], [34.9, 3317.0], [35.0, 3369.0], [35.1, 3395.0], [35.2, 3441.0], [35.3, 3445.0], [35.4, 3447.0], [35.5, 3449.0], [35.6, 3462.0], [35.7, 3468.0], [35.8, 3473.0], [35.9, 3477.0], [36.0, 3480.0], [36.1, 3484.0], [36.2, 3486.0], [36.3, 3486.0], [36.4, 3488.0], [36.5, 3489.0], [36.6, 3490.0], [36.7, 3491.0], [36.8, 3492.0], [36.9, 3493.0], [37.0, 3494.0], [37.1, 3496.0], [37.2, 3497.0], [37.3, 3499.0], [37.4, 3500.0], [37.5, 3501.0], [37.6, 3503.0], [37.7, 3505.0], [37.8, 3509.0], [37.9, 3515.0], [38.0, 3520.0], [38.1, 3528.0], [38.2, 3532.0], [38.3, 3541.0], [38.4, 3544.0], [38.5, 3669.0], [38.6, 3672.0], [38.7, 3677.0], [38.8, 3682.0], [38.9, 3684.0], [39.0, 3684.0], [39.1, 3685.0], [39.2, 3686.0], [39.3, 3687.0], [39.4, 3689.0], [39.5, 3690.0], [39.6, 3692.0], [39.7, 3693.0], [39.8, 3693.0], [39.9, 3695.0], [40.0, 3695.0], [40.1, 3696.0], [40.2, 3697.0], [40.3, 3699.0], [40.4, 3699.0], [40.5, 3700.0], [40.6, 3703.0], [40.7, 3704.0], [40.8, 3705.0], [40.9, 3706.0], [41.0, 3707.0], [41.1, 3708.0], [41.2, 3710.0], [41.3, 3710.0], [41.4, 3711.0], [41.5, 3716.0], [41.6, 3718.0], [41.7, 3726.0], [41.8, 3737.0], [41.9, 3774.0], [42.0, 3783.0], [42.1, 3790.0], [42.2, 3792.0], [42.3, 3795.0], [42.4, 3799.0], [42.5, 3801.0], [42.6, 3805.0], [42.7, 3811.0], [42.8, 3818.0], [42.9, 3862.0], [43.0, 3881.0], [43.1, 3896.0], [43.2, 3900.0], [43.3, 3903.0], [43.4, 3906.0], [43.5, 3908.0], [43.6, 3914.0], [43.7, 3965.0], [43.8, 3992.0], [43.9, 3998.0], [44.0, 4001.0], [44.1, 4006.0], [44.2, 4008.0], [44.3, 4019.0], [44.4, 4028.0], [44.5, 4106.0], [44.6, 4154.0], [44.7, 4290.0], [44.8, 4297.0], [44.9, 4301.0], [45.0, 4305.0], [45.1, 4308.0], [45.2, 4312.0], [45.3, 4313.0], [45.4, 4315.0], [45.5, 4317.0], [45.6, 4319.0], [45.7, 4331.0], [45.8, 4337.0], [45.9, 4385.0], [46.0, 4391.0], [46.1, 4397.0], [46.2, 4399.0], [46.3, 4403.0], [46.4, 4408.0], [46.5, 4411.0], [46.6, 4415.0], [46.7, 4425.0], [46.8, 4486.0], [46.9, 4501.0], [47.0, 4509.0], [47.1, 4510.0], [47.2, 4514.0], [47.3, 4518.0], [47.4, 4520.0], [47.5, 4522.0], [47.6, 4527.0], [47.7, 4533.0], [47.8, 4598.0], [47.9, 4606.0], [48.0, 4610.0], [48.1, 4613.0], [48.2, 4617.0], [48.3, 4619.0], [48.4, 4620.0], [48.5, 4622.0], [48.6, 4622.0], [48.7, 4624.0], [48.8, 4625.0], [48.9, 4628.0], [49.0, 4630.0], [49.1, 4632.0], [49.2, 4634.0], [49.3, 4637.0], [49.4, 4643.0], [49.5, 4646.0], [49.6, 4695.0], [49.7, 4703.0], [49.8, 4707.0], [49.9, 4710.0], [50.0, 4712.0], [50.1, 4715.0], [50.2, 4719.0], [50.3, 4721.0], [50.4, 4722.0], [50.5, 4727.0], [50.6, 4732.0], [50.7, 4786.0], [50.8, 4791.0], [50.9, 4795.0], [51.0, 4796.0], [51.1, 4801.0], [51.2, 4803.0], [51.3, 4807.0], [51.4, 4809.0], [51.5, 4810.0], [51.6, 4811.0], [51.7, 4814.0], [51.8, 4818.0], [51.9, 4820.0], [52.0, 4824.0], [52.1, 4826.0], [52.2, 4828.0], [52.3, 4833.0], [52.4, 4839.0], [52.5, 4905.0], [52.6, 4915.0], [52.7, 4920.0], [52.8, 4922.0], [52.9, 4923.0], [53.0, 4924.0], [53.1, 4929.0], [53.2, 4931.0], [53.3, 4933.0], [53.4, 4937.0], [53.5, 4939.0], [53.6, 4941.0], [53.7, 4943.0], [53.8, 4947.0], [53.9, 4955.0], [54.0, 4959.0], [54.1, 4961.0], [54.2, 4962.0], [54.3, 4966.0], [54.4, 4978.0], [54.5, 5000.0], [54.6, 5007.0], [54.7, 5011.0], [54.8, 5014.0], [54.9, 5018.0], [55.0, 5019.0], [55.1, 5024.0], [55.2, 5027.0], [55.3, 5030.0], [55.4, 5036.0], [55.5, 5087.0], [55.6, 5091.0], [55.7, 5092.0], [55.8, 5097.0], [55.9, 5099.0], [56.0, 5101.0], [56.1, 5105.0], [56.2, 5109.0], [56.3, 5111.0], [56.4, 5114.0], [56.5, 5115.0], [56.6, 5116.0], [56.7, 5118.0], [56.8, 5119.0], [56.9, 5122.0], [57.0, 5124.0], [57.1, 5124.0], [57.2, 5126.0], [57.3, 5127.0], [57.4, 5129.0], [57.5, 5131.0], [57.6, 5131.0], [57.7, 5133.0], [57.8, 5134.0], [57.9, 5136.0], [58.0, 5137.0], [58.1, 5139.0], [58.2, 5142.0], [58.3, 5143.0], [58.4, 5149.0], [58.5, 5233.0], [58.6, 5249.0], [58.7, 5254.0], [58.8, 5256.0], [58.9, 5259.0], [59.0, 5261.0], [59.1, 5263.0], [59.2, 5265.0], [59.3, 5272.0], [59.4, 5275.0], [59.5, 5281.0], [59.6, 5327.0], [59.7, 5327.0], [59.8, 5332.0], [59.9, 5334.0], [60.0, 5336.0], [60.1, 5338.0], [60.2, 5340.0], [60.3, 5342.0], [60.4, 5344.0], [60.5, 5345.0], [60.6, 5360.0], [60.7, 5426.0], [60.8, 5428.0], [60.9, 5430.0], [61.0, 5432.0], [61.1, 5435.0], [61.2, 5436.0], [61.3, 5438.0], [61.4, 5440.0], [61.5, 5443.0], [61.6, 5448.0], [61.7, 5452.0], [61.8, 5456.0], [61.9, 5459.0], [62.0, 5465.0], [62.1, 5467.0], [62.2, 5469.0], [62.3, 5470.0], [62.4, 5472.0], [62.5, 5473.0], [62.6, 5478.0], [62.7, 5486.0], [62.8, 5558.0], [62.9, 5591.0], [63.0, 5600.0], [63.1, 5604.0], [63.2, 5606.0], [63.3, 5610.0], [63.4, 5611.0], [63.5, 5612.0], [63.6, 5613.0], [63.7, 5615.0], [63.8, 5617.0], [63.9, 5618.0], [64.0, 5620.0], [64.1, 5622.0], [64.2, 5625.0], [64.3, 5626.0], [64.4, 5629.0], [64.5, 5632.0], [64.6, 5632.0], [64.7, 5637.0], [64.8, 5639.0], [64.9, 5641.0], [65.0, 5647.0], [65.1, 5841.0], [65.2, 5853.0], [65.3, 5855.0], [65.4, 5858.0], [65.5, 5861.0], [65.6, 5867.0], [65.7, 5870.0], [65.8, 5873.0], [65.9, 5881.0], [66.0, 5885.0], [66.1, 5887.0], [66.2, 5903.0], [66.3, 5924.0], [66.4, 5928.0], [66.5, 5931.0], [66.6, 5933.0], [66.7, 5934.0], [66.8, 5935.0], [66.9, 5936.0], [67.0, 5938.0], [67.1, 5938.0], [67.2, 5939.0], [67.3, 5940.0], [67.4, 5941.0], [67.5, 5943.0], [67.6, 5943.0], [67.7, 5944.0], [67.8, 5944.0], [67.9, 5945.0], [68.0, 5946.0], [68.1, 5947.0], [68.2, 5948.0], [68.3, 5948.0], [68.4, 5949.0], [68.5, 5950.0], [68.6, 5950.0], [68.7, 5951.0], [68.8, 5952.0], [68.9, 5953.0], [69.0, 5953.0], [69.1, 5954.0], [69.2, 5954.0], [69.3, 5954.0], [69.4, 5955.0], [69.5, 5955.0], [69.6, 5957.0], [69.7, 5957.0], [69.8, 5958.0], [69.9, 5960.0], [70.0, 5961.0], [70.1, 5961.0], [70.2, 5962.0], [70.3, 5964.0], [70.4, 5966.0], [70.5, 5967.0], [70.6, 5971.0], [70.7, 5976.0], [70.8, 6023.0], [70.9, 6030.0], [71.0, 6038.0], [71.1, 6045.0], [71.2, 6049.0], [71.3, 6050.0], [71.4, 6053.0], [71.5, 6057.0], [71.6, 6060.0], [71.7, 6062.0], [71.8, 6063.0], [71.9, 6117.0], [72.0, 6125.0], [72.1, 6137.0], [72.2, 6142.0], [72.3, 6144.0], [72.4, 6146.0], [72.5, 6147.0], [72.6, 6148.0], [72.7, 6149.0], [72.8, 6152.0], [72.9, 6153.0], [73.0, 6154.0], [73.1, 6155.0], [73.2, 6155.0], [73.3, 6156.0], [73.4, 6157.0], [73.5, 6157.0], [73.6, 6158.0], [73.7, 6159.0], [73.8, 6160.0], [73.9, 6161.0], [74.0, 6162.0], [74.1, 6165.0], [74.2, 6168.0], [74.3, 6171.0], [74.4, 6173.0], [74.5, 6179.0], [74.6, 6186.0], [74.7, 6193.0], [74.8, 6198.0], [74.9, 6200.0], [75.0, 6203.0], [75.1, 6207.0], [75.2, 6211.0], [75.3, 6213.0], [75.4, 6215.0], [75.5, 6217.0], [75.6, 6221.0], [75.7, 6275.0], [75.8, 6287.0], [75.9, 6295.0], [76.0, 6298.0], [76.1, 6302.0], [76.2, 6306.0], [76.3, 6308.0], [76.4, 6308.0], [76.5, 6310.0], [76.6, 6315.0], [76.7, 6317.0], [76.8, 6321.0], [76.9, 6328.0], [77.0, 6330.0], [77.1, 6343.0], [77.2, 6349.0], [77.3, 6351.0], [77.4, 6353.0], [77.5, 6355.0], [77.6, 6357.0], [77.7, 6358.0], [77.8, 6360.0], [77.9, 6362.0], [78.0, 6363.0], [78.1, 6365.0], [78.2, 6365.0], [78.3, 6366.0], [78.4, 6367.0], [78.5, 6368.0], [78.6, 6369.0], [78.7, 6370.0], [78.8, 6371.0], [78.9, 6373.0], [79.0, 6375.0], [79.1, 6376.0], [79.2, 6378.0], [79.3, 6379.0], [79.4, 6386.0], [79.5, 6397.0], [79.6, 6407.0], [79.7, 6416.0], [79.8, 6419.0], [79.9, 6427.0], [80.0, 6430.0], [80.1, 6437.0], [80.2, 6439.0], [80.3, 6440.0], [80.4, 6444.0], [80.5, 6445.0], [80.6, 6447.0], [80.7, 6448.0], [80.8, 6450.0], [80.9, 6453.0], [81.0, 6453.0], [81.1, 6454.0], [81.2, 6454.0], [81.3, 6458.0], [81.4, 6458.0], [81.5, 6459.0], [81.6, 6461.0], [81.7, 6462.0], [81.8, 6463.0], [81.9, 6464.0], [82.0, 6466.0], [82.1, 6468.0], [82.2, 6470.0], [82.3, 6472.0], [82.4, 6477.0], [82.5, 6481.0], [82.6, 6484.0], [82.7, 6486.0], [82.8, 6487.0], [82.9, 6493.0], [83.0, 6501.0], [83.1, 6504.0], [83.2, 6565.0], [83.3, 6613.0], [83.4, 6653.0], [83.5, 6653.0], [83.6, 6654.0], [83.7, 6656.0], [83.8, 6656.0], [83.9, 6658.0], [84.0, 6659.0], [84.1, 6660.0], [84.2, 6661.0], [84.3, 6661.0], [84.4, 6663.0], [84.5, 6665.0], [84.6, 6666.0], [84.7, 6666.0], [84.8, 6667.0], [84.9, 6667.0], [85.0, 6668.0], [85.1, 6668.0], [85.2, 6670.0], [85.3, 6671.0], [85.4, 6673.0], [85.5, 6674.0], [85.6, 6675.0], [85.7, 6676.0], [85.8, 6677.0], [85.9, 6680.0], [86.0, 6683.0], [86.1, 6688.0], [86.2, 6691.0], [86.3, 6694.0], [86.4, 6697.0], [86.5, 6700.0], [86.6, 6704.0], [86.7, 6707.0], [86.8, 6710.0], [86.9, 6713.0], [87.0, 6716.0], [87.1, 6722.0], [87.2, 6730.0], [87.3, 6740.0], [87.4, 6744.0], [87.5, 6746.0], [87.6, 6748.0], [87.7, 6750.0], [87.8, 6751.0], [87.9, 6752.0], [88.0, 6752.0], [88.1, 6753.0], [88.2, 6754.0], [88.3, 6755.0], [88.4, 6756.0], [88.5, 6756.0], [88.6, 6757.0], [88.7, 6757.0], [88.8, 6758.0], [88.9, 6758.0], [89.0, 6759.0], [89.1, 6759.0], [89.2, 6759.0], [89.3, 6759.0], [89.4, 6760.0], [89.5, 6760.0], [89.6, 6760.0], [89.7, 6761.0], [89.8, 6761.0], [89.9, 6761.0], [90.0, 6761.0], [90.1, 6762.0], [90.2, 6762.0], [90.3, 6763.0], [90.4, 6763.0], [90.5, 6763.0], [90.6, 6763.0], [90.7, 6763.0], [90.8, 6763.0], [90.9, 6764.0], [91.0, 6764.0], [91.1, 6764.0], [91.2, 6764.0], [91.3, 6764.0], [91.4, 6765.0], [91.5, 6765.0], [91.6, 6765.0], [91.7, 6765.0], [91.8, 6766.0], [91.9, 6766.0], [92.0, 6766.0], [92.1, 6766.0], [92.2, 6767.0], [92.3, 6767.0], [92.4, 6767.0], [92.5, 6767.0], [92.6, 6768.0], [92.7, 6768.0], [92.8, 6768.0], [92.9, 6768.0], [93.0, 6768.0], [93.1, 6769.0], [93.2, 6769.0], [93.3, 6769.0], [93.4, 6769.0], [93.5, 6770.0], [93.6, 6770.0], [93.7, 6770.0], [93.8, 6771.0], [93.9, 6771.0], [94.0, 6771.0], [94.1, 6772.0], [94.2, 6772.0], [94.3, 6772.0], [94.4, 6772.0], [94.5, 6773.0], [94.6, 6773.0], [94.7, 6773.0], [94.8, 6773.0], [94.9, 6774.0], [95.0, 6774.0], [95.1, 6774.0], [95.2, 6774.0], [95.3, 6774.0], [95.4, 6774.0], [95.5, 6775.0], [95.6, 6775.0], [95.7, 6776.0], [95.8, 6776.0], [95.9, 6776.0], [96.0, 6776.0], [96.1, 6777.0], [96.2, 6777.0], [96.3, 6777.0], [96.4, 6777.0], [96.5, 6778.0], [96.6, 6778.0], [96.7, 6779.0], [96.8, 6779.0], [96.9, 6779.0], [97.0, 6780.0], [97.1, 6780.0], [97.2, 6780.0], [97.3, 6781.0], [97.4, 6782.0], [97.5, 6783.0], [97.6, 6784.0], [97.7, 6785.0], [97.8, 6787.0], [97.9, 6789.0], [98.0, 6790.0], [98.1, 6793.0], [98.2, 6802.0], [98.3, 6816.0], [98.4, 6818.0], [98.5, 6822.0], [98.6, 6826.0], [98.7, 6829.0], [98.8, 6830.0], [98.9, 6833.0], [99.0, 6834.0], [99.1, 6837.0], [99.2, 6842.0], [99.3, 6852.0], [99.4, 6853.0], [99.5, 6860.0], [99.6, 7550.0], [99.7, 8296.0], [99.8, 9954.0], [99.9, 10812.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 900.0, "maxY": 518.0, "series": [{"data": [[900.0, 1.0], [1000.0, 3.0], [1100.0, 12.0], [1200.0, 30.0], [1300.0, 24.0], [1400.0, 71.0], [1500.0, 72.0], [1600.0, 124.0], [1700.0, 50.0], [1800.0, 41.0], [1900.0, 44.0], [2000.0, 54.0], [2100.0, 52.0], [2200.0, 68.0], [2300.0, 103.0], [2400.0, 169.0], [2500.0, 82.0], [2600.0, 123.0], [2800.0, 73.0], [2700.0, 36.0], [2900.0, 68.0], [3000.0, 94.0], [3100.0, 6.0], [3200.0, 130.0], [3300.0, 24.0], [3400.0, 101.0], [3500.0, 47.0], [3700.0, 91.0], [3600.0, 87.0], [3800.0, 31.0], [3900.0, 33.0], [4000.0, 25.0], [4300.0, 59.0], [4100.0, 6.0], [4200.0, 12.0], [4600.0, 82.0], [4500.0, 41.0], [4400.0, 30.0], [4700.0, 61.0], [4800.0, 64.0], [4900.0, 87.0], [5100.0, 114.0], [5000.0, 64.0], [5200.0, 47.0], [5300.0, 47.0], [5500.0, 11.0], [5400.0, 95.0], [5600.0, 89.0], [5700.0, 1.0], [5800.0, 50.0], [6000.0, 49.0], [5900.0, 204.0], [6100.0, 130.0], [6200.0, 56.0], [6300.0, 153.0], [6400.0, 152.0], [6600.0, 142.0], [6500.0, 14.0], [6700.0, 518.0], [6800.0, 60.0], [7000.0, 2.0], [7500.0, 2.0], [7900.0, 2.0], [8400.0, 1.0], [8300.0, 1.0], [8700.0, 1.0], [8200.0, 1.0], [9400.0, 1.0], [10200.0, 1.0], [9900.0, 1.0], [10500.0, 1.0], [10700.0, 1.0], [10800.0, 1.0], [12200.0, 1.0], [12000.0, 1.0], [12300.0, 1.0], [12800.0, 1.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 58.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4258.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 111.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4258.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 58.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.727272727272727, "minX": 1.71864732E12, "maxY": 60.0, "series": [{"data": [[1.71864732E12, 2.727272727272727], [1.7186475E12, 21.977064220183493], [1.7186478E12, 57.95339805825243], [1.71864744E12, 14.789041095890411], [1.71864762E12, 36.541666666666664], [1.71864792E12, 57.11224489795919], [1.71864774E12, 50.79200000000006], [1.71864756E12, 29.083168316831667], [1.71864786E12, 60.0], [1.71864738E12, 7.973214285714289], [1.71864768E12, 43.54661016949156]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864792E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1294.3333333333333, "minX": 1.0, "maxY": 6448.3389830508495, "series": [{"data": [[2.0, 1294.3333333333333], [3.0, 2198.666666666667], [4.0, 1393.5], [5.0, 1457.2499999999995], [6.0, 1568.4583333333333], [7.0, 1561.392857142857], [8.0, 1471.3500000000001], [9.0, 1564.8055555555554], [10.0, 1633.25], [11.0, 1631.8181818181815], [12.0, 1698.1250000000002], [13.0, 1850.8809523809523], [14.0, 1948.3207547169811], [15.0, 2061.4800000000005], [16.0, 2051.313725490196], [17.0, 2199.9285714285706], [18.0, 2418.9999999999995], [19.0, 2610.3166666666666], [20.0, 2581.0806451612907], [21.0, 2568.049180327869], [22.0, 3051.173333333333], [23.0, 2489.8088235294126], [24.0, 2561.394366197183], [25.0, 2698.9705882352932], [26.0, 2799.6551724137926], [27.0, 2888.9375000000005], [28.0, 3086.928571428571], [29.0, 3034.642857142858], [30.0, 3231.8089887640435], [31.0, 3313.2786885245905], [32.0, 3434.8095238095248], [33.0, 3511.307692307692], [34.0, 3574.1641791044785], [35.0, 3711.376811594203], [36.0, 3798.225352112676], [37.0, 3940.054794520547], [38.0, 3969.25], [39.0, 4425.597402597404], [40.0, 4548.316455696205], [41.0, 4713.824999999999], [42.0, 4783.301204819278], [43.0, 4898.164705882353], [44.0, 4953.068181818181], [45.0, 5102.404494382023], [46.0, 5127.755555555555], [47.0, 5273.106382978723], [48.0, 5435.063829787235], [49.0, 5461.959183673469], [50.0, 5575.060606060605], [51.0, 5654.2], [52.0, 5915.843137254902], [53.0, 5967.895238095238], [54.0, 5947.289156626507], [55.0, 6171.236363636362], [56.0, 6173.982142857144], [57.0, 6237.947368421055], [58.0, 6389.8965517241395], [59.0, 6448.3389830508495], [60.0, 6404.881168177235], [1.0, 1928.0]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[39.98283261802574, 4465.846622995257]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 88.0, "minX": 1.71864732E12, "maxY": 310625.7166666667, "series": [{"data": [[1.71864732E12, 617.75], [1.7186475E12, 8445.083333333334], [1.7186478E12, 10046.066666666668], [1.71864744E12, 7119.15], [1.71864762E12, 9763.25], [1.71864792E12, 310625.7166666667], [1.71864774E12, 9731.133333333333], [1.71864756E12, 9797.616666666667], [1.71864786E12, 14864.966666666667], [1.71864738E12, 4289.583333333333], [1.71864768E12, 9200.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71864732E12, 88.0], [1.7186475E12, 1164.9], [1.7186478E12, 1375.25], [1.71864744E12, 976.35], [1.71864762E12, 1346.8833333333334], [1.71864792E12, 1047.3833333333334], [1.71864774E12, 1336.45], [1.71864756E12, 1348.9333333333334], [1.71864786E12, 1285.9166666666667], [1.71864738E12, 599.2666666666667], [1.71864768E12, 1261.1333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864792E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1386.2727272727273, "minX": 1.71864732E12, "maxY": 6764.3617463617475, "series": [{"data": [[1.71864732E12, 1386.2727272727273], [1.7186475E12, 2496.2935779816517], [1.7186478E12, 6470.576699029121], [1.71864744E12, 2010.9479452054782], [1.71864762E12, 3921.230158730159], [1.71864792E12, 5717.739795918362], [1.71864774E12, 5689.632000000009], [1.71864756E12, 3118.875247524751], [1.71864786E12, 6764.3617463617475], [1.71864738E12, 1547.3214285714284], [1.71864768E12, 4940.824152542373]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864792E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1386.2727272727273, "minX": 1.71864732E12, "maxY": 6763.8399168399155, "series": [{"data": [[1.71864732E12, 1386.2727272727273], [1.7186475E12, 2496.2912844036678], [1.7186478E12, 6470.5747572815535], [1.71864744E12, 2010.9479452054782], [1.71864762E12, 3921.230158730159], [1.71864792E12, 5664.456632653066], [1.71864774E12, 5689.630000000003], [1.71864756E12, 3118.8732673267323], [1.71864786E12, 6763.8399168399155], [1.71864738E12, 1547.3214285714284], [1.71864768E12, 4940.824152542373]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864792E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.7315068493150685, "minX": 1.71864732E12, "maxY": 6.9311224489795835, "series": [{"data": [[1.71864732E12, 4.151515151515152], [1.7186475E12, 2.016055045871561], [1.7186478E12, 4.087378640776705], [1.71864744E12, 1.7315068493150685], [1.71864762E12, 2.654761904761904], [1.71864792E12, 6.9311224489795835], [1.71864774E12, 3.432000000000003], [1.71864756E12, 2.205940594059408], [1.71864786E12, 3.6923076923076907], [1.71864738E12, 1.9732142857142863], [1.71864768E12, 3.15042372881356]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864792E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1127.0, "minX": 1.71864732E12, "maxY": 12891.0, "series": [{"data": [[1.71864732E12, 3491.0], [1.7186475E12, 3297.0], [1.7186478E12, 12206.0], [1.71864744E12, 2664.0], [1.71864762E12, 5518.0], [1.71864792E12, 12891.0], [1.71864774E12, 10812.0], [1.71864756E12, 5254.0], [1.71864786E12, 6864.0], [1.71864738E12, 1767.0], [1.71864768E12, 10237.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71864732E12, 1127.0], [1.7186475E12, 2148.0], [1.7186478E12, 6125.0], [1.71864744E12, 1428.0], [1.71864762E12, 3432.0], [1.71864792E12, 5880.0], [1.71864774E12, 5233.0], [1.71864756E12, 2574.0], [1.71864786E12, 6731.0], [1.71864738E12, 1143.0], [1.71864768E12, 4596.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71864732E12, 1447.2], [1.7186475E12, 2677.3], [1.7186478E12, 6765.0], [1.71864744E12, 2376.8], [1.71864762E12, 4490.5], [1.71864792E12, 6667.4], [1.71864774E12, 5954.0], [1.71864756E12, 3484.0], [1.71864786E12, 6819.9], [1.71864738E12, 1661.0], [1.71864768E12, 5131.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71864732E12, 3491.0], [1.7186475E12, 3007.9399999999987], [1.7186478E12, 8713.479999999987], [1.71864744E12, 2616.7], [1.71864762E12, 4715.0], [1.71864792E12, 10183.43999999993], [1.71864774E12, 7542.680000000014], [1.71864756E12, 4018.74], [1.71864786E12, 6856.0], [1.71864738E12, 1758.5], [1.71864768E12, 7169.669999999991]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71864732E12, 1353.0], [1.7186475E12, 2469.5], [1.7186478E12, 6367.0], [1.71864744E12, 2022.0], [1.71864762E12, 3791.5], [1.71864792E12, 6416.0], [1.71864774E12, 5623.0], [1.71864756E12, 3080.0], [1.71864786E12, 6769.0], [1.71864738E12, 1554.5], [1.71864768E12, 4932.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71864732E12, 2062.2999999999943], [1.7186475E12, 2689.15], [1.7186478E12, 6775.0], [1.71864744E12, 2467.2999999999997], [1.71864762E12, 4519.75], [1.71864792E12, 6676.2], [1.71864774E12, 5960.0], [1.71864756E12, 3496.0], [1.71864786E12, 6833.95], [1.71864738E12, 1747.0], [1.71864768E12, 5138.35]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864792E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1035.0, "minX": 1.0, "maxY": 6766.0, "series": [{"data": [[2.0, 1443.5], [3.0, 2267.0], [4.0, 2217.0], [5.0, 1748.0], [6.0, 2170.0], [7.0, 3294.0], [8.0, 2253.0], [9.0, 1996.5], [10.0, 1978.5], [11.0, 1662.0], [12.0, 2172.5], [13.0, 2420.0], [14.0, 2391.0], [15.0, 2350.0], [17.0, 2574.0], [18.0, 2433.5], [19.0, 2851.0], [20.0, 3024.5], [23.0, 2683.0], [24.0, 3285.0], [25.0, 3486.0], [26.0, 3339.0], [27.0, 3082.0], [28.0, 3694.0], [29.0, 3688.0], [30.0, 3543.5], [38.0, 4300.0], [39.0, 4450.0], [40.0, 4694.5], [41.0, 4619.0], [42.0, 4905.5], [43.0, 4801.0], [44.0, 4985.0], [45.0, 5130.0], [46.0, 5101.0], [47.0, 5415.5], [48.0, 5337.5], [49.0, 5469.0], [50.0, 5620.5], [51.0, 5861.0], [52.0, 5943.0], [53.0, 5951.0], [54.0, 6139.0], [55.0, 6155.0], [56.0, 6210.0], [57.0, 6365.5], [58.0, 6458.0], [59.0, 6664.0], [60.0, 6766.0], [1.0, 1721.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 1233.0], [2.0, 1543.0], [4.0, 2179.5], [3.0, 1411.0], [57.0, 1264.0], [56.0, 1941.0], [58.0, 1205.0], [60.0, 1035.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 838.0, "minX": 1.0, "maxY": 6766.0, "series": [{"data": [[2.0, 1443.5], [3.0, 2267.0], [4.0, 2217.0], [5.0, 1748.0], [6.0, 2170.0], [7.0, 3294.0], [8.0, 2253.0], [9.0, 1996.5], [10.0, 1978.5], [11.0, 1662.0], [12.0, 2172.5], [13.0, 2420.0], [14.0, 2391.0], [15.0, 2350.0], [17.0, 2574.0], [18.0, 2433.5], [19.0, 2851.0], [20.0, 3024.5], [23.0, 2683.0], [24.0, 3285.0], [25.0, 3486.0], [26.0, 3339.0], [27.0, 3082.0], [28.0, 3694.0], [29.0, 3688.0], [30.0, 3543.5], [38.0, 4300.0], [39.0, 4450.0], [40.0, 4694.5], [41.0, 4619.0], [42.0, 4905.5], [43.0, 4801.0], [44.0, 4985.0], [45.0, 5130.0], [46.0, 5101.0], [47.0, 5415.5], [48.0, 5337.5], [49.0, 5469.0], [50.0, 5620.5], [51.0, 5861.0], [52.0, 5943.0], [53.0, 5951.0], [54.0, 6139.0], [55.0, 6155.0], [56.0, 6210.0], [57.0, 6365.5], [58.0, 6458.0], [59.0, 6664.0], [60.0, 6766.0], [1.0, 1721.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 1012.5], [2.0, 1104.5], [4.0, 1790.0], [3.0, 1104.0], [57.0, 897.5], [56.0, 1241.0], [58.0, 902.0], [60.0, 838.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.71864732E12, "maxY": 8.933333333333334, "series": [{"data": [[1.71864732E12, 0.5833333333333334], [1.7186475E12, 7.416666666666667], [1.7186478E12, 8.683333333333334], [1.71864744E12, 6.15], [1.71864762E12, 8.933333333333334], [1.71864792E12, 5.533333333333333], [1.71864774E12, 8.45], [1.71864756E12, 8.15], [1.71864786E12, 8.016666666666667], [1.71864738E12, 3.8833333333333333], [1.71864768E12, 7.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864792E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71864732E12, "maxY": 8.583333333333334, "series": [{"data": [[1.71864732E12, 0.55], [1.7186475E12, 7.266666666666667], [1.7186478E12, 8.583333333333334], [1.71864744E12, 6.083333333333333], [1.71864762E12, 8.4], [1.71864792E12, 5.583333333333333], [1.71864774E12, 8.333333333333334], [1.71864756E12, 8.416666666666666], [1.71864786E12, 8.0], [1.71864738E12, 3.7333333333333334], [1.71864768E12, 7.866666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71864792E12, 0.95], [1.71864786E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864792E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71864732E12, "maxY": 8.583333333333334, "series": [{"data": [[1.71864792E12, 0.95], [1.71864786E12, 0.016666666666666666]], "isOverall": false, "label": "Directors by name-failure", "isController": false}, {"data": [[1.71864732E12, 0.55], [1.7186475E12, 7.266666666666667], [1.7186478E12, 8.583333333333334], [1.71864744E12, 6.083333333333333], [1.71864762E12, 8.4], [1.71864792E12, 5.583333333333333], [1.71864774E12, 8.333333333333334], [1.71864756E12, 8.416666666666666], [1.71864786E12, 8.0], [1.71864738E12, 3.7333333333333334], [1.71864768E12, 7.866666666666666]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864792E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71864732E12, "maxY": 8.583333333333334, "series": [{"data": [[1.71864732E12, 0.55], [1.7186475E12, 7.266666666666667], [1.7186478E12, 8.583333333333334], [1.71864744E12, 6.083333333333333], [1.71864762E12, 8.4], [1.71864792E12, 5.583333333333333], [1.71864774E12, 8.333333333333334], [1.71864756E12, 8.416666666666666], [1.71864786E12, 8.0], [1.71864738E12, 3.7333333333333334], [1.71864768E12, 7.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71864792E12, 0.95], [1.71864786E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864792E12, "title": "Total Transactions Per Second"}},
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

