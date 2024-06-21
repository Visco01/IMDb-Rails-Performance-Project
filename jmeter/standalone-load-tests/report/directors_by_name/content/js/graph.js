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
        data: {"result": {"minY": 1193.0, "minX": 0.0, "maxY": 7495.0, "series": [{"data": [[0.0, 1193.0], [0.1, 1271.0], [0.2, 1339.0], [0.3, 2013.0], [0.4, 2221.0], [0.5, 2275.0], [0.6, 2506.0], [0.7, 2564.0], [0.8, 2576.0], [0.9, 2803.0], [1.0, 2857.0], [1.1, 3054.0], [1.2, 3134.0], [1.3, 3163.0], [1.4, 3168.0], [1.5, 3174.0], [1.6, 3264.0], [1.7, 3269.0], [1.8, 3293.0], [1.9, 3295.0], [2.0, 3305.0], [2.1, 3332.0], [2.2, 3362.0], [2.3, 3386.0], [2.4, 3414.0], [2.5, 3423.0], [2.6, 3450.0], [2.7, 3510.0], [2.8, 3541.0], [2.9, 3610.0], [3.0, 3611.0], [3.1, 3628.0], [3.2, 3683.0], [3.3, 3700.0], [3.4, 3701.0], [3.5, 3704.0], [3.6, 3717.0], [3.7, 3732.0], [3.8, 3752.0], [3.9, 3761.0], [4.0, 3763.0], [4.1, 3772.0], [4.2, 3781.0], [4.3, 3790.0], [4.4, 3808.0], [4.5, 3817.0], [4.6, 3823.0], [4.7, 3827.0], [4.8, 3831.0], [4.9, 3832.0], [5.0, 3859.0], [5.1, 3867.0], [5.2, 3894.0], [5.3, 3906.0], [5.4, 3918.0], [5.5, 3922.0], [5.6, 3923.0], [5.7, 3928.0], [5.8, 3938.0], [5.9, 3942.0], [6.0, 3944.0], [6.1, 3970.0], [6.2, 3978.0], [6.3, 4009.0], [6.4, 4014.0], [6.5, 4035.0], [6.6, 4035.0], [6.7, 4100.0], [6.8, 4112.0], [6.9, 4112.0], [7.0, 4124.0], [7.1, 4132.0], [7.2, 4176.0], [7.3, 4199.0], [7.4, 4205.0], [7.5, 4205.0], [7.6, 4216.0], [7.7, 4218.0], [7.8, 4219.0], [7.9, 4224.0], [8.0, 4228.0], [8.1, 4235.0], [8.2, 4245.0], [8.3, 4245.0], [8.4, 4285.0], [8.5, 4286.0], [8.6, 4287.0], [8.7, 4291.0], [8.8, 4299.0], [8.9, 4301.0], [9.0, 4323.0], [9.1, 4323.0], [9.2, 4328.0], [9.3, 4331.0], [9.4, 4331.0], [9.5, 4335.0], [9.6, 4341.0], [9.7, 4350.0], [9.8, 4351.0], [9.9, 4360.0], [10.0, 4364.0], [10.1, 4377.0], [10.2, 4382.0], [10.3, 4385.0], [10.4, 4408.0], [10.5, 4420.0], [10.6, 4425.0], [10.7, 4429.0], [10.8, 4430.0], [10.9, 4432.0], [11.0, 4432.0], [11.1, 4435.0], [11.2, 4436.0], [11.3, 4453.0], [11.4, 4454.0], [11.5, 4456.0], [11.6, 4469.0], [11.7, 4479.0], [11.8, 4483.0], [11.9, 4492.0], [12.0, 4492.0], [12.1, 4492.0], [12.2, 4507.0], [12.3, 4512.0], [12.4, 4512.0], [12.5, 4519.0], [12.6, 4519.0], [12.7, 4522.0], [12.8, 4533.0], [12.9, 4534.0], [13.0, 4535.0], [13.1, 4544.0], [13.2, 4544.0], [13.3, 4546.0], [13.4, 4546.0], [13.5, 4550.0], [13.6, 4552.0], [13.7, 4562.0], [13.8, 4567.0], [13.9, 4573.0], [14.0, 4579.0], [14.1, 4586.0], [14.2, 4589.0], [14.3, 4595.0], [14.4, 4600.0], [14.5, 4610.0], [14.6, 4612.0], [14.7, 4617.0], [14.8, 4621.0], [14.9, 4625.0], [15.0, 4627.0], [15.1, 4629.0], [15.2, 4630.0], [15.3, 4631.0], [15.4, 4634.0], [15.5, 4635.0], [15.6, 4638.0], [15.7, 4648.0], [15.8, 4651.0], [15.9, 4661.0], [16.0, 4664.0], [16.1, 4668.0], [16.2, 4702.0], [16.3, 4707.0], [16.4, 4707.0], [16.5, 4708.0], [16.6, 4709.0], [16.7, 4710.0], [16.8, 4714.0], [16.9, 4716.0], [17.0, 4717.0], [17.1, 4721.0], [17.2, 4729.0], [17.3, 4730.0], [17.4, 4733.0], [17.5, 4735.0], [17.6, 4739.0], [17.7, 4746.0], [17.8, 4747.0], [17.9, 4748.0], [18.0, 4749.0], [18.1, 4752.0], [18.2, 4762.0], [18.3, 4767.0], [18.4, 4770.0], [18.5, 4779.0], [18.6, 4783.0], [18.7, 4787.0], [18.8, 4792.0], [18.9, 4793.0], [19.0, 4794.0], [19.1, 4804.0], [19.2, 4809.0], [19.3, 4810.0], [19.4, 4821.0], [19.5, 4827.0], [19.6, 4831.0], [19.7, 4837.0], [19.8, 4841.0], [19.9, 4844.0], [20.0, 4848.0], [20.1, 4850.0], [20.2, 4852.0], [20.3, 4860.0], [20.4, 4869.0], [20.5, 4872.0], [20.6, 4876.0], [20.7, 4880.0], [20.8, 4880.0], [20.9, 4892.0], [21.0, 4893.0], [21.1, 4896.0], [21.2, 4897.0], [21.3, 4897.0], [21.4, 4899.0], [21.5, 4899.0], [21.6, 4902.0], [21.7, 4916.0], [21.8, 4917.0], [21.9, 4918.0], [22.0, 4923.0], [22.1, 4926.0], [22.2, 4926.0], [22.3, 4930.0], [22.4, 4931.0], [22.5, 4932.0], [22.6, 4937.0], [22.7, 4938.0], [22.8, 4939.0], [22.9, 4940.0], [23.0, 4940.0], [23.1, 4941.0], [23.2, 4943.0], [23.3, 4944.0], [23.4, 4945.0], [23.5, 4947.0], [23.6, 4948.0], [23.7, 4953.0], [23.8, 4955.0], [23.9, 4956.0], [24.0, 4961.0], [24.1, 4962.0], [24.2, 4971.0], [24.3, 4976.0], [24.4, 4978.0], [24.5, 4978.0], [24.6, 4981.0], [24.7, 4982.0], [24.8, 4983.0], [24.9, 4986.0], [25.0, 4992.0], [25.1, 4992.0], [25.2, 4999.0], [25.3, 5001.0], [25.4, 5014.0], [25.5, 5017.0], [25.6, 5017.0], [25.7, 5019.0], [25.8, 5023.0], [25.9, 5030.0], [26.0, 5032.0], [26.1, 5033.0], [26.2, 5039.0], [26.3, 5039.0], [26.4, 5040.0], [26.5, 5041.0], [26.6, 5044.0], [26.7, 5044.0], [26.8, 5047.0], [26.9, 5052.0], [27.0, 5057.0], [27.1, 5057.0], [27.2, 5065.0], [27.3, 5068.0], [27.4, 5070.0], [27.5, 5073.0], [27.6, 5074.0], [27.7, 5075.0], [27.8, 5080.0], [27.9, 5085.0], [28.0, 5087.0], [28.1, 5088.0], [28.2, 5088.0], [28.3, 5088.0], [28.4, 5091.0], [28.5, 5093.0], [28.6, 5095.0], [28.7, 5096.0], [28.8, 5097.0], [28.9, 5097.0], [29.0, 5100.0], [29.1, 5102.0], [29.2, 5106.0], [29.3, 5106.0], [29.4, 5110.0], [29.5, 5111.0], [29.6, 5111.0], [29.7, 5112.0], [29.8, 5116.0], [29.9, 5117.0], [30.0, 5117.0], [30.1, 5121.0], [30.2, 5123.0], [30.3, 5124.0], [30.4, 5128.0], [30.5, 5132.0], [30.6, 5132.0], [30.7, 5136.0], [30.8, 5136.0], [30.9, 5138.0], [31.0, 5141.0], [31.1, 5143.0], [31.2, 5145.0], [31.3, 5150.0], [31.4, 5152.0], [31.5, 5158.0], [31.6, 5159.0], [31.7, 5160.0], [31.8, 5161.0], [31.9, 5162.0], [32.0, 5164.0], [32.1, 5168.0], [32.2, 5169.0], [32.3, 5170.0], [32.4, 5186.0], [32.5, 5187.0], [32.6, 5190.0], [32.7, 5195.0], [32.8, 5197.0], [32.9, 5200.0], [33.0, 5205.0], [33.1, 5208.0], [33.2, 5213.0], [33.3, 5219.0], [33.4, 5219.0], [33.5, 5221.0], [33.6, 5229.0], [33.7, 5232.0], [33.8, 5237.0], [33.9, 5241.0], [34.0, 5242.0], [34.1, 5243.0], [34.2, 5243.0], [34.3, 5244.0], [34.4, 5248.0], [34.5, 5253.0], [34.6, 5254.0], [34.7, 5255.0], [34.8, 5256.0], [34.9, 5260.0], [35.0, 5263.0], [35.1, 5265.0], [35.2, 5266.0], [35.3, 5270.0], [35.4, 5271.0], [35.5, 5272.0], [35.6, 5278.0], [35.7, 5278.0], [35.8, 5280.0], [35.9, 5285.0], [36.0, 5286.0], [36.1, 5288.0], [36.2, 5290.0], [36.3, 5291.0], [36.4, 5293.0], [36.5, 5295.0], [36.6, 5296.0], [36.7, 5298.0], [36.8, 5301.0], [36.9, 5302.0], [37.0, 5305.0], [37.1, 5306.0], [37.2, 5308.0], [37.3, 5310.0], [37.4, 5311.0], [37.5, 5311.0], [37.6, 5315.0], [37.7, 5316.0], [37.8, 5317.0], [37.9, 5323.0], [38.0, 5325.0], [38.1, 5325.0], [38.2, 5328.0], [38.3, 5330.0], [38.4, 5330.0], [38.5, 5331.0], [38.6, 5334.0], [38.7, 5336.0], [38.8, 5338.0], [38.9, 5338.0], [39.0, 5338.0], [39.1, 5343.0], [39.2, 5343.0], [39.3, 5344.0], [39.4, 5345.0], [39.5, 5346.0], [39.6, 5346.0], [39.7, 5348.0], [39.8, 5351.0], [39.9, 5355.0], [40.0, 5356.0], [40.1, 5357.0], [40.2, 5360.0], [40.3, 5360.0], [40.4, 5360.0], [40.5, 5362.0], [40.6, 5363.0], [40.7, 5370.0], [40.8, 5372.0], [40.9, 5373.0], [41.0, 5377.0], [41.1, 5381.0], [41.2, 5384.0], [41.3, 5384.0], [41.4, 5389.0], [41.5, 5390.0], [41.6, 5392.0], [41.7, 5395.0], [41.8, 5396.0], [41.9, 5397.0], [42.0, 5403.0], [42.1, 5404.0], [42.2, 5408.0], [42.3, 5410.0], [42.4, 5411.0], [42.5, 5428.0], [42.6, 5429.0], [42.7, 5429.0], [42.8, 5436.0], [42.9, 5436.0], [43.0, 5437.0], [43.1, 5438.0], [43.2, 5438.0], [43.3, 5439.0], [43.4, 5443.0], [43.5, 5443.0], [43.6, 5444.0], [43.7, 5445.0], [43.8, 5448.0], [43.9, 5449.0], [44.0, 5451.0], [44.1, 5452.0], [44.2, 5452.0], [44.3, 5453.0], [44.4, 5454.0], [44.5, 5454.0], [44.6, 5455.0], [44.7, 5456.0], [44.8, 5458.0], [44.9, 5459.0], [45.0, 5459.0], [45.1, 5460.0], [45.2, 5460.0], [45.3, 5460.0], [45.4, 5464.0], [45.5, 5464.0], [45.6, 5464.0], [45.7, 5465.0], [45.8, 5466.0], [45.9, 5466.0], [46.0, 5467.0], [46.1, 5468.0], [46.2, 5468.0], [46.3, 5473.0], [46.4, 5474.0], [46.5, 5475.0], [46.6, 5477.0], [46.7, 5478.0], [46.8, 5480.0], [46.9, 5481.0], [47.0, 5484.0], [47.1, 5486.0], [47.2, 5488.0], [47.3, 5489.0], [47.4, 5491.0], [47.5, 5495.0], [47.6, 5498.0], [47.7, 5502.0], [47.8, 5504.0], [47.9, 5509.0], [48.0, 5514.0], [48.1, 5517.0], [48.2, 5520.0], [48.3, 5521.0], [48.4, 5522.0], [48.5, 5523.0], [48.6, 5528.0], [48.7, 5530.0], [48.8, 5532.0], [48.9, 5533.0], [49.0, 5535.0], [49.1, 5539.0], [49.2, 5540.0], [49.3, 5540.0], [49.4, 5543.0], [49.5, 5549.0], [49.6, 5552.0], [49.7, 5554.0], [49.8, 5557.0], [49.9, 5559.0], [50.0, 5561.0], [50.1, 5562.0], [50.2, 5563.0], [50.3, 5563.0], [50.4, 5564.0], [50.5, 5565.0], [50.6, 5566.0], [50.7, 5567.0], [50.8, 5568.0], [50.9, 5569.0], [51.0, 5569.0], [51.1, 5569.0], [51.2, 5570.0], [51.3, 5575.0], [51.4, 5576.0], [51.5, 5578.0], [51.6, 5582.0], [51.7, 5582.0], [51.8, 5585.0], [51.9, 5585.0], [52.0, 5587.0], [52.1, 5591.0], [52.2, 5593.0], [52.3, 5597.0], [52.4, 5604.0], [52.5, 5606.0], [52.6, 5611.0], [52.7, 5613.0], [52.8, 5616.0], [52.9, 5627.0], [53.0, 5630.0], [53.1, 5630.0], [53.2, 5635.0], [53.3, 5640.0], [53.4, 5644.0], [53.5, 5649.0], [53.6, 5649.0], [53.7, 5651.0], [53.8, 5653.0], [53.9, 5659.0], [54.0, 5660.0], [54.1, 5667.0], [54.2, 5668.0], [54.3, 5668.0], [54.4, 5672.0], [54.5, 5675.0], [54.6, 5676.0], [54.7, 5678.0], [54.8, 5678.0], [54.9, 5682.0], [55.0, 5683.0], [55.1, 5683.0], [55.2, 5683.0], [55.3, 5689.0], [55.4, 5691.0], [55.5, 5693.0], [55.6, 5693.0], [55.7, 5698.0], [55.8, 5702.0], [55.9, 5703.0], [56.0, 5705.0], [56.1, 5706.0], [56.2, 5706.0], [56.3, 5707.0], [56.4, 5712.0], [56.5, 5712.0], [56.6, 5713.0], [56.7, 5715.0], [56.8, 5717.0], [56.9, 5724.0], [57.0, 5724.0], [57.1, 5728.0], [57.2, 5729.0], [57.3, 5734.0], [57.4, 5734.0], [57.5, 5736.0], [57.6, 5738.0], [57.7, 5738.0], [57.8, 5740.0], [57.9, 5742.0], [58.0, 5744.0], [58.1, 5749.0], [58.2, 5750.0], [58.3, 5750.0], [58.4, 5757.0], [58.5, 5757.0], [58.6, 5758.0], [58.7, 5759.0], [58.8, 5760.0], [58.9, 5760.0], [59.0, 5761.0], [59.1, 5762.0], [59.2, 5762.0], [59.3, 5764.0], [59.4, 5765.0], [59.5, 5768.0], [59.6, 5771.0], [59.7, 5771.0], [59.8, 5773.0], [59.9, 5776.0], [60.0, 5776.0], [60.1, 5776.0], [60.2, 5779.0], [60.3, 5780.0], [60.4, 5781.0], [60.5, 5783.0], [60.6, 5784.0], [60.7, 5786.0], [60.8, 5786.0], [60.9, 5788.0], [61.0, 5795.0], [61.1, 5795.0], [61.2, 5798.0], [61.3, 5802.0], [61.4, 5802.0], [61.5, 5803.0], [61.6, 5803.0], [61.7, 5804.0], [61.8, 5804.0], [61.9, 5805.0], [62.0, 5808.0], [62.1, 5809.0], [62.2, 5811.0], [62.3, 5812.0], [62.4, 5812.0], [62.5, 5816.0], [62.6, 5818.0], [62.7, 5819.0], [62.8, 5827.0], [62.9, 5827.0], [63.0, 5827.0], [63.1, 5829.0], [63.2, 5829.0], [63.3, 5833.0], [63.4, 5836.0], [63.5, 5836.0], [63.6, 5842.0], [63.7, 5847.0], [63.8, 5847.0], [63.9, 5847.0], [64.0, 5847.0], [64.1, 5848.0], [64.2, 5849.0], [64.3, 5849.0], [64.4, 5851.0], [64.5, 5853.0], [64.6, 5856.0], [64.7, 5856.0], [64.8, 5857.0], [64.9, 5857.0], [65.0, 5858.0], [65.1, 5864.0], [65.2, 5865.0], [65.3, 5872.0], [65.4, 5874.0], [65.5, 5877.0], [65.6, 5877.0], [65.7, 5878.0], [65.8, 5879.0], [65.9, 5881.0], [66.0, 5883.0], [66.1, 5887.0], [66.2, 5888.0], [66.3, 5889.0], [66.4, 5890.0], [66.5, 5895.0], [66.6, 5896.0], [66.7, 5897.0], [66.8, 5898.0], [66.9, 5899.0], [67.0, 5899.0], [67.1, 5902.0], [67.2, 5906.0], [67.3, 5910.0], [67.4, 5911.0], [67.5, 5912.0], [67.6, 5915.0], [67.7, 5916.0], [67.8, 5920.0], [67.9, 5923.0], [68.0, 5925.0], [68.1, 5927.0], [68.2, 5929.0], [68.3, 5934.0], [68.4, 5935.0], [68.5, 5940.0], [68.6, 5940.0], [68.7, 5943.0], [68.8, 5945.0], [68.9, 5945.0], [69.0, 5946.0], [69.1, 5951.0], [69.2, 5954.0], [69.3, 5954.0], [69.4, 5955.0], [69.5, 5955.0], [69.6, 5959.0], [69.7, 5961.0], [69.8, 5961.0], [69.9, 5962.0], [70.0, 5963.0], [70.1, 5963.0], [70.2, 5963.0], [70.3, 5964.0], [70.4, 5965.0], [70.5, 5965.0], [70.6, 5966.0], [70.7, 5968.0], [70.8, 5969.0], [70.9, 5971.0], [71.0, 5971.0], [71.1, 5973.0], [71.2, 5981.0], [71.3, 5982.0], [71.4, 5982.0], [71.5, 5983.0], [71.6, 5987.0], [71.7, 5990.0], [71.8, 5990.0], [71.9, 5990.0], [72.0, 5992.0], [72.1, 5994.0], [72.2, 5995.0], [72.3, 5998.0], [72.4, 5998.0], [72.5, 6000.0], [72.6, 6003.0], [72.7, 6005.0], [72.8, 6007.0], [72.9, 6009.0], [73.0, 6012.0], [73.1, 6013.0], [73.2, 6013.0], [73.3, 6015.0], [73.4, 6017.0], [73.5, 6022.0], [73.6, 6028.0], [73.7, 6038.0], [73.8, 6042.0], [73.9, 6046.0], [74.0, 6054.0], [74.1, 6059.0], [74.2, 6060.0], [74.3, 6066.0], [74.4, 6067.0], [74.5, 6067.0], [74.6, 6071.0], [74.7, 6072.0], [74.8, 6072.0], [74.9, 6075.0], [75.0, 6075.0], [75.1, 6076.0], [75.2, 6080.0], [75.3, 6083.0], [75.4, 6085.0], [75.5, 6090.0], [75.6, 6091.0], [75.7, 6092.0], [75.8, 6096.0], [75.9, 6096.0], [76.0, 6098.0], [76.1, 6104.0], [76.2, 6105.0], [76.3, 6107.0], [76.4, 6111.0], [76.5, 6113.0], [76.6, 6114.0], [76.7, 6118.0], [76.8, 6118.0], [76.9, 6122.0], [77.0, 6126.0], [77.1, 6136.0], [77.2, 6141.0], [77.3, 6146.0], [77.4, 6146.0], [77.5, 6150.0], [77.6, 6150.0], [77.7, 6156.0], [77.8, 6161.0], [77.9, 6161.0], [78.0, 6161.0], [78.1, 6162.0], [78.2, 6167.0], [78.3, 6167.0], [78.4, 6168.0], [78.5, 6170.0], [78.6, 6172.0], [78.7, 6175.0], [78.8, 6175.0], [78.9, 6176.0], [79.0, 6176.0], [79.1, 6177.0], [79.2, 6184.0], [79.3, 6184.0], [79.4, 6187.0], [79.5, 6190.0], [79.6, 6194.0], [79.7, 6194.0], [79.8, 6197.0], [79.9, 6197.0], [80.0, 6199.0], [80.1, 6201.0], [80.2, 6203.0], [80.3, 6204.0], [80.4, 6205.0], [80.5, 6208.0], [80.6, 6211.0], [80.7, 6214.0], [80.8, 6217.0], [80.9, 6217.0], [81.0, 6220.0], [81.1, 6221.0], [81.2, 6221.0], [81.3, 6223.0], [81.4, 6229.0], [81.5, 6240.0], [81.6, 6242.0], [81.7, 6243.0], [81.8, 6246.0], [81.9, 6251.0], [82.0, 6252.0], [82.1, 6259.0], [82.2, 6266.0], [82.3, 6268.0], [82.4, 6268.0], [82.5, 6268.0], [82.6, 6271.0], [82.7, 6275.0], [82.8, 6279.0], [82.9, 6280.0], [83.0, 6282.0], [83.1, 6283.0], [83.2, 6285.0], [83.3, 6292.0], [83.4, 6293.0], [83.5, 6293.0], [83.6, 6299.0], [83.7, 6303.0], [83.8, 6303.0], [83.9, 6305.0], [84.0, 6306.0], [84.1, 6306.0], [84.2, 6308.0], [84.3, 6309.0], [84.4, 6309.0], [84.5, 6309.0], [84.6, 6310.0], [84.7, 6312.0], [84.8, 6315.0], [84.9, 6325.0], [85.0, 6326.0], [85.1, 6327.0], [85.2, 6329.0], [85.3, 6332.0], [85.4, 6333.0], [85.5, 6336.0], [85.6, 6350.0], [85.7, 6353.0], [85.8, 6354.0], [85.9, 6356.0], [86.0, 6357.0], [86.1, 6360.0], [86.2, 6363.0], [86.3, 6366.0], [86.4, 6367.0], [86.5, 6368.0], [86.6, 6369.0], [86.7, 6370.0], [86.8, 6372.0], [86.9, 6376.0], [87.0, 6378.0], [87.1, 6378.0], [87.2, 6379.0], [87.3, 6383.0], [87.4, 6385.0], [87.5, 6385.0], [87.6, 6386.0], [87.7, 6392.0], [87.8, 6392.0], [87.9, 6396.0], [88.0, 6398.0], [88.1, 6398.0], [88.2, 6402.0], [88.3, 6402.0], [88.4, 6405.0], [88.5, 6412.0], [88.6, 6416.0], [88.7, 6418.0], [88.8, 6423.0], [88.9, 6424.0], [89.0, 6425.0], [89.1, 6432.0], [89.2, 6436.0], [89.3, 6439.0], [89.4, 6439.0], [89.5, 6441.0], [89.6, 6451.0], [89.7, 6455.0], [89.8, 6456.0], [89.9, 6462.0], [90.0, 6465.0], [90.1, 6466.0], [90.2, 6469.0], [90.3, 6473.0], [90.4, 6476.0], [90.5, 6488.0], [90.6, 6488.0], [90.7, 6491.0], [90.8, 6493.0], [90.9, 6497.0], [91.0, 6506.0], [91.1, 6508.0], [91.2, 6508.0], [91.3, 6513.0], [91.4, 6517.0], [91.5, 6519.0], [91.6, 6522.0], [91.7, 6525.0], [91.8, 6532.0], [91.9, 6536.0], [92.0, 6538.0], [92.1, 6541.0], [92.2, 6549.0], [92.3, 6551.0], [92.4, 6553.0], [92.5, 6559.0], [92.6, 6560.0], [92.7, 6561.0], [92.8, 6565.0], [92.9, 6567.0], [93.0, 6571.0], [93.1, 6576.0], [93.2, 6576.0], [93.3, 6578.0], [93.4, 6582.0], [93.5, 6582.0], [93.6, 6585.0], [93.7, 6587.0], [93.8, 6589.0], [93.9, 6595.0], [94.0, 6597.0], [94.1, 6597.0], [94.2, 6602.0], [94.3, 6604.0], [94.4, 6606.0], [94.5, 6607.0], [94.6, 6611.0], [94.7, 6613.0], [94.8, 6620.0], [94.9, 6624.0], [95.0, 6626.0], [95.1, 6636.0], [95.2, 6643.0], [95.3, 6647.0], [95.4, 6660.0], [95.5, 6667.0], [95.6, 6677.0], [95.7, 6679.0], [95.8, 6679.0], [95.9, 6679.0], [96.0, 6686.0], [96.1, 6688.0], [96.2, 6691.0], [96.3, 6694.0], [96.4, 6702.0], [96.5, 6704.0], [96.6, 6723.0], [96.7, 6749.0], [96.8, 6765.0], [96.9, 6773.0], [97.0, 6776.0], [97.1, 6777.0], [97.2, 6779.0], [97.3, 6780.0], [97.4, 6805.0], [97.5, 6817.0], [97.6, 6834.0], [97.7, 6864.0], [97.8, 6866.0], [97.9, 6875.0], [98.0, 6891.0], [98.1, 6900.0], [98.2, 6902.0], [98.3, 6937.0], [98.4, 6954.0], [98.5, 6959.0], [98.6, 6964.0], [98.7, 6975.0], [98.8, 6978.0], [98.9, 6992.0], [99.0, 7002.0], [99.1, 7006.0], [99.2, 7013.0], [99.3, 7028.0], [99.4, 7057.0], [99.5, 7089.0], [99.6, 7092.0], [99.7, 7111.0], [99.8, 7307.0], [99.9, 7403.0], [100.0, 7495.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 77.0, "series": [{"data": [[1100.0, 1.0], [1200.0, 1.0], [1300.0, 1.0], [1700.0, 1.0], [2000.0, 1.0], [2200.0, 2.0], [2300.0, 1.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 2.0], [3000.0, 2.0], [3100.0, 5.0], [3300.0, 6.0], [3200.0, 5.0], [3400.0, 4.0], [3500.0, 3.0], [3700.0, 14.0], [3600.0, 5.0], [3800.0, 13.0], [3900.0, 13.0], [4000.0, 6.0], [4200.0, 20.0], [4300.0, 20.0], [4100.0, 9.0], [4600.0, 25.0], [4500.0, 30.0], [4400.0, 24.0], [4700.0, 39.0], [4800.0, 33.0], [5100.0, 52.0], [4900.0, 50.0], [5000.0, 50.0], [5200.0, 52.0], [5300.0, 71.0], [5500.0, 63.0], [5600.0, 45.0], [5400.0, 77.0], [5700.0, 75.0], [5800.0, 77.0], [5900.0, 73.0], [6000.0, 48.0], [6100.0, 54.0], [6300.0, 60.0], [6200.0, 49.0], [6400.0, 38.0], [6500.0, 43.0], [6600.0, 30.0], [6700.0, 13.0], [6800.0, 10.0], [6900.0, 12.0], [7000.0, 9.0], [7100.0, 1.0], [7400.0, 2.0], [7300.0, 1.0], [7200.0, 1.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1343.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1343.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.875, "minX": 1.71896232E12, "maxY": 15.0, "series": [{"data": [[1.7189625E12, 15.0], [1.71896232E12, 8.875], [1.7189628E12, 15.0], [1.71896238E12, 15.0], [1.71896286E12, 15.0], [1.71896268E12, 15.0], [1.71896274E12, 15.0], [1.71896256E12, 15.0], [1.71896262E12, 15.0], [1.71896244E12, 15.0], [1.71896292E12, 14.196850393700785]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896292E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3186.6666666666665, "minX": 1.0, "maxY": 5927.5, "series": [{"data": [[8.0, 3186.6666666666665], [4.0, 5774.0], [2.0, 5475.0], [1.0, 4895.0], [9.0, 3790.0], [10.0, 3812.5], [5.0, 5744.0], [12.0, 4587.666666666667], [3.0, 5033.0], [13.0, 5786.0], [7.0, 5927.5], [15.0, 5484.815094339623]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[14.887815750371466, 5468.075780089149]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 21.466666666666665, "minX": 1.71896232E12, "maxY": 2758.4333333333334, "series": [{"data": [[1.7189625E12, 2645.866666666667], [1.71896232E12, 145.85], [1.7189628E12, 2695.4333333333334], [1.71896238E12, 2758.4333333333334], [1.71896286E12, 2569.5333333333333], [1.71896268E12, 2552.8333333333335], [1.71896274E12, 2504.75], [1.71896256E12, 2484.5833333333335], [1.71896262E12, 2726.4166666666665], [1.71896244E12, 2571.3166666666666], [1.71896292E12, 2413.383333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7189625E12, 355.01666666666665], [1.71896232E12, 21.466666666666665], [1.7189628E12, 384.26666666666665], [1.71896238E12, 390.15], [1.71896286E12, 361.4166666666667], [1.71896268E12, 351.3666666666667], [1.71896274E12, 325.76666666666665], [1.71896256E12, 359.9], [1.71896262E12, 343.76666666666665], [1.71896244E12, 363.6666666666667], [1.71896292E12, 337.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896292E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2192.375, "minX": 1.71896232E12, "maxY": 5814.203252032524, "series": [{"data": [[1.7189625E12, 5722.526315789476], [1.71896232E12, 2192.375], [1.7189628E12, 5242.944444444445], [1.71896238E12, 4938.387755102042], [1.71896286E12, 5378.39705882353], [1.71896268E12, 5804.12213740458], [1.71896274E12, 5814.203252032524], [1.71896256E12, 5525.567164179104], [1.71896262E12, 5726.859375], [1.71896244E12, 5238.437037037038], [1.71896292E12, 5613.11811023622]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896292E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2192.375, "minX": 1.71896232E12, "maxY": 5814.203252032524, "series": [{"data": [[1.7189625E12, 5722.526315789476], [1.71896232E12, 2192.375], [1.7189628E12, 5242.944444444445], [1.71896238E12, 4938.387755102042], [1.71896286E12, 5378.39705882353], [1.71896268E12, 5804.12213740458], [1.71896274E12, 5814.203252032524], [1.71896256E12, 5525.559701492538], [1.71896262E12, 5726.859375], [1.71896244E12, 5238.437037037038], [1.71896292E12, 5613.11811023622]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896292E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.2925170068027225, "minX": 1.71896232E12, "maxY": 51.25, "series": [{"data": [[1.7189625E12, 5.789473684210527], [1.71896232E12, 51.25], [1.7189628E12, 4.013888888888891], [1.71896238E12, 2.2925170068027225], [1.71896286E12, 5.919117647058823], [1.71896268E12, 5.167938931297711], [1.71896274E12, 5.47967479674797], [1.71896256E12, 4.858208955223884], [1.71896262E12, 4.7734375], [1.71896244E12, 5.325925925925927], [1.71896292E12, 5.086614173228349]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896292E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1193.0, "minX": 1.71896232E12, "maxY": 7495.0, "series": [{"data": [[1.7189625E12, 7403.0], [1.71896232E12, 4014.0], [1.7189628E12, 6694.0], [1.71896238E12, 6834.0], [1.71896286E12, 7002.0], [1.71896268E12, 7089.0], [1.71896274E12, 7207.0], [1.71896256E12, 6975.0], [1.71896262E12, 7495.0], [1.71896244E12, 6636.0], [1.71896292E12, 6913.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7189625E12, 4176.0], [1.71896232E12, 1193.0], [1.7189628E12, 2221.0], [1.71896238E12, 2506.0], [1.71896286E12, 2315.0], [1.71896268E12, 4245.0], [1.71896274E12, 3173.0], [1.71896256E12, 3473.0], [1.71896262E12, 4112.0], [1.71896244E12, 3264.0], [1.71896292E12, 3763.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7189625E12, 6682.4], [1.71896232E12, 4014.0], [1.7189628E12, 6364.5], [1.71896238E12, 5998.6], [1.71896286E12, 6338.1], [1.71896268E12, 6522.6], [1.71896274E12, 6794.2], [1.71896256E12, 6406.5], [1.71896262E12, 6462.6], [1.71896244E12, 6191.6], [1.71896292E12, 6545.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7189625E12, 7285.359999999999], [1.71896232E12, 4014.0], [1.7189628E12, 6686.8], [1.71896238E12, 6808.080000000001], [1.71896286E12, 6998.3], [1.71896268E12, 7085.16], [1.71896274E12, 7183.960000000001], [1.71896256E12, 6949.450000000001], [1.71896262E12, 7440.479999999999], [1.71896244E12, 6629.88], [1.71896292E12, 6871.5599999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7189625E12, 5795.0], [1.71896232E12, 1865.0], [1.7189628E12, 5524.0], [1.71896238E12, 5190.0], [1.71896286E12, 5471.5], [1.71896268E12, 5781.0], [1.71896274E12, 5982.0], [1.71896256E12, 5531.5], [1.71896262E12, 5779.0], [1.71896244E12, 5164.0], [1.71896292E12, 5768.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7189625E12, 6957.0], [1.71896232E12, 4014.0], [1.7189628E12, 6492.5], [1.71896238E12, 6412.599999999999], [1.71896286E12, 6561.9], [1.71896268E12, 6689.2], [1.71896274E12, 6984.6], [1.71896256E12, 6572.75], [1.71896262E12, 6667.349999999999], [1.71896244E12, 6311.4], [1.71896292E12, 6612.2]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896292E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5132.0, "minX": 1.0, "maxY": 6126.0, "series": [{"data": [[2.0, 5354.5], [1.0, 5132.0], [4.0, 5803.5], [8.0, 5997.5], [9.0, 5590.5], [5.0, 5585.0], [10.0, 5943.5], [11.0, 6126.0], [3.0, 5759.5], [6.0, 5595.0], [7.0, 5464.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5132.0, "minX": 1.0, "maxY": 6126.0, "series": [{"data": [[2.0, 5354.5], [1.0, 5132.0], [4.0, 5803.5], [8.0, 5997.5], [9.0, 5590.5], [5.0, 5585.0], [10.0, 5943.5], [11.0, 6126.0], [3.0, 5759.5], [6.0, 5595.0], [7.0, 5464.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.71896232E12, "maxY": 2.466666666666667, "series": [{"data": [[1.7189625E12, 2.2333333333333334], [1.71896232E12, 0.35], [1.7189628E12, 2.3666666666666667], [1.71896238E12, 2.466666666666667], [1.71896286E12, 2.2666666666666666], [1.71896268E12, 2.1666666666666665], [1.71896274E12, 2.1], [1.71896256E12, 2.216666666666667], [1.71896262E12, 2.1333333333333333], [1.71896244E12, 2.2333333333333334], [1.71896292E12, 1.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896292E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71896232E12, "maxY": 2.45, "series": [{"data": [[1.7189625E12, 2.216666666666667], [1.71896232E12, 0.13333333333333333], [1.7189628E12, 2.4], [1.71896238E12, 2.45], [1.71896286E12, 2.2666666666666666], [1.71896268E12, 2.183333333333333], [1.71896274E12, 2.05], [1.71896256E12, 2.2333333333333334], [1.71896262E12, 2.1333333333333333], [1.71896244E12, 2.25], [1.71896292E12, 2.1166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896292E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71896232E12, "maxY": 2.45, "series": [{"data": [[1.7189625E12, 2.216666666666667], [1.71896232E12, 0.13333333333333333], [1.7189628E12, 2.4], [1.71896238E12, 2.45], [1.71896286E12, 2.2666666666666666], [1.71896268E12, 2.183333333333333], [1.71896274E12, 2.05], [1.71896256E12, 2.2333333333333334], [1.71896262E12, 2.1333333333333333], [1.71896244E12, 2.25], [1.71896292E12, 2.1166666666666667]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896292E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71896232E12, "maxY": 2.45, "series": [{"data": [[1.7189625E12, 2.216666666666667], [1.71896232E12, 0.13333333333333333], [1.7189628E12, 2.4], [1.71896238E12, 2.45], [1.71896286E12, 2.2666666666666666], [1.71896268E12, 2.183333333333333], [1.71896274E12, 2.05], [1.71896256E12, 2.2333333333333334], [1.71896262E12, 2.1333333333333333], [1.71896244E12, 2.25], [1.71896292E12, 2.1166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896292E12, "title": "Total Transactions Per Second"}},
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

