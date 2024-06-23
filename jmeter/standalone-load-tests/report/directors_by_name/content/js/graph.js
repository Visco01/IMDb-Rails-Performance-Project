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
        data: {"result": {"minY": 37.0, "minX": 0.0, "maxY": 1083.0, "series": [{"data": [[0.0, 37.0], [0.1, 39.0], [0.2, 39.0], [0.3, 40.0], [0.4, 40.0], [0.5, 40.0], [0.6, 40.0], [0.7, 40.0], [0.8, 40.0], [0.9, 41.0], [1.0, 41.0], [1.1, 41.0], [1.2, 41.0], [1.3, 41.0], [1.4, 41.0], [1.5, 41.0], [1.6, 42.0], [1.7, 42.0], [1.8, 42.0], [1.9, 42.0], [2.0, 42.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 42.0], [2.8, 42.0], [2.9, 42.0], [3.0, 42.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 43.0], [3.5, 43.0], [3.6, 43.0], [3.7, 43.0], [3.8, 43.0], [3.9, 43.0], [4.0, 43.0], [4.1, 43.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 43.0], [4.6, 43.0], [4.7, 43.0], [4.8, 43.0], [4.9, 43.0], [5.0, 43.0], [5.1, 43.0], [5.2, 43.0], [5.3, 43.0], [5.4, 43.0], [5.5, 43.0], [5.6, 43.0], [5.7, 43.0], [5.8, 43.0], [5.9, 43.0], [6.0, 43.0], [6.1, 43.0], [6.2, 44.0], [6.3, 44.0], [6.4, 44.0], [6.5, 44.0], [6.6, 44.0], [6.7, 44.0], [6.8, 44.0], [6.9, 44.0], [7.0, 44.0], [7.1, 44.0], [7.2, 44.0], [7.3, 44.0], [7.4, 44.0], [7.5, 44.0], [7.6, 44.0], [7.7, 44.0], [7.8, 44.0], [7.9, 44.0], [8.0, 44.0], [8.1, 44.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 45.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 46.0], [11.9, 46.0], [12.0, 46.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 47.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 47.0], [14.1, 47.0], [14.2, 47.0], [14.3, 47.0], [14.4, 47.0], [14.5, 48.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 48.0], [15.5, 48.0], [15.6, 48.0], [15.7, 49.0], [15.8, 49.0], [15.9, 49.0], [16.0, 49.0], [16.1, 49.0], [16.2, 49.0], [16.3, 49.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 50.0], [16.9, 50.0], [17.0, 50.0], [17.1, 50.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 50.0], [17.7, 50.0], [17.8, 50.0], [17.9, 50.0], [18.0, 51.0], [18.1, 51.0], [18.2, 51.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 51.0], [18.7, 51.0], [18.8, 51.0], [18.9, 51.0], [19.0, 52.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 52.0], [19.5, 52.0], [19.6, 52.0], [19.7, 52.0], [19.8, 52.0], [19.9, 52.0], [20.0, 53.0], [20.1, 53.0], [20.2, 53.0], [20.3, 53.0], [20.4, 53.0], [20.5, 53.0], [20.6, 53.0], [20.7, 53.0], [20.8, 53.0], [20.9, 53.0], [21.0, 53.0], [21.1, 54.0], [21.2, 54.0], [21.3, 54.0], [21.4, 54.0], [21.5, 54.0], [21.6, 54.0], [21.7, 54.0], [21.8, 54.0], [21.9, 54.0], [22.0, 55.0], [22.1, 55.0], [22.2, 55.0], [22.3, 55.0], [22.4, 55.0], [22.5, 55.0], [22.6, 55.0], [22.7, 55.0], [22.8, 55.0], [22.9, 55.0], [23.0, 56.0], [23.1, 56.0], [23.2, 56.0], [23.3, 56.0], [23.4, 56.0], [23.5, 56.0], [23.6, 56.0], [23.7, 56.0], [23.8, 56.0], [23.9, 57.0], [24.0, 57.0], [24.1, 57.0], [24.2, 57.0], [24.3, 57.0], [24.4, 57.0], [24.5, 57.0], [24.6, 57.0], [24.7, 57.0], [24.8, 57.0], [24.9, 58.0], [25.0, 58.0], [25.1, 58.0], [25.2, 58.0], [25.3, 58.0], [25.4, 58.0], [25.5, 58.0], [25.6, 58.0], [25.7, 58.0], [25.8, 58.0], [25.9, 59.0], [26.0, 59.0], [26.1, 59.0], [26.2, 59.0], [26.3, 59.0], [26.4, 59.0], [26.5, 59.0], [26.6, 59.0], [26.7, 59.0], [26.8, 60.0], [26.9, 60.0], [27.0, 60.0], [27.1, 60.0], [27.2, 60.0], [27.3, 60.0], [27.4, 60.0], [27.5, 60.0], [27.6, 60.0], [27.7, 61.0], [27.8, 61.0], [27.9, 61.0], [28.0, 61.0], [28.1, 61.0], [28.2, 61.0], [28.3, 61.0], [28.4, 61.0], [28.5, 61.0], [28.6, 62.0], [28.7, 62.0], [28.8, 62.0], [28.9, 62.0], [29.0, 62.0], [29.1, 62.0], [29.2, 62.0], [29.3, 62.0], [29.4, 62.0], [29.5, 63.0], [29.6, 63.0], [29.7, 63.0], [29.8, 63.0], [29.9, 63.0], [30.0, 63.0], [30.1, 63.0], [30.2, 63.0], [30.3, 64.0], [30.4, 64.0], [30.5, 64.0], [30.6, 64.0], [30.7, 64.0], [30.8, 64.0], [30.9, 64.0], [31.0, 64.0], [31.1, 64.0], [31.2, 65.0], [31.3, 65.0], [31.4, 65.0], [31.5, 65.0], [31.6, 65.0], [31.7, 65.0], [31.8, 65.0], [31.9, 65.0], [32.0, 65.0], [32.1, 66.0], [32.2, 66.0], [32.3, 66.0], [32.4, 66.0], [32.5, 66.0], [32.6, 66.0], [32.7, 66.0], [32.8, 66.0], [32.9, 67.0], [33.0, 67.0], [33.1, 67.0], [33.2, 67.0], [33.3, 67.0], [33.4, 67.0], [33.5, 67.0], [33.6, 67.0], [33.7, 68.0], [33.8, 68.0], [33.9, 68.0], [34.0, 68.0], [34.1, 68.0], [34.2, 68.0], [34.3, 68.0], [34.4, 68.0], [34.5, 69.0], [34.6, 69.0], [34.7, 69.0], [34.8, 69.0], [34.9, 69.0], [35.0, 69.0], [35.1, 69.0], [35.2, 70.0], [35.3, 70.0], [35.4, 70.0], [35.5, 70.0], [35.6, 70.0], [35.7, 70.0], [35.8, 70.0], [35.9, 71.0], [36.0, 71.0], [36.1, 71.0], [36.2, 71.0], [36.3, 71.0], [36.4, 71.0], [36.5, 71.0], [36.6, 71.0], [36.7, 72.0], [36.8, 72.0], [36.9, 72.0], [37.0, 72.0], [37.1, 72.0], [37.2, 72.0], [37.3, 72.0], [37.4, 73.0], [37.5, 73.0], [37.6, 73.0], [37.7, 73.0], [37.8, 73.0], [37.9, 73.0], [38.0, 73.0], [38.1, 74.0], [38.2, 74.0], [38.3, 74.0], [38.4, 74.0], [38.5, 74.0], [38.6, 74.0], [38.7, 74.0], [38.8, 75.0], [38.9, 75.0], [39.0, 75.0], [39.1, 75.0], [39.2, 75.0], [39.3, 75.0], [39.4, 76.0], [39.5, 76.0], [39.6, 76.0], [39.7, 76.0], [39.8, 76.0], [39.9, 76.0], [40.0, 77.0], [40.1, 77.0], [40.2, 77.0], [40.3, 77.0], [40.4, 77.0], [40.5, 77.0], [40.6, 77.0], [40.7, 78.0], [40.8, 78.0], [40.9, 78.0], [41.0, 78.0], [41.1, 78.0], [41.2, 78.0], [41.3, 79.0], [41.4, 79.0], [41.5, 79.0], [41.6, 79.0], [41.7, 79.0], [41.8, 79.0], [41.9, 80.0], [42.0, 80.0], [42.1, 80.0], [42.2, 80.0], [42.3, 80.0], [42.4, 80.0], [42.5, 81.0], [42.6, 81.0], [42.7, 81.0], [42.8, 81.0], [42.9, 81.0], [43.0, 81.0], [43.1, 82.0], [43.2, 82.0], [43.3, 82.0], [43.4, 82.0], [43.5, 82.0], [43.6, 83.0], [43.7, 83.0], [43.8, 83.0], [43.9, 83.0], [44.0, 83.0], [44.1, 83.0], [44.2, 84.0], [44.3, 84.0], [44.4, 84.0], [44.5, 84.0], [44.6, 84.0], [44.7, 84.0], [44.8, 85.0], [44.9, 85.0], [45.0, 85.0], [45.1, 85.0], [45.2, 85.0], [45.3, 85.0], [45.4, 86.0], [45.5, 86.0], [45.6, 86.0], [45.7, 86.0], [45.8, 86.0], [45.9, 87.0], [46.0, 87.0], [46.1, 87.0], [46.2, 87.0], [46.3, 87.0], [46.4, 88.0], [46.5, 88.0], [46.6, 88.0], [46.7, 88.0], [46.8, 88.0], [46.9, 89.0], [47.0, 89.0], [47.1, 89.0], [47.2, 89.0], [47.3, 89.0], [47.4, 90.0], [47.5, 90.0], [47.6, 90.0], [47.7, 90.0], [47.8, 90.0], [47.9, 91.0], [48.0, 91.0], [48.1, 91.0], [48.2, 91.0], [48.3, 92.0], [48.4, 92.0], [48.5, 92.0], [48.6, 92.0], [48.7, 92.0], [48.8, 93.0], [48.9, 93.0], [49.0, 93.0], [49.1, 93.0], [49.2, 93.0], [49.3, 93.0], [49.4, 94.0], [49.5, 94.0], [49.6, 94.0], [49.7, 94.0], [49.8, 94.0], [49.9, 95.0], [50.0, 95.0], [50.1, 95.0], [50.2, 95.0], [50.3, 96.0], [50.4, 96.0], [50.5, 96.0], [50.6, 96.0], [50.7, 96.0], [50.8, 97.0], [50.9, 97.0], [51.0, 97.0], [51.1, 97.0], [51.2, 98.0], [51.3, 98.0], [51.4, 98.0], [51.5, 98.0], [51.6, 99.0], [51.7, 99.0], [51.8, 99.0], [51.9, 99.0], [52.0, 100.0], [52.1, 100.0], [52.2, 100.0], [52.3, 100.0], [52.4, 101.0], [52.5, 101.0], [52.6, 101.0], [52.7, 101.0], [52.8, 102.0], [52.9, 102.0], [53.0, 102.0], [53.1, 102.0], [53.2, 102.0], [53.3, 103.0], [53.4, 103.0], [53.5, 103.0], [53.6, 103.0], [53.7, 104.0], [53.8, 104.0], [53.9, 104.0], [54.0, 104.0], [54.1, 105.0], [54.2, 105.0], [54.3, 105.0], [54.4, 105.0], [54.5, 106.0], [54.6, 106.0], [54.7, 106.0], [54.8, 106.0], [54.9, 107.0], [55.0, 107.0], [55.1, 107.0], [55.2, 107.0], [55.3, 108.0], [55.4, 108.0], [55.5, 108.0], [55.6, 108.0], [55.7, 109.0], [55.8, 109.0], [55.9, 109.0], [56.0, 109.0], [56.1, 110.0], [56.2, 110.0], [56.3, 110.0], [56.4, 110.0], [56.5, 111.0], [56.6, 111.0], [56.7, 111.0], [56.8, 111.0], [56.9, 112.0], [57.0, 112.0], [57.1, 112.0], [57.2, 112.0], [57.3, 113.0], [57.4, 113.0], [57.5, 113.0], [57.6, 113.0], [57.7, 113.0], [57.8, 114.0], [57.9, 114.0], [58.0, 114.0], [58.1, 114.0], [58.2, 115.0], [58.3, 115.0], [58.4, 115.0], [58.5, 115.0], [58.6, 116.0], [58.7, 116.0], [58.8, 116.0], [58.9, 116.0], [59.0, 117.0], [59.1, 117.0], [59.2, 117.0], [59.3, 118.0], [59.4, 118.0], [59.5, 118.0], [59.6, 118.0], [59.7, 119.0], [59.8, 119.0], [59.9, 119.0], [60.0, 119.0], [60.1, 120.0], [60.2, 120.0], [60.3, 120.0], [60.4, 121.0], [60.5, 121.0], [60.6, 121.0], [60.7, 121.0], [60.8, 122.0], [60.9, 122.0], [61.0, 122.0], [61.1, 123.0], [61.2, 123.0], [61.3, 123.0], [61.4, 123.0], [61.5, 124.0], [61.6, 124.0], [61.7, 124.0], [61.8, 125.0], [61.9, 125.0], [62.0, 125.0], [62.1, 126.0], [62.2, 126.0], [62.3, 126.0], [62.4, 127.0], [62.5, 127.0], [62.6, 127.0], [62.7, 128.0], [62.8, 128.0], [62.9, 128.0], [63.0, 128.0], [63.1, 129.0], [63.2, 129.0], [63.3, 129.0], [63.4, 130.0], [63.5, 130.0], [63.6, 130.0], [63.7, 131.0], [63.8, 131.0], [63.9, 131.0], [64.0, 131.0], [64.1, 132.0], [64.2, 132.0], [64.3, 132.0], [64.4, 133.0], [64.5, 133.0], [64.6, 133.0], [64.7, 134.0], [64.8, 134.0], [64.9, 134.0], [65.0, 135.0], [65.1, 135.0], [65.2, 135.0], [65.3, 135.0], [65.4, 136.0], [65.5, 136.0], [65.6, 136.0], [65.7, 137.0], [65.8, 137.0], [65.9, 137.0], [66.0, 138.0], [66.1, 138.0], [66.2, 138.0], [66.3, 139.0], [66.4, 139.0], [66.5, 139.0], [66.6, 139.0], [66.7, 140.0], [66.8, 140.0], [66.9, 140.0], [67.0, 141.0], [67.1, 141.0], [67.2, 142.0], [67.3, 142.0], [67.4, 142.0], [67.5, 142.0], [67.6, 143.0], [67.7, 143.0], [67.8, 143.0], [67.9, 144.0], [68.0, 144.0], [68.1, 144.0], [68.2, 145.0], [68.3, 145.0], [68.4, 145.0], [68.5, 146.0], [68.6, 146.0], [68.7, 146.0], [68.8, 146.0], [68.9, 147.0], [69.0, 147.0], [69.1, 147.0], [69.2, 148.0], [69.3, 148.0], [69.4, 148.0], [69.5, 149.0], [69.6, 149.0], [69.7, 149.0], [69.8, 150.0], [69.9, 150.0], [70.0, 150.0], [70.1, 151.0], [70.2, 151.0], [70.3, 151.0], [70.4, 152.0], [70.5, 152.0], [70.6, 152.0], [70.7, 153.0], [70.8, 153.0], [70.9, 153.0], [71.0, 154.0], [71.1, 154.0], [71.2, 154.0], [71.3, 155.0], [71.4, 155.0], [71.5, 155.0], [71.6, 156.0], [71.7, 156.0], [71.8, 156.0], [71.9, 157.0], [72.0, 157.0], [72.1, 157.0], [72.2, 158.0], [72.3, 158.0], [72.4, 158.0], [72.5, 159.0], [72.6, 159.0], [72.7, 160.0], [72.8, 160.0], [72.9, 160.0], [73.0, 161.0], [73.1, 161.0], [73.2, 161.0], [73.3, 162.0], [73.4, 162.0], [73.5, 162.0], [73.6, 163.0], [73.7, 163.0], [73.8, 164.0], [73.9, 164.0], [74.0, 164.0], [74.1, 165.0], [74.2, 165.0], [74.3, 165.0], [74.4, 166.0], [74.5, 166.0], [74.6, 167.0], [74.7, 167.0], [74.8, 167.0], [74.9, 168.0], [75.0, 168.0], [75.1, 169.0], [75.2, 169.0], [75.3, 169.0], [75.4, 170.0], [75.5, 170.0], [75.6, 171.0], [75.7, 171.0], [75.8, 171.0], [75.9, 172.0], [76.0, 172.0], [76.1, 173.0], [76.2, 173.0], [76.3, 173.0], [76.4, 174.0], [76.5, 174.0], [76.6, 175.0], [76.7, 175.0], [76.8, 176.0], [76.9, 176.0], [77.0, 176.0], [77.1, 177.0], [77.2, 177.0], [77.3, 178.0], [77.4, 178.0], [77.5, 178.0], [77.6, 179.0], [77.7, 179.0], [77.8, 180.0], [77.9, 180.0], [78.0, 181.0], [78.1, 181.0], [78.2, 182.0], [78.3, 182.0], [78.4, 182.0], [78.5, 183.0], [78.6, 183.0], [78.7, 184.0], [78.8, 184.0], [78.9, 185.0], [79.0, 185.0], [79.1, 185.0], [79.2, 186.0], [79.3, 186.0], [79.4, 187.0], [79.5, 187.0], [79.6, 188.0], [79.7, 188.0], [79.8, 189.0], [79.9, 189.0], [80.0, 189.0], [80.1, 190.0], [80.2, 190.0], [80.3, 191.0], [80.4, 191.0], [80.5, 192.0], [80.6, 192.0], [80.7, 193.0], [80.8, 193.0], [80.9, 194.0], [81.0, 194.0], [81.1, 195.0], [81.2, 195.0], [81.3, 196.0], [81.4, 196.0], [81.5, 197.0], [81.6, 197.0], [81.7, 198.0], [81.8, 198.0], [81.9, 199.0], [82.0, 199.0], [82.1, 200.0], [82.2, 200.0], [82.3, 200.0], [82.4, 201.0], [82.5, 202.0], [82.6, 202.0], [82.7, 203.0], [82.8, 203.0], [82.9, 203.0], [83.0, 204.0], [83.1, 204.0], [83.2, 205.0], [83.3, 205.0], [83.4, 206.0], [83.5, 206.0], [83.6, 207.0], [83.7, 207.0], [83.8, 208.0], [83.9, 208.0], [84.0, 209.0], [84.1, 209.0], [84.2, 210.0], [84.3, 210.0], [84.4, 211.0], [84.5, 211.0], [84.6, 212.0], [84.7, 213.0], [84.8, 213.0], [84.9, 214.0], [85.0, 214.0], [85.1, 215.0], [85.2, 215.0], [85.3, 216.0], [85.4, 217.0], [85.5, 217.0], [85.6, 218.0], [85.7, 219.0], [85.8, 219.0], [85.9, 220.0], [86.0, 220.0], [86.1, 221.0], [86.2, 222.0], [86.3, 222.0], [86.4, 223.0], [86.5, 223.0], [86.6, 224.0], [86.7, 224.0], [86.8, 225.0], [86.9, 225.0], [87.0, 226.0], [87.1, 227.0], [87.2, 227.0], [87.3, 228.0], [87.4, 228.0], [87.5, 229.0], [87.6, 229.0], [87.7, 230.0], [87.8, 231.0], [87.9, 231.0], [88.0, 232.0], [88.1, 233.0], [88.2, 233.0], [88.3, 234.0], [88.4, 235.0], [88.5, 235.0], [88.6, 236.0], [88.7, 236.0], [88.8, 237.0], [88.9, 238.0], [89.0, 239.0], [89.1, 239.0], [89.2, 240.0], [89.3, 240.0], [89.4, 241.0], [89.5, 242.0], [89.6, 243.0], [89.7, 244.0], [89.8, 244.0], [89.9, 245.0], [90.0, 246.0], [90.1, 247.0], [90.2, 247.0], [90.3, 248.0], [90.4, 249.0], [90.5, 250.0], [90.6, 250.0], [90.7, 251.0], [90.8, 252.0], [90.9, 253.0], [91.0, 254.0], [91.1, 255.0], [91.2, 255.0], [91.3, 256.0], [91.4, 257.0], [91.5, 258.0], [91.6, 259.0], [91.7, 260.0], [91.8, 261.0], [91.9, 262.0], [92.0, 263.0], [92.1, 265.0], [92.2, 266.0], [92.3, 267.0], [92.4, 268.0], [92.5, 270.0], [92.6, 271.0], [92.7, 272.0], [92.8, 273.0], [92.9, 275.0], [93.0, 276.0], [93.1, 277.0], [93.2, 279.0], [93.3, 280.0], [93.4, 282.0], [93.5, 283.0], [93.6, 285.0], [93.7, 287.0], [93.8, 289.0], [93.9, 290.0], [94.0, 291.0], [94.1, 293.0], [94.2, 294.0], [94.3, 296.0], [94.4, 297.0], [94.5, 299.0], [94.6, 300.0], [94.7, 302.0], [94.8, 303.0], [94.9, 305.0], [95.0, 307.0], [95.1, 308.0], [95.2, 310.0], [95.3, 312.0], [95.4, 313.0], [95.5, 314.0], [95.6, 316.0], [95.7, 318.0], [95.8, 320.0], [95.9, 321.0], [96.0, 323.0], [96.1, 325.0], [96.2, 326.0], [96.3, 329.0], [96.4, 330.0], [96.5, 333.0], [96.6, 335.0], [96.7, 337.0], [96.8, 339.0], [96.9, 341.0], [97.0, 343.0], [97.1, 345.0], [97.2, 348.0], [97.3, 351.0], [97.4, 354.0], [97.5, 356.0], [97.6, 360.0], [97.7, 363.0], [97.8, 368.0], [97.9, 373.0], [98.0, 378.0], [98.1, 382.0], [98.2, 386.0], [98.3, 390.0], [98.4, 395.0], [98.5, 399.0], [98.6, 404.0], [98.7, 409.0], [98.8, 416.0], [98.9, 425.0], [99.0, 435.0], [99.1, 446.0], [99.2, 457.0], [99.3, 469.0], [99.4, 481.0], [99.5, 499.0], [99.6, 522.0], [99.7, 560.0], [99.8, 597.0], [99.9, 640.0], [100.0, 1083.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 23290.0, "series": [{"data": [[0.0, 23290.0], [300.0, 1780.0], [600.0, 62.0], [700.0, 9.0], [100.0, 13522.0], [200.0, 5583.0], [400.0, 446.0], [800.0, 9.0], [900.0, 2.0], [500.0, 140.0], [1000.0, 1.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 221.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 44623.0, "series": [{"data": [[0.0, 44623.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 221.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 95.60452488687781, "minX": 1.71915582E12, "maxY": 100.0, "series": [{"data": [[1.71915618E12, 100.0], [1.719156E12, 100.0], [1.71915606E12, 100.0], [1.71915636E12, 100.0], [1.71915588E12, 100.0], [1.71915642E12, 95.60452488687781], [1.71915594E12, 100.0], [1.71915624E12, 100.0], [1.7191563E12, 100.0], [1.71915582E12, 96.67881328603666], [1.71915612E12, 100.0]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915642E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 60.0, "minX": 3.0, "maxY": 218.0, "series": [{"data": [[3.0, 97.0], [5.0, 81.5], [9.0, 79.25], [13.0, 85.75], [14.0, 105.0], [15.0, 133.0], [16.0, 134.0], [17.0, 140.0], [18.0, 77.8], [19.0, 60.0], [20.0, 157.0], [21.0, 190.0], [22.0, 84.0], [23.0, 164.0], [24.0, 142.0], [25.0, 71.25], [26.0, 131.0], [27.0, 91.0], [28.0, 132.0], [29.0, 100.5], [30.0, 99.8], [32.0, 108.0], [33.0, 80.0], [34.0, 87.16666666666667], [35.0, 100.0], [36.0, 70.25], [38.0, 86.8], [39.0, 126.0], [40.0, 135.75], [41.0, 163.0], [42.0, 104.16666666666667], [43.0, 82.0], [44.0, 84.0], [45.0, 89.0], [46.0, 96.4], [47.0, 122.66666666666666], [48.0, 139.75], [49.0, 103.0], [50.0, 91.33333333333333], [51.0, 109.0], [52.0, 143.57142857142858], [53.0, 95.83333333333333], [54.0, 98.16666666666667], [55.0, 68.75], [56.0, 134.16666666666666], [57.0, 124.0], [58.0, 124.33333333333333], [59.0, 134.00000000000003], [60.0, 124.71428571428571], [61.0, 191.0], [62.0, 159.33333333333334], [63.0, 144.0], [64.0, 132.85714285714286], [65.0, 218.0], [66.0, 212.0], [67.0, 161.46153846153845], [68.0, 119.85714285714286], [69.0, 93.25], [70.0, 92.2], [71.0, 144.75], [72.0, 88.57142857142857], [73.0, 114.25000000000001], [74.0, 100.0], [75.0, 94.75], [76.0, 149.0], [77.0, 145.66666666666666], [78.0, 203.5], [79.0, 155.9090909090909], [80.0, 84.0], [81.0, 116.5], [82.0, 119.99999999999999], [83.0, 175.0], [84.0, 122.0], [85.0, 107.0], [86.0, 70.6], [87.0, 170.5], [88.0, 75.125], [89.0, 136.2], [90.0, 86.0], [91.0, 75.0], [92.0, 88.3125], [93.0, 76.125], [94.0, 103.55555555555556], [95.0, 108.3], [96.0, 86.0], [97.0, 97.92307692307692], [98.0, 76.54545454545453], [99.0, 80.2], [100.0, 126.03048794217531]], "isOverall": false, "label": "Directors by name", "isController": false}, {"data": [[99.6620283649986, 125.8929176701454]], "isOverall": false, "label": "Directors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2961.4, "minX": 1.71915582E12, "maxY": 103869.86666666667, "series": [{"data": [[1.71915618E12, 90074.51666666666], [1.719156E12, 87677.06666666667], [1.71915606E12, 90001.75], [1.71915636E12, 100965.75], [1.71915588E12, 84886.38333333333], [1.71915642E12, 21837.066666666666], [1.71915594E12, 83860.9], [1.71915624E12, 103869.86666666667], [1.7191563E12, 95209.46666666666], [1.71915582E12, 59677.666666666664], [1.71915612E12, 86905.18333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71915618E12, 12366.033333333333], [1.719156E12, 11513.733333333334], [1.71915606E12, 11864.516666666666], [1.71915636E12, 12629.8], [1.71915588E12, 11600.066666666668], [1.71915642E12, 2961.4], [1.71915594E12, 11707.216666666667], [1.71915624E12, 12371.166666666666], [1.7191563E12, 12431.216666666667], [1.71915582E12, 8295.0], [1.71915612E12, 11744.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915642E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 60.80887300252322, "minX": 1.71915582E12, "maxY": 192.5722891566273, "series": [{"data": [[1.71915618E12, 92.20880069025024], [1.719156E12, 192.5722891566273], [1.71915606E12, 145.79699079272388], [1.71915636E12, 60.80887300252322], [1.71915588E12, 173.11305549159547], [1.71915642E12, 115.8334841628958], [1.71915594E12, 173.11798265632123], [1.71915624E12, 95.7643133878605], [1.7191563E12, 83.22846120874394], [1.71915582E12, 94.35311189938757], [1.71915612E12, 154.09819819819782]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915642E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 60.76303616484441, "minX": 1.71915582E12, "maxY": 192.5465708989802, "series": [{"data": [[1.71915618E12, 92.20448662640187], [1.719156E12, 192.5465708989802], [1.71915606E12, 145.18908600943226], [1.71915636E12, 60.76303616484441], [1.71915588E12, 173.10637807966825], [1.71915642E12, 115.82081447963806], [1.71915594E12, 173.11706983112722], [1.71915624E12, 95.69242359018511], [1.7191563E12, 83.21174453493393], [1.71915582E12, 94.35246694614666], [1.71915612E12, 154.08626126126103]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915642E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71915582E12, "maxY": 3.8021316033364383, "series": [{"data": [[1.71915618E12, 1.3552631578947354], [1.719156E12, 3.8021316033364383], [1.71915606E12, 2.81899842802604], [1.71915636E12, 1.1837678721614833], [1.71915588E12, 3.5498503338705967], [1.71915642E12, 0.0], [1.71915594E12, 2.687357371063439], [1.71915624E12, 1.3551442100731828], [1.7191563E12, 1.1772396056579495], [1.71915582E12, 2.6694614640438616], [1.71915612E12, 3.5693693693693493]], "isOverall": false, "label": "Directors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915642E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.71915582E12, "maxY": 1083.0, "series": [{"data": [[1.71915618E12, 723.0], [1.719156E12, 901.0], [1.71915606E12, 1083.0], [1.71915636E12, 324.0], [1.71915588E12, 820.0], [1.71915642E12, 477.0], [1.71915594E12, 975.0], [1.71915624E12, 512.0], [1.7191563E12, 672.0], [1.71915582E12, 619.0], [1.71915612E12, 711.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71915618E12, 38.0], [1.719156E12, 38.0], [1.71915606E12, 38.0], [1.71915636E12, 38.0], [1.71915588E12, 39.0], [1.71915642E12, 40.0], [1.71915594E12, 40.0], [1.71915624E12, 38.0], [1.7191563E12, 38.0], [1.71915582E12, 37.0], [1.71915612E12, 39.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71915618E12, 164.0], [1.719156E12, 339.0], [1.71915606E12, 257.0], [1.71915636E12, 93.0], [1.71915588E12, 323.0], [1.71915642E12, 209.39999999999998], [1.71915594E12, 300.0], [1.71915624E12, 191.0], [1.7191563E12, 150.30000000000018], [1.71915582E12, 192.0], [1.71915612E12, 262.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71915618E12, 269.0], [1.719156E12, 598.0], [1.71915606E12, 447.3800000000001], [1.71915636E12, 180.72000000000116], [1.71915588E12, 481.1200000000008], [1.71915642E12, 344.0], [1.71915594E12, 474.1700000000001], [1.71915624E12, 366.0599999999995], [1.7191563E12, 300.0], [1.71915582E12, 324.96000000000004], [1.71915612E12, 398.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71915618E12, 73.0], [1.719156E12, 168.0], [1.71915606E12, 124.0], [1.71915636E12, 50.0], [1.71915588E12, 154.0], [1.71915642E12, 95.0], [1.71915594E12, 159.0], [1.71915624E12, 69.0], [1.7191563E12, 63.0], [1.71915582E12, 71.0], [1.71915612E12, 137.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71915618E12, 200.0], [1.719156E12, 421.0], [1.71915606E12, 329.0], [1.71915636E12, 111.0], [1.71915588E12, 358.8000000000002], [1.71915642E12, 246.0], [1.71915594E12, 337.0], [1.71915624E12, 226.0], [1.7191563E12, 185.64999999999964], [1.71915582E12, 236.0], [1.71915612E12, 307.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915642E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 54.0, "minX": 4.0, "maxY": 498.0, "series": [{"data": [[4.0, 133.5], [11.0, 146.0], [14.0, 87.5], [20.0, 80.0], [21.0, 120.0], [25.0, 137.0], [26.0, 214.5], [29.0, 105.0], [33.0, 140.0], [34.0, 131.0], [36.0, 225.0], [37.0, 498.0], [39.0, 217.0], [38.0, 109.5], [41.0, 137.5], [40.0, 216.0], [42.0, 135.0], [43.0, 177.0], [45.0, 107.0], [44.0, 85.5], [47.0, 209.5], [46.0, 186.0], [48.0, 64.5], [49.0, 80.0], [50.0, 160.5], [51.0, 162.5], [52.0, 126.0], [53.0, 151.0], [55.0, 143.0], [54.0, 145.0], [56.0, 155.0], [57.0, 213.0], [59.0, 156.0], [58.0, 133.0], [60.0, 62.0], [61.0, 107.0], [62.0, 115.0], [63.0, 70.5], [64.0, 108.0], [65.0, 88.0], [67.0, 151.5], [66.0, 68.0], [69.0, 103.0], [71.0, 78.0], [70.0, 76.0], [68.0, 54.0], [75.0, 63.0], [74.0, 123.0], [73.0, 118.0], [72.0, 102.0], [79.0, 111.0], [78.0, 90.0], [77.0, 97.5], [76.0, 134.0], [82.0, 90.0], [80.0, 89.0], [81.0, 98.0], [83.0, 92.0], [85.0, 137.0], [87.0, 57.0], [84.0, 93.0], [86.0, 93.0], [90.0, 85.0], [88.0, 96.0], [89.0, 79.0], [91.0, 115.0], [92.0, 84.0], [94.0, 89.0], [93.0, 90.0], [95.0, 91.0], [99.0, 72.0], [97.0, 90.5], [96.0, 135.5], [98.0, 83.0], [100.0, 62.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 4.0, "maxY": 498.0, "series": [{"data": [[4.0, 133.5], [11.0, 146.0], [14.0, 87.5], [20.0, 80.0], [21.0, 120.0], [25.0, 137.0], [26.0, 214.5], [29.0, 105.0], [33.0, 140.0], [34.0, 131.0], [36.0, 225.0], [37.0, 498.0], [39.0, 217.0], [38.0, 109.5], [41.0, 137.5], [40.0, 216.0], [42.0, 135.0], [43.0, 177.0], [45.0, 107.0], [44.0, 85.5], [47.0, 208.5], [46.0, 186.0], [48.0, 64.5], [49.0, 80.0], [50.0, 160.5], [51.0, 162.5], [52.0, 126.0], [53.0, 151.0], [55.0, 143.0], [54.0, 145.0], [56.0, 155.0], [57.0, 213.0], [59.0, 156.0], [58.0, 133.0], [60.0, 62.0], [61.0, 107.0], [62.0, 115.0], [63.0, 70.5], [64.0, 108.0], [65.0, 88.0], [67.0, 151.5], [66.0, 67.5], [69.0, 103.0], [71.0, 78.0], [70.0, 75.5], [68.0, 54.0], [75.0, 63.0], [74.0, 123.0], [73.0, 118.0], [72.0, 102.0], [79.0, 111.0], [78.0, 90.0], [77.0, 97.5], [76.0, 133.0], [82.0, 90.0], [80.0, 89.0], [81.0, 98.0], [83.0, 92.0], [85.0, 137.0], [87.0, 57.0], [84.0, 93.0], [86.0, 93.0], [90.0, 85.0], [88.0, 96.0], [89.0, 79.0], [91.0, 115.0], [92.0, 84.0], [94.0, 89.0], [93.0, 90.0], [95.0, 91.0], [99.0, 72.0], [97.0, 90.5], [96.0, 135.5], [98.0, 83.0], [100.0, 62.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 18.333333333333332, "minX": 1.71915582E12, "maxY": 79.33333333333333, "series": [{"data": [[1.71915618E12, 77.2], [1.719156E12, 71.86666666666666], [1.71915606E12, 74.33333333333333], [1.71915636E12, 79.33333333333333], [1.71915588E12, 72.46666666666667], [1.71915642E12, 18.333333333333332], [1.71915594E12, 73.01666666666667], [1.71915624E12, 77.5], [1.7191563E12, 77.56666666666666], [1.71915582E12, 51.68333333333333], [1.71915612E12, 74.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915642E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 18.416666666666668, "minX": 1.71915582E12, "maxY": 79.26666666666667, "series": [{"data": [[1.71915618E12, 77.26666666666667], [1.719156E12, 71.93333333333334], [1.71915606E12, 74.21666666666667], [1.71915636E12, 79.26666666666667], [1.71915588E12, 72.38333333333334], [1.71915642E12, 18.416666666666668], [1.71915594E12, 73.03333333333333], [1.71915624E12, 77.43333333333334], [1.7191563E12, 77.76666666666667], [1.71915582E12, 51.68333333333333], [1.71915612E12, 74.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915642E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 18.416666666666668, "minX": 1.71915582E12, "maxY": 79.26666666666667, "series": [{"data": [[1.71915618E12, 77.26666666666667], [1.719156E12, 71.93333333333334], [1.71915606E12, 74.21666666666667], [1.71915636E12, 79.26666666666667], [1.71915588E12, 72.38333333333334], [1.71915642E12, 18.416666666666668], [1.71915594E12, 73.03333333333333], [1.71915624E12, 77.43333333333334], [1.7191563E12, 77.76666666666667], [1.71915582E12, 51.68333333333333], [1.71915612E12, 74.0]], "isOverall": false, "label": "Directors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915642E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 18.416666666666668, "minX": 1.71915582E12, "maxY": 79.26666666666667, "series": [{"data": [[1.71915618E12, 77.26666666666667], [1.719156E12, 71.93333333333334], [1.71915606E12, 74.21666666666667], [1.71915636E12, 79.26666666666667], [1.71915588E12, 72.38333333333334], [1.71915642E12, 18.416666666666668], [1.71915594E12, 73.03333333333333], [1.71915624E12, 77.43333333333334], [1.7191563E12, 77.76666666666667], [1.71915582E12, 51.68333333333333], [1.71915612E12, 74.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915642E12, "title": "Total Transactions Per Second"}},
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

