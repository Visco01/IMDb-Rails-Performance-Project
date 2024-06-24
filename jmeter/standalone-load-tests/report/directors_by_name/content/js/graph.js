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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 692.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 7.0], [6.8, 7.0], [6.9, 7.0], [7.0, 7.0], [7.1, 7.0], [7.2, 7.0], [7.3, 7.0], [7.4, 7.0], [7.5, 7.0], [7.6, 7.0], [7.7, 7.0], [7.8, 7.0], [7.9, 7.0], [8.0, 7.0], [8.1, 7.0], [8.2, 7.0], [8.3, 7.0], [8.4, 7.0], [8.5, 7.0], [8.6, 7.0], [8.7, 7.0], [8.8, 7.0], [8.9, 7.0], [9.0, 7.0], [9.1, 7.0], [9.2, 7.0], [9.3, 7.0], [9.4, 7.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 8.0], [11.9, 8.0], [12.0, 8.0], [12.1, 8.0], [12.2, 8.0], [12.3, 8.0], [12.4, 8.0], [12.5, 8.0], [12.6, 8.0], [12.7, 8.0], [12.8, 8.0], [12.9, 8.0], [13.0, 8.0], [13.1, 8.0], [13.2, 8.0], [13.3, 8.0], [13.4, 8.0], [13.5, 8.0], [13.6, 8.0], [13.7, 8.0], [13.8, 8.0], [13.9, 8.0], [14.0, 8.0], [14.1, 8.0], [14.2, 8.0], [14.3, 8.0], [14.4, 8.0], [14.5, 8.0], [14.6, 8.0], [14.7, 8.0], [14.8, 8.0], [14.9, 8.0], [15.0, 8.0], [15.1, 8.0], [15.2, 8.0], [15.3, 8.0], [15.4, 8.0], [15.5, 8.0], [15.6, 8.0], [15.7, 8.0], [15.8, 8.0], [15.9, 8.0], [16.0, 8.0], [16.1, 8.0], [16.2, 8.0], [16.3, 8.0], [16.4, 8.0], [16.5, 8.0], [16.6, 8.0], [16.7, 8.0], [16.8, 8.0], [16.9, 8.0], [17.0, 8.0], [17.1, 8.0], [17.2, 8.0], [17.3, 8.0], [17.4, 8.0], [17.5, 8.0], [17.6, 8.0], [17.7, 8.0], [17.8, 8.0], [17.9, 8.0], [18.0, 8.0], [18.1, 8.0], [18.2, 8.0], [18.3, 9.0], [18.4, 9.0], [18.5, 9.0], [18.6, 9.0], [18.7, 9.0], [18.8, 9.0], [18.9, 9.0], [19.0, 9.0], [19.1, 9.0], [19.2, 9.0], [19.3, 9.0], [19.4, 9.0], [19.5, 9.0], [19.6, 9.0], [19.7, 9.0], [19.8, 9.0], [19.9, 9.0], [20.0, 9.0], [20.1, 9.0], [20.2, 9.0], [20.3, 9.0], [20.4, 9.0], [20.5, 9.0], [20.6, 9.0], [20.7, 9.0], [20.8, 9.0], [20.9, 9.0], [21.0, 9.0], [21.1, 9.0], [21.2, 9.0], [21.3, 9.0], [21.4, 9.0], [21.5, 9.0], [21.6, 9.0], [21.7, 9.0], [21.8, 9.0], [21.9, 9.0], [22.0, 9.0], [22.1, 9.0], [22.2, 9.0], [22.3, 9.0], [22.4, 9.0], [22.5, 9.0], [22.6, 10.0], [22.7, 10.0], [22.8, 10.0], [22.9, 10.0], [23.0, 10.0], [23.1, 10.0], [23.2, 10.0], [23.3, 10.0], [23.4, 10.0], [23.5, 10.0], [23.6, 10.0], [23.7, 10.0], [23.8, 10.0], [23.9, 10.0], [24.0, 10.0], [24.1, 10.0], [24.2, 10.0], [24.3, 10.0], [24.4, 10.0], [24.5, 10.0], [24.6, 10.0], [24.7, 10.0], [24.8, 10.0], [24.9, 10.0], [25.0, 10.0], [25.1, 10.0], [25.2, 10.0], [25.3, 10.0], [25.4, 10.0], [25.5, 10.0], [25.6, 10.0], [25.7, 10.0], [25.8, 10.0], [25.9, 10.0], [26.0, 10.0], [26.1, 10.0], [26.2, 10.0], [26.3, 10.0], [26.4, 10.0], [26.5, 10.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 11.0], [27.0, 11.0], [27.1, 11.0], [27.2, 11.0], [27.3, 11.0], [27.4, 11.0], [27.5, 11.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 11.0], [28.2, 11.0], [28.3, 11.0], [28.4, 11.0], [28.5, 11.0], [28.6, 11.0], [28.7, 11.0], [28.8, 11.0], [28.9, 11.0], [29.0, 11.0], [29.1, 11.0], [29.2, 11.0], [29.3, 11.0], [29.4, 11.0], [29.5, 11.0], [29.6, 11.0], [29.7, 11.0], [29.8, 11.0], [29.9, 11.0], [30.0, 11.0], [30.1, 11.0], [30.2, 11.0], [30.3, 11.0], [30.4, 11.0], [30.5, 11.0], [30.6, 11.0], [30.7, 11.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 12.0], [32.3, 12.0], [32.4, 12.0], [32.5, 12.0], [32.6, 12.0], [32.7, 12.0], [32.8, 12.0], [32.9, 12.0], [33.0, 12.0], [33.1, 12.0], [33.2, 12.0], [33.3, 12.0], [33.4, 12.0], [33.5, 12.0], [33.6, 12.0], [33.7, 12.0], [33.8, 12.0], [33.9, 12.0], [34.0, 12.0], [34.1, 12.0], [34.2, 12.0], [34.3, 12.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 13.0], [35.4, 13.0], [35.5, 13.0], [35.6, 13.0], [35.7, 13.0], [35.8, 13.0], [35.9, 13.0], [36.0, 13.0], [36.1, 13.0], [36.2, 13.0], [36.3, 13.0], [36.4, 13.0], [36.5, 13.0], [36.6, 13.0], [36.7, 13.0], [36.8, 13.0], [36.9, 13.0], [37.0, 13.0], [37.1, 13.0], [37.2, 14.0], [37.3, 14.0], [37.4, 14.0], [37.5, 14.0], [37.6, 14.0], [37.7, 14.0], [37.8, 14.0], [37.9, 14.0], [38.0, 14.0], [38.1, 14.0], [38.2, 14.0], [38.3, 14.0], [38.4, 14.0], [38.5, 14.0], [38.6, 14.0], [38.7, 14.0], [38.8, 14.0], [38.9, 14.0], [39.0, 14.0], [39.1, 14.0], [39.2, 14.0], [39.3, 14.0], [39.4, 14.0], [39.5, 15.0], [39.6, 15.0], [39.7, 15.0], [39.8, 15.0], [39.9, 15.0], [40.0, 15.0], [40.1, 15.0], [40.2, 15.0], [40.3, 15.0], [40.4, 15.0], [40.5, 15.0], [40.6, 15.0], [40.7, 15.0], [40.8, 15.0], [40.9, 15.0], [41.0, 15.0], [41.1, 15.0], [41.2, 15.0], [41.3, 15.0], [41.4, 15.0], [41.5, 15.0], [41.6, 15.0], [41.7, 15.0], [41.8, 16.0], [41.9, 16.0], [42.0, 16.0], [42.1, 16.0], [42.2, 16.0], [42.3, 16.0], [42.4, 16.0], [42.5, 16.0], [42.6, 16.0], [42.7, 16.0], [42.8, 16.0], [42.9, 16.0], [43.0, 16.0], [43.1, 16.0], [43.2, 16.0], [43.3, 16.0], [43.4, 16.0], [43.5, 16.0], [43.6, 16.0], [43.7, 17.0], [43.8, 17.0], [43.9, 17.0], [44.0, 17.0], [44.1, 17.0], [44.2, 17.0], [44.3, 17.0], [44.4, 17.0], [44.5, 17.0], [44.6, 17.0], [44.7, 17.0], [44.8, 17.0], [44.9, 17.0], [45.0, 17.0], [45.1, 17.0], [45.2, 17.0], [45.3, 18.0], [45.4, 18.0], [45.5, 18.0], [45.6, 18.0], [45.7, 18.0], [45.8, 18.0], [45.9, 18.0], [46.0, 18.0], [46.1, 18.0], [46.2, 18.0], [46.3, 18.0], [46.4, 18.0], [46.5, 18.0], [46.6, 18.0], [46.7, 19.0], [46.8, 19.0], [46.9, 19.0], [47.0, 19.0], [47.1, 19.0], [47.2, 19.0], [47.3, 19.0], [47.4, 19.0], [47.5, 19.0], [47.6, 19.0], [47.7, 19.0], [47.8, 19.0], [47.9, 20.0], [48.0, 20.0], [48.1, 20.0], [48.2, 20.0], [48.3, 20.0], [48.4, 20.0], [48.5, 20.0], [48.6, 20.0], [48.7, 20.0], [48.8, 20.0], [48.9, 21.0], [49.0, 21.0], [49.1, 21.0], [49.2, 21.0], [49.3, 21.0], [49.4, 21.0], [49.5, 21.0], [49.6, 21.0], [49.7, 21.0], [49.8, 22.0], [49.9, 22.0], [50.0, 22.0], [50.1, 22.0], [50.2, 22.0], [50.3, 22.0], [50.4, 22.0], [50.5, 22.0], [50.6, 22.0], [50.7, 23.0], [50.8, 23.0], [50.9, 23.0], [51.0, 23.0], [51.1, 23.0], [51.2, 23.0], [51.3, 23.0], [51.4, 23.0], [51.5, 24.0], [51.6, 24.0], [51.7, 24.0], [51.8, 24.0], [51.9, 24.0], [52.0, 24.0], [52.1, 24.0], [52.2, 24.0], [52.3, 25.0], [52.4, 25.0], [52.5, 25.0], [52.6, 25.0], [52.7, 25.0], [52.8, 25.0], [52.9, 25.0], [53.0, 26.0], [53.1, 26.0], [53.2, 26.0], [53.3, 26.0], [53.4, 26.0], [53.5, 26.0], [53.6, 27.0], [53.7, 27.0], [53.8, 27.0], [53.9, 27.0], [54.0, 27.0], [54.1, 27.0], [54.2, 28.0], [54.3, 28.0], [54.4, 28.0], [54.5, 28.0], [54.6, 29.0], [54.7, 29.0], [54.8, 29.0], [54.9, 29.0], [55.0, 29.0], [55.1, 30.0], [55.2, 30.0], [55.3, 30.0], [55.4, 30.0], [55.5, 30.0], [55.6, 31.0], [55.7, 31.0], [55.8, 31.0], [55.9, 31.0], [56.0, 31.0], [56.1, 32.0], [56.2, 32.0], [56.3, 32.0], [56.4, 32.0], [56.5, 33.0], [56.6, 33.0], [56.7, 33.0], [56.8, 33.0], [56.9, 34.0], [57.0, 34.0], [57.1, 34.0], [57.2, 35.0], [57.3, 35.0], [57.4, 35.0], [57.5, 35.0], [57.6, 36.0], [57.7, 36.0], [57.8, 36.0], [57.9, 37.0], [58.0, 37.0], [58.1, 37.0], [58.2, 38.0], [58.3, 38.0], [58.4, 38.0], [58.5, 38.0], [58.6, 39.0], [58.7, 39.0], [58.8, 40.0], [58.9, 40.0], [59.0, 40.0], [59.1, 40.0], [59.2, 41.0], [59.3, 41.0], [59.4, 42.0], [59.5, 42.0], [59.6, 42.0], [59.7, 43.0], [59.8, 43.0], [59.9, 44.0], [60.0, 44.0], [60.1, 44.0], [60.2, 45.0], [60.3, 45.0], [60.4, 46.0], [60.5, 46.0], [60.6, 46.0], [60.7, 47.0], [60.8, 47.0], [60.9, 48.0], [61.0, 48.0], [61.1, 49.0], [61.2, 49.0], [61.3, 50.0], [61.4, 50.0], [61.5, 51.0], [61.6, 51.0], [61.7, 52.0], [61.8, 52.0], [61.9, 53.0], [62.0, 54.0], [62.1, 54.0], [62.2, 55.0], [62.3, 55.0], [62.4, 56.0], [62.5, 56.0], [62.6, 57.0], [62.7, 57.0], [62.8, 58.0], [62.9, 58.0], [63.0, 59.0], [63.1, 59.0], [63.2, 60.0], [63.3, 60.0], [63.4, 61.0], [63.5, 61.0], [63.6, 62.0], [63.7, 62.0], [63.8, 63.0], [63.9, 63.0], [64.0, 64.0], [64.1, 64.0], [64.2, 65.0], [64.3, 65.0], [64.4, 65.0], [64.5, 66.0], [64.6, 66.0], [64.7, 67.0], [64.8, 67.0], [64.9, 68.0], [65.0, 68.0], [65.1, 68.0], [65.2, 69.0], [65.3, 69.0], [65.4, 70.0], [65.5, 70.0], [65.6, 70.0], [65.7, 71.0], [65.8, 71.0], [65.9, 72.0], [66.0, 72.0], [66.1, 72.0], [66.2, 73.0], [66.3, 73.0], [66.4, 73.0], [66.5, 74.0], [66.6, 74.0], [66.7, 75.0], [66.8, 75.0], [66.9, 75.0], [67.0, 76.0], [67.1, 76.0], [67.2, 77.0], [67.3, 77.0], [67.4, 77.0], [67.5, 78.0], [67.6, 78.0], [67.7, 79.0], [67.8, 79.0], [67.9, 79.0], [68.0, 80.0], [68.1, 80.0], [68.2, 81.0], [68.3, 81.0], [68.4, 81.0], [68.5, 82.0], [68.6, 82.0], [68.7, 82.0], [68.8, 83.0], [68.9, 83.0], [69.0, 83.0], [69.1, 84.0], [69.2, 84.0], [69.3, 84.0], [69.4, 85.0], [69.5, 85.0], [69.6, 86.0], [69.7, 86.0], [69.8, 86.0], [69.9, 86.0], [70.0, 87.0], [70.1, 87.0], [70.2, 88.0], [70.3, 88.0], [70.4, 88.0], [70.5, 89.0], [70.6, 89.0], [70.7, 89.0], [70.8, 90.0], [70.9, 90.0], [71.0, 90.0], [71.1, 91.0], [71.2, 91.0], [71.3, 92.0], [71.4, 92.0], [71.5, 92.0], [71.6, 93.0], [71.7, 93.0], [71.8, 93.0], [71.9, 94.0], [72.0, 94.0], [72.1, 94.0], [72.2, 95.0], [72.3, 95.0], [72.4, 95.0], [72.5, 96.0], [72.6, 96.0], [72.7, 97.0], [72.8, 97.0], [72.9, 97.0], [73.0, 98.0], [73.1, 98.0], [73.2, 98.0], [73.3, 99.0], [73.4, 99.0], [73.5, 99.0], [73.6, 100.0], [73.7, 100.0], [73.8, 100.0], [73.9, 101.0], [74.0, 101.0], [74.1, 101.0], [74.2, 102.0], [74.3, 102.0], [74.4, 102.0], [74.5, 103.0], [74.6, 103.0], [74.7, 104.0], [74.8, 104.0], [74.9, 104.0], [75.0, 105.0], [75.1, 105.0], [75.2, 105.0], [75.3, 106.0], [75.4, 106.0], [75.5, 106.0], [75.6, 107.0], [75.7, 107.0], [75.8, 107.0], [75.9, 108.0], [76.0, 108.0], [76.1, 109.0], [76.2, 109.0], [76.3, 109.0], [76.4, 110.0], [76.5, 110.0], [76.6, 111.0], [76.7, 111.0], [76.8, 112.0], [76.9, 112.0], [77.0, 112.0], [77.1, 113.0], [77.2, 113.0], [77.3, 114.0], [77.4, 114.0], [77.5, 115.0], [77.6, 115.0], [77.7, 115.0], [77.8, 116.0], [77.9, 116.0], [78.0, 117.0], [78.1, 117.0], [78.2, 118.0], [78.3, 118.0], [78.4, 118.0], [78.5, 119.0], [78.6, 119.0], [78.7, 120.0], [78.8, 120.0], [78.9, 121.0], [79.0, 121.0], [79.1, 122.0], [79.2, 122.0], [79.3, 123.0], [79.4, 123.0], [79.5, 124.0], [79.6, 124.0], [79.7, 125.0], [79.8, 125.0], [79.9, 126.0], [80.0, 126.0], [80.1, 127.0], [80.2, 127.0], [80.3, 128.0], [80.4, 129.0], [80.5, 129.0], [80.6, 130.0], [80.7, 131.0], [80.8, 131.0], [80.9, 132.0], [81.0, 132.0], [81.1, 133.0], [81.2, 134.0], [81.3, 135.0], [81.4, 135.0], [81.5, 136.0], [81.6, 137.0], [81.7, 137.0], [81.8, 138.0], [81.9, 139.0], [82.0, 139.0], [82.1, 140.0], [82.2, 141.0], [82.3, 142.0], [82.4, 142.0], [82.5, 143.0], [82.6, 144.0], [82.7, 145.0], [82.8, 145.0], [82.9, 146.0], [83.0, 146.0], [83.1, 147.0], [83.2, 148.0], [83.3, 149.0], [83.4, 149.0], [83.5, 150.0], [83.6, 151.0], [83.7, 151.0], [83.8, 152.0], [83.9, 153.0], [84.0, 154.0], [84.1, 154.0], [84.2, 155.0], [84.3, 156.0], [84.4, 157.0], [84.5, 157.0], [84.6, 158.0], [84.7, 159.0], [84.8, 160.0], [84.9, 160.0], [85.0, 161.0], [85.1, 161.0], [85.2, 162.0], [85.3, 163.0], [85.4, 163.0], [85.5, 164.0], [85.6, 165.0], [85.7, 165.0], [85.8, 166.0], [85.9, 167.0], [86.0, 167.0], [86.1, 168.0], [86.2, 168.0], [86.3, 169.0], [86.4, 170.0], [86.5, 170.0], [86.6, 171.0], [86.7, 172.0], [86.8, 172.0], [86.9, 173.0], [87.0, 173.0], [87.1, 174.0], [87.2, 174.0], [87.3, 175.0], [87.4, 176.0], [87.5, 176.0], [87.6, 177.0], [87.7, 177.0], [87.8, 178.0], [87.9, 178.0], [88.0, 179.0], [88.1, 179.0], [88.2, 180.0], [88.3, 181.0], [88.4, 182.0], [88.5, 182.0], [88.6, 182.0], [88.7, 183.0], [88.8, 184.0], [88.9, 184.0], [89.0, 185.0], [89.1, 185.0], [89.2, 186.0], [89.3, 186.0], [89.4, 187.0], [89.5, 188.0], [89.6, 188.0], [89.7, 189.0], [89.8, 189.0], [89.9, 190.0], [90.0, 190.0], [90.1, 191.0], [90.2, 191.0], [90.3, 192.0], [90.4, 192.0], [90.5, 193.0], [90.6, 193.0], [90.7, 194.0], [90.8, 194.0], [90.9, 195.0], [91.0, 196.0], [91.1, 196.0], [91.2, 197.0], [91.3, 198.0], [91.4, 198.0], [91.5, 199.0], [91.6, 200.0], [91.7, 201.0], [91.8, 201.0], [91.9, 202.0], [92.0, 202.0], [92.1, 203.0], [92.2, 204.0], [92.3, 205.0], [92.4, 205.0], [92.5, 206.0], [92.6, 206.0], [92.7, 207.0], [92.8, 208.0], [92.9, 209.0], [93.0, 210.0], [93.1, 211.0], [93.2, 212.0], [93.3, 212.0], [93.4, 213.0], [93.5, 214.0], [93.6, 215.0], [93.7, 216.0], [93.8, 217.0], [93.9, 218.0], [94.0, 219.0], [94.1, 220.0], [94.2, 221.0], [94.3, 222.0], [94.4, 223.0], [94.5, 225.0], [94.6, 226.0], [94.7, 227.0], [94.8, 228.0], [94.9, 229.0], [95.0, 231.0], [95.1, 233.0], [95.2, 234.0], [95.3, 235.0], [95.4, 237.0], [95.5, 239.0], [95.6, 240.0], [95.7, 242.0], [95.8, 243.0], [95.9, 245.0], [96.0, 247.0], [96.1, 249.0], [96.2, 250.0], [96.3, 252.0], [96.4, 254.0], [96.5, 255.0], [96.6, 257.0], [96.7, 258.0], [96.8, 259.0], [96.9, 261.0], [97.0, 262.0], [97.1, 264.0], [97.2, 265.0], [97.3, 267.0], [97.4, 269.0], [97.5, 270.0], [97.6, 272.0], [97.7, 273.0], [97.8, 275.0], [97.9, 276.0], [98.0, 278.0], [98.1, 279.0], [98.2, 280.0], [98.3, 282.0], [98.4, 283.0], [98.5, 285.0], [98.6, 286.0], [98.7, 288.0], [98.8, 289.0], [98.9, 291.0], [99.0, 293.0], [99.1, 294.0], [99.2, 296.0], [99.3, 300.0], [99.4, 304.0], [99.5, 311.0], [99.6, 318.0], [99.7, 336.0], [99.8, 355.0], [99.9, 384.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 34238.0, "series": [{"data": [[0.0, 34238.0], [300.0, 292.0], [600.0, 4.0], [100.0, 8390.0], [200.0, 3605.0], [400.0, 20.0], [500.0, 11.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 46545.0, "series": [{"data": [[0.0, 46545.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 15.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 81.36967886482446, "minX": 1.71922716E12, "maxY": 100.0, "series": [{"data": [[1.71922758E12, 100.0], [1.7192274E12, 100.0], [1.7192277E12, 100.0], [1.71922722E12, 100.0], [1.71922752E12, 100.0], [1.71922734E12, 100.0], [1.71922764E12, 100.0], [1.71922716E12, 81.36967886482446], [1.71922746E12, 100.0], [1.71922776E12, 98.07542768273716], [1.71922728E12, 100.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922776E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7.666666666666666, "minX": 1.0, "maxY": 66.80203090121177, "series": [{"data": [[2.0, 10.0], [3.0, 10.0], [4.0, 14.0], [5.0, 11.0], [6.0, 11.0], [7.0, 15.5], [8.0, 14.0], [9.0, 12.5], [10.0, 10.5], [11.0, 12.0], [12.0, 12.5], [13.0, 13.0], [14.0, 10.666666666666666], [15.0, 9.666666666666666], [16.0, 8.333333333333334], [17.0, 9.0], [18.0, 8.333333333333334], [19.0, 10.5], [20.0, 10.5], [21.0, 24.75], [22.0, 14.5], [23.0, 17.0], [24.0, 18.25], [25.0, 22.6], [26.0, 22.6], [27.0, 24.6], [28.0, 31.6], [29.0, 26.2], [30.0, 29.6], [31.0, 33.333333333333336], [32.0, 31.999999999999996], [33.0, 36.6], [34.0, 35.666666666666664], [35.0, 40.0], [36.0, 29.833333333333332], [37.0, 28.857142857142858], [38.0, 30.285714285714285], [39.0, 26.714285714285715], [40.0, 26.714285714285715], [41.0, 21.142857142857142], [42.0, 26.857142857142858], [43.0, 23.75], [44.0, 22.625], [45.0, 12.5], [46.0, 11.0], [47.0, 11.5], [48.0, 12.625], [49.0, 8.777777777777779], [50.0, 7.999999999999999], [51.0, 12.777777777777779], [52.0, 12.88888888888889], [53.0, 13.777777777777779], [54.0, 15.333333333333334], [55.0, 15.1], [56.0, 12.4], [57.0, 10.363636363636363], [58.0, 11.3], [59.0, 10.8], [60.0, 10.11111111111111], [61.0, 12.181818181818183], [62.0, 9.545454545454547], [63.0, 11.083333333333334], [64.0, 13.636363636363635], [65.0, 7.7272727272727275], [66.0, 9.5], [67.0, 11.75], [68.0, 8.749999999999998], [69.0, 11.166666666666666], [70.0, 7.666666666666666], [71.0, 11.666666666666666], [72.0, 10.923076923076925], [73.0, 9.916666666666668], [74.0, 15.923076923076923], [75.0, 17.230769230769226], [76.0, 15.0], [77.0, 17.285714285714285], [78.0, 29.0], [79.0, 16.642857142857146], [80.0, 15.133333333333333], [81.0, 15.846153846153847], [82.0, 14.214285714285712], [83.0, 16.733333333333334], [84.0, 15.153846153846153], [85.0, 18.25], [86.0, 17.142857142857142], [87.0, 16.799999999999997], [88.0, 17.4], [89.0, 13.533333333333333], [90.0, 20.066666666666663], [91.0, 17.352941176470587], [92.0, 17.266666666666666], [93.0, 20.25], [94.0, 17.3125], [95.0, 21.375], [96.0, 21.0], [97.0, 14.61904761904762], [98.0, 14.8125], [99.0, 14.3125], [100.0, 66.80203090121177], [1.0, 10.0]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[99.35790378006817, 65.86499140893433]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3527.0833333333335, "minX": 1.71922716E12, "maxY": 104037.43333333333, "series": [{"data": [[1.71922758E12, 104037.43333333333], [1.7192274E12, 93900.18333333333], [1.7192277E12, 99776.48333333334], [1.71922722E12, 92282.8], [1.71922752E12, 93338.35], [1.71922734E12, 93603.06666666667], [1.71922764E12, 95290.3], [1.71922716E12, 25287.933333333334], [1.71922746E12, 92447.16666666667], [1.71922776E12, 51952.11666666667], [1.71922728E12, 91271.53333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71922758E12, 12467.25], [1.7192274E12, 12300.216666666667], [1.7192277E12, 12454.416666666666], [1.71922722E12, 12540.166666666666], [1.71922752E12, 12651.383333333333], [1.71922734E12, 12386.25], [1.71922764E12, 12383.0], [1.71922716E12, 3527.0833333333335], [1.71922746E12, 12394.066666666668], [1.71922776E12, 6805.5], [1.71922728E12, 12620.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922776E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 31.766243465272588, "minX": 1.71922716E12, "maxY": 89.84797822706066, "series": [{"data": [[1.71922758E12, 68.2286257124762], [1.7192274E12, 82.87449132576569], [1.7192277E12, 61.38727349346842], [1.71922722E12, 64.71735920691845], [1.71922752E12, 46.838152693987865], [1.71922734E12, 78.3458918688803], [1.71922764E12, 72.86393547017637], [1.71922716E12, 31.766243465272588], [1.71922746E12, 65.81298756061557], [1.71922776E12, 89.84797822706066], [1.71922728E12, 49.219929122368086]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922776E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 31.76400298730397, "minX": 1.71922716E12, "maxY": 89.84720062208399, "series": [{"data": [[1.71922758E12, 68.21807050876082], [1.7192274E12, 82.87384878989064], [1.7192277E12, 61.38558786346388], [1.71922722E12, 64.71609365112845], [1.71922752E12, 46.83648845433743], [1.71922734E12, 78.34418901660297], [1.71922764E12, 72.86266185523266], [1.71922716E12, 31.76400298730397], [1.71922746E12, 65.8115117014547], [1.71922776E12, 89.84720062208399], [1.71922728E12, 49.218678340629566]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922776E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7.776049766718548E-4, "minX": 1.71922716E12, "maxY": 0.040328603435399527, "series": [{"data": [[1.71922758E12, 0.005277601857715847], [1.7192274E12, 0.005354465624330696], [1.7192277E12, 0.004635482511588706], [1.71922722E12, 0.005273149124657242], [1.71922752E12, 0.0068649885583524015], [1.71922734E12, 0.005321413367390382], [1.71922764E12, 0.004245383145828913], [1.71922716E12, 0.040328603435399527], [1.71922746E12, 0.005270925574530887], [1.71922776E12, 7.776049766718548E-4], [1.71922728E12, 0.004377736085053151]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922776E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.71922716E12, "maxY": 692.0, "series": [{"data": [[1.71922758E12, 611.0], [1.7192274E12, 388.0], [1.7192277E12, 446.0], [1.71922722E12, 594.0], [1.71922752E12, 535.0], [1.71922734E12, 507.0], [1.71922764E12, 692.0], [1.71922716E12, 183.0], [1.71922746E12, 661.0], [1.71922776E12, 366.0], [1.71922728E12, 433.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71922758E12, 4.0], [1.7192274E12, 4.0], [1.7192277E12, 4.0], [1.71922722E12, 3.0], [1.71922752E12, 3.0], [1.71922734E12, 3.0], [1.71922764E12, 3.0], [1.71922716E12, 4.0], [1.71922746E12, 3.0], [1.71922776E12, 4.0], [1.71922728E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71922758E12, 195.0], [1.7192274E12, 213.0], [1.7192277E12, 184.0], [1.71922722E12, 190.0], [1.71922752E12, 141.19999999999982], [1.71922734E12, 194.0], [1.71922764E12, 196.0], [1.71922716E12, 102.0], [1.71922746E12, 196.0], [1.71922776E12, 215.0], [1.71922728E12, 164.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71922758E12, 305.0], [1.7192274E12, 287.0], [1.7192277E12, 288.52999999999975], [1.71922722E12, 306.3199999999997], [1.71922752E12, 258.84000000000015], [1.71922734E12, 295.0], [1.71922764E12, 303.0], [1.71922716E12, 165.0], [1.71922746E12, 292.0], [1.71922776E12, 301.0], [1.71922728E12, 287.0199999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71922758E12, 23.0], [1.7192274E12, 44.0], [1.7192277E12, 19.0], [1.71922722E12, 21.0], [1.71922752E12, 16.0], [1.71922734E12, 46.0], [1.71922764E12, 34.0], [1.71922716E12, 12.0], [1.71922746E12, 20.0], [1.71922776E12, 63.0], [1.71922728E12, 15.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71922758E12, 251.0], [1.7192274E12, 252.0], [1.7192277E12, 222.0], [1.71922722E12, 234.0], [1.71922752E12, 186.0], [1.71922734E12, 234.0], [1.71922764E12, 239.39999999999964], [1.71922716E12, 130.0], [1.71922746E12, 239.0], [1.71922776E12, 265.6999999999998], [1.71922728E12, 209.09999999999945]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922776E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7.0, "minX": 4.0, "maxY": 208.0, "series": [{"data": [[4.0, 11.0], [8.0, 13.0], [12.0, 9.0], [16.0, 8.5], [20.0, 7.0], [25.0, 10.0], [29.0, 12.0], [33.0, 11.0], [37.0, 10.0], [41.0, 13.0], [45.0, 11.0], [50.0, 9.0], [54.0, 8.5], [57.0, 11.0], [56.0, 10.0], [58.0, 11.0], [60.0, 12.0], [61.0, 15.5], [62.0, 12.0], [63.0, 12.0], [66.0, 13.0], [64.0, 129.5], [67.0, 17.0], [65.0, 15.0], [71.0, 24.0], [69.0, 30.0], [70.0, 24.0], [68.0, 18.5], [75.0, 24.0], [72.0, 21.5], [73.0, 20.0], [74.0, 19.0], [78.0, 20.0], [76.0, 20.0], [77.0, 26.0], [79.0, 18.0], [80.0, 17.0], [82.0, 15.0], [83.0, 21.0], [81.0, 17.0], [85.0, 24.0], [84.0, 22.0], [87.0, 30.0], [86.0, 30.0], [89.0, 59.0], [91.0, 106.0], [88.0, 56.0], [90.0, 107.0], [92.0, 105.5], [93.0, 88.0], [95.0, 208.0], [94.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7.0, "minX": 4.0, "maxY": 208.0, "series": [{"data": [[4.0, 11.0], [8.0, 13.0], [12.0, 9.0], [16.0, 8.5], [20.0, 7.0], [25.0, 10.0], [29.0, 12.0], [33.0, 11.0], [37.0, 10.0], [41.0, 13.0], [45.0, 11.0], [50.0, 9.0], [54.0, 8.5], [57.0, 11.0], [56.0, 10.0], [58.0, 11.0], [60.0, 12.0], [61.0, 15.5], [62.0, 12.0], [63.0, 12.0], [66.0, 13.0], [64.0, 129.5], [67.0, 17.0], [65.0, 15.0], [71.0, 24.0], [69.0, 30.0], [70.0, 24.0], [68.0, 18.5], [75.0, 24.0], [72.0, 21.5], [73.0, 20.0], [74.0, 19.0], [78.0, 20.0], [76.0, 20.0], [77.0, 26.0], [79.0, 18.0], [80.0, 17.0], [82.0, 15.0], [83.0, 21.0], [81.0, 17.0], [85.0, 24.0], [84.0, 22.0], [87.0, 30.0], [86.0, 30.0], [89.0, 59.0], [91.0, 106.0], [88.0, 56.0], [90.0, 107.0], [92.0, 105.5], [93.0, 88.0], [95.0, 208.0], [94.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.316666666666666, "minX": 1.71922716E12, "maxY": 80.23333333333333, "series": [{"data": [[1.71922758E12, 78.85], [1.7192274E12, 78.03333333333333], [1.7192277E12, 79.31666666666666], [1.71922722E12, 79.06666666666666], [1.71922752E12, 80.23333333333333], [1.71922734E12, 78.35], [1.71922764E12, 78.53333333333333], [1.71922716E12, 22.316666666666666], [1.71922746E12, 78.75], [1.71922776E12, 42.6], [1.71922728E12, 79.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922776E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 22.316666666666666, "minX": 1.71922716E12, "maxY": 80.11666666666666, "series": [{"data": [[1.71922758E12, 78.95], [1.7192274E12, 77.81666666666666], [1.7192277E12, 79.1], [1.71922722E12, 79.01666666666667], [1.71922752E12, 80.11666666666666], [1.71922734E12, 78.3], [1.71922764E12, 78.51666666666667], [1.71922716E12, 22.316666666666666], [1.71922746E12, 79.05], [1.71922776E12, 42.86666666666667], [1.71922728E12, 79.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922776E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 22.316666666666666, "minX": 1.71922716E12, "maxY": 80.11666666666666, "series": [{"data": [[1.71922758E12, 78.95], [1.7192274E12, 77.81666666666666], [1.7192277E12, 79.1], [1.71922722E12, 79.01666666666667], [1.71922752E12, 80.11666666666666], [1.71922734E12, 78.3], [1.71922764E12, 78.51666666666667], [1.71922716E12, 22.316666666666666], [1.71922746E12, 79.05], [1.71922776E12, 42.86666666666667], [1.71922728E12, 79.95]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922776E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 22.316666666666666, "minX": 1.71922716E12, "maxY": 80.11666666666666, "series": [{"data": [[1.71922758E12, 78.95], [1.7192274E12, 77.81666666666666], [1.7192277E12, 79.1], [1.71922722E12, 79.01666666666667], [1.71922752E12, 80.11666666666666], [1.71922734E12, 78.3], [1.71922764E12, 78.51666666666667], [1.71922716E12, 22.316666666666666], [1.71922746E12, 79.05], [1.71922776E12, 42.86666666666667], [1.71922728E12, 79.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922776E12, "title": "Total Transactions Per Second"}},
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

