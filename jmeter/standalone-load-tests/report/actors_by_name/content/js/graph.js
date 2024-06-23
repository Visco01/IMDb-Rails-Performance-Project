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
        data: {"result": {"minY": 37.0, "minX": 0.0, "maxY": 3017.0, "series": [{"data": [[0.0, 37.0], [0.1, 38.0], [0.2, 39.0], [0.3, 39.0], [0.4, 39.0], [0.5, 39.0], [0.6, 39.0], [0.7, 40.0], [0.8, 40.0], [0.9, 40.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 40.0], [1.5, 40.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 41.0], [2.3, 41.0], [2.4, 41.0], [2.5, 41.0], [2.6, 41.0], [2.7, 41.0], [2.8, 41.0], [2.9, 41.0], [3.0, 41.0], [3.1, 41.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 42.0], [3.7, 42.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 42.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 42.0], [4.9, 42.0], [5.0, 42.0], [5.1, 42.0], [5.2, 42.0], [5.3, 42.0], [5.4, 42.0], [5.5, 42.0], [5.6, 42.0], [5.7, 42.0], [5.8, 42.0], [5.9, 42.0], [6.0, 42.0], [6.1, 42.0], [6.2, 42.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 43.0], [9.5, 43.0], [9.6, 43.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 43.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 43.0], [11.6, 43.0], [11.7, 43.0], [11.8, 43.0], [11.9, 43.0], [12.0, 43.0], [12.1, 43.0], [12.2, 43.0], [12.3, 43.0], [12.4, 43.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 43.0], [13.2, 43.0], [13.3, 43.0], [13.4, 43.0], [13.5, 43.0], [13.6, 43.0], [13.7, 43.0], [13.8, 43.0], [13.9, 43.0], [14.0, 43.0], [14.1, 43.0], [14.2, 43.0], [14.3, 43.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 44.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 44.0], [15.4, 44.0], [15.5, 44.0], [15.6, 44.0], [15.7, 44.0], [15.8, 44.0], [15.9, 44.0], [16.0, 44.0], [16.1, 44.0], [16.2, 44.0], [16.3, 44.0], [16.4, 44.0], [16.5, 44.0], [16.6, 44.0], [16.7, 44.0], [16.8, 44.0], [16.9, 44.0], [17.0, 44.0], [17.1, 44.0], [17.2, 44.0], [17.3, 44.0], [17.4, 44.0], [17.5, 44.0], [17.6, 44.0], [17.7, 44.0], [17.8, 44.0], [17.9, 44.0], [18.0, 44.0], [18.1, 44.0], [18.2, 44.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 44.0], [19.0, 44.0], [19.1, 44.0], [19.2, 44.0], [19.3, 44.0], [19.4, 44.0], [19.5, 44.0], [19.6, 44.0], [19.7, 44.0], [19.8, 44.0], [19.9, 44.0], [20.0, 44.0], [20.1, 44.0], [20.2, 44.0], [20.3, 44.0], [20.4, 44.0], [20.5, 44.0], [20.6, 44.0], [20.7, 44.0], [20.8, 44.0], [20.9, 44.0], [21.0, 44.0], [21.1, 44.0], [21.2, 44.0], [21.3, 45.0], [21.4, 45.0], [21.5, 45.0], [21.6, 45.0], [21.7, 45.0], [21.8, 45.0], [21.9, 45.0], [22.0, 45.0], [22.1, 45.0], [22.2, 45.0], [22.3, 45.0], [22.4, 45.0], [22.5, 45.0], [22.6, 45.0], [22.7, 45.0], [22.8, 45.0], [22.9, 45.0], [23.0, 45.0], [23.1, 45.0], [23.2, 45.0], [23.3, 45.0], [23.4, 45.0], [23.5, 45.0], [23.6, 45.0], [23.7, 45.0], [23.8, 45.0], [23.9, 45.0], [24.0, 45.0], [24.1, 45.0], [24.2, 45.0], [24.3, 45.0], [24.4, 45.0], [24.5, 45.0], [24.6, 45.0], [24.7, 45.0], [24.8, 45.0], [24.9, 45.0], [25.0, 45.0], [25.1, 45.0], [25.2, 45.0], [25.3, 45.0], [25.4, 45.0], [25.5, 45.0], [25.6, 45.0], [25.7, 45.0], [25.8, 45.0], [25.9, 45.0], [26.0, 45.0], [26.1, 45.0], [26.2, 45.0], [26.3, 45.0], [26.4, 46.0], [26.5, 46.0], [26.6, 46.0], [26.7, 46.0], [26.8, 46.0], [26.9, 46.0], [27.0, 46.0], [27.1, 46.0], [27.2, 46.0], [27.3, 46.0], [27.4, 46.0], [27.5, 46.0], [27.6, 46.0], [27.7, 46.0], [27.8, 46.0], [27.9, 46.0], [28.0, 46.0], [28.1, 46.0], [28.2, 46.0], [28.3, 46.0], [28.4, 46.0], [28.5, 46.0], [28.6, 46.0], [28.7, 46.0], [28.8, 46.0], [28.9, 46.0], [29.0, 46.0], [29.1, 46.0], [29.2, 46.0], [29.3, 46.0], [29.4, 46.0], [29.5, 46.0], [29.6, 46.0], [29.7, 46.0], [29.8, 46.0], [29.9, 46.0], [30.0, 46.0], [30.1, 46.0], [30.2, 46.0], [30.3, 46.0], [30.4, 46.0], [30.5, 46.0], [30.6, 47.0], [30.7, 47.0], [30.8, 47.0], [30.9, 47.0], [31.0, 47.0], [31.1, 47.0], [31.2, 47.0], [31.3, 47.0], [31.4, 47.0], [31.5, 47.0], [31.6, 47.0], [31.7, 47.0], [31.8, 47.0], [31.9, 47.0], [32.0, 47.0], [32.1, 47.0], [32.2, 47.0], [32.3, 47.0], [32.4, 47.0], [32.5, 47.0], [32.6, 47.0], [32.7, 47.0], [32.8, 47.0], [32.9, 47.0], [33.0, 47.0], [33.1, 47.0], [33.2, 47.0], [33.3, 47.0], [33.4, 47.0], [33.5, 47.0], [33.6, 47.0], [33.7, 47.0], [33.8, 47.0], [33.9, 47.0], [34.0, 47.0], [34.1, 47.0], [34.2, 47.0], [34.3, 48.0], [34.4, 48.0], [34.5, 48.0], [34.6, 48.0], [34.7, 48.0], [34.8, 48.0], [34.9, 48.0], [35.0, 48.0], [35.1, 48.0], [35.2, 48.0], [35.3, 48.0], [35.4, 48.0], [35.5, 48.0], [35.6, 48.0], [35.7, 48.0], [35.8, 48.0], [35.9, 48.0], [36.0, 48.0], [36.1, 48.0], [36.2, 48.0], [36.3, 48.0], [36.4, 48.0], [36.5, 48.0], [36.6, 48.0], [36.7, 48.0], [36.8, 48.0], [36.9, 48.0], [37.0, 48.0], [37.1, 48.0], [37.2, 48.0], [37.3, 48.0], [37.4, 48.0], [37.5, 48.0], [37.6, 48.0], [37.7, 48.0], [37.8, 49.0], [37.9, 49.0], [38.0, 49.0], [38.1, 49.0], [38.2, 49.0], [38.3, 49.0], [38.4, 49.0], [38.5, 49.0], [38.6, 49.0], [38.7, 49.0], [38.8, 49.0], [38.9, 49.0], [39.0, 49.0], [39.1, 49.0], [39.2, 49.0], [39.3, 49.0], [39.4, 49.0], [39.5, 49.0], [39.6, 49.0], [39.7, 49.0], [39.8, 49.0], [39.9, 49.0], [40.0, 49.0], [40.1, 49.0], [40.2, 49.0], [40.3, 49.0], [40.4, 49.0], [40.5, 49.0], [40.6, 49.0], [40.7, 49.0], [40.8, 49.0], [40.9, 49.0], [41.0, 49.0], [41.1, 50.0], [41.2, 50.0], [41.3, 50.0], [41.4, 50.0], [41.5, 50.0], [41.6, 50.0], [41.7, 50.0], [41.8, 50.0], [41.9, 50.0], [42.0, 50.0], [42.1, 50.0], [42.2, 50.0], [42.3, 50.0], [42.4, 50.0], [42.5, 50.0], [42.6, 50.0], [42.7, 50.0], [42.8, 50.0], [42.9, 50.0], [43.0, 50.0], [43.1, 50.0], [43.2, 50.0], [43.3, 50.0], [43.4, 50.0], [43.5, 50.0], [43.6, 50.0], [43.7, 50.0], [43.8, 50.0], [43.9, 50.0], [44.0, 50.0], [44.1, 51.0], [44.2, 51.0], [44.3, 51.0], [44.4, 51.0], [44.5, 51.0], [44.6, 51.0], [44.7, 51.0], [44.8, 51.0], [44.9, 51.0], [45.0, 51.0], [45.1, 51.0], [45.2, 51.0], [45.3, 51.0], [45.4, 51.0], [45.5, 51.0], [45.6, 51.0], [45.7, 51.0], [45.8, 51.0], [45.9, 51.0], [46.0, 51.0], [46.1, 51.0], [46.2, 51.0], [46.3, 51.0], [46.4, 51.0], [46.5, 51.0], [46.6, 51.0], [46.7, 51.0], [46.8, 51.0], [46.9, 51.0], [47.0, 52.0], [47.1, 52.0], [47.2, 52.0], [47.3, 52.0], [47.4, 52.0], [47.5, 52.0], [47.6, 52.0], [47.7, 52.0], [47.8, 52.0], [47.9, 52.0], [48.0, 52.0], [48.1, 52.0], [48.2, 52.0], [48.3, 52.0], [48.4, 52.0], [48.5, 52.0], [48.6, 52.0], [48.7, 52.0], [48.8, 52.0], [48.9, 52.0], [49.0, 52.0], [49.1, 52.0], [49.2, 52.0], [49.3, 52.0], [49.4, 52.0], [49.5, 52.0], [49.6, 53.0], [49.7, 53.0], [49.8, 53.0], [49.9, 53.0], [50.0, 53.0], [50.1, 53.0], [50.2, 53.0], [50.3, 53.0], [50.4, 53.0], [50.5, 53.0], [50.6, 53.0], [50.7, 53.0], [50.8, 53.0], [50.9, 53.0], [51.0, 53.0], [51.1, 53.0], [51.2, 53.0], [51.3, 53.0], [51.4, 53.0], [51.5, 53.0], [51.6, 53.0], [51.7, 53.0], [51.8, 53.0], [51.9, 53.0], [52.0, 53.0], [52.1, 53.0], [52.2, 54.0], [52.3, 54.0], [52.4, 54.0], [52.5, 54.0], [52.6, 54.0], [52.7, 54.0], [52.8, 54.0], [52.9, 54.0], [53.0, 54.0], [53.1, 54.0], [53.2, 54.0], [53.3, 54.0], [53.4, 54.0], [53.5, 54.0], [53.6, 54.0], [53.7, 54.0], [53.8, 54.0], [53.9, 54.0], [54.0, 54.0], [54.1, 54.0], [54.2, 54.0], [54.3, 54.0], [54.4, 54.0], [54.5, 54.0], [54.6, 54.0], [54.7, 55.0], [54.8, 55.0], [54.9, 55.0], [55.0, 55.0], [55.1, 55.0], [55.2, 55.0], [55.3, 55.0], [55.4, 55.0], [55.5, 55.0], [55.6, 55.0], [55.7, 55.0], [55.8, 55.0], [55.9, 55.0], [56.0, 55.0], [56.1, 55.0], [56.2, 55.0], [56.3, 55.0], [56.4, 55.0], [56.5, 55.0], [56.6, 55.0], [56.7, 55.0], [56.8, 55.0], [56.9, 56.0], [57.0, 56.0], [57.1, 56.0], [57.2, 56.0], [57.3, 56.0], [57.4, 56.0], [57.5, 56.0], [57.6, 56.0], [57.7, 56.0], [57.8, 56.0], [57.9, 56.0], [58.0, 56.0], [58.1, 56.0], [58.2, 56.0], [58.3, 56.0], [58.4, 56.0], [58.5, 56.0], [58.6, 56.0], [58.7, 56.0], [58.8, 56.0], [58.9, 56.0], [59.0, 56.0], [59.1, 57.0], [59.2, 57.0], [59.3, 57.0], [59.4, 57.0], [59.5, 57.0], [59.6, 57.0], [59.7, 57.0], [59.8, 57.0], [59.9, 57.0], [60.0, 57.0], [60.1, 57.0], [60.2, 57.0], [60.3, 57.0], [60.4, 57.0], [60.5, 57.0], [60.6, 57.0], [60.7, 57.0], [60.8, 57.0], [60.9, 57.0], [61.0, 58.0], [61.1, 58.0], [61.2, 58.0], [61.3, 58.0], [61.4, 58.0], [61.5, 58.0], [61.6, 58.0], [61.7, 58.0], [61.8, 58.0], [61.9, 58.0], [62.0, 58.0], [62.1, 58.0], [62.2, 58.0], [62.3, 58.0], [62.4, 58.0], [62.5, 58.0], [62.6, 58.0], [62.7, 58.0], [62.8, 58.0], [62.9, 59.0], [63.0, 59.0], [63.1, 59.0], [63.2, 59.0], [63.3, 59.0], [63.4, 59.0], [63.5, 59.0], [63.6, 59.0], [63.7, 59.0], [63.8, 59.0], [63.9, 59.0], [64.0, 59.0], [64.1, 59.0], [64.2, 59.0], [64.3, 59.0], [64.4, 59.0], [64.5, 60.0], [64.6, 60.0], [64.7, 60.0], [64.8, 60.0], [64.9, 60.0], [65.0, 60.0], [65.1, 60.0], [65.2, 60.0], [65.3, 60.0], [65.4, 60.0], [65.5, 60.0], [65.6, 60.0], [65.7, 60.0], [65.8, 60.0], [65.9, 60.0], [66.0, 61.0], [66.1, 61.0], [66.2, 61.0], [66.3, 61.0], [66.4, 61.0], [66.5, 61.0], [66.6, 61.0], [66.7, 61.0], [66.8, 61.0], [66.9, 61.0], [67.0, 61.0], [67.1, 61.0], [67.2, 61.0], [67.3, 61.0], [67.4, 61.0], [67.5, 61.0], [67.6, 62.0], [67.7, 62.0], [67.8, 62.0], [67.9, 62.0], [68.0, 62.0], [68.1, 62.0], [68.2, 62.0], [68.3, 62.0], [68.4, 62.0], [68.5, 62.0], [68.6, 62.0], [68.7, 62.0], [68.8, 62.0], [68.9, 63.0], [69.0, 63.0], [69.1, 63.0], [69.2, 63.0], [69.3, 63.0], [69.4, 63.0], [69.5, 63.0], [69.6, 63.0], [69.7, 63.0], [69.8, 63.0], [69.9, 63.0], [70.0, 63.0], [70.1, 63.0], [70.2, 64.0], [70.3, 64.0], [70.4, 64.0], [70.5, 64.0], [70.6, 64.0], [70.7, 64.0], [70.8, 64.0], [70.9, 64.0], [71.0, 64.0], [71.1, 64.0], [71.2, 64.0], [71.3, 64.0], [71.4, 64.0], [71.5, 65.0], [71.6, 65.0], [71.7, 65.0], [71.8, 65.0], [71.9, 65.0], [72.0, 65.0], [72.1, 65.0], [72.2, 65.0], [72.3, 65.0], [72.4, 65.0], [72.5, 65.0], [72.6, 65.0], [72.7, 66.0], [72.8, 66.0], [72.9, 66.0], [73.0, 66.0], [73.1, 66.0], [73.2, 66.0], [73.3, 66.0], [73.4, 66.0], [73.5, 66.0], [73.6, 67.0], [73.7, 67.0], [73.8, 67.0], [73.9, 67.0], [74.0, 67.0], [74.1, 67.0], [74.2, 67.0], [74.3, 67.0], [74.4, 67.0], [74.5, 67.0], [74.6, 68.0], [74.7, 68.0], [74.8, 68.0], [74.9, 68.0], [75.0, 68.0], [75.1, 68.0], [75.2, 68.0], [75.3, 68.0], [75.4, 69.0], [75.5, 69.0], [75.6, 69.0], [75.7, 69.0], [75.8, 69.0], [75.9, 69.0], [76.0, 69.0], [76.1, 69.0], [76.2, 69.0], [76.3, 69.0], [76.4, 70.0], [76.5, 70.0], [76.6, 70.0], [76.7, 70.0], [76.8, 70.0], [76.9, 70.0], [77.0, 70.0], [77.1, 71.0], [77.2, 71.0], [77.3, 71.0], [77.4, 71.0], [77.5, 71.0], [77.6, 71.0], [77.7, 71.0], [77.8, 71.0], [77.9, 72.0], [78.0, 72.0], [78.1, 72.0], [78.2, 72.0], [78.3, 72.0], [78.4, 72.0], [78.5, 72.0], [78.6, 73.0], [78.7, 73.0], [78.8, 73.0], [78.9, 73.0], [79.0, 73.0], [79.1, 73.0], [79.2, 74.0], [79.3, 74.0], [79.4, 74.0], [79.5, 74.0], [79.6, 74.0], [79.7, 74.0], [79.8, 74.0], [79.9, 75.0], [80.0, 75.0], [80.1, 75.0], [80.2, 75.0], [80.3, 75.0], [80.4, 75.0], [80.5, 76.0], [80.6, 76.0], [80.7, 76.0], [80.8, 76.0], [80.9, 76.0], [81.0, 77.0], [81.1, 77.0], [81.2, 77.0], [81.3, 77.0], [81.4, 77.0], [81.5, 77.0], [81.6, 78.0], [81.7, 78.0], [81.8, 78.0], [81.9, 78.0], [82.0, 78.0], [82.1, 79.0], [82.2, 79.0], [82.3, 79.0], [82.4, 79.0], [82.5, 79.0], [82.6, 80.0], [82.7, 80.0], [82.8, 80.0], [82.9, 80.0], [83.0, 80.0], [83.1, 81.0], [83.2, 81.0], [83.3, 81.0], [83.4, 81.0], [83.5, 81.0], [83.6, 82.0], [83.7, 82.0], [83.8, 82.0], [83.9, 82.0], [84.0, 82.0], [84.1, 83.0], [84.2, 83.0], [84.3, 83.0], [84.4, 83.0], [84.5, 84.0], [84.6, 84.0], [84.7, 84.0], [84.8, 84.0], [84.9, 84.0], [85.0, 85.0], [85.1, 85.0], [85.2, 85.0], [85.3, 86.0], [85.4, 86.0], [85.5, 86.0], [85.6, 86.0], [85.7, 87.0], [85.8, 87.0], [85.9, 87.0], [86.0, 87.0], [86.1, 88.0], [86.2, 88.0], [86.3, 88.0], [86.4, 89.0], [86.5, 89.0], [86.6, 89.0], [86.7, 90.0], [86.8, 90.0], [86.9, 90.0], [87.0, 91.0], [87.1, 91.0], [87.2, 91.0], [87.3, 92.0], [87.4, 92.0], [87.5, 93.0], [87.6, 93.0], [87.7, 93.0], [87.8, 94.0], [87.9, 94.0], [88.0, 95.0], [88.1, 95.0], [88.2, 95.0], [88.3, 96.0], [88.4, 96.0], [88.5, 97.0], [88.6, 97.0], [88.7, 98.0], [88.8, 98.0], [88.9, 99.0], [89.0, 99.0], [89.1, 100.0], [89.2, 100.0], [89.3, 100.0], [89.4, 101.0], [89.5, 101.0], [89.6, 102.0], [89.7, 102.0], [89.8, 102.0], [89.9, 103.0], [90.0, 103.0], [90.1, 104.0], [90.2, 105.0], [90.3, 105.0], [90.4, 105.0], [90.5, 106.0], [90.6, 107.0], [90.7, 107.0], [90.8, 108.0], [90.9, 108.0], [91.0, 109.0], [91.1, 109.0], [91.2, 109.0], [91.3, 110.0], [91.4, 110.0], [91.5, 111.0], [91.6, 111.0], [91.7, 112.0], [91.8, 113.0], [91.9, 113.0], [92.0, 114.0], [92.1, 115.0], [92.2, 115.0], [92.3, 116.0], [92.4, 117.0], [92.5, 117.0], [92.6, 118.0], [92.7, 118.0], [92.8, 119.0], [92.9, 120.0], [93.0, 120.0], [93.1, 121.0], [93.2, 122.0], [93.3, 123.0], [93.4, 124.0], [93.5, 124.0], [93.6, 125.0], [93.7, 126.0], [93.8, 127.0], [93.9, 128.0], [94.0, 129.0], [94.1, 130.0], [94.2, 131.0], [94.3, 133.0], [94.4, 134.0], [94.5, 135.0], [94.6, 136.0], [94.7, 137.0], [94.8, 139.0], [94.9, 140.0], [95.0, 141.0], [95.1, 143.0], [95.2, 145.0], [95.3, 146.0], [95.4, 148.0], [95.5, 149.0], [95.6, 151.0], [95.7, 153.0], [95.8, 154.0], [95.9, 156.0], [96.0, 158.0], [96.1, 161.0], [96.2, 163.0], [96.3, 165.0], [96.4, 168.0], [96.5, 170.0], [96.6, 173.0], [96.7, 175.0], [96.8, 178.0], [96.9, 180.0], [97.0, 183.0], [97.1, 186.0], [97.2, 188.0], [97.3, 192.0], [97.4, 195.0], [97.5, 198.0], [97.6, 202.0], [97.7, 206.0], [97.8, 210.0], [97.9, 214.0], [98.0, 219.0], [98.1, 225.0], [98.2, 228.0], [98.3, 234.0], [98.4, 243.0], [98.5, 252.0], [98.6, 259.0], [98.7, 265.0], [98.8, 275.0], [98.9, 284.0], [99.0, 295.0], [99.1, 314.0], [99.2, 330.0], [99.3, 355.0], [99.4, 384.0], [99.5, 420.0], [99.6, 478.0], [99.7, 555.0], [99.8, 785.0], [99.9, 1165.0], [100.0, 3017.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 41722.0, "series": [{"data": [[0.0, 41722.0], [2100.0, 1.0], [2200.0, 1.0], [600.0, 7.0], [2400.0, 6.0], [700.0, 25.0], [2700.0, 2.0], [3000.0, 2.0], [200.0, 700.0], [800.0, 6.0], [900.0, 13.0], [1000.0, 6.0], [1100.0, 18.0], [300.0, 192.0], [1200.0, 20.0], [1300.0, 10.0], [1400.0, 3.0], [400.0, 91.0], [100.0, 3965.0], [500.0, 51.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 46670.0, "series": [{"data": [[0.0, 46670.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 159.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 95.81748726655351, "minX": 1.71915642E12, "maxY": 100.0, "series": [{"data": [[1.71915666E12, 100.0], [1.71915648E12, 100.0], [1.71915696E12, 100.0], [1.71915654E12, 100.0], [1.71915702E12, 95.81748726655351], [1.71915684E12, 100.0], [1.71915642E12, 96.7107299024556], [1.7191569E12, 100.0], [1.71915672E12, 100.0], [1.71915678E12, 100.0], [1.7191566E12, 100.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915702E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 43.0, "minX": 2.0, "maxY": 381.5, "series": [{"data": [[2.0, 66.0], [4.0, 76.5], [6.0, 73.0], [7.0, 58.0], [8.0, 92.0], [9.0, 67.0], [10.0, 56.0], [12.0, 92.0], [13.0, 85.0], [14.0, 57.0], [15.0, 53.0], [16.0, 333.0], [17.0, 62.0], [18.0, 381.5], [19.0, 301.0], [20.0, 113.75], [21.0, 156.5], [22.0, 278.0], [23.0, 56.0], [24.0, 316.0], [25.0, 136.0], [26.0, 321.0], [27.0, 190.25], [28.0, 50.0], [29.0, 269.0], [30.0, 53.5], [31.0, 165.33333333333334], [32.0, 165.6], [33.0, 86.8], [34.0, 127.33333333333334], [35.0, 101.33333333333333], [36.0, 102.33333333333333], [37.0, 124.0], [38.0, 63.0], [39.0, 164.5], [40.0, 89.5], [41.0, 170.0], [42.0, 111.8], [43.0, 82.0], [44.0, 126.4], [45.0, 109.75], [46.0, 71.75], [47.0, 74.25], [48.0, 73.0], [49.0, 80.25], [50.0, 51.25], [51.0, 88.66666666666667], [52.0, 60.5], [53.0, 92.5], [54.0, 64.5], [55.0, 80.5], [56.0, 122.0], [57.0, 57.8], [58.0, 107.14285714285714], [59.0, 106.33333333333334], [60.0, 121.6], [61.0, 126.85714285714286], [62.0, 102.2], [63.0, 52.0], [64.0, 161.28571428571428], [66.0, 176.57142857142856], [67.0, 135.42857142857142], [65.0, 43.0], [70.0, 213.53846153846152], [71.0, 155.70000000000002], [69.0, 47.0], [68.0, 54.0], [72.0, 109.85714285714285], [73.0, 147.0], [74.0, 106.4], [75.0, 47.0], [76.0, 205.2], [77.0, 186.0], [79.0, 255.0], [78.0, 47.0], [80.0, 140.5], [81.0, 278.40000000000003], [82.0, 335.25], [83.0, 49.5], [84.0, 223.7], [85.0, 209.63636363636365], [86.0, 145.375], [87.0, 113.2], [89.0, 140.66666666666666], [90.0, 86.6], [91.0, 90.0], [88.0, 44.0], [92.0, 86.5], [93.0, 122.33333333333334], [94.0, 164.0], [95.0, 169.93333333333328], [96.0, 166.0], [97.0, 101.05555555555554], [98.0, 141.07692307692307], [99.0, 105.0], [100.0, 68.79255892110866]], "isOverall": false, "label": "Actors by name", "isController": false}, {"data": [[99.68604427744857, 69.4345765461881]], "isOverall": false, "label": "Actors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3095.95, "minX": 1.71915642E12, "maxY": 124693.46666666666, "series": [{"data": [[1.71915666E12, 95721.61666666667], [1.71915648E12, 115024.31666666667], [1.71915696E12, 96772.85], [1.71915654E12, 100518.93333333333], [1.71915702E12, 26423.433333333334], [1.71915684E12, 105432.85], [1.71915642E12, 66300.26666666666], [1.7191569E12, 124693.46666666666], [1.71915672E12, 107612.1], [1.71915678E12, 120469.73333333334], [1.7191566E12, 102341.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71915666E12, 12633.633333333333], [1.71915648E12, 12434.983333333334], [1.71915696E12, 12526.833333333334], [1.71915654E12, 11975.566666666668], [1.71915702E12, 3095.95], [1.71915684E12, 12368.383333333333], [1.71915642E12, 7710.983333333334], [1.7191569E12, 12344.916666666666], [1.71915672E12, 12494.666666666666], [1.71915678E12, 12391.283333333333], [1.7191566E12, 12516.233333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915702E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 49.25062552126778, "minX": 1.71915642E12, "maxY": 143.69559367642157, "series": [{"data": [[1.71915666E12, 49.25062552126778], [1.71915648E12, 66.40607210626233], [1.71915696E12, 55.542372881355924], [1.71915654E12, 102.98976257895866], [1.71915702E12, 55.890492359932125], [1.71915684E12, 64.08428390367573], [1.71915642E12, 143.69559367642157], [1.7191569E12, 70.0941002326074], [1.71915672E12, 61.335917854149066], [1.71915678E12, 61.188106284268144], [1.7191566E12, 52.49937552039961]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915702E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 49.240408673895026, "minX": 1.71915642E12, "maxY": 143.54423141607805, "series": [{"data": [[1.71915666E12, 49.240408673895026], [1.71915648E12, 66.32553236348286], [1.71915696E12, 55.50910232266174], [1.71915654E12, 102.9379220213459], [1.71915702E12, 55.86078098471988], [1.71915684E12, 64.05365441487115], [1.71915642E12, 143.54423141607805], [1.7191569E12, 69.96574328610703], [1.71915672E12, 61.2990360435876], [1.71915678E12, 61.078869675242395], [1.7191566E12, 52.461490424646165]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915702E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71915642E12, "maxY": 6.203005881071674, "series": [{"data": [[1.71915666E12, 0.7756463719766472], [1.71915648E12, 1.1347248576850075], [1.71915696E12, 0.8771709562669994], [1.71915654E12, 6.203005881071674], [1.71915702E12, 0.0], [1.71915684E12, 1.0181664554288115], [1.71915642E12, 3.9260006727211687], [1.7191569E12, 1.0518079932332451], [1.71915672E12, 1.2546102263202021], [1.71915678E12, 0.9945170814002515], [1.7191566E12, 0.8977935054121556]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915702E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.71915642E12, "maxY": 3017.0, "series": [{"data": [[1.71915666E12, 148.0], [1.71915648E12, 1137.0], [1.71915696E12, 144.0], [1.71915654E12, 3017.0], [1.71915702E12, 190.0], [1.71915684E12, 282.0], [1.71915642E12, 584.0], [1.7191569E12, 464.0], [1.71915672E12, 378.0], [1.71915678E12, 180.0], [1.7191566E12, 240.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71915666E12, 37.0], [1.71915648E12, 37.0], [1.71915696E12, 38.0], [1.71915654E12, 38.0], [1.71915702E12, 38.0], [1.71915684E12, 39.0], [1.71915642E12, 39.0], [1.7191569E12, 37.0], [1.71915672E12, 38.0], [1.71915678E12, 39.0], [1.7191566E12, 38.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71915666E12, 63.0], [1.71915648E12, 111.0], [1.71915696E12, 71.0], [1.71915654E12, 128.0], [1.71915702E12, 74.0], [1.71915684E12, 89.0], [1.71915642E12, 262.5999999999999], [1.7191569E12, 102.0], [1.71915672E12, 88.0], [1.71915678E12, 81.0], [1.7191566E12, 74.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71915666E12, 105.0], [1.71915648E12, 200.5600000000004], [1.71915696E12, 104.0], [1.71915654E12, 1175.5599999999977], [1.71915702E12, 140.21000000000004], [1.71915684E12, 171.0], [1.71915642E12, 408.25999999999976], [1.7191569E12, 321.6999999999998], [1.71915672E12, 180.0], [1.71915678E12, 122.56999999999971], [1.7191566E12, 122.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71915666E12, 45.0], [1.71915648E12, 50.0], [1.71915696E12, 52.0], [1.71915654E12, 52.0], [1.71915702E12, 51.0], [1.71915684E12, 57.0], [1.71915642E12, 124.0], [1.7191569E12, 55.0], [1.71915672E12, 52.0], [1.71915678E12, 57.0], [1.7191566E12, 45.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71915666E12, 77.0], [1.71915648E12, 133.0], [1.71915696E12, 81.0], [1.71915654E12, 232.59999999999854], [1.71915702E12, 88.0], [1.71915684E12, 109.0], [1.71915642E12, 303.2999999999997], [1.7191569E12, 156.5], [1.71915672E12, 112.0], [1.71915678E12, 93.84999999999945], [1.7191566E12, 91.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915702E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 44.0, "minX": 1.0, "maxY": 932.5, "series": [{"data": [[10.0, 306.0], [18.0, 932.5], [19.0, 100.5], [20.0, 46.0], [27.0, 506.0], [28.0, 69.0], [29.0, 112.0], [39.0, 70.0], [41.0, 114.0], [43.0, 51.0], [45.0, 131.0], [44.0, 49.5], [46.0, 44.0], [48.0, 133.5], [49.0, 55.0], [50.0, 67.0], [51.0, 45.0], [53.0, 48.0], [52.0, 56.0], [55.0, 62.0], [54.0, 50.0], [56.0, 52.5], [57.0, 55.0], [58.0, 74.0], [59.0, 56.0], [61.0, 55.0], [60.0, 61.0], [63.0, 57.0], [62.0, 56.0], [64.0, 98.5], [65.0, 54.0], [66.0, 53.0], [67.0, 52.0], [71.0, 49.0], [70.0, 55.0], [69.0, 53.0], [68.0, 48.0], [75.0, 51.0], [74.0, 51.0], [72.0, 50.0], [73.0, 48.0], [76.0, 51.0], [79.0, 49.0], [77.0, 52.0], [78.0, 50.0], [81.0, 52.0], [82.0, 53.0], [80.0, 52.0], [83.0, 54.0], [87.0, 57.0], [86.0, 52.0], [85.0, 55.0], [84.0, 55.0], [88.0, 55.0], [90.0, 53.0], [91.0, 54.0], [89.0, 48.0], [92.0, 58.0], [94.0, 51.0], [93.0, 52.0], [95.0, 49.0], [99.0, 92.0], [96.0, 53.0], [97.0, 49.0], [98.0, 54.0], [1.0, 333.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 44.0, "minX": 1.0, "maxY": 932.5, "series": [{"data": [[10.0, 306.0], [18.0, 932.5], [19.0, 100.5], [20.0, 46.0], [27.0, 506.0], [28.0, 68.5], [29.0, 112.0], [39.0, 70.0], [41.0, 114.0], [43.0, 51.0], [45.0, 131.0], [44.0, 48.5], [46.0, 44.0], [48.0, 133.5], [49.0, 55.0], [50.0, 67.0], [51.0, 45.0], [53.0, 48.0], [52.0, 56.0], [55.0, 62.0], [54.0, 49.5], [56.0, 52.5], [57.0, 55.0], [58.0, 74.0], [59.0, 56.0], [61.0, 55.0], [60.0, 61.0], [63.0, 57.0], [62.0, 56.0], [64.0, 98.5], [65.0, 54.0], [66.0, 53.0], [67.0, 51.0], [71.0, 49.0], [70.0, 55.0], [69.0, 53.0], [68.0, 48.0], [75.0, 51.0], [74.0, 51.0], [72.0, 50.0], [73.0, 48.0], [76.0, 50.0], [79.0, 49.0], [77.0, 52.0], [78.0, 50.0], [81.0, 52.0], [82.0, 53.0], [80.0, 52.0], [83.0, 54.0], [87.0, 57.0], [86.0, 52.0], [85.0, 54.0], [84.0, 55.0], [88.0, 55.0], [90.0, 53.0], [91.0, 54.0], [89.0, 48.0], [92.0, 58.0], [94.0, 51.0], [93.0, 52.0], [95.0, 49.0], [99.0, 92.0], [96.0, 53.0], [97.0, 49.0], [98.0, 54.0], [1.0, 333.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.55, "minX": 1.71915642E12, "maxY": 80.1, "series": [{"data": [[1.71915666E12, 79.91666666666667], [1.71915648E12, 79.06666666666666], [1.71915696E12, 79.71666666666667], [1.71915654E12, 76.5], [1.71915702E12, 19.55], [1.71915684E12, 79.01666666666667], [1.71915642E12, 49.583333333333336], [1.7191569E12, 78.7], [1.71915672E12, 79.51666666666667], [1.71915678E12, 79.01666666666667], [1.7191566E12, 80.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915702E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.633333333333333, "minX": 1.71915642E12, "maxY": 80.06666666666666, "series": [{"data": [[1.71915666E12, 79.93333333333334], [1.71915648E12, 79.05], [1.71915696E12, 79.65], [1.71915654E12, 76.51666666666667], [1.71915702E12, 19.633333333333333], [1.71915684E12, 78.9], [1.71915642E12, 49.55], [1.7191569E12, 78.81666666666666], [1.71915672E12, 79.53333333333333], [1.71915678E12, 79.03333333333333], [1.7191566E12, 80.06666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915702E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.633333333333333, "minX": 1.71915642E12, "maxY": 80.06666666666666, "series": [{"data": [[1.71915666E12, 79.93333333333334], [1.71915648E12, 79.05], [1.71915696E12, 79.65], [1.71915654E12, 76.51666666666667], [1.71915702E12, 19.633333333333333], [1.71915684E12, 78.9], [1.71915642E12, 49.55], [1.7191569E12, 78.81666666666666], [1.71915672E12, 79.53333333333333], [1.71915678E12, 79.03333333333333], [1.7191566E12, 80.06666666666666]], "isOverall": false, "label": "Actors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915702E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.633333333333333, "minX": 1.71915642E12, "maxY": 80.06666666666666, "series": [{"data": [[1.71915666E12, 79.93333333333334], [1.71915648E12, 79.05], [1.71915696E12, 79.65], [1.71915654E12, 76.51666666666667], [1.71915702E12, 19.633333333333333], [1.71915684E12, 78.9], [1.71915642E12, 49.55], [1.7191569E12, 78.81666666666666], [1.71915672E12, 79.53333333333333], [1.71915678E12, 79.03333333333333], [1.7191566E12, 80.06666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915702E12, "title": "Total Transactions Per Second"}},
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

