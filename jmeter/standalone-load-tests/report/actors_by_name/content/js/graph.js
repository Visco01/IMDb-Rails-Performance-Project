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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 888.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 7.0], [6.7, 7.0], [6.8, 7.0], [6.9, 7.0], [7.0, 7.0], [7.1, 7.0], [7.2, 7.0], [7.3, 7.0], [7.4, 7.0], [7.5, 7.0], [7.6, 7.0], [7.7, 7.0], [7.8, 7.0], [7.9, 7.0], [8.0, 7.0], [8.1, 7.0], [8.2, 7.0], [8.3, 7.0], [8.4, 7.0], [8.5, 7.0], [8.6, 7.0], [8.7, 7.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 8.0], [11.9, 8.0], [12.0, 8.0], [12.1, 8.0], [12.2, 8.0], [12.3, 8.0], [12.4, 8.0], [12.5, 8.0], [12.6, 8.0], [12.7, 8.0], [12.8, 8.0], [12.9, 8.0], [13.0, 8.0], [13.1, 8.0], [13.2, 8.0], [13.3, 8.0], [13.4, 8.0], [13.5, 8.0], [13.6, 8.0], [13.7, 8.0], [13.8, 8.0], [13.9, 8.0], [14.0, 8.0], [14.1, 8.0], [14.2, 8.0], [14.3, 8.0], [14.4, 8.0], [14.5, 8.0], [14.6, 8.0], [14.7, 8.0], [14.8, 8.0], [14.9, 8.0], [15.0, 8.0], [15.1, 8.0], [15.2, 8.0], [15.3, 8.0], [15.4, 8.0], [15.5, 8.0], [15.6, 8.0], [15.7, 8.0], [15.8, 8.0], [15.9, 8.0], [16.0, 8.0], [16.1, 8.0], [16.2, 8.0], [16.3, 8.0], [16.4, 8.0], [16.5, 8.0], [16.6, 9.0], [16.7, 9.0], [16.8, 9.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 9.0], [18.2, 9.0], [18.3, 9.0], [18.4, 9.0], [18.5, 9.0], [18.6, 9.0], [18.7, 9.0], [18.8, 9.0], [18.9, 9.0], [19.0, 9.0], [19.1, 9.0], [19.2, 9.0], [19.3, 9.0], [19.4, 9.0], [19.5, 9.0], [19.6, 9.0], [19.7, 9.0], [19.8, 9.0], [19.9, 9.0], [20.0, 9.0], [20.1, 9.0], [20.2, 9.0], [20.3, 9.0], [20.4, 9.0], [20.5, 10.0], [20.6, 10.0], [20.7, 10.0], [20.8, 10.0], [20.9, 10.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 10.0], [21.4, 10.0], [21.5, 10.0], [21.6, 10.0], [21.7, 10.0], [21.8, 10.0], [21.9, 10.0], [22.0, 10.0], [22.1, 10.0], [22.2, 10.0], [22.3, 10.0], [22.4, 10.0], [22.5, 10.0], [22.6, 10.0], [22.7, 10.0], [22.8, 10.0], [22.9, 10.0], [23.0, 10.0], [23.1, 10.0], [23.2, 10.0], [23.3, 10.0], [23.4, 10.0], [23.5, 10.0], [23.6, 10.0], [23.7, 10.0], [23.8, 10.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 11.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 11.0], [27.0, 11.0], [27.1, 11.0], [27.2, 11.0], [27.3, 11.0], [27.4, 11.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 13.0], [30.9, 13.0], [31.0, 13.0], [31.1, 13.0], [31.2, 13.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 13.0], [32.3, 13.0], [32.4, 13.0], [32.5, 13.0], [32.6, 13.0], [32.7, 13.0], [32.8, 13.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 14.0], [33.4, 14.0], [33.5, 14.0], [33.6, 14.0], [33.7, 14.0], [33.8, 14.0], [33.9, 14.0], [34.0, 14.0], [34.1, 14.0], [34.2, 14.0], [34.3, 14.0], [34.4, 14.0], [34.5, 14.0], [34.6, 14.0], [34.7, 14.0], [34.8, 14.0], [34.9, 14.0], [35.0, 14.0], [35.1, 14.0], [35.2, 14.0], [35.3, 14.0], [35.4, 14.0], [35.5, 14.0], [35.6, 15.0], [35.7, 15.0], [35.8, 15.0], [35.9, 15.0], [36.0, 15.0], [36.1, 15.0], [36.2, 15.0], [36.3, 15.0], [36.4, 15.0], [36.5, 15.0], [36.6, 15.0], [36.7, 15.0], [36.8, 15.0], [36.9, 15.0], [37.0, 15.0], [37.1, 15.0], [37.2, 15.0], [37.3, 15.0], [37.4, 16.0], [37.5, 16.0], [37.6, 16.0], [37.7, 16.0], [37.8, 16.0], [37.9, 16.0], [38.0, 16.0], [38.1, 16.0], [38.2, 16.0], [38.3, 16.0], [38.4, 16.0], [38.5, 16.0], [38.6, 16.0], [38.7, 16.0], [38.8, 16.0], [38.9, 16.0], [39.0, 17.0], [39.1, 17.0], [39.2, 17.0], [39.3, 17.0], [39.4, 17.0], [39.5, 17.0], [39.6, 17.0], [39.7, 17.0], [39.8, 17.0], [39.9, 17.0], [40.0, 17.0], [40.1, 17.0], [40.2, 18.0], [40.3, 18.0], [40.4, 18.0], [40.5, 18.0], [40.6, 18.0], [40.7, 18.0], [40.8, 18.0], [40.9, 18.0], [41.0, 18.0], [41.1, 18.0], [41.2, 18.0], [41.3, 18.0], [41.4, 18.0], [41.5, 19.0], [41.6, 19.0], [41.7, 19.0], [41.8, 19.0], [41.9, 19.0], [42.0, 19.0], [42.1, 19.0], [42.2, 19.0], [42.3, 19.0], [42.4, 19.0], [42.5, 19.0], [42.6, 19.0], [42.7, 19.0], [42.8, 20.0], [42.9, 20.0], [43.0, 20.0], [43.1, 20.0], [43.2, 20.0], [43.3, 20.0], [43.4, 20.0], [43.5, 20.0], [43.6, 20.0], [43.7, 20.0], [43.8, 21.0], [43.9, 21.0], [44.0, 21.0], [44.1, 21.0], [44.2, 21.0], [44.3, 21.0], [44.4, 21.0], [44.5, 21.0], [44.6, 21.0], [44.7, 22.0], [44.8, 22.0], [44.9, 22.0], [45.0, 22.0], [45.1, 22.0], [45.2, 22.0], [45.3, 22.0], [45.4, 22.0], [45.5, 23.0], [45.6, 23.0], [45.7, 23.0], [45.8, 23.0], [45.9, 23.0], [46.0, 23.0], [46.1, 23.0], [46.2, 23.0], [46.3, 24.0], [46.4, 24.0], [46.5, 24.0], [46.6, 24.0], [46.7, 24.0], [46.8, 24.0], [46.9, 24.0], [47.0, 25.0], [47.1, 25.0], [47.2, 25.0], [47.3, 25.0], [47.4, 25.0], [47.5, 25.0], [47.6, 26.0], [47.7, 26.0], [47.8, 26.0], [47.9, 26.0], [48.0, 26.0], [48.1, 26.0], [48.2, 27.0], [48.3, 27.0], [48.4, 27.0], [48.5, 27.0], [48.6, 27.0], [48.7, 27.0], [48.8, 28.0], [48.9, 28.0], [49.0, 28.0], [49.1, 28.0], [49.2, 28.0], [49.3, 29.0], [49.4, 29.0], [49.5, 29.0], [49.6, 29.0], [49.7, 30.0], [49.8, 30.0], [49.9, 30.0], [50.0, 30.0], [50.1, 30.0], [50.2, 31.0], [50.3, 31.0], [50.4, 31.0], [50.5, 31.0], [50.6, 32.0], [50.7, 32.0], [50.8, 32.0], [50.9, 32.0], [51.0, 33.0], [51.1, 33.0], [51.2, 33.0], [51.3, 33.0], [51.4, 34.0], [51.5, 34.0], [51.6, 34.0], [51.7, 34.0], [51.8, 35.0], [51.9, 35.0], [52.0, 35.0], [52.1, 35.0], [52.2, 36.0], [52.3, 36.0], [52.4, 36.0], [52.5, 37.0], [52.6, 37.0], [52.7, 37.0], [52.8, 38.0], [52.9, 38.0], [53.0, 38.0], [53.1, 39.0], [53.2, 39.0], [53.3, 40.0], [53.4, 40.0], [53.5, 40.0], [53.6, 41.0], [53.7, 41.0], [53.8, 42.0], [53.9, 42.0], [54.0, 42.0], [54.1, 43.0], [54.2, 43.0], [54.3, 44.0], [54.4, 44.0], [54.5, 44.0], [54.6, 45.0], [54.7, 45.0], [54.8, 46.0], [54.9, 46.0], [55.0, 47.0], [55.1, 47.0], [55.2, 48.0], [55.3, 48.0], [55.4, 49.0], [55.5, 49.0], [55.6, 50.0], [55.7, 50.0], [55.8, 51.0], [55.9, 51.0], [56.0, 52.0], [56.1, 53.0], [56.2, 53.0], [56.3, 54.0], [56.4, 54.0], [56.5, 55.0], [56.6, 55.0], [56.7, 56.0], [56.8, 56.0], [56.9, 57.0], [57.0, 57.0], [57.1, 58.0], [57.2, 58.0], [57.3, 59.0], [57.4, 59.0], [57.5, 60.0], [57.6, 60.0], [57.7, 61.0], [57.8, 61.0], [57.9, 61.0], [58.0, 62.0], [58.1, 62.0], [58.2, 63.0], [58.3, 63.0], [58.4, 64.0], [58.5, 64.0], [58.6, 65.0], [58.7, 65.0], [58.8, 66.0], [58.9, 66.0], [59.0, 67.0], [59.1, 67.0], [59.2, 68.0], [59.3, 68.0], [59.4, 69.0], [59.5, 69.0], [59.6, 69.0], [59.7, 70.0], [59.8, 70.0], [59.9, 71.0], [60.0, 71.0], [60.1, 72.0], [60.2, 72.0], [60.3, 72.0], [60.4, 73.0], [60.5, 73.0], [60.6, 74.0], [60.7, 74.0], [60.8, 74.0], [60.9, 75.0], [61.0, 75.0], [61.1, 76.0], [61.2, 76.0], [61.3, 76.0], [61.4, 77.0], [61.5, 77.0], [61.6, 78.0], [61.7, 78.0], [61.8, 78.0], [61.9, 79.0], [62.0, 79.0], [62.1, 80.0], [62.2, 80.0], [62.3, 80.0], [62.4, 81.0], [62.5, 81.0], [62.6, 82.0], [62.7, 82.0], [62.8, 82.0], [62.9, 83.0], [63.0, 83.0], [63.1, 83.0], [63.2, 84.0], [63.3, 84.0], [63.4, 84.0], [63.5, 85.0], [63.6, 85.0], [63.7, 85.0], [63.8, 86.0], [63.9, 86.0], [64.0, 86.0], [64.1, 87.0], [64.2, 87.0], [64.3, 87.0], [64.4, 88.0], [64.5, 88.0], [64.6, 88.0], [64.7, 89.0], [64.8, 89.0], [64.9, 89.0], [65.0, 90.0], [65.1, 90.0], [65.2, 91.0], [65.3, 91.0], [65.4, 91.0], [65.5, 92.0], [65.6, 92.0], [65.7, 92.0], [65.8, 93.0], [65.9, 93.0], [66.0, 93.0], [66.1, 94.0], [66.2, 94.0], [66.3, 94.0], [66.4, 95.0], [66.5, 95.0], [66.6, 95.0], [66.7, 95.0], [66.8, 96.0], [66.9, 96.0], [67.0, 96.0], [67.1, 97.0], [67.2, 97.0], [67.3, 97.0], [67.4, 98.0], [67.5, 98.0], [67.6, 98.0], [67.7, 99.0], [67.8, 99.0], [67.9, 99.0], [68.0, 100.0], [68.1, 100.0], [68.2, 100.0], [68.3, 101.0], [68.4, 101.0], [68.5, 101.0], [68.6, 102.0], [68.7, 102.0], [68.8, 102.0], [68.9, 102.0], [69.0, 103.0], [69.1, 103.0], [69.2, 104.0], [69.3, 104.0], [69.4, 104.0], [69.5, 104.0], [69.6, 105.0], [69.7, 105.0], [69.8, 105.0], [69.9, 106.0], [70.0, 106.0], [70.1, 106.0], [70.2, 107.0], [70.3, 107.0], [70.4, 107.0], [70.5, 108.0], [70.6, 108.0], [70.7, 108.0], [70.8, 109.0], [70.9, 109.0], [71.0, 109.0], [71.1, 110.0], [71.2, 110.0], [71.3, 111.0], [71.4, 111.0], [71.5, 111.0], [71.6, 112.0], [71.7, 112.0], [71.8, 113.0], [71.9, 113.0], [72.0, 114.0], [72.1, 114.0], [72.2, 114.0], [72.3, 115.0], [72.4, 115.0], [72.5, 116.0], [72.6, 116.0], [72.7, 116.0], [72.8, 117.0], [72.9, 117.0], [73.0, 118.0], [73.1, 118.0], [73.2, 118.0], [73.3, 119.0], [73.4, 119.0], [73.5, 120.0], [73.6, 120.0], [73.7, 120.0], [73.8, 121.0], [73.9, 121.0], [74.0, 122.0], [74.1, 122.0], [74.2, 123.0], [74.3, 123.0], [74.4, 124.0], [74.5, 124.0], [74.6, 125.0], [74.7, 125.0], [74.8, 126.0], [74.9, 126.0], [75.0, 127.0], [75.1, 128.0], [75.2, 128.0], [75.3, 129.0], [75.4, 129.0], [75.5, 130.0], [75.6, 130.0], [75.7, 131.0], [75.8, 131.0], [75.9, 132.0], [76.0, 133.0], [76.1, 134.0], [76.2, 134.0], [76.3, 135.0], [76.4, 136.0], [76.5, 136.0], [76.6, 137.0], [76.7, 137.0], [76.8, 138.0], [76.9, 139.0], [77.0, 139.0], [77.1, 140.0], [77.2, 141.0], [77.3, 141.0], [77.4, 142.0], [77.5, 142.0], [77.6, 143.0], [77.7, 144.0], [77.8, 145.0], [77.9, 145.0], [78.0, 146.0], [78.1, 147.0], [78.2, 147.0], [78.3, 148.0], [78.4, 148.0], [78.5, 149.0], [78.6, 150.0], [78.7, 150.0], [78.8, 151.0], [78.9, 152.0], [79.0, 153.0], [79.1, 153.0], [79.2, 154.0], [79.3, 155.0], [79.4, 155.0], [79.5, 156.0], [79.6, 157.0], [79.7, 158.0], [79.8, 158.0], [79.9, 159.0], [80.0, 160.0], [80.1, 161.0], [80.2, 161.0], [80.3, 162.0], [80.4, 162.0], [80.5, 163.0], [80.6, 164.0], [80.7, 164.0], [80.8, 165.0], [80.9, 165.0], [81.0, 166.0], [81.1, 166.0], [81.2, 167.0], [81.3, 167.0], [81.4, 168.0], [81.5, 169.0], [81.6, 169.0], [81.7, 170.0], [81.8, 170.0], [81.9, 171.0], [82.0, 171.0], [82.1, 172.0], [82.2, 172.0], [82.3, 173.0], [82.4, 173.0], [82.5, 174.0], [82.6, 174.0], [82.7, 175.0], [82.8, 175.0], [82.9, 176.0], [83.0, 176.0], [83.1, 177.0], [83.2, 177.0], [83.3, 178.0], [83.4, 178.0], [83.5, 179.0], [83.6, 179.0], [83.7, 180.0], [83.8, 180.0], [83.9, 181.0], [84.0, 182.0], [84.1, 182.0], [84.2, 183.0], [84.3, 183.0], [84.4, 184.0], [84.5, 184.0], [84.6, 185.0], [84.7, 185.0], [84.8, 186.0], [84.9, 186.0], [85.0, 187.0], [85.1, 187.0], [85.2, 188.0], [85.3, 188.0], [85.4, 189.0], [85.5, 189.0], [85.6, 190.0], [85.7, 190.0], [85.8, 191.0], [85.9, 191.0], [86.0, 192.0], [86.1, 193.0], [86.2, 193.0], [86.3, 194.0], [86.4, 194.0], [86.5, 195.0], [86.6, 195.0], [86.7, 196.0], [86.8, 196.0], [86.9, 197.0], [87.0, 197.0], [87.1, 198.0], [87.2, 198.0], [87.3, 199.0], [87.4, 199.0], [87.5, 200.0], [87.6, 200.0], [87.7, 201.0], [87.8, 201.0], [87.9, 202.0], [88.0, 203.0], [88.1, 203.0], [88.2, 204.0], [88.3, 204.0], [88.4, 205.0], [88.5, 205.0], [88.6, 206.0], [88.7, 207.0], [88.8, 207.0], [88.9, 208.0], [89.0, 208.0], [89.1, 209.0], [89.2, 209.0], [89.3, 210.0], [89.4, 211.0], [89.5, 211.0], [89.6, 212.0], [89.7, 213.0], [89.8, 213.0], [89.9, 214.0], [90.0, 215.0], [90.1, 215.0], [90.2, 216.0], [90.3, 217.0], [90.4, 218.0], [90.5, 218.0], [90.6, 219.0], [90.7, 220.0], [90.8, 221.0], [90.9, 221.0], [91.0, 222.0], [91.1, 223.0], [91.2, 223.0], [91.3, 224.0], [91.4, 225.0], [91.5, 226.0], [91.6, 227.0], [91.7, 228.0], [91.8, 229.0], [91.9, 230.0], [92.0, 231.0], [92.1, 232.0], [92.2, 233.0], [92.3, 234.0], [92.4, 235.0], [92.5, 236.0], [92.6, 238.0], [92.7, 239.0], [92.8, 241.0], [92.9, 241.0], [93.0, 243.0], [93.1, 244.0], [93.2, 245.0], [93.3, 246.0], [93.4, 247.0], [93.5, 248.0], [93.6, 250.0], [93.7, 251.0], [93.8, 252.0], [93.9, 253.0], [94.0, 254.0], [94.1, 255.0], [94.2, 256.0], [94.3, 257.0], [94.4, 258.0], [94.5, 259.0], [94.6, 261.0], [94.7, 262.0], [94.8, 263.0], [94.9, 264.0], [95.0, 265.0], [95.1, 266.0], [95.2, 267.0], [95.3, 268.0], [95.4, 269.0], [95.5, 270.0], [95.6, 271.0], [95.7, 272.0], [95.8, 272.0], [95.9, 273.0], [96.0, 274.0], [96.1, 275.0], [96.2, 276.0], [96.3, 277.0], [96.4, 278.0], [96.5, 279.0], [96.6, 280.0], [96.7, 281.0], [96.8, 282.0], [96.9, 283.0], [97.0, 284.0], [97.1, 285.0], [97.2, 286.0], [97.3, 287.0], [97.4, 288.0], [97.5, 289.0], [97.6, 290.0], [97.7, 291.0], [97.8, 292.0], [97.9, 293.0], [98.0, 294.0], [98.1, 295.0], [98.2, 296.0], [98.3, 298.0], [98.4, 300.0], [98.5, 301.0], [98.6, 303.0], [98.7, 305.0], [98.8, 307.0], [98.9, 310.0], [99.0, 313.0], [99.1, 318.0], [99.2, 323.0], [99.3, 330.0], [99.4, 339.0], [99.5, 347.0], [99.6, 354.0], [99.7, 360.0], [99.8, 371.0], [99.9, 391.0], [100.0, 888.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 31336.0, "series": [{"data": [[0.0, 31336.0], [300.0, 712.0], [600.0, 6.0], [700.0, 2.0], [100.0, 8967.0], [200.0, 5047.0], [400.0, 17.0], [800.0, 4.0], [500.0, 8.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 46079.0, "series": [{"data": [[0.0, 46079.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 20.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 85.70952927669337, "minX": 1.71922536E12, "maxY": 100.0, "series": [{"data": [[1.71922548E12, 100.0], [1.71922596E12, 97.75158946412351], [1.71922566E12, 100.0], [1.7192256E12, 100.0], [1.71922578E12, 100.0], [1.71922572E12, 100.0], [1.71922542E12, 100.0], [1.7192259E12, 100.0], [1.71922536E12, 85.70952927669337], [1.71922584E12, 100.0], [1.71922554E12, 100.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922596E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.0, "maxY": 151.66666666666669, "series": [{"data": [[2.0, 21.0], [3.0, 51.0], [4.0, 55.0], [5.0, 51.0], [6.0, 50.0], [7.0, 26.0], [8.0, 151.66666666666669], [9.0, 14.0], [10.0, 16.0], [11.0, 14.5], [12.0, 13.5], [13.0, 10.5], [14.0, 10.5], [15.0, 20.666666666666668], [16.0, 19.666666666666664], [17.0, 18.0], [18.0, 22.333333333333336], [19.0, 20.0], [20.0, 28.4], [21.0, 30.0], [22.0, 34.25], [23.0, 34.25], [24.0, 34.0], [25.0, 32.0], [26.0, 26.166666666666664], [27.0, 30.2], [28.0, 21.4], [29.0, 26.2], [30.0, 27.4], [31.0, 26.6], [32.0, 24.833333333333336], [33.0, 23.0], [34.0, 24.57142857142857], [35.0, 25.8], [36.0, 28.333333333333332], [37.0, 20.5], [38.0, 23.333333333333336], [39.0, 27.11111111111111], [40.0, 19.285714285714285], [41.0, 21.142857142857146], [42.0, 16.57142857142857], [43.0, 14.857142857142858], [44.0, 12.999999999999998], [45.0, 8.4], [46.0, 8.5], [47.0, 9.375], [48.0, 15.666666666666668], [49.0, 12.57142857142857], [50.0, 11.25], [51.0, 11.666666666666668], [52.0, 12.375], [53.0, 8.0], [54.0, 12.666666666666664], [55.0, 9.222222222222223], [56.0, 8.0], [57.0, 13.5], [58.0, 9.4], [59.0, 10.399999999999999], [60.0, 10.4], [61.0, 10.6], [62.0, 11.6], [63.0, 11.307692307692307], [64.0, 34.63636363636363], [65.0, 10.727272727272727], [66.0, 7.583333333333334], [67.0, 10.3], [68.0, 9.272727272727273], [69.0, 10.285714285714286], [70.0, 13.916666666666666], [71.0, 11.666666666666666], [72.0, 12.000000000000002], [73.0, 10.727272727272727], [74.0, 14.333333333333332], [75.0, 16.933333333333334], [76.0, 16.692307692307693], [77.0, 9.5], [78.0, 11.76923076923077], [79.0, 14.666666666666664], [80.0, 15.076923076923077], [81.0, 14.6875], [82.0, 21.714285714285715], [83.0, 16.785714285714285], [84.0, 14.066666666666666], [85.0, 13.846153846153847], [86.0, 17.923076923076923], [87.0, 14.11111111111111], [88.0, 21.4], [89.0, 47.0], [90.0, 18.25], [91.0, 17.5], [92.0, 22.357142857142858], [93.0, 22.555555555555557], [94.0, 23.461538461538463], [95.0, 25.999999999999996], [96.0, 16.294117647058822], [97.0, 19.176470588235293], [98.0, 14.799999999999997], [99.0, 17.5], [100.0, 79.69072780332499], [1.0, 7.0]], "isOverall": false, "label": "Actors by name", "isController": false}, {"data": [[99.35258899325393, 78.52508731208893]], "isOverall": false, "label": "Actors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4456.016666666666, "minX": 1.71922536E12, "maxY": 123484.43333333333, "series": [{"data": [[1.71922548E12, 105095.1], [1.71922596E12, 45114.1], [1.71922566E12, 99387.31666666667], [1.7192256E12, 93927.41666666667], [1.71922578E12, 99734.0], [1.71922572E12, 123484.43333333333], [1.71922542E12, 116550.16666666667], [1.7192259E12, 97907.28333333334], [1.71922536E12, 33882.51666666667], [1.71922584E12, 119726.15], [1.71922554E12, 102343.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71922548E12, 12078.766666666666], [1.71922596E12, 5698.116666666667], [1.71922566E12, 12150.6], [1.7192256E12, 12417.433333333332], [1.71922578E12, 12101.75], [1.71922572E12, 11847.933333333332], [1.71922542E12, 12179.533333333333], [1.7192259E12, 12032.883333333333], [1.71922536E12, 4456.016666666666], [1.71922584E12, 11871.4], [1.71922554E12, 12173.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922596E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 23.53386911595868, "minX": 1.71922536E12, "maxY": 103.28108695652166, "series": [{"data": [[1.71922548E12, 83.81256678777504], [1.71922596E12, 77.88646684831977], [1.71922566E12, 79.68480580452398], [1.7192256E12, 52.52553679382937], [1.71922578E12, 82.75599315068511], [1.71922572E12, 103.28108695652166], [1.71922542E12, 69.65790589232745], [1.7192259E12, 89.66802662658371], [1.71922536E12, 23.53386911595868], [1.71922584E12, 101.95490026019102], [1.71922554E12, 65.84790874524717]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922596E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 23.524110218140105, "minX": 1.71922536E12, "maxY": 103.28000000000002, "series": [{"data": [[1.71922548E12, 83.80978841632827], [1.71922596E12, 77.88601271571301], [1.71922566E12, 79.68395219803668], [1.7192256E12, 52.52428601209072], [1.71922578E12, 82.75428082191799], [1.71922572E12, 103.28000000000002], [1.71922542E12, 69.65345485375134], [1.7192259E12, 89.66630878247773], [1.71922536E12, 23.524110218140105], [1.71922584E12, 101.95424978317426], [1.71922554E12, 65.84706379383177]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922596E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71922536E12, "maxY": 0.03960964408725607, "series": [{"data": [[1.71922548E12, 0.006625347296430861], [1.71922596E12, 0.0], [1.71922566E12, 0.005121638924455834], [1.7192256E12, 0.003335417969564309], [1.71922578E12, 0.004494863013698631], [1.71922572E12, 0.004347826086956528], [1.71922542E12, 0.0074183976261127625], [1.7192259E12, 0.0032209576980889013], [1.71922536E12, 0.03960964408725607], [1.71922584E12, 0.006071118820468351], [1.71922554E12, 0.005703422053231939]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922596E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.71922536E12, "maxY": 888.0, "series": [{"data": [[1.71922548E12, 502.0], [1.71922596E12, 365.0], [1.71922566E12, 804.0], [1.7192256E12, 483.0], [1.71922578E12, 607.0], [1.71922572E12, 622.0], [1.71922542E12, 383.0], [1.7192259E12, 888.0], [1.71922536E12, 304.0], [1.71922584E12, 516.0], [1.71922554E12, 397.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71922548E12, 4.0], [1.71922596E12, 4.0], [1.71922566E12, 4.0], [1.7192256E12, 4.0], [1.71922578E12, 4.0], [1.71922572E12, 4.0], [1.71922542E12, 4.0], [1.7192259E12, 3.0], [1.71922536E12, 4.0], [1.71922584E12, 4.0], [1.71922554E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71922548E12, 216.0], [1.71922596E12, 224.0], [1.71922566E12, 204.30000000000018], [1.7192256E12, 163.0], [1.71922578E12, 224.0], [1.71922572E12, 244.0], [1.71922542E12, 198.0], [1.7192259E12, 229.0], [1.71922536E12, 68.0], [1.71922584E12, 250.0], [1.71922554E12, 197.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71922548E12, 310.0], [1.71922596E12, 308.0], [1.71922566E12, 306.1300000000001], [1.7192256E12, 294.0], [1.71922578E12, 319.0], [1.71922572E12, 320.0], [1.71922542E12, 296.6200000000008], [1.7192259E12, 358.0], [1.71922536E12, 142.13999999999987], [1.71922584E12, 339.0], [1.71922554E12, 306.64999999999964]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71922548E12, 41.0], [1.71922596E12, 28.0], [1.71922566E12, 40.0], [1.7192256E12, 15.0], [1.71922578E12, 36.0], [1.71922572E12, 83.0], [1.71922542E12, 24.0], [1.7192259E12, 48.0], [1.71922536E12, 12.0], [1.71922584E12, 79.0], [1.71922554E12, 20.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71922548E12, 266.0], [1.71922596E12, 272.0], [1.71922566E12, 254.0], [1.7192256E12, 221.0], [1.71922578E12, 272.0], [1.71922572E12, 281.0], [1.71922542E12, 243.0], [1.7192259E12, 277.0], [1.71922536E12, 100.84999999999991], [1.71922584E12, 281.0], [1.71922554E12, 252.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922596E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8.0, "minX": 4.0, "maxY": 208.5, "series": [{"data": [[4.0, 79.0], [7.0, 12.0], [10.0, 12.5], [13.0, 17.0], [16.0, 13.0], [23.0, 10.5], [28.0, 11.5], [30.0, 11.0], [36.0, 8.0], [43.0, 9.0], [50.0, 12.0], [51.0, 10.0], [57.0, 11.0], [56.0, 30.5], [59.0, 28.5], [58.0, 51.5], [61.0, 13.0], [60.0, 14.5], [63.0, 17.0], [62.0, 69.5], [67.0, 23.0], [66.0, 39.5], [64.0, 64.5], [65.0, 15.0], [69.0, 38.0], [71.0, 39.0], [70.0, 60.0], [68.0, 31.0], [74.0, 32.0], [75.0, 38.0], [73.0, 57.0], [72.0, 42.5], [78.0, 38.0], [79.0, 27.0], [77.0, 48.0], [76.0, 31.0], [80.0, 19.0], [82.0, 25.0], [83.0, 23.0], [81.0, 17.0], [85.0, 27.0], [84.0, 21.0], [86.0, 27.0], [87.0, 52.0], [89.0, 134.0], [88.0, 38.0], [90.0, 143.5], [91.0, 83.0], [92.0, 103.0], [94.0, 81.0], [95.0, 208.5], [93.0, 28.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 4.0, "maxY": 208.5, "series": [{"data": [[4.0, 79.0], [7.0, 12.0], [10.0, 12.5], [13.0, 17.0], [16.0, 13.0], [23.0, 10.5], [28.0, 11.5], [30.0, 11.0], [36.0, 8.0], [43.0, 9.0], [50.0, 12.0], [51.0, 10.0], [57.0, 11.0], [56.0, 30.5], [59.0, 28.5], [58.0, 51.5], [61.0, 13.0], [60.0, 14.5], [63.0, 17.0], [62.0, 69.5], [67.0, 23.0], [66.0, 39.5], [64.0, 64.5], [65.0, 15.0], [69.0, 38.0], [71.0, 39.0], [70.0, 60.0], [68.0, 31.0], [74.0, 32.0], [75.0, 38.0], [73.0, 57.0], [72.0, 42.5], [78.0, 38.0], [79.0, 27.0], [77.0, 48.0], [76.0, 31.0], [80.0, 19.0], [82.0, 25.0], [83.0, 23.0], [81.0, 17.0], [85.0, 27.0], [84.0, 21.0], [86.0, 27.0], [87.0, 52.0], [89.0, 134.0], [88.0, 38.0], [90.0, 143.5], [91.0, 83.0], [92.0, 103.0], [94.0, 81.0], [95.0, 208.5], [93.0, 28.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 29.033333333333335, "minX": 1.71922536E12, "maxY": 80.01666666666667, "series": [{"data": [[1.71922548E12, 77.86666666666666], [1.71922596E12, 36.7], [1.71922566E12, 78.15], [1.7192256E12, 80.01666666666667], [1.71922578E12, 77.91666666666667], [1.71922572E12, 76.71666666666667], [1.71922542E12, 78.8], [1.7192259E12, 77.61666666666666], [1.71922536E12, 29.033333333333335], [1.71922584E12, 76.65], [1.71922554E12, 78.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922596E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 29.033333333333335, "minX": 1.71922536E12, "maxY": 79.95, "series": [{"data": [[1.71922548E12, 77.98333333333333], [1.71922596E12, 36.7], [1.71922566E12, 78.1], [1.7192256E12, 79.95], [1.71922578E12, 77.86666666666666], [1.71922572E12, 76.66666666666667], [1.71922542E12, 78.63333333333334], [1.7192259E12, 77.61666666666666], [1.71922536E12, 29.033333333333335], [1.71922584E12, 76.86666666666666], [1.71922554E12, 78.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922596E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 29.033333333333335, "minX": 1.71922536E12, "maxY": 79.95, "series": [{"data": [[1.71922548E12, 77.98333333333333], [1.71922596E12, 36.7], [1.71922566E12, 78.1], [1.7192256E12, 79.95], [1.71922578E12, 77.86666666666666], [1.71922572E12, 76.66666666666667], [1.71922542E12, 78.63333333333334], [1.7192259E12, 77.61666666666666], [1.71922536E12, 29.033333333333335], [1.71922584E12, 76.86666666666666], [1.71922554E12, 78.9]], "isOverall": false, "label": "Actors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922596E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 29.033333333333335, "minX": 1.71922536E12, "maxY": 79.95, "series": [{"data": [[1.71922548E12, 77.98333333333333], [1.71922596E12, 36.7], [1.71922566E12, 78.1], [1.7192256E12, 79.95], [1.71922578E12, 77.86666666666666], [1.71922572E12, 76.66666666666667], [1.71922542E12, 78.63333333333334], [1.7192259E12, 77.61666666666666], [1.71922536E12, 29.033333333333335], [1.71922584E12, 76.86666666666666], [1.71922554E12, 78.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922596E12, "title": "Total Transactions Per Second"}},
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

