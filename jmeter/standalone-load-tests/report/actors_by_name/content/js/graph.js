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
        data: {"result": {"minY": 5527.0, "minX": 0.0, "maxY": 193400.0, "series": [{"data": [[0.0, 5527.0], [0.1, 5527.0], [0.2, 5527.0], [0.3, 5527.0], [0.4, 5541.0], [0.5, 5541.0], [0.6, 5541.0], [0.7, 5541.0], [0.8, 5562.0], [0.9, 5562.0], [1.0, 5562.0], [1.1, 5562.0], [1.2, 5637.0], [1.3, 5637.0], [1.4, 5637.0], [1.5, 5637.0], [1.6, 5641.0], [1.7, 5641.0], [1.8, 5641.0], [1.9, 5641.0], [2.0, 5641.0], [2.1, 5641.0], [2.2, 5641.0], [2.3, 5641.0], [2.4, 5670.0], [2.5, 5670.0], [2.6, 5670.0], [2.7, 5670.0], [2.8, 5734.0], [2.9, 5734.0], [3.0, 5734.0], [3.1, 5734.0], [3.2, 5759.0], [3.3, 5759.0], [3.4, 5759.0], [3.5, 5759.0], [3.6, 5845.0], [3.7, 5845.0], [3.8, 5845.0], [3.9, 5845.0], [4.0, 5939.0], [4.1, 5939.0], [4.2, 5939.0], [4.3, 6152.0], [4.4, 6152.0], [4.5, 6152.0], [4.6, 6152.0], [4.7, 6674.0], [4.8, 6674.0], [4.9, 6674.0], [5.0, 6674.0], [5.1, 6772.0], [5.2, 6772.0], [5.3, 6772.0], [5.4, 6772.0], [5.5, 6873.0], [5.6, 6873.0], [5.7, 6873.0], [5.8, 6873.0], [5.9, 7033.0], [6.0, 7033.0], [6.1, 7033.0], [6.2, 7033.0], [6.3, 7038.0], [6.4, 7038.0], [6.5, 7038.0], [6.6, 7038.0], [6.7, 7393.0], [6.8, 7393.0], [6.9, 7393.0], [7.0, 7393.0], [7.1, 7794.0], [7.2, 7794.0], [7.3, 7794.0], [7.4, 7794.0], [7.5, 7802.0], [7.6, 7802.0], [7.7, 7802.0], [7.8, 7802.0], [7.9, 7890.0], [8.0, 7890.0], [8.1, 7890.0], [8.2, 7890.0], [8.3, 8121.0], [8.4, 8121.0], [8.5, 8121.0], [8.6, 8543.0], [8.7, 8543.0], [8.8, 8543.0], [8.9, 8543.0], [9.0, 8711.0], [9.1, 8711.0], [9.2, 8711.0], [9.3, 8711.0], [9.4, 9429.0], [9.5, 9429.0], [9.6, 9429.0], [9.7, 9429.0], [9.8, 9605.0], [9.9, 9605.0], [10.0, 9605.0], [10.1, 9605.0], [10.2, 9719.0], [10.3, 9719.0], [10.4, 9719.0], [10.5, 9719.0], [10.6, 9953.0], [10.7, 9953.0], [10.8, 9953.0], [10.9, 9953.0], [11.0, 10236.0], [11.1, 10236.0], [11.2, 10236.0], [11.3, 10236.0], [11.4, 10262.0], [11.5, 10262.0], [11.6, 10262.0], [11.7, 10262.0], [11.8, 10876.0], [11.9, 10876.0], [12.0, 10876.0], [12.1, 10876.0], [12.2, 11478.0], [12.3, 11478.0], [12.4, 11478.0], [12.5, 12010.0], [12.6, 12010.0], [12.7, 12010.0], [12.8, 12010.0], [12.9, 12107.0], [13.0, 12107.0], [13.1, 12107.0], [13.2, 12107.0], [13.3, 12429.0], [13.4, 12429.0], [13.5, 12429.0], [13.6, 12429.0], [13.7, 12603.0], [13.8, 12603.0], [13.9, 12603.0], [14.0, 12603.0], [14.1, 12605.0], [14.2, 12605.0], [14.3, 12605.0], [14.4, 12605.0], [14.5, 12829.0], [14.6, 12829.0], [14.7, 12829.0], [14.8, 12829.0], [14.9, 13824.0], [15.0, 13824.0], [15.1, 13824.0], [15.2, 13824.0], [15.3, 15361.0], [15.4, 15361.0], [15.5, 15361.0], [15.6, 15361.0], [15.7, 16905.0], [15.8, 16905.0], [15.9, 16905.0], [16.0, 16905.0], [16.1, 17201.0], [16.2, 17201.0], [16.3, 17201.0], [16.4, 17201.0], [16.5, 17206.0], [16.6, 17206.0], [16.7, 17206.0], [16.8, 17481.0], [16.9, 17481.0], [17.0, 17481.0], [17.1, 17481.0], [17.2, 18143.0], [17.3, 18143.0], [17.4, 18143.0], [17.5, 18143.0], [17.6, 18752.0], [17.7, 18752.0], [17.8, 18752.0], [17.9, 18752.0], [18.0, 20078.0], [18.1, 20078.0], [18.2, 20078.0], [18.3, 20078.0], [18.4, 20595.0], [18.5, 20595.0], [18.6, 20595.0], [18.7, 20595.0], [18.8, 25492.0], [18.9, 25492.0], [19.0, 25492.0], [19.1, 25492.0], [19.2, 27867.0], [19.3, 27867.0], [19.4, 27867.0], [19.5, 27867.0], [19.6, 27878.0], [19.7, 27878.0], [19.8, 27878.0], [19.9, 27878.0], [20.0, 28737.0], [20.1, 28737.0], [20.2, 28737.0], [20.3, 28737.0], [20.4, 29510.0], [20.5, 29510.0], [20.6, 29510.0], [20.7, 29510.0], [20.8, 29719.0], [20.9, 29719.0], [21.0, 29719.0], [21.1, 30264.0], [21.2, 30264.0], [21.3, 30264.0], [21.4, 30264.0], [21.5, 30861.0], [21.6, 30861.0], [21.7, 30861.0], [21.8, 30861.0], [21.9, 32871.0], [22.0, 32871.0], [22.1, 32871.0], [22.2, 32871.0], [22.3, 35162.0], [22.4, 35162.0], [22.5, 35162.0], [22.6, 35162.0], [22.7, 35562.0], [22.8, 35562.0], [22.9, 35562.0], [23.0, 35562.0], [23.1, 35741.0], [23.2, 35741.0], [23.3, 35741.0], [23.4, 35741.0], [23.5, 35793.0], [23.6, 35793.0], [23.7, 35793.0], [23.8, 35793.0], [23.9, 42612.0], [24.0, 42612.0], [24.1, 42612.0], [24.2, 42612.0], [24.3, 43238.0], [24.4, 43238.0], [24.5, 43238.0], [24.6, 43238.0], [24.7, 46195.0], [24.8, 46195.0], [24.9, 46195.0], [25.0, 47873.0], [25.1, 47873.0], [25.2, 47873.0], [25.3, 47873.0], [25.4, 47921.0], [25.5, 47921.0], [25.6, 47921.0], [25.7, 47921.0], [25.8, 48563.0], [25.9, 48563.0], [26.0, 48563.0], [26.1, 48563.0], [26.2, 48803.0], [26.3, 48803.0], [26.4, 48803.0], [26.5, 48803.0], [26.6, 48827.0], [26.7, 48827.0], [26.8, 48827.0], [26.9, 48827.0], [27.0, 48957.0], [27.1, 48957.0], [27.2, 48957.0], [27.3, 48957.0], [27.4, 49833.0], [27.5, 49833.0], [27.6, 49833.0], [27.7, 49833.0], [27.8, 50367.0], [27.9, 50367.0], [28.0, 50367.0], [28.1, 50367.0], [28.2, 50552.0], [28.3, 50552.0], [28.4, 50552.0], [28.5, 50552.0], [28.6, 50604.0], [28.7, 50604.0], [28.8, 50604.0], [28.9, 50604.0], [29.0, 51416.0], [29.1, 51416.0], [29.2, 51416.0], [29.3, 56747.0], [29.4, 56747.0], [29.5, 56747.0], [29.6, 56747.0], [29.7, 58660.0], [29.8, 58660.0], [29.9, 58660.0], [30.0, 58660.0], [30.1, 58669.0], [30.2, 58669.0], [30.3, 58669.0], [30.4, 58669.0], [30.5, 58687.0], [30.6, 58687.0], [30.7, 58687.0], [30.8, 58687.0], [30.9, 60433.0], [31.0, 60433.0], [31.1, 60433.0], [31.2, 60433.0], [31.3, 60627.0], [31.4, 60627.0], [31.5, 60627.0], [31.6, 60627.0], [31.7, 60631.0], [31.8, 60631.0], [31.9, 60631.0], [32.0, 60631.0], [32.1, 60637.0], [32.2, 60637.0], [32.3, 60637.0], [32.4, 60637.0], [32.5, 60647.0], [32.6, 60647.0], [32.7, 60647.0], [32.8, 60647.0], [32.9, 60706.0], [33.0, 60706.0], [33.1, 60706.0], [33.2, 60706.0], [33.3, 61199.0], [33.4, 61199.0], [33.5, 61199.0], [33.6, 62938.0], [33.7, 62938.0], [33.8, 62938.0], [33.9, 62938.0], [34.0, 63501.0], [34.1, 63501.0], [34.2, 63501.0], [34.3, 63501.0], [34.4, 63513.0], [34.5, 63513.0], [34.6, 63513.0], [34.7, 63513.0], [34.8, 63575.0], [34.9, 63575.0], [35.0, 63575.0], [35.1, 63575.0], [35.2, 63686.0], [35.3, 63686.0], [35.4, 63686.0], [35.5, 63686.0], [35.6, 64066.0], [35.7, 64066.0], [35.8, 64066.0], [35.9, 64066.0], [36.0, 66691.0], [36.1, 66691.0], [36.2, 66691.0], [36.3, 66691.0], [36.4, 67179.0], [36.5, 67179.0], [36.6, 67179.0], [36.7, 67179.0], [36.8, 68530.0], [36.9, 68530.0], [37.0, 68530.0], [37.1, 68530.0], [37.2, 69922.0], [37.3, 69922.0], [37.4, 69922.0], [37.5, 71599.0], [37.6, 71599.0], [37.7, 71599.0], [37.8, 71599.0], [37.9, 72931.0], [38.0, 72931.0], [38.1, 72931.0], [38.2, 72931.0], [38.3, 72937.0], [38.4, 72937.0], [38.5, 72937.0], [38.6, 72937.0], [38.7, 72943.0], [38.8, 72943.0], [38.9, 72943.0], [39.0, 72943.0], [39.1, 73231.0], [39.2, 73231.0], [39.3, 73231.0], [39.4, 73231.0], [39.5, 78563.0], [39.6, 78563.0], [39.7, 78563.0], [39.8, 78563.0], [39.9, 80059.0], [40.0, 80059.0], [40.1, 80059.0], [40.2, 80059.0], [40.3, 81420.0], [40.4, 81420.0], [40.5, 81420.0], [40.6, 81420.0], [40.7, 81559.0], [40.8, 81559.0], [40.9, 81559.0], [41.0, 81559.0], [41.1, 81572.0], [41.2, 81572.0], [41.3, 81572.0], [41.4, 81572.0], [41.5, 81573.0], [41.6, 81573.0], [41.7, 81573.0], [41.8, 81579.0], [41.9, 81579.0], [42.0, 81579.0], [42.1, 81579.0], [42.2, 81650.0], [42.3, 81650.0], [42.4, 81650.0], [42.5, 81650.0], [42.6, 81663.0], [42.7, 81663.0], [42.8, 81663.0], [42.9, 81663.0], [43.0, 81823.0], [43.1, 81823.0], [43.2, 81823.0], [43.3, 81823.0], [43.4, 82577.0], [43.5, 82577.0], [43.6, 82577.0], [43.7, 82577.0], [43.8, 83174.0], [43.9, 83174.0], [44.0, 83174.0], [44.1, 83174.0], [44.2, 83351.0], [44.3, 83351.0], [44.4, 83351.0], [44.5, 83351.0], [44.6, 83751.0], [44.7, 83751.0], [44.8, 83751.0], [44.9, 83751.0], [45.0, 83771.0], [45.1, 83771.0], [45.2, 83771.0], [45.3, 83771.0], [45.4, 83776.0], [45.5, 83776.0], [45.6, 83776.0], [45.7, 83776.0], [45.8, 83788.0], [45.9, 83788.0], [46.0, 83788.0], [46.1, 83788.0], [46.2, 83788.0], [46.3, 83788.0], [46.4, 83788.0], [46.5, 83964.0], [46.6, 83964.0], [46.7, 83964.0], [46.8, 83964.0], [46.9, 83964.0], [47.0, 83964.0], [47.1, 83964.0], [47.2, 83964.0], [47.3, 83965.0], [47.4, 83965.0], [47.5, 83965.0], [47.6, 83965.0], [47.7, 83967.0], [47.8, 83967.0], [47.9, 83967.0], [48.0, 83967.0], [48.1, 83975.0], [48.2, 83975.0], [48.3, 83975.0], [48.4, 83975.0], [48.5, 83982.0], [48.6, 83982.0], [48.7, 83982.0], [48.8, 83982.0], [48.9, 83991.0], [49.0, 83991.0], [49.1, 83991.0], [49.2, 83991.0], [49.3, 84080.0], [49.4, 84080.0], [49.5, 84080.0], [49.6, 84080.0], [49.7, 86898.0], [49.8, 86898.0], [49.9, 86898.0], [50.0, 88913.0], [50.1, 88913.0], [50.2, 88913.0], [50.3, 88913.0], [50.4, 90214.0], [50.5, 90214.0], [50.6, 90214.0], [50.7, 90214.0], [50.8, 95229.0], [50.9, 95229.0], [51.0, 95229.0], [51.1, 95229.0], [51.2, 98013.0], [51.3, 98013.0], [51.4, 98013.0], [51.5, 98013.0], [51.6, 98605.0], [51.7, 98605.0], [51.8, 98605.0], [51.9, 98605.0], [52.0, 98700.0], [52.1, 98700.0], [52.2, 98700.0], [52.3, 98700.0], [52.4, 98709.0], [52.5, 98709.0], [52.6, 98709.0], [52.7, 98709.0], [52.8, 98725.0], [52.9, 98725.0], [53.0, 98725.0], [53.1, 98725.0], [53.2, 99135.0], [53.3, 99135.0], [53.4, 99135.0], [53.5, 99135.0], [53.6, 105053.0], [53.7, 105053.0], [53.8, 105053.0], [53.9, 105053.0], [54.0, 105060.0], [54.1, 105060.0], [54.2, 105060.0], [54.3, 105061.0], [54.4, 105061.0], [54.5, 105061.0], [54.6, 105061.0], [54.7, 105061.0], [54.8, 105061.0], [54.9, 105061.0], [55.0, 105061.0], [55.1, 105066.0], [55.2, 105066.0], [55.3, 105066.0], [55.4, 105066.0], [55.5, 105067.0], [55.6, 105067.0], [55.7, 105067.0], [55.8, 105067.0], [55.9, 105069.0], [56.0, 105069.0], [56.1, 105069.0], [56.2, 105069.0], [56.3, 105070.0], [56.4, 105070.0], [56.5, 105070.0], [56.6, 105070.0], [56.7, 105074.0], [56.8, 105074.0], [56.9, 105074.0], [57.0, 105074.0], [57.1, 105080.0], [57.2, 105080.0], [57.3, 105080.0], [57.4, 105080.0], [57.5, 105081.0], [57.6, 105081.0], [57.7, 105081.0], [57.8, 105081.0], [57.9, 105084.0], [58.0, 105084.0], [58.1, 105084.0], [58.2, 105084.0], [58.3, 105263.0], [58.4, 105263.0], [58.5, 105263.0], [58.6, 105276.0], [58.7, 105276.0], [58.8, 105276.0], [58.9, 105276.0], [59.0, 105289.0], [59.1, 105289.0], [59.2, 105289.0], [59.3, 105289.0], [59.4, 106266.0], [59.5, 106266.0], [59.6, 106266.0], [59.7, 106266.0], [59.8, 106805.0], [59.9, 106805.0], [60.0, 106805.0], [60.1, 106805.0], [60.2, 106809.0], [60.3, 106809.0], [60.4, 106809.0], [60.5, 106809.0], [60.6, 106811.0], [60.7, 106811.0], [60.8, 106811.0], [60.9, 106811.0], [61.0, 106813.0], [61.1, 106813.0], [61.2, 106813.0], [61.3, 106813.0], [61.4, 106815.0], [61.5, 106815.0], [61.6, 106815.0], [61.7, 106815.0], [61.8, 106820.0], [61.9, 106820.0], [62.0, 106820.0], [62.1, 106820.0], [62.2, 106821.0], [62.3, 106821.0], [62.4, 106821.0], [62.5, 106823.0], [62.6, 106823.0], [62.7, 106823.0], [62.8, 106823.0], [62.9, 106824.0], [63.0, 106824.0], [63.1, 106824.0], [63.2, 106824.0], [63.3, 106851.0], [63.4, 106851.0], [63.5, 106851.0], [63.6, 106851.0], [63.7, 110787.0], [63.8, 110787.0], [63.9, 110787.0], [64.0, 110787.0], [64.1, 112877.0], [64.2, 112877.0], [64.3, 112877.0], [64.4, 112877.0], [64.5, 113175.0], [64.6, 113175.0], [64.7, 113175.0], [64.8, 113175.0], [64.9, 117688.0], [65.0, 117688.0], [65.1, 117688.0], [65.2, 117688.0], [65.3, 118707.0], [65.4, 118707.0], [65.5, 118707.0], [65.6, 118707.0], [65.7, 118707.0], [65.8, 118707.0], [65.9, 118707.0], [66.0, 118707.0], [66.1, 118711.0], [66.2, 118711.0], [66.3, 118711.0], [66.4, 118711.0], [66.5, 121696.0], [66.6, 121696.0], [66.7, 121696.0], [66.8, 121715.0], [66.9, 121715.0], [67.0, 121715.0], [67.1, 121715.0], [67.2, 121717.0], [67.3, 121717.0], [67.4, 121717.0], [67.5, 121717.0], [67.6, 121782.0], [67.7, 121782.0], [67.8, 121782.0], [67.9, 121782.0], [68.0, 121790.0], [68.1, 121790.0], [68.2, 121790.0], [68.3, 121790.0], [68.4, 121855.0], [68.5, 121855.0], [68.6, 121855.0], [68.7, 121855.0], [68.8, 121858.0], [68.9, 121858.0], [69.0, 121858.0], [69.1, 121858.0], [69.2, 121861.0], [69.3, 121861.0], [69.4, 121861.0], [69.5, 121861.0], [69.6, 121864.0], [69.7, 121864.0], [69.8, 121864.0], [69.9, 121864.0], [70.0, 121866.0], [70.1, 121866.0], [70.2, 121866.0], [70.3, 121866.0], [70.4, 121881.0], [70.5, 121881.0], [70.6, 121881.0], [70.7, 121881.0], [70.8, 121882.0], [70.9, 121882.0], [71.0, 121882.0], [71.1, 122895.0], [71.2, 122895.0], [71.3, 122895.0], [71.4, 122895.0], [71.5, 122906.0], [71.6, 122906.0], [71.7, 122906.0], [71.8, 122906.0], [71.9, 122941.0], [72.0, 122941.0], [72.1, 122941.0], [72.2, 122941.0], [72.3, 122997.0], [72.4, 122997.0], [72.5, 122997.0], [72.6, 122997.0], [72.7, 123127.0], [72.8, 123127.0], [72.9, 123127.0], [73.0, 123127.0], [73.1, 126011.0], [73.2, 126011.0], [73.3, 126011.0], [73.4, 126011.0], [73.5, 126687.0], [73.6, 126687.0], [73.7, 126687.0], [73.8, 126687.0], [73.9, 129557.0], [74.0, 129557.0], [74.1, 129557.0], [74.2, 129557.0], [74.3, 129580.0], [74.4, 129580.0], [74.5, 129580.0], [74.6, 129580.0], [74.7, 131316.0], [74.8, 131316.0], [74.9, 131316.0], [75.0, 135008.0], [75.1, 135008.0], [75.2, 135008.0], [75.3, 135008.0], [75.4, 138019.0], [75.5, 138019.0], [75.6, 138019.0], [75.7, 138019.0], [75.8, 138232.0], [75.9, 138232.0], [76.0, 138232.0], [76.1, 138232.0], [76.2, 138317.0], [76.3, 138317.0], [76.4, 138317.0], [76.5, 138317.0], [76.6, 138317.0], [76.7, 138317.0], [76.8, 138317.0], [76.9, 138317.0], [77.0, 138347.0], [77.1, 138347.0], [77.2, 138347.0], [77.3, 138347.0], [77.4, 138395.0], [77.5, 138395.0], [77.6, 138395.0], [77.7, 138395.0], [77.8, 138409.0], [77.9, 138409.0], [78.0, 138409.0], [78.1, 138409.0], [78.2, 138412.0], [78.3, 138412.0], [78.4, 138412.0], [78.5, 138412.0], [78.6, 138417.0], [78.7, 138417.0], [78.8, 138417.0], [78.9, 138417.0], [79.0, 138420.0], [79.1, 138420.0], [79.2, 138420.0], [79.3, 138422.0], [79.4, 138422.0], [79.5, 138422.0], [79.6, 138422.0], [79.7, 138458.0], [79.8, 138458.0], [79.9, 138458.0], [80.0, 138458.0], [80.1, 138462.0], [80.2, 138462.0], [80.3, 138462.0], [80.4, 138462.0], [80.5, 141613.0], [80.6, 141613.0], [80.7, 141613.0], [80.8, 141613.0], [80.9, 141618.0], [81.0, 141618.0], [81.1, 141618.0], [81.2, 141618.0], [81.3, 141618.0], [81.4, 141618.0], [81.5, 141618.0], [81.6, 141618.0], [81.7, 141620.0], [81.8, 141620.0], [81.9, 141620.0], [82.0, 141620.0], [82.1, 141623.0], [82.2, 141623.0], [82.3, 141623.0], [82.4, 141623.0], [82.5, 141631.0], [82.6, 141631.0], [82.7, 141631.0], [82.8, 141631.0], [82.9, 141631.0], [83.0, 141631.0], [83.1, 141631.0], [83.2, 141631.0], [83.3, 143347.0], [83.4, 143347.0], [83.5, 143347.0], [83.6, 143412.0], [83.7, 143412.0], [83.8, 143412.0], [83.9, 143412.0], [84.0, 143696.0], [84.1, 143696.0], [84.2, 143696.0], [84.3, 143696.0], [84.4, 146248.0], [84.5, 146248.0], [84.6, 146248.0], [84.7, 146248.0], [84.8, 149197.0], [84.9, 149197.0], [85.0, 149197.0], [85.1, 149197.0], [85.2, 151731.0], [85.3, 151731.0], [85.4, 151731.0], [85.5, 151731.0], [85.6, 152036.0], [85.7, 152036.0], [85.8, 152036.0], [85.9, 152036.0], [86.0, 157506.0], [86.1, 157506.0], [86.2, 157506.0], [86.3, 157506.0], [86.4, 160072.0], [86.5, 160072.0], [86.6, 160072.0], [86.7, 160072.0], [86.8, 160395.0], [86.9, 160395.0], [87.0, 160395.0], [87.1, 160395.0], [87.2, 165869.0], [87.3, 165869.0], [87.4, 165869.0], [87.5, 166901.0], [87.6, 166901.0], [87.7, 166901.0], [87.8, 166901.0], [87.9, 166905.0], [88.0, 166905.0], [88.1, 166905.0], [88.2, 166905.0], [88.3, 166906.0], [88.4, 166906.0], [88.5, 166906.0], [88.6, 166906.0], [88.7, 166913.0], [88.8, 166913.0], [88.9, 166913.0], [89.0, 166913.0], [89.1, 166917.0], [89.2, 166917.0], [89.3, 166917.0], [89.4, 166917.0], [89.5, 166926.0], [89.6, 166926.0], [89.7, 166926.0], [89.8, 166926.0], [89.9, 166928.0], [90.0, 166928.0], [90.1, 166928.0], [90.2, 166928.0], [90.3, 166932.0], [90.4, 166932.0], [90.5, 166932.0], [90.6, 166932.0], [90.7, 166932.0], [90.8, 166932.0], [90.9, 166932.0], [91.0, 166932.0], [91.1, 166933.0], [91.2, 166933.0], [91.3, 166933.0], [91.4, 166933.0], [91.5, 166943.0], [91.6, 166943.0], [91.7, 166943.0], [91.8, 168356.0], [91.9, 168356.0], [92.0, 168356.0], [92.1, 168356.0], [92.2, 168369.0], [92.3, 168369.0], [92.4, 168369.0], [92.5, 168369.0], [92.6, 168411.0], [92.7, 168411.0], [92.8, 168411.0], [92.9, 168411.0], [93.0, 168731.0], [93.1, 168731.0], [93.2, 168731.0], [93.3, 168731.0], [93.4, 169793.0], [93.5, 169793.0], [93.6, 169793.0], [93.7, 169793.0], [93.8, 169980.0], [93.9, 169980.0], [94.0, 169980.0], [94.1, 169980.0], [94.2, 169992.0], [94.3, 169992.0], [94.4, 169992.0], [94.5, 169992.0], [94.6, 169992.0], [94.7, 169992.0], [94.8, 169992.0], [94.9, 169992.0], [95.0, 169996.0], [95.1, 169996.0], [95.2, 169996.0], [95.3, 169996.0], [95.4, 170000.0], [95.5, 170000.0], [95.6, 170000.0], [95.7, 170000.0], [95.8, 170003.0], [95.9, 170003.0], [96.0, 170003.0], [96.1, 170004.0], [96.2, 170004.0], [96.3, 170004.0], [96.4, 170004.0], [96.5, 170004.0], [96.6, 170004.0], [96.7, 170004.0], [96.8, 170004.0], [96.9, 170008.0], [97.0, 170008.0], [97.1, 170008.0], [97.2, 170008.0], [97.3, 174185.0], [97.4, 174185.0], [97.5, 174185.0], [97.6, 174185.0], [97.7, 176733.0], [97.8, 176733.0], [97.9, 176733.0], [98.0, 176733.0], [98.1, 177034.0], [98.2, 177034.0], [98.3, 177034.0], [98.4, 177034.0], [98.5, 177586.0], [98.6, 177586.0], [98.7, 177586.0], [98.8, 177586.0], [98.9, 185066.0], [99.0, 185066.0], [99.1, 185066.0], [99.2, 185066.0], [99.3, 185641.0], [99.4, 185641.0], [99.5, 185641.0], [99.6, 185641.0], [99.7, 193400.0], [99.8, 193400.0], [99.9, 193400.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5500.0, "maxY": 12.0, "series": [{"data": [[138400.0, 7.0], [141600.0, 7.0], [152000.0, 1.0], [160000.0, 1.0], [185600.0, 1.0], [131300.0, 1.0], [143300.0, 1.0], [169700.0, 1.0], [67100.0, 1.0], [71500.0, 1.0], [69900.0, 1.0], [81500.0, 4.0], [83100.0, 1.0], [83900.0, 7.0], [98700.0, 3.0], [99100.0, 1.0], [110700.0, 1.0], [113100.0, 1.0], [118700.0, 3.0], [123100.0, 1.0], [129500.0, 2.0], [143400.0, 1.0], [165800.0, 1.0], [177000.0, 1.0], [185000.0, 1.0], [35700.0, 2.0], [35500.0, 1.0], [35100.0, 1.0], [149100.0, 1.0], [160300.0, 1.0], [168300.0, 2.0], [169900.0, 4.0], [46100.0, 1.0], [48500.0, 1.0], [48900.0, 1.0], [47900.0, 1.0], [50500.0, 1.0], [50300.0, 1.0], [56700.0, 1.0], [60700.0, 1.0], [61100.0, 1.0], [62900.0, 1.0], [63500.0, 3.0], [66600.0, 1.0], [81800.0, 1.0], [81400.0, 1.0], [90200.0, 1.0], [98600.0, 1.0], [106200.0, 1.0], [105000.0, 12.0], [121800.0, 7.0], [126600.0, 1.0], [138000.0, 1.0], [143600.0, 1.0], [170000.0, 5.0], [168400.0, 1.0], [151700.0, 1.0], [166900.0, 11.0], [174100.0, 1.0], [68500.0, 1.0], [72900.0, 3.0], [78500.0, 1.0], [82500.0, 1.0], [83300.0, 1.0], [83700.0, 5.0], [5500.0, 3.0], [5600.0, 4.0], [88900.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [5900.0, 1.0], [6100.0, 1.0], [6600.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [7000.0, 2.0], [7300.0, 1.0], [121700.0, 4.0], [7700.0, 1.0], [7800.0, 2.0], [122900.0, 3.0], [8100.0, 1.0], [8700.0, 1.0], [8500.0, 1.0], [135000.0, 1.0], [138200.0, 1.0], [146200.0, 1.0], [9400.0, 1.0], [9600.0, 1.0], [9700.0, 1.0], [9900.0, 1.0], [10200.0, 2.0], [10800.0, 1.0], [11400.0, 1.0], [12100.0, 1.0], [12000.0, 1.0], [193400.0, 1.0], [12400.0, 1.0], [12600.0, 2.0], [12800.0, 1.0], [13800.0, 1.0], [15300.0, 1.0], [16900.0, 1.0], [17200.0, 2.0], [17400.0, 1.0], [18100.0, 1.0], [18700.0, 1.0], [20000.0, 1.0], [20500.0, 1.0], [25400.0, 1.0], [27800.0, 2.0], [29500.0, 1.0], [28700.0, 1.0], [29700.0, 1.0], [30200.0, 1.0], [30800.0, 1.0], [32800.0, 1.0], [138300.0, 4.0], [157500.0, 1.0], [42600.0, 1.0], [168700.0, 1.0], [43200.0, 1.0], [177500.0, 1.0], [176700.0, 1.0], [48800.0, 2.0], [47800.0, 1.0], [49800.0, 1.0], [50600.0, 1.0], [51400.0, 1.0], [58600.0, 3.0], [60600.0, 4.0], [60400.0, 1.0], [63600.0, 1.0], [64000.0, 1.0], [73200.0, 1.0], [80000.0, 1.0], [81600.0, 2.0], [84000.0, 1.0], [86800.0, 1.0], [98000.0, 1.0], [95200.0, 1.0], [105200.0, 3.0], [106800.0, 10.0], [112800.0, 1.0], [117600.0, 1.0], [122800.0, 1.0], [121600.0, 1.0], [126000.0, 1.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 193400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 256.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 256.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 256.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7187327E12, "maxY": 60.0, "series": [{"data": [[1.71873294E12, 27.900000000000002], [1.71873276E12, 6.228571428571428], [1.71873324E12, 60.0], [1.71873306E12, 41.0], [1.71873288E12, 20.588235294117652], [1.71873336E12, 21.624999999999996], [1.7187327E12, 1.6666666666666667], [1.71873318E12, 56.0], [1.718733E12, 36.04761904761905], [1.71873282E12, 13.18181818181818], [1.7187333E12, 58.142857142857146], [1.71873312E12, 49.689655172413794]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71873336E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5544.5, "minX": 1.0, "maxY": 158899.99999999997, "series": [{"data": [[2.0, 5544.5], [32.0, 116695.5], [33.0, 105830.25], [35.0, 138422.0], [34.0, 138409.0], [36.0, 82237.90000000001], [38.0, 81953.71428571429], [41.0, 101774.22222222223], [3.0, 5617.333333333333], [48.0, 127246.28571428572], [49.0, 109436.76923076925], [52.0, 123042.2222222222], [56.0, 126201.33333333333], [60.0, 158899.99999999997], [4.0, 5759.166666666666], [5.0, 6701.8], [6.0, 7728.0], [7.0, 52817.91666666667], [8.0, 10331.75], [9.0, 12294.42857142857], [10.0, 13824.0], [11.0, 37838.7], [12.0, 50552.25], [13.0, 54421.5], [14.0, 46854.0], [15.0, 41927.71428571428], [1.0, 7393.0], [16.0, 35488.333333333336], [17.0, 35793.0], [18.0, 42612.0], [19.0, 44716.5], [20.0, 48731.0], [21.0, 49425.33333333333], [22.0, 50485.5], [23.0, 56747.0], [24.0, 59653.0], [25.0, 62938.0], [26.0, 67179.0], [27.0, 67195.5], [28.0, 60625.16666666667], [29.0, 60635.0], [30.0, 65558.75]], "isOverall": false, "label": "Actors by name", "isController": false}, {"data": [[33.7265625, 88714.89843750001]], "isOverall": false, "label": "Actors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.983333333333333, "minX": 1.7187327E12, "maxY": 903.2166666666667, "series": [{"data": [[1.71873294E12, 446.31666666666666], [1.71873276E12, 825.2833333333333], [1.71873324E12, 284.6], [1.71873306E12, 233.3], [1.71873288E12, 392.6166666666667], [1.71873336E12, 768.1333333333333], [1.7187327E12, 55.583333333333336], [1.71873318E12, 280.95], [1.718733E12, 415.55], [1.71873282E12, 540.4], [1.7187333E12, 903.2166666666667], [1.71873312E12, 595.9333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71873294E12, 52.333333333333336], [1.71873276E12, 91.08333333333333], [1.71873324E12, 36.85], [1.71873306E12, 23.4], [1.71873288E12, 44.28333333333333], [1.71873336E12, 83.38333333333334], [1.7187327E12, 7.983333333333333], [1.71873318E12, 31.35], [1.718733E12, 55.3], [1.71873282E12, 57.016666666666666], [1.7187333E12, 109.73333333333333], [1.71873312E12, 76.06666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71873336E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6160.666666666667, "minX": 1.7187327E12, "maxY": 159811.09523809527, "series": [{"data": [[1.71873294E12, 63371.350000000006], [1.71873276E12, 8484.314285714285], [1.71873324E12, 154033.7857142857], [1.71873306E12, 101774.22222222223], [1.71873288E12, 48645.294117647056], [1.71873336E12, 103338.81250000001], [1.7187327E12, 6160.666666666667], [1.71873318E12, 126201.33333333333], [1.718733E12, 82353.66666666667], [1.71873282E12, 24782.272727272724], [1.7187333E12, 159811.09523809527], [1.71873312E12, 117958.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71873336E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6160.666666666667, "minX": 1.7187327E12, "maxY": 159811.04761904763, "series": [{"data": [[1.71873294E12, 63371.3], [1.71873276E12, 8484.314285714285], [1.71873324E12, 154033.7857142857], [1.71873306E12, 101774.22222222223], [1.71873288E12, 48645.294117647056], [1.71873336E12, 103338.81250000001], [1.7187327E12, 6160.666666666667], [1.71873318E12, 126201.33333333333], [1.718733E12, 82353.66666666667], [1.71873282E12, 24782.272727272724], [1.7187333E12, 159811.04761904763], [1.71873312E12, 117958.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71873336E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7.057142857142858, "minX": 1.7187327E12, "maxY": 68.99999999999999, "series": [{"data": [[1.71873294E12, 21.6], [1.71873276E12, 7.057142857142858], [1.71873324E12, 59.57142857142857], [1.71873306E12, 68.99999999999999], [1.71873288E12, 21.941176470588236], [1.71873336E12, 36.68750000000001], [1.7187327E12, 24.333333333333332], [1.71873318E12, 36.0], [1.718733E12, 34.19047619047618], [1.71873282E12, 11.681818181818183], [1.7187333E12, 36.333333333333336], [1.71873312E12, 38.17241379310345]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71873336E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5527.0, "minX": 1.7187327E12, "maxY": 193400.0, "series": [{"data": [[1.71873294E12, 71599.0], [1.71873276E12, 12829.0], [1.71873324E12, 185641.0], [1.71873306E12, 106266.0], [1.71873288E12, 58669.0], [1.71873336E12, 174185.0], [1.7187327E12, 7393.0], [1.71873318E12, 146248.0], [1.718733E12, 98013.0], [1.71873282E12, 35741.0], [1.7187333E12, 193400.0], [1.71873312E12, 143347.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71873294E12, 58660.0], [1.71873276E12, 5541.0], [1.71873324E12, 141613.0], [1.71873306E12, 98605.0], [1.71873288E12, 35793.0], [1.71873336E12, 83174.0], [1.7187327E12, 5527.0], [1.71873318E12, 121696.0], [1.718733E12, 72931.0], [1.71873282E12, 13824.0], [1.7187333E12, 138232.0], [1.71873312E12, 106805.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71873294E12, 69782.8], [1.71873276E12, 12498.6], [1.71873324E12, 181613.5], [1.71873306E12, 106266.0], [1.71873288E12, 57131.4], [1.71873336E12, 155013.3], [1.7187327E12, 7393.0], [1.71873318E12, 143779.30000000002], [1.718733E12, 94226.0], [1.71873282E12, 35442.0], [1.7187333E12, 170006.8], [1.71873312E12, 131316.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71873294E12, 71599.0], [1.71873276E12, 12829.0], [1.71873324E12, 185641.0], [1.71873306E12, 106266.0], [1.71873288E12, 58669.0], [1.71873336E12, 174185.0], [1.7187327E12, 7393.0], [1.71873318E12, 146248.0], [1.718733E12, 98013.0], [1.71873282E12, 35741.0], [1.7187333E12, 193400.0], [1.71873312E12, 143347.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71873294E12, 63219.5], [1.71873276E12, 7890.0], [1.71873324E12, 142663.5], [1.71873306E12, 99135.0], [1.71873288E12, 48827.0], [1.71873336E12, 105060.5], [1.7187327E12, 5562.0], [1.71873318E12, 122900.5], [1.718733E12, 81579.0], [1.71873282E12, 26679.5], [1.7187333E12, 166927.0], [1.71873312E12, 118711.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71873294E12, 71515.15], [1.71873276E12, 12649.8], [1.71873324E12, 185641.0], [1.71873306E12, 106266.0], [1.71873288E12, 58669.0], [1.71873336E12, 168779.59999999998], [1.7187327E12, 7393.0], [1.71873318E12, 146248.0], [1.718733E12, 97734.59999999999], [1.71873282E12, 35714.15], [1.7187333E12, 183816.05000000002], [1.71873312E12, 139177.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71873336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13326.5, "minX": 1.0, "maxY": 166930.0, "series": [{"data": [[2.0, 23972.5], [9.0, 121866.0], [10.0, 79991.5], [11.0, 106820.0], [3.0, 63686.0], [12.0, 122900.5], [14.0, 166930.0], [1.0, 13326.5], [4.0, 65102.0], [18.0, 105077.0], [5.0, 98709.0], [6.0, 60569.5], [7.0, 101393.5], [28.0, 155901.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13326.5, "minX": 1.0, "maxY": 166930.0, "series": [{"data": [[2.0, 23972.5], [9.0, 121866.0], [10.0, 79991.5], [11.0, 106820.0], [3.0, 63686.0], [12.0, 122900.5], [14.0, 166930.0], [1.0, 13326.5], [4.0, 65102.0], [18.0, 105077.0], [5.0, 98709.0], [6.0, 60569.5], [7.0, 101393.5], [28.0, 155901.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7187327E12, "maxY": 0.7, "series": [{"data": [[1.71873294E12, 0.45], [1.71873276E12, 0.7], [1.71873324E12, 0.23333333333333334], [1.71873306E12, 0.26666666666666666], [1.71873288E12, 0.4], [1.7187327E12, 0.08333333333333333], [1.71873318E12, 0.31666666666666665], [1.718733E12, 0.4666666666666667], [1.71873282E12, 0.5], [1.7187333E12, 0.23333333333333334], [1.71873312E12, 0.6166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187333E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7187327E12, "maxY": 0.7, "series": [{"data": [[1.71873294E12, 0.3333333333333333], [1.71873276E12, 0.5833333333333334], [1.71873324E12, 0.23333333333333334], [1.71873306E12, 0.15], [1.71873288E12, 0.2833333333333333], [1.71873336E12, 0.5333333333333333], [1.7187327E12, 0.05], [1.71873318E12, 0.2], [1.718733E12, 0.35], [1.71873282E12, 0.36666666666666664], [1.7187333E12, 0.7], [1.71873312E12, 0.48333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71873336E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7187327E12, "maxY": 0.7, "series": [{"data": [[1.71873294E12, 0.3333333333333333], [1.71873276E12, 0.5833333333333334], [1.71873324E12, 0.23333333333333334], [1.71873306E12, 0.15], [1.71873288E12, 0.2833333333333333], [1.71873336E12, 0.5333333333333333], [1.7187327E12, 0.05], [1.71873318E12, 0.2], [1.718733E12, 0.35], [1.71873282E12, 0.36666666666666664], [1.7187333E12, 0.7], [1.71873312E12, 0.48333333333333334]], "isOverall": false, "label": "Actors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71873336E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7187327E12, "maxY": 0.7, "series": [{"data": [[1.71873294E12, 0.3333333333333333], [1.71873276E12, 0.5833333333333334], [1.71873324E12, 0.23333333333333334], [1.71873306E12, 0.15], [1.71873288E12, 0.2833333333333333], [1.71873336E12, 0.5333333333333333], [1.7187327E12, 0.05], [1.71873318E12, 0.2], [1.718733E12, 0.35], [1.71873282E12, 0.36666666666666664], [1.7187333E12, 0.7], [1.71873312E12, 0.48333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71873336E12, "title": "Total Transactions Per Second"}},
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
