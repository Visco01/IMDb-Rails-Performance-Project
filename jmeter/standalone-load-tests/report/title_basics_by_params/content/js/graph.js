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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 2095.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 86.0], [6.1, 87.0], [6.2, 88.0], [6.3, 89.0], [6.4, 89.0], [6.5, 89.0], [6.6, 90.0], [6.7, 90.0], [6.8, 91.0], [6.9, 91.0], [7.0, 91.0], [7.1, 91.0], [7.2, 91.0], [7.3, 92.0], [7.4, 92.0], [7.5, 92.0], [7.6, 92.0], [7.7, 92.0], [7.8, 92.0], [7.9, 92.0], [8.0, 92.0], [8.1, 93.0], [8.2, 93.0], [8.3, 93.0], [8.4, 93.0], [8.5, 93.0], [8.6, 93.0], [8.7, 93.0], [8.8, 93.0], [8.9, 94.0], [9.0, 94.0], [9.1, 94.0], [9.2, 94.0], [9.3, 94.0], [9.4, 94.0], [9.5, 94.0], [9.6, 94.0], [9.7, 94.0], [9.8, 94.0], [9.9, 94.0], [10.0, 94.0], [10.1, 94.0], [10.2, 95.0], [10.3, 95.0], [10.4, 95.0], [10.5, 95.0], [10.6, 95.0], [10.7, 95.0], [10.8, 95.0], [10.9, 95.0], [11.0, 95.0], [11.1, 95.0], [11.2, 95.0], [11.3, 95.0], [11.4, 96.0], [11.5, 96.0], [11.6, 96.0], [11.7, 96.0], [11.8, 96.0], [11.9, 96.0], [12.0, 96.0], [12.1, 96.0], [12.2, 96.0], [12.3, 96.0], [12.4, 96.0], [12.5, 96.0], [12.6, 97.0], [12.7, 97.0], [12.8, 97.0], [12.9, 97.0], [13.0, 97.0], [13.1, 97.0], [13.2, 97.0], [13.3, 97.0], [13.4, 97.0], [13.5, 97.0], [13.6, 97.0], [13.7, 97.0], [13.8, 97.0], [13.9, 97.0], [14.0, 97.0], [14.1, 97.0], [14.2, 97.0], [14.3, 97.0], [14.4, 97.0], [14.5, 98.0], [14.6, 98.0], [14.7, 98.0], [14.8, 98.0], [14.9, 98.0], [15.0, 98.0], [15.1, 98.0], [15.2, 98.0], [15.3, 98.0], [15.4, 98.0], [15.5, 98.0], [15.6, 98.0], [15.7, 98.0], [15.8, 98.0], [15.9, 98.0], [16.0, 98.0], [16.1, 98.0], [16.2, 98.0], [16.3, 99.0], [16.4, 99.0], [16.5, 99.0], [16.6, 99.0], [16.7, 99.0], [16.8, 99.0], [16.9, 99.0], [17.0, 99.0], [17.1, 99.0], [17.2, 99.0], [17.3, 99.0], [17.4, 99.0], [17.5, 99.0], [17.6, 99.0], [17.7, 99.0], [17.8, 99.0], [17.9, 100.0], [18.0, 100.0], [18.1, 100.0], [18.2, 100.0], [18.3, 100.0], [18.4, 100.0], [18.5, 100.0], [18.6, 100.0], [18.7, 100.0], [18.8, 100.0], [18.9, 100.0], [19.0, 100.0], [19.1, 100.0], [19.2, 100.0], [19.3, 100.0], [19.4, 100.0], [19.5, 101.0], [19.6, 101.0], [19.7, 101.0], [19.8, 101.0], [19.9, 101.0], [20.0, 101.0], [20.1, 101.0], [20.2, 101.0], [20.3, 101.0], [20.4, 101.0], [20.5, 101.0], [20.6, 101.0], [20.7, 101.0], [20.8, 101.0], [20.9, 101.0], [21.0, 101.0], [21.1, 101.0], [21.2, 101.0], [21.3, 101.0], [21.4, 101.0], [21.5, 102.0], [21.6, 102.0], [21.7, 102.0], [21.8, 102.0], [21.9, 102.0], [22.0, 102.0], [22.1, 102.0], [22.2, 102.0], [22.3, 102.0], [22.4, 102.0], [22.5, 102.0], [22.6, 102.0], [22.7, 102.0], [22.8, 103.0], [22.9, 103.0], [23.0, 103.0], [23.1, 103.0], [23.2, 103.0], [23.3, 103.0], [23.4, 103.0], [23.5, 103.0], [23.6, 103.0], [23.7, 103.0], [23.8, 103.0], [23.9, 103.0], [24.0, 103.0], [24.1, 103.0], [24.2, 104.0], [24.3, 104.0], [24.4, 104.0], [24.5, 104.0], [24.6, 104.0], [24.7, 104.0], [24.8, 104.0], [24.9, 104.0], [25.0, 104.0], [25.1, 104.0], [25.2, 104.0], [25.3, 104.0], [25.4, 104.0], [25.5, 104.0], [25.6, 104.0], [25.7, 104.0], [25.8, 104.0], [25.9, 104.0], [26.0, 104.0], [26.1, 104.0], [26.2, 105.0], [26.3, 105.0], [26.4, 105.0], [26.5, 105.0], [26.6, 105.0], [26.7, 105.0], [26.8, 105.0], [26.9, 105.0], [27.0, 105.0], [27.1, 105.0], [27.2, 105.0], [27.3, 105.0], [27.4, 105.0], [27.5, 105.0], [27.6, 106.0], [27.7, 106.0], [27.8, 106.0], [27.9, 106.0], [28.0, 106.0], [28.1, 106.0], [28.2, 106.0], [28.3, 106.0], [28.4, 106.0], [28.5, 106.0], [28.6, 106.0], [28.7, 106.0], [28.8, 106.0], [28.9, 107.0], [29.0, 107.0], [29.1, 107.0], [29.2, 107.0], [29.3, 107.0], [29.4, 107.0], [29.5, 107.0], [29.6, 107.0], [29.7, 107.0], [29.8, 107.0], [29.9, 107.0], [30.0, 107.0], [30.1, 107.0], [30.2, 107.0], [30.3, 107.0], [30.4, 107.0], [30.5, 107.0], [30.6, 108.0], [30.7, 108.0], [30.8, 108.0], [30.9, 108.0], [31.0, 108.0], [31.1, 108.0], [31.2, 108.0], [31.3, 108.0], [31.4, 108.0], [31.5, 108.0], [31.6, 108.0], [31.7, 108.0], [31.8, 108.0], [31.9, 108.0], [32.0, 108.0], [32.1, 108.0], [32.2, 109.0], [32.3, 109.0], [32.4, 109.0], [32.5, 109.0], [32.6, 109.0], [32.7, 109.0], [32.8, 109.0], [32.9, 109.0], [33.0, 109.0], [33.1, 109.0], [33.2, 110.0], [33.3, 110.0], [33.4, 110.0], [33.5, 110.0], [33.6, 110.0], [33.7, 110.0], [33.8, 110.0], [33.9, 110.0], [34.0, 110.0], [34.1, 110.0], [34.2, 110.0], [34.3, 111.0], [34.4, 111.0], [34.5, 111.0], [34.6, 111.0], [34.7, 111.0], [34.8, 111.0], [34.9, 111.0], [35.0, 111.0], [35.1, 111.0], [35.2, 111.0], [35.3, 111.0], [35.4, 111.0], [35.5, 111.0], [35.6, 111.0], [35.7, 112.0], [35.8, 112.0], [35.9, 112.0], [36.0, 112.0], [36.1, 112.0], [36.2, 112.0], [36.3, 112.0], [36.4, 112.0], [36.5, 112.0], [36.6, 112.0], [36.7, 112.0], [36.8, 113.0], [36.9, 113.0], [37.0, 113.0], [37.1, 113.0], [37.2, 113.0], [37.3, 113.0], [37.4, 113.0], [37.5, 113.0], [37.6, 113.0], [37.7, 113.0], [37.8, 113.0], [37.9, 113.0], [38.0, 114.0], [38.1, 114.0], [38.2, 114.0], [38.3, 114.0], [38.4, 114.0], [38.5, 114.0], [38.6, 114.0], [38.7, 114.0], [38.8, 114.0], [38.9, 114.0], [39.0, 114.0], [39.1, 115.0], [39.2, 115.0], [39.3, 115.0], [39.4, 115.0], [39.5, 115.0], [39.6, 115.0], [39.7, 115.0], [39.8, 115.0], [39.9, 115.0], [40.0, 115.0], [40.1, 115.0], [40.2, 116.0], [40.3, 116.0], [40.4, 116.0], [40.5, 116.0], [40.6, 116.0], [40.7, 116.0], [40.8, 116.0], [40.9, 116.0], [41.0, 116.0], [41.1, 116.0], [41.2, 116.0], [41.3, 117.0], [41.4, 117.0], [41.5, 117.0], [41.6, 117.0], [41.7, 117.0], [41.8, 117.0], [41.9, 117.0], [42.0, 117.0], [42.1, 117.0], [42.2, 117.0], [42.3, 118.0], [42.4, 118.0], [42.5, 118.0], [42.6, 118.0], [42.7, 118.0], [42.8, 118.0], [42.9, 118.0], [43.0, 118.0], [43.1, 119.0], [43.2, 119.0], [43.3, 119.0], [43.4, 119.0], [43.5, 119.0], [43.6, 119.0], [43.7, 119.0], [43.8, 119.0], [43.9, 119.0], [44.0, 119.0], [44.1, 119.0], [44.2, 119.0], [44.3, 120.0], [44.4, 120.0], [44.5, 120.0], [44.6, 120.0], [44.7, 120.0], [44.8, 120.0], [44.9, 120.0], [45.0, 120.0], [45.1, 120.0], [45.2, 120.0], [45.3, 120.0], [45.4, 120.0], [45.5, 120.0], [45.6, 120.0], [45.7, 120.0], [45.8, 121.0], [45.9, 121.0], [46.0, 121.0], [46.1, 121.0], [46.2, 121.0], [46.3, 121.0], [46.4, 121.0], [46.5, 121.0], [46.6, 121.0], [46.7, 121.0], [46.8, 121.0], [46.9, 121.0], [47.0, 121.0], [47.1, 122.0], [47.2, 122.0], [47.3, 122.0], [47.4, 122.0], [47.5, 122.0], [47.6, 122.0], [47.7, 122.0], [47.8, 122.0], [47.9, 123.0], [48.0, 123.0], [48.1, 123.0], [48.2, 123.0], [48.3, 123.0], [48.4, 123.0], [48.5, 123.0], [48.6, 124.0], [48.7, 124.0], [48.8, 124.0], [48.9, 124.0], [49.0, 124.0], [49.1, 124.0], [49.2, 124.0], [49.3, 124.0], [49.4, 124.0], [49.5, 124.0], [49.6, 125.0], [49.7, 125.0], [49.8, 125.0], [49.9, 125.0], [50.0, 125.0], [50.1, 125.0], [50.2, 125.0], [50.3, 125.0], [50.4, 125.0], [50.5, 125.0], [50.6, 125.0], [50.7, 125.0], [50.8, 125.0], [50.9, 125.0], [51.0, 126.0], [51.1, 126.0], [51.2, 126.0], [51.3, 126.0], [51.4, 126.0], [51.5, 126.0], [51.6, 126.0], [51.7, 126.0], [51.8, 126.0], [51.9, 126.0], [52.0, 127.0], [52.1, 127.0], [52.2, 127.0], [52.3, 127.0], [52.4, 127.0], [52.5, 127.0], [52.6, 127.0], [52.7, 127.0], [52.8, 127.0], [52.9, 127.0], [53.0, 127.0], [53.1, 128.0], [53.2, 128.0], [53.3, 128.0], [53.4, 128.0], [53.5, 128.0], [53.6, 128.0], [53.7, 128.0], [53.8, 128.0], [53.9, 128.0], [54.0, 129.0], [54.1, 129.0], [54.2, 129.0], [54.3, 129.0], [54.4, 129.0], [54.5, 129.0], [54.6, 129.0], [54.7, 129.0], [54.8, 129.0], [54.9, 129.0], [55.0, 129.0], [55.1, 129.0], [55.2, 130.0], [55.3, 130.0], [55.4, 130.0], [55.5, 130.0], [55.6, 130.0], [55.7, 130.0], [55.8, 130.0], [55.9, 130.0], [56.0, 130.0], [56.1, 130.0], [56.2, 131.0], [56.3, 131.0], [56.4, 131.0], [56.5, 131.0], [56.6, 131.0], [56.7, 131.0], [56.8, 131.0], [56.9, 131.0], [57.0, 131.0], [57.1, 132.0], [57.2, 132.0], [57.3, 132.0], [57.4, 132.0], [57.5, 132.0], [57.6, 132.0], [57.7, 132.0], [57.8, 132.0], [57.9, 132.0], [58.0, 133.0], [58.1, 133.0], [58.2, 133.0], [58.3, 133.0], [58.4, 133.0], [58.5, 133.0], [58.6, 133.0], [58.7, 133.0], [58.8, 133.0], [58.9, 134.0], [59.0, 134.0], [59.1, 134.0], [59.2, 134.0], [59.3, 134.0], [59.4, 134.0], [59.5, 134.0], [59.6, 134.0], [59.7, 135.0], [59.8, 135.0], [59.9, 135.0], [60.0, 135.0], [60.1, 135.0], [60.2, 135.0], [60.3, 135.0], [60.4, 135.0], [60.5, 135.0], [60.6, 136.0], [60.7, 136.0], [60.8, 136.0], [60.9, 136.0], [61.0, 136.0], [61.1, 136.0], [61.2, 136.0], [61.3, 136.0], [61.4, 137.0], [61.5, 137.0], [61.6, 137.0], [61.7, 137.0], [61.8, 137.0], [61.9, 137.0], [62.0, 137.0], [62.1, 138.0], [62.2, 138.0], [62.3, 138.0], [62.4, 138.0], [62.5, 138.0], [62.6, 138.0], [62.7, 138.0], [62.8, 139.0], [62.9, 139.0], [63.0, 139.0], [63.1, 139.0], [63.2, 139.0], [63.3, 139.0], [63.4, 139.0], [63.5, 139.0], [63.6, 139.0], [63.7, 140.0], [63.8, 140.0], [63.9, 140.0], [64.0, 140.0], [64.1, 140.0], [64.2, 140.0], [64.3, 140.0], [64.4, 140.0], [64.5, 141.0], [64.6, 141.0], [64.7, 141.0], [64.8, 141.0], [64.9, 141.0], [65.0, 141.0], [65.1, 141.0], [65.2, 142.0], [65.3, 142.0], [65.4, 142.0], [65.5, 143.0], [65.6, 143.0], [65.7, 143.0], [65.8, 143.0], [65.9, 143.0], [66.0, 143.0], [66.1, 144.0], [66.2, 144.0], [66.3, 144.0], [66.4, 144.0], [66.5, 144.0], [66.6, 145.0], [66.7, 145.0], [66.8, 145.0], [66.9, 145.0], [67.0, 145.0], [67.1, 146.0], [67.2, 146.0], [67.3, 146.0], [67.4, 146.0], [67.5, 146.0], [67.6, 146.0], [67.7, 147.0], [67.8, 147.0], [67.9, 147.0], [68.0, 148.0], [68.1, 148.0], [68.2, 148.0], [68.3, 148.0], [68.4, 148.0], [68.5, 148.0], [68.6, 148.0], [68.7, 149.0], [68.8, 149.0], [68.9, 149.0], [69.0, 149.0], [69.1, 149.0], [69.2, 149.0], [69.3, 149.0], [69.4, 150.0], [69.5, 150.0], [69.6, 150.0], [69.7, 150.0], [69.8, 150.0], [69.9, 151.0], [70.0, 151.0], [70.1, 151.0], [70.2, 151.0], [70.3, 151.0], [70.4, 152.0], [70.5, 152.0], [70.6, 152.0], [70.7, 152.0], [70.8, 152.0], [70.9, 153.0], [71.0, 153.0], [71.1, 153.0], [71.2, 153.0], [71.3, 153.0], [71.4, 153.0], [71.5, 154.0], [71.6, 154.0], [71.7, 154.0], [71.8, 154.0], [71.9, 154.0], [72.0, 155.0], [72.1, 155.0], [72.2, 155.0], [72.3, 155.0], [72.4, 156.0], [72.5, 156.0], [72.6, 156.0], [72.7, 156.0], [72.8, 157.0], [72.9, 157.0], [73.0, 158.0], [73.1, 158.0], [73.2, 158.0], [73.3, 159.0], [73.4, 159.0], [73.5, 159.0], [73.6, 160.0], [73.7, 160.0], [73.8, 160.0], [73.9, 161.0], [74.0, 161.0], [74.1, 161.0], [74.2, 161.0], [74.3, 162.0], [74.4, 162.0], [74.5, 162.0], [74.6, 162.0], [74.7, 162.0], [74.8, 163.0], [74.9, 163.0], [75.0, 163.0], [75.1, 164.0], [75.2, 164.0], [75.3, 165.0], [75.4, 165.0], [75.5, 165.0], [75.6, 166.0], [75.7, 166.0], [75.8, 166.0], [75.9, 166.0], [76.0, 166.0], [76.1, 167.0], [76.2, 167.0], [76.3, 167.0], [76.4, 167.0], [76.5, 168.0], [76.6, 169.0], [76.7, 169.0], [76.8, 169.0], [76.9, 169.0], [77.0, 169.0], [77.1, 169.0], [77.2, 170.0], [77.3, 170.0], [77.4, 171.0], [77.5, 171.0], [77.6, 172.0], [77.7, 172.0], [77.8, 173.0], [77.9, 173.0], [78.0, 173.0], [78.1, 173.0], [78.2, 174.0], [78.3, 175.0], [78.4, 175.0], [78.5, 176.0], [78.6, 177.0], [78.7, 178.0], [78.8, 178.0], [78.9, 178.0], [79.0, 179.0], [79.1, 180.0], [79.2, 181.0], [79.3, 182.0], [79.4, 182.0], [79.5, 182.0], [79.6, 183.0], [79.7, 183.0], [79.8, 184.0], [79.9, 184.0], [80.0, 184.0], [80.1, 185.0], [80.2, 185.0], [80.3, 185.0], [80.4, 186.0], [80.5, 186.0], [80.6, 187.0], [80.7, 188.0], [80.8, 188.0], [80.9, 189.0], [81.0, 189.0], [81.1, 189.0], [81.2, 190.0], [81.3, 190.0], [81.4, 190.0], [81.5, 191.0], [81.6, 191.0], [81.7, 192.0], [81.8, 192.0], [81.9, 193.0], [82.0, 193.0], [82.1, 194.0], [82.2, 194.0], [82.3, 195.0], [82.4, 195.0], [82.5, 195.0], [82.6, 196.0], [82.7, 196.0], [82.8, 196.0], [82.9, 197.0], [83.0, 197.0], [83.1, 197.0], [83.2, 198.0], [83.3, 199.0], [83.4, 199.0], [83.5, 200.0], [83.6, 201.0], [83.7, 201.0], [83.8, 201.0], [83.9, 202.0], [84.0, 202.0], [84.1, 204.0], [84.2, 204.0], [84.3, 204.0], [84.4, 205.0], [84.5, 206.0], [84.6, 207.0], [84.7, 207.0], [84.8, 208.0], [84.9, 208.0], [85.0, 208.0], [85.1, 209.0], [85.2, 210.0], [85.3, 210.0], [85.4, 212.0], [85.5, 212.0], [85.6, 212.0], [85.7, 213.0], [85.8, 214.0], [85.9, 215.0], [86.0, 215.0], [86.1, 216.0], [86.2, 217.0], [86.3, 218.0], [86.4, 218.0], [86.5, 218.0], [86.6, 219.0], [86.7, 219.0], [86.8, 220.0], [86.9, 221.0], [87.0, 221.0], [87.1, 222.0], [87.2, 222.0], [87.3, 225.0], [87.4, 226.0], [87.5, 227.0], [87.6, 227.0], [87.7, 228.0], [87.8, 229.0], [87.9, 230.0], [88.0, 230.0], [88.1, 232.0], [88.2, 233.0], [88.3, 234.0], [88.4, 237.0], [88.5, 237.0], [88.6, 239.0], [88.7, 240.0], [88.8, 241.0], [88.9, 245.0], [89.0, 247.0], [89.1, 251.0], [89.2, 252.0], [89.3, 254.0], [89.4, 254.0], [89.5, 257.0], [89.6, 260.0], [89.7, 261.0], [89.8, 280.0], [89.9, 281.0], [90.0, 290.0], [90.1, 322.0], [90.2, 355.0], [90.3, 361.0], [90.4, 423.0], [90.5, 435.0], [90.6, 443.0], [90.7, 456.0], [90.8, 466.0], [90.9, 489.0], [91.0, 512.0], [91.1, 518.0], [91.2, 525.0], [91.3, 531.0], [91.4, 532.0], [91.5, 534.0], [91.6, 536.0], [91.7, 544.0], [91.8, 547.0], [91.9, 549.0], [92.0, 553.0], [92.1, 555.0], [92.2, 557.0], [92.3, 562.0], [92.4, 564.0], [92.5, 568.0], [92.6, 570.0], [92.7, 574.0], [92.8, 577.0], [92.9, 582.0], [93.0, 584.0], [93.1, 587.0], [93.2, 591.0], [93.3, 596.0], [93.4, 600.0], [93.5, 610.0], [93.6, 615.0], [93.7, 616.0], [93.8, 619.0], [93.9, 619.0], [94.0, 621.0], [94.1, 625.0], [94.2, 630.0], [94.3, 632.0], [94.4, 635.0], [94.5, 636.0], [94.6, 639.0], [94.7, 640.0], [94.8, 643.0], [94.9, 651.0], [95.0, 653.0], [95.1, 666.0], [95.2, 676.0], [95.3, 683.0], [95.4, 695.0], [95.5, 700.0], [95.6, 705.0], [95.7, 741.0], [95.8, 746.0], [95.9, 755.0], [96.0, 774.0], [96.1, 779.0], [96.2, 793.0], [96.3, 805.0], [96.4, 814.0], [96.5, 818.0], [96.6, 826.0], [96.7, 837.0], [96.8, 858.0], [96.9, 865.0], [97.0, 870.0], [97.1, 885.0], [97.2, 894.0], [97.3, 901.0], [97.4, 924.0], [97.5, 947.0], [97.6, 978.0], [97.7, 1011.0], [97.8, 1031.0], [97.9, 1122.0], [98.0, 1160.0], [98.1, 1209.0], [98.2, 1282.0], [98.3, 1363.0], [98.4, 1366.0], [98.5, 1385.0], [98.6, 1403.0], [98.7, 1407.0], [98.8, 1431.0], [98.9, 1447.0], [99.0, 1458.0], [99.1, 1474.0], [99.2, 1477.0], [99.3, 1486.0], [99.4, 1495.0], [99.5, 1534.0], [99.6, 1536.0], [99.7, 1568.0], [99.8, 1632.0], [99.9, 2045.0], [100.0, 2095.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1522.0, "series": [{"data": [[0.0, 414.0], [600.0, 49.0], [700.0, 18.0], [200.0, 155.0], [800.0, 24.0], [900.0, 9.0], [1000.0, 5.0], [1100.0, 4.0], [300.0, 7.0], [1200.0, 4.0], [1300.0, 8.0], [1400.0, 20.0], [1500.0, 7.0], [100.0, 1522.0], [400.0, 14.0], [1600.0, 2.0], [500.0, 55.0], [2000.0, 4.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1973.0, "series": [{"data": [[0.0, 1973.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 196.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 139.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.938562091503286, "minX": 1.71819918E12, "maxY": 20.16279069767442, "series": [{"data": [[1.71820014E12, 19.938562091503286], [1.71819918E12, 20.16279069767442], [1.71820044E12, 20.020460358056248]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 134.6162790697675, "minX": 1.0, "maxY": 754.25, "series": [{"data": [[2.0, 699.1666666666665], [3.0, 233.22222222222223], [4.0, 234.50000000000003], [5.0, 179.8], [6.0, 165.46428571428572], [7.0, 264.2758620689656], [8.0, 320.1739130434783], [9.0, 154.0], [10.0, 145.32142857142856], [11.0, 142.78947368421055], [12.0, 299.8958333333333], [13.0, 280.7619047619047], [14.0, 154.41025641025638], [15.0, 134.6162790697675], [16.0, 145.51086956521732], [1.0, 754.25], [17.0, 147.09090909090907], [18.0, 235.264705882353], [19.0, 134.95959595959596], [20.0, 149.61165048543688], [21.0, 171.01834862385317], [22.0, 224.59090909090915], [23.0, 347.95535714285717], [24.0, 182.5691056910569], [25.0, 146.57894736842118], [26.0, 157.13768115942034], [27.0, 163.21379310344827], [28.0, 278.6279069767441], [29.0, 155.48051948051958], [30.0, 176.26315789473685]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[20.04093063334769, 194.2076691081431]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2184.4666666666667, "minX": 1.71819918E12, "maxY": 98268.15, "series": [{"data": [[1.71820014E12, 95965.81666666667], [1.71819918E12, 97193.93333333333], [1.71820044E12, 98268.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71820014E12, 2184.4666666666667], [1.71819918E12, 2211.7833333333333], [1.71820044E12, 2232.9166666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 189.64066496163662, "minX": 1.71819918E12, "maxY": 199.28366013071883, "series": [{"data": [[1.71820014E12, 199.28366013071883], [1.71819918E12, 193.80490956072362], [1.71820044E12, 189.64066496163662]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 186.9641943734015, "minX": 1.71819918E12, "maxY": 196.76601307189551, "series": [{"data": [[1.71820014E12, 196.76601307189551], [1.71819918E12, 191.37209302325567], [1.71820044E12, 186.9641943734015]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.509803921568631, "minX": 1.71819918E12, "maxY": 4.054263565891472, "series": [{"data": [[1.71820014E12, 3.509803921568631], [1.71819918E12, 4.054263565891472], [1.71820044E12, 3.5601023017902813]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 86.0, "minX": 1.71819918E12, "maxY": 2095.0, "series": [{"data": [[1.71820014E12, 2095.0], [1.71819918E12, 2056.0], [1.71820044E12, 1609.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71820014E12, 88.0], [1.71819918E12, 86.0], [1.71820044E12, 88.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71820014E12, 533.0], [1.71819918E12, 269.50000000000284], [1.71820044E12, 291.19999999999993]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71820014E12, 1428.9999999999995], [1.71819918E12, 1483.3900000000003], [1.71820044E12, 1456.48]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71820014E12, 128.0], [1.71819918E12, 125.0], [1.71820044E12, 129.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71820014E12, 746.0], [1.71819918E12, 702.7499999999998], [1.71820044E12, 633.3999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1535.5, "series": [{"data": [[33.0, 129.0], [2.0, 1535.5], [32.0, 114.0], [34.0, 104.0], [35.0, 120.0], [36.0, 131.5], [37.0, 137.0], [38.0, 115.5], [39.0, 127.5], [40.0, 115.0], [42.0, 120.0], [45.0, 119.0], [44.0, 124.5], [46.0, 119.5], [48.0, 117.0], [3.0, 118.5], [49.0, 127.5], [52.0, 128.0], [53.0, 137.0], [4.0, 139.5], [5.0, 152.0], [6.0, 140.0], [7.0, 137.5], [8.0, 151.5], [9.0, 186.0], [10.0, 138.0], [12.0, 131.0], [13.0, 158.0], [14.0, 123.0], [15.0, 151.5], [1.0, 176.0], [16.0, 120.0], [17.0, 128.0], [18.0, 127.0], [20.0, 121.0], [21.0, 114.0], [22.0, 126.0], [23.0, 149.0], [24.0, 130.0], [25.0, 209.0], [26.0, 126.5], [27.0, 119.0], [28.0, 355.0], [29.0, 155.5], [30.0, 127.0], [31.0, 128.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 0.0], [32.0, 0.0], [34.0, 0.0], [35.0, 0.0], [36.0, 0.0], [37.0, 0.0], [38.0, 0.0], [39.0, 0.0], [40.0, 0.0], [42.0, 0.0], [45.0, 0.0], [44.0, 0.0], [46.0, 0.0], [48.0, 0.0], [49.0, 0.0], [52.0, 0.0], [53.0, 0.0], [5.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [20.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 53.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1535.0, "series": [{"data": [[33.0, 127.0], [2.0, 1535.0], [32.0, 112.0], [34.0, 102.5], [35.0, 118.0], [36.0, 129.5], [37.0, 135.0], [38.0, 112.0], [39.0, 124.5], [40.0, 113.0], [42.0, 118.5], [45.0, 116.0], [44.0, 123.0], [46.0, 116.0], [48.0, 116.0], [3.0, 116.0], [49.0, 123.5], [52.0, 125.0], [53.0, 132.0], [4.0, 136.0], [5.0, 149.0], [6.0, 137.5], [7.0, 134.5], [8.0, 145.0], [9.0, 182.0], [10.0, 133.5], [12.0, 130.0], [13.0, 156.0], [14.0, 119.0], [15.0, 148.5], [1.0, 174.0], [16.0, 118.0], [17.0, 125.5], [18.0, 124.5], [20.0, 118.0], [21.0, 109.5], [22.0, 124.0], [23.0, 146.0], [24.0, 126.5], [25.0, 206.5], [26.0, 123.0], [27.0, 116.5], [28.0, 350.0], [29.0, 149.5], [30.0, 125.0], [31.0, 126.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 0.0], [32.0, 0.0], [34.0, 0.0], [35.0, 0.0], [36.0, 0.0], [37.0, 0.0], [38.0, 0.0], [39.0, 0.0], [40.0, 0.0], [42.0, 0.0], [45.0, 0.0], [44.0, 0.0], [46.0, 0.0], [48.0, 0.0], [49.0, 0.0], [52.0, 0.0], [53.0, 0.0], [5.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [20.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 53.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.75, "minX": 1.71819918E12, "maxY": 13.033333333333333, "series": [{"data": [[1.71820014E12, 12.75], [1.71819918E12, 12.9], [1.71820044E12, 13.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.71819918E12, "maxY": 12.25, "series": [{"data": [[1.71820014E12, 11.983333333333333], [1.71819918E12, 12.133333333333333], [1.71820044E12, 12.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71820014E12, 0.7666666666666667], [1.71819918E12, 0.7666666666666667], [1.71820044E12, 0.7833333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.71819918E12, "maxY": 12.25, "series": [{"data": [[1.71820014E12, 0.7666666666666667], [1.71819918E12, 0.7666666666666667], [1.71820044E12, 0.7833333333333333]], "isOverall": false, "label": "TitleBasics by params-failure", "isController": false}, {"data": [[1.71820014E12, 11.983333333333333], [1.71819918E12, 12.133333333333333], [1.71820044E12, 12.25]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.71819918E12, "maxY": 12.25, "series": [{"data": [[1.71820014E12, 11.983333333333333], [1.71819918E12, 12.133333333333333], [1.71820044E12, 12.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71820014E12, 0.7666666666666667], [1.71819918E12, 0.7666666666666667], [1.71820044E12, 0.7833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Total Transactions Per Second"}},
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

