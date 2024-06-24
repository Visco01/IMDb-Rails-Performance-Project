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
        data: {"result": {"minY": 37.0, "minX": 0.0, "maxY": 722.0, "series": [{"data": [[0.0, 37.0], [0.1, 39.0], [0.2, 39.0], [0.3, 39.0], [0.4, 39.0], [0.5, 39.0], [0.6, 39.0], [0.7, 39.0], [0.8, 40.0], [0.9, 40.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 40.0], [1.5, 40.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 40.0], [2.2, 40.0], [2.3, 40.0], [2.4, 40.0], [2.5, 40.0], [2.6, 40.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 41.0], [4.5, 41.0], [4.6, 41.0], [4.7, 41.0], [4.8, 41.0], [4.9, 41.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 42.0], [10.3, 42.0], [10.4, 42.0], [10.5, 42.0], [10.6, 42.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 42.0], [12.8, 42.0], [12.9, 42.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 42.0], [13.4, 42.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 42.0], [15.7, 42.0], [15.8, 42.0], [15.9, 42.0], [16.0, 42.0], [16.1, 42.0], [16.2, 42.0], [16.3, 42.0], [16.4, 42.0], [16.5, 42.0], [16.6, 42.0], [16.7, 42.0], [16.8, 42.0], [16.9, 42.0], [17.0, 42.0], [17.1, 42.0], [17.2, 42.0], [17.3, 42.0], [17.4, 42.0], [17.5, 42.0], [17.6, 42.0], [17.7, 42.0], [17.8, 42.0], [17.9, 42.0], [18.0, 42.0], [18.1, 42.0], [18.2, 42.0], [18.3, 42.0], [18.4, 42.0], [18.5, 42.0], [18.6, 42.0], [18.7, 43.0], [18.8, 43.0], [18.9, 43.0], [19.0, 43.0], [19.1, 43.0], [19.2, 43.0], [19.3, 43.0], [19.4, 43.0], [19.5, 43.0], [19.6, 43.0], [19.7, 43.0], [19.8, 43.0], [19.9, 43.0], [20.0, 43.0], [20.1, 43.0], [20.2, 43.0], [20.3, 43.0], [20.4, 43.0], [20.5, 43.0], [20.6, 43.0], [20.7, 43.0], [20.8, 43.0], [20.9, 43.0], [21.0, 43.0], [21.1, 43.0], [21.2, 43.0], [21.3, 43.0], [21.4, 43.0], [21.5, 43.0], [21.6, 43.0], [21.7, 43.0], [21.8, 43.0], [21.9, 43.0], [22.0, 43.0], [22.1, 43.0], [22.2, 43.0], [22.3, 43.0], [22.4, 43.0], [22.5, 43.0], [22.6, 43.0], [22.7, 43.0], [22.8, 43.0], [22.9, 43.0], [23.0, 43.0], [23.1, 43.0], [23.2, 43.0], [23.3, 43.0], [23.4, 43.0], [23.5, 43.0], [23.6, 43.0], [23.7, 43.0], [23.8, 43.0], [23.9, 43.0], [24.0, 43.0], [24.1, 43.0], [24.2, 43.0], [24.3, 43.0], [24.4, 43.0], [24.5, 43.0], [24.6, 43.0], [24.7, 43.0], [24.8, 43.0], [24.9, 43.0], [25.0, 43.0], [25.1, 43.0], [25.2, 43.0], [25.3, 43.0], [25.4, 43.0], [25.5, 43.0], [25.6, 43.0], [25.7, 43.0], [25.8, 43.0], [25.9, 43.0], [26.0, 43.0], [26.1, 43.0], [26.2, 43.0], [26.3, 43.0], [26.4, 43.0], [26.5, 43.0], [26.6, 43.0], [26.7, 43.0], [26.8, 43.0], [26.9, 43.0], [27.0, 43.0], [27.1, 44.0], [27.2, 44.0], [27.3, 44.0], [27.4, 44.0], [27.5, 44.0], [27.6, 44.0], [27.7, 44.0], [27.8, 44.0], [27.9, 44.0], [28.0, 44.0], [28.1, 44.0], [28.2, 44.0], [28.3, 44.0], [28.4, 44.0], [28.5, 44.0], [28.6, 44.0], [28.7, 44.0], [28.8, 44.0], [28.9, 44.0], [29.0, 44.0], [29.1, 44.0], [29.2, 44.0], [29.3, 44.0], [29.4, 44.0], [29.5, 44.0], [29.6, 44.0], [29.7, 44.0], [29.8, 44.0], [29.9, 44.0], [30.0, 44.0], [30.1, 44.0], [30.2, 44.0], [30.3, 44.0], [30.4, 44.0], [30.5, 44.0], [30.6, 44.0], [30.7, 44.0], [30.8, 44.0], [30.9, 44.0], [31.0, 44.0], [31.1, 44.0], [31.2, 44.0], [31.3, 44.0], [31.4, 44.0], [31.5, 44.0], [31.6, 44.0], [31.7, 44.0], [31.8, 44.0], [31.9, 44.0], [32.0, 44.0], [32.1, 44.0], [32.2, 44.0], [32.3, 44.0], [32.4, 44.0], [32.5, 44.0], [32.6, 44.0], [32.7, 44.0], [32.8, 44.0], [32.9, 44.0], [33.0, 44.0], [33.1, 44.0], [33.2, 44.0], [33.3, 44.0], [33.4, 44.0], [33.5, 44.0], [33.6, 44.0], [33.7, 44.0], [33.8, 44.0], [33.9, 44.0], [34.0, 44.0], [34.1, 44.0], [34.2, 44.0], [34.3, 45.0], [34.4, 45.0], [34.5, 45.0], [34.6, 45.0], [34.7, 45.0], [34.8, 45.0], [34.9, 45.0], [35.0, 45.0], [35.1, 45.0], [35.2, 45.0], [35.3, 45.0], [35.4, 45.0], [35.5, 45.0], [35.6, 45.0], [35.7, 45.0], [35.8, 45.0], [35.9, 45.0], [36.0, 45.0], [36.1, 45.0], [36.2, 45.0], [36.3, 45.0], [36.4, 45.0], [36.5, 45.0], [36.6, 45.0], [36.7, 45.0], [36.8, 45.0], [36.9, 45.0], [37.0, 45.0], [37.1, 45.0], [37.2, 45.0], [37.3, 45.0], [37.4, 45.0], [37.5, 45.0], [37.6, 45.0], [37.7, 45.0], [37.8, 45.0], [37.9, 45.0], [38.0, 45.0], [38.1, 45.0], [38.2, 45.0], [38.3, 45.0], [38.4, 45.0], [38.5, 45.0], [38.6, 45.0], [38.7, 45.0], [38.8, 45.0], [38.9, 45.0], [39.0, 45.0], [39.1, 45.0], [39.2, 45.0], [39.3, 45.0], [39.4, 45.0], [39.5, 45.0], [39.6, 45.0], [39.7, 45.0], [39.8, 45.0], [39.9, 45.0], [40.0, 45.0], [40.1, 45.0], [40.2, 45.0], [40.3, 45.0], [40.4, 45.0], [40.5, 46.0], [40.6, 46.0], [40.7, 46.0], [40.8, 46.0], [40.9, 46.0], [41.0, 46.0], [41.1, 46.0], [41.2, 46.0], [41.3, 46.0], [41.4, 46.0], [41.5, 46.0], [41.6, 46.0], [41.7, 46.0], [41.8, 46.0], [41.9, 46.0], [42.0, 46.0], [42.1, 46.0], [42.2, 46.0], [42.3, 46.0], [42.4, 46.0], [42.5, 46.0], [42.6, 46.0], [42.7, 46.0], [42.8, 46.0], [42.9, 46.0], [43.0, 46.0], [43.1, 46.0], [43.2, 46.0], [43.3, 46.0], [43.4, 46.0], [43.5, 46.0], [43.6, 46.0], [43.7, 46.0], [43.8, 46.0], [43.9, 46.0], [44.0, 46.0], [44.1, 46.0], [44.2, 46.0], [44.3, 46.0], [44.4, 46.0], [44.5, 46.0], [44.6, 46.0], [44.7, 46.0], [44.8, 46.0], [44.9, 46.0], [45.0, 46.0], [45.1, 46.0], [45.2, 46.0], [45.3, 46.0], [45.4, 46.0], [45.5, 46.0], [45.6, 47.0], [45.7, 47.0], [45.8, 47.0], [45.9, 47.0], [46.0, 47.0], [46.1, 47.0], [46.2, 47.0], [46.3, 47.0], [46.4, 47.0], [46.5, 47.0], [46.6, 47.0], [46.7, 47.0], [46.8, 47.0], [46.9, 47.0], [47.0, 47.0], [47.1, 47.0], [47.2, 47.0], [47.3, 47.0], [47.4, 47.0], [47.5, 47.0], [47.6, 47.0], [47.7, 47.0], [47.8, 47.0], [47.9, 47.0], [48.0, 47.0], [48.1, 47.0], [48.2, 47.0], [48.3, 47.0], [48.4, 47.0], [48.5, 47.0], [48.6, 47.0], [48.7, 47.0], [48.8, 47.0], [48.9, 47.0], [49.0, 47.0], [49.1, 47.0], [49.2, 47.0], [49.3, 47.0], [49.4, 47.0], [49.5, 47.0], [49.6, 47.0], [49.7, 47.0], [49.8, 48.0], [49.9, 48.0], [50.0, 48.0], [50.1, 48.0], [50.2, 48.0], [50.3, 48.0], [50.4, 48.0], [50.5, 48.0], [50.6, 48.0], [50.7, 48.0], [50.8, 48.0], [50.9, 48.0], [51.0, 48.0], [51.1, 48.0], [51.2, 48.0], [51.3, 48.0], [51.4, 48.0], [51.5, 48.0], [51.6, 48.0], [51.7, 48.0], [51.8, 48.0], [51.9, 48.0], [52.0, 48.0], [52.1, 48.0], [52.2, 48.0], [52.3, 48.0], [52.4, 48.0], [52.5, 48.0], [52.6, 48.0], [52.7, 48.0], [52.8, 48.0], [52.9, 48.0], [53.0, 48.0], [53.1, 48.0], [53.2, 49.0], [53.3, 49.0], [53.4, 49.0], [53.5, 49.0], [53.6, 49.0], [53.7, 49.0], [53.8, 49.0], [53.9, 49.0], [54.0, 49.0], [54.1, 49.0], [54.2, 49.0], [54.3, 49.0], [54.4, 49.0], [54.5, 49.0], [54.6, 49.0], [54.7, 49.0], [54.8, 49.0], [54.9, 49.0], [55.0, 49.0], [55.1, 49.0], [55.2, 49.0], [55.3, 49.0], [55.4, 49.0], [55.5, 49.0], [55.6, 49.0], [55.7, 49.0], [55.8, 49.0], [55.9, 49.0], [56.0, 50.0], [56.1, 50.0], [56.2, 50.0], [56.3, 50.0], [56.4, 50.0], [56.5, 50.0], [56.6, 50.0], [56.7, 50.0], [56.8, 50.0], [56.9, 50.0], [57.0, 50.0], [57.1, 50.0], [57.2, 50.0], [57.3, 50.0], [57.4, 50.0], [57.5, 50.0], [57.6, 50.0], [57.7, 50.0], [57.8, 50.0], [57.9, 50.0], [58.0, 50.0], [58.1, 50.0], [58.2, 50.0], [58.3, 50.0], [58.4, 50.0], [58.5, 50.0], [58.6, 51.0], [58.7, 51.0], [58.8, 51.0], [58.9, 51.0], [59.0, 51.0], [59.1, 51.0], [59.2, 51.0], [59.3, 51.0], [59.4, 51.0], [59.5, 51.0], [59.6, 51.0], [59.7, 51.0], [59.8, 51.0], [59.9, 51.0], [60.0, 51.0], [60.1, 51.0], [60.2, 51.0], [60.3, 51.0], [60.4, 51.0], [60.5, 51.0], [60.6, 51.0], [60.7, 51.0], [60.8, 52.0], [60.9, 52.0], [61.0, 52.0], [61.1, 52.0], [61.2, 52.0], [61.3, 52.0], [61.4, 52.0], [61.5, 52.0], [61.6, 52.0], [61.7, 52.0], [61.8, 52.0], [61.9, 52.0], [62.0, 52.0], [62.1, 52.0], [62.2, 52.0], [62.3, 52.0], [62.4, 52.0], [62.5, 52.0], [62.6, 52.0], [62.7, 53.0], [62.8, 53.0], [62.9, 53.0], [63.0, 53.0], [63.1, 53.0], [63.2, 53.0], [63.3, 53.0], [63.4, 53.0], [63.5, 53.0], [63.6, 53.0], [63.7, 53.0], [63.8, 53.0], [63.9, 53.0], [64.0, 53.0], [64.1, 53.0], [64.2, 53.0], [64.3, 53.0], [64.4, 53.0], [64.5, 54.0], [64.6, 54.0], [64.7, 54.0], [64.8, 54.0], [64.9, 54.0], [65.0, 54.0], [65.1, 54.0], [65.2, 54.0], [65.3, 54.0], [65.4, 54.0], [65.5, 54.0], [65.6, 54.0], [65.7, 54.0], [65.8, 54.0], [65.9, 54.0], [66.0, 54.0], [66.1, 55.0], [66.2, 55.0], [66.3, 55.0], [66.4, 55.0], [66.5, 55.0], [66.6, 55.0], [66.7, 55.0], [66.8, 55.0], [66.9, 55.0], [67.0, 55.0], [67.1, 55.0], [67.2, 55.0], [67.3, 55.0], [67.4, 56.0], [67.5, 56.0], [67.6, 56.0], [67.7, 56.0], [67.8, 56.0], [67.9, 56.0], [68.0, 56.0], [68.1, 56.0], [68.2, 56.0], [68.3, 56.0], [68.4, 56.0], [68.5, 56.0], [68.6, 56.0], [68.7, 57.0], [68.8, 57.0], [68.9, 57.0], [69.0, 57.0], [69.1, 57.0], [69.2, 57.0], [69.3, 57.0], [69.4, 57.0], [69.5, 57.0], [69.6, 57.0], [69.7, 57.0], [69.8, 57.0], [69.9, 58.0], [70.0, 58.0], [70.1, 58.0], [70.2, 58.0], [70.3, 58.0], [70.4, 58.0], [70.5, 58.0], [70.6, 58.0], [70.7, 58.0], [70.8, 58.0], [70.9, 59.0], [71.0, 59.0], [71.1, 59.0], [71.2, 59.0], [71.3, 59.0], [71.4, 59.0], [71.5, 59.0], [71.6, 59.0], [71.7, 59.0], [71.8, 59.0], [71.9, 60.0], [72.0, 60.0], [72.1, 60.0], [72.2, 60.0], [72.3, 60.0], [72.4, 60.0], [72.5, 60.0], [72.6, 60.0], [72.7, 60.0], [72.8, 60.0], [72.9, 61.0], [73.0, 61.0], [73.1, 61.0], [73.2, 61.0], [73.3, 61.0], [73.4, 61.0], [73.5, 61.0], [73.6, 61.0], [73.7, 62.0], [73.8, 62.0], [73.9, 62.0], [74.0, 62.0], [74.1, 62.0], [74.2, 62.0], [74.3, 62.0], [74.4, 62.0], [74.5, 63.0], [74.6, 63.0], [74.7, 63.0], [74.8, 63.0], [74.9, 63.0], [75.0, 63.0], [75.1, 63.0], [75.2, 63.0], [75.3, 64.0], [75.4, 64.0], [75.5, 64.0], [75.6, 64.0], [75.7, 64.0], [75.8, 64.0], [75.9, 65.0], [76.0, 65.0], [76.1, 65.0], [76.2, 65.0], [76.3, 65.0], [76.4, 65.0], [76.5, 65.0], [76.6, 66.0], [76.7, 66.0], [76.8, 66.0], [76.9, 66.0], [77.0, 66.0], [77.1, 66.0], [77.2, 67.0], [77.3, 67.0], [77.4, 67.0], [77.5, 67.0], [77.6, 67.0], [77.7, 67.0], [77.8, 68.0], [77.9, 68.0], [78.0, 68.0], [78.1, 68.0], [78.2, 68.0], [78.3, 69.0], [78.4, 69.0], [78.5, 69.0], [78.6, 69.0], [78.7, 69.0], [78.8, 69.0], [78.9, 70.0], [79.0, 70.0], [79.1, 70.0], [79.2, 70.0], [79.3, 70.0], [79.4, 71.0], [79.5, 71.0], [79.6, 71.0], [79.7, 71.0], [79.8, 71.0], [79.9, 71.0], [80.0, 72.0], [80.1, 72.0], [80.2, 72.0], [80.3, 72.0], [80.4, 72.0], [80.5, 73.0], [80.6, 73.0], [80.7, 73.0], [80.8, 73.0], [80.9, 74.0], [81.0, 74.0], [81.1, 74.0], [81.2, 74.0], [81.3, 74.0], [81.4, 75.0], [81.5, 75.0], [81.6, 75.0], [81.7, 75.0], [81.8, 76.0], [81.9, 76.0], [82.0, 76.0], [82.1, 76.0], [82.2, 77.0], [82.3, 77.0], [82.4, 77.0], [82.5, 77.0], [82.6, 78.0], [82.7, 78.0], [82.8, 78.0], [82.9, 78.0], [83.0, 79.0], [83.1, 79.0], [83.2, 79.0], [83.3, 80.0], [83.4, 80.0], [83.5, 80.0], [83.6, 80.0], [83.7, 81.0], [83.8, 81.0], [83.9, 81.0], [84.0, 81.0], [84.1, 82.0], [84.2, 82.0], [84.3, 82.0], [84.4, 82.0], [84.5, 82.0], [84.6, 83.0], [84.7, 83.0], [84.8, 83.0], [84.9, 83.0], [85.0, 84.0], [85.1, 84.0], [85.2, 84.0], [85.3, 84.0], [85.4, 85.0], [85.5, 85.0], [85.6, 85.0], [85.7, 85.0], [85.8, 86.0], [85.9, 86.0], [86.0, 86.0], [86.1, 87.0], [86.2, 87.0], [86.3, 87.0], [86.4, 88.0], [86.5, 88.0], [86.6, 88.0], [86.7, 89.0], [86.8, 89.0], [86.9, 89.0], [87.0, 90.0], [87.1, 90.0], [87.2, 90.0], [87.3, 91.0], [87.4, 91.0], [87.5, 92.0], [87.6, 92.0], [87.7, 92.0], [87.8, 93.0], [87.9, 93.0], [88.0, 94.0], [88.1, 94.0], [88.2, 95.0], [88.3, 95.0], [88.4, 96.0], [88.5, 96.0], [88.6, 97.0], [88.7, 97.0], [88.8, 98.0], [88.9, 98.0], [89.0, 99.0], [89.1, 99.0], [89.2, 100.0], [89.3, 100.0], [89.4, 101.0], [89.5, 101.0], [89.6, 102.0], [89.7, 102.0], [89.8, 103.0], [89.9, 104.0], [90.0, 104.0], [90.1, 105.0], [90.2, 105.0], [90.3, 106.0], [90.4, 106.0], [90.5, 107.0], [90.6, 108.0], [90.7, 108.0], [90.8, 109.0], [90.9, 110.0], [91.0, 111.0], [91.1, 111.0], [91.2, 112.0], [91.3, 113.0], [91.4, 113.0], [91.5, 114.0], [91.6, 114.0], [91.7, 115.0], [91.8, 116.0], [91.9, 117.0], [92.0, 117.0], [92.1, 118.0], [92.2, 119.0], [92.3, 119.0], [92.4, 120.0], [92.5, 121.0], [92.6, 122.0], [92.7, 122.0], [92.8, 123.0], [92.9, 124.0], [93.0, 125.0], [93.1, 126.0], [93.2, 127.0], [93.3, 128.0], [93.4, 129.0], [93.5, 129.0], [93.6, 130.0], [93.7, 131.0], [93.8, 133.0], [93.9, 133.0], [94.0, 135.0], [94.1, 135.0], [94.2, 136.0], [94.3, 137.0], [94.4, 138.0], [94.5, 140.0], [94.6, 141.0], [94.7, 142.0], [94.8, 143.0], [94.9, 144.0], [95.0, 145.0], [95.1, 146.0], [95.2, 147.0], [95.3, 149.0], [95.4, 150.0], [95.5, 151.0], [95.6, 153.0], [95.7, 154.0], [95.8, 156.0], [95.9, 157.0], [96.0, 159.0], [96.1, 160.0], [96.2, 162.0], [96.3, 164.0], [96.4, 166.0], [96.5, 167.0], [96.6, 169.0], [96.7, 170.0], [96.8, 172.0], [96.9, 174.0], [97.0, 176.0], [97.1, 178.0], [97.2, 180.0], [97.3, 182.0], [97.4, 184.0], [97.5, 187.0], [97.6, 188.0], [97.7, 190.0], [97.8, 192.0], [97.9, 195.0], [98.0, 197.0], [98.1, 201.0], [98.2, 204.0], [98.3, 207.0], [98.4, 211.0], [98.5, 215.0], [98.6, 218.0], [98.7, 222.0], [98.8, 226.0], [98.9, 230.0], [99.0, 236.0], [99.1, 242.0], [99.2, 249.0], [99.3, 259.0], [99.4, 270.0], [99.5, 279.0], [99.6, 292.0], [99.7, 305.0], [99.8, 331.0], [99.9, 380.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 41944.0, "series": [{"data": [[0.0, 41944.0], [300.0, 130.0], [600.0, 3.0], [700.0, 2.0], [100.0, 4193.0], [200.0, 756.0], [400.0, 19.0], [500.0, 3.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 47042.0, "series": [{"data": [[0.0, 47042.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 96.3139448173005, "minX": 1.71925698E12, "maxY": 100.0, "series": [{"data": [[1.71925698E12, 96.35769359705012], [1.71925746E12, 100.0], [1.71925728E12, 100.0], [1.71925734E12, 100.0], [1.71925716E12, 100.0], [1.71925722E12, 100.0], [1.71925704E12, 100.0], [1.71925752E12, 100.0], [1.7192571E12, 100.0], [1.71925758E12, 96.3139448173005], [1.7192574E12, 100.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925758E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.0, "maxY": 155.0, "series": [{"data": [[2.0, 42.0], [4.0, 48.0], [5.0, 40.0], [6.0, 40.0], [7.0, 50.0], [9.0, 113.5], [10.0, 139.0], [12.0, 137.5], [13.0, 155.0], [14.0, 121.66666666666667], [15.0, 133.0], [16.0, 144.0], [17.0, 133.5], [18.0, 132.5], [19.0, 138.0], [20.0, 135.5], [21.0, 117.5], [22.0, 124.0], [23.0, 121.0], [24.0, 117.5], [25.0, 124.0], [26.0, 71.5], [27.0, 95.4], [28.0, 135.5], [29.0, 76.33333333333333], [30.0, 82.0], [31.0, 80.66666666666667], [32.0, 82.0], [33.0, 79.33333333333333], [34.0, 77.0], [35.0, 79.33333333333333], [36.0, 66.66666666666667], [37.0, 63.666666666666664], [38.0, 51.5], [39.0, 66.16666666666667], [40.0, 53.5], [41.0, 52.75], [42.0, 52.5], [43.0, 58.0], [44.0, 50.8], [45.0, 55.666666666666664], [46.0, 51.0], [47.0, 52.75], [48.0, 54.25], [49.0, 53.25], [50.0, 55.25], [51.0, 56.6], [52.0, 51.833333333333336], [53.0, 49.6], [54.0, 52.0], [55.0, 49.833333333333336], [56.0, 56.75], [57.0, 52.33333333333333], [58.0, 55.5], [59.0, 53.0], [60.0, 53.4], [61.0, 43.5], [62.0, 58.66666666666667], [63.0, 50.83333333333333], [64.0, 52.5], [65.0, 50.16666666666667], [66.0, 53.0], [67.0, 48.33333333333333], [68.0, 50.83333333333333], [69.0, 49.14285714285714], [70.0, 51.6], [71.0, 50.142857142857146], [72.0, 51.4], [73.0, 51.0], [74.0, 48.142857142857146], [75.0, 51.6], [76.0, 50.714285714285715], [77.0, 52.25], [78.0, 49.57142857142858], [79.0, 50.857142857142854], [80.0, 49.0], [81.0, 48.42857142857142], [82.0, 53.5], [83.0, 49.5], [84.0, 66.74999999999999], [85.0, 69.25], [86.0, 64.0], [87.0, 50.1], [88.0, 60.4], [89.0, 57.75], [90.0, 59.66666666666667], [91.0, 42.75], [92.0, 52.75], [93.0, 49.888888888888886], [94.0, 49.57142857142857], [95.0, 50.625], [96.0, 54.166666666666664], [97.0, 48.77777777777778], [98.0, 49.0], [99.0, 51.125], [100.0, 63.21742302328048], [1.0, 43.0]], "isOverall": false, "label": "Actors by name", "isController": false}, {"data": [[99.66401700318815, 63.19060573857562]], "isOverall": false, "label": "Actors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3519.9666666666667, "minX": 1.71925698E12, "maxY": 123457.66666666667, "series": [{"data": [[1.71925698E12, 65873.51666666666], [1.71925746E12, 123457.66666666667], [1.71925728E12, 106518.9], [1.71925734E12, 119221.55], [1.71925716E12, 101225.36666666667], [1.71925722E12, 94217.6], [1.71925704E12, 114093.95], [1.71925752E12, 96179.46666666666], [1.7192571E12, 103054.71666666666], [1.71925758E12, 30210.416666666668], [1.7192574E12, 105184.18333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71925698E12, 7737.266666666666], [1.71925746E12, 12390.75], [1.71925728E12, 12386.866666666667], [1.71925734E12, 12383.516666666666], [1.71925716E12, 12461.15], [1.71925722E12, 12532.05], [1.71925704E12, 12381.883333333333], [1.71925752E12, 12533.633333333333], [1.7192571E12, 12380.35], [1.71925758E12, 3519.9666666666667], [1.7192574E12, 12334.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925758E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 52.45563012677105, "minX": 1.71925698E12, "maxY": 70.33919119203892, "series": [{"data": [[1.71925698E12, 60.70365403955744], [1.71925746E12, 62.15511064278184], [1.71925728E12, 61.82133051742335], [1.71925734E12, 70.11270578303089], [1.71925716E12, 57.85427555927244], [1.71925722E12, 61.37147665124105], [1.71925704E12, 70.33919119203892], [1.71925752E12, 55.379627692951274], [1.7192571E12, 64.35047418335084], [1.71925758E12, 52.45563012677105], [1.7192574E12, 70.10800508259231]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925758E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 52.433258762117894, "minX": 1.71925698E12, "maxY": 70.28329451619727, "series": [{"data": [[1.71925698E12, 60.64968152866248], [1.71925746E12, 61.84931506849322], [1.71925728E12, 61.80929250263991], [1.71925734E12, 70.01287463064575], [1.71925716E12, 57.82228726740543], [1.71925722E12, 61.36684896928911], [1.71925704E12, 70.28329451619727], [1.71925752E12, 55.34156034302441], [1.7192571E12, 64.30558482613283], [1.71925758E12, 52.433258762117894], [1.7192574E12, 69.33227445997453]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925758E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71925698E12, "maxY": 1.215219577606436, "series": [{"data": [[1.71925698E12, 1.215219577606436], [1.71925746E12, 0.7860906217070582], [1.71925728E12, 0.8838437170010535], [1.71925734E12, 0.7745884339383717], [1.71925716E12, 0.7959439682207832], [1.71925722E12, 1.019983172065631], [1.71925704E12, 0.7728138894770284], [1.71925752E12, 0.7611378372725367], [1.7192571E12, 0.7679662802950465], [1.71925758E12, 0.0], [1.7192574E12, 0.7509529860228733]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925758E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.71925698E12, "maxY": 722.0, "series": [{"data": [[1.71925698E12, 351.0], [1.71925746E12, 485.0], [1.71925728E12, 722.0], [1.71925734E12, 470.0], [1.71925716E12, 322.0], [1.71925722E12, 455.0], [1.71925704E12, 381.0], [1.71925752E12, 277.0], [1.7192571E12, 310.0], [1.71925758E12, 205.0], [1.7192574E12, 675.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71925698E12, 38.0], [1.71925746E12, 38.0], [1.71925728E12, 38.0], [1.71925734E12, 38.0], [1.71925716E12, 37.0], [1.71925722E12, 38.0], [1.71925704E12, 38.0], [1.71925752E12, 38.0], [1.7192571E12, 38.0], [1.71925758E12, 39.0], [1.7192574E12, 39.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71925698E12, 95.59999999999991], [1.71925746E12, 100.0], [1.71925728E12, 86.40000000000055], [1.71925734E12, 135.0], [1.71925716E12, 89.0], [1.71925722E12, 91.5], [1.71925704E12, 133.0], [1.71925752E12, 82.0], [1.7192571E12, 108.0], [1.71925758E12, 70.0], [1.7192574E12, 130.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71925698E12, 191.15999999999985], [1.71925746E12, 212.53999999999996], [1.71925728E12, 275.6400000000003], [1.71925734E12, 269.6099999999997], [1.71925716E12, 180.15999999999985], [1.71925722E12, 260.34999999999945], [1.71925704E12, 276.7600000000002], [1.71925752E12, 168.0], [1.7192571E12, 217.0], [1.71925758E12, 153.15999999999985], [1.7192574E12, 286.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71925698E12, 47.0], [1.71925746E12, 48.0], [1.71925728E12, 47.0], [1.71925734E12, 48.0], [1.71925716E12, 47.0], [1.71925722E12, 47.0], [1.71925704E12, 50.0], [1.71925752E12, 46.0], [1.7192571E12, 48.0], [1.71925758E12, 46.0], [1.7192574E12, 51.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71925698E12, 129.0], [1.71925746E12, 135.0], [1.71925728E12, 154.19999999999982], [1.71925734E12, 185.0], [1.71925716E12, 115.0], [1.71925722E12, 141.0], [1.71925704E12, 186.0], [1.71925752E12, 104.0], [1.7192571E12, 156.0], [1.71925758E12, 89.0], [1.7192574E12, 149.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925758E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 43.0, "minX": 10.0, "maxY": 136.0, "series": [{"data": [[33.0, 45.0], [40.0, 44.0], [50.0, 43.0], [53.0, 98.0], [54.0, 45.0], [57.0, 136.0], [58.0, 44.0], [62.0, 55.5], [63.0, 48.0], [67.0, 56.0], [64.0, 60.0], [66.0, 48.5], [65.0, 48.0], [69.0, 49.0], [70.0, 52.0], [68.0, 71.0], [71.0, 48.0], [73.0, 47.0], [75.0, 46.0], [74.0, 47.0], [72.0, 48.0], [76.0, 46.0], [79.0, 47.0], [78.0, 47.0], [77.0, 46.0], [83.0, 48.0], [80.0, 47.0], [81.0, 47.0], [82.0, 47.0], [84.0, 47.0], [85.0, 48.0], [86.0, 48.0], [87.0, 50.0], [88.0, 55.0], [89.0, 47.0], [91.0, 50.0], [90.0, 49.0], [92.0, 49.0], [94.0, 55.0], [93.0, 50.0], [95.0, 47.0], [98.0, 101.0], [96.0, 54.0], [10.0, 83.5], [18.0, 80.5], [25.0, 58.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 43.0, "minX": 10.0, "maxY": 136.0, "series": [{"data": [[33.0, 45.0], [40.0, 44.0], [50.0, 43.0], [53.0, 98.0], [54.0, 45.0], [57.0, 136.0], [58.0, 44.0], [62.0, 55.5], [63.0, 48.0], [67.0, 56.0], [64.0, 60.0], [66.0, 48.0], [65.0, 48.0], [69.0, 49.0], [70.0, 52.0], [68.0, 70.0], [71.0, 48.0], [73.0, 47.0], [75.0, 46.0], [74.0, 47.0], [72.0, 48.0], [76.0, 46.0], [79.0, 47.0], [78.0, 47.0], [77.0, 46.0], [83.0, 48.0], [80.0, 47.0], [81.0, 47.0], [82.0, 47.0], [84.0, 47.0], [85.0, 48.0], [86.0, 48.0], [87.0, 50.0], [88.0, 55.0], [89.0, 47.0], [91.0, 50.0], [90.0, 49.0], [92.0, 49.0], [94.0, 55.0], [93.0, 50.0], [95.0, 47.0], [98.0, 100.0], [96.0, 54.0], [10.0, 83.5], [18.0, 80.5], [25.0, 58.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.233333333333334, "minX": 1.71925698E12, "maxY": 79.71666666666667, "series": [{"data": [[1.71925698E12, 49.78333333333333], [1.71925746E12, 79.1], [1.71925728E12, 79.0], [1.71925734E12, 78.81666666666666], [1.71925716E12, 79.7], [1.71925722E12, 79.33333333333333], [1.71925704E12, 78.7], [1.71925752E12, 79.71666666666667], [1.7192571E12, 79.06666666666666], [1.71925758E12, 22.233333333333334], [1.7192574E12, 78.71666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925758E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 22.35, "minX": 1.71925698E12, "maxY": 79.71666666666667, "series": [{"data": [[1.71925698E12, 49.71666666666667], [1.71925746E12, 79.08333333333333], [1.71925728E12, 78.91666666666667], [1.71925734E12, 78.96666666666667], [1.71925716E12, 79.71666666666667], [1.71925722E12, 79.23333333333333], [1.71925704E12, 78.71666666666667], [1.71925752E12, 79.68333333333334], [1.7192571E12, 79.08333333333333], [1.71925758E12, 22.35], [1.7192574E12, 78.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925758E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 22.35, "minX": 1.71925698E12, "maxY": 79.71666666666667, "series": [{"data": [[1.71925698E12, 49.71666666666667], [1.71925746E12, 79.08333333333333], [1.71925728E12, 78.91666666666667], [1.71925734E12, 78.96666666666667], [1.71925716E12, 79.71666666666667], [1.71925722E12, 79.23333333333333], [1.71925704E12, 78.71666666666667], [1.71925752E12, 79.68333333333334], [1.7192571E12, 79.08333333333333], [1.71925758E12, 22.35], [1.7192574E12, 78.7]], "isOverall": false, "label": "Actors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925758E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 22.35, "minX": 1.71925698E12, "maxY": 79.71666666666667, "series": [{"data": [[1.71925698E12, 49.71666666666667], [1.71925746E12, 79.08333333333333], [1.71925728E12, 78.91666666666667], [1.71925734E12, 78.96666666666667], [1.71925716E12, 79.71666666666667], [1.71925722E12, 79.23333333333333], [1.71925704E12, 78.71666666666667], [1.71925752E12, 79.68333333333334], [1.7192571E12, 79.08333333333333], [1.71925758E12, 22.35], [1.7192574E12, 78.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925758E12, "title": "Total Transactions Per Second"}},
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

