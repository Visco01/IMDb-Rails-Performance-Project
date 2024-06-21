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
        data: {"result": {"minY": 1186.0, "minX": 0.0, "maxY": 7579.0, "series": [{"data": [[0.0, 1186.0], [0.1, 1194.0], [0.2, 1213.0], [0.3, 1216.0], [0.4, 1228.0], [0.5, 1237.0], [0.6, 1312.0], [0.7, 1337.0], [0.8, 1376.0], [0.9, 1521.0], [1.0, 1581.0], [1.1, 1620.0], [1.2, 2179.0], [1.3, 2195.0], [1.4, 2382.0], [1.5, 2605.0], [1.6, 2615.0], [1.7, 2635.0], [1.8, 2817.0], [1.9, 2821.0], [2.0, 2936.0], [2.1, 2994.0], [2.2, 3014.0], [2.3, 3047.0], [2.4, 3087.0], [2.5, 3104.0], [2.6, 3126.0], [2.7, 3186.0], [2.8, 3189.0], [2.9, 3211.0], [3.0, 3272.0], [3.1, 3276.0], [3.2, 3310.0], [3.3, 3343.0], [3.4, 3398.0], [3.5, 3412.0], [3.6, 3459.0], [3.7, 3488.0], [3.8, 3507.0], [3.9, 3511.0], [4.0, 3613.0], [4.1, 3616.0], [4.2, 3616.0], [4.3, 3633.0], [4.4, 3652.0], [4.5, 3654.0], [4.6, 3695.0], [4.7, 3706.0], [4.8, 3706.0], [4.9, 3763.0], [5.0, 3770.0], [5.1, 3779.0], [5.2, 3827.0], [5.3, 3853.0], [5.4, 3885.0], [5.5, 3893.0], [5.6, 3913.0], [5.7, 3914.0], [5.8, 3924.0], [5.9, 3934.0], [6.0, 3939.0], [6.1, 3945.0], [6.2, 3976.0], [6.3, 4014.0], [6.4, 4014.0], [6.5, 4015.0], [6.6, 4030.0], [6.7, 4053.0], [6.8, 4072.0], [6.9, 4090.0], [7.0, 4094.0], [7.1, 4098.0], [7.2, 4106.0], [7.3, 4107.0], [7.4, 4113.0], [7.5, 4115.0], [7.6, 4119.0], [7.7, 4120.0], [7.8, 4121.0], [7.9, 4122.0], [8.0, 4123.0], [8.1, 4131.0], [8.2, 4135.0], [8.3, 4138.0], [8.4, 4139.0], [8.5, 4149.0], [8.6, 4160.0], [8.7, 4175.0], [8.8, 4179.0], [8.9, 4219.0], [9.0, 4223.0], [9.1, 4232.0], [9.2, 4239.0], [9.3, 4266.0], [9.4, 4275.0], [9.5, 4286.0], [9.6, 4288.0], [9.7, 4292.0], [9.8, 4297.0], [9.9, 4297.0], [10.0, 4298.0], [10.1, 4312.0], [10.2, 4314.0], [10.3, 4330.0], [10.4, 4333.0], [10.5, 4337.0], [10.6, 4371.0], [10.7, 4375.0], [10.8, 4382.0], [10.9, 4395.0], [11.0, 4404.0], [11.1, 4405.0], [11.2, 4422.0], [11.3, 4422.0], [11.4, 4428.0], [11.5, 4442.0], [11.6, 4448.0], [11.7, 4457.0], [11.8, 4461.0], [11.9, 4471.0], [12.0, 4477.0], [12.1, 4485.0], [12.2, 4500.0], [12.3, 4506.0], [12.4, 4510.0], [12.5, 4515.0], [12.6, 4524.0], [12.7, 4529.0], [12.8, 4534.0], [12.9, 4538.0], [13.0, 4543.0], [13.1, 4544.0], [13.2, 4550.0], [13.3, 4550.0], [13.4, 4552.0], [13.5, 4557.0], [13.6, 4577.0], [13.7, 4579.0], [13.8, 4583.0], [13.9, 4590.0], [14.0, 4601.0], [14.1, 4609.0], [14.2, 4612.0], [14.3, 4622.0], [14.4, 4623.0], [14.5, 4627.0], [14.6, 4629.0], [14.7, 4632.0], [14.8, 4633.0], [14.9, 4639.0], [15.0, 4640.0], [15.1, 4641.0], [15.2, 4642.0], [15.3, 4645.0], [15.4, 4646.0], [15.5, 4648.0], [15.6, 4649.0], [15.7, 4650.0], [15.8, 4658.0], [15.9, 4672.0], [16.0, 4674.0], [16.1, 4688.0], [16.2, 4693.0], [16.3, 4696.0], [16.4, 4698.0], [16.5, 4699.0], [16.6, 4700.0], [16.7, 4701.0], [16.8, 4705.0], [16.9, 4708.0], [17.0, 4710.0], [17.1, 4711.0], [17.2, 4718.0], [17.3, 4719.0], [17.4, 4721.0], [17.5, 4722.0], [17.6, 4724.0], [17.7, 4724.0], [17.8, 4727.0], [17.9, 4728.0], [18.0, 4731.0], [18.1, 4733.0], [18.2, 4736.0], [18.3, 4737.0], [18.4, 4738.0], [18.5, 4738.0], [18.6, 4745.0], [18.7, 4747.0], [18.8, 4747.0], [18.9, 4749.0], [19.0, 4750.0], [19.1, 4750.0], [19.2, 4753.0], [19.3, 4753.0], [19.4, 4756.0], [19.5, 4764.0], [19.6, 4767.0], [19.7, 4769.0], [19.8, 4781.0], [19.9, 4783.0], [20.0, 4791.0], [20.1, 4792.0], [20.2, 4798.0], [20.3, 4801.0], [20.4, 4801.0], [20.5, 4812.0], [20.6, 4815.0], [20.7, 4816.0], [20.8, 4822.0], [20.9, 4823.0], [21.0, 4824.0], [21.1, 4826.0], [21.2, 4827.0], [21.3, 4831.0], [21.4, 4834.0], [21.5, 4837.0], [21.6, 4837.0], [21.7, 4838.0], [21.8, 4841.0], [21.9, 4842.0], [22.0, 4850.0], [22.1, 4851.0], [22.2, 4851.0], [22.3, 4854.0], [22.4, 4856.0], [22.5, 4857.0], [22.6, 4859.0], [22.7, 4863.0], [22.8, 4868.0], [22.9, 4873.0], [23.0, 4877.0], [23.1, 4879.0], [23.2, 4887.0], [23.3, 4887.0], [23.4, 4888.0], [23.5, 4892.0], [23.6, 4894.0], [23.7, 4895.0], [23.8, 4898.0], [23.9, 4902.0], [24.0, 4905.0], [24.1, 4906.0], [24.2, 4917.0], [24.3, 4928.0], [24.4, 4932.0], [24.5, 4932.0], [24.6, 4938.0], [24.7, 4940.0], [24.8, 4940.0], [24.9, 4942.0], [25.0, 4944.0], [25.1, 4946.0], [25.2, 4948.0], [25.3, 4948.0], [25.4, 4948.0], [25.5, 4953.0], [25.6, 4957.0], [25.7, 4957.0], [25.8, 4958.0], [25.9, 4959.0], [26.0, 4965.0], [26.1, 4966.0], [26.2, 4969.0], [26.3, 4970.0], [26.4, 4972.0], [26.5, 4975.0], [26.6, 4985.0], [26.7, 4989.0], [26.8, 4995.0], [26.9, 4997.0], [27.0, 4998.0], [27.1, 5005.0], [27.2, 5011.0], [27.3, 5013.0], [27.4, 5013.0], [27.5, 5016.0], [27.6, 5017.0], [27.7, 5018.0], [27.8, 5025.0], [27.9, 5026.0], [28.0, 5030.0], [28.1, 5031.0], [28.2, 5032.0], [28.3, 5045.0], [28.4, 5045.0], [28.5, 5047.0], [28.6, 5049.0], [28.7, 5050.0], [28.8, 5051.0], [28.9, 5052.0], [29.0, 5060.0], [29.1, 5062.0], [29.2, 5063.0], [29.3, 5064.0], [29.4, 5074.0], [29.5, 5076.0], [29.6, 5078.0], [29.7, 5081.0], [29.8, 5089.0], [29.9, 5092.0], [30.0, 5099.0], [30.1, 5100.0], [30.2, 5101.0], [30.3, 5111.0], [30.4, 5112.0], [30.5, 5113.0], [30.6, 5115.0], [30.7, 5116.0], [30.8, 5123.0], [30.9, 5125.0], [31.0, 5127.0], [31.1, 5129.0], [31.2, 5131.0], [31.3, 5131.0], [31.4, 5134.0], [31.5, 5137.0], [31.6, 5138.0], [31.7, 5141.0], [31.8, 5144.0], [31.9, 5145.0], [32.0, 5146.0], [32.1, 5147.0], [32.2, 5148.0], [32.3, 5149.0], [32.4, 5149.0], [32.5, 5150.0], [32.6, 5151.0], [32.7, 5152.0], [32.8, 5154.0], [32.9, 5154.0], [33.0, 5156.0], [33.1, 5156.0], [33.2, 5168.0], [33.3, 5172.0], [33.4, 5175.0], [33.5, 5175.0], [33.6, 5181.0], [33.7, 5182.0], [33.8, 5191.0], [33.9, 5192.0], [34.0, 5198.0], [34.1, 5198.0], [34.2, 5199.0], [34.3, 5202.0], [34.4, 5205.0], [34.5, 5206.0], [34.6, 5214.0], [34.7, 5216.0], [34.8, 5217.0], [34.9, 5220.0], [35.0, 5220.0], [35.1, 5223.0], [35.2, 5232.0], [35.3, 5235.0], [35.4, 5236.0], [35.5, 5239.0], [35.6, 5239.0], [35.7, 5240.0], [35.8, 5247.0], [35.9, 5249.0], [36.0, 5251.0], [36.1, 5253.0], [36.2, 5254.0], [36.3, 5254.0], [36.4, 5255.0], [36.5, 5258.0], [36.6, 5261.0], [36.7, 5262.0], [36.8, 5267.0], [36.9, 5269.0], [37.0, 5271.0], [37.1, 5274.0], [37.2, 5283.0], [37.3, 5286.0], [37.4, 5286.0], [37.5, 5287.0], [37.6, 5288.0], [37.7, 5288.0], [37.8, 5290.0], [37.9, 5291.0], [38.0, 5292.0], [38.1, 5293.0], [38.2, 5293.0], [38.3, 5295.0], [38.4, 5300.0], [38.5, 5300.0], [38.6, 5303.0], [38.7, 5311.0], [38.8, 5313.0], [38.9, 5318.0], [39.0, 5325.0], [39.1, 5325.0], [39.2, 5330.0], [39.3, 5331.0], [39.4, 5333.0], [39.5, 5336.0], [39.6, 5337.0], [39.7, 5340.0], [39.8, 5344.0], [39.9, 5350.0], [40.0, 5351.0], [40.1, 5351.0], [40.2, 5352.0], [40.3, 5353.0], [40.4, 5354.0], [40.5, 5356.0], [40.6, 5358.0], [40.7, 5359.0], [40.8, 5360.0], [40.9, 5360.0], [41.0, 5362.0], [41.1, 5363.0], [41.2, 5365.0], [41.3, 5365.0], [41.4, 5366.0], [41.5, 5370.0], [41.6, 5372.0], [41.7, 5374.0], [41.8, 5377.0], [41.9, 5379.0], [42.0, 5386.0], [42.1, 5388.0], [42.2, 5389.0], [42.3, 5394.0], [42.4, 5396.0], [42.5, 5401.0], [42.6, 5405.0], [42.7, 5406.0], [42.8, 5406.0], [42.9, 5411.0], [43.0, 5412.0], [43.1, 5413.0], [43.2, 5418.0], [43.3, 5419.0], [43.4, 5419.0], [43.5, 5425.0], [43.6, 5427.0], [43.7, 5428.0], [43.8, 5433.0], [43.9, 5435.0], [44.0, 5436.0], [44.1, 5443.0], [44.2, 5443.0], [44.3, 5443.0], [44.4, 5445.0], [44.5, 5446.0], [44.6, 5451.0], [44.7, 5451.0], [44.8, 5452.0], [44.9, 5457.0], [45.0, 5458.0], [45.1, 5459.0], [45.2, 5462.0], [45.3, 5462.0], [45.4, 5462.0], [45.5, 5463.0], [45.6, 5464.0], [45.7, 5464.0], [45.8, 5466.0], [45.9, 5468.0], [46.0, 5469.0], [46.1, 5471.0], [46.2, 5471.0], [46.3, 5475.0], [46.4, 5477.0], [46.5, 5481.0], [46.6, 5484.0], [46.7, 5485.0], [46.8, 5486.0], [46.9, 5488.0], [47.0, 5489.0], [47.1, 5489.0], [47.2, 5490.0], [47.3, 5490.0], [47.4, 5492.0], [47.5, 5494.0], [47.6, 5497.0], [47.7, 5497.0], [47.8, 5497.0], [47.9, 5498.0], [48.0, 5499.0], [48.1, 5501.0], [48.2, 5503.0], [48.3, 5505.0], [48.4, 5505.0], [48.5, 5508.0], [48.6, 5510.0], [48.7, 5511.0], [48.8, 5512.0], [48.9, 5516.0], [49.0, 5516.0], [49.1, 5522.0], [49.2, 5526.0], [49.3, 5526.0], [49.4, 5530.0], [49.5, 5532.0], [49.6, 5533.0], [49.7, 5535.0], [49.8, 5536.0], [49.9, 5538.0], [50.0, 5539.0], [50.1, 5543.0], [50.2, 5544.0], [50.3, 5546.0], [50.4, 5546.0], [50.5, 5550.0], [50.6, 5551.0], [50.7, 5552.0], [50.8, 5554.0], [50.9, 5556.0], [51.0, 5557.0], [51.1, 5557.0], [51.2, 5559.0], [51.3, 5561.0], [51.4, 5563.0], [51.5, 5564.0], [51.6, 5565.0], [51.7, 5567.0], [51.8, 5574.0], [51.9, 5574.0], [52.0, 5578.0], [52.1, 5583.0], [52.2, 5583.0], [52.3, 5586.0], [52.4, 5587.0], [52.5, 5588.0], [52.6, 5591.0], [52.7, 5591.0], [52.8, 5592.0], [52.9, 5594.0], [53.0, 5595.0], [53.1, 5596.0], [53.2, 5601.0], [53.3, 5603.0], [53.4, 5604.0], [53.5, 5614.0], [53.6, 5614.0], [53.7, 5615.0], [53.8, 5620.0], [53.9, 5622.0], [54.0, 5623.0], [54.1, 5625.0], [54.2, 5628.0], [54.3, 5633.0], [54.4, 5634.0], [54.5, 5634.0], [54.6, 5645.0], [54.7, 5645.0], [54.8, 5647.0], [54.9, 5650.0], [55.0, 5653.0], [55.1, 5653.0], [55.2, 5660.0], [55.3, 5660.0], [55.4, 5661.0], [55.5, 5667.0], [55.6, 5667.0], [55.7, 5667.0], [55.8, 5669.0], [55.9, 5674.0], [56.0, 5675.0], [56.1, 5678.0], [56.2, 5682.0], [56.3, 5683.0], [56.4, 5691.0], [56.5, 5693.0], [56.6, 5697.0], [56.7, 5697.0], [56.8, 5702.0], [56.9, 5704.0], [57.0, 5705.0], [57.1, 5705.0], [57.2, 5706.0], [57.3, 5707.0], [57.4, 5710.0], [57.5, 5712.0], [57.6, 5713.0], [57.7, 5715.0], [57.8, 5718.0], [57.9, 5719.0], [58.0, 5719.0], [58.1, 5720.0], [58.2, 5722.0], [58.3, 5726.0], [58.4, 5726.0], [58.5, 5727.0], [58.6, 5730.0], [58.7, 5734.0], [58.8, 5735.0], [58.9, 5744.0], [59.0, 5745.0], [59.1, 5746.0], [59.2, 5751.0], [59.3, 5753.0], [59.4, 5754.0], [59.5, 5756.0], [59.6, 5756.0], [59.7, 5758.0], [59.8, 5760.0], [59.9, 5764.0], [60.0, 5764.0], [60.1, 5765.0], [60.2, 5765.0], [60.3, 5766.0], [60.4, 5768.0], [60.5, 5771.0], [60.6, 5774.0], [60.7, 5776.0], [60.8, 5777.0], [60.9, 5779.0], [61.0, 5779.0], [61.1, 5780.0], [61.2, 5783.0], [61.3, 5783.0], [61.4, 5790.0], [61.5, 5793.0], [61.6, 5794.0], [61.7, 5794.0], [61.8, 5797.0], [61.9, 5798.0], [62.0, 5801.0], [62.1, 5801.0], [62.2, 5804.0], [62.3, 5806.0], [62.4, 5807.0], [62.5, 5808.0], [62.6, 5809.0], [62.7, 5809.0], [62.8, 5812.0], [62.9, 5816.0], [63.0, 5818.0], [63.1, 5820.0], [63.2, 5822.0], [63.3, 5822.0], [63.4, 5824.0], [63.5, 5828.0], [63.6, 5828.0], [63.7, 5832.0], [63.8, 5833.0], [63.9, 5836.0], [64.0, 5837.0], [64.1, 5839.0], [64.2, 5843.0], [64.3, 5849.0], [64.4, 5850.0], [64.5, 5852.0], [64.6, 5852.0], [64.7, 5855.0], [64.8, 5856.0], [64.9, 5859.0], [65.0, 5860.0], [65.1, 5860.0], [65.2, 5862.0], [65.3, 5862.0], [65.4, 5862.0], [65.5, 5863.0], [65.6, 5865.0], [65.7, 5865.0], [65.8, 5870.0], [65.9, 5873.0], [66.0, 5874.0], [66.1, 5880.0], [66.2, 5882.0], [66.3, 5886.0], [66.4, 5887.0], [66.5, 5888.0], [66.6, 5890.0], [66.7, 5891.0], [66.8, 5891.0], [66.9, 5895.0], [67.0, 5897.0], [67.1, 5898.0], [67.2, 5900.0], [67.3, 5902.0], [67.4, 5902.0], [67.5, 5905.0], [67.6, 5908.0], [67.7, 5912.0], [67.8, 5915.0], [67.9, 5915.0], [68.0, 5918.0], [68.1, 5927.0], [68.2, 5931.0], [68.3, 5936.0], [68.4, 5939.0], [68.5, 5940.0], [68.6, 5952.0], [68.7, 5954.0], [68.8, 5955.0], [68.9, 5957.0], [69.0, 5960.0], [69.1, 5961.0], [69.2, 5962.0], [69.3, 5963.0], [69.4, 5964.0], [69.5, 5967.0], [69.6, 5969.0], [69.7, 5970.0], [69.8, 5971.0], [69.9, 5973.0], [70.0, 5973.0], [70.1, 5978.0], [70.2, 5978.0], [70.3, 5980.0], [70.4, 5981.0], [70.5, 5981.0], [70.6, 5983.0], [70.7, 5985.0], [70.8, 5986.0], [70.9, 5988.0], [71.0, 5988.0], [71.1, 5990.0], [71.2, 5992.0], [71.3, 5992.0], [71.4, 5994.0], [71.5, 5997.0], [71.6, 6000.0], [71.7, 6002.0], [71.8, 6004.0], [71.9, 6004.0], [72.0, 6005.0], [72.1, 6011.0], [72.2, 6012.0], [72.3, 6016.0], [72.4, 6018.0], [72.5, 6020.0], [72.6, 6025.0], [72.7, 6025.0], [72.8, 6026.0], [72.9, 6027.0], [73.0, 6033.0], [73.1, 6036.0], [73.2, 6042.0], [73.3, 6049.0], [73.4, 6051.0], [73.5, 6055.0], [73.6, 6055.0], [73.7, 6057.0], [73.8, 6058.0], [73.9, 6062.0], [74.0, 6064.0], [74.1, 6065.0], [74.2, 6066.0], [74.3, 6067.0], [74.4, 6068.0], [74.5, 6069.0], [74.6, 6073.0], [74.7, 6074.0], [74.8, 6075.0], [74.9, 6076.0], [75.0, 6081.0], [75.1, 6082.0], [75.2, 6086.0], [75.3, 6087.0], [75.4, 6091.0], [75.5, 6093.0], [75.6, 6096.0], [75.7, 6096.0], [75.8, 6097.0], [75.9, 6099.0], [76.0, 6100.0], [76.1, 6102.0], [76.2, 6102.0], [76.3, 6107.0], [76.4, 6108.0], [76.5, 6109.0], [76.6, 6113.0], [76.7, 6115.0], [76.8, 6116.0], [76.9, 6119.0], [77.0, 6120.0], [77.1, 6121.0], [77.2, 6130.0], [77.3, 6130.0], [77.4, 6130.0], [77.5, 6138.0], [77.6, 6140.0], [77.7, 6140.0], [77.8, 6144.0], [77.9, 6145.0], [78.0, 6149.0], [78.1, 6152.0], [78.2, 6153.0], [78.3, 6155.0], [78.4, 6156.0], [78.5, 6156.0], [78.6, 6157.0], [78.7, 6163.0], [78.8, 6164.0], [78.9, 6165.0], [79.0, 6165.0], [79.1, 6166.0], [79.2, 6168.0], [79.3, 6169.0], [79.4, 6170.0], [79.5, 6172.0], [79.6, 6174.0], [79.7, 6176.0], [79.8, 6179.0], [79.9, 6180.0], [80.0, 6184.0], [80.1, 6186.0], [80.2, 6186.0], [80.3, 6187.0], [80.4, 6189.0], [80.5, 6192.0], [80.6, 6193.0], [80.7, 6195.0], [80.8, 6198.0], [80.9, 6199.0], [81.0, 6200.0], [81.1, 6201.0], [81.2, 6208.0], [81.3, 6218.0], [81.4, 6218.0], [81.5, 6221.0], [81.6, 6227.0], [81.7, 6233.0], [81.8, 6237.0], [81.9, 6238.0], [82.0, 6247.0], [82.1, 6251.0], [82.2, 6251.0], [82.3, 6254.0], [82.4, 6256.0], [82.5, 6258.0], [82.6, 6260.0], [82.7, 6262.0], [82.8, 6262.0], [82.9, 6268.0], [83.0, 6268.0], [83.1, 6268.0], [83.2, 6269.0], [83.3, 6269.0], [83.4, 6269.0], [83.5, 6272.0], [83.6, 6272.0], [83.7, 6272.0], [83.8, 6276.0], [83.9, 6276.0], [84.0, 6278.0], [84.1, 6281.0], [84.2, 6284.0], [84.3, 6285.0], [84.4, 6290.0], [84.5, 6292.0], [84.6, 6307.0], [84.7, 6309.0], [84.8, 6312.0], [84.9, 6318.0], [85.0, 6320.0], [85.1, 6322.0], [85.2, 6327.0], [85.3, 6334.0], [85.4, 6338.0], [85.5, 6349.0], [85.6, 6350.0], [85.7, 6356.0], [85.8, 6368.0], [85.9, 6369.0], [86.0, 6373.0], [86.1, 6374.0], [86.2, 6375.0], [86.3, 6376.0], [86.4, 6377.0], [86.5, 6379.0], [86.6, 6382.0], [86.7, 6382.0], [86.8, 6382.0], [86.9, 6386.0], [87.0, 6387.0], [87.1, 6388.0], [87.2, 6390.0], [87.3, 6391.0], [87.4, 6396.0], [87.5, 6402.0], [87.6, 6402.0], [87.7, 6403.0], [87.8, 6407.0], [87.9, 6410.0], [88.0, 6416.0], [88.1, 6418.0], [88.2, 6427.0], [88.3, 6430.0], [88.4, 6435.0], [88.5, 6439.0], [88.6, 6441.0], [88.7, 6442.0], [88.8, 6442.0], [88.9, 6452.0], [89.0, 6455.0], [89.1, 6456.0], [89.2, 6459.0], [89.3, 6460.0], [89.4, 6461.0], [89.5, 6465.0], [89.6, 6469.0], [89.7, 6471.0], [89.8, 6474.0], [89.9, 6474.0], [90.0, 6477.0], [90.1, 6481.0], [90.2, 6482.0], [90.3, 6483.0], [90.4, 6486.0], [90.5, 6486.0], [90.6, 6488.0], [90.7, 6488.0], [90.8, 6489.0], [90.9, 6491.0], [91.0, 6494.0], [91.1, 6494.0], [91.2, 6500.0], [91.3, 6501.0], [91.4, 6503.0], [91.5, 6503.0], [91.6, 6503.0], [91.7, 6503.0], [91.8, 6505.0], [91.9, 6512.0], [92.0, 6516.0], [92.1, 6524.0], [92.2, 6524.0], [92.3, 6528.0], [92.4, 6529.0], [92.5, 6538.0], [92.6, 6545.0], [92.7, 6556.0], [92.8, 6560.0], [92.9, 6562.0], [93.0, 6563.0], [93.1, 6572.0], [93.2, 6585.0], [93.3, 6592.0], [93.4, 6601.0], [93.5, 6609.0], [93.6, 6610.0], [93.7, 6610.0], [93.8, 6629.0], [93.9, 6632.0], [94.0, 6633.0], [94.1, 6643.0], [94.2, 6657.0], [94.3, 6665.0], [94.4, 6667.0], [94.5, 6668.0], [94.6, 6680.0], [94.7, 6681.0], [94.8, 6683.0], [94.9, 6685.0], [95.0, 6690.0], [95.1, 6692.0], [95.2, 6698.0], [95.3, 6703.0], [95.4, 6708.0], [95.5, 6716.0], [95.6, 6719.0], [95.7, 6723.0], [95.8, 6728.0], [95.9, 6730.0], [96.0, 6731.0], [96.1, 6733.0], [96.2, 6739.0], [96.3, 6744.0], [96.4, 6747.0], [96.5, 6754.0], [96.6, 6769.0], [96.7, 6772.0], [96.8, 6779.0], [96.9, 6783.0], [97.0, 6783.0], [97.1, 6788.0], [97.2, 6791.0], [97.3, 6792.0], [97.4, 6807.0], [97.5, 6809.0], [97.6, 6813.0], [97.7, 6819.0], [97.8, 6824.0], [97.9, 6829.0], [98.0, 6835.0], [98.1, 6840.0], [98.2, 6857.0], [98.3, 6869.0], [98.4, 6884.0], [98.5, 6889.0], [98.6, 6896.0], [98.7, 6903.0], [98.8, 6910.0], [98.9, 6933.0], [99.0, 6959.0], [99.1, 6972.0], [99.2, 6984.0], [99.3, 6984.0], [99.4, 6990.0], [99.5, 6996.0], [99.6, 6998.0], [99.7, 7052.0], [99.8, 7230.0], [99.9, 7331.0], [100.0, 7579.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 75.0, "series": [{"data": [[1100.0, 2.0], [1200.0, 6.0], [1300.0, 3.0], [1400.0, 1.0], [1500.0, 2.0], [1600.0, 1.0], [1700.0, 1.0], [2100.0, 2.0], [2300.0, 1.0], [2600.0, 4.0], [2800.0, 3.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 4.0], [3100.0, 5.0], [3200.0, 5.0], [3300.0, 4.0], [3400.0, 3.0], [3500.0, 4.0], [3600.0, 9.0], [3700.0, 6.0], [3800.0, 6.0], [3900.0, 9.0], [4000.0, 12.0], [4100.0, 23.0], [4200.0, 16.0], [4300.0, 13.0], [4400.0, 16.0], [4600.0, 35.0], [4500.0, 24.0], [4800.0, 48.0], [4700.0, 51.0], [5000.0, 41.0], [5100.0, 56.0], [4900.0, 43.0], [5200.0, 56.0], [5300.0, 55.0], [5600.0, 48.0], [5400.0, 75.0], [5500.0, 70.0], [5700.0, 70.0], [5800.0, 71.0], [6100.0, 68.0], [6000.0, 59.0], [5900.0, 59.0], [6200.0, 49.0], [6300.0, 38.0], [6400.0, 51.0], [6600.0, 26.0], [6500.0, 29.0], [6900.0, 13.0], [6800.0, 18.0], [6700.0, 28.0], [7000.0, 1.0], [7100.0, 1.0], [7300.0, 1.0], [7200.0, 1.0], [7500.0, 1.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1338.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1338.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.083333333333334, "minX": 1.71897552E12, "maxY": 15.0, "series": [{"data": [[1.71897606E12, 15.0], [1.71897558E12, 15.0], [1.71897588E12, 15.0], [1.7189757E12, 15.0], [1.718976E12, 15.0], [1.71897552E12, 14.23478260869565], [1.71897582E12, 15.0], [1.71897612E12, 11.083333333333334], [1.71897564E12, 15.0], [1.71897594E12, 15.0], [1.71897576E12, 15.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897612E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1215.0, "minX": 1.0, "maxY": 5490.617713853142, "series": [{"data": [[8.0, 1848.3333333333335], [9.0, 1856.3333333333335], [10.0, 2179.3333333333335], [11.0, 2532.666666666667], [12.0, 1620.0], [13.0, 4447.666666666667], [14.0, 4056.0], [15.0, 5490.617713853142], [4.0, 1312.0], [1.0, 2601.0], [5.0, 1215.0], [6.0, 2705.333333333333], [7.0, 2059.0]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[14.865185185185203, 5427.340000000002]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 63.78333333333333, "minX": 1.71897552E12, "maxY": 2836.2, "series": [{"data": [[1.71897606E12, 2421.133333333333], [1.71897558E12, 2615.366666666667], [1.71897588E12, 2836.2], [1.7189757E12, 2404.883333333333], [1.718976E12, 2543.85], [1.71897552E12, 2155.5833333333335], [1.71897582E12, 2642.483333333333], [1.71897612E12, 450.4166666666667], [1.71897564E12, 2823.35], [1.71897594E12, 2540.75], [1.71897576E12, 2709.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71897606E12, 338.26666666666665], [1.71897558E12, 374.73333333333335], [1.71897588E12, 364.0], [1.7189757E12, 346.1666666666667], [1.718976E12, 359.23333333333335], [1.71897552E12, 306.3666666666667], [1.71897582E12, 360.78333333333336], [1.71897612E12, 63.78333333333333], [1.71897564E12, 374.85], [1.71897594E12, 361.95], [1.71897576E12, 355.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897612E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4630.083333333333, "minX": 1.71897552E12, "maxY": 5723.457364341086, "series": [{"data": [[1.71897606E12, 5568.031496062992], [1.71897558E12, 5482.635714285715], [1.71897588E12, 5439.64233576642], [1.7189757E12, 5723.457364341086], [1.718976E12, 5622.1407407407405], [1.71897552E12, 5138.573913043479], [1.71897582E12, 5576.911111111112], [1.71897612E12, 4630.083333333333], [1.71897564E12, 4958.807142857139], [1.71897594E12, 5392.294117647057], [1.71897576E12, 5508.545454545455]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897612E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4630.083333333333, "minX": 1.71897552E12, "maxY": 5723.457364341086, "series": [{"data": [[1.71897606E12, 5568.031496062992], [1.71897558E12, 5482.635714285715], [1.71897588E12, 5439.627737226279], [1.7189757E12, 5723.457364341086], [1.718976E12, 5622.133333333332], [1.71897552E12, 5138.573913043479], [1.71897582E12, 5576.911111111112], [1.71897612E12, 4630.083333333333], [1.71897564E12, 4958.807142857139], [1.71897594E12, 5392.294117647057], [1.71897576E12, 5508.53787878788]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897612E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71897552E12, "maxY": 5.82608695652174, "series": [{"data": [[1.71897606E12, 4.078740157480316], [1.71897558E12, 4.0428571428571445], [1.71897588E12, 4.890510948905111], [1.7189757E12, 4.98449612403101], [1.718976E12, 4.148148148148149], [1.71897552E12, 5.82608695652174], [1.71897582E12, 5.496296296296297], [1.71897612E12, 0.0], [1.71897564E12, 3.571428571428573], [1.71897594E12, 3.647058823529412], [1.71897576E12, 4.37121212121212]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897612E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1186.0, "minX": 1.71897552E12, "maxY": 7579.0, "series": [{"data": [[1.71897606E12, 6896.0], [1.71897558E12, 7331.0], [1.71897588E12, 6819.0], [1.7189757E12, 7579.0], [1.718976E12, 6903.0], [1.71897552E12, 6984.0], [1.71897582E12, 6996.0], [1.71897612E12, 6199.0], [1.71897564E12, 7120.0], [1.71897594E12, 6840.0], [1.71897576E12, 6933.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71897606E12, 2635.0], [1.71897558E12, 2817.0], [1.71897588E12, 3343.0], [1.7189757E12, 4105.0], [1.718976E12, 4090.0], [1.71897552E12, 1186.0], [1.71897582E12, 3201.0], [1.71897612E12, 2601.0], [1.71897564E12, 2786.0], [1.71897594E12, 1521.0], [1.71897576E12, 2179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71897606E12, 6611.6], [1.71897558E12, 6695.900000000001], [1.71897588E12, 6318.4], [1.7189757E12, 6461.0], [1.718976E12, 6496.8], [1.71897552E12, 6708.6], [1.71897582E12, 6462.6], [1.71897612E12, 6126.5], [1.71897564E12, 5989.5], [1.71897594E12, 6495.8], [1.71897576E12, 6265.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71897606E12, 6894.04], [1.71897558E12, 7216.610000000001], [1.71897588E12, 6819.0], [1.7189757E12, 7474.299999999996], [1.718976E12, 6898.32], [1.71897552E12, 6980.0], [1.71897582E12, 6987.36], [1.71897612E12, 6199.0], [1.71897564E12, 6944.520000000001], [1.71897594E12, 6835.93], [1.71897576E12, 6878.879999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71897606E12, 5615.0], [1.71897558E12, 5593.5], [1.71897588E12, 5526.0], [1.7189757E12, 5739.0], [1.718976E12, 5550.0], [1.71897552E12, 5568.0], [1.71897582E12, 5675.0], [1.71897612E12, 5312.5], [1.71897564E12, 4935.0], [1.71897594E12, 5553.5], [1.71897576E12, 5687.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71897606E12, 6729.2], [1.71897558E12, 6978.249999999999], [1.71897588E12, 6577.7], [1.7189757E12, 6670.0], [1.718976E12, 6735.599999999999], [1.71897552E12, 6867.4], [1.71897582E12, 6668.0], [1.71897612E12, 6198.0], [1.71897564E12, 6289.099999999999], [1.71897594E12, 6716.45], [1.71897576E12, 6484.1]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897612E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4998.0, "minX": 1.0, "maxY": 6497.0, "series": [{"data": [[2.0, 5291.5], [1.0, 4998.0], [4.0, 5758.5], [8.0, 5462.0], [9.0, 6379.0], [5.0, 5808.0], [10.0, 6497.0], [3.0, 5460.0], [6.0, 5755.0], [12.0, 6472.5], [7.0, 5765.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4998.0, "minX": 1.0, "maxY": 6497.0, "series": [{"data": [[2.0, 5291.5], [1.0, 4998.0], [4.0, 5758.5], [8.0, 5462.0], [9.0, 6379.0], [5.0, 5808.0], [10.0, 6497.0], [3.0, 5460.0], [6.0, 5755.0], [12.0, 6472.5], [7.0, 5765.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.71897552E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.71897606E12, 2.2333333333333334], [1.71897558E12, 2.2666666666666666], [1.71897588E12, 2.25], [1.7189757E12, 2.1666666666666665], [1.718976E12, 2.15], [1.71897552E12, 2.1], [1.71897582E12, 2.216666666666667], [1.71897612E12, 0.15], [1.71897564E12, 2.4166666666666665], [1.71897594E12, 2.316666666666667], [1.71897576E12, 2.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897612E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71897552E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.71897606E12, 2.1166666666666667], [1.71897558E12, 2.3333333333333335], [1.71897588E12, 2.283333333333333], [1.7189757E12, 2.15], [1.718976E12, 2.25], [1.71897552E12, 1.9166666666666667], [1.71897582E12, 2.25], [1.71897612E12, 0.4], [1.71897564E12, 2.3333333333333335], [1.71897594E12, 2.2666666666666666], [1.71897576E12, 2.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897612E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71897552E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.71897606E12, 2.1166666666666667], [1.71897558E12, 2.3333333333333335], [1.71897588E12, 2.283333333333333], [1.7189757E12, 2.15], [1.718976E12, 2.25], [1.71897552E12, 1.9166666666666667], [1.71897582E12, 2.25], [1.71897612E12, 0.4], [1.71897564E12, 2.3333333333333335], [1.71897594E12, 2.2666666666666666], [1.71897576E12, 2.2]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897612E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71897552E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.71897606E12, 2.1166666666666667], [1.71897558E12, 2.3333333333333335], [1.71897588E12, 2.283333333333333], [1.7189757E12, 2.15], [1.718976E12, 2.25], [1.71897552E12, 1.9166666666666667], [1.71897582E12, 2.25], [1.71897612E12, 0.4], [1.71897564E12, 2.3333333333333335], [1.71897594E12, 2.2666666666666666], [1.71897576E12, 2.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897612E12, "title": "Total Transactions Per Second"}},
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

