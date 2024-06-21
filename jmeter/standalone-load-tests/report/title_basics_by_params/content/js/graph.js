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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 3194.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 74.0], [3.4, 75.0], [3.5, 76.0], [3.6, 77.0], [3.7, 77.0], [3.8, 78.0], [3.9, 78.0], [4.0, 79.0], [4.1, 79.0], [4.2, 79.0], [4.3, 79.0], [4.4, 80.0], [4.5, 80.0], [4.6, 80.0], [4.7, 81.0], [4.8, 81.0], [4.9, 81.0], [5.0, 81.0], [5.1, 82.0], [5.2, 82.0], [5.3, 82.0], [5.4, 82.0], [5.5, 82.0], [5.6, 82.0], [5.7, 82.0], [5.8, 83.0], [5.9, 83.0], [6.0, 83.0], [6.1, 83.0], [6.2, 83.0], [6.3, 83.0], [6.4, 83.0], [6.5, 83.0], [6.6, 83.0], [6.7, 84.0], [6.8, 84.0], [6.9, 84.0], [7.0, 84.0], [7.1, 84.0], [7.2, 84.0], [7.3, 84.0], [7.4, 84.0], [7.5, 84.0], [7.6, 84.0], [7.7, 84.0], [7.8, 84.0], [7.9, 85.0], [8.0, 85.0], [8.1, 85.0], [8.2, 85.0], [8.3, 85.0], [8.4, 85.0], [8.5, 85.0], [8.6, 85.0], [8.7, 85.0], [8.8, 85.0], [8.9, 85.0], [9.0, 85.0], [9.1, 86.0], [9.2, 86.0], [9.3, 86.0], [9.4, 86.0], [9.5, 86.0], [9.6, 86.0], [9.7, 86.0], [9.8, 86.0], [9.9, 86.0], [10.0, 86.0], [10.1, 86.0], [10.2, 86.0], [10.3, 87.0], [10.4, 87.0], [10.5, 87.0], [10.6, 87.0], [10.7, 87.0], [10.8, 87.0], [10.9, 87.0], [11.0, 87.0], [11.1, 87.0], [11.2, 87.0], [11.3, 87.0], [11.4, 87.0], [11.5, 88.0], [11.6, 88.0], [11.7, 88.0], [11.8, 88.0], [11.9, 88.0], [12.0, 88.0], [12.1, 88.0], [12.2, 88.0], [12.3, 88.0], [12.4, 88.0], [12.5, 89.0], [12.6, 89.0], [12.7, 89.0], [12.8, 89.0], [12.9, 89.0], [13.0, 89.0], [13.1, 89.0], [13.2, 89.0], [13.3, 89.0], [13.4, 89.0], [13.5, 89.0], [13.6, 89.0], [13.7, 90.0], [13.8, 90.0], [13.9, 90.0], [14.0, 90.0], [14.1, 90.0], [14.2, 90.0], [14.3, 90.0], [14.4, 90.0], [14.5, 90.0], [14.6, 90.0], [14.7, 90.0], [14.8, 91.0], [14.9, 91.0], [15.0, 91.0], [15.1, 91.0], [15.2, 91.0], [15.3, 91.0], [15.4, 91.0], [15.5, 91.0], [15.6, 91.0], [15.7, 92.0], [15.8, 92.0], [15.9, 92.0], [16.0, 92.0], [16.1, 92.0], [16.2, 92.0], [16.3, 92.0], [16.4, 92.0], [16.5, 92.0], [16.6, 92.0], [16.7, 92.0], [16.8, 93.0], [16.9, 93.0], [17.0, 93.0], [17.1, 93.0], [17.2, 93.0], [17.3, 93.0], [17.4, 93.0], [17.5, 93.0], [17.6, 93.0], [17.7, 93.0], [17.8, 93.0], [17.9, 93.0], [18.0, 94.0], [18.1, 94.0], [18.2, 94.0], [18.3, 94.0], [18.4, 94.0], [18.5, 94.0], [18.6, 94.0], [18.7, 94.0], [18.8, 94.0], [18.9, 94.0], [19.0, 94.0], [19.1, 94.0], [19.2, 95.0], [19.3, 95.0], [19.4, 95.0], [19.5, 95.0], [19.6, 95.0], [19.7, 95.0], [19.8, 95.0], [19.9, 95.0], [20.0, 95.0], [20.1, 95.0], [20.2, 96.0], [20.3, 96.0], [20.4, 96.0], [20.5, 96.0], [20.6, 96.0], [20.7, 96.0], [20.8, 96.0], [20.9, 96.0], [21.0, 96.0], [21.1, 96.0], [21.2, 96.0], [21.3, 97.0], [21.4, 97.0], [21.5, 97.0], [21.6, 97.0], [21.7, 97.0], [21.8, 97.0], [21.9, 97.0], [22.0, 97.0], [22.1, 97.0], [22.2, 97.0], [22.3, 97.0], [22.4, 97.0], [22.5, 97.0], [22.6, 98.0], [22.7, 98.0], [22.8, 98.0], [22.9, 98.0], [23.0, 98.0], [23.1, 98.0], [23.2, 98.0], [23.3, 98.0], [23.4, 98.0], [23.5, 98.0], [23.6, 99.0], [23.7, 99.0], [23.8, 99.0], [23.9, 99.0], [24.0, 99.0], [24.1, 99.0], [24.2, 99.0], [24.3, 99.0], [24.4, 99.0], [24.5, 99.0], [24.6, 99.0], [24.7, 99.0], [24.8, 99.0], [24.9, 100.0], [25.0, 100.0], [25.1, 100.0], [25.2, 100.0], [25.3, 100.0], [25.4, 100.0], [25.5, 100.0], [25.6, 100.0], [25.7, 100.0], [25.8, 100.0], [25.9, 100.0], [26.0, 101.0], [26.1, 101.0], [26.2, 101.0], [26.3, 101.0], [26.4, 101.0], [26.5, 101.0], [26.6, 101.0], [26.7, 101.0], [26.8, 101.0], [26.9, 101.0], [27.0, 101.0], [27.1, 102.0], [27.2, 102.0], [27.3, 102.0], [27.4, 102.0], [27.5, 102.0], [27.6, 102.0], [27.7, 102.0], [27.8, 102.0], [27.9, 102.0], [28.0, 102.0], [28.1, 102.0], [28.2, 102.0], [28.3, 103.0], [28.4, 103.0], [28.5, 103.0], [28.6, 103.0], [28.7, 103.0], [28.8, 103.0], [28.9, 103.0], [29.0, 103.0], [29.1, 103.0], [29.2, 103.0], [29.3, 104.0], [29.4, 104.0], [29.5, 104.0], [29.6, 104.0], [29.7, 104.0], [29.8, 104.0], [29.9, 104.0], [30.0, 104.0], [30.1, 104.0], [30.2, 104.0], [30.3, 105.0], [30.4, 105.0], [30.5, 105.0], [30.6, 105.0], [30.7, 105.0], [30.8, 105.0], [30.9, 105.0], [31.0, 105.0], [31.1, 105.0], [31.2, 105.0], [31.3, 105.0], [31.4, 105.0], [31.5, 105.0], [31.6, 106.0], [31.7, 106.0], [31.8, 106.0], [31.9, 106.0], [32.0, 106.0], [32.1, 106.0], [32.2, 106.0], [32.3, 106.0], [32.4, 106.0], [32.5, 106.0], [32.6, 107.0], [32.7, 107.0], [32.8, 107.0], [32.9, 107.0], [33.0, 107.0], [33.1, 107.0], [33.2, 107.0], [33.3, 107.0], [33.4, 107.0], [33.5, 107.0], [33.6, 107.0], [33.7, 107.0], [33.8, 107.0], [33.9, 108.0], [34.0, 108.0], [34.1, 108.0], [34.2, 108.0], [34.3, 108.0], [34.4, 108.0], [34.5, 108.0], [34.6, 108.0], [34.7, 108.0], [34.8, 108.0], [34.9, 108.0], [35.0, 108.0], [35.1, 108.0], [35.2, 109.0], [35.3, 109.0], [35.4, 109.0], [35.5, 109.0], [35.6, 109.0], [35.7, 109.0], [35.8, 109.0], [35.9, 109.0], [36.0, 109.0], [36.1, 109.0], [36.2, 109.0], [36.3, 109.0], [36.4, 109.0], [36.5, 109.0], [36.6, 109.0], [36.7, 109.0], [36.8, 110.0], [36.9, 110.0], [37.0, 110.0], [37.1, 110.0], [37.2, 110.0], [37.3, 110.0], [37.4, 110.0], [37.5, 110.0], [37.6, 110.0], [37.7, 110.0], [37.8, 110.0], [37.9, 110.0], [38.0, 110.0], [38.1, 110.0], [38.2, 110.0], [38.3, 110.0], [38.4, 110.0], [38.5, 111.0], [38.6, 111.0], [38.7, 111.0], [38.8, 111.0], [38.9, 111.0], [39.0, 111.0], [39.1, 111.0], [39.2, 111.0], [39.3, 111.0], [39.4, 111.0], [39.5, 111.0], [39.6, 111.0], [39.7, 111.0], [39.8, 111.0], [39.9, 111.0], [40.0, 111.0], [40.1, 111.0], [40.2, 112.0], [40.3, 112.0], [40.4, 112.0], [40.5, 112.0], [40.6, 112.0], [40.7, 112.0], [40.8, 112.0], [40.9, 112.0], [41.0, 112.0], [41.1, 112.0], [41.2, 112.0], [41.3, 112.0], [41.4, 112.0], [41.5, 112.0], [41.6, 112.0], [41.7, 112.0], [41.8, 112.0], [41.9, 112.0], [42.0, 113.0], [42.1, 113.0], [42.2, 113.0], [42.3, 113.0], [42.4, 113.0], [42.5, 113.0], [42.6, 113.0], [42.7, 113.0], [42.8, 113.0], [42.9, 113.0], [43.0, 113.0], [43.1, 113.0], [43.2, 113.0], [43.3, 113.0], [43.4, 113.0], [43.5, 113.0], [43.6, 113.0], [43.7, 113.0], [43.8, 113.0], [43.9, 113.0], [44.0, 114.0], [44.1, 114.0], [44.2, 114.0], [44.3, 114.0], [44.4, 114.0], [44.5, 114.0], [44.6, 114.0], [44.7, 114.0], [44.8, 114.0], [44.9, 114.0], [45.0, 114.0], [45.1, 114.0], [45.2, 114.0], [45.3, 114.0], [45.4, 114.0], [45.5, 114.0], [45.6, 114.0], [45.7, 114.0], [45.8, 114.0], [45.9, 114.0], [46.0, 114.0], [46.1, 115.0], [46.2, 115.0], [46.3, 115.0], [46.4, 115.0], [46.5, 115.0], [46.6, 115.0], [46.7, 115.0], [46.8, 115.0], [46.9, 115.0], [47.0, 115.0], [47.1, 115.0], [47.2, 115.0], [47.3, 115.0], [47.4, 115.0], [47.5, 115.0], [47.6, 115.0], [47.7, 115.0], [47.8, 115.0], [47.9, 115.0], [48.0, 115.0], [48.1, 115.0], [48.2, 116.0], [48.3, 116.0], [48.4, 116.0], [48.5, 116.0], [48.6, 116.0], [48.7, 116.0], [48.8, 116.0], [48.9, 116.0], [49.0, 116.0], [49.1, 116.0], [49.2, 116.0], [49.3, 116.0], [49.4, 116.0], [49.5, 116.0], [49.6, 116.0], [49.7, 117.0], [49.8, 117.0], [49.9, 117.0], [50.0, 117.0], [50.1, 117.0], [50.2, 117.0], [50.3, 117.0], [50.4, 117.0], [50.5, 117.0], [50.6, 117.0], [50.7, 117.0], [50.8, 117.0], [50.9, 117.0], [51.0, 117.0], [51.1, 117.0], [51.2, 117.0], [51.3, 117.0], [51.4, 118.0], [51.5, 118.0], [51.6, 118.0], [51.7, 118.0], [51.8, 118.0], [51.9, 118.0], [52.0, 118.0], [52.1, 118.0], [52.2, 118.0], [52.3, 118.0], [52.4, 118.0], [52.5, 118.0], [52.6, 118.0], [52.7, 118.0], [52.8, 119.0], [52.9, 119.0], [53.0, 119.0], [53.1, 119.0], [53.2, 119.0], [53.3, 119.0], [53.4, 119.0], [53.5, 119.0], [53.6, 119.0], [53.7, 119.0], [53.8, 119.0], [53.9, 119.0], [54.0, 119.0], [54.1, 119.0], [54.2, 120.0], [54.3, 120.0], [54.4, 120.0], [54.5, 120.0], [54.6, 120.0], [54.7, 120.0], [54.8, 120.0], [54.9, 120.0], [55.0, 120.0], [55.1, 120.0], [55.2, 120.0], [55.3, 120.0], [55.4, 120.0], [55.5, 121.0], [55.6, 121.0], [55.7, 121.0], [55.8, 121.0], [55.9, 121.0], [56.0, 121.0], [56.1, 121.0], [56.2, 121.0], [56.3, 121.0], [56.4, 121.0], [56.5, 121.0], [56.6, 121.0], [56.7, 121.0], [56.8, 121.0], [56.9, 121.0], [57.0, 122.0], [57.1, 122.0], [57.2, 122.0], [57.3, 122.0], [57.4, 122.0], [57.5, 122.0], [57.6, 122.0], [57.7, 122.0], [57.8, 122.0], [57.9, 122.0], [58.0, 122.0], [58.1, 123.0], [58.2, 123.0], [58.3, 123.0], [58.4, 123.0], [58.5, 123.0], [58.6, 123.0], [58.7, 123.0], [58.8, 123.0], [58.9, 123.0], [59.0, 123.0], [59.1, 123.0], [59.2, 123.0], [59.3, 123.0], [59.4, 123.0], [59.5, 124.0], [59.6, 124.0], [59.7, 124.0], [59.8, 124.0], [59.9, 124.0], [60.0, 124.0], [60.1, 124.0], [60.2, 124.0], [60.3, 124.0], [60.4, 125.0], [60.5, 125.0], [60.6, 125.0], [60.7, 125.0], [60.8, 125.0], [60.9, 125.0], [61.0, 125.0], [61.1, 125.0], [61.2, 125.0], [61.3, 126.0], [61.4, 126.0], [61.5, 126.0], [61.6, 126.0], [61.7, 126.0], [61.8, 126.0], [61.9, 126.0], [62.0, 126.0], [62.1, 126.0], [62.2, 127.0], [62.3, 127.0], [62.4, 127.0], [62.5, 127.0], [62.6, 127.0], [62.7, 127.0], [62.8, 127.0], [62.9, 127.0], [63.0, 128.0], [63.1, 128.0], [63.2, 128.0], [63.3, 128.0], [63.4, 128.0], [63.5, 128.0], [63.6, 128.0], [63.7, 128.0], [63.8, 129.0], [63.9, 129.0], [64.0, 129.0], [64.1, 129.0], [64.2, 129.0], [64.3, 129.0], [64.4, 129.0], [64.5, 129.0], [64.6, 130.0], [64.7, 130.0], [64.8, 130.0], [64.9, 130.0], [65.0, 130.0], [65.1, 130.0], [65.2, 130.0], [65.3, 130.0], [65.4, 130.0], [65.5, 131.0], [65.6, 131.0], [65.7, 131.0], [65.8, 131.0], [65.9, 131.0], [66.0, 131.0], [66.1, 131.0], [66.2, 131.0], [66.3, 132.0], [66.4, 132.0], [66.5, 132.0], [66.6, 132.0], [66.7, 132.0], [66.8, 132.0], [66.9, 132.0], [67.0, 132.0], [67.1, 133.0], [67.2, 133.0], [67.3, 133.0], [67.4, 133.0], [67.5, 133.0], [67.6, 133.0], [67.7, 133.0], [67.8, 134.0], [67.9, 134.0], [68.0, 134.0], [68.1, 134.0], [68.2, 134.0], [68.3, 134.0], [68.4, 134.0], [68.5, 135.0], [68.6, 135.0], [68.7, 135.0], [68.8, 135.0], [68.9, 135.0], [69.0, 135.0], [69.1, 135.0], [69.2, 135.0], [69.3, 136.0], [69.4, 136.0], [69.5, 136.0], [69.6, 136.0], [69.7, 136.0], [69.8, 136.0], [69.9, 137.0], [70.0, 137.0], [70.1, 137.0], [70.2, 137.0], [70.3, 137.0], [70.4, 137.0], [70.5, 137.0], [70.6, 138.0], [70.7, 138.0], [70.8, 138.0], [70.9, 138.0], [71.0, 138.0], [71.1, 138.0], [71.2, 139.0], [71.3, 139.0], [71.4, 139.0], [71.5, 139.0], [71.6, 139.0], [71.7, 139.0], [71.8, 139.0], [71.9, 140.0], [72.0, 140.0], [72.1, 140.0], [72.2, 140.0], [72.3, 140.0], [72.4, 140.0], [72.5, 140.0], [72.6, 141.0], [72.7, 141.0], [72.8, 141.0], [72.9, 141.0], [73.0, 141.0], [73.1, 141.0], [73.2, 142.0], [73.3, 142.0], [73.4, 142.0], [73.5, 142.0], [73.6, 142.0], [73.7, 142.0], [73.8, 143.0], [73.9, 143.0], [74.0, 143.0], [74.1, 143.0], [74.2, 143.0], [74.3, 143.0], [74.4, 143.0], [74.5, 144.0], [74.6, 144.0], [74.7, 144.0], [74.8, 144.0], [74.9, 144.0], [75.0, 145.0], [75.1, 145.0], [75.2, 145.0], [75.3, 145.0], [75.4, 145.0], [75.5, 146.0], [75.6, 146.0], [75.7, 146.0], [75.8, 146.0], [75.9, 146.0], [76.0, 147.0], [76.1, 147.0], [76.2, 147.0], [76.3, 147.0], [76.4, 148.0], [76.5, 148.0], [76.6, 148.0], [76.7, 148.0], [76.8, 149.0], [76.9, 149.0], [77.0, 149.0], [77.1, 149.0], [77.2, 150.0], [77.3, 150.0], [77.4, 150.0], [77.5, 150.0], [77.6, 151.0], [77.7, 151.0], [77.8, 151.0], [77.9, 151.0], [78.0, 152.0], [78.1, 152.0], [78.2, 152.0], [78.3, 153.0], [78.4, 153.0], [78.5, 153.0], [78.6, 154.0], [78.7, 154.0], [78.8, 154.0], [78.9, 154.0], [79.0, 155.0], [79.1, 155.0], [79.2, 155.0], [79.3, 155.0], [79.4, 156.0], [79.5, 156.0], [79.6, 157.0], [79.7, 157.0], [79.8, 157.0], [79.9, 158.0], [80.0, 158.0], [80.1, 159.0], [80.2, 159.0], [80.3, 159.0], [80.4, 160.0], [80.5, 160.0], [80.6, 160.0], [80.7, 160.0], [80.8, 161.0], [80.9, 161.0], [81.0, 161.0], [81.1, 162.0], [81.2, 163.0], [81.3, 163.0], [81.4, 163.0], [81.5, 164.0], [81.6, 164.0], [81.7, 164.0], [81.8, 165.0], [81.9, 165.0], [82.0, 165.0], [82.1, 166.0], [82.2, 166.0], [82.3, 167.0], [82.4, 167.0], [82.5, 167.0], [82.6, 168.0], [82.7, 168.0], [82.8, 169.0], [82.9, 169.0], [83.0, 169.0], [83.1, 170.0], [83.2, 170.0], [83.3, 170.0], [83.4, 171.0], [83.5, 171.0], [83.6, 172.0], [83.7, 172.0], [83.8, 172.0], [83.9, 173.0], [84.0, 173.0], [84.1, 174.0], [84.2, 174.0], [84.3, 174.0], [84.4, 175.0], [84.5, 175.0], [84.6, 176.0], [84.7, 176.0], [84.8, 177.0], [84.9, 178.0], [85.0, 178.0], [85.1, 179.0], [85.2, 179.0], [85.3, 180.0], [85.4, 181.0], [85.5, 181.0], [85.6, 182.0], [85.7, 182.0], [85.8, 183.0], [85.9, 183.0], [86.0, 184.0], [86.1, 184.0], [86.2, 184.0], [86.3, 185.0], [86.4, 185.0], [86.5, 186.0], [86.6, 187.0], [86.7, 188.0], [86.8, 188.0], [86.9, 189.0], [87.0, 189.0], [87.1, 190.0], [87.2, 191.0], [87.3, 191.0], [87.4, 192.0], [87.5, 193.0], [87.6, 193.0], [87.7, 194.0], [87.8, 194.0], [87.9, 196.0], [88.0, 196.0], [88.1, 198.0], [88.2, 199.0], [88.3, 199.0], [88.4, 200.0], [88.5, 201.0], [88.6, 202.0], [88.7, 203.0], [88.8, 204.0], [88.9, 205.0], [89.0, 206.0], [89.1, 208.0], [89.2, 209.0], [89.3, 210.0], [89.4, 211.0], [89.5, 212.0], [89.6, 213.0], [89.7, 215.0], [89.8, 216.0], [89.9, 218.0], [90.0, 219.0], [90.1, 220.0], [90.2, 221.0], [90.3, 221.0], [90.4, 223.0], [90.5, 225.0], [90.6, 226.0], [90.7, 228.0], [90.8, 230.0], [90.9, 231.0], [91.0, 233.0], [91.1, 235.0], [91.2, 237.0], [91.3, 238.0], [91.4, 240.0], [91.5, 242.0], [91.6, 243.0], [91.7, 246.0], [91.8, 249.0], [91.9, 253.0], [92.0, 258.0], [92.1, 264.0], [92.2, 266.0], [92.3, 270.0], [92.4, 279.0], [92.5, 283.0], [92.6, 287.0], [92.7, 294.0], [92.8, 299.0], [92.9, 302.0], [93.0, 307.0], [93.1, 316.0], [93.2, 334.0], [93.3, 349.0], [93.4, 401.0], [93.5, 426.0], [93.6, 503.0], [93.7, 515.0], [93.8, 520.0], [93.9, 529.0], [94.0, 533.0], [94.1, 535.0], [94.2, 538.0], [94.3, 540.0], [94.4, 542.0], [94.5, 544.0], [94.6, 547.0], [94.7, 550.0], [94.8, 554.0], [94.9, 559.0], [95.0, 564.0], [95.1, 567.0], [95.2, 569.0], [95.3, 575.0], [95.4, 583.0], [95.5, 590.0], [95.6, 593.0], [95.7, 610.0], [95.8, 637.0], [95.9, 667.0], [96.0, 680.0], [96.1, 711.0], [96.2, 745.0], [96.3, 761.0], [96.4, 1079.0], [96.5, 1098.0], [96.6, 1109.0], [96.7, 1124.0], [96.8, 1134.0], [96.9, 1140.0], [97.0, 1155.0], [97.1, 1160.0], [97.2, 1167.0], [97.3, 1179.0], [97.4, 1194.0], [97.5, 1214.0], [97.6, 1228.0], [97.7, 1248.0], [97.8, 1278.0], [97.9, 1289.0], [98.0, 1306.0], [98.1, 1316.0], [98.2, 1327.0], [98.3, 1334.0], [98.4, 1352.0], [98.5, 1370.0], [98.6, 1404.0], [98.7, 1416.0], [98.8, 1438.0], [98.9, 1461.0], [99.0, 1505.0], [99.1, 1534.0], [99.2, 1566.0], [99.3, 1601.0], [99.4, 1682.0], [99.5, 1717.0], [99.6, 1796.0], [99.7, 1857.0], [99.8, 2473.0], [99.9, 2920.0], [100.0, 3194.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4096.0, "series": [{"data": [[0.0, 1605.0], [600.0, 26.0], [700.0, 19.0], [800.0, 1.0], [900.0, 3.0], [1000.0, 9.0], [1100.0, 59.0], [1200.0, 32.0], [1300.0, 41.0], [1400.0, 27.0], [1500.0, 19.0], [100.0, 4096.0], [1600.0, 11.0], [1700.0, 10.0], [1800.0, 8.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2600.0, 1.0], [2800.0, 3.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 291.0], [300.0, 36.0], [400.0, 12.0], [500.0, 133.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 65.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5831.0, "series": [{"data": [[0.0, 5831.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 349.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 65.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 210.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.6, "minX": 1.71897492E12, "maxY": 15.0, "series": [{"data": [[1.7189751E12, 15.0], [1.71897492E12, 14.62369337979095], [1.7189754E12, 15.0], [1.71897522E12, 15.0], [1.71897504E12, 15.0], [1.71897552E12, 11.6], [1.71897534E12, 15.0], [1.71897516E12, 15.0], [1.71897498E12, 15.0], [1.71897546E12, 15.0], [1.71897528E12, 15.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897552E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 120.33333333333333, "minX": 1.0, "maxY": 1433.0, "series": [{"data": [[8.0, 120.33333333333333], [9.0, 357.33333333333337], [10.0, 155.5], [11.0, 160.14285714285717], [3.0, 306.0], [12.0, 134.0], [13.0, 132.55555555555554], [14.0, 136.4], [15.0, 182.03923100968964], [4.0, 1354.5], [1.0, 1433.0], [5.0, 675.0], [6.0, 137.0], [7.0, 120.66666666666666]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[14.950735863671548, 183.082416731216]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 90.05, "minX": 1.71897492E12, "maxY": 90362.28333333334, "series": [{"data": [[1.7189751E12, 90362.28333333334], [1.71897492E12, 72333.86666666667], [1.7189754E12, 87006.1], [1.71897522E12, 83859.41666666667], [1.71897504E12, 90106.56666666667], [1.71897552E12, 3634.35], [1.71897534E12, 85556.53333333334], [1.71897516E12, 85045.41666666667], [1.71897498E12, 86725.45], [1.71897546E12, 77169.78333333334], [1.71897528E12, 84502.18333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7189751E12, 1993.0166666666667], [1.71897492E12, 1653.0833333333333], [1.7189754E12, 1947.0166666666667], [1.71897522E12, 1940.4666666666667], [1.71897504E12, 1984.0666666666666], [1.71897552E12, 90.05], [1.71897534E12, 1909.0], [1.71897516E12, 1861.6666666666667], [1.71897498E12, 1884.5333333333333], [1.71897546E12, 1754.3666666666666], [1.71897528E12, 1958.0333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897552E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 146.36336336336342, "minX": 1.71897492E12, "maxY": 646.7, "series": [{"data": [[1.7189751E12, 158.51807228915663], [1.71897492E12, 162.2247386759583], [1.7189754E12, 190.78395061728395], [1.71897522E12, 191.55709876543216], [1.71897504E12, 146.36336336336342], [1.71897552E12, 646.7], [1.71897534E12, 200.0480620155039], [1.71897516E12, 154.08144796380077], [1.71897498E12, 152.81325301204845], [1.71897546E12, 290.49335548172746], [1.71897528E12, 170.90015360983097]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897552E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 143.68618618618626, "minX": 1.71897492E12, "maxY": 644.8666666666666, "series": [{"data": [[1.7189751E12, 154.90060240963842], [1.71897492E12, 158.8397212543556], [1.7189754E12, 186.55401234567918], [1.71897522E12, 188.55246913580228], [1.71897504E12, 143.68618618618626], [1.71897552E12, 644.8666666666666], [1.71897534E12, 197.59224806201564], [1.71897516E12, 151.7767722473604], [1.71897498E12, 150.18072289156623], [1.71897546E12, 287.998338870432], [1.71897528E12, 168.13210445468522]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897552E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71897492E12, "maxY": 1.0935143288084466, "series": [{"data": [[1.7189751E12, 1.000000000000002], [1.71897492E12, 0.9285714285714298], [1.7189754E12, 0.9320987654320998], [1.71897522E12, 0.7515432098765432], [1.71897504E12, 0.8288288288288301], [1.71897552E12, 0.0], [1.71897534E12, 0.7953488372093025], [1.71897516E12, 1.0935143288084466], [1.71897498E12, 0.7409638554216876], [1.71897546E12, 0.8388704318936874], [1.71897528E12, 0.7557603686635948]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897552E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 72.0, "minX": 1.71897492E12, "maxY": 3194.0, "series": [{"data": [[1.7189751E12, 954.0], [1.71897492E12, 1534.0], [1.7189754E12, 1813.0], [1.71897522E12, 1710.0], [1.71897504E12, 637.0], [1.71897552E12, 1785.0], [1.71897534E12, 1681.0], [1.71897516E12, 1334.0], [1.71897498E12, 1320.0], [1.71897546E12, 3194.0], [1.71897528E12, 1557.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7189751E12, 74.0], [1.71897492E12, 75.0], [1.7189754E12, 74.0], [1.71897522E12, 73.0], [1.71897504E12, 75.0], [1.71897552E12, 83.0], [1.71897534E12, 74.0], [1.71897516E12, 76.0], [1.71897498E12, 76.0], [1.71897546E12, 72.0], [1.71897528E12, 77.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7189751E12, 208.39999999999998], [1.71897492E12, 203.0], [1.7189754E12, 189.80000000000018], [1.71897522E12, 284.0], [1.71897504E12, 217.60000000000014], [1.71897552E12, 1718.9], [1.71897534E12, 229.79999999999995], [1.71897516E12, 219.4000000000001], [1.71897498E12, 204.0], [1.71897546E12, 794.4000000000076], [1.71897528E12, 208.79999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7189751E12, 746.4399999999999], [1.71897492E12, 1331.8499999999997], [1.7189754E12, 1688.4200000000003], [1.71897522E12, 1414.8000000000002], [1.71897504E12, 596.8400000000001], [1.71897552E12, 1785.0], [1.71897534E12, 1571.2199999999978], [1.71897516E12, 1194.0], [1.71897498E12, 1152.7999999999993], [1.71897546E12, 2965.7800000000007], [1.71897528E12, 1371.08]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7189751E12, 118.0], [1.71897492E12, 115.0], [1.7189754E12, 116.0], [1.71897522E12, 116.0], [1.71897504E12, 115.0], [1.71897552E12, 145.5], [1.71897534E12, 119.0], [1.71897516E12, 117.5], [1.71897498E12, 118.0], [1.71897546E12, 121.0], [1.71897528E12, 126.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7189751E12, 564.5999999999998], [1.71897492E12, 517.5], [1.7189754E12, 560.550000000001], [1.71897522E12, 688.0], [1.71897504E12, 533.8], [1.71897552E12, 1770.7], [1.71897534E12, 1167.3999999999992], [1.71897516E12, 540.35], [1.71897498E12, 543.0], [1.71897546E12, 1442.2999999999997], [1.71897528E12, 262.69999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897552E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1299.5, "series": [{"data": [[2.0, 161.0], [8.0, 116.5], [9.0, 116.0], [10.0, 117.0], [11.0, 118.0], [3.0, 121.0], [12.0, 116.0], [13.0, 120.0], [14.0, 119.0], [15.0, 118.0], [4.0, 1299.5], [1.0, 257.0], [5.0, 113.0], [6.0, 132.0], [7.0, 118.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [5.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [7.0, 0.0], [15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1298.5, "series": [{"data": [[2.0, 160.0], [8.0, 113.0], [9.0, 113.0], [10.0, 115.0], [11.0, 115.0], [3.0, 117.0], [12.0, 113.0], [13.0, 117.0], [14.0, 116.0], [15.0, 115.0], [4.0, 1298.5], [1.0, 254.0], [5.0, 110.0], [6.0, 130.0], [7.0, 114.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [5.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [7.0, 0.0], [15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71897492E12, "maxY": 11.1, "series": [{"data": [[1.7189751E12, 11.05], [1.71897492E12, 9.566666666666666], [1.7189754E12, 10.733333333333333], [1.71897522E12, 10.783333333333333], [1.71897504E12, 11.083333333333334], [1.71897552E12, 0.4], [1.71897534E12, 10.716666666666667], [1.71897516E12, 11.083333333333334], [1.71897498E12, 11.1], [1.71897546E12, 10.133333333333333], [1.71897528E12, 10.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897552E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71897492E12, "maxY": 10.916666666666666, "series": [{"data": [[1.7189751E12, 10.916666666666666], [1.71897492E12, 9.066666666666666], [1.7189754E12, 10.7], [1.71897522E12, 10.65], [1.71897504E12, 10.85], [1.71897552E12, 0.5], [1.71897534E12, 10.5], [1.71897516E12, 10.2], [1.71897498E12, 10.316666666666666], [1.71897546E12, 9.633333333333333], [1.71897528E12, 10.75]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7189751E12, 0.15], [1.71897492E12, 0.5], [1.7189754E12, 0.1], [1.71897522E12, 0.15], [1.71897504E12, 0.25], [1.71897534E12, 0.25], [1.71897516E12, 0.85], [1.71897498E12, 0.75], [1.71897546E12, 0.4], [1.71897528E12, 0.1]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897552E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71897492E12, "maxY": 10.916666666666666, "series": [{"data": [[1.7189751E12, 0.15], [1.71897492E12, 0.5], [1.7189754E12, 0.1], [1.71897522E12, 0.15], [1.71897504E12, 0.25], [1.71897534E12, 0.25], [1.71897516E12, 0.85], [1.71897498E12, 0.75], [1.71897546E12, 0.4], [1.71897528E12, 0.1]], "isOverall": false, "label": "TitleBasics by params-failure", "isController": false}, {"data": [[1.7189751E12, 10.916666666666666], [1.71897492E12, 9.066666666666666], [1.7189754E12, 10.7], [1.71897522E12, 10.65], [1.71897504E12, 10.85], [1.71897552E12, 0.5], [1.71897534E12, 10.5], [1.71897516E12, 10.2], [1.71897498E12, 10.316666666666666], [1.71897546E12, 9.633333333333333], [1.71897528E12, 10.75]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897552E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71897492E12, "maxY": 10.916666666666666, "series": [{"data": [[1.7189751E12, 10.916666666666666], [1.71897492E12, 9.066666666666666], [1.7189754E12, 10.7], [1.71897522E12, 10.65], [1.71897504E12, 10.85], [1.71897552E12, 0.5], [1.71897534E12, 10.5], [1.71897516E12, 10.2], [1.71897498E12, 10.316666666666666], [1.71897546E12, 9.633333333333333], [1.71897528E12, 10.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7189751E12, 0.15], [1.71897492E12, 0.5], [1.7189754E12, 0.1], [1.71897522E12, 0.15], [1.71897504E12, 0.25], [1.71897534E12, 0.25], [1.71897516E12, 0.85], [1.71897498E12, 0.75], [1.71897546E12, 0.4], [1.71897528E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897552E12, "title": "Total Transactions Per Second"}},
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

