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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 2951.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 75.0], [3.3, 76.0], [3.4, 78.0], [3.5, 80.0], [3.6, 81.0], [3.7, 82.0], [3.8, 83.0], [3.9, 83.0], [4.0, 84.0], [4.1, 84.0], [4.2, 85.0], [4.3, 85.0], [4.4, 85.0], [4.5, 85.0], [4.6, 85.0], [4.7, 86.0], [4.8, 86.0], [4.9, 86.0], [5.0, 86.0], [5.1, 87.0], [5.2, 87.0], [5.3, 87.0], [5.4, 87.0], [5.5, 87.0], [5.6, 87.0], [5.7, 88.0], [5.8, 88.0], [5.9, 88.0], [6.0, 88.0], [6.1, 88.0], [6.2, 88.0], [6.3, 88.0], [6.4, 89.0], [6.5, 89.0], [6.6, 89.0], [6.7, 89.0], [6.8, 89.0], [6.9, 89.0], [7.0, 89.0], [7.1, 90.0], [7.2, 90.0], [7.3, 90.0], [7.4, 90.0], [7.5, 90.0], [7.6, 90.0], [7.7, 90.0], [7.8, 90.0], [7.9, 90.0], [8.0, 90.0], [8.1, 91.0], [8.2, 91.0], [8.3, 91.0], [8.4, 91.0], [8.5, 91.0], [8.6, 91.0], [8.7, 91.0], [8.8, 91.0], [8.9, 91.0], [9.0, 92.0], [9.1, 92.0], [9.2, 92.0], [9.3, 92.0], [9.4, 92.0], [9.5, 92.0], [9.6, 93.0], [9.7, 93.0], [9.8, 93.0], [9.9, 93.0], [10.0, 93.0], [10.1, 93.0], [10.2, 93.0], [10.3, 93.0], [10.4, 94.0], [10.5, 94.0], [10.6, 94.0], [10.7, 94.0], [10.8, 94.0], [10.9, 94.0], [11.0, 94.0], [11.1, 94.0], [11.2, 95.0], [11.3, 95.0], [11.4, 95.0], [11.5, 95.0], [11.6, 95.0], [11.7, 95.0], [11.8, 95.0], [11.9, 95.0], [12.0, 96.0], [12.1, 96.0], [12.2, 96.0], [12.3, 96.0], [12.4, 96.0], [12.5, 96.0], [12.6, 96.0], [12.7, 96.0], [12.8, 96.0], [12.9, 97.0], [13.0, 97.0], [13.1, 97.0], [13.2, 97.0], [13.3, 97.0], [13.4, 97.0], [13.5, 97.0], [13.6, 97.0], [13.7, 97.0], [13.8, 97.0], [13.9, 97.0], [14.0, 97.0], [14.1, 98.0], [14.2, 98.0], [14.3, 98.0], [14.4, 98.0], [14.5, 98.0], [14.6, 98.0], [14.7, 98.0], [14.8, 98.0], [14.9, 98.0], [15.0, 98.0], [15.1, 99.0], [15.2, 99.0], [15.3, 99.0], [15.4, 99.0], [15.5, 99.0], [15.6, 99.0], [15.7, 99.0], [15.8, 99.0], [15.9, 99.0], [16.0, 99.0], [16.1, 99.0], [16.2, 100.0], [16.3, 100.0], [16.4, 100.0], [16.5, 100.0], [16.6, 100.0], [16.7, 100.0], [16.8, 100.0], [16.9, 100.0], [17.0, 100.0], [17.1, 100.0], [17.2, 101.0], [17.3, 101.0], [17.4, 101.0], [17.5, 101.0], [17.6, 101.0], [17.7, 101.0], [17.8, 101.0], [17.9, 101.0], [18.0, 101.0], [18.1, 101.0], [18.2, 102.0], [18.3, 102.0], [18.4, 102.0], [18.5, 102.0], [18.6, 102.0], [18.7, 102.0], [18.8, 102.0], [18.9, 102.0], [19.0, 102.0], [19.1, 102.0], [19.2, 102.0], [19.3, 103.0], [19.4, 103.0], [19.5, 103.0], [19.6, 103.0], [19.7, 103.0], [19.8, 103.0], [19.9, 103.0], [20.0, 103.0], [20.1, 103.0], [20.2, 103.0], [20.3, 103.0], [20.4, 104.0], [20.5, 104.0], [20.6, 104.0], [20.7, 104.0], [20.8, 104.0], [20.9, 104.0], [21.0, 104.0], [21.1, 104.0], [21.2, 104.0], [21.3, 104.0], [21.4, 105.0], [21.5, 105.0], [21.6, 105.0], [21.7, 105.0], [21.8, 105.0], [21.9, 105.0], [22.0, 105.0], [22.1, 105.0], [22.2, 105.0], [22.3, 106.0], [22.4, 106.0], [22.5, 106.0], [22.6, 106.0], [22.7, 106.0], [22.8, 106.0], [22.9, 106.0], [23.0, 106.0], [23.1, 106.0], [23.2, 106.0], [23.3, 106.0], [23.4, 107.0], [23.5, 107.0], [23.6, 107.0], [23.7, 107.0], [23.8, 107.0], [23.9, 107.0], [24.0, 107.0], [24.1, 107.0], [24.2, 107.0], [24.3, 107.0], [24.4, 107.0], [24.5, 108.0], [24.6, 108.0], [24.7, 108.0], [24.8, 108.0], [24.9, 108.0], [25.0, 108.0], [25.1, 108.0], [25.2, 108.0], [25.3, 108.0], [25.4, 108.0], [25.5, 108.0], [25.6, 108.0], [25.7, 109.0], [25.8, 109.0], [25.9, 109.0], [26.0, 109.0], [26.1, 109.0], [26.2, 109.0], [26.3, 109.0], [26.4, 109.0], [26.5, 109.0], [26.6, 109.0], [26.7, 110.0], [26.8, 110.0], [26.9, 110.0], [27.0, 110.0], [27.1, 110.0], [27.2, 110.0], [27.3, 110.0], [27.4, 110.0], [27.5, 110.0], [27.6, 110.0], [27.7, 110.0], [27.8, 110.0], [27.9, 110.0], [28.0, 110.0], [28.1, 110.0], [28.2, 111.0], [28.3, 111.0], [28.4, 111.0], [28.5, 111.0], [28.6, 111.0], [28.7, 111.0], [28.8, 111.0], [28.9, 111.0], [29.0, 111.0], [29.1, 111.0], [29.2, 111.0], [29.3, 111.0], [29.4, 112.0], [29.5, 112.0], [29.6, 112.0], [29.7, 112.0], [29.8, 112.0], [29.9, 112.0], [30.0, 112.0], [30.1, 112.0], [30.2, 112.0], [30.3, 112.0], [30.4, 112.0], [30.5, 112.0], [30.6, 112.0], [30.7, 112.0], [30.8, 112.0], [30.9, 113.0], [31.0, 113.0], [31.1, 113.0], [31.2, 113.0], [31.3, 113.0], [31.4, 113.0], [31.5, 113.0], [31.6, 113.0], [31.7, 113.0], [31.8, 113.0], [31.9, 113.0], [32.0, 113.0], [32.1, 113.0], [32.2, 114.0], [32.3, 114.0], [32.4, 114.0], [32.5, 114.0], [32.6, 114.0], [32.7, 114.0], [32.8, 114.0], [32.9, 114.0], [33.0, 114.0], [33.1, 114.0], [33.2, 114.0], [33.3, 114.0], [33.4, 114.0], [33.5, 114.0], [33.6, 114.0], [33.7, 114.0], [33.8, 115.0], [33.9, 115.0], [34.0, 115.0], [34.1, 115.0], [34.2, 115.0], [34.3, 115.0], [34.4, 115.0], [34.5, 115.0], [34.6, 115.0], [34.7, 115.0], [34.8, 115.0], [34.9, 115.0], [35.0, 115.0], [35.1, 115.0], [35.2, 115.0], [35.3, 115.0], [35.4, 115.0], [35.5, 116.0], [35.6, 116.0], [35.7, 116.0], [35.8, 116.0], [35.9, 116.0], [36.0, 116.0], [36.1, 116.0], [36.2, 116.0], [36.3, 116.0], [36.4, 116.0], [36.5, 116.0], [36.6, 116.0], [36.7, 116.0], [36.8, 116.0], [36.9, 116.0], [37.0, 116.0], [37.1, 116.0], [37.2, 116.0], [37.3, 116.0], [37.4, 116.0], [37.5, 117.0], [37.6, 117.0], [37.7, 117.0], [37.8, 117.0], [37.9, 117.0], [38.0, 117.0], [38.1, 117.0], [38.2, 117.0], [38.3, 117.0], [38.4, 117.0], [38.5, 117.0], [38.6, 117.0], [38.7, 117.0], [38.8, 117.0], [38.9, 117.0], [39.0, 117.0], [39.1, 117.0], [39.2, 117.0], [39.3, 117.0], [39.4, 117.0], [39.5, 117.0], [39.6, 118.0], [39.7, 118.0], [39.8, 118.0], [39.9, 118.0], [40.0, 118.0], [40.1, 118.0], [40.2, 118.0], [40.3, 118.0], [40.4, 118.0], [40.5, 118.0], [40.6, 118.0], [40.7, 118.0], [40.8, 118.0], [40.9, 118.0], [41.0, 118.0], [41.1, 118.0], [41.2, 118.0], [41.3, 118.0], [41.4, 118.0], [41.5, 118.0], [41.6, 118.0], [41.7, 118.0], [41.8, 118.0], [41.9, 119.0], [42.0, 119.0], [42.1, 119.0], [42.2, 119.0], [42.3, 119.0], [42.4, 119.0], [42.5, 119.0], [42.6, 119.0], [42.7, 119.0], [42.8, 119.0], [42.9, 119.0], [43.0, 119.0], [43.1, 119.0], [43.2, 119.0], [43.3, 119.0], [43.4, 119.0], [43.5, 119.0], [43.6, 119.0], [43.7, 119.0], [43.8, 120.0], [43.9, 120.0], [44.0, 120.0], [44.1, 120.0], [44.2, 120.0], [44.3, 120.0], [44.4, 120.0], [44.5, 120.0], [44.6, 120.0], [44.7, 120.0], [44.8, 120.0], [44.9, 120.0], [45.0, 120.0], [45.1, 120.0], [45.2, 120.0], [45.3, 120.0], [45.4, 120.0], [45.5, 120.0], [45.6, 120.0], [45.7, 120.0], [45.8, 120.0], [45.9, 121.0], [46.0, 121.0], [46.1, 121.0], [46.2, 121.0], [46.3, 121.0], [46.4, 121.0], [46.5, 121.0], [46.6, 121.0], [46.7, 121.0], [46.8, 121.0], [46.9, 121.0], [47.0, 121.0], [47.1, 121.0], [47.2, 121.0], [47.3, 121.0], [47.4, 121.0], [47.5, 122.0], [47.6, 122.0], [47.7, 122.0], [47.8, 122.0], [47.9, 122.0], [48.0, 122.0], [48.1, 122.0], [48.2, 122.0], [48.3, 122.0], [48.4, 122.0], [48.5, 122.0], [48.6, 122.0], [48.7, 122.0], [48.8, 122.0], [48.9, 122.0], [49.0, 122.0], [49.1, 123.0], [49.2, 123.0], [49.3, 123.0], [49.4, 123.0], [49.5, 123.0], [49.6, 123.0], [49.7, 123.0], [49.8, 123.0], [49.9, 123.0], [50.0, 123.0], [50.1, 123.0], [50.2, 123.0], [50.3, 123.0], [50.4, 123.0], [50.5, 123.0], [50.6, 124.0], [50.7, 124.0], [50.8, 124.0], [50.9, 124.0], [51.0, 124.0], [51.1, 124.0], [51.2, 124.0], [51.3, 124.0], [51.4, 124.0], [51.5, 124.0], [51.6, 124.0], [51.7, 124.0], [51.8, 124.0], [51.9, 124.0], [52.0, 125.0], [52.1, 125.0], [52.2, 125.0], [52.3, 125.0], [52.4, 125.0], [52.5, 125.0], [52.6, 125.0], [52.7, 125.0], [52.8, 125.0], [52.9, 125.0], [53.0, 125.0], [53.1, 125.0], [53.2, 126.0], [53.3, 126.0], [53.4, 126.0], [53.5, 126.0], [53.6, 126.0], [53.7, 126.0], [53.8, 126.0], [53.9, 126.0], [54.0, 126.0], [54.1, 126.0], [54.2, 126.0], [54.3, 126.0], [54.4, 127.0], [54.5, 127.0], [54.6, 127.0], [54.7, 127.0], [54.8, 127.0], [54.9, 127.0], [55.0, 127.0], [55.1, 127.0], [55.2, 127.0], [55.3, 127.0], [55.4, 127.0], [55.5, 127.0], [55.6, 127.0], [55.7, 128.0], [55.8, 128.0], [55.9, 128.0], [56.0, 128.0], [56.1, 128.0], [56.2, 128.0], [56.3, 128.0], [56.4, 128.0], [56.5, 128.0], [56.6, 128.0], [56.7, 128.0], [56.8, 128.0], [56.9, 129.0], [57.0, 129.0], [57.1, 129.0], [57.2, 129.0], [57.3, 129.0], [57.4, 129.0], [57.5, 129.0], [57.6, 129.0], [57.7, 129.0], [57.8, 129.0], [57.9, 130.0], [58.0, 130.0], [58.1, 130.0], [58.2, 130.0], [58.3, 130.0], [58.4, 130.0], [58.5, 130.0], [58.6, 130.0], [58.7, 130.0], [58.8, 131.0], [58.9, 131.0], [59.0, 131.0], [59.1, 131.0], [59.2, 131.0], [59.3, 131.0], [59.4, 131.0], [59.5, 131.0], [59.6, 131.0], [59.7, 132.0], [59.8, 132.0], [59.9, 132.0], [60.0, 132.0], [60.1, 132.0], [60.2, 132.0], [60.3, 132.0], [60.4, 132.0], [60.5, 132.0], [60.6, 133.0], [60.7, 133.0], [60.8, 133.0], [60.9, 133.0], [61.0, 133.0], [61.1, 133.0], [61.2, 133.0], [61.3, 133.0], [61.4, 133.0], [61.5, 133.0], [61.6, 134.0], [61.7, 134.0], [61.8, 134.0], [61.9, 134.0], [62.0, 134.0], [62.1, 134.0], [62.2, 134.0], [62.3, 134.0], [62.4, 135.0], [62.5, 135.0], [62.6, 135.0], [62.7, 135.0], [62.8, 135.0], [62.9, 135.0], [63.0, 135.0], [63.1, 135.0], [63.2, 136.0], [63.3, 136.0], [63.4, 136.0], [63.5, 136.0], [63.6, 136.0], [63.7, 136.0], [63.8, 136.0], [63.9, 136.0], [64.0, 137.0], [64.1, 137.0], [64.2, 137.0], [64.3, 137.0], [64.4, 137.0], [64.5, 137.0], [64.6, 137.0], [64.7, 138.0], [64.8, 138.0], [64.9, 138.0], [65.0, 138.0], [65.1, 138.0], [65.2, 138.0], [65.3, 139.0], [65.4, 139.0], [65.5, 139.0], [65.6, 139.0], [65.7, 139.0], [65.8, 139.0], [65.9, 140.0], [66.0, 140.0], [66.1, 140.0], [66.2, 140.0], [66.3, 140.0], [66.4, 140.0], [66.5, 141.0], [66.6, 141.0], [66.7, 141.0], [66.8, 141.0], [66.9, 141.0], [67.0, 141.0], [67.1, 141.0], [67.2, 141.0], [67.3, 141.0], [67.4, 142.0], [67.5, 142.0], [67.6, 142.0], [67.7, 142.0], [67.8, 142.0], [67.9, 142.0], [68.0, 142.0], [68.1, 143.0], [68.2, 143.0], [68.3, 143.0], [68.4, 143.0], [68.5, 143.0], [68.6, 143.0], [68.7, 143.0], [68.8, 144.0], [68.9, 144.0], [69.0, 144.0], [69.1, 144.0], [69.2, 144.0], [69.3, 144.0], [69.4, 144.0], [69.5, 144.0], [69.6, 144.0], [69.7, 145.0], [69.8, 145.0], [69.9, 145.0], [70.0, 145.0], [70.1, 145.0], [70.2, 145.0], [70.3, 146.0], [70.4, 146.0], [70.5, 146.0], [70.6, 146.0], [70.7, 146.0], [70.8, 146.0], [70.9, 146.0], [71.0, 147.0], [71.1, 147.0], [71.2, 147.0], [71.3, 147.0], [71.4, 147.0], [71.5, 147.0], [71.6, 148.0], [71.7, 148.0], [71.8, 148.0], [71.9, 148.0], [72.0, 148.0], [72.1, 148.0], [72.2, 148.0], [72.3, 149.0], [72.4, 149.0], [72.5, 149.0], [72.6, 149.0], [72.7, 150.0], [72.8, 150.0], [72.9, 150.0], [73.0, 150.0], [73.1, 150.0], [73.2, 151.0], [73.3, 151.0], [73.4, 151.0], [73.5, 151.0], [73.6, 151.0], [73.7, 152.0], [73.8, 152.0], [73.9, 152.0], [74.0, 152.0], [74.1, 152.0], [74.2, 153.0], [74.3, 153.0], [74.4, 153.0], [74.5, 153.0], [74.6, 153.0], [74.7, 153.0], [74.8, 154.0], [74.9, 154.0], [75.0, 154.0], [75.1, 154.0], [75.2, 155.0], [75.3, 155.0], [75.4, 155.0], [75.5, 155.0], [75.6, 155.0], [75.7, 155.0], [75.8, 156.0], [75.9, 156.0], [76.0, 156.0], [76.1, 156.0], [76.2, 156.0], [76.3, 157.0], [76.4, 157.0], [76.5, 157.0], [76.6, 157.0], [76.7, 158.0], [76.8, 158.0], [76.9, 158.0], [77.0, 158.0], [77.1, 159.0], [77.2, 159.0], [77.3, 159.0], [77.4, 159.0], [77.5, 160.0], [77.6, 160.0], [77.7, 160.0], [77.8, 160.0], [77.9, 161.0], [78.0, 161.0], [78.1, 161.0], [78.2, 161.0], [78.3, 162.0], [78.4, 162.0], [78.5, 162.0], [78.6, 162.0], [78.7, 163.0], [78.8, 163.0], [78.9, 163.0], [79.0, 164.0], [79.1, 164.0], [79.2, 164.0], [79.3, 164.0], [79.4, 164.0], [79.5, 165.0], [79.6, 165.0], [79.7, 165.0], [79.8, 165.0], [79.9, 166.0], [80.0, 166.0], [80.1, 166.0], [80.2, 166.0], [80.3, 167.0], [80.4, 167.0], [80.5, 167.0], [80.6, 168.0], [80.7, 168.0], [80.8, 168.0], [80.9, 168.0], [81.0, 169.0], [81.1, 169.0], [81.2, 169.0], [81.3, 170.0], [81.4, 170.0], [81.5, 170.0], [81.6, 171.0], [81.7, 171.0], [81.8, 171.0], [81.9, 171.0], [82.0, 172.0], [82.1, 172.0], [82.2, 172.0], [82.3, 173.0], [82.4, 173.0], [82.5, 173.0], [82.6, 173.0], [82.7, 174.0], [82.8, 174.0], [82.9, 174.0], [83.0, 175.0], [83.1, 175.0], [83.2, 176.0], [83.3, 176.0], [83.4, 176.0], [83.5, 177.0], [83.6, 178.0], [83.7, 178.0], [83.8, 179.0], [83.9, 179.0], [84.0, 179.0], [84.1, 180.0], [84.2, 180.0], [84.3, 181.0], [84.4, 182.0], [84.5, 182.0], [84.6, 182.0], [84.7, 183.0], [84.8, 183.0], [84.9, 184.0], [85.0, 184.0], [85.1, 185.0], [85.2, 185.0], [85.3, 186.0], [85.4, 186.0], [85.5, 187.0], [85.6, 188.0], [85.7, 188.0], [85.8, 189.0], [85.9, 189.0], [86.0, 190.0], [86.1, 191.0], [86.2, 192.0], [86.3, 192.0], [86.4, 193.0], [86.5, 194.0], [86.6, 194.0], [86.7, 195.0], [86.8, 196.0], [86.9, 196.0], [87.0, 197.0], [87.1, 197.0], [87.2, 198.0], [87.3, 199.0], [87.4, 200.0], [87.5, 201.0], [87.6, 201.0], [87.7, 202.0], [87.8, 203.0], [87.9, 203.0], [88.0, 204.0], [88.1, 205.0], [88.2, 205.0], [88.3, 206.0], [88.4, 206.0], [88.5, 207.0], [88.6, 208.0], [88.7, 208.0], [88.8, 209.0], [88.9, 210.0], [89.0, 211.0], [89.1, 211.0], [89.2, 212.0], [89.3, 213.0], [89.4, 214.0], [89.5, 214.0], [89.6, 215.0], [89.7, 216.0], [89.8, 217.0], [89.9, 218.0], [90.0, 221.0], [90.1, 222.0], [90.2, 223.0], [90.3, 224.0], [90.4, 225.0], [90.5, 228.0], [90.6, 229.0], [90.7, 232.0], [90.8, 233.0], [90.9, 234.0], [91.0, 236.0], [91.1, 238.0], [91.2, 240.0], [91.3, 241.0], [91.4, 243.0], [91.5, 246.0], [91.6, 249.0], [91.7, 250.0], [91.8, 253.0], [91.9, 255.0], [92.0, 259.0], [92.1, 262.0], [92.2, 266.0], [92.3, 272.0], [92.4, 278.0], [92.5, 282.0], [92.6, 287.0], [92.7, 289.0], [92.8, 293.0], [92.9, 301.0], [93.0, 306.0], [93.1, 309.0], [93.2, 321.0], [93.3, 330.0], [93.4, 336.0], [93.5, 350.0], [93.6, 364.0], [93.7, 471.0], [93.8, 523.0], [93.9, 528.0], [94.0, 535.0], [94.1, 542.0], [94.2, 546.0], [94.3, 550.0], [94.4, 554.0], [94.5, 562.0], [94.6, 567.0], [94.7, 572.0], [94.8, 579.0], [94.9, 588.0], [95.0, 601.0], [95.1, 610.0], [95.2, 623.0], [95.3, 670.0], [95.4, 688.0], [95.5, 698.0], [95.6, 706.0], [95.7, 737.0], [95.8, 758.0], [95.9, 781.0], [96.0, 799.0], [96.1, 847.0], [96.2, 886.0], [96.3, 928.0], [96.4, 1070.0], [96.5, 1105.0], [96.6, 1123.0], [96.7, 1138.0], [96.8, 1144.0], [96.9, 1158.0], [97.0, 1175.0], [97.1, 1219.0], [97.2, 1242.0], [97.3, 1254.0], [97.4, 1277.0], [97.5, 1293.0], [97.6, 1307.0], [97.7, 1325.0], [97.8, 1354.0], [97.9, 1381.0], [98.0, 1405.0], [98.1, 1434.0], [98.2, 1457.0], [98.3, 1499.0], [98.4, 1641.0], [98.5, 1680.0], [98.6, 1692.0], [98.7, 1727.0], [98.8, 1832.0], [98.9, 2001.0], [99.0, 2132.0], [99.1, 2225.0], [99.2, 2270.0], [99.3, 2378.0], [99.4, 2446.0], [99.5, 2482.0], [99.6, 2497.0], [99.7, 2566.0], [99.8, 2679.0], [99.9, 2704.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4544.0, "series": [{"data": [[0.0, 1029.0], [600.0, 35.0], [700.0, 30.0], [800.0, 13.0], [900.0, 9.0], [1000.0, 6.0], [1100.0, 40.0], [1200.0, 32.0], [1300.0, 26.0], [1400.0, 21.0], [1500.0, 3.0], [100.0, 4544.0], [1600.0, 17.0], [1700.0, 9.0], [1800.0, 6.0], [1900.0, 2.0], [2000.0, 7.0], [2100.0, 5.0], [2300.0, 7.0], [2200.0, 9.0], [2400.0, 18.0], [2500.0, 10.0], [2600.0, 8.0], [2700.0, 3.0], [2800.0, 3.0], [2900.0, 1.0], [200.0, 350.0], [300.0, 47.0], [400.0, 9.0], [500.0, 78.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 107.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5778.0, "series": [{"data": [[0.0, 5778.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 291.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 107.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 201.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.32142857142857, "minX": 1.71896172E12, "maxY": 15.0, "series": [{"data": [[1.71896184E12, 15.0], [1.71896202E12, 15.0], [1.71896232E12, 14.7953216374269], [1.71896172E12, 11.32142857142857], [1.7189619E12, 15.0], [1.7189622E12, 15.0], [1.71896208E12, 15.0], [1.71896226E12, 15.0], [1.71896178E12, 15.0], [1.71896196E12, 15.0], [1.71896214E12, 15.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896232E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135.57142857142858, "minX": 1.0, "maxY": 1372.0, "series": [{"data": [[8.0, 140.0], [2.0, 1372.0], [9.0, 403.33333333333337], [10.0, 169.25], [11.0, 463.5], [3.0, 850.0], [12.0, 164.14285714285714], [13.0, 175.66666666666666], [14.0, 135.57142857142858], [15.0, 198.18335706375566], [4.0, 932.0], [1.0, 1298.0], [5.0, 645.3333333333333], [6.0, 656.0], [7.0, 449.4]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[14.951230986357237, 199.8670221107105]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 170.0, "minX": 1.71896172E12, "maxY": 90153.56666666667, "series": [{"data": [[1.71896184E12, 84905.08333333333], [1.71896202E12, 86136.45], [1.71896232E12, 67175.48333333334], [1.71896172E12, 7628.016666666666], [1.7189619E12, 90153.56666666667], [1.7189622E12, 84720.9], [1.71896208E12, 79040.83333333333], [1.71896226E12, 86035.98333333334], [1.71896178E12, 83060.26666666666], [1.71896196E12, 87857.6], [1.71896214E12, 80993.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71896184E12, 1858.15], [1.71896202E12, 1881.3833333333334], [1.71896232E12, 1523.9666666666667], [1.71896172E12, 170.0], [1.7189619E12, 2012.15], [1.7189622E12, 1878.4], [1.71896208E12, 1850.6166666666666], [1.71896226E12, 1925.9333333333334], [1.71896178E12, 1859.1333333333334], [1.71896196E12, 1910.6166666666666], [1.71896214E12, 1896.7666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896232E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 160.0714285714286, "minX": 1.71896172E12, "maxY": 254.07602339181273, "series": [{"data": [[1.71896184E12, 178.34150076569688], [1.71896202E12, 186.942901234568], [1.71896232E12, 254.07602339181273], [1.71896172E12, 160.0714285714286], [1.7189619E12, 165.19637462235644], [1.7189622E12, 216.26456692913376], [1.71896208E12, 241.38080000000002], [1.71896226E12, 197.73953488372092], [1.71896178E12, 173.99695585996935], [1.71896196E12, 167.43161094224902], [1.71896214E12, 236.91519999999988]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896232E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 157.5535714285714, "minX": 1.71896172E12, "maxY": 250.617933723197, "series": [{"data": [[1.71896184E12, 175.36294027565097], [1.71896202E12, 183.25925925925927], [1.71896232E12, 250.617933723197], [1.71896172E12, 157.5535714285714], [1.7189619E12, 162.2719033232629], [1.7189622E12, 213.2755905511811], [1.71896208E12, 238.92959999999985], [1.71896226E12, 195.14263565891486], [1.71896178E12, 170.70928462709293], [1.71896196E12, 164.37082066869306], [1.71896214E12, 234.30879999999993]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896232E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7711999999999999, "minX": 1.71896172E12, "maxY": 9.517857142857146, "series": [{"data": [[1.71896184E12, 0.7947932618683001], [1.71896202E12, 0.8179012345679016], [1.71896232E12, 0.8830409356725144], [1.71896172E12, 9.517857142857146], [1.7189619E12, 0.8202416918429001], [1.7189622E12, 0.8944881889763788], [1.71896208E12, 0.7711999999999999], [1.71896226E12, 0.8155038759689928], [1.71896178E12, 0.7838660578386615], [1.71896196E12, 0.7796352583586632], [1.71896214E12, 0.7920000000000006]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896232E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 74.0, "minX": 1.71896172E12, "maxY": 2951.0, "series": [{"data": [[1.71896184E12, 2080.0], [1.71896202E12, 2492.0], [1.71896232E12, 1769.0], [1.71896172E12, 473.0], [1.7189619E12, 1170.0], [1.7189622E12, 2563.0], [1.71896208E12, 2951.0], [1.71896226E12, 2454.0], [1.71896178E12, 1976.0], [1.71896196E12, 1835.0], [1.71896214E12, 2859.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71896184E12, 75.0], [1.71896202E12, 76.0], [1.71896232E12, 79.0], [1.71896172E12, 88.0], [1.7189619E12, 74.0], [1.7189622E12, 75.0], [1.71896208E12, 76.0], [1.71896226E12, 75.0], [1.71896178E12, 77.0], [1.71896196E12, 75.0], [1.71896214E12, 76.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71896184E12, 221.5999999999999], [1.71896202E12, 253.20000000000005], [1.71896232E12, 775.7999999999998], [1.71896172E12, 226.9], [1.7189619E12, 202.0], [1.7189622E12, 202.69999999999993], [1.71896208E12, 304.09999999999957], [1.71896226E12, 194.0], [1.71896178E12, 213.70000000000005], [1.71896196E12, 195.20000000000005], [1.71896214E12, 234.19999999999993]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71896184E12, 1383.7999999999984], [1.71896202E12, 2295.9699999999816], [1.71896232E12, 1692.8799999999999], [1.71896172E12, 473.0], [1.7189619E12, 936.5799999999997], [1.7189622E12, 2391.539999999999], [1.71896208E12, 2672.1799999999994], [1.71896226E12, 2086.2799999999984], [1.71896178E12, 1397.1600000000003], [1.71896196E12, 1606.4400000000023], [1.71896214E12, 2697.44]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71896184E12, 123.0], [1.71896202E12, 121.0], [1.71896232E12, 124.0], [1.71896172E12, 151.0], [1.7189619E12, 121.0], [1.7189622E12, 121.0], [1.71896208E12, 129.0], [1.71896226E12, 123.0], [1.71896178E12, 134.0], [1.71896196E12, 123.0], [1.71896214E12, 128.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71896184E12, 593.0499999999994], [1.71896202E12, 580.0999999999999], [1.71896232E12, 1295.55], [1.71896172E12, 250.34999999999997], [1.7189619E12, 556.8999999999999], [1.7189622E12, 362.64999999999816], [1.71896208E12, 941.6499999999797], [1.71896226E12, 292.39999999999816], [1.71896178E12, 525.7], [1.71896196E12, 568.3499999999992], [1.71896214E12, 695.1999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896232E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1219.0, "series": [{"data": [[8.0, 127.0], [2.0, 1219.0], [9.0, 127.0], [10.0, 122.0], [11.0, 125.0], [12.0, 124.0], [3.0, 131.0], [13.0, 121.0], [14.0, 123.0], [15.0, 126.0], [1.0, 275.0], [4.0, 128.0], [5.0, 208.5], [6.0, 134.0], [7.0, 123.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [6.0, 0.0], [13.0, 0.0], [14.0, 0.0], [7.0, 0.0], [15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1218.0, "series": [{"data": [[8.0, 125.0], [2.0, 1218.0], [9.0, 124.0], [10.0, 119.0], [11.0, 122.0], [12.0, 122.0], [3.0, 127.5], [13.0, 119.0], [14.0, 119.0], [15.0, 122.0], [1.0, 275.0], [4.0, 127.0], [5.0, 206.5], [6.0, 131.0], [7.0, 120.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [6.0, 0.0], [13.0, 0.0], [14.0, 0.0], [7.0, 0.0], [15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.71896172E12, "maxY": 11.016666666666667, "series": [{"data": [[1.71896184E12, 10.816666666666666], [1.71896202E12, 10.8], [1.71896232E12, 8.5], [1.71896172E12, 1.05], [1.7189619E12, 11.016666666666667], [1.7189622E12, 10.55], [1.71896208E12, 10.416666666666666], [1.71896226E12, 10.783333333333333], [1.71896178E12, 10.916666666666666], [1.71896196E12, 10.966666666666667], [1.71896214E12, 10.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896232E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71896172E12, "maxY": 11.0, "series": [{"data": [[1.71896184E12, 10.166666666666666], [1.71896202E12, 10.3], [1.71896232E12, 8.366666666666667], [1.71896172E12, 0.9333333333333333], [1.7189619E12, 11.0], [1.7189622E12, 10.333333333333334], [1.71896208E12, 10.166666666666666], [1.71896226E12, 10.583333333333334], [1.71896178E12, 10.2], [1.71896196E12, 10.466666666666667], [1.71896214E12, 10.416666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71896184E12, 0.7166666666666667], [1.71896202E12, 0.5], [1.71896232E12, 0.18333333333333332], [1.7189619E12, 0.03333333333333333], [1.7189622E12, 0.25], [1.71896208E12, 0.25], [1.71896226E12, 0.16666666666666666], [1.71896178E12, 0.75], [1.71896196E12, 0.5]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896232E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71896172E12, "maxY": 11.0, "series": [{"data": [[1.71896184E12, 0.7166666666666667], [1.71896202E12, 0.5], [1.71896232E12, 0.18333333333333332], [1.7189619E12, 0.03333333333333333], [1.7189622E12, 0.25], [1.71896208E12, 0.25], [1.71896226E12, 0.16666666666666666], [1.71896178E12, 0.75], [1.71896196E12, 0.5]], "isOverall": false, "label": "TitleBasics by params-failure", "isController": false}, {"data": [[1.71896184E12, 10.166666666666666], [1.71896202E12, 10.3], [1.71896232E12, 8.366666666666667], [1.71896172E12, 0.9333333333333333], [1.7189619E12, 11.0], [1.7189622E12, 10.333333333333334], [1.71896208E12, 10.166666666666666], [1.71896226E12, 10.583333333333334], [1.71896178E12, 10.2], [1.71896196E12, 10.466666666666667], [1.71896214E12, 10.416666666666666]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896232E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71896172E12, "maxY": 11.0, "series": [{"data": [[1.71896184E12, 10.166666666666666], [1.71896202E12, 10.3], [1.71896232E12, 8.366666666666667], [1.71896172E12, 0.9333333333333333], [1.7189619E12, 11.0], [1.7189622E12, 10.333333333333334], [1.71896208E12, 10.166666666666666], [1.71896226E12, 10.583333333333334], [1.71896178E12, 10.2], [1.71896196E12, 10.466666666666667], [1.71896214E12, 10.416666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71896184E12, 0.7166666666666667], [1.71896202E12, 0.5], [1.71896232E12, 0.18333333333333332], [1.7189619E12, 0.03333333333333333], [1.7189622E12, 0.25], [1.71896208E12, 0.25], [1.71896226E12, 0.16666666666666666], [1.71896178E12, 0.75], [1.71896196E12, 0.5]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896232E12, "title": "Total Transactions Per Second"}},
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

