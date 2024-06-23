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
        data: {"result": {"minY": 38.0, "minX": 0.0, "maxY": 36939.0, "series": [{"data": [[0.0, 38.0], [0.1, 41.0], [0.2, 42.0], [0.3, 42.0], [0.4, 42.0], [0.5, 43.0], [0.6, 43.0], [0.7, 43.0], [0.8, 43.0], [0.9, 43.0], [1.0, 43.0], [1.1, 43.0], [1.2, 43.0], [1.3, 43.0], [1.4, 43.0], [1.5, 44.0], [1.6, 44.0], [1.7, 44.0], [1.8, 44.0], [1.9, 44.0], [2.0, 44.0], [2.1, 44.0], [2.2, 44.0], [2.3, 44.0], [2.4, 44.0], [2.5, 44.0], [2.6, 44.0], [2.7, 44.0], [2.8, 44.0], [2.9, 45.0], [3.0, 45.0], [3.1, 45.0], [3.2, 45.0], [3.3, 45.0], [3.4, 45.0], [3.5, 45.0], [3.6, 45.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 45.0], [4.3, 45.0], [4.4, 45.0], [4.5, 45.0], [4.6, 45.0], [4.7, 46.0], [4.8, 46.0], [4.9, 46.0], [5.0, 46.0], [5.1, 46.0], [5.2, 46.0], [5.3, 46.0], [5.4, 46.0], [5.5, 46.0], [5.6, 46.0], [5.7, 46.0], [5.8, 46.0], [5.9, 46.0], [6.0, 46.0], [6.1, 46.0], [6.2, 46.0], [6.3, 46.0], [6.4, 46.0], [6.5, 46.0], [6.6, 46.0], [6.7, 46.0], [6.8, 46.0], [6.9, 46.0], [7.0, 47.0], [7.1, 47.0], [7.2, 47.0], [7.3, 47.0], [7.4, 47.0], [7.5, 47.0], [7.6, 47.0], [7.7, 47.0], [7.8, 47.0], [7.9, 47.0], [8.0, 47.0], [8.1, 47.0], [8.2, 47.0], [8.3, 47.0], [8.4, 47.0], [8.5, 47.0], [8.6, 47.0], [8.7, 47.0], [8.8, 47.0], [8.9, 47.0], [9.0, 47.0], [9.1, 47.0], [9.2, 47.0], [9.3, 47.0], [9.4, 47.0], [9.5, 47.0], [9.6, 47.0], [9.7, 47.0], [9.8, 48.0], [9.9, 48.0], [10.0, 48.0], [10.1, 48.0], [10.2, 48.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 48.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 48.0], [11.2, 48.0], [11.3, 48.0], [11.4, 48.0], [11.5, 48.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 48.0], [12.0, 48.0], [12.1, 48.0], [12.2, 48.0], [12.3, 48.0], [12.4, 48.0], [12.5, 48.0], [12.6, 48.0], [12.7, 48.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 49.0], [13.2, 49.0], [13.3, 49.0], [13.4, 49.0], [13.5, 49.0], [13.6, 49.0], [13.7, 49.0], [13.8, 49.0], [13.9, 49.0], [14.0, 49.0], [14.1, 49.0], [14.2, 49.0], [14.3, 49.0], [14.4, 49.0], [14.5, 49.0], [14.6, 49.0], [14.7, 49.0], [14.8, 49.0], [14.9, 49.0], [15.0, 49.0], [15.1, 49.0], [15.2, 49.0], [15.3, 49.0], [15.4, 49.0], [15.5, 49.0], [15.6, 50.0], [15.7, 50.0], [15.8, 50.0], [15.9, 50.0], [16.0, 50.0], [16.1, 50.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 50.0], [16.6, 50.0], [16.7, 50.0], [16.8, 50.0], [16.9, 50.0], [17.0, 50.0], [17.1, 50.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 50.0], [17.7, 50.0], [17.8, 50.0], [17.9, 51.0], [18.0, 51.0], [18.1, 51.0], [18.2, 51.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 51.0], [18.7, 51.0], [18.8, 51.0], [18.9, 51.0], [19.0, 51.0], [19.1, 51.0], [19.2, 51.0], [19.3, 51.0], [19.4, 51.0], [19.5, 51.0], [19.6, 51.0], [19.7, 51.0], [19.8, 52.0], [19.9, 52.0], [20.0, 52.0], [20.1, 52.0], [20.2, 52.0], [20.3, 52.0], [20.4, 52.0], [20.5, 52.0], [20.6, 52.0], [20.7, 52.0], [20.8, 52.0], [20.9, 52.0], [21.0, 52.0], [21.1, 52.0], [21.2, 52.0], [21.3, 52.0], [21.4, 52.0], [21.5, 53.0], [21.6, 53.0], [21.7, 53.0], [21.8, 53.0], [21.9, 53.0], [22.0, 53.0], [22.1, 53.0], [22.2, 53.0], [22.3, 53.0], [22.4, 53.0], [22.5, 53.0], [22.6, 53.0], [22.7, 53.0], [22.8, 54.0], [22.9, 54.0], [23.0, 54.0], [23.1, 54.0], [23.2, 54.0], [23.3, 54.0], [23.4, 54.0], [23.5, 54.0], [23.6, 54.0], [23.7, 54.0], [23.8, 54.0], [23.9, 54.0], [24.0, 54.0], [24.1, 54.0], [24.2, 55.0], [24.3, 55.0], [24.4, 55.0], [24.5, 55.0], [24.6, 55.0], [24.7, 55.0], [24.8, 55.0], [24.9, 55.0], [25.0, 55.0], [25.1, 55.0], [25.2, 55.0], [25.3, 56.0], [25.4, 56.0], [25.5, 56.0], [25.6, 56.0], [25.7, 56.0], [25.8, 56.0], [25.9, 56.0], [26.0, 56.0], [26.1, 56.0], [26.2, 56.0], [26.3, 57.0], [26.4, 57.0], [26.5, 57.0], [26.6, 57.0], [26.7, 57.0], [26.8, 57.0], [26.9, 57.0], [27.0, 57.0], [27.1, 57.0], [27.2, 57.0], [27.3, 58.0], [27.4, 58.0], [27.5, 58.0], [27.6, 58.0], [27.7, 58.0], [27.8, 58.0], [27.9, 58.0], [28.0, 58.0], [28.1, 58.0], [28.2, 59.0], [28.3, 59.0], [28.4, 59.0], [28.5, 59.0], [28.6, 59.0], [28.7, 59.0], [28.8, 59.0], [28.9, 59.0], [29.0, 59.0], [29.1, 60.0], [29.2, 60.0], [29.3, 60.0], [29.4, 60.0], [29.5, 60.0], [29.6, 60.0], [29.7, 60.0], [29.8, 60.0], [29.9, 61.0], [30.0, 61.0], [30.1, 61.0], [30.2, 61.0], [30.3, 61.0], [30.4, 61.0], [30.5, 61.0], [30.6, 61.0], [30.7, 62.0], [30.8, 62.0], [30.9, 62.0], [31.0, 62.0], [31.1, 62.0], [31.2, 62.0], [31.3, 62.0], [31.4, 63.0], [31.5, 63.0], [31.6, 63.0], [31.7, 63.0], [31.8, 63.0], [31.9, 63.0], [32.0, 63.0], [32.1, 64.0], [32.2, 64.0], [32.3, 64.0], [32.4, 64.0], [32.5, 64.0], [32.6, 64.0], [32.7, 64.0], [32.8, 64.0], [32.9, 65.0], [33.0, 65.0], [33.1, 65.0], [33.2, 65.0], [33.3, 65.0], [33.4, 65.0], [33.5, 65.0], [33.6, 66.0], [33.7, 66.0], [33.8, 66.0], [33.9, 66.0], [34.0, 66.0], [34.1, 66.0], [34.2, 66.0], [34.3, 67.0], [34.4, 67.0], [34.5, 67.0], [34.6, 67.0], [34.7, 67.0], [34.8, 67.0], [34.9, 68.0], [35.0, 68.0], [35.1, 68.0], [35.2, 68.0], [35.3, 68.0], [35.4, 68.0], [35.5, 68.0], [35.6, 69.0], [35.7, 69.0], [35.8, 69.0], [35.9, 69.0], [36.0, 69.0], [36.1, 69.0], [36.2, 70.0], [36.3, 70.0], [36.4, 70.0], [36.5, 70.0], [36.6, 70.0], [36.7, 70.0], [36.8, 71.0], [36.9, 71.0], [37.0, 71.0], [37.1, 71.0], [37.2, 71.0], [37.3, 72.0], [37.4, 72.0], [37.5, 72.0], [37.6, 72.0], [37.7, 72.0], [37.8, 72.0], [37.9, 73.0], [38.0, 73.0], [38.1, 73.0], [38.2, 73.0], [38.3, 73.0], [38.4, 73.0], [38.5, 74.0], [38.6, 74.0], [38.7, 74.0], [38.8, 74.0], [38.9, 74.0], [39.0, 74.0], [39.1, 75.0], [39.2, 75.0], [39.3, 75.0], [39.4, 75.0], [39.5, 75.0], [39.6, 76.0], [39.7, 76.0], [39.8, 76.0], [39.9, 76.0], [40.0, 76.0], [40.1, 77.0], [40.2, 77.0], [40.3, 77.0], [40.4, 77.0], [40.5, 77.0], [40.6, 77.0], [40.7, 78.0], [40.8, 78.0], [40.9, 78.0], [41.0, 78.0], [41.1, 78.0], [41.2, 78.0], [41.3, 79.0], [41.4, 79.0], [41.5, 79.0], [41.6, 79.0], [41.7, 79.0], [41.8, 79.0], [41.9, 80.0], [42.0, 80.0], [42.1, 80.0], [42.2, 80.0], [42.3, 80.0], [42.4, 80.0], [42.5, 81.0], [42.6, 81.0], [42.7, 81.0], [42.8, 81.0], [42.9, 81.0], [43.0, 81.0], [43.1, 81.0], [43.2, 82.0], [43.3, 82.0], [43.4, 82.0], [43.5, 82.0], [43.6, 82.0], [43.7, 82.0], [43.8, 83.0], [43.9, 83.0], [44.0, 83.0], [44.1, 83.0], [44.2, 83.0], [44.3, 83.0], [44.4, 84.0], [44.5, 84.0], [44.6, 84.0], [44.7, 84.0], [44.8, 84.0], [44.9, 84.0], [45.0, 85.0], [45.1, 85.0], [45.2, 85.0], [45.3, 85.0], [45.4, 85.0], [45.5, 86.0], [45.6, 86.0], [45.7, 86.0], [45.8, 86.0], [45.9, 86.0], [46.0, 87.0], [46.1, 87.0], [46.2, 87.0], [46.3, 87.0], [46.4, 87.0], [46.5, 88.0], [46.6, 88.0], [46.7, 88.0], [46.8, 88.0], [46.9, 88.0], [47.0, 89.0], [47.1, 89.0], [47.2, 89.0], [47.3, 89.0], [47.4, 89.0], [47.5, 90.0], [47.6, 90.0], [47.7, 90.0], [47.8, 90.0], [47.9, 91.0], [48.0, 91.0], [48.1, 91.0], [48.2, 91.0], [48.3, 91.0], [48.4, 92.0], [48.5, 92.0], [48.6, 92.0], [48.7, 92.0], [48.8, 93.0], [48.9, 93.0], [49.0, 93.0], [49.1, 93.0], [49.2, 94.0], [49.3, 94.0], [49.4, 94.0], [49.5, 95.0], [49.6, 95.0], [49.7, 95.0], [49.8, 95.0], [49.9, 96.0], [50.0, 96.0], [50.1, 96.0], [50.2, 97.0], [50.3, 97.0], [50.4, 97.0], [50.5, 97.0], [50.6, 98.0], [50.7, 98.0], [50.8, 98.0], [50.9, 98.0], [51.0, 99.0], [51.1, 99.0], [51.2, 99.0], [51.3, 100.0], [51.4, 100.0], [51.5, 100.0], [51.6, 100.0], [51.7, 101.0], [51.8, 101.0], [51.9, 101.0], [52.0, 102.0], [52.1, 102.0], [52.2, 102.0], [52.3, 102.0], [52.4, 103.0], [52.5, 103.0], [52.6, 104.0], [52.7, 104.0], [52.8, 104.0], [52.9, 104.0], [53.0, 105.0], [53.1, 105.0], [53.2, 105.0], [53.3, 106.0], [53.4, 106.0], [53.5, 106.0], [53.6, 107.0], [53.7, 107.0], [53.8, 107.0], [53.9, 108.0], [54.0, 108.0], [54.1, 108.0], [54.2, 108.0], [54.3, 109.0], [54.4, 109.0], [54.5, 109.0], [54.6, 110.0], [54.7, 110.0], [54.8, 110.0], [54.9, 111.0], [55.0, 111.0], [55.1, 111.0], [55.2, 112.0], [55.3, 112.0], [55.4, 112.0], [55.5, 113.0], [55.6, 113.0], [55.7, 113.0], [55.8, 114.0], [55.9, 114.0], [56.0, 114.0], [56.1, 114.0], [56.2, 115.0], [56.3, 115.0], [56.4, 116.0], [56.5, 116.0], [56.6, 116.0], [56.7, 117.0], [56.8, 117.0], [56.9, 117.0], [57.0, 118.0], [57.1, 118.0], [57.2, 118.0], [57.3, 118.0], [57.4, 119.0], [57.5, 119.0], [57.6, 119.0], [57.7, 120.0], [57.8, 120.0], [57.9, 121.0], [58.0, 121.0], [58.1, 121.0], [58.2, 121.0], [58.3, 122.0], [58.4, 122.0], [58.5, 123.0], [58.6, 123.0], [58.7, 123.0], [58.8, 124.0], [58.9, 124.0], [59.0, 124.0], [59.1, 125.0], [59.2, 125.0], [59.3, 125.0], [59.4, 126.0], [59.5, 126.0], [59.6, 126.0], [59.7, 127.0], [59.8, 127.0], [59.9, 127.0], [60.0, 128.0], [60.1, 128.0], [60.2, 129.0], [60.3, 129.0], [60.4, 129.0], [60.5, 130.0], [60.6, 130.0], [60.7, 130.0], [60.8, 131.0], [60.9, 131.0], [61.0, 132.0], [61.1, 132.0], [61.2, 132.0], [61.3, 133.0], [61.4, 133.0], [61.5, 133.0], [61.6, 134.0], [61.7, 134.0], [61.8, 135.0], [61.9, 135.0], [62.0, 135.0], [62.1, 136.0], [62.2, 136.0], [62.3, 136.0], [62.4, 137.0], [62.5, 137.0], [62.6, 138.0], [62.7, 138.0], [62.8, 138.0], [62.9, 139.0], [63.0, 139.0], [63.1, 140.0], [63.2, 140.0], [63.3, 141.0], [63.4, 141.0], [63.5, 142.0], [63.6, 142.0], [63.7, 142.0], [63.8, 143.0], [63.9, 143.0], [64.0, 144.0], [64.1, 144.0], [64.2, 145.0], [64.3, 145.0], [64.4, 146.0], [64.5, 146.0], [64.6, 146.0], [64.7, 147.0], [64.8, 147.0], [64.9, 148.0], [65.0, 148.0], [65.1, 149.0], [65.2, 150.0], [65.3, 150.0], [65.4, 151.0], [65.5, 151.0], [65.6, 151.0], [65.7, 152.0], [65.8, 152.0], [65.9, 153.0], [66.0, 154.0], [66.1, 154.0], [66.2, 154.0], [66.3, 155.0], [66.4, 156.0], [66.5, 156.0], [66.6, 156.0], [66.7, 157.0], [66.8, 158.0], [66.9, 158.0], [67.0, 159.0], [67.1, 159.0], [67.2, 160.0], [67.3, 160.0], [67.4, 161.0], [67.5, 162.0], [67.6, 162.0], [67.7, 163.0], [67.8, 164.0], [67.9, 164.0], [68.0, 165.0], [68.1, 165.0], [68.2, 166.0], [68.3, 166.0], [68.4, 167.0], [68.5, 167.0], [68.6, 168.0], [68.7, 168.0], [68.8, 169.0], [68.9, 170.0], [69.0, 170.0], [69.1, 171.0], [69.2, 171.0], [69.3, 172.0], [69.4, 172.0], [69.5, 173.0], [69.6, 174.0], [69.7, 174.0], [69.8, 175.0], [69.9, 176.0], [70.0, 176.0], [70.1, 177.0], [70.2, 178.0], [70.3, 178.0], [70.4, 179.0], [70.5, 180.0], [70.6, 181.0], [70.7, 181.0], [70.8, 182.0], [70.9, 182.0], [71.0, 183.0], [71.1, 184.0], [71.2, 185.0], [71.3, 185.0], [71.4, 186.0], [71.5, 187.0], [71.6, 187.0], [71.7, 188.0], [71.8, 189.0], [71.9, 190.0], [72.0, 190.0], [72.1, 191.0], [72.2, 192.0], [72.3, 192.0], [72.4, 193.0], [72.5, 194.0], [72.6, 195.0], [72.7, 196.0], [72.8, 196.0], [72.9, 197.0], [73.0, 198.0], [73.1, 199.0], [73.2, 199.0], [73.3, 200.0], [73.4, 201.0], [73.5, 201.0], [73.6, 202.0], [73.7, 202.0], [73.8, 203.0], [73.9, 204.0], [74.0, 205.0], [74.1, 205.0], [74.2, 206.0], [74.3, 207.0], [74.4, 208.0], [74.5, 208.0], [74.6, 209.0], [74.7, 210.0], [74.8, 211.0], [74.9, 212.0], [75.0, 212.0], [75.1, 213.0], [75.2, 214.0], [75.3, 215.0], [75.4, 216.0], [75.5, 217.0], [75.6, 218.0], [75.7, 219.0], [75.8, 220.0], [75.9, 220.0], [76.0, 221.0], [76.1, 222.0], [76.2, 223.0], [76.3, 224.0], [76.4, 225.0], [76.5, 226.0], [76.6, 227.0], [76.7, 228.0], [76.8, 229.0], [76.9, 230.0], [77.0, 231.0], [77.1, 232.0], [77.2, 233.0], [77.3, 234.0], [77.4, 235.0], [77.5, 236.0], [77.6, 237.0], [77.7, 238.0], [77.8, 239.0], [77.9, 240.0], [78.0, 241.0], [78.1, 242.0], [78.2, 243.0], [78.3, 244.0], [78.4, 245.0], [78.5, 246.0], [78.6, 247.0], [78.7, 248.0], [78.8, 250.0], [78.9, 251.0], [79.0, 252.0], [79.1, 253.0], [79.2, 253.0], [79.3, 255.0], [79.4, 255.0], [79.5, 257.0], [79.6, 257.0], [79.7, 259.0], [79.8, 260.0], [79.9, 261.0], [80.0, 262.0], [80.1, 264.0], [80.2, 265.0], [80.3, 266.0], [80.4, 267.0], [80.5, 268.0], [80.6, 270.0], [80.7, 271.0], [80.8, 273.0], [80.9, 274.0], [81.0, 275.0], [81.1, 277.0], [81.2, 278.0], [81.3, 280.0], [81.4, 281.0], [81.5, 282.0], [81.6, 284.0], [81.7, 285.0], [81.8, 286.0], [81.9, 288.0], [82.0, 289.0], [82.1, 291.0], [82.2, 292.0], [82.3, 294.0], [82.4, 295.0], [82.5, 296.0], [82.6, 298.0], [82.7, 300.0], [82.8, 301.0], [82.9, 302.0], [83.0, 304.0], [83.1, 306.0], [83.2, 307.0], [83.3, 308.0], [83.4, 309.0], [83.5, 311.0], [83.6, 312.0], [83.7, 314.0], [83.8, 315.0], [83.9, 317.0], [84.0, 318.0], [84.1, 319.0], [84.2, 321.0], [84.3, 323.0], [84.4, 324.0], [84.5, 326.0], [84.6, 327.0], [84.7, 329.0], [84.8, 330.0], [84.9, 332.0], [85.0, 334.0], [85.1, 335.0], [85.2, 337.0], [85.3, 339.0], [85.4, 341.0], [85.5, 343.0], [85.6, 345.0], [85.7, 348.0], [85.8, 350.0], [85.9, 352.0], [86.0, 354.0], [86.1, 355.0], [86.2, 357.0], [86.3, 359.0], [86.4, 361.0], [86.5, 364.0], [86.6, 366.0], [86.7, 368.0], [86.8, 370.0], [86.9, 373.0], [87.0, 374.0], [87.1, 376.0], [87.2, 379.0], [87.3, 380.0], [87.4, 383.0], [87.5, 385.0], [87.6, 388.0], [87.7, 391.0], [87.8, 393.0], [87.9, 397.0], [88.0, 400.0], [88.1, 403.0], [88.2, 406.0], [88.3, 409.0], [88.4, 413.0], [88.5, 416.0], [88.6, 418.0], [88.7, 422.0], [88.8, 425.0], [88.9, 428.0], [89.0, 432.0], [89.1, 434.0], [89.2, 438.0], [89.3, 441.0], [89.4, 443.0], [89.5, 446.0], [89.6, 450.0], [89.7, 454.0], [89.8, 458.0], [89.9, 461.0], [90.0, 466.0], [90.1, 469.0], [90.2, 472.0], [90.3, 477.0], [90.4, 481.0], [90.5, 485.0], [90.6, 490.0], [90.7, 494.0], [90.8, 500.0], [90.9, 505.0], [91.0, 509.0], [91.1, 512.0], [91.2, 516.0], [91.3, 521.0], [91.4, 525.0], [91.5, 529.0], [91.6, 534.0], [91.7, 539.0], [91.8, 543.0], [91.9, 548.0], [92.0, 553.0], [92.1, 556.0], [92.2, 563.0], [92.3, 569.0], [92.4, 575.0], [92.5, 581.0], [92.6, 588.0], [92.7, 595.0], [92.8, 601.0], [92.9, 609.0], [93.0, 616.0], [93.1, 625.0], [93.2, 633.0], [93.3, 641.0], [93.4, 650.0], [93.5, 659.0], [93.6, 668.0], [93.7, 678.0], [93.8, 687.0], [93.9, 696.0], [94.0, 705.0], [94.1, 717.0], [94.2, 728.0], [94.3, 743.0], [94.4, 758.0], [94.5, 769.0], [94.6, 780.0], [94.7, 789.0], [94.8, 801.0], [94.9, 820.0], [95.0, 834.0], [95.1, 846.0], [95.2, 862.0], [95.3, 879.0], [95.4, 892.0], [95.5, 910.0], [95.6, 928.0], [95.7, 945.0], [95.8, 973.0], [95.9, 995.0], [96.0, 1015.0], [96.1, 1042.0], [96.2, 1064.0], [96.3, 1093.0], [96.4, 1123.0], [96.5, 1160.0], [96.6, 1190.0], [96.7, 1222.0], [96.8, 1256.0], [96.9, 1284.0], [97.0, 1316.0], [97.1, 1366.0], [97.2, 1410.0], [97.3, 1454.0], [97.4, 1507.0], [97.5, 1567.0], [97.6, 1632.0], [97.7, 1692.0], [97.8, 1811.0], [97.9, 1947.0], [98.0, 2109.0], [98.1, 2276.0], [98.2, 2514.0], [98.3, 2830.0], [98.4, 3211.0], [98.5, 3559.0], [98.6, 4074.0], [98.7, 4577.0], [98.8, 5701.0], [98.9, 6415.0], [99.0, 6800.0], [99.1, 7558.0], [99.2, 12538.0], [99.3, 14832.0], [99.4, 18873.0], [99.5, 27224.0], [99.6, 28669.0], [99.7, 29737.0], [99.8, 33190.0], [99.9, 35269.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 18483.0, "series": [{"data": [[0.0, 18483.0], [100.0, 7942.0], [33300.0, 1.0], [34500.0, 2.0], [32900.0, 2.0], [35300.0, 4.0], [35700.0, 2.0], [34900.0, 1.0], [36500.0, 3.0], [36900.0, 1.0], [200.0, 3408.0], [300.0, 1906.0], [400.0, 1018.0], [500.0, 717.0], [600.0, 423.0], [700.0, 299.0], [800.0, 234.0], [900.0, 181.0], [1000.0, 141.0], [1100.0, 111.0], [1200.0, 111.0], [1300.0, 88.0], [1400.0, 75.0], [1500.0, 57.0], [1600.0, 56.0], [1700.0, 32.0], [1800.0, 28.0], [1900.0, 23.0], [2000.0, 21.0], [2100.0, 21.0], [2200.0, 23.0], [2300.0, 20.0], [2400.0, 8.0], [2500.0, 10.0], [2600.0, 9.0], [2700.0, 12.0], [2800.0, 15.0], [2900.0, 13.0], [3000.0, 5.0], [3100.0, 9.0], [3200.0, 13.0], [3300.0, 10.0], [3400.0, 7.0], [3500.0, 11.0], [3700.0, 10.0], [3600.0, 6.0], [3800.0, 9.0], [3900.0, 4.0], [4000.0, 4.0], [4300.0, 10.0], [4200.0, 8.0], [4100.0, 2.0], [4400.0, 8.0], [4500.0, 12.0], [4600.0, 4.0], [4700.0, 8.0], [4800.0, 7.0], [5100.0, 3.0], [5000.0, 2.0], [4900.0, 1.0], [5200.0, 2.0], [5500.0, 2.0], [5600.0, 2.0], [5400.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [5900.0, 7.0], [6100.0, 1.0], [6000.0, 7.0], [6200.0, 8.0], [6300.0, 8.0], [6600.0, 6.0], [6400.0, 13.0], [6500.0, 10.0], [6700.0, 9.0], [6800.0, 9.0], [6900.0, 7.0], [7000.0, 6.0], [7100.0, 4.0], [7200.0, 5.0], [7300.0, 2.0], [7400.0, 2.0], [7600.0, 2.0], [7500.0, 2.0], [8100.0, 3.0], [9000.0, 3.0], [8800.0, 1.0], [8900.0, 2.0], [9700.0, 1.0], [9800.0, 1.0], [11100.0, 2.0], [11200.0, 1.0], [11400.0, 2.0], [11300.0, 2.0], [11500.0, 1.0], [11600.0, 1.0], [12000.0, 4.0], [12100.0, 1.0], [11900.0, 2.0], [12200.0, 3.0], [12300.0, 2.0], [12400.0, 1.0], [12500.0, 2.0], [12600.0, 3.0], [13000.0, 2.0], [13100.0, 1.0], [12900.0, 2.0], [13200.0, 2.0], [13800.0, 1.0], [13500.0, 3.0], [13600.0, 2.0], [13400.0, 2.0], [13700.0, 1.0], [14200.0, 2.0], [14300.0, 3.0], [14000.0, 3.0], [14500.0, 4.0], [14400.0, 2.0], [14800.0, 1.0], [14600.0, 1.0], [15100.0, 1.0], [15200.0, 1.0], [14900.0, 1.0], [15700.0, 1.0], [15800.0, 1.0], [16600.0, 1.0], [17800.0, 6.0], [17600.0, 4.0], [18200.0, 3.0], [18400.0, 1.0], [18800.0, 5.0], [19000.0, 3.0], [19400.0, 2.0], [19200.0, 1.0], [19800.0, 1.0], [19600.0, 1.0], [20800.0, 2.0], [27200.0, 4.0], [27000.0, 2.0], [27600.0, 2.0], [27400.0, 2.0], [28600.0, 2.0], [28400.0, 6.0], [27800.0, 4.0], [28200.0, 4.0], [29000.0, 1.0], [28800.0, 2.0], [29400.0, 4.0], [29200.0, 4.0], [29600.0, 4.0], [30000.0, 1.0], [30400.0, 1.0], [29800.0, 4.0], [30200.0, 1.0], [31600.0, 3.0], [31400.0, 1.0], [32400.0, 2.0], [32000.0, 1.0], [31800.0, 1.0], [33600.0, 1.0], [34400.0, 4.0], [34800.0, 5.0], [34000.0, 1.0], [32800.0, 1.0], [33200.0, 2.0], [36000.0, 2.0], [36400.0, 3.0], [35200.0, 6.0], [35600.0, 2.0], [36800.0, 2.0], [33500.0, 1.0], [34700.0, 2.0], [33900.0, 1.0], [34300.0, 1.0], [33100.0, 2.0], [36300.0, 4.0], [36700.0, 5.0], [16700.0, 1.0], [17300.0, 2.0], [17500.0, 2.0], [17700.0, 1.0], [17900.0, 1.0], [18300.0, 1.0], [18100.0, 1.0], [18500.0, 2.0], [18700.0, 2.0], [18900.0, 4.0], [19100.0, 2.0], [19300.0, 2.0], [19500.0, 1.0], [19900.0, 1.0], [20900.0, 4.0], [26900.0, 2.0], [27100.0, 4.0], [26700.0, 1.0], [27300.0, 1.0], [28500.0, 5.0], [28300.0, 6.0], [28100.0, 2.0], [28900.0, 2.0], [28700.0, 4.0], [29100.0, 5.0], [29500.0, 6.0], [29300.0, 2.0], [29900.0, 4.0], [30100.0, 1.0], [30300.0, 1.0], [29700.0, 1.0], [31100.0, 2.0], [31500.0, 2.0], [31700.0, 2.0], [31900.0, 3.0], [34600.0, 2.0], [33000.0, 1.0], [34200.0, 2.0], [33800.0, 1.0], [36200.0, 1.0], [35000.0, 4.0], [35400.0, 3.0], [36600.0, 3.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 36900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 940.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 32765.0, "series": [{"data": [[0.0, 32765.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2373.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 940.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 94.80126182965299, "minX": 1.71915522E12, "maxY": 100.0, "series": [{"data": [[1.71915522E12, 96.54265975820363], [1.7191557E12, 100.0], [1.71915552E12, 100.0], [1.71915558E12, 100.0], [1.7191554E12, 100.0], [1.71915546E12, 100.0], [1.71915528E12, 100.0], [1.71915576E12, 100.0], [1.71915534E12, 100.0], [1.71915582E12, 94.80126182965299], [1.71915564E12, 100.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915582E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 81.33333333333333, "minX": 1.0, "maxY": 1700.5, "series": [{"data": [[2.0, 1059.0], [3.0, 980.0], [4.0, 1518.0], [6.0, 1700.5], [7.0, 1658.0], [8.0, 933.0], [10.0, 845.0], [11.0, 1553.0], [12.0, 1015.0], [13.0, 1454.0], [14.0, 1524.0], [15.0, 841.0], [16.0, 448.5], [17.0, 798.5], [18.0, 335.33333333333337], [19.0, 401.0], [20.0, 847.6666666666666], [21.0, 247.0], [22.0, 1098.0], [23.0, 261.0], [24.0, 228.0], [25.0, 443.0], [26.0, 237.66666666666666], [27.0, 242.0], [28.0, 276.5], [29.0, 281.0], [30.0, 241.8], [31.0, 539.0], [32.0, 306.1666666666667], [33.0, 302.5], [34.0, 504.0], [35.0, 357.5], [36.0, 194.0], [37.0, 288.5], [38.0, 1064.5], [39.0, 94.33333333333333], [40.0, 694.75], [41.0, 356.5], [42.0, 181.6], [43.0, 174.6], [44.0, 160.25], [45.0, 171.0], [46.0, 160.4], [47.0, 279.66666666666663], [48.0, 347.0], [49.0, 173.16666666666669], [50.0, 256.75], [51.0, 348.33333333333337], [52.0, 246.6], [53.0, 324.33333333333337], [54.0, 271.0], [55.0, 233.0], [56.0, 214.42857142857144], [57.0, 233.6], [58.0, 267.75], [59.0, 223.33333333333331], [60.0, 242.5], [61.0, 253.25], [62.0, 192.66666666666666], [63.0, 259.6], [64.0, 207.2], [65.0, 81.33333333333333], [66.0, 353.4], [67.0, 183.16666666666669], [68.0, 221.0], [69.0, 277.0], [70.0, 208.55555555555554], [71.0, 199.6], [72.0, 138.71428571428572], [73.0, 218.0], [74.0, 275.0], [75.0, 178.71428571428572], [76.0, 172.2857142857143], [77.0, 209.66666666666666], [78.0, 362.5], [79.0, 207.55555555555554], [80.0, 266.2], [81.0, 186.41666666666669], [82.0, 386.5], [83.0, 234.25], [85.0, 328.875], [86.0, 301.62499999999994], [87.0, 379.16666666666663], [84.0, 253.0], [88.0, 272.75000000000006], [89.0, 231.38461538461542], [90.0, 186.8], [91.0, 194.0], [92.0, 108.66666666666667], [93.0, 122.45454545454547], [94.0, 91.55555555555556], [95.0, 85.33333333333333], [96.0, 537.0], [97.0, 120.66666666666667], [98.0, 95.57142857142857], [99.0, 96.375], [100.0, 450.778646928535], [1.0, 1508.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[99.58553689228887, 448.89289871943816]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2883.5333333333333, "minX": 1.71915522E12, "maxY": 601090.2833333333, "series": [{"data": [[1.71915522E12, 357666.63333333336], [1.7191557E12, 552665.9333333333], [1.71915552E12, 311253.56666666665], [1.71915558E12, 479832.7833333333], [1.7191554E12, 601090.2833333333], [1.71915546E12, 573714.9333333333], [1.71915528E12, 226220.43333333332], [1.71915576E12, 541193.45], [1.71915534E12, 508649.15], [1.71915582E12, 131937.55], [1.71915564E12, 470830.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71915522E12, 8808.333333333334], [1.7191557E12, 12832.85], [1.71915552E12, 7446.083333333333], [1.71915558E12, 11174.45], [1.7191554E12, 13424.483333333334], [1.71915546E12, 12775.95], [1.71915528E12, 5178.516666666666], [1.71915576E12, 12224.15], [1.71915534E12, 11888.75], [1.71915582E12, 2883.5333333333333], [1.71915564E12, 11084.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915582E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 161.52464228934784, "minX": 1.71915522E12, "maxY": 2313.3163145539925, "series": [{"data": [[1.71915522E12, 229.48911917098482], [1.7191557E12, 213.62677388836312], [1.71915552E12, 865.0310584389048], [1.71915558E12, 615.2989100817434], [1.7191554E12, 161.52464228934784], [1.71915546E12, 231.2398761314908], [1.71915528E12, 2313.3163145539925], [1.71915576E12, 290.27558859975215], [1.71915534E12, 343.98178553104117], [1.71915582E12, 216.2860147213461], [1.71915564E12, 523.72567826802]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915582E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 142.28412446059417, "minX": 1.71915522E12, "maxY": 2253.709507042261, "series": [{"data": [[1.71915522E12, 205.32435233160658], [1.7191557E12, 170.3819772942283], [1.71915552E12, 859.0600735594602], [1.71915558E12, 587.9381471389636], [1.7191554E12, 142.28412446059417], [1.71915546E12, 218.02096236303007], [1.71915528E12, 2253.709507042261], [1.71915576E12, 216.58859975216942], [1.71915534E12, 313.5754232939963], [1.71915582E12, 173.7108307045215], [1.71915564E12, 515.3370786516864]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915582E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4025337147527587, "minX": 1.71915522E12, "maxY": 13.796361502347427, "series": [{"data": [[1.71915522E12, 2.606563039723648], [1.7191557E12, 1.7026963103122101], [1.71915552E12, 0.4025337147527587], [1.71915558E12, 2.3201634877384287], [1.7191554E12, 1.3150124914830787], [1.71915546E12, 1.226060028585038], [1.71915528E12, 13.796361502347427], [1.71915576E12, 3.796530359355634], [1.71915534E12, 1.1105695228322228], [1.71915582E12, 6.567823343848584], [1.71915564E12, 2.073992874760219]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915582E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.71915522E12, "maxY": 36939.0, "series": [{"data": [[1.71915522E12, 4326.0], [1.7191557E12, 4110.0], [1.71915552E12, 30437.0], [1.71915558E12, 29935.0], [1.7191554E12, 2973.0], [1.71915546E12, 7271.0], [1.71915528E12, 36939.0], [1.71915576E12, 4100.0], [1.71915534E12, 15841.0], [1.71915582E12, 2183.0], [1.71915564E12, 20845.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71915522E12, 43.0], [1.7191557E12, 40.0], [1.71915552E12, 40.0], [1.71915558E12, 40.0], [1.7191554E12, 39.0], [1.71915546E12, 40.0], [1.71915528E12, 45.0], [1.71915576E12, 38.0], [1.71915534E12, 40.0], [1.71915582E12, 43.0], [1.71915564E12, 40.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71915522E12, 417.0], [1.7191557E12, 436.0999999999999], [1.71915552E12, 289.2000000000003], [1.71915558E12, 681.7000000000003], [1.7191554E12, 355.0], [1.71915546E12, 296.0], [1.71915528E12, 1179.0], [1.71915576E12, 676.2000000000003], [1.71915534E12, 381.0], [1.71915582E12, 538.0000000000003], [1.71915564E12, 301.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71915522E12, 2973.199999999998], [1.7191557E12, 1914.1000000000004], [1.71915552E12, 28895.239999999998], [1.71915558E12, 7253.759999999995], [1.7191554E12, 1449.5600000000004], [1.71915546E12, 4767.2500000000055], [1.71915528E12, 36411.15], [1.71915576E12, 2296.8399999999992], [1.71915534E12, 12538.629999999985], [1.71915582E12, 1512.8000000000002], [1.71915564E12, 17865.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71915522E12, 122.0], [1.7191557E12, 101.0], [1.71915552E12, 64.0], [1.71915558E12, 146.0], [1.7191554E12, 79.0], [1.71915546E12, 77.0], [1.71915528E12, 241.0], [1.71915576E12, 141.0], [1.71915534E12, 86.0], [1.71915582E12, 111.0], [1.71915564E12, 67.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71915522E12, 657.3999999999996], [1.7191557E12, 699.0], [1.71915552E12, 951.1999999999998], [1.71915558E12, 1151.8999999999996], [1.7191554E12, 506.0], [1.71915546E12, 549.0499999999997], [1.71915528E12, 31797.25], [1.71915576E12, 1073.3999999999996], [1.71915534E12, 620.0], [1.71915582E12, 763.9999999999999], [1.71915564E12, 729.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915582E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 28417.0, "series": [{"data": [[2.0, 650.5], [3.0, 121.0], [4.0, 53.5], [5.0, 576.0], [6.0, 1800.0], [8.0, 223.5], [11.0, 49.0], [12.0, 162.0], [13.0, 79.0], [16.0, 288.0], [17.0, 69.0], [18.0, 70.0], [19.0, 55.0], [20.0, 28417.0], [21.0, 212.0], [22.0, 201.0], [24.0, 48.0], [25.0, 77.0], [27.0, 184.0], [28.0, 100.0], [29.0, 55.0], [30.0, 74.0], [31.0, 334.0], [33.0, 313.0], [34.0, 360.0], [35.0, 476.0], [36.0, 264.0], [37.0, 1085.0], [38.0, 203.0], [39.0, 230.0], [40.0, 196.0], [41.0, 243.0], [42.0, 221.5], [43.0, 109.0], [45.0, 296.0], [44.0, 213.0], [46.0, 399.0], [47.0, 143.0], [48.0, 169.0], [49.0, 104.0], [51.0, 265.0], [50.0, 106.5], [53.0, 143.5], [52.0, 191.0], [55.0, 223.0], [54.0, 184.0], [56.0, 273.5], [57.0, 152.0], [58.0, 188.5], [59.0, 255.0], [61.0, 218.0], [60.0, 226.0], [62.0, 177.5], [63.0, 88.0], [66.0, 125.5], [64.0, 77.0], [67.0, 67.0], [65.0, 167.0], [69.0, 124.5], [70.0, 90.0], [68.0, 127.0], [71.0, 85.0], [72.0, 118.0], [74.0, 92.0], [75.0, 89.0], [73.0, 82.0], [77.0, 69.0], [79.0, 69.0], [78.0, 79.5], [76.0, 72.5], [83.0, 76.0], [82.0, 62.0], [80.0, 80.0], [81.0, 94.0], [87.0, 57.0], [86.0, 84.5], [84.0, 70.5], [85.0, 64.0], [90.0, 94.5], [89.0, 79.0], [91.0, 54.0], [88.0, 60.0], [93.0, 51.0], [95.0, 62.5], [92.0, 53.0], [97.0, 68.0], [1.0, 775.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 28417.0, "series": [{"data": [[2.0, 650.0], [3.0, 119.0], [4.0, 53.5], [5.0, 576.0], [6.0, 1513.0], [8.0, 208.0], [11.0, 47.0], [12.0, 160.0], [13.0, 78.0], [16.0, 278.5], [17.0, 67.0], [18.0, 68.0], [19.0, 50.0], [20.0, 28417.0], [21.0, 203.0], [22.0, 192.5], [24.0, 46.0], [25.0, 70.0], [27.0, 181.5], [28.0, 81.5], [29.0, 51.0], [30.0, 65.5], [31.0, 299.5], [33.0, 286.0], [34.0, 350.0], [35.0, 394.5], [36.0, 236.0], [37.0, 906.0], [38.0, 168.5], [39.0, 208.0], [40.0, 173.5], [41.0, 166.0], [42.0, 188.0], [43.0, 106.0], [45.0, 248.0], [44.0, 209.5], [46.0, 371.0], [47.0, 126.0], [48.0, 156.5], [49.0, 100.0], [51.0, 243.0], [50.0, 81.0], [53.0, 140.0], [52.0, 184.0], [55.0, 209.0], [54.0, 176.5], [56.0, 255.5], [57.0, 133.0], [58.0, 167.5], [59.0, 228.0], [61.0, 193.0], [60.0, 198.5], [62.0, 165.0], [63.0, 81.5], [66.0, 117.0], [64.0, 69.0], [67.0, 58.0], [65.0, 153.0], [69.0, 113.0], [70.0, 82.0], [68.0, 116.0], [71.0, 79.0], [72.0, 108.0], [74.0, 84.0], [75.0, 82.5], [73.0, 74.0], [77.0, 65.0], [79.0, 63.0], [78.0, 69.0], [76.0, 66.0], [83.0, 68.0], [82.0, 59.0], [80.0, 70.0], [81.0, 83.0], [87.0, 54.0], [86.0, 73.0], [84.0, 59.0], [85.0, 61.0], [90.0, 81.5], [89.0, 76.0], [91.0, 50.0], [88.0, 53.5], [93.0, 49.0], [95.0, 52.5], [92.0, 49.5], [97.0, 57.0], [1.0, 224.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 15.633333333333333, "minX": 1.71915522E12, "maxY": 73.68333333333334, "series": [{"data": [[1.71915522E12, 48.53333333333333], [1.7191557E12, 70.75], [1.71915552E12, 41.81666666666667], [1.71915558E12, 61.0], [1.7191554E12, 73.68333333333334], [1.71915546E12, 69.73333333333333], [1.71915528E12, 28.633333333333333], [1.71915576E12, 67.15], [1.71915534E12, 64.46666666666667], [1.71915582E12, 15.633333333333333], [1.71915564E12, 59.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915582E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 15.85, "minX": 1.71915522E12, "maxY": 73.38333333333334, "series": [{"data": [[1.71915522E12, 48.25], [1.7191557E12, 70.46666666666667], [1.71915552E12, 40.78333333333333], [1.71915558E12, 61.166666666666664], [1.7191554E12, 73.38333333333334], [1.71915546E12, 69.96666666666667], [1.71915528E12, 28.4], [1.71915576E12, 67.25], [1.71915534E12, 64.96666666666667], [1.71915582E12, 15.85], [1.71915564E12, 60.81666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71915582E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 15.85, "minX": 1.71915522E12, "maxY": 73.38333333333334, "series": [{"data": [[1.71915522E12, 48.25], [1.7191557E12, 70.46666666666667], [1.71915552E12, 40.78333333333333], [1.71915558E12, 61.166666666666664], [1.7191554E12, 73.38333333333334], [1.71915546E12, 69.96666666666667], [1.71915528E12, 28.4], [1.71915576E12, 67.25], [1.71915534E12, 64.96666666666667], [1.71915582E12, 15.85], [1.71915564E12, 60.81666666666667]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915582E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 15.85, "minX": 1.71915522E12, "maxY": 73.38333333333334, "series": [{"data": [[1.71915522E12, 48.25], [1.7191557E12, 70.46666666666667], [1.71915552E12, 40.78333333333333], [1.71915558E12, 61.166666666666664], [1.7191554E12, 73.38333333333334], [1.71915546E12, 69.96666666666667], [1.71915528E12, 28.4], [1.71915576E12, 67.25], [1.71915534E12, 64.96666666666667], [1.71915582E12, 15.85], [1.71915564E12, 60.81666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71915582E12, "title": "Total Transactions Per Second"}},
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

