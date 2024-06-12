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
        data: {"result": {"minY": 1082.0, "minX": 0.0, "maxY": 13713.0, "series": [{"data": [[0.0, 1082.0], [0.1, 1104.0], [0.2, 1131.0], [0.3, 1138.0], [0.4, 1162.0], [0.5, 1197.0], [0.6, 1221.0], [0.7, 1253.0], [0.8, 1298.0], [0.9, 1320.0], [1.0, 1335.0], [1.1, 1339.0], [1.2, 1358.0], [1.3, 1369.0], [1.4, 1378.0], [1.5, 1393.0], [1.6, 1400.0], [1.7, 1413.0], [1.8, 1430.0], [1.9, 1433.0], [2.0, 1438.0], [2.1, 1442.0], [2.2, 1445.0], [2.3, 1450.0], [2.4, 1457.0], [2.5, 1461.0], [2.6, 1465.0], [2.7, 1470.0], [2.8, 1475.0], [2.9, 1479.0], [3.0, 1483.0], [3.1, 1486.0], [3.2, 1488.0], [3.3, 1490.0], [3.4, 1490.0], [3.5, 1494.0], [3.6, 1495.0], [3.7, 1496.0], [3.8, 1498.0], [3.9, 1500.0], [4.0, 1503.0], [4.1, 1504.0], [4.2, 1504.0], [4.3, 1505.0], [4.4, 1508.0], [4.5, 1509.0], [4.6, 1512.0], [4.7, 1515.0], [4.8, 1517.0], [4.9, 1521.0], [5.0, 1529.0], [5.1, 1530.0], [5.2, 1533.0], [5.3, 1536.0], [5.4, 1543.0], [5.5, 1544.0], [5.6, 1547.0], [5.7, 1548.0], [5.8, 1554.0], [5.9, 1557.0], [6.0, 1564.0], [6.1, 1569.0], [6.2, 1571.0], [6.3, 1572.0], [6.4, 1577.0], [6.5, 1578.0], [6.6, 1582.0], [6.7, 1583.0], [6.8, 1590.0], [6.9, 1599.0], [7.0, 1608.0], [7.1, 1615.0], [7.2, 1624.0], [7.3, 1646.0], [7.4, 1649.0], [7.5, 1652.0], [7.6, 1674.0], [7.7, 1691.0], [7.8, 1698.0], [7.9, 1717.0], [8.0, 1725.0], [8.1, 1734.0], [8.2, 1755.0], [8.3, 1761.0], [8.4, 1780.0], [8.5, 1790.0], [8.6, 1796.0], [8.7, 1812.0], [8.8, 1832.0], [8.9, 1840.0], [9.0, 1846.0], [9.1, 1856.0], [9.2, 1873.0], [9.3, 1875.0], [9.4, 1879.0], [9.5, 1883.0], [9.6, 1900.0], [9.7, 1905.0], [9.8, 1916.0], [9.9, 1932.0], [10.0, 1937.0], [10.1, 1946.0], [10.2, 1960.0], [10.3, 1964.0], [10.4, 1969.0], [10.5, 1974.0], [10.6, 1984.0], [10.7, 1995.0], [10.8, 2007.0], [10.9, 2024.0], [11.0, 2034.0], [11.1, 2057.0], [11.2, 2086.0], [11.3, 2101.0], [11.4, 2107.0], [11.5, 2146.0], [11.6, 2158.0], [11.7, 2173.0], [11.8, 2178.0], [11.9, 2201.0], [12.0, 2214.0], [12.1, 2222.0], [12.2, 2228.0], [12.3, 2236.0], [12.4, 2240.0], [12.5, 2249.0], [12.6, 2256.0], [12.7, 2266.0], [12.8, 2285.0], [12.9, 2302.0], [13.0, 2307.0], [13.1, 2312.0], [13.2, 2313.0], [13.3, 2317.0], [13.4, 2323.0], [13.5, 2324.0], [13.6, 2329.0], [13.7, 2337.0], [13.8, 2338.0], [13.9, 2346.0], [14.0, 2349.0], [14.1, 2350.0], [14.2, 2352.0], [14.3, 2356.0], [14.4, 2359.0], [14.5, 2359.0], [14.6, 2361.0], [14.7, 2362.0], [14.8, 2363.0], [14.9, 2364.0], [15.0, 2367.0], [15.1, 2369.0], [15.2, 2370.0], [15.3, 2371.0], [15.4, 2375.0], [15.5, 2379.0], [15.6, 2379.0], [15.7, 2386.0], [15.8, 2386.0], [15.9, 2388.0], [16.0, 2391.0], [16.1, 2393.0], [16.2, 2393.0], [16.3, 2396.0], [16.4, 2398.0], [16.5, 2404.0], [16.6, 2410.0], [16.7, 2413.0], [16.8, 2421.0], [16.9, 2427.0], [17.0, 2431.0], [17.1, 2432.0], [17.2, 2433.0], [17.3, 2435.0], [17.4, 2436.0], [17.5, 2437.0], [17.6, 2438.0], [17.7, 2440.0], [17.8, 2441.0], [17.9, 2443.0], [18.0, 2448.0], [18.1, 2448.0], [18.2, 2452.0], [18.3, 2452.0], [18.4, 2456.0], [18.5, 2457.0], [18.6, 2459.0], [18.7, 2460.0], [18.8, 2462.0], [18.9, 2463.0], [19.0, 2465.0], [19.1, 2467.0], [19.2, 2469.0], [19.3, 2471.0], [19.4, 2473.0], [19.5, 2475.0], [19.6, 2478.0], [19.7, 2483.0], [19.8, 2490.0], [19.9, 2492.0], [20.0, 2500.0], [20.1, 2502.0], [20.2, 2503.0], [20.3, 2508.0], [20.4, 2510.0], [20.5, 2511.0], [20.6, 2513.0], [20.7, 2515.0], [20.8, 2516.0], [20.9, 2519.0], [21.0, 2521.0], [21.1, 2522.0], [21.2, 2524.0], [21.3, 2526.0], [21.4, 2529.0], [21.5, 2532.0], [21.6, 2534.0], [21.7, 2539.0], [21.8, 2542.0], [21.9, 2547.0], [22.0, 2567.0], [22.1, 2572.0], [22.2, 2580.0], [22.3, 2582.0], [22.4, 2589.0], [22.5, 2602.0], [22.6, 2611.0], [22.7, 2621.0], [22.8, 2630.0], [22.9, 2633.0], [23.0, 2640.0], [23.1, 2644.0], [23.2, 2653.0], [23.3, 2658.0], [23.4, 2660.0], [23.5, 2664.0], [23.6, 2667.0], [23.7, 2669.0], [23.8, 2670.0], [23.9, 2671.0], [24.0, 2672.0], [24.1, 2675.0], [24.2, 2680.0], [24.3, 2682.0], [24.4, 2686.0], [24.5, 2693.0], [24.6, 2705.0], [24.7, 2722.0], [24.8, 2732.0], [24.9, 2752.0], [25.0, 2771.0], [25.1, 2784.0], [25.2, 2832.0], [25.3, 2885.0], [25.4, 2947.0], [25.5, 2964.0], [25.6, 3000.0], [25.7, 3021.0], [25.8, 3065.0], [25.9, 3072.0], [26.0, 3080.0], [26.1, 3084.0], [26.2, 3086.0], [26.3, 3093.0], [26.4, 3102.0], [26.5, 3106.0], [26.6, 3115.0], [26.7, 3119.0], [26.8, 3120.0], [26.9, 3122.0], [27.0, 3127.0], [27.1, 3129.0], [27.2, 3131.0], [27.3, 3134.0], [27.4, 3136.0], [27.5, 3140.0], [27.6, 3143.0], [27.7, 3146.0], [27.8, 3150.0], [27.9, 3152.0], [28.0, 3154.0], [28.1, 3155.0], [28.2, 3158.0], [28.3, 3161.0], [28.4, 3165.0], [28.5, 3170.0], [28.6, 3178.0], [28.7, 3184.0], [28.8, 3190.0], [28.9, 3200.0], [29.0, 3276.0], [29.1, 3285.0], [29.2, 3289.0], [29.3, 3293.0], [29.4, 3297.0], [29.5, 3301.0], [29.6, 3312.0], [29.7, 3318.0], [29.8, 3319.0], [29.9, 3322.0], [30.0, 3322.0], [30.1, 3325.0], [30.2, 3328.0], [30.3, 3354.0], [30.4, 3374.0], [30.5, 3391.0], [30.6, 3397.0], [30.7, 3402.0], [30.8, 3405.0], [30.9, 3408.0], [31.0, 3411.0], [31.1, 3415.0], [31.2, 3417.0], [31.3, 3419.0], [31.4, 3423.0], [31.5, 3429.0], [31.6, 3431.0], [31.7, 3437.0], [31.8, 3457.0], [31.9, 3461.0], [32.0, 3465.0], [32.1, 3467.0], [32.2, 3468.0], [32.3, 3471.0], [32.4, 3472.0], [32.5, 3476.0], [32.6, 3477.0], [32.7, 3478.0], [32.8, 3482.0], [32.9, 3484.0], [33.0, 3486.0], [33.1, 3488.0], [33.2, 3489.0], [33.3, 3491.0], [33.4, 3495.0], [33.5, 3496.0], [33.6, 3500.0], [33.7, 3507.0], [33.8, 3514.0], [33.9, 3540.0], [34.0, 3553.0], [34.1, 3555.0], [34.2, 3560.0], [34.3, 3564.0], [34.4, 3574.0], [34.5, 3583.0], [34.6, 3626.0], [34.7, 3640.0], [34.8, 3649.0], [34.9, 3651.0], [35.0, 3653.0], [35.1, 3658.0], [35.2, 3662.0], [35.3, 3664.0], [35.4, 3668.0], [35.5, 3669.0], [35.6, 3671.0], [35.7, 3677.0], [35.8, 3681.0], [35.9, 3685.0], [36.0, 3688.0], [36.1, 3732.0], [36.2, 3736.0], [36.3, 3740.0], [36.4, 3743.0], [36.5, 3746.0], [36.6, 3752.0], [36.7, 3757.0], [36.8, 3765.0], [36.9, 3771.0], [37.0, 3773.0], [37.1, 3779.0], [37.2, 3784.0], [37.3, 3788.0], [37.4, 3790.0], [37.5, 3790.0], [37.6, 3792.0], [37.7, 3799.0], [37.8, 3800.0], [37.9, 3805.0], [38.0, 3810.0], [38.1, 3815.0], [38.2, 3824.0], [38.3, 3853.0], [38.4, 3862.0], [38.5, 3869.0], [38.6, 3874.0], [38.7, 3875.0], [38.8, 3879.0], [38.9, 3881.0], [39.0, 3882.0], [39.1, 3884.0], [39.2, 3885.0], [39.3, 3886.0], [39.4, 3890.0], [39.5, 3892.0], [39.6, 3895.0], [39.7, 3896.0], [39.8, 3898.0], [39.9, 3903.0], [40.0, 3905.0], [40.1, 3907.0], [40.2, 3911.0], [40.3, 3912.0], [40.4, 3915.0], [40.5, 3918.0], [40.6, 3939.0], [40.7, 3947.0], [40.8, 3950.0], [40.9, 3955.0], [41.0, 3959.0], [41.1, 3966.0], [41.2, 3970.0], [41.3, 3980.0], [41.4, 4069.0], [41.5, 4075.0], [41.6, 4078.0], [41.7, 4084.0], [41.8, 4090.0], [41.9, 4092.0], [42.0, 4100.0], [42.1, 4111.0], [42.2, 4148.0], [42.3, 4159.0], [42.4, 4165.0], [42.5, 4173.0], [42.6, 4179.0], [42.7, 4182.0], [42.8, 4187.0], [42.9, 4193.0], [43.0, 4194.0], [43.1, 4195.0], [43.2, 4203.0], [43.3, 4204.0], [43.4, 4210.0], [43.5, 4217.0], [43.6, 4224.0], [43.7, 4232.0], [43.8, 4236.0], [43.9, 4240.0], [44.0, 4242.0], [44.1, 4247.0], [44.2, 4258.0], [44.3, 4265.0], [44.4, 4377.0], [44.5, 4382.0], [44.6, 4386.0], [44.7, 4395.0], [44.8, 4400.0], [44.9, 4402.0], [45.0, 4402.0], [45.1, 4406.0], [45.2, 4408.0], [45.3, 4410.0], [45.4, 4417.0], [45.5, 4418.0], [45.6, 4420.0], [45.7, 4426.0], [45.8, 4429.0], [45.9, 4431.0], [46.0, 4435.0], [46.1, 4443.0], [46.2, 4588.0], [46.3, 4603.0], [46.4, 4605.0], [46.5, 4608.0], [46.6, 4611.0], [46.7, 4614.0], [46.8, 4615.0], [46.9, 4616.0], [47.0, 4618.0], [47.1, 4620.0], [47.2, 4623.0], [47.3, 4624.0], [47.4, 4627.0], [47.5, 4629.0], [47.6, 4631.0], [47.7, 4634.0], [47.8, 4636.0], [47.9, 4637.0], [48.0, 4642.0], [48.1, 4644.0], [48.2, 4646.0], [48.3, 4647.0], [48.4, 4649.0], [48.5, 4652.0], [48.6, 4655.0], [48.7, 4658.0], [48.8, 4662.0], [48.9, 4670.0], [49.0, 4759.0], [49.1, 4766.0], [49.2, 4769.0], [49.3, 4773.0], [49.4, 4777.0], [49.5, 4781.0], [49.6, 4784.0], [49.7, 4792.0], [49.8, 4794.0], [49.9, 4808.0], [50.0, 4828.0], [50.1, 4833.0], [50.2, 4840.0], [50.3, 4843.0], [50.4, 4845.0], [50.5, 4846.0], [50.6, 4847.0], [50.7, 4849.0], [50.8, 4850.0], [50.9, 4853.0], [51.0, 4854.0], [51.1, 4856.0], [51.2, 4858.0], [51.3, 4862.0], [51.4, 4864.0], [51.5, 4866.0], [51.6, 4871.0], [51.7, 4873.0], [51.8, 4876.0], [51.9, 4882.0], [52.0, 4911.0], [52.1, 4914.0], [52.2, 4917.0], [52.3, 4919.0], [52.4, 4920.0], [52.5, 4924.0], [52.6, 4927.0], [52.7, 4932.0], [52.8, 4934.0], [52.9, 4940.0], [53.0, 4946.0], [53.1, 4952.0], [53.2, 4954.0], [53.3, 4958.0], [53.4, 4965.0], [53.5, 4969.0], [53.6, 4973.0], [53.7, 4977.0], [53.8, 4982.0], [53.9, 5013.0], [54.0, 5023.0], [54.1, 5024.0], [54.2, 5029.0], [54.3, 5032.0], [54.4, 5033.0], [54.5, 5036.0], [54.6, 5040.0], [54.7, 5044.0], [54.8, 5054.0], [54.9, 5102.0], [55.0, 5107.0], [55.1, 5110.0], [55.2, 5111.0], [55.3, 5116.0], [55.4, 5117.0], [55.5, 5118.0], [55.6, 5120.0], [55.7, 5123.0], [55.8, 5125.0], [55.9, 5126.0], [56.0, 5127.0], [56.1, 5128.0], [56.2, 5130.0], [56.3, 5131.0], [56.4, 5132.0], [56.5, 5134.0], [56.6, 5135.0], [56.7, 5136.0], [56.8, 5139.0], [56.9, 5144.0], [57.0, 5196.0], [57.1, 5205.0], [57.2, 5209.0], [57.3, 5213.0], [57.4, 5217.0], [57.5, 5220.0], [57.6, 5227.0], [57.7, 5231.0], [57.8, 5235.0], [57.9, 5248.0], [58.0, 5282.0], [58.1, 5299.0], [58.2, 5309.0], [58.3, 5314.0], [58.4, 5315.0], [58.5, 5316.0], [58.6, 5318.0], [58.7, 5321.0], [58.8, 5322.0], [58.9, 5325.0], [59.0, 5327.0], [59.1, 5327.0], [59.2, 5329.0], [59.3, 5332.0], [59.4, 5336.0], [59.5, 5340.0], [59.6, 5343.0], [59.7, 5345.0], [59.8, 5346.0], [59.9, 5353.0], [60.0, 5357.0], [60.1, 5362.0], [60.2, 5400.0], [60.3, 5418.0], [60.4, 5436.0], [60.5, 5444.0], [60.6, 5447.0], [60.7, 5453.0], [60.8, 5454.0], [60.9, 5457.0], [61.0, 5460.0], [61.1, 5462.0], [61.2, 5471.0], [61.3, 5524.0], [61.4, 5532.0], [61.5, 5535.0], [61.6, 5537.0], [61.7, 5541.0], [61.8, 5543.0], [61.9, 5544.0], [62.0, 5549.0], [62.1, 5552.0], [62.2, 5553.0], [62.3, 5558.0], [62.4, 5580.0], [62.5, 5612.0], [62.6, 5615.0], [62.7, 5621.0], [62.8, 5626.0], [62.9, 5628.0], [63.0, 5629.0], [63.1, 5632.0], [63.2, 5633.0], [63.3, 5638.0], [63.4, 5639.0], [63.5, 5645.0], [63.6, 5812.0], [63.7, 5827.0], [63.8, 5835.0], [63.9, 5836.0], [64.0, 5837.0], [64.1, 5842.0], [64.2, 5842.0], [64.3, 5845.0], [64.4, 5850.0], [64.5, 5852.0], [64.6, 5853.0], [64.7, 5855.0], [64.8, 5861.0], [64.9, 5924.0], [65.0, 5930.0], [65.1, 5936.0], [65.2, 5937.0], [65.3, 5938.0], [65.4, 5940.0], [65.5, 5942.0], [65.6, 5945.0], [65.7, 5946.0], [65.8, 5946.0], [65.9, 5947.0], [66.0, 5948.0], [66.1, 5949.0], [66.2, 5950.0], [66.3, 5950.0], [66.4, 5952.0], [66.5, 5953.0], [66.6, 5953.0], [66.7, 5956.0], [66.8, 5957.0], [66.9, 5957.0], [67.0, 5958.0], [67.1, 5959.0], [67.2, 5960.0], [67.3, 6018.0], [67.4, 6028.0], [67.5, 6035.0], [67.6, 6039.0], [67.7, 6043.0], [67.8, 6046.0], [67.9, 6048.0], [68.0, 6049.0], [68.1, 6052.0], [68.2, 6053.0], [68.3, 6058.0], [68.4, 6060.0], [68.5, 6064.0], [68.6, 6134.0], [68.7, 6138.0], [68.8, 6143.0], [68.9, 6144.0], [69.0, 6149.0], [69.1, 6151.0], [69.2, 6152.0], [69.3, 6156.0], [69.4, 6157.0], [69.5, 6158.0], [69.6, 6159.0], [69.7, 6166.0], [69.8, 6171.0], [69.9, 6245.0], [70.0, 6249.0], [70.1, 6251.0], [70.2, 6256.0], [70.3, 6259.0], [70.4, 6264.0], [70.5, 6269.0], [70.6, 6270.0], [70.7, 6273.0], [70.8, 6278.0], [70.9, 6281.0], [71.0, 6286.0], [71.1, 6306.0], [71.2, 6327.0], [71.3, 6329.0], [71.4, 6333.0], [71.5, 6335.0], [71.6, 6337.0], [71.7, 6339.0], [71.8, 6341.0], [71.9, 6342.0], [72.0, 6343.0], [72.1, 6343.0], [72.2, 6345.0], [72.3, 6349.0], [72.4, 6350.0], [72.5, 6350.0], [72.6, 6351.0], [72.7, 6352.0], [72.8, 6355.0], [72.9, 6357.0], [73.0, 6359.0], [73.1, 6360.0], [73.2, 6362.0], [73.3, 6365.0], [73.4, 6368.0], [73.5, 6369.0], [73.6, 6371.0], [73.7, 6431.0], [73.8, 6442.0], [73.9, 6445.0], [74.0, 6448.0], [74.1, 6450.0], [74.2, 6452.0], [74.3, 6455.0], [74.4, 6457.0], [74.5, 6460.0], [74.6, 6463.0], [74.7, 6465.0], [74.8, 6466.0], [74.9, 6468.0], [75.0, 6472.0], [75.1, 6542.0], [75.2, 6548.0], [75.3, 6549.0], [75.4, 6551.0], [75.5, 6552.0], [75.6, 6554.0], [75.7, 6554.0], [75.8, 6557.0], [75.9, 6558.0], [76.0, 6559.0], [76.1, 6560.0], [76.2, 6561.0], [76.3, 6562.0], [76.4, 6563.0], [76.5, 6564.0], [76.6, 6566.0], [76.7, 6567.0], [76.8, 6567.0], [76.9, 6568.0], [77.0, 6569.0], [77.1, 6570.0], [77.2, 6572.0], [77.3, 6574.0], [77.4, 6577.0], [77.5, 6624.0], [77.6, 6628.0], [77.7, 6634.0], [77.8, 6635.0], [77.9, 6637.0], [78.0, 6640.0], [78.1, 6648.0], [78.2, 6649.0], [78.3, 6650.0], [78.4, 6651.0], [78.5, 6652.0], [78.6, 6653.0], [78.7, 6654.0], [78.8, 6655.0], [78.9, 6656.0], [79.0, 6657.0], [79.1, 6657.0], [79.2, 6658.0], [79.3, 6659.0], [79.4, 6660.0], [79.5, 6660.0], [79.6, 6661.0], [79.7, 6662.0], [79.8, 6662.0], [79.9, 6663.0], [80.0, 6664.0], [80.1, 6665.0], [80.2, 6665.0], [80.3, 6666.0], [80.4, 6667.0], [80.5, 6667.0], [80.6, 6668.0], [80.7, 6668.0], [80.8, 6669.0], [80.9, 6670.0], [81.0, 6670.0], [81.1, 6671.0], [81.2, 6671.0], [81.3, 6672.0], [81.4, 6672.0], [81.5, 6673.0], [81.6, 6673.0], [81.7, 6674.0], [81.8, 6675.0], [81.9, 6676.0], [82.0, 6676.0], [82.1, 6677.0], [82.2, 6677.0], [82.3, 6677.0], [82.4, 6678.0], [82.5, 6678.0], [82.6, 6678.0], [82.7, 6679.0], [82.8, 6680.0], [82.9, 6680.0], [83.0, 6680.0], [83.1, 6681.0], [83.2, 6681.0], [83.3, 6682.0], [83.4, 6682.0], [83.5, 6682.0], [83.6, 6683.0], [83.7, 6683.0], [83.8, 6684.0], [83.9, 6684.0], [84.0, 6684.0], [84.1, 6685.0], [84.2, 6686.0], [84.3, 6686.0], [84.4, 6687.0], [84.5, 6687.0], [84.6, 6687.0], [84.7, 6688.0], [84.8, 6688.0], [84.9, 6689.0], [85.0, 6690.0], [85.1, 6690.0], [85.2, 6691.0], [85.3, 6691.0], [85.4, 6691.0], [85.5, 6692.0], [85.6, 6692.0], [85.7, 6692.0], [85.8, 6693.0], [85.9, 6693.0], [86.0, 6694.0], [86.1, 6694.0], [86.2, 6695.0], [86.3, 6695.0], [86.4, 6695.0], [86.5, 6696.0], [86.6, 6696.0], [86.7, 6696.0], [86.8, 6696.0], [86.9, 6697.0], [87.0, 6697.0], [87.1, 6698.0], [87.2, 6698.0], [87.3, 6698.0], [87.4, 6698.0], [87.5, 6699.0], [87.6, 6700.0], [87.7, 6700.0], [87.8, 6701.0], [87.9, 6701.0], [88.0, 6702.0], [88.1, 6702.0], [88.2, 6702.0], [88.3, 6703.0], [88.4, 6703.0], [88.5, 6703.0], [88.6, 6704.0], [88.7, 6704.0], [88.8, 6705.0], [88.9, 6705.0], [89.0, 6705.0], [89.1, 6706.0], [89.2, 6706.0], [89.3, 6707.0], [89.4, 6707.0], [89.5, 6707.0], [89.6, 6708.0], [89.7, 6708.0], [89.8, 6708.0], [89.9, 6709.0], [90.0, 6709.0], [90.1, 6709.0], [90.2, 6709.0], [90.3, 6710.0], [90.4, 6710.0], [90.5, 6710.0], [90.6, 6710.0], [90.7, 6711.0], [90.8, 6711.0], [90.9, 6712.0], [91.0, 6712.0], [91.1, 6713.0], [91.2, 6713.0], [91.3, 6714.0], [91.4, 6714.0], [91.5, 6715.0], [91.6, 6716.0], [91.7, 6716.0], [91.8, 6717.0], [91.9, 6717.0], [92.0, 6717.0], [92.1, 6718.0], [92.2, 6718.0], [92.3, 6719.0], [92.4, 6719.0], [92.5, 6720.0], [92.6, 6720.0], [92.7, 6720.0], [92.8, 6721.0], [92.9, 6721.0], [93.0, 6721.0], [93.1, 6722.0], [93.2, 6723.0], [93.3, 6723.0], [93.4, 6724.0], [93.5, 6725.0], [93.6, 6725.0], [93.7, 6725.0], [93.8, 6726.0], [93.9, 6727.0], [94.0, 6728.0], [94.1, 6728.0], [94.2, 6729.0], [94.3, 6730.0], [94.4, 6731.0], [94.5, 6732.0], [94.6, 6733.0], [94.7, 6733.0], [94.8, 6735.0], [94.9, 6737.0], [95.0, 6738.0], [95.1, 6740.0], [95.2, 6744.0], [95.3, 6745.0], [95.4, 6747.0], [95.5, 6750.0], [95.6, 6753.0], [95.7, 6755.0], [95.8, 6756.0], [95.9, 6757.0], [96.0, 6757.0], [96.1, 6758.0], [96.2, 6759.0], [96.3, 6760.0], [96.4, 6760.0], [96.5, 6761.0], [96.6, 6762.0], [96.7, 6763.0], [96.8, 6764.0], [96.9, 6765.0], [97.0, 6765.0], [97.1, 6766.0], [97.2, 6766.0], [97.3, 6767.0], [97.4, 6769.0], [97.5, 6770.0], [97.6, 6771.0], [97.7, 6773.0], [97.8, 6774.0], [97.9, 6775.0], [98.0, 6776.0], [98.1, 6777.0], [98.2, 6778.0], [98.3, 6778.0], [98.4, 6779.0], [98.5, 6780.0], [98.6, 6781.0], [98.7, 6782.0], [98.8, 6783.0], [98.9, 6785.0], [99.0, 6787.0], [99.1, 6788.0], [99.2, 6791.0], [99.3, 6792.0], [99.4, 6793.0], [99.5, 6798.0], [99.6, 6919.0], [99.7, 7207.0], [99.8, 8924.0], [99.9, 9612.0], [100.0, 13713.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 520.0, "series": [{"data": [[1000.0, 4.0], [1100.0, 18.0], [1200.0, 13.0], [1300.0, 34.0], [1400.0, 100.0], [1500.0, 131.0], [1600.0, 39.0], [1700.0, 36.0], [1800.0, 42.0], [1900.0, 49.0], [2000.0, 22.0], [2100.0, 28.0], [2200.0, 44.0], [2300.0, 154.0], [2400.0, 155.0], [2500.0, 107.0], [2600.0, 91.0], [2800.0, 9.0], [2700.0, 25.0], [2900.0, 11.0], [3000.0, 35.0], [3100.0, 108.0], [3200.0, 24.0], [3300.0, 52.0], [3400.0, 126.0], [3500.0, 45.0], [3600.0, 64.0], [3700.0, 76.0], [3800.0, 89.0], [3900.0, 65.0], [4000.0, 28.0], [4100.0, 53.0], [4200.0, 50.0], [4300.0, 19.0], [4500.0, 6.0], [4600.0, 116.0], [4400.0, 58.0], [4800.0, 93.0], [4700.0, 39.0], [4900.0, 82.0], [5000.0, 45.0], [5100.0, 93.0], [5200.0, 47.0], [5300.0, 89.0], [5500.0, 50.0], [5400.0, 48.0], [5600.0, 50.0], [5800.0, 54.0], [6100.0, 55.0], [5900.0, 107.0], [6000.0, 55.0], [6200.0, 56.0], [6300.0, 113.0], [6600.0, 439.0], [6500.0, 108.0], [6400.0, 57.0], [6900.0, 2.0], [6700.0, 520.0], [6800.0, 1.0], [7100.0, 2.0], [7200.0, 1.0], [7500.0, 1.0], [7800.0, 1.0], [8700.0, 1.0], [8200.0, 1.0], [9100.0, 2.0], [8900.0, 1.0], [9300.0, 1.0], [9600.0, 1.0], [10300.0, 1.0], [11200.0, 1.0], [11000.0, 1.0], [13700.0, 1.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 172.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4173.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 172.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4173.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.872881355932203, "minX": 1.71821424E12, "maxY": 60.0, "series": [{"data": [[1.71821472E12, 59.67729831144462], [1.71821424E12, 4.872881355932203], [1.71821442E12, 25.266075388026596], [1.7182146E12, 46.731225296442695], [1.71821478E12, 60.0], [1.7182143E12, 11.141479099678456], [1.71821448E12, 32.41544885177453], [1.71821466E12, 53.9541666666666], [1.71821484E12, 46.83333333333333], [1.71821436E12, 18.328395061728404], [1.71821454E12, 39.478354978355]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821484E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1113.888888888889, "minX": 1.0, "maxY": 6704.587069864436, "series": [{"data": [[2.0, 1113.888888888889], [3.0, 1486.142857142857], [4.0, 1430.0625], [5.0, 1440.3750000000002], [6.0, 1387.0000000000002], [7.0, 1480.5357142857142], [8.0, 1470.2499999999998], [9.0, 1616.434782608696], [10.0, 1801.5714285714284], [11.0, 1911.9024390243899], [12.0, 1790.9166666666667], [13.0, 1978.5370370370367], [14.0, 1953.4081632653067], [15.0, 2576.084745762712], [16.0, 2185.591836734694], [17.0, 2202.7115384615386], [18.0, 2357.8148148148157], [19.0, 2379.3214285714284], [20.0, 2706.287878787878], [21.0, 2437.238095238097], [22.0, 2423.307692307692], [23.0, 2545.0769230769224], [24.0, 2757.094594594596], [25.0, 2702.444444444445], [26.0, 3180.3625], [27.0, 3113.3888888888882], [28.0, 3158.9636363636364], [29.0, 3277.231707317073], [30.0, 3408.4843749999995], [31.0, 3514.7049180327867], [32.0, 3581.5714285714284], [33.0, 3698.4923076923087], [34.0, 3797.044776119405], [35.0, 4005.69014084507], [36.0, 4076.6323529411766], [37.0, 4189.175675675675], [38.0, 4331.22077922078], [39.0, 4509.219512195124], [40.0, 4599.814814814816], [41.0, 4794.499999999998], [42.0, 4886.577777777777], [43.0, 4876.781609195404], [44.0, 4947.91111111111], [45.0, 5034.808988764045], [46.0, 5121.68888888889], [47.0, 5254.684210526317], [48.0, 5366.625000000001], [49.0, 5451.438775510204], [50.0, 5543.755102040817], [51.0, 5687.826923076924], [52.0, 6215.726415094337], [53.0, 5964.867924528301], [54.0, 6058.62962962963], [55.0, 6142.981651376145], [56.0, 6259.178571428569], [57.0, 6351.0701754385955], [58.0, 6442.06896551724], [59.0, 6522.524590163934], [60.0, 6704.587069864436], [1.0, 1400.75]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[39.67663981588029, 4566.919677790564]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 315.21666666666664, "minX": 1.71821424E12, "maxY": 10501.166666666666, "series": [{"data": [[1.71821472E12, 10501.166666666666], [1.71821424E12, 2240.2166666666667], [1.71821442E12, 8741.066666666668], [1.7182146E12, 9850.033333333333], [1.71821478E12, 9456.4], [1.7182143E12, 6032.683333333333], [1.71821448E12, 9316.05], [1.71821466E12, 9345.15], [1.71821484E12, 2385.366666666667], [1.71821436E12, 7856.233333333334], [1.71821454E12, 8935.266666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71821472E12, 1424.0166666666667], [1.71821424E12, 315.21666666666664], [1.71821442E12, 1204.6666666666667], [1.7182146E12, 1352.0833333333333], [1.71821478E12, 1283.35], [1.7182143E12, 832.5833333333334], [1.71821448E12, 1279.6666666666667], [1.71821466E12, 1282.4], [1.71821484E12, 321.01666666666665], [1.71821436E12, 1082.5], [1.71821454E12, 1234.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821484E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1414.3474576271183, "minX": 1.71821424E12, "maxY": 6739.991666666668, "series": [{"data": [[1.71821472E12, 6657.881801125705], [1.71821424E12, 1414.3474576271183], [1.71821442E12, 2826.390243902439], [1.7182146E12, 5198.841897233206], [1.71821478E12, 6700.35833333333], [1.7182143E12, 1671.4855305466235], [1.71821448E12, 3660.2860125260972], [1.71821466E12, 6109.67708333333], [1.71821484E12, 6739.991666666668], [1.71821436E12, 2291.9728395061725], [1.71821454E12, 4466.303030303031]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821484E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1414.3474576271183, "minX": 1.71821424E12, "maxY": 6739.974999999998, "series": [{"data": [[1.71821472E12, 6657.872420262665], [1.71821424E12, 1414.3474576271183], [1.71821442E12, 2826.3835920177385], [1.7182146E12, 5198.8320158102715], [1.71821478E12, 6700.345833333333], [1.7182143E12, 1671.4598070739555], [1.71821448E12, 3660.269311064718], [1.71821466E12, 6109.672916666664], [1.71821484E12, 6739.974999999998], [1.71821436E12, 2291.9679012345714], [1.71821454E12, 4466.287878787877]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821484E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.55875831485588, "minX": 1.71821424E12, "maxY": 13.805194805194812, "series": [{"data": [[1.71821472E12, 5.647279549718572], [1.71821424E12, 2.7372881355932215], [1.71821442E12, 2.55875831485588], [1.7182146E12, 4.656126482213441], [1.71821478E12, 5.1333333333333355], [1.7182143E12, 6.971061093247589], [1.71821448E12, 5.421711899791234], [1.71821466E12, 10.624999999999993], [1.71821484E12, 4.966666666666666], [1.71821436E12, 6.46172839506173], [1.71821454E12, 13.805194805194812]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821484E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1082.0, "minX": 1.71821424E12, "maxY": 13713.0, "series": [{"data": [[1.71821472E12, 13713.0], [1.71821424E12, 2222.0], [1.71821442E12, 4842.0], [1.7182146E12, 9159.0], [1.71821478E12, 6763.0], [1.7182143E12, 3059.0], [1.71821448E12, 6372.0], [1.71821466E12, 11239.0], [1.71821484E12, 6796.0], [1.71821436E12, 3328.0], [1.71821454E12, 9182.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71821472E12, 6323.0], [1.71821424E12, 1082.0], [1.71821442E12, 1486.0], [1.7182146E12, 4749.0], [1.71821478E12, 6639.0], [1.7182143E12, 1179.0], [1.71821448E12, 3268.0], [1.71821466E12, 2901.0], [1.71821484E12, 6672.0], [1.71821436E12, 1442.0], [1.71821454E12, 3319.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71821472E12, 6775.0], [1.71821424E12, 1553.0000000000002], [1.71821442E12, 3173.2], [1.7182146E12, 5532.3], [1.71821478E12, 6728.0], [1.7182143E12, 1994.8000000000002], [1.71821448E12, 3915.0], [1.71821466E12, 6549.0], [1.71821484E12, 6781.9], [1.71821436E12, 2474.4], [1.71821454E12, 4946.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71821472E12, 6929.019999999994], [1.71821424E12, 2167.850000000001], [1.71821442E12, 4179.0], [1.7182146E12, 6625.060000000004], [1.71821478E12, 6747.19], [1.7182143E12, 3003.52], [1.71821448E12, 5955.0], [1.71821466E12, 7007.759999999998], [1.71821484E12, 6795.79], [1.71821436E12, 3038.68], [1.71821454E12, 7178.33]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71821472E12, 6666.0], [1.71821424E12, 1436.5], [1.71821442E12, 2672.0], [1.7182146E12, 5136.5], [1.71821478E12, 6701.0], [1.7182143E12, 1572.0], [1.71821448E12, 3626.0], [1.71821466E12, 6051.5], [1.71821484E12, 6744.0], [1.71821436E12, 2359.0], [1.71821454E12, 4426.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71821472E12, 6784.3], [1.71821424E12, 1749.35], [1.71821442E12, 4009.399999999995], [1.7182146E12, 5548.3], [1.71821478E12, 6735.0], [1.7182143E12, 2165.2], [1.71821448E12, 4086.0], [1.71821466E12, 6563.95], [1.71821484E12, 6788.95], [1.71821436E12, 2519.7], [1.71821454E12, 4970.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821484E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1484.0, "minX": 1.0, "maxY": 6706.0, "series": [{"data": [[2.0, 1733.0], [3.0, 1586.0], [4.0, 2610.5], [5.0, 1514.0], [6.0, 1484.0], [7.0, 1543.0], [8.0, 1503.0], [9.0, 1560.0], [10.0, 1569.5], [11.0, 1984.0], [12.0, 1874.0], [13.0, 1963.0], [14.0, 2114.5], [15.0, 2362.5], [16.0, 2222.0], [17.0, 2286.5], [18.0, 2393.0], [19.0, 2494.0], [20.0, 2517.0], [21.0, 2578.0], [23.0, 3484.0], [24.0, 2631.5], [26.0, 4160.5], [27.0, 3123.0], [28.0, 3157.5], [29.0, 3316.0], [30.0, 3444.5], [31.0, 3886.0], [32.0, 3625.5], [33.0, 3745.0], [34.0, 3883.5], [35.0, 3905.0], [37.0, 4182.0], [38.0, 4240.5], [39.0, 4409.5], [40.0, 4634.5], [42.0, 4813.5], [43.0, 4841.5], [44.0, 4922.0], [45.0, 5102.5], [46.0, 5128.5], [47.0, 5314.0], [48.0, 5318.0], [49.0, 5522.5], [50.0, 5629.0], [51.0, 6560.0], [52.0, 5928.0], [53.0, 5946.0], [54.0, 6671.5], [55.0, 6152.0], [56.0, 6298.5], [57.0, 6352.0], [58.0, 6455.5], [59.0, 6631.5], [60.0, 6706.0], [1.0, 1711.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1484.0, "minX": 1.0, "maxY": 6706.0, "series": [{"data": [[2.0, 1733.0], [3.0, 1586.0], [4.0, 2610.5], [5.0, 1514.0], [6.0, 1484.0], [7.0, 1543.0], [8.0, 1503.0], [9.0, 1560.0], [10.0, 1569.5], [11.0, 1984.0], [12.0, 1874.0], [13.0, 1963.0], [14.0, 2114.5], [15.0, 2362.5], [16.0, 2222.0], [17.0, 2286.5], [18.0, 2393.0], [19.0, 2494.0], [20.0, 2517.0], [21.0, 2578.0], [23.0, 3484.0], [24.0, 2631.5], [26.0, 4160.5], [27.0, 3123.0], [28.0, 3157.5], [29.0, 3316.0], [30.0, 3444.5], [31.0, 3886.0], [32.0, 3625.5], [33.0, 3745.0], [34.0, 3883.5], [35.0, 3905.0], [37.0, 4182.0], [38.0, 4240.5], [39.0, 4409.5], [40.0, 4634.5], [42.0, 4813.5], [43.0, 4841.5], [44.0, 4922.0], [45.0, 5102.5], [46.0, 5128.5], [47.0, 5314.0], [48.0, 5318.0], [49.0, 5522.5], [50.0, 5629.0], [51.0, 6560.0], [52.0, 5928.0], [53.0, 5946.0], [54.0, 6671.5], [55.0, 6152.0], [56.0, 6298.5], [57.0, 6352.0], [58.0, 6455.5], [59.0, 6631.5], [60.0, 6706.0], [1.0, 1711.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.71821424E12, "maxY": 8.916666666666666, "series": [{"data": [[1.71821472E12, 8.916666666666666], [1.71821424E12, 2.0833333333333335], [1.71821442E12, 7.933333333333334], [1.7182146E12, 8.55], [1.71821478E12, 8.0], [1.7182143E12, 5.3], [1.71821448E12, 8.066666666666666], [1.71821466E12, 8.133333333333333], [1.71821484E12, 1.0], [1.71821436E12, 6.583333333333333], [1.71821454E12, 7.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821484E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.71821424E12, "maxY": 8.883333333333333, "series": [{"data": [[1.71821472E12, 8.883333333333333], [1.71821424E12, 1.9666666666666666], [1.71821442E12, 7.516666666666667], [1.7182146E12, 8.433333333333334], [1.71821478E12, 8.0], [1.7182143E12, 5.183333333333334], [1.71821448E12, 7.983333333333333], [1.71821466E12, 8.0], [1.71821484E12, 2.0], [1.71821436E12, 6.75], [1.71821454E12, 7.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821484E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.71821424E12, "maxY": 8.883333333333333, "series": [{"data": [[1.71821472E12, 8.883333333333333], [1.71821424E12, 1.9666666666666666], [1.71821442E12, 7.516666666666667], [1.7182146E12, 8.433333333333334], [1.71821478E12, 8.0], [1.7182143E12, 5.183333333333334], [1.71821448E12, 7.983333333333333], [1.71821466E12, 8.0], [1.71821484E12, 2.0], [1.71821436E12, 6.75], [1.71821454E12, 7.7]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821484E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.71821424E12, "maxY": 8.883333333333333, "series": [{"data": [[1.71821472E12, 8.883333333333333], [1.71821424E12, 1.9666666666666666], [1.71821442E12, 7.516666666666667], [1.7182146E12, 8.433333333333334], [1.71821478E12, 8.0], [1.7182143E12, 5.183333333333334], [1.71821448E12, 7.983333333333333], [1.71821466E12, 8.0], [1.71821484E12, 2.0], [1.71821436E12, 6.75], [1.71821454E12, 7.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821484E12, "title": "Total Transactions Per Second"}},
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

