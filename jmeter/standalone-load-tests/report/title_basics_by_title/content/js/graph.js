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
        data: {"result": {"minY": 38.0, "minX": 0.0, "maxY": 2047.0, "series": [{"data": [[0.0, 38.0], [0.1, 40.0], [0.2, 40.0], [0.3, 40.0], [0.4, 40.0], [0.5, 41.0], [0.6, 41.0], [0.7, 41.0], [0.8, 41.0], [0.9, 41.0], [1.0, 41.0], [1.1, 41.0], [1.2, 41.0], [1.3, 41.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 42.0], [1.8, 42.0], [1.9, 42.0], [2.0, 42.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 42.0], [3.1, 42.0], [3.2, 42.0], [3.3, 42.0], [3.4, 42.0], [3.5, 42.0], [3.6, 42.0], [3.7, 42.0], [3.8, 42.0], [3.9, 43.0], [4.0, 43.0], [4.1, 43.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 43.0], [4.6, 43.0], [4.7, 43.0], [4.8, 43.0], [4.9, 43.0], [5.0, 43.0], [5.1, 43.0], [5.2, 43.0], [5.3, 43.0], [5.4, 43.0], [5.5, 43.0], [5.6, 43.0], [5.7, 43.0], [5.8, 43.0], [5.9, 43.0], [6.0, 43.0], [6.1, 43.0], [6.2, 43.0], [6.3, 43.0], [6.4, 43.0], [6.5, 43.0], [6.6, 43.0], [6.7, 43.0], [6.8, 44.0], [6.9, 44.0], [7.0, 44.0], [7.1, 44.0], [7.2, 44.0], [7.3, 44.0], [7.4, 44.0], [7.5, 44.0], [7.6, 44.0], [7.7, 44.0], [7.8, 44.0], [7.9, 44.0], [8.0, 44.0], [8.1, 44.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 45.0], [11.9, 45.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 46.0], [14.2, 46.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 46.0], [14.8, 46.0], [14.9, 46.0], [15.0, 46.0], [15.1, 46.0], [15.2, 46.0], [15.3, 46.0], [15.4, 46.0], [15.5, 46.0], [15.6, 46.0], [15.7, 46.0], [15.8, 46.0], [15.9, 46.0], [16.0, 46.0], [16.1, 46.0], [16.2, 46.0], [16.3, 46.0], [16.4, 47.0], [16.5, 47.0], [16.6, 47.0], [16.7, 47.0], [16.8, 47.0], [16.9, 47.0], [17.0, 47.0], [17.1, 47.0], [17.2, 47.0], [17.3, 47.0], [17.4, 47.0], [17.5, 47.0], [17.6, 47.0], [17.7, 47.0], [17.8, 47.0], [17.9, 47.0], [18.0, 47.0], [18.1, 47.0], [18.2, 47.0], [18.3, 47.0], [18.4, 47.0], [18.5, 47.0], [18.6, 47.0], [18.7, 47.0], [18.8, 47.0], [18.9, 47.0], [19.0, 47.0], [19.1, 47.0], [19.2, 47.0], [19.3, 48.0], [19.4, 48.0], [19.5, 48.0], [19.6, 48.0], [19.7, 48.0], [19.8, 48.0], [19.9, 48.0], [20.0, 48.0], [20.1, 48.0], [20.2, 48.0], [20.3, 48.0], [20.4, 48.0], [20.5, 48.0], [20.6, 48.0], [20.7, 48.0], [20.8, 48.0], [20.9, 48.0], [21.0, 48.0], [21.1, 48.0], [21.2, 48.0], [21.3, 48.0], [21.4, 48.0], [21.5, 48.0], [21.6, 48.0], [21.7, 48.0], [21.8, 48.0], [21.9, 49.0], [22.0, 49.0], [22.1, 49.0], [22.2, 49.0], [22.3, 49.0], [22.4, 49.0], [22.5, 49.0], [22.6, 49.0], [22.7, 49.0], [22.8, 49.0], [22.9, 49.0], [23.0, 49.0], [23.1, 49.0], [23.2, 49.0], [23.3, 49.0], [23.4, 49.0], [23.5, 49.0], [23.6, 49.0], [23.7, 49.0], [23.8, 49.0], [23.9, 49.0], [24.0, 49.0], [24.1, 50.0], [24.2, 50.0], [24.3, 50.0], [24.4, 50.0], [24.5, 50.0], [24.6, 50.0], [24.7, 50.0], [24.8, 50.0], [24.9, 50.0], [25.0, 50.0], [25.1, 50.0], [25.2, 50.0], [25.3, 50.0], [25.4, 50.0], [25.5, 50.0], [25.6, 50.0], [25.7, 50.0], [25.8, 50.0], [25.9, 50.0], [26.0, 50.0], [26.1, 50.0], [26.2, 51.0], [26.3, 51.0], [26.4, 51.0], [26.5, 51.0], [26.6, 51.0], [26.7, 51.0], [26.8, 51.0], [26.9, 51.0], [27.0, 51.0], [27.1, 51.0], [27.2, 51.0], [27.3, 51.0], [27.4, 51.0], [27.5, 51.0], [27.6, 51.0], [27.7, 51.0], [27.8, 51.0], [27.9, 51.0], [28.0, 52.0], [28.1, 52.0], [28.2, 52.0], [28.3, 52.0], [28.4, 52.0], [28.5, 52.0], [28.6, 52.0], [28.7, 52.0], [28.8, 52.0], [28.9, 52.0], [29.0, 52.0], [29.1, 52.0], [29.2, 52.0], [29.3, 52.0], [29.4, 52.0], [29.5, 52.0], [29.6, 53.0], [29.7, 53.0], [29.8, 53.0], [29.9, 53.0], [30.0, 53.0], [30.1, 53.0], [30.2, 53.0], [30.3, 53.0], [30.4, 53.0], [30.5, 53.0], [30.6, 53.0], [30.7, 53.0], [30.8, 53.0], [30.9, 53.0], [31.0, 53.0], [31.1, 54.0], [31.2, 54.0], [31.3, 54.0], [31.4, 54.0], [31.5, 54.0], [31.6, 54.0], [31.7, 54.0], [31.8, 54.0], [31.9, 54.0], [32.0, 54.0], [32.1, 54.0], [32.2, 54.0], [32.3, 54.0], [32.4, 54.0], [32.5, 55.0], [32.6, 55.0], [32.7, 55.0], [32.8, 55.0], [32.9, 55.0], [33.0, 55.0], [33.1, 55.0], [33.2, 55.0], [33.3, 55.0], [33.4, 55.0], [33.5, 55.0], [33.6, 55.0], [33.7, 55.0], [33.8, 56.0], [33.9, 56.0], [34.0, 56.0], [34.1, 56.0], [34.2, 56.0], [34.3, 56.0], [34.4, 56.0], [34.5, 56.0], [34.6, 56.0], [34.7, 56.0], [34.8, 57.0], [34.9, 57.0], [35.0, 57.0], [35.1, 57.0], [35.2, 57.0], [35.3, 57.0], [35.4, 57.0], [35.5, 57.0], [35.6, 57.0], [35.7, 57.0], [35.8, 58.0], [35.9, 58.0], [36.0, 58.0], [36.1, 58.0], [36.2, 58.0], [36.3, 58.0], [36.4, 58.0], [36.5, 58.0], [36.6, 58.0], [36.7, 58.0], [36.8, 59.0], [36.9, 59.0], [37.0, 59.0], [37.1, 59.0], [37.2, 59.0], [37.3, 59.0], [37.4, 59.0], [37.5, 59.0], [37.6, 60.0], [37.7, 60.0], [37.8, 60.0], [37.9, 60.0], [38.0, 60.0], [38.1, 60.0], [38.2, 60.0], [38.3, 61.0], [38.4, 61.0], [38.5, 61.0], [38.6, 61.0], [38.7, 61.0], [38.8, 61.0], [38.9, 61.0], [39.0, 61.0], [39.1, 61.0], [39.2, 62.0], [39.3, 62.0], [39.4, 62.0], [39.5, 62.0], [39.6, 62.0], [39.7, 62.0], [39.8, 63.0], [39.9, 63.0], [40.0, 63.0], [40.1, 63.0], [40.2, 63.0], [40.3, 63.0], [40.4, 63.0], [40.5, 64.0], [40.6, 64.0], [40.7, 64.0], [40.8, 64.0], [40.9, 64.0], [41.0, 64.0], [41.1, 64.0], [41.2, 65.0], [41.3, 65.0], [41.4, 65.0], [41.5, 65.0], [41.6, 65.0], [41.7, 65.0], [41.8, 66.0], [41.9, 66.0], [42.0, 66.0], [42.1, 66.0], [42.2, 66.0], [42.3, 66.0], [42.4, 67.0], [42.5, 67.0], [42.6, 67.0], [42.7, 67.0], [42.8, 67.0], [42.9, 68.0], [43.0, 68.0], [43.1, 68.0], [43.2, 68.0], [43.3, 68.0], [43.4, 68.0], [43.5, 69.0], [43.6, 69.0], [43.7, 69.0], [43.8, 69.0], [43.9, 69.0], [44.0, 70.0], [44.1, 70.0], [44.2, 70.0], [44.3, 70.0], [44.4, 70.0], [44.5, 71.0], [44.6, 71.0], [44.7, 71.0], [44.8, 71.0], [44.9, 71.0], [45.0, 72.0], [45.1, 72.0], [45.2, 72.0], [45.3, 72.0], [45.4, 72.0], [45.5, 72.0], [45.6, 73.0], [45.7, 73.0], [45.8, 73.0], [45.9, 73.0], [46.0, 74.0], [46.1, 74.0], [46.2, 74.0], [46.3, 74.0], [46.4, 74.0], [46.5, 75.0], [46.6, 75.0], [46.7, 75.0], [46.8, 75.0], [46.9, 75.0], [47.0, 76.0], [47.1, 76.0], [47.2, 76.0], [47.3, 76.0], [47.4, 77.0], [47.5, 77.0], [47.6, 77.0], [47.7, 77.0], [47.8, 78.0], [47.9, 78.0], [48.0, 78.0], [48.1, 78.0], [48.2, 79.0], [48.3, 79.0], [48.4, 79.0], [48.5, 79.0], [48.6, 79.0], [48.7, 80.0], [48.8, 80.0], [48.9, 80.0], [49.0, 80.0], [49.1, 81.0], [49.2, 81.0], [49.3, 81.0], [49.4, 81.0], [49.5, 82.0], [49.6, 82.0], [49.7, 82.0], [49.8, 82.0], [49.9, 82.0], [50.0, 83.0], [50.1, 83.0], [50.2, 83.0], [50.3, 83.0], [50.4, 83.0], [50.5, 84.0], [50.6, 84.0], [50.7, 84.0], [50.8, 84.0], [50.9, 85.0], [51.0, 85.0], [51.1, 85.0], [51.2, 85.0], [51.3, 85.0], [51.4, 85.0], [51.5, 86.0], [51.6, 86.0], [51.7, 86.0], [51.8, 86.0], [51.9, 87.0], [52.0, 87.0], [52.1, 87.0], [52.2, 87.0], [52.3, 87.0], [52.4, 88.0], [52.5, 88.0], [52.6, 88.0], [52.7, 88.0], [52.8, 88.0], [52.9, 89.0], [53.0, 89.0], [53.1, 89.0], [53.2, 89.0], [53.3, 89.0], [53.4, 90.0], [53.5, 90.0], [53.6, 90.0], [53.7, 90.0], [53.8, 91.0], [53.9, 91.0], [54.0, 91.0], [54.1, 91.0], [54.2, 92.0], [54.3, 92.0], [54.4, 92.0], [54.5, 92.0], [54.6, 93.0], [54.7, 93.0], [54.8, 93.0], [54.9, 93.0], [55.0, 94.0], [55.1, 94.0], [55.2, 94.0], [55.3, 94.0], [55.4, 95.0], [55.5, 95.0], [55.6, 95.0], [55.7, 95.0], [55.8, 96.0], [55.9, 96.0], [56.0, 96.0], [56.1, 96.0], [56.2, 97.0], [56.3, 97.0], [56.4, 97.0], [56.5, 98.0], [56.6, 98.0], [56.7, 98.0], [56.8, 98.0], [56.9, 99.0], [57.0, 99.0], [57.1, 99.0], [57.2, 99.0], [57.3, 100.0], [57.4, 100.0], [57.5, 100.0], [57.6, 101.0], [57.7, 101.0], [57.8, 101.0], [57.9, 102.0], [58.0, 102.0], [58.1, 102.0], [58.2, 102.0], [58.3, 103.0], [58.4, 103.0], [58.5, 103.0], [58.6, 104.0], [58.7, 104.0], [58.8, 104.0], [58.9, 105.0], [59.0, 105.0], [59.1, 105.0], [59.2, 105.0], [59.3, 106.0], [59.4, 106.0], [59.5, 106.0], [59.6, 107.0], [59.7, 107.0], [59.8, 108.0], [59.9, 108.0], [60.0, 108.0], [60.1, 108.0], [60.2, 109.0], [60.3, 109.0], [60.4, 109.0], [60.5, 110.0], [60.6, 110.0], [60.7, 110.0], [60.8, 111.0], [60.9, 111.0], [61.0, 111.0], [61.1, 112.0], [61.2, 112.0], [61.3, 112.0], [61.4, 113.0], [61.5, 113.0], [61.6, 114.0], [61.7, 114.0], [61.8, 114.0], [61.9, 115.0], [62.0, 115.0], [62.1, 116.0], [62.2, 116.0], [62.3, 117.0], [62.4, 117.0], [62.5, 117.0], [62.6, 118.0], [62.7, 118.0], [62.8, 119.0], [62.9, 119.0], [63.0, 119.0], [63.1, 120.0], [63.2, 120.0], [63.3, 120.0], [63.4, 121.0], [63.5, 121.0], [63.6, 122.0], [63.7, 122.0], [63.8, 122.0], [63.9, 123.0], [64.0, 123.0], [64.1, 123.0], [64.2, 124.0], [64.3, 124.0], [64.4, 125.0], [64.5, 125.0], [64.6, 125.0], [64.7, 126.0], [64.8, 126.0], [64.9, 127.0], [65.0, 127.0], [65.1, 128.0], [65.2, 128.0], [65.3, 129.0], [65.4, 129.0], [65.5, 130.0], [65.6, 130.0], [65.7, 131.0], [65.8, 131.0], [65.9, 132.0], [66.0, 132.0], [66.1, 133.0], [66.2, 133.0], [66.3, 134.0], [66.4, 134.0], [66.5, 135.0], [66.6, 135.0], [66.7, 136.0], [66.8, 136.0], [66.9, 137.0], [67.0, 137.0], [67.1, 138.0], [67.2, 138.0], [67.3, 138.0], [67.4, 139.0], [67.5, 140.0], [67.6, 140.0], [67.7, 141.0], [67.8, 141.0], [67.9, 142.0], [68.0, 142.0], [68.1, 143.0], [68.2, 143.0], [68.3, 144.0], [68.4, 144.0], [68.5, 145.0], [68.6, 145.0], [68.7, 146.0], [68.8, 147.0], [68.9, 147.0], [69.0, 147.0], [69.1, 148.0], [69.2, 148.0], [69.3, 149.0], [69.4, 150.0], [69.5, 150.0], [69.6, 151.0], [69.7, 151.0], [69.8, 152.0], [69.9, 152.0], [70.0, 153.0], [70.1, 154.0], [70.2, 154.0], [70.3, 155.0], [70.4, 155.0], [70.5, 156.0], [70.6, 156.0], [70.7, 157.0], [70.8, 158.0], [70.9, 158.0], [71.0, 159.0], [71.1, 160.0], [71.2, 160.0], [71.3, 161.0], [71.4, 162.0], [71.5, 162.0], [71.6, 163.0], [71.7, 163.0], [71.8, 164.0], [71.9, 164.0], [72.0, 165.0], [72.1, 166.0], [72.2, 166.0], [72.3, 167.0], [72.4, 168.0], [72.5, 168.0], [72.6, 169.0], [72.7, 169.0], [72.8, 170.0], [72.9, 170.0], [73.0, 171.0], [73.1, 171.0], [73.2, 172.0], [73.3, 173.0], [73.4, 173.0], [73.5, 174.0], [73.6, 174.0], [73.7, 175.0], [73.8, 175.0], [73.9, 176.0], [74.0, 177.0], [74.1, 177.0], [74.2, 178.0], [74.3, 178.0], [74.4, 179.0], [74.5, 179.0], [74.6, 180.0], [74.7, 180.0], [74.8, 181.0], [74.9, 181.0], [75.0, 182.0], [75.1, 182.0], [75.2, 183.0], [75.3, 183.0], [75.4, 184.0], [75.5, 184.0], [75.6, 185.0], [75.7, 185.0], [75.8, 186.0], [75.9, 186.0], [76.0, 187.0], [76.1, 187.0], [76.2, 188.0], [76.3, 188.0], [76.4, 189.0], [76.5, 190.0], [76.6, 190.0], [76.7, 190.0], [76.8, 191.0], [76.9, 191.0], [77.0, 192.0], [77.1, 192.0], [77.2, 193.0], [77.3, 193.0], [77.4, 194.0], [77.5, 194.0], [77.6, 195.0], [77.7, 195.0], [77.8, 196.0], [77.9, 196.0], [78.0, 197.0], [78.1, 198.0], [78.2, 198.0], [78.3, 199.0], [78.4, 199.0], [78.5, 200.0], [78.6, 200.0], [78.7, 201.0], [78.8, 201.0], [78.9, 202.0], [79.0, 202.0], [79.1, 203.0], [79.2, 204.0], [79.3, 204.0], [79.4, 204.0], [79.5, 205.0], [79.6, 206.0], [79.7, 206.0], [79.8, 206.0], [79.9, 207.0], [80.0, 207.0], [80.1, 208.0], [80.2, 209.0], [80.3, 209.0], [80.4, 210.0], [80.5, 210.0], [80.6, 211.0], [80.7, 211.0], [80.8, 212.0], [80.9, 213.0], [81.0, 213.0], [81.1, 214.0], [81.2, 214.0], [81.3, 215.0], [81.4, 216.0], [81.5, 216.0], [81.6, 217.0], [81.7, 218.0], [81.8, 218.0], [81.9, 219.0], [82.0, 220.0], [82.1, 220.0], [82.2, 221.0], [82.3, 222.0], [82.4, 223.0], [82.5, 223.0], [82.6, 224.0], [82.7, 225.0], [82.8, 226.0], [82.9, 226.0], [83.0, 227.0], [83.1, 228.0], [83.2, 229.0], [83.3, 230.0], [83.4, 231.0], [83.5, 231.0], [83.6, 232.0], [83.7, 233.0], [83.8, 234.0], [83.9, 235.0], [84.0, 235.0], [84.1, 236.0], [84.2, 237.0], [84.3, 238.0], [84.4, 239.0], [84.5, 240.0], [84.6, 241.0], [84.7, 241.0], [84.8, 242.0], [84.9, 243.0], [85.0, 245.0], [85.1, 245.0], [85.2, 246.0], [85.3, 247.0], [85.4, 248.0], [85.5, 249.0], [85.6, 250.0], [85.7, 251.0], [85.8, 252.0], [85.9, 253.0], [86.0, 254.0], [86.1, 255.0], [86.2, 256.0], [86.3, 258.0], [86.4, 258.0], [86.5, 259.0], [86.6, 260.0], [86.7, 261.0], [86.8, 262.0], [86.9, 263.0], [87.0, 265.0], [87.1, 265.0], [87.2, 266.0], [87.3, 268.0], [87.4, 268.0], [87.5, 269.0], [87.6, 270.0], [87.7, 271.0], [87.8, 272.0], [87.9, 273.0], [88.0, 274.0], [88.1, 275.0], [88.2, 276.0], [88.3, 278.0], [88.4, 279.0], [88.5, 279.0], [88.6, 280.0], [88.7, 281.0], [88.8, 282.0], [88.9, 283.0], [89.0, 284.0], [89.1, 286.0], [89.2, 287.0], [89.3, 288.0], [89.4, 288.0], [89.5, 289.0], [89.6, 290.0], [89.7, 291.0], [89.8, 292.0], [89.9, 294.0], [90.0, 295.0], [90.1, 296.0], [90.2, 297.0], [90.3, 299.0], [90.4, 300.0], [90.5, 301.0], [90.6, 302.0], [90.7, 303.0], [90.8, 305.0], [90.9, 306.0], [91.0, 308.0], [91.1, 309.0], [91.2, 311.0], [91.3, 312.0], [91.4, 313.0], [91.5, 315.0], [91.6, 316.0], [91.7, 317.0], [91.8, 319.0], [91.9, 321.0], [92.0, 322.0], [92.1, 324.0], [92.2, 326.0], [92.3, 327.0], [92.4, 330.0], [92.5, 332.0], [92.6, 334.0], [92.7, 335.0], [92.8, 338.0], [92.9, 340.0], [93.0, 342.0], [93.1, 345.0], [93.2, 347.0], [93.3, 349.0], [93.4, 352.0], [93.5, 355.0], [93.6, 358.0], [93.7, 361.0], [93.8, 364.0], [93.9, 366.0], [94.0, 370.0], [94.1, 372.0], [94.2, 374.0], [94.3, 377.0], [94.4, 380.0], [94.5, 383.0], [94.6, 385.0], [94.7, 388.0], [94.8, 390.0], [94.9, 392.0], [95.0, 396.0], [95.1, 398.0], [95.2, 400.0], [95.3, 403.0], [95.4, 405.0], [95.5, 408.0], [95.6, 411.0], [95.7, 415.0], [95.8, 418.0], [95.9, 422.0], [96.0, 425.0], [96.1, 429.0], [96.2, 432.0], [96.3, 437.0], [96.4, 441.0], [96.5, 447.0], [96.6, 453.0], [96.7, 458.0], [96.8, 462.0], [96.9, 467.0], [97.0, 472.0], [97.1, 478.0], [97.2, 484.0], [97.3, 491.0], [97.4, 495.0], [97.5, 501.0], [97.6, 506.0], [97.7, 513.0], [97.8, 523.0], [97.9, 533.0], [98.0, 545.0], [98.1, 563.0], [98.2, 586.0], [98.3, 605.0], [98.4, 622.0], [98.5, 637.0], [98.6, 657.0], [98.7, 673.0], [98.8, 687.0], [98.9, 704.0], [99.0, 727.0], [99.1, 767.0], [99.2, 808.0], [99.3, 850.0], [99.4, 884.0], [99.5, 965.0], [99.6, 1099.0], [99.7, 1161.0], [99.8, 1256.0], [99.9, 1316.0], [100.0, 2047.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 25398.0, "series": [{"data": [[0.0, 25398.0], [600.0, 264.0], [700.0, 137.0], [200.0, 5278.0], [800.0, 108.0], [900.0, 48.0], [1000.0, 32.0], [1100.0, 65.0], [300.0, 2134.0], [1200.0, 60.0], [1300.0, 27.0], [1400.0, 7.0], [1500.0, 7.0], [400.0, 1034.0], [100.0, 9425.0], [1600.0, 7.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 352.0], [2000.0, 2.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 43275.0, "series": [{"data": [[0.0, 43275.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1094.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 95.85845896147397, "minX": 1.71925518E12, "maxY": 100.0, "series": [{"data": [[1.71925536E12, 100.0], [1.71925554E12, 100.0], [1.71925524E12, 100.0], [1.71925542E12, 100.0], [1.71925572E12, 100.0], [1.7192556E12, 100.0], [1.71925578E12, 95.85845896147397], [1.7192553E12, 100.0], [1.71925548E12, 100.0], [1.71925518E12, 96.37820751208622], [1.71925566E12, 100.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925578E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 418.625, "series": [{"data": [[2.0, 57.0], [3.0, 68.0], [4.0, 65.0], [5.0, 66.0], [6.0, 52.0], [7.0, 48.0], [8.0, 59.0], [9.0, 128.0], [10.0, 130.0], [11.0, 127.0], [12.0, 136.0], [13.0, 135.0], [14.0, 116.0], [15.0, 111.0], [16.0, 92.0], [17.0, 57.0], [18.0, 61.0], [19.0, 274.375], [20.0, 63.0], [21.0, 81.5], [22.0, 88.66666666666667], [24.0, 100.5], [26.0, 84.16666666666667], [27.0, 69.5], [28.0, 79.5], [29.0, 88.5], [30.0, 90.5], [31.0, 95.0], [33.0, 105.0], [32.0, 108.0], [34.0, 214.0], [35.0, 374.375], [36.0, 305.1428571428571], [37.0, 107.4], [38.0, 81.0], [39.0, 102.5], [40.0, 76.0], [41.0, 77.66666666666667], [42.0, 76.66666666666667], [43.0, 58.333333333333336], [44.0, 65.5], [45.0, 85.0], [46.0, 59.5], [47.0, 84.0], [49.0, 178.0], [48.0, 87.0], [50.0, 139.58333333333334], [51.0, 76.0], [52.0, 68.75], [53.0, 67.0], [54.0, 68.25], [55.0, 69.0], [56.0, 65.33333333333333], [57.0, 60.333333333333336], [58.0, 58.5], [59.0, 69.8], [60.0, 66.66666666666667], [61.0, 86.0], [62.0, 82.38461538461539], [63.0, 89.27272727272727], [64.0, 74.12500000000001], [65.0, 86.16666666666667], [66.0, 71.0], [67.0, 66.6], [68.0, 68.5], [69.0, 66.4], [70.0, 85.66666666666667], [71.0, 64.0], [72.0, 72.0], [73.0, 64.0], [74.0, 79.5], [75.0, 88.0], [76.0, 144.5], [77.0, 207.33333333333331], [78.0, 305.3333333333333], [79.0, 418.625], [80.0, 360.25000000000006], [81.0, 233.00000000000003], [82.0, 198.73333333333338], [83.0, 76.2], [84.0, 54.166666666666664], [85.0, 57.4], [86.0, 65.0], [87.0, 69.0], [88.0, 65.0], [89.0, 75.5], [90.0, 59.5], [91.0, 56.0], [92.0, 140.0], [93.0, 182.2], [94.0, 260.0], [95.0, 252.06666666666666], [96.0, 196.22222222222223], [97.0, 262.7142857142857], [98.0, 309.25], [99.0, 281.1333333333333], [100.0, 138.7535875918199], [1.0, 63.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[99.66918241827608, 138.96717507378204]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3253.4166666666665, "minX": 1.71925518E12, "maxY": 349152.9666666667, "series": [{"data": [[1.71925536E12, 281140.55], [1.71925554E12, 345309.7166666667], [1.71925524E12, 343529.0833333333], [1.71925542E12, 334596.88333333336], [1.71925572E12, 319852.0833333333], [1.7192556E12, 344460.3333333333], [1.71925578E12, 98284.56666666667], [1.7192553E12, 267411.48333333334], [1.71925548E12, 299469.01666666666], [1.71925518E12, 195522.56666666668], [1.71925566E12, 349152.9666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71925536E12, 12880.483333333334], [1.71925554E12, 12568.633333333333], [1.71925524E12, 12672.2], [1.71925542E12, 12776.9], [1.71925572E12, 12935.566666666668], [1.7192556E12, 12568.6], [1.71925578E12, 3253.4166666666665], [1.7192553E12, 12286.616666666667], [1.71925548E12, 12251.7], [1.71925518E12, 7583.433333333333], [1.71925566E12, 12612.083333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925578E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 104.65999564933655, "minX": 1.71925518E12, "maxY": 229.75753068055053, "series": [{"data": [[1.71925536E12, 121.06953859610749], [1.71925554E12, 126.30900243309037], [1.71925524E12, 134.42313681868754], [1.71925542E12, 136.39202139514128], [1.71925572E12, 104.65999564933655], [1.7192556E12, 140.13288590604031], [1.71925578E12, 135.8525963149078], [1.7192553E12, 149.72743723139524], [1.71925548E12, 163.46400181694327], [1.71925518E12, 229.75753068055053], [1.71925566E12, 123.0328410844167]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925578E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 102.58059604089587, "minX": 1.71925518E12, "maxY": 228.29713648196403, "series": [{"data": [[1.71925536E12, 120.21277061010282], [1.71925554E12, 125.0842733908421], [1.71925524E12, 132.93926585094542], [1.71925542E12, 135.11945620681993], [1.71925572E12, 102.58059604089587], [1.7192556E12, 138.41834451901548], [1.71925578E12, 133.42964824120583], [1.7192553E12, 148.90748699389272], [1.71925548E12, 162.48376107199678], [1.71925518E12, 228.29713648196403], [1.71925566E12, 121.625523473661]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925578E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71925518E12, "maxY": 1.3949423577538105, "series": [{"data": [[1.71925536E12, 0.9258692324513466], [1.71925554E12, 0.8389736783897364], [1.71925524E12, 0.8157953281423801], [1.71925542E12, 0.824158680632941], [1.71925572E12, 0.8142266695671082], [1.7192556E12, 0.8250559284116308], [1.71925578E12, 0.0], [1.7192553E12, 0.8292241574304463], [1.71925548E12, 0.879173290937996], [1.71925518E12, 1.3949423577538105], [1.71925566E12, 0.8208067004628623]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925578E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.71925518E12, "maxY": 2047.0, "series": [{"data": [[1.71925536E12, 986.0], [1.71925554E12, 686.0], [1.71925524E12, 683.0], [1.71925542E12, 1153.0], [1.71925572E12, 691.0], [1.7192556E12, 727.0], [1.71925578E12, 563.0], [1.7192553E12, 1757.0], [1.71925548E12, 2047.0], [1.71925518E12, 1405.0], [1.71925566E12, 706.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71925536E12, 39.0], [1.71925554E12, 40.0], [1.71925524E12, 38.0], [1.71925542E12, 39.0], [1.71925572E12, 39.0], [1.7192556E12, 39.0], [1.71925578E12, 39.0], [1.7192553E12, 38.0], [1.71925548E12, 38.0], [1.71925518E12, 40.0], [1.71925566E12, 39.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71925536E12, 261.0], [1.71925554E12, 276.0], [1.71925524E12, 287.0], [1.71925542E12, 277.0], [1.71925572E12, 218.0], [1.7192556E12, 318.9000000000001], [1.71925578E12, 306.0], [1.7192553E12, 314.0], [1.71925548E12, 338.0], [1.71925518E12, 499.0], [1.71925566E12, 272.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71925536E12, 686.2600000000002], [1.71925554E12, 440.0], [1.71925524E12, 498.03999999999996], [1.71925542E12, 714.0], [1.71925572E12, 454.0199999999995], [1.7192556E12, 544.5799999999999], [1.71925578E12, 394.5499999999995], [1.7192553E12, 1269.0], [1.71925548E12, 1165.96], [1.71925518E12, 1037.1999999999998], [1.71925566E12, 468.2399999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71925536E12, 67.0], [1.71925554E12, 83.0], [1.71925524E12, 94.0], [1.71925542E12, 89.0], [1.71925572E12, 64.0], [1.7192556E12, 85.0], [1.71925578E12, 85.0], [1.7192553E12, 73.0], [1.71925548E12, 89.0], [1.71925518E12, 160.0], [1.71925566E12, 77.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71925536E12, 340.0], [1.71925554E12, 336.89999999999964], [1.71925524E12, 381.1999999999998], [1.71925542E12, 323.0], [1.71925572E12, 294.0], [1.7192556E12, 420.4499999999998], [1.71925578E12, 338.25], [1.7192553E12, 491.7999999999993], [1.71925548E12, 528.8000000000011], [1.71925518E12, 813.0], [1.71925566E12, 334.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925578E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 48.0, "minX": 9.0, "maxY": 988.0, "series": [{"data": [[9.0, 99.0], [19.0, 988.0], [24.0, 587.5], [26.0, 658.5], [28.0, 485.5], [30.0, 67.0], [32.0, 622.0], [34.0, 122.5], [35.0, 93.0], [39.0, 603.0], [38.0, 58.5], [41.0, 273.0], [43.0, 52.0], [46.0, 354.5], [47.0, 103.0], [48.0, 48.0], [51.0, 409.0], [50.0, 335.5], [52.0, 115.0], [55.0, 259.0], [54.0, 355.0], [56.0, 186.5], [57.0, 326.0], [58.0, 218.0], [59.0, 108.0], [60.0, 173.5], [61.0, 249.0], [63.0, 154.0], [62.0, 178.5], [66.0, 160.0], [67.0, 88.0], [65.0, 232.0], [64.0, 188.0], [69.0, 120.0], [70.0, 107.0], [68.0, 134.5], [71.0, 64.0], [75.0, 82.0], [73.0, 70.0], [74.0, 70.0], [72.0, 77.0], [78.0, 55.0], [79.0, 63.0], [77.0, 64.0], [76.0, 63.0], [81.0, 65.0], [80.0, 70.0], [83.0, 58.0], [82.0, 70.0], [85.0, 84.0], [84.0, 83.0], [86.0, 72.0], [87.0, 84.0], [88.0, 55.0], [89.0, 122.0], [90.0, 106.0], [91.0, 81.0], [93.0, 137.0], [95.0, 133.0], [92.0, 61.0], [94.0, 90.5], [96.0, 114.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 9.0, "maxY": 988.0, "series": [{"data": [[9.0, 99.0], [19.0, 988.0], [24.0, 586.0], [26.0, 658.0], [28.0, 485.0], [30.0, 65.0], [32.0, 622.0], [34.0, 121.0], [35.0, 92.0], [39.0, 601.0], [38.0, 57.0], [41.0, 273.0], [43.0, 50.0], [46.0, 353.5], [47.0, 103.0], [48.0, 46.0], [51.0, 406.0], [50.0, 333.0], [52.0, 113.0], [55.0, 256.0], [54.0, 352.0], [56.0, 185.5], [57.0, 325.0], [58.0, 215.5], [59.0, 106.0], [60.0, 172.5], [61.0, 247.0], [63.0, 151.0], [62.0, 178.0], [66.0, 158.5], [67.0, 87.0], [65.0, 232.0], [64.0, 186.5], [69.0, 119.0], [70.0, 105.5], [68.0, 133.5], [71.0, 62.0], [75.0, 81.0], [73.0, 70.0], [74.0, 69.5], [72.0, 74.0], [78.0, 54.0], [79.0, 62.0], [77.0, 62.0], [76.0, 62.0], [81.0, 63.0], [80.0, 68.0], [83.0, 57.0], [82.0, 69.0], [85.0, 83.0], [84.0, 82.5], [86.0, 70.0], [87.0, 83.0], [88.0, 54.0], [89.0, 120.0], [90.0, 105.0], [91.0, 80.0], [93.0, 136.0], [95.0, 132.0], [92.0, 60.0], [94.0, 90.0], [96.0, 112.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.7, "minX": 1.71925518E12, "maxY": 76.66666666666667, "series": [{"data": [[1.71925536E12, 75.5], [1.71925554E12, 75.38333333333334], [1.71925524E12, 74.75], [1.71925542E12, 74.98333333333333], [1.71925572E12, 76.66666666666667], [1.7192556E12, 74.48333333333333], [1.71925578E12, 19.7], [1.7192553E12, 74.36666666666666], [1.71925548E12, 73.23333333333333], [1.71925518E12, 45.016666666666666], [1.71925566E12, 75.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925578E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.9, "minX": 1.71925518E12, "maxY": 76.61666666666666, "series": [{"data": [[1.71925536E12, 76.21666666666667], [1.71925554E12, 75.35], [1.71925524E12, 74.91666666666667], [1.71925542E12, 74.78333333333333], [1.71925572E12, 76.61666666666666], [1.7192556E12, 74.5], [1.71925578E12, 19.9], [1.7192553E12, 73.68333333333334], [1.71925548E12, 73.38333333333334], [1.71925518E12, 44.81666666666667], [1.71925566E12, 75.61666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925578E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.9, "minX": 1.71925518E12, "maxY": 76.61666666666666, "series": [{"data": [[1.71925536E12, 76.21666666666667], [1.71925554E12, 75.35], [1.71925524E12, 74.91666666666667], [1.71925542E12, 74.78333333333333], [1.71925572E12, 76.61666666666666], [1.7192556E12, 74.5], [1.71925578E12, 19.9], [1.7192553E12, 73.68333333333334], [1.71925548E12, 73.38333333333334], [1.71925518E12, 44.81666666666667], [1.71925566E12, 75.61666666666666]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925578E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.9, "minX": 1.71925518E12, "maxY": 76.61666666666666, "series": [{"data": [[1.71925536E12, 76.21666666666667], [1.71925554E12, 75.35], [1.71925524E12, 74.91666666666667], [1.71925542E12, 74.78333333333333], [1.71925572E12, 76.61666666666666], [1.7192556E12, 74.5], [1.71925578E12, 19.9], [1.7192553E12, 73.68333333333334], [1.71925548E12, 73.38333333333334], [1.71925518E12, 44.81666666666667], [1.71925566E12, 75.61666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925578E12, "title": "Total Transactions Per Second"}},
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

