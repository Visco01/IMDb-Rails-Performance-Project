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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 18421.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 39.0], [0.4, 39.0], [0.5, 40.0], [0.6, 40.0], [0.7, 40.0], [0.8, 40.0], [0.9, 40.0], [1.0, 40.0], [1.1, 40.0], [1.2, 41.0], [1.3, 41.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 41.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 41.0], [2.3, 41.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 42.0], [3.1, 42.0], [3.2, 42.0], [3.3, 42.0], [3.4, 42.0], [3.5, 42.0], [3.6, 42.0], [3.7, 42.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 42.0], [4.4, 43.0], [4.5, 43.0], [4.6, 43.0], [4.7, 43.0], [4.8, 43.0], [4.9, 43.0], [5.0, 43.0], [5.1, 43.0], [5.2, 43.0], [5.3, 43.0], [5.4, 43.0], [5.5, 43.0], [5.6, 43.0], [5.7, 43.0], [5.8, 43.0], [5.9, 43.0], [6.0, 43.0], [6.1, 43.0], [6.2, 43.0], [6.3, 43.0], [6.4, 43.0], [6.5, 43.0], [6.6, 43.0], [6.7, 43.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 44.0], [12.7, 44.0], [12.8, 44.0], [12.9, 44.0], [13.0, 44.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 44.0], [13.5, 44.0], [13.6, 44.0], [13.7, 44.0], [13.8, 44.0], [13.9, 44.0], [14.0, 44.0], [14.1, 44.0], [14.2, 44.0], [14.3, 44.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 45.0], [14.8, 45.0], [14.9, 45.0], [15.0, 45.0], [15.1, 45.0], [15.2, 45.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 45.0], [16.1, 45.0], [16.2, 45.0], [16.3, 45.0], [16.4, 45.0], [16.5, 45.0], [16.6, 45.0], [16.7, 45.0], [16.8, 45.0], [16.9, 45.0], [17.0, 45.0], [17.1, 45.0], [17.2, 45.0], [17.3, 45.0], [17.4, 45.0], [17.5, 45.0], [17.6, 45.0], [17.7, 45.0], [17.8, 45.0], [17.9, 45.0], [18.0, 45.0], [18.1, 45.0], [18.2, 45.0], [18.3, 45.0], [18.4, 45.0], [18.5, 45.0], [18.6, 45.0], [18.7, 45.0], [18.8, 45.0], [18.9, 45.0], [19.0, 45.0], [19.1, 45.0], [19.2, 45.0], [19.3, 45.0], [19.4, 45.0], [19.5, 45.0], [19.6, 45.0], [19.7, 45.0], [19.8, 45.0], [19.9, 45.0], [20.0, 45.0], [20.1, 46.0], [20.2, 46.0], [20.3, 46.0], [20.4, 46.0], [20.5, 46.0], [20.6, 46.0], [20.7, 46.0], [20.8, 46.0], [20.9, 46.0], [21.0, 46.0], [21.1, 46.0], [21.2, 46.0], [21.3, 46.0], [21.4, 46.0], [21.5, 46.0], [21.6, 46.0], [21.7, 46.0], [21.8, 46.0], [21.9, 46.0], [22.0, 46.0], [22.1, 46.0], [22.2, 46.0], [22.3, 46.0], [22.4, 46.0], [22.5, 46.0], [22.6, 46.0], [22.7, 46.0], [22.8, 46.0], [22.9, 46.0], [23.0, 46.0], [23.1, 46.0], [23.2, 46.0], [23.3, 46.0], [23.4, 46.0], [23.5, 46.0], [23.6, 46.0], [23.7, 46.0], [23.8, 46.0], [23.9, 46.0], [24.0, 46.0], [24.1, 46.0], [24.2, 46.0], [24.3, 46.0], [24.4, 46.0], [24.5, 46.0], [24.6, 46.0], [24.7, 46.0], [24.8, 46.0], [24.9, 46.0], [25.0, 46.0], [25.1, 46.0], [25.2, 46.0], [25.3, 47.0], [25.4, 47.0], [25.5, 47.0], [25.6, 47.0], [25.7, 47.0], [25.8, 47.0], [25.9, 47.0], [26.0, 47.0], [26.1, 47.0], [26.2, 47.0], [26.3, 47.0], [26.4, 47.0], [26.5, 47.0], [26.6, 47.0], [26.7, 47.0], [26.8, 47.0], [26.9, 47.0], [27.0, 47.0], [27.1, 47.0], [27.2, 47.0], [27.3, 47.0], [27.4, 47.0], [27.5, 47.0], [27.6, 47.0], [27.7, 47.0], [27.8, 47.0], [27.9, 47.0], [28.0, 47.0], [28.1, 47.0], [28.2, 47.0], [28.3, 47.0], [28.4, 47.0], [28.5, 47.0], [28.6, 47.0], [28.7, 47.0], [28.8, 47.0], [28.9, 47.0], [29.0, 47.0], [29.1, 47.0], [29.2, 47.0], [29.3, 47.0], [29.4, 47.0], [29.5, 47.0], [29.6, 47.0], [29.7, 47.0], [29.8, 47.0], [29.9, 47.0], [30.0, 47.0], [30.1, 47.0], [30.2, 47.0], [30.3, 47.0], [30.4, 47.0], [30.5, 47.0], [30.6, 47.0], [30.7, 48.0], [30.8, 48.0], [30.9, 48.0], [31.0, 48.0], [31.1, 48.0], [31.2, 48.0], [31.3, 48.0], [31.4, 48.0], [31.5, 48.0], [31.6, 48.0], [31.7, 48.0], [31.8, 48.0], [31.9, 48.0], [32.0, 48.0], [32.1, 48.0], [32.2, 48.0], [32.3, 48.0], [32.4, 48.0], [32.5, 48.0], [32.6, 48.0], [32.7, 48.0], [32.8, 48.0], [32.9, 48.0], [33.0, 48.0], [33.1, 48.0], [33.2, 48.0], [33.3, 48.0], [33.4, 48.0], [33.5, 48.0], [33.6, 48.0], [33.7, 48.0], [33.8, 48.0], [33.9, 48.0], [34.0, 48.0], [34.1, 48.0], [34.2, 48.0], [34.3, 48.0], [34.4, 48.0], [34.5, 48.0], [34.6, 48.0], [34.7, 48.0], [34.8, 48.0], [34.9, 49.0], [35.0, 49.0], [35.1, 49.0], [35.2, 49.0], [35.3, 49.0], [35.4, 49.0], [35.5, 49.0], [35.6, 49.0], [35.7, 49.0], [35.8, 49.0], [35.9, 49.0], [36.0, 49.0], [36.1, 49.0], [36.2, 49.0], [36.3, 49.0], [36.4, 49.0], [36.5, 49.0], [36.6, 49.0], [36.7, 49.0], [36.8, 49.0], [36.9, 49.0], [37.0, 49.0], [37.1, 49.0], [37.2, 49.0], [37.3, 49.0], [37.4, 49.0], [37.5, 49.0], [37.6, 49.0], [37.7, 49.0], [37.8, 49.0], [37.9, 49.0], [38.0, 49.0], [38.1, 49.0], [38.2, 50.0], [38.3, 50.0], [38.4, 50.0], [38.5, 50.0], [38.6, 50.0], [38.7, 50.0], [38.8, 50.0], [38.9, 50.0], [39.0, 50.0], [39.1, 50.0], [39.2, 50.0], [39.3, 50.0], [39.4, 50.0], [39.5, 50.0], [39.6, 50.0], [39.7, 50.0], [39.8, 50.0], [39.9, 50.0], [40.0, 50.0], [40.1, 50.0], [40.2, 50.0], [40.3, 50.0], [40.4, 50.0], [40.5, 50.0], [40.6, 50.0], [40.7, 50.0], [40.8, 50.0], [40.9, 50.0], [41.0, 51.0], [41.1, 51.0], [41.2, 51.0], [41.3, 51.0], [41.4, 51.0], [41.5, 51.0], [41.6, 51.0], [41.7, 51.0], [41.8, 51.0], [41.9, 51.0], [42.0, 51.0], [42.1, 51.0], [42.2, 51.0], [42.3, 51.0], [42.4, 51.0], [42.5, 51.0], [42.6, 51.0], [42.7, 51.0], [42.8, 51.0], [42.9, 51.0], [43.0, 51.0], [43.1, 51.0], [43.2, 51.0], [43.3, 51.0], [43.4, 52.0], [43.5, 52.0], [43.6, 52.0], [43.7, 52.0], [43.8, 52.0], [43.9, 52.0], [44.0, 52.0], [44.1, 52.0], [44.2, 52.0], [44.3, 52.0], [44.4, 52.0], [44.5, 52.0], [44.6, 52.0], [44.7, 52.0], [44.8, 52.0], [44.9, 52.0], [45.0, 52.0], [45.1, 52.0], [45.2, 52.0], [45.3, 52.0], [45.4, 53.0], [45.5, 53.0], [45.6, 53.0], [45.7, 53.0], [45.8, 53.0], [45.9, 53.0], [46.0, 53.0], [46.1, 53.0], [46.2, 53.0], [46.3, 53.0], [46.4, 53.0], [46.5, 53.0], [46.6, 53.0], [46.7, 53.0], [46.8, 53.0], [46.9, 53.0], [47.0, 53.0], [47.1, 53.0], [47.2, 53.0], [47.3, 53.0], [47.4, 54.0], [47.5, 54.0], [47.6, 54.0], [47.7, 54.0], [47.8, 54.0], [47.9, 54.0], [48.0, 54.0], [48.1, 54.0], [48.2, 54.0], [48.3, 54.0], [48.4, 54.0], [48.5, 54.0], [48.6, 54.0], [48.7, 54.0], [48.8, 54.0], [48.9, 54.0], [49.0, 55.0], [49.1, 55.0], [49.2, 55.0], [49.3, 55.0], [49.4, 55.0], [49.5, 55.0], [49.6, 55.0], [49.7, 55.0], [49.8, 55.0], [49.9, 55.0], [50.0, 55.0], [50.1, 55.0], [50.2, 55.0], [50.3, 55.0], [50.4, 56.0], [50.5, 56.0], [50.6, 56.0], [50.7, 56.0], [50.8, 56.0], [50.9, 56.0], [51.0, 56.0], [51.1, 56.0], [51.2, 56.0], [51.3, 56.0], [51.4, 56.0], [51.5, 56.0], [51.6, 56.0], [51.7, 57.0], [51.8, 57.0], [51.9, 57.0], [52.0, 57.0], [52.1, 57.0], [52.2, 57.0], [52.3, 57.0], [52.4, 57.0], [52.5, 57.0], [52.6, 57.0], [52.7, 57.0], [52.8, 57.0], [52.9, 58.0], [53.0, 58.0], [53.1, 58.0], [53.2, 58.0], [53.3, 58.0], [53.4, 58.0], [53.5, 58.0], [53.6, 58.0], [53.7, 58.0], [53.8, 58.0], [53.9, 58.0], [54.0, 58.0], [54.1, 59.0], [54.2, 59.0], [54.3, 59.0], [54.4, 59.0], [54.5, 59.0], [54.6, 59.0], [54.7, 59.0], [54.8, 59.0], [54.9, 59.0], [55.0, 59.0], [55.1, 59.0], [55.2, 60.0], [55.3, 60.0], [55.4, 60.0], [55.5, 60.0], [55.6, 60.0], [55.7, 60.0], [55.8, 60.0], [55.9, 60.0], [56.0, 60.0], [56.1, 60.0], [56.2, 61.0], [56.3, 61.0], [56.4, 61.0], [56.5, 61.0], [56.6, 61.0], [56.7, 61.0], [56.8, 61.0], [56.9, 61.0], [57.0, 61.0], [57.1, 62.0], [57.2, 62.0], [57.3, 62.0], [57.4, 62.0], [57.5, 62.0], [57.6, 62.0], [57.7, 62.0], [57.8, 62.0], [57.9, 62.0], [58.0, 63.0], [58.1, 63.0], [58.2, 63.0], [58.3, 63.0], [58.4, 63.0], [58.5, 63.0], [58.6, 63.0], [58.7, 63.0], [58.8, 63.0], [58.9, 63.0], [59.0, 64.0], [59.1, 64.0], [59.2, 64.0], [59.3, 64.0], [59.4, 64.0], [59.5, 64.0], [59.6, 64.0], [59.7, 64.0], [59.8, 64.0], [59.9, 65.0], [60.0, 65.0], [60.1, 65.0], [60.2, 65.0], [60.3, 65.0], [60.4, 65.0], [60.5, 65.0], [60.6, 65.0], [60.7, 66.0], [60.8, 66.0], [60.9, 66.0], [61.0, 66.0], [61.1, 66.0], [61.2, 66.0], [61.3, 66.0], [61.4, 66.0], [61.5, 67.0], [61.6, 67.0], [61.7, 67.0], [61.8, 67.0], [61.9, 67.0], [62.0, 67.0], [62.1, 67.0], [62.2, 67.0], [62.3, 68.0], [62.4, 68.0], [62.5, 68.0], [62.6, 68.0], [62.7, 68.0], [62.8, 68.0], [62.9, 68.0], [63.0, 68.0], [63.1, 69.0], [63.2, 69.0], [63.3, 69.0], [63.4, 69.0], [63.5, 69.0], [63.6, 69.0], [63.7, 69.0], [63.8, 70.0], [63.9, 70.0], [64.0, 70.0], [64.1, 70.0], [64.2, 70.0], [64.3, 70.0], [64.4, 70.0], [64.5, 71.0], [64.6, 71.0], [64.7, 71.0], [64.8, 71.0], [64.9, 71.0], [65.0, 71.0], [65.1, 71.0], [65.2, 72.0], [65.3, 72.0], [65.4, 72.0], [65.5, 72.0], [65.6, 72.0], [65.7, 72.0], [65.8, 72.0], [65.9, 73.0], [66.0, 73.0], [66.1, 73.0], [66.2, 73.0], [66.3, 73.0], [66.4, 73.0], [66.5, 73.0], [66.6, 74.0], [66.7, 74.0], [66.8, 74.0], [66.9, 74.0], [67.0, 74.0], [67.1, 74.0], [67.2, 74.0], [67.3, 75.0], [67.4, 75.0], [67.5, 75.0], [67.6, 75.0], [67.7, 75.0], [67.8, 75.0], [67.9, 76.0], [68.0, 76.0], [68.1, 76.0], [68.2, 76.0], [68.3, 76.0], [68.4, 76.0], [68.5, 77.0], [68.6, 77.0], [68.7, 77.0], [68.8, 77.0], [68.9, 77.0], [69.0, 78.0], [69.1, 78.0], [69.2, 78.0], [69.3, 78.0], [69.4, 78.0], [69.5, 79.0], [69.6, 79.0], [69.7, 79.0], [69.8, 79.0], [69.9, 79.0], [70.0, 79.0], [70.1, 80.0], [70.2, 80.0], [70.3, 80.0], [70.4, 80.0], [70.5, 80.0], [70.6, 80.0], [70.7, 81.0], [70.8, 81.0], [70.9, 81.0], [71.0, 81.0], [71.1, 81.0], [71.2, 81.0], [71.3, 82.0], [71.4, 82.0], [71.5, 82.0], [71.6, 82.0], [71.7, 82.0], [71.8, 82.0], [71.9, 82.0], [72.0, 83.0], [72.1, 83.0], [72.2, 83.0], [72.3, 83.0], [72.4, 83.0], [72.5, 84.0], [72.6, 84.0], [72.7, 84.0], [72.8, 84.0], [72.9, 84.0], [73.0, 85.0], [73.1, 85.0], [73.2, 85.0], [73.3, 85.0], [73.4, 85.0], [73.5, 86.0], [73.6, 86.0], [73.7, 86.0], [73.8, 86.0], [73.9, 86.0], [74.0, 87.0], [74.1, 87.0], [74.2, 87.0], [74.3, 87.0], [74.4, 87.0], [74.5, 88.0], [74.6, 88.0], [74.7, 88.0], [74.8, 88.0], [74.9, 89.0], [75.0, 89.0], [75.1, 89.0], [75.2, 89.0], [75.3, 90.0], [75.4, 90.0], [75.5, 90.0], [75.6, 90.0], [75.7, 91.0], [75.8, 91.0], [75.9, 91.0], [76.0, 91.0], [76.1, 92.0], [76.2, 92.0], [76.3, 92.0], [76.4, 92.0], [76.5, 93.0], [76.6, 93.0], [76.7, 93.0], [76.8, 93.0], [76.9, 94.0], [77.0, 94.0], [77.1, 94.0], [77.2, 95.0], [77.3, 95.0], [77.4, 95.0], [77.5, 95.0], [77.6, 96.0], [77.7, 96.0], [77.8, 96.0], [77.9, 96.0], [78.0, 97.0], [78.1, 97.0], [78.2, 97.0], [78.3, 98.0], [78.4, 98.0], [78.5, 99.0], [78.6, 99.0], [78.7, 99.0], [78.8, 99.0], [78.9, 100.0], [79.0, 100.0], [79.1, 100.0], [79.2, 101.0], [79.3, 101.0], [79.4, 101.0], [79.5, 102.0], [79.6, 102.0], [79.7, 102.0], [79.8, 103.0], [79.9, 103.0], [80.0, 103.0], [80.1, 104.0], [80.2, 104.0], [80.3, 104.0], [80.4, 105.0], [80.5, 105.0], [80.6, 105.0], [80.7, 106.0], [80.8, 106.0], [80.9, 106.0], [81.0, 107.0], [81.1, 107.0], [81.2, 107.0], [81.3, 108.0], [81.4, 108.0], [81.5, 109.0], [81.6, 109.0], [81.7, 109.0], [81.8, 110.0], [81.9, 110.0], [82.0, 111.0], [82.1, 111.0], [82.2, 112.0], [82.3, 112.0], [82.4, 112.0], [82.5, 113.0], [82.6, 113.0], [82.7, 114.0], [82.8, 114.0], [82.9, 114.0], [83.0, 115.0], [83.1, 115.0], [83.2, 116.0], [83.3, 116.0], [83.4, 117.0], [83.5, 117.0], [83.6, 118.0], [83.7, 118.0], [83.8, 119.0], [83.9, 119.0], [84.0, 119.0], [84.1, 120.0], [84.2, 120.0], [84.3, 121.0], [84.4, 121.0], [84.5, 122.0], [84.6, 122.0], [84.7, 123.0], [84.8, 123.0], [84.9, 124.0], [85.0, 124.0], [85.1, 125.0], [85.2, 125.0], [85.3, 126.0], [85.4, 126.0], [85.5, 127.0], [85.6, 127.0], [85.7, 128.0], [85.8, 128.0], [85.9, 129.0], [86.0, 129.0], [86.1, 130.0], [86.2, 130.0], [86.3, 131.0], [86.4, 131.0], [86.5, 132.0], [86.6, 133.0], [86.7, 133.0], [86.8, 134.0], [86.9, 135.0], [87.0, 135.0], [87.1, 136.0], [87.2, 137.0], [87.3, 137.0], [87.4, 138.0], [87.5, 139.0], [87.6, 139.0], [87.7, 140.0], [87.8, 141.0], [87.9, 141.0], [88.0, 142.0], [88.1, 143.0], [88.2, 144.0], [88.3, 145.0], [88.4, 145.0], [88.5, 146.0], [88.6, 147.0], [88.7, 147.0], [88.8, 148.0], [88.9, 149.0], [89.0, 149.0], [89.1, 150.0], [89.2, 151.0], [89.3, 152.0], [89.4, 152.0], [89.5, 153.0], [89.6, 154.0], [89.7, 155.0], [89.8, 155.0], [89.9, 156.0], [90.0, 157.0], [90.1, 158.0], [90.2, 159.0], [90.3, 160.0], [90.4, 160.0], [90.5, 161.0], [90.6, 162.0], [90.7, 163.0], [90.8, 164.0], [90.9, 165.0], [91.0, 167.0], [91.1, 168.0], [91.2, 169.0], [91.3, 170.0], [91.4, 171.0], [91.5, 172.0], [91.6, 173.0], [91.7, 175.0], [91.8, 176.0], [91.9, 177.0], [92.0, 178.0], [92.1, 180.0], [92.2, 181.0], [92.3, 182.0], [92.4, 183.0], [92.5, 185.0], [92.6, 186.0], [92.7, 188.0], [92.8, 189.0], [92.9, 190.0], [93.0, 191.0], [93.1, 193.0], [93.2, 194.0], [93.3, 196.0], [93.4, 197.0], [93.5, 199.0], [93.6, 200.0], [93.7, 201.0], [93.8, 203.0], [93.9, 205.0], [94.0, 207.0], [94.1, 209.0], [94.2, 211.0], [94.3, 214.0], [94.4, 215.0], [94.5, 218.0], [94.6, 220.0], [94.7, 222.0], [94.8, 224.0], [94.9, 226.0], [95.0, 228.0], [95.1, 231.0], [95.2, 233.0], [95.3, 236.0], [95.4, 238.0], [95.5, 241.0], [95.6, 244.0], [95.7, 246.0], [95.8, 249.0], [95.9, 252.0], [96.0, 254.0], [96.1, 257.0], [96.2, 260.0], [96.3, 264.0], [96.4, 267.0], [96.5, 271.0], [96.6, 274.0], [96.7, 279.0], [96.8, 282.0], [96.9, 285.0], [97.0, 290.0], [97.1, 293.0], [97.2, 298.0], [97.3, 304.0], [97.4, 310.0], [97.5, 317.0], [97.6, 323.0], [97.7, 330.0], [97.8, 336.0], [97.9, 341.0], [98.0, 349.0], [98.1, 357.0], [98.2, 367.0], [98.3, 382.0], [98.4, 396.0], [98.5, 411.0], [98.6, 425.0], [98.7, 441.0], [98.8, 461.0], [98.9, 494.0], [99.0, 517.0], [99.1, 539.0], [99.2, 567.0], [99.3, 596.0], [99.4, 644.0], [99.5, 708.0], [99.6, 852.0], [99.7, 1184.0], [99.8, 15787.0], [99.9, 16406.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 35464.0, "series": [{"data": [[0.0, 35464.0], [9200.0, 1.0], [9100.0, 2.0], [600.0, 86.0], [9300.0, 2.0], [9600.0, 1.0], [9700.0, 1.0], [700.0, 30.0], [800.0, 27.0], [900.0, 15.0], [15700.0, 4.0], [15800.0, 3.0], [1000.0, 13.0], [16300.0, 17.0], [16100.0, 12.0], [16000.0, 3.0], [15900.0, 2.0], [16200.0, 7.0], [16600.0, 4.0], [16500.0, 6.0], [16400.0, 8.0], [16700.0, 6.0], [16900.0, 1.0], [17400.0, 7.0], [16800.0, 3.0], [17200.0, 3.0], [1100.0, 8.0], [18000.0, 1.0], [17600.0, 2.0], [17500.0, 3.0], [18400.0, 1.0], [1200.0, 6.0], [1300.0, 7.0], [1400.0, 6.0], [1500.0, 3.0], [100.0, 6631.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 3.0], [2100.0, 1.0], [2900.0, 1.0], [200.0, 1646.0], [300.0, 538.0], [400.0, 229.0], [500.0, 171.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 44410.0, "series": [{"data": [[0.0, 44410.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 367.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 114.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 94.66774541531825, "minX": 1.71915462E12, "maxY": 100.0, "series": [{"data": [[1.71915522E12, 94.66774541531825], [1.71915474E12, 100.0], [1.71915504E12, 100.0], [1.71915492E12, 100.0], [1.7191551E12, 100.0], [1.71915462E12, 96.8193277310923], [1.7191548E12, 100.0], [1.71915498E12, 100.0], [1.71915468E12, 100.0], [1.71915486E12, 100.0], [1.71915516E12, 100.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915522E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 48.083333333333336, "minX": 2.0, "maxY": 423.0, "series": [{"data": [[2.0, 417.5], [5.0, 423.0], [6.0, 65.0], [7.0, 77.0], [8.0, 93.0], [9.0, 99.0], [10.0, 81.0], [11.0, 92.0], [12.0, 108.0], [13.0, 123.0], [14.0, 112.0], [15.0, 114.0], [16.0, 93.0], [17.0, 106.0], [18.0, 355.0], [19.0, 222.5], [20.0, 145.0], [21.0, 157.0], [22.0, 115.0], [23.0, 119.5], [24.0, 117.0], [25.0, 125.5], [26.0, 101.5], [27.0, 104.0], [28.0, 89.0], [29.0, 92.0], [30.0, 94.5], [31.0, 69.4], [32.0, 56.8], [33.0, 67.0], [34.0, 56.25], [35.0, 80.33333333333333], [36.0, 83.5], [37.0, 145.33333333333334], [38.0, 68.66666666666667], [39.0, 90.0], [40.0, 78.0], [41.0, 105.0], [42.0, 78.25], [43.0, 64.5], [44.0, 61.0], [45.0, 58.75], [46.0, 56.0], [47.0, 74.0], [48.0, 61.0], [49.0, 85.0], [50.0, 63.666666666666664], [51.0, 67.0], [52.0, 80.16666666666666], [53.0, 67.0], [54.0, 53.75], [55.0, 118.25], [56.0, 90.71428571428571], [57.0, 69.85714285714286], [58.0, 83.66666666666667], [59.0, 72.42857142857143], [60.0, 72.0], [61.0, 80.8], [62.0, 60.714285714285715], [63.0, 56.8], [64.0, 55.8], [65.0, 51.8], [66.0, 64.2], [67.0, 69.75], [68.0, 59.8], [69.0, 55.72727272727272], [70.0, 59.4], [71.0, 51.75], [72.0, 59.33333333333333], [73.0, 54.857142857142854], [74.0, 55.4], [75.0, 57.0], [76.0, 53.166666666666664], [77.0, 51.5], [78.0, 78.75], [79.0, 61.833333333333336], [80.0, 96.75], [81.0, 81.125], [82.0, 90.2], [83.0, 68.7], [84.0, 55.875], [85.0, 68.33333333333333], [86.0, 59.5], [87.0, 60.0], [88.0, 73.33333333333333], [89.0, 64.2], [90.0, 72.0], [91.0, 60.33333333333333], [92.0, 57.33333333333333], [93.0, 54.142857142857146], [94.0, 48.083333333333336], [95.0, 54.33333333333334], [96.0, 54.25], [97.0, 53.0], [98.0, 50.0], [99.0, 79.0], [100.0, 121.90035691036854]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[99.6545753595163, 121.46395945855868]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2527.733333333333, "minX": 1.71915462E12, "maxY": 377726.0333333333, "series": [{"data": [[1.71915522E12, 84640.93333333333], [1.71915474E12, 305691.0333333333], [1.71915504E12, 375044.56666666665], [1.71915492E12, 306575.85], [1.7191551E12, 290880.1666666667], [1.71915462E12, 239084.66666666666], [1.7191548E12, 275504.85], [1.71915498E12, 359172.3], [1.71915468E12, 356079.5], [1.71915486E12, 377726.0333333333], [1.71915516E12, 273756.1666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71915522E12, 2527.733333333333], [1.71915474E12, 13176.983333333334], [1.71915504E12, 12776.733333333334], [1.71915492E12, 13020.983333333334], [1.7191551E12, 13026.216666666667], [1.71915462E12, 9401.016666666666], [1.7191548E12, 13464.683333333332], [1.71915498E12, 12957.233333333334], [1.71915468E12, 13385.966666666667], [1.71915486E12, 12913.066666666668], [1.71915516E12, 9034.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915522E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 58.04412691741959, "minX": 1.71915462E12, "maxY": 636.757400061033, "series": [{"data": [[1.71915522E12, 176.80798274002169], [1.71915474E12, 61.35562565720292], [1.71915504E12, 107.0013103297664], [1.71915492E12, 84.55439196409492], [1.7191551E12, 92.98030303030285], [1.71915462E12, 59.723289315726255], [1.7191548E12, 65.88724662162174], [1.71915498E12, 96.87289234760054], [1.71915468E12, 58.04412691741959], [1.71915486E12, 79.1150818974685], [1.71915516E12, 636.757400061033]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915522E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 55.41710443370458, "minX": 1.71915462E12, "maxY": 605.7235276167228, "series": [{"data": [[1.71915522E12, 157.17367853290187], [1.71915474E12, 60.10031545741313], [1.71915504E12, 95.3561913081458], [1.71915492E12, 81.768112844625], [1.7191551E12, 81.51168831168836], [1.71915462E12, 58.49549819927972], [1.7191548E12, 65.03737331081028], [1.71915498E12, 90.62321660181597], [1.71915468E12, 55.41710443370458], [1.71915486E12, 76.61646458200354], [1.71915516E12, 605.7235276167228]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915522E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71915462E12, "maxY": 3.296917912725065, "series": [{"data": [[1.71915522E12, 0.0], [1.71915474E12, 0.9381703470031538], [1.71915504E12, 1.728761738370822], [1.71915492E12, 1.0987390468048723], [1.7191551E12, 1.0991341991341979], [1.71915462E12, 1.527310924369748], [1.7191548E12, 0.8781672297297314], [1.71915498E12, 1.2021184608733178], [1.71915468E12, 0.8917839882328239], [1.71915486E12, 1.1854924484152332], [1.71915516E12, 3.296917912725065]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915522E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.71915462E12, "maxY": 18421.0, "series": [{"data": [[1.71915522E12, 1265.0], [1.71915474E12, 617.0], [1.71915504E12, 1177.0], [1.71915492E12, 1227.0], [1.7191551E12, 1297.0], [1.71915462E12, 536.0], [1.7191548E12, 382.0], [1.71915498E12, 1410.0], [1.71915468E12, 690.0], [1.71915486E12, 568.0], [1.71915516E12, 18421.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71915522E12, 46.0], [1.71915474E12, 38.0], [1.71915504E12, 38.0], [1.71915492E12, 38.0], [1.7191551E12, 38.0], [1.71915462E12, 38.0], [1.7191548E12, 39.0], [1.71915498E12, 38.0], [1.71915468E12, 39.0], [1.71915486E12, 39.0], [1.71915516E12, 38.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71915522E12, 318.60000000000014], [1.71915474E12, 90.0], [1.71915504E12, 204.0], [1.71915492E12, 157.0], [1.7191551E12, 177.0], [1.71915462E12, 85.0], [1.7191548E12, 105.0], [1.71915498E12, 182.0], [1.71915468E12, 78.0], [1.71915486E12, 144.0], [1.71915516E12, 356.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71915522E12, 833.200000000001], [1.71915474E12, 181.8799999999992], [1.71915504E12, 578.1999999999998], [1.71915492E12, 337.9999999999982], [1.7191551E12, 531.79], [1.71915462E12, 182.67000000000007], [1.7191548E12, 211.78000000000065], [1.71915498E12, 553.7299999999996], [1.71915468E12, 198.39999999999964], [1.71915486E12, 330.9599999999991], [1.71915516E12, 16580.059999999994]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71915522E12, 131.0], [1.71915474E12, 51.0], [1.71915504E12, 72.0], [1.71915492E12, 58.0], [1.7191551E12, 61.0], [1.71915462E12, 49.0], [1.7191548E12, 52.0], [1.71915498E12, 60.0], [1.71915468E12, 49.0], [1.71915486E12, 59.0], [1.71915516E12, 85.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71915522E12, 462.19999999999936], [1.71915474E12, 110.0], [1.71915504E12, 274.0], [1.71915492E12, 208.0], [1.7191551E12, 261.0], [1.71915462E12, 113.0], [1.7191548E12, 136.0], [1.71915498E12, 264.64999999999964], [1.71915468E12, 100.0], [1.71915486E12, 182.0], [1.71915516E12, 685.2999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915522E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 764.0, "series": [{"data": [[2.0, 72.5], [5.0, 58.0], [7.0, 126.0], [8.0, 92.0], [11.0, 206.0], [20.0, 79.0], [28.0, 51.5], [31.0, 99.0], [33.0, 47.0], [32.0, 56.0], [34.0, 51.0], [37.0, 149.0], [36.0, 56.0], [38.0, 81.0], [44.0, 128.0], [47.0, 55.0], [48.0, 115.0], [49.0, 69.0], [51.0, 48.5], [50.0, 82.0], [52.0, 61.0], [53.0, 88.0], [54.0, 46.0], [55.0, 81.0], [56.0, 58.0], [57.0, 118.5], [59.0, 53.0], [58.0, 48.0], [60.0, 72.5], [61.0, 148.0], [63.0, 54.0], [62.0, 108.0], [66.0, 77.0], [67.0, 59.5], [64.0, 64.0], [65.0, 74.0], [71.0, 53.5], [68.0, 163.0], [70.0, 65.0], [69.0, 56.0], [72.0, 92.5], [73.0, 64.0], [74.0, 50.0], [75.0, 59.5], [77.0, 51.0], [76.0, 54.0], [79.0, 52.0], [78.0, 53.5], [81.0, 57.0], [82.0, 61.0], [80.0, 49.0], [83.0, 53.0], [85.0, 56.0], [84.0, 53.0], [86.0, 51.0], [87.0, 50.0], [90.0, 67.0], [89.0, 58.0], [88.0, 52.0], [91.0, 57.0], [92.0, 53.0], [94.0, 54.0], [93.0, 48.0], [95.0, 50.0], [98.0, 78.0], [97.0, 61.0], [96.0, 66.0], [99.0, 46.0], [100.0, 64.0], [1.0, 764.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[69.0, 0.0], [78.0, 0.0], [77.0, 0.0], [81.0, 0.0], [83.0, 0.0], [87.0, 0.0], [90.0, 0.0], [91.0, 0.0], [63.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 216.0, "series": [{"data": [[2.0, 72.5], [5.0, 58.0], [7.0, 111.0], [8.0, 92.0], [11.0, 206.0], [20.0, 78.0], [28.0, 50.0], [31.0, 97.0], [33.0, 46.0], [32.0, 56.0], [34.0, 51.0], [37.0, 126.5], [36.0, 55.5], [38.0, 78.0], [44.0, 110.0], [47.0, 52.0], [48.0, 115.0], [49.0, 66.0], [51.0, 47.0], [50.0, 82.0], [52.0, 59.0], [53.0, 87.5], [54.0, 45.0], [55.0, 75.0], [56.0, 54.0], [57.0, 104.0], [59.0, 50.0], [58.0, 46.0], [60.0, 70.0], [61.0, 127.0], [63.0, 53.0], [62.0, 99.0], [66.0, 69.0], [67.0, 58.0], [64.0, 62.0], [65.0, 65.0], [71.0, 52.0], [68.0, 159.0], [70.0, 63.5], [69.0, 54.0], [72.0, 91.5], [73.0, 61.0], [74.0, 49.0], [75.0, 57.0], [77.0, 50.0], [76.0, 53.0], [79.0, 50.0], [78.0, 52.0], [81.0, 55.5], [82.0, 60.0], [80.0, 47.0], [83.0, 52.0], [85.0, 54.0], [84.0, 52.0], [86.0, 50.0], [87.0, 49.0], [90.0, 64.0], [89.0, 56.0], [88.0, 51.0], [91.0, 55.0], [92.0, 51.0], [94.0, 51.0], [93.0, 47.0], [95.0, 48.0], [98.0, 72.5], [97.0, 58.0], [96.0, 56.0], [99.0, 46.0], [100.0, 64.0], [1.0, 216.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[69.0, 0.0], [78.0, 0.0], [77.0, 0.0], [81.0, 0.0], [83.0, 0.0], [87.0, 0.0], [90.0, 0.0], [91.0, 0.0], [63.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 15.416666666666666, "minX": 1.71915462E12, "maxY": 79.3, "series": [{"data": [[1.71915522E12, 15.416666666666666], [1.71915474E12, 79.26666666666667], [1.71915504E12, 76.25], [1.71915492E12, 77.96666666666667], [1.7191551E12, 77.26666666666667], [1.71915462E12, 55.583333333333336], [1.7191548E12, 78.93333333333334], [1.71915498E12, 77.15], [1.71915468E12, 79.3], [1.71915486E12, 78.33333333333333], [1.71915516E12, 54.38333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915522E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.71915462E12, "maxY": 79.31666666666666, "series": [{"data": [[1.71915522E12, 15.45], [1.71915474E12, 79.25], [1.71915504E12, 76.31666666666666], [1.71915492E12, 77.98333333333333], [1.7191551E12, 77.0], [1.71915462E12, 55.53333333333333], [1.7191548E12, 78.93333333333334], [1.71915498E12, 77.1], [1.71915468E12, 79.31666666666666], [1.71915486E12, 76.68333333333334], [1.71915516E12, 54.61666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71915486E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915522E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.71915462E12, "maxY": 79.31666666666666, "series": [{"data": [[1.71915522E12, 15.45], [1.71915474E12, 79.25], [1.71915504E12, 76.31666666666666], [1.71915492E12, 77.98333333333333], [1.7191551E12, 77.0], [1.71915462E12, 55.53333333333333], [1.7191548E12, 78.93333333333334], [1.71915498E12, 77.1], [1.71915468E12, 79.31666666666666], [1.71915486E12, 76.68333333333334], [1.71915516E12, 54.61666666666667]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}, {"data": [[1.71915486E12, 1.6666666666666667]], "isOverall": false, "label": "TitleBasics by primary_title-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915522E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.71915462E12, "maxY": 79.31666666666666, "series": [{"data": [[1.71915522E12, 15.45], [1.71915474E12, 79.25], [1.71915504E12, 76.31666666666666], [1.71915492E12, 77.98333333333333], [1.7191551E12, 77.0], [1.71915462E12, 55.53333333333333], [1.7191548E12, 78.93333333333334], [1.71915498E12, 77.1], [1.71915468E12, 79.31666666666666], [1.71915486E12, 76.68333333333334], [1.71915516E12, 54.61666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71915486E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915522E12, "title": "Total Transactions Per Second"}},
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

