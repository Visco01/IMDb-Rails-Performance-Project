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
        data: {"result": {"minY": 38.0, "minX": 0.0, "maxY": 1341.0, "series": [{"data": [[0.0, 38.0], [0.1, 39.0], [0.2, 39.0], [0.3, 39.0], [0.4, 39.0], [0.5, 40.0], [0.6, 40.0], [0.7, 40.0], [0.8, 40.0], [0.9, 40.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 40.0], [1.5, 40.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 40.0], [2.2, 40.0], [2.3, 40.0], [2.4, 41.0], [2.5, 41.0], [2.6, 41.0], [2.7, 41.0], [2.8, 41.0], [2.9, 41.0], [3.0, 41.0], [3.1, 41.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 41.0], [4.5, 41.0], [4.6, 41.0], [4.7, 41.0], [4.8, 41.0], [4.9, 41.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 42.0], [12.8, 42.0], [12.9, 42.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 42.0], [13.4, 42.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 43.0], [16.4, 43.0], [16.5, 43.0], [16.6, 43.0], [16.7, 43.0], [16.8, 43.0], [16.9, 43.0], [17.0, 43.0], [17.1, 43.0], [17.2, 43.0], [17.3, 43.0], [17.4, 43.0], [17.5, 43.0], [17.6, 43.0], [17.7, 43.0], [17.8, 43.0], [17.9, 43.0], [18.0, 43.0], [18.1, 43.0], [18.2, 43.0], [18.3, 43.0], [18.4, 43.0], [18.5, 43.0], [18.6, 43.0], [18.7, 43.0], [18.8, 43.0], [18.9, 43.0], [19.0, 43.0], [19.1, 43.0], [19.2, 43.0], [19.3, 43.0], [19.4, 43.0], [19.5, 43.0], [19.6, 43.0], [19.7, 43.0], [19.8, 43.0], [19.9, 43.0], [20.0, 43.0], [20.1, 43.0], [20.2, 43.0], [20.3, 43.0], [20.4, 43.0], [20.5, 43.0], [20.6, 43.0], [20.7, 43.0], [20.8, 43.0], [20.9, 43.0], [21.0, 43.0], [21.1, 43.0], [21.2, 43.0], [21.3, 43.0], [21.4, 43.0], [21.5, 43.0], [21.6, 43.0], [21.7, 43.0], [21.8, 43.0], [21.9, 43.0], [22.0, 43.0], [22.1, 43.0], [22.2, 43.0], [22.3, 43.0], [22.4, 43.0], [22.5, 43.0], [22.6, 43.0], [22.7, 43.0], [22.8, 43.0], [22.9, 43.0], [23.0, 43.0], [23.1, 43.0], [23.2, 43.0], [23.3, 43.0], [23.4, 43.0], [23.5, 43.0], [23.6, 43.0], [23.7, 43.0], [23.8, 43.0], [23.9, 44.0], [24.0, 44.0], [24.1, 44.0], [24.2, 44.0], [24.3, 44.0], [24.4, 44.0], [24.5, 44.0], [24.6, 44.0], [24.7, 44.0], [24.8, 44.0], [24.9, 44.0], [25.0, 44.0], [25.1, 44.0], [25.2, 44.0], [25.3, 44.0], [25.4, 44.0], [25.5, 44.0], [25.6, 44.0], [25.7, 44.0], [25.8, 44.0], [25.9, 44.0], [26.0, 44.0], [26.1, 44.0], [26.2, 44.0], [26.3, 44.0], [26.4, 44.0], [26.5, 44.0], [26.6, 44.0], [26.7, 44.0], [26.8, 44.0], [26.9, 44.0], [27.0, 44.0], [27.1, 44.0], [27.2, 44.0], [27.3, 44.0], [27.4, 44.0], [27.5, 44.0], [27.6, 44.0], [27.7, 44.0], [27.8, 44.0], [27.9, 44.0], [28.0, 44.0], [28.1, 44.0], [28.2, 44.0], [28.3, 44.0], [28.4, 44.0], [28.5, 44.0], [28.6, 44.0], [28.7, 44.0], [28.8, 44.0], [28.9, 44.0], [29.0, 44.0], [29.1, 44.0], [29.2, 44.0], [29.3, 44.0], [29.4, 44.0], [29.5, 44.0], [29.6, 44.0], [29.7, 44.0], [29.8, 44.0], [29.9, 44.0], [30.0, 44.0], [30.1, 44.0], [30.2, 44.0], [30.3, 44.0], [30.4, 44.0], [30.5, 44.0], [30.6, 44.0], [30.7, 44.0], [30.8, 44.0], [30.9, 44.0], [31.0, 44.0], [31.1, 44.0], [31.2, 45.0], [31.3, 45.0], [31.4, 45.0], [31.5, 45.0], [31.6, 45.0], [31.7, 45.0], [31.8, 45.0], [31.9, 45.0], [32.0, 45.0], [32.1, 45.0], [32.2, 45.0], [32.3, 45.0], [32.4, 45.0], [32.5, 45.0], [32.6, 45.0], [32.7, 45.0], [32.8, 45.0], [32.9, 45.0], [33.0, 45.0], [33.1, 45.0], [33.2, 45.0], [33.3, 45.0], [33.4, 45.0], [33.5, 45.0], [33.6, 45.0], [33.7, 45.0], [33.8, 45.0], [33.9, 45.0], [34.0, 45.0], [34.1, 45.0], [34.2, 45.0], [34.3, 45.0], [34.4, 45.0], [34.5, 45.0], [34.6, 45.0], [34.7, 45.0], [34.8, 45.0], [34.9, 45.0], [35.0, 45.0], [35.1, 45.0], [35.2, 45.0], [35.3, 45.0], [35.4, 45.0], [35.5, 45.0], [35.6, 45.0], [35.7, 45.0], [35.8, 45.0], [35.9, 45.0], [36.0, 45.0], [36.1, 45.0], [36.2, 45.0], [36.3, 45.0], [36.4, 45.0], [36.5, 45.0], [36.6, 45.0], [36.7, 45.0], [36.8, 45.0], [36.9, 45.0], [37.0, 45.0], [37.1, 45.0], [37.2, 45.0], [37.3, 45.0], [37.4, 45.0], [37.5, 45.0], [37.6, 45.0], [37.7, 46.0], [37.8, 46.0], [37.9, 46.0], [38.0, 46.0], [38.1, 46.0], [38.2, 46.0], [38.3, 46.0], [38.4, 46.0], [38.5, 46.0], [38.6, 46.0], [38.7, 46.0], [38.8, 46.0], [38.9, 46.0], [39.0, 46.0], [39.1, 46.0], [39.2, 46.0], [39.3, 46.0], [39.4, 46.0], [39.5, 46.0], [39.6, 46.0], [39.7, 46.0], [39.8, 46.0], [39.9, 46.0], [40.0, 46.0], [40.1, 46.0], [40.2, 46.0], [40.3, 46.0], [40.4, 46.0], [40.5, 46.0], [40.6, 46.0], [40.7, 46.0], [40.8, 46.0], [40.9, 46.0], [41.0, 46.0], [41.1, 46.0], [41.2, 46.0], [41.3, 46.0], [41.4, 46.0], [41.5, 46.0], [41.6, 46.0], [41.7, 46.0], [41.8, 46.0], [41.9, 46.0], [42.0, 46.0], [42.1, 46.0], [42.2, 46.0], [42.3, 46.0], [42.4, 46.0], [42.5, 46.0], [42.6, 46.0], [42.7, 46.0], [42.8, 46.0], [42.9, 46.0], [43.0, 46.0], [43.1, 46.0], [43.2, 47.0], [43.3, 47.0], [43.4, 47.0], [43.5, 47.0], [43.6, 47.0], [43.7, 47.0], [43.8, 47.0], [43.9, 47.0], [44.0, 47.0], [44.1, 47.0], [44.2, 47.0], [44.3, 47.0], [44.4, 47.0], [44.5, 47.0], [44.6, 47.0], [44.7, 47.0], [44.8, 47.0], [44.9, 47.0], [45.0, 47.0], [45.1, 47.0], [45.2, 47.0], [45.3, 47.0], [45.4, 47.0], [45.5, 47.0], [45.6, 47.0], [45.7, 47.0], [45.8, 47.0], [45.9, 47.0], [46.0, 47.0], [46.1, 47.0], [46.2, 47.0], [46.3, 47.0], [46.4, 47.0], [46.5, 47.0], [46.6, 47.0], [46.7, 47.0], [46.8, 47.0], [46.9, 47.0], [47.0, 47.0], [47.1, 47.0], [47.2, 47.0], [47.3, 47.0], [47.4, 47.0], [47.5, 47.0], [47.6, 47.0], [47.7, 48.0], [47.8, 48.0], [47.9, 48.0], [48.0, 48.0], [48.1, 48.0], [48.2, 48.0], [48.3, 48.0], [48.4, 48.0], [48.5, 48.0], [48.6, 48.0], [48.7, 48.0], [48.8, 48.0], [48.9, 48.0], [49.0, 48.0], [49.1, 48.0], [49.2, 48.0], [49.3, 48.0], [49.4, 48.0], [49.5, 48.0], [49.6, 48.0], [49.7, 48.0], [49.8, 48.0], [49.9, 48.0], [50.0, 48.0], [50.1, 48.0], [50.2, 48.0], [50.3, 48.0], [50.4, 48.0], [50.5, 48.0], [50.6, 48.0], [50.7, 48.0], [50.8, 48.0], [50.9, 48.0], [51.0, 48.0], [51.1, 48.0], [51.2, 48.0], [51.3, 48.0], [51.4, 48.0], [51.5, 48.0], [51.6, 49.0], [51.7, 49.0], [51.8, 49.0], [51.9, 49.0], [52.0, 49.0], [52.1, 49.0], [52.2, 49.0], [52.3, 49.0], [52.4, 49.0], [52.5, 49.0], [52.6, 49.0], [52.7, 49.0], [52.8, 49.0], [52.9, 49.0], [53.0, 49.0], [53.1, 49.0], [53.2, 49.0], [53.3, 49.0], [53.4, 49.0], [53.5, 49.0], [53.6, 49.0], [53.7, 49.0], [53.8, 49.0], [53.9, 49.0], [54.0, 49.0], [54.1, 49.0], [54.2, 49.0], [54.3, 49.0], [54.4, 49.0], [54.5, 49.0], [54.6, 49.0], [54.7, 49.0], [54.8, 49.0], [54.9, 50.0], [55.0, 50.0], [55.1, 50.0], [55.2, 50.0], [55.3, 50.0], [55.4, 50.0], [55.5, 50.0], [55.6, 50.0], [55.7, 50.0], [55.8, 50.0], [55.9, 50.0], [56.0, 50.0], [56.1, 50.0], [56.2, 50.0], [56.3, 50.0], [56.4, 50.0], [56.5, 50.0], [56.6, 50.0], [56.7, 50.0], [56.8, 50.0], [56.9, 50.0], [57.0, 50.0], [57.1, 50.0], [57.2, 50.0], [57.3, 50.0], [57.4, 50.0], [57.5, 50.0], [57.6, 51.0], [57.7, 51.0], [57.8, 51.0], [57.9, 51.0], [58.0, 51.0], [58.1, 51.0], [58.2, 51.0], [58.3, 51.0], [58.4, 51.0], [58.5, 51.0], [58.6, 51.0], [58.7, 51.0], [58.8, 51.0], [58.9, 51.0], [59.0, 51.0], [59.1, 51.0], [59.2, 51.0], [59.3, 51.0], [59.4, 51.0], [59.5, 51.0], [59.6, 51.0], [59.7, 51.0], [59.8, 51.0], [59.9, 52.0], [60.0, 52.0], [60.1, 52.0], [60.2, 52.0], [60.3, 52.0], [60.4, 52.0], [60.5, 52.0], [60.6, 52.0], [60.7, 52.0], [60.8, 52.0], [60.9, 52.0], [61.0, 52.0], [61.1, 52.0], [61.2, 52.0], [61.3, 52.0], [61.4, 52.0], [61.5, 52.0], [61.6, 52.0], [61.7, 52.0], [61.8, 52.0], [61.9, 52.0], [62.0, 53.0], [62.1, 53.0], [62.2, 53.0], [62.3, 53.0], [62.4, 53.0], [62.5, 53.0], [62.6, 53.0], [62.7, 53.0], [62.8, 53.0], [62.9, 53.0], [63.0, 53.0], [63.1, 53.0], [63.2, 53.0], [63.3, 53.0], [63.4, 53.0], [63.5, 53.0], [63.6, 53.0], [63.7, 53.0], [63.8, 53.0], [63.9, 54.0], [64.0, 54.0], [64.1, 54.0], [64.2, 54.0], [64.3, 54.0], [64.4, 54.0], [64.5, 54.0], [64.6, 54.0], [64.7, 54.0], [64.8, 54.0], [64.9, 54.0], [65.0, 54.0], [65.1, 54.0], [65.2, 54.0], [65.3, 54.0], [65.4, 54.0], [65.5, 54.0], [65.6, 55.0], [65.7, 55.0], [65.8, 55.0], [65.9, 55.0], [66.0, 55.0], [66.1, 55.0], [66.2, 55.0], [66.3, 55.0], [66.4, 55.0], [66.5, 55.0], [66.6, 55.0], [66.7, 55.0], [66.8, 55.0], [66.9, 55.0], [67.0, 55.0], [67.1, 56.0], [67.2, 56.0], [67.3, 56.0], [67.4, 56.0], [67.5, 56.0], [67.6, 56.0], [67.7, 56.0], [67.8, 56.0], [67.9, 56.0], [68.0, 56.0], [68.1, 56.0], [68.2, 57.0], [68.3, 57.0], [68.4, 57.0], [68.5, 57.0], [68.6, 57.0], [68.7, 57.0], [68.8, 57.0], [68.9, 57.0], [69.0, 57.0], [69.1, 57.0], [69.2, 57.0], [69.3, 57.0], [69.4, 58.0], [69.5, 58.0], [69.6, 58.0], [69.7, 58.0], [69.8, 58.0], [69.9, 58.0], [70.0, 58.0], [70.1, 58.0], [70.2, 58.0], [70.3, 58.0], [70.4, 58.0], [70.5, 59.0], [70.6, 59.0], [70.7, 59.0], [70.8, 59.0], [70.9, 59.0], [71.0, 59.0], [71.1, 59.0], [71.2, 59.0], [71.3, 59.0], [71.4, 59.0], [71.5, 60.0], [71.6, 60.0], [71.7, 60.0], [71.8, 60.0], [71.9, 60.0], [72.0, 60.0], [72.1, 60.0], [72.2, 60.0], [72.3, 60.0], [72.4, 60.0], [72.5, 61.0], [72.6, 61.0], [72.7, 61.0], [72.8, 61.0], [72.9, 61.0], [73.0, 61.0], [73.1, 61.0], [73.2, 61.0], [73.3, 61.0], [73.4, 62.0], [73.5, 62.0], [73.6, 62.0], [73.7, 62.0], [73.8, 62.0], [73.9, 62.0], [74.0, 62.0], [74.1, 62.0], [74.2, 63.0], [74.3, 63.0], [74.4, 63.0], [74.5, 63.0], [74.6, 63.0], [74.7, 63.0], [74.8, 63.0], [74.9, 63.0], [75.0, 64.0], [75.1, 64.0], [75.2, 64.0], [75.3, 64.0], [75.4, 64.0], [75.5, 64.0], [75.6, 65.0], [75.7, 65.0], [75.8, 65.0], [75.9, 65.0], [76.0, 65.0], [76.1, 65.0], [76.2, 65.0], [76.3, 66.0], [76.4, 66.0], [76.5, 66.0], [76.6, 66.0], [76.7, 66.0], [76.8, 67.0], [76.9, 67.0], [77.0, 67.0], [77.1, 67.0], [77.2, 67.0], [77.3, 67.0], [77.4, 68.0], [77.5, 68.0], [77.6, 68.0], [77.7, 68.0], [77.8, 68.0], [77.9, 68.0], [78.0, 69.0], [78.1, 69.0], [78.2, 69.0], [78.3, 69.0], [78.4, 70.0], [78.5, 70.0], [78.6, 70.0], [78.7, 70.0], [78.8, 70.0], [78.9, 71.0], [79.0, 71.0], [79.1, 71.0], [79.2, 71.0], [79.3, 72.0], [79.4, 72.0], [79.5, 72.0], [79.6, 72.0], [79.7, 72.0], [79.8, 73.0], [79.9, 73.0], [80.0, 73.0], [80.1, 73.0], [80.2, 73.0], [80.3, 74.0], [80.4, 74.0], [80.5, 74.0], [80.6, 74.0], [80.7, 75.0], [80.8, 75.0], [80.9, 75.0], [81.0, 75.0], [81.1, 75.0], [81.2, 76.0], [81.3, 76.0], [81.4, 76.0], [81.5, 76.0], [81.6, 77.0], [81.7, 77.0], [81.8, 77.0], [81.9, 77.0], [82.0, 77.0], [82.1, 78.0], [82.2, 78.0], [82.3, 78.0], [82.4, 79.0], [82.5, 79.0], [82.6, 79.0], [82.7, 79.0], [82.8, 80.0], [82.9, 80.0], [83.0, 80.0], [83.1, 80.0], [83.2, 81.0], [83.3, 81.0], [83.4, 81.0], [83.5, 81.0], [83.6, 82.0], [83.7, 82.0], [83.8, 82.0], [83.9, 82.0], [84.0, 82.0], [84.1, 83.0], [84.2, 83.0], [84.3, 83.0], [84.4, 83.0], [84.5, 84.0], [84.6, 84.0], [84.7, 84.0], [84.8, 84.0], [84.9, 85.0], [85.0, 85.0], [85.1, 85.0], [85.2, 85.0], [85.3, 86.0], [85.4, 86.0], [85.5, 86.0], [85.6, 86.0], [85.7, 87.0], [85.8, 87.0], [85.9, 87.0], [86.0, 88.0], [86.1, 88.0], [86.2, 88.0], [86.3, 89.0], [86.4, 89.0], [86.5, 90.0], [86.6, 90.0], [86.7, 90.0], [86.8, 90.0], [86.9, 91.0], [87.0, 91.0], [87.1, 92.0], [87.2, 92.0], [87.3, 92.0], [87.4, 93.0], [87.5, 93.0], [87.6, 94.0], [87.7, 94.0], [87.8, 94.0], [87.9, 95.0], [88.0, 95.0], [88.1, 96.0], [88.2, 96.0], [88.3, 97.0], [88.4, 97.0], [88.5, 98.0], [88.6, 98.0], [88.7, 99.0], [88.8, 99.0], [88.9, 100.0], [89.0, 100.0], [89.1, 101.0], [89.2, 102.0], [89.3, 102.0], [89.4, 103.0], [89.5, 104.0], [89.6, 104.0], [89.7, 105.0], [89.8, 105.0], [89.9, 106.0], [90.0, 107.0], [90.1, 108.0], [90.2, 109.0], [90.3, 110.0], [90.4, 110.0], [90.5, 111.0], [90.6, 112.0], [90.7, 113.0], [90.8, 113.0], [90.9, 114.0], [91.0, 115.0], [91.1, 116.0], [91.2, 116.0], [91.3, 118.0], [91.4, 119.0], [91.5, 120.0], [91.6, 121.0], [91.7, 121.0], [91.8, 122.0], [91.9, 123.0], [92.0, 124.0], [92.1, 125.0], [92.2, 126.0], [92.3, 127.0], [92.4, 129.0], [92.5, 129.0], [92.6, 130.0], [92.7, 131.0], [92.8, 132.0], [92.9, 133.0], [93.0, 134.0], [93.1, 135.0], [93.2, 136.0], [93.3, 137.0], [93.4, 138.0], [93.5, 140.0], [93.6, 141.0], [93.7, 142.0], [93.8, 143.0], [93.9, 144.0], [94.0, 145.0], [94.1, 146.0], [94.2, 148.0], [94.3, 149.0], [94.4, 150.0], [94.5, 152.0], [94.6, 153.0], [94.7, 155.0], [94.8, 156.0], [94.9, 158.0], [95.0, 159.0], [95.1, 161.0], [95.2, 162.0], [95.3, 164.0], [95.4, 165.0], [95.5, 167.0], [95.6, 168.0], [95.7, 169.0], [95.8, 171.0], [95.9, 172.0], [96.0, 174.0], [96.1, 175.0], [96.2, 176.0], [96.3, 178.0], [96.4, 179.0], [96.5, 181.0], [96.6, 183.0], [96.7, 185.0], [96.8, 186.0], [96.9, 188.0], [97.0, 189.0], [97.1, 191.0], [97.2, 193.0], [97.3, 195.0], [97.4, 197.0], [97.5, 199.0], [97.6, 201.0], [97.7, 203.0], [97.8, 206.0], [97.9, 207.0], [98.0, 210.0], [98.1, 213.0], [98.2, 215.0], [98.3, 219.0], [98.4, 222.0], [98.5, 226.0], [98.6, 230.0], [98.7, 234.0], [98.8, 238.0], [98.9, 243.0], [99.0, 249.0], [99.1, 256.0], [99.2, 262.0], [99.3, 272.0], [99.4, 283.0], [99.5, 296.0], [99.6, 308.0], [99.7, 330.0], [99.8, 719.0], [99.9, 916.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 41702.0, "series": [{"data": [[0.0, 41702.0], [600.0, 3.0], [700.0, 24.0], [200.0, 941.0], [800.0, 16.0], [900.0, 28.0], [1000.0, 22.0], [1100.0, 2.0], [300.0, 108.0], [1200.0, 4.0], [1300.0, 1.0], [100.0, 4090.0], [400.0, 6.0], [500.0, 1.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 101.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 46847.0, "series": [{"data": [[0.0, 46847.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 101.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 96.2416158536585, "minX": 1.71925638E12, "maxY": 100.0, "series": [{"data": [[1.71925698E12, 96.2416158536585], [1.7192565E12, 100.0], [1.7192568E12, 100.0], [1.71925686E12, 100.0], [1.71925638E12, 96.2730398899586], [1.71925668E12, 100.0], [1.71925674E12, 100.0], [1.71925656E12, 100.0], [1.71925662E12, 100.0], [1.71925692E12, 100.0], [1.71925644E12, 100.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925698E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 121.5, "series": [{"data": [[3.0, 45.0], [4.0, 42.0], [5.0, 49.0], [7.0, 53.0], [8.0, 52.0], [9.0, 43.0], [11.0, 56.0], [13.0, 62.5], [14.0, 121.5], [15.0, 89.66666666666667], [16.0, 75.5], [17.0, 78.0], [18.0, 74.5], [19.0, 73.0], [20.0, 73.5], [21.0, 66.5], [22.0, 63.5], [23.0, 44.0], [24.0, 71.33333333333333], [25.0, 98.5], [26.0, 88.5], [27.0, 69.0], [28.0, 74.0], [29.0, 61.0], [30.0, 60.333333333333336], [31.0, 58.0], [32.0, 61.0], [33.0, 61.5], [34.0, 61.0], [35.0, 79.5], [36.0, 70.33333333333333], [37.0, 64.5], [38.0, 85.66666666666667], [39.0, 71.0], [40.0, 52.0], [41.0, 62.0], [42.0, 50.5], [43.0, 70.0], [44.0, 53.2], [45.0, 57.0], [46.0, 51.75], [47.0, 54.666666666666664], [48.0, 49.4], [49.0, 53.0], [50.0, 58.0], [51.0, 51.6], [52.0, 52.5], [53.0, 50.5], [54.0, 51.75], [55.0, 48.5], [56.0, 55.666666666666664], [57.0, 48.714285714285715], [58.0, 53.25], [59.0, 42.0], [60.0, 59.333333333333336], [61.0, 62.0], [62.0, 53.75], [63.0, 54.0], [64.0, 71.75], [65.0, 56.666666666666664], [66.0, 64.1], [67.0, 62.0], [68.0, 50.888888888888886], [69.0, 52.33333333333333], [70.0, 55.4], [71.0, 57.16666666666667], [72.0, 55.833333333333336], [73.0, 55.5], [74.0, 52.83333333333333], [75.0, 50.0], [76.0, 50.57142857142857], [77.0, 52.5], [78.0, 52.5], [79.0, 52.83333333333333], [80.0, 49.625], [81.0, 43.142857142857146], [82.0, 59.85714285714286], [83.0, 53.714285714285715], [84.0, 59.2], [85.0, 52.0], [86.0, 48.714285714285715], [87.0, 42.2], [88.0, 60.0], [89.0, 53.142857142857146], [90.0, 61.14285714285713], [91.0, 55.25], [92.0, 59.777777777777786], [93.0, 48.2], [94.0, 49.714285714285715], [95.0, 50.22222222222222], [96.0, 48.85714285714286], [97.0, 47.57142857142858], [98.0, 45.375], [99.0, 52.666666666666664], [100.0, 65.94778943746749], [1.0, 44.0]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[99.66411774729542, 65.85950413223202]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3499.133333333333, "minX": 1.71925638E12, "maxY": 100284.78333333334, "series": [{"data": [[1.71925698E12, 26114.9], [1.7192565E12, 90260.48333333334], [1.7192568E12, 98906.03333333334], [1.71925686E12, 95454.71666666666], [1.71925638E12, 55576.933333333334], [1.71925668E12, 92771.11666666667], [1.71925674E12, 98264.61666666667], [1.71925656E12, 95243.46666666666], [1.71925662E12, 96213.35], [1.71925692E12, 100284.78333333334], [1.71925644E12, 92078.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71925698E12, 3499.133333333333], [1.7192565E12, 12675.583333333334], [1.7192568E12, 12768.133333333333], [1.71925686E12, 12639.55], [1.71925638E12, 7775.866666666667], [1.71925668E12, 12625.633333333333], [1.71925674E12, 12598.133333333333], [1.71925656E12, 12639.866666666667], [1.71925662E12, 12644.966666666667], [1.71925692E12, 12545.65], [1.71925644E12, 12699.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925698E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 56.77686989314903, "minX": 1.71925638E12, "maxY": 97.75206327372756, "series": [{"data": [[1.71925698E12, 75.49009146341466], [1.7192565E12, 63.09825005270914], [1.7192568E12, 56.77686989314903], [1.71925686E12, 60.22821750997251], [1.71925638E12, 97.75206327372756], [1.71925668E12, 64.55490113588536], [1.71925674E12, 61.85807814149947], [1.71925656E12, 66.12536935415811], [1.71925662E12, 60.42368255301273], [1.71925692E12, 74.89880952380943], [1.71925644E12, 62.73648790746571]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925698E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 56.76576576576587, "minX": 1.71925638E12, "maxY": 97.75171939477323, "series": [{"data": [[1.71925698E12, 75.49009146341466], [1.7192565E12, 63.09719586759426], [1.7192568E12, 56.76576576576587], [1.71925686E12, 60.22338862061731], [1.71925638E12, 97.75171939477323], [1.71925668E12, 64.55153554901138], [1.71925674E12, 61.84646251319951], [1.71925656E12, 66.12051498522612], [1.71925662E12, 60.41486458114633], [1.71925692E12, 74.85671768707478], [1.71925644E12, 62.73438485804417]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925698E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71925638E12, "maxY": 1.2788858321870675, "series": [{"data": [[1.71925698E12, 0.0], [1.7192565E12, 0.7657600674678469], [1.7192568E12, 0.9574690970039835], [1.71925686E12, 0.8526138988032749], [1.71925638E12, 1.2788858321870675], [1.71925668E12, 0.8334034497265435], [1.71925674E12, 0.9583949313621951], [1.71925656E12, 0.7781764457577015], [1.71925662E12, 0.7684232626495914], [1.71925692E12, 0.781037414965989], [1.71925644E12, 0.7552050473186146]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925698E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.71925638E12, "maxY": 1341.0, "series": [{"data": [[1.71925698E12, 318.0], [1.7192565E12, 320.0], [1.7192568E12, 352.0], [1.71925686E12, 321.0], [1.71925638E12, 1341.0], [1.71925668E12, 330.0], [1.71925674E12, 363.0], [1.71925656E12, 501.0], [1.71925662E12, 315.0], [1.71925692E12, 495.0], [1.71925644E12, 312.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71925698E12, 39.0], [1.7192565E12, 38.0], [1.7192568E12, 39.0], [1.71925686E12, 39.0], [1.71925638E12, 39.0], [1.71925668E12, 39.0], [1.71925674E12, 39.0], [1.71925656E12, 38.0], [1.71925662E12, 39.0], [1.71925692E12, 38.0], [1.71925644E12, 39.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71925698E12, 167.0], [1.7192565E12, 101.0], [1.7192568E12, 82.0], [1.71925686E12, 94.0], [1.71925638E12, 172.0999999999999], [1.71925668E12, 109.0], [1.71925674E12, 95.0], [1.71925656E12, 115.0], [1.71925662E12, 90.0], [1.71925692E12, 149.0], [1.71925644E12, 99.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71925698E12, 252.47999999999956], [1.7192565E12, 243.5600000000004], [1.7192568E12, 180.0], [1.71925686E12, 188.71999999999935], [1.71925638E12, 1000.0999999999985], [1.71925668E12, 256.0], [1.71925674E12, 222.0], [1.71925656E12, 276.4399999999987], [1.71925662E12, 215.0], [1.71925692E12, 275.9499999999998], [1.71925644E12, 230.4399999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71925698E12, 52.0], [1.7192565E12, 48.0], [1.7192568E12, 47.0], [1.71925686E12, 48.0], [1.71925638E12, 48.0], [1.71925668E12, 48.0], [1.71925674E12, 48.0], [1.71925656E12, 48.0], [1.71925662E12, 48.0], [1.71925692E12, 51.0], [1.71925644E12, 47.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71925698E12, 204.0], [1.7192565E12, 150.80000000000018], [1.7192568E12, 106.30000000000018], [1.71925686E12, 125.80000000000018], [1.71925638E12, 231.09999999999945], [1.71925668E12, 157.0], [1.71925674E12, 145.0], [1.71925656E12, 158.0], [1.71925662E12, 132.0], [1.71925692E12, 199.75], [1.71925644E12, 161.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925698E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 43.0, "minX": 10.0, "maxY": 938.0, "series": [{"data": [[10.0, 86.5], [19.0, 79.0], [26.0, 51.0], [33.0, 44.0], [34.0, 43.0], [37.0, 44.0], [51.0, 938.0], [50.0, 58.0], [53.0, 46.0], [54.0, 50.5], [55.0, 120.0], [56.0, 44.5], [58.0, 74.5], [59.0, 89.0], [61.0, 67.5], [60.0, 227.5], [62.0, 140.0], [67.0, 50.0], [65.0, 56.5], [64.0, 53.0], [66.0, 60.0], [69.0, 55.0], [70.0, 47.0], [68.0, 57.5], [71.0, 48.0], [72.0, 47.0], [75.0, 47.0], [73.0, 47.0], [74.0, 48.0], [78.0, 47.0], [79.0, 47.0], [76.0, 48.0], [77.0, 47.0], [80.0, 49.0], [82.0, 49.0], [81.0, 47.0], [83.0, 47.0], [86.0, 47.0], [85.0, 48.0], [87.0, 49.0], [84.0, 49.0], [88.0, 47.0], [89.0, 49.0], [90.0, 53.5], [91.0, 56.0], [93.0, 50.5], [92.0, 47.0], [95.0, 55.0], [94.0, 51.0], [97.0, 173.0], [96.0, 75.0], [98.0, 47.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 43.0, "minX": 10.0, "maxY": 938.0, "series": [{"data": [[10.0, 86.5], [19.0, 79.0], [26.0, 51.0], [33.0, 44.0], [34.0, 43.0], [37.0, 44.0], [51.0, 938.0], [50.0, 58.0], [53.0, 46.0], [54.0, 50.5], [55.0, 120.0], [56.0, 44.5], [58.0, 74.5], [59.0, 89.0], [61.0, 67.5], [60.0, 227.5], [62.0, 140.0], [67.0, 50.0], [65.0, 56.5], [64.0, 53.0], [66.0, 60.0], [69.0, 55.0], [70.0, 47.0], [68.0, 57.5], [71.0, 48.0], [72.0, 47.0], [75.0, 47.0], [73.0, 47.0], [74.0, 48.0], [78.0, 47.0], [79.0, 47.0], [76.0, 48.0], [77.0, 47.0], [80.0, 49.0], [82.0, 49.0], [81.0, 47.0], [83.0, 47.0], [86.0, 47.0], [85.0, 48.0], [87.0, 49.0], [84.0, 49.0], [88.0, 47.0], [89.0, 49.0], [90.0, 53.5], [91.0, 56.0], [93.0, 50.5], [92.0, 47.0], [95.0, 55.0], [94.0, 50.5], [97.0, 173.0], [96.0, 75.0], [98.0, 47.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.75, "minX": 1.71925638E12, "maxY": 79.56666666666666, "series": [{"data": [[1.71925698E12, 21.75], [1.7192565E12, 79.06666666666666], [1.7192568E12, 79.56666666666666], [1.71925686E12, 79.23333333333333], [1.71925638E12, 48.55], [1.71925668E12, 79.18333333333334], [1.71925674E12, 79.01666666666667], [1.71925656E12, 79.06666666666666], [1.71925662E12, 79.38333333333334], [1.71925692E12, 78.48333333333333], [1.71925644E12, 79.16666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925698E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.866666666666667, "minX": 1.71925638E12, "maxY": 79.55, "series": [{"data": [[1.71925698E12, 21.866666666666667], [1.7192565E12, 79.05], [1.7192568E12, 79.55], [1.71925686E12, 79.38333333333334], [1.71925638E12, 48.46666666666667], [1.71925668E12, 79.23333333333333], [1.71925674E12, 78.91666666666667], [1.71925656E12, 78.96666666666667], [1.71925662E12, 79.38333333333334], [1.71925692E12, 78.4], [1.71925644E12, 79.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925698E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 21.866666666666667, "minX": 1.71925638E12, "maxY": 79.55, "series": [{"data": [[1.71925698E12, 21.866666666666667], [1.7192565E12, 79.05], [1.7192568E12, 79.55], [1.71925686E12, 79.38333333333334], [1.71925638E12, 48.46666666666667], [1.71925668E12, 79.23333333333333], [1.71925674E12, 78.91666666666667], [1.71925656E12, 78.96666666666667], [1.71925662E12, 79.38333333333334], [1.71925692E12, 78.4], [1.71925644E12, 79.25]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925698E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 21.866666666666667, "minX": 1.71925638E12, "maxY": 79.55, "series": [{"data": [[1.71925698E12, 21.866666666666667], [1.7192565E12, 79.05], [1.7192568E12, 79.55], [1.71925686E12, 79.38333333333334], [1.71925638E12, 48.46666666666667], [1.71925668E12, 79.23333333333333], [1.71925674E12, 78.91666666666667], [1.71925656E12, 78.96666666666667], [1.71925662E12, 79.38333333333334], [1.71925692E12, 78.4], [1.71925644E12, 79.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925698E12, "title": "Total Transactions Per Second"}},
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

