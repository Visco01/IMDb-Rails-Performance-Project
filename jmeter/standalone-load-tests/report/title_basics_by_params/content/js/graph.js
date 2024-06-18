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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 7210.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 78.0], [3.3, 80.0], [3.4, 81.0], [3.5, 82.0], [3.6, 82.0], [3.7, 83.0], [3.8, 83.0], [3.9, 84.0], [4.0, 84.0], [4.1, 84.0], [4.2, 85.0], [4.3, 85.0], [4.4, 85.0], [4.5, 86.0], [4.6, 86.0], [4.7, 86.0], [4.8, 86.0], [4.9, 86.0], [5.0, 87.0], [5.1, 87.0], [5.2, 87.0], [5.3, 87.0], [5.4, 87.0], [5.5, 88.0], [5.6, 88.0], [5.7, 88.0], [5.8, 88.0], [5.9, 88.0], [6.0, 89.0], [6.1, 89.0], [6.2, 89.0], [6.3, 89.0], [6.4, 89.0], [6.5, 89.0], [6.6, 90.0], [6.7, 90.0], [6.8, 90.0], [6.9, 90.0], [7.0, 90.0], [7.1, 90.0], [7.2, 90.0], [7.3, 91.0], [7.4, 91.0], [7.5, 91.0], [7.6, 91.0], [7.7, 91.0], [7.8, 91.0], [7.9, 92.0], [8.0, 92.0], [8.1, 92.0], [8.2, 92.0], [8.3, 92.0], [8.4, 92.0], [8.5, 93.0], [8.6, 93.0], [8.7, 93.0], [8.8, 93.0], [8.9, 93.0], [9.0, 93.0], [9.1, 94.0], [9.2, 94.0], [9.3, 94.0], [9.4, 94.0], [9.5, 94.0], [9.6, 95.0], [9.7, 95.0], [9.8, 95.0], [9.9, 95.0], [10.0, 95.0], [10.1, 95.0], [10.2, 95.0], [10.3, 96.0], [10.4, 96.0], [10.5, 96.0], [10.6, 96.0], [10.7, 96.0], [10.8, 96.0], [10.9, 96.0], [11.0, 97.0], [11.1, 97.0], [11.2, 97.0], [11.3, 97.0], [11.4, 97.0], [11.5, 97.0], [11.6, 97.0], [11.7, 98.0], [11.8, 98.0], [11.9, 98.0], [12.0, 98.0], [12.1, 98.0], [12.2, 98.0], [12.3, 99.0], [12.4, 99.0], [12.5, 99.0], [12.6, 99.0], [12.7, 99.0], [12.8, 99.0], [12.9, 99.0], [13.0, 100.0], [13.1, 100.0], [13.2, 100.0], [13.3, 100.0], [13.4, 100.0], [13.5, 100.0], [13.6, 100.0], [13.7, 100.0], [13.8, 101.0], [13.9, 101.0], [14.0, 101.0], [14.1, 101.0], [14.2, 101.0], [14.3, 101.0], [14.4, 101.0], [14.5, 102.0], [14.6, 102.0], [14.7, 102.0], [14.8, 102.0], [14.9, 102.0], [15.0, 102.0], [15.1, 102.0], [15.2, 102.0], [15.3, 103.0], [15.4, 103.0], [15.5, 103.0], [15.6, 103.0], [15.7, 103.0], [15.8, 103.0], [15.9, 103.0], [16.0, 103.0], [16.1, 104.0], [16.2, 104.0], [16.3, 104.0], [16.4, 104.0], [16.5, 104.0], [16.6, 104.0], [16.7, 104.0], [16.8, 105.0], [16.9, 105.0], [17.0, 105.0], [17.1, 105.0], [17.2, 105.0], [17.3, 105.0], [17.4, 105.0], [17.5, 106.0], [17.6, 106.0], [17.7, 106.0], [17.8, 106.0], [17.9, 106.0], [18.0, 106.0], [18.1, 106.0], [18.2, 107.0], [18.3, 107.0], [18.4, 107.0], [18.5, 107.0], [18.6, 107.0], [18.7, 107.0], [18.8, 108.0], [18.9, 108.0], [19.0, 108.0], [19.1, 108.0], [19.2, 108.0], [19.3, 108.0], [19.4, 108.0], [19.5, 108.0], [19.6, 109.0], [19.7, 109.0], [19.8, 109.0], [19.9, 109.0], [20.0, 109.0], [20.1, 109.0], [20.2, 109.0], [20.3, 110.0], [20.4, 110.0], [20.5, 110.0], [20.6, 110.0], [20.7, 110.0], [20.8, 110.0], [20.9, 111.0], [21.0, 111.0], [21.1, 111.0], [21.2, 111.0], [21.3, 111.0], [21.4, 111.0], [21.5, 111.0], [21.6, 112.0], [21.7, 112.0], [21.8, 112.0], [21.9, 112.0], [22.0, 112.0], [22.1, 112.0], [22.2, 113.0], [22.3, 113.0], [22.4, 113.0], [22.5, 113.0], [22.6, 113.0], [22.7, 113.0], [22.8, 113.0], [22.9, 113.0], [23.0, 114.0], [23.1, 114.0], [23.2, 114.0], [23.3, 114.0], [23.4, 114.0], [23.5, 114.0], [23.6, 114.0], [23.7, 115.0], [23.8, 115.0], [23.9, 115.0], [24.0, 115.0], [24.1, 115.0], [24.2, 115.0], [24.3, 115.0], [24.4, 116.0], [24.5, 116.0], [24.6, 116.0], [24.7, 116.0], [24.8, 116.0], [24.9, 116.0], [25.0, 116.0], [25.1, 117.0], [25.2, 117.0], [25.3, 117.0], [25.4, 117.0], [25.5, 117.0], [25.6, 117.0], [25.7, 118.0], [25.8, 118.0], [25.9, 118.0], [26.0, 118.0], [26.1, 118.0], [26.2, 118.0], [26.3, 118.0], [26.4, 118.0], [26.5, 119.0], [26.6, 119.0], [26.7, 119.0], [26.8, 119.0], [26.9, 119.0], [27.0, 119.0], [27.1, 119.0], [27.2, 120.0], [27.3, 120.0], [27.4, 120.0], [27.5, 120.0], [27.6, 120.0], [27.7, 120.0], [27.8, 121.0], [27.9, 121.0], [28.0, 121.0], [28.1, 121.0], [28.2, 121.0], [28.3, 121.0], [28.4, 122.0], [28.5, 122.0], [28.6, 122.0], [28.7, 122.0], [28.8, 122.0], [28.9, 122.0], [29.0, 123.0], [29.1, 123.0], [29.2, 123.0], [29.3, 123.0], [29.4, 123.0], [29.5, 123.0], [29.6, 124.0], [29.7, 124.0], [29.8, 124.0], [29.9, 124.0], [30.0, 124.0], [30.1, 124.0], [30.2, 124.0], [30.3, 125.0], [30.4, 125.0], [30.5, 125.0], [30.6, 125.0], [30.7, 125.0], [30.8, 125.0], [30.9, 125.0], [31.0, 126.0], [31.1, 126.0], [31.2, 126.0], [31.3, 126.0], [31.4, 126.0], [31.5, 126.0], [31.6, 126.0], [31.7, 127.0], [31.8, 127.0], [31.9, 127.0], [32.0, 127.0], [32.1, 127.0], [32.2, 127.0], [32.3, 127.0], [32.4, 128.0], [32.5, 128.0], [32.6, 128.0], [32.7, 128.0], [32.8, 128.0], [32.9, 128.0], [33.0, 128.0], [33.1, 129.0], [33.2, 129.0], [33.3, 129.0], [33.4, 129.0], [33.5, 129.0], [33.6, 129.0], [33.7, 129.0], [33.8, 130.0], [33.9, 130.0], [34.0, 130.0], [34.1, 130.0], [34.2, 130.0], [34.3, 130.0], [34.4, 130.0], [34.5, 131.0], [34.6, 131.0], [34.7, 131.0], [34.8, 131.0], [34.9, 131.0], [35.0, 132.0], [35.1, 132.0], [35.2, 132.0], [35.3, 132.0], [35.4, 132.0], [35.5, 132.0], [35.6, 133.0], [35.7, 133.0], [35.8, 133.0], [35.9, 133.0], [36.0, 133.0], [36.1, 133.0], [36.2, 134.0], [36.3, 134.0], [36.4, 134.0], [36.5, 134.0], [36.6, 134.0], [36.7, 134.0], [36.8, 134.0], [36.9, 135.0], [37.0, 135.0], [37.1, 135.0], [37.2, 135.0], [37.3, 135.0], [37.4, 135.0], [37.5, 136.0], [37.6, 136.0], [37.7, 136.0], [37.8, 136.0], [37.9, 136.0], [38.0, 136.0], [38.1, 136.0], [38.2, 137.0], [38.3, 137.0], [38.4, 137.0], [38.5, 137.0], [38.6, 137.0], [38.7, 138.0], [38.8, 138.0], [38.9, 138.0], [39.0, 138.0], [39.1, 138.0], [39.2, 138.0], [39.3, 138.0], [39.4, 139.0], [39.5, 139.0], [39.6, 139.0], [39.7, 139.0], [39.8, 139.0], [39.9, 139.0], [40.0, 140.0], [40.1, 140.0], [40.2, 140.0], [40.3, 140.0], [40.4, 140.0], [40.5, 140.0], [40.6, 141.0], [40.7, 141.0], [40.8, 141.0], [40.9, 141.0], [41.0, 142.0], [41.1, 142.0], [41.2, 142.0], [41.3, 142.0], [41.4, 142.0], [41.5, 142.0], [41.6, 143.0], [41.7, 143.0], [41.8, 143.0], [41.9, 143.0], [42.0, 143.0], [42.1, 143.0], [42.2, 144.0], [42.3, 144.0], [42.4, 144.0], [42.5, 144.0], [42.6, 144.0], [42.7, 145.0], [42.8, 145.0], [42.9, 145.0], [43.0, 145.0], [43.1, 145.0], [43.2, 146.0], [43.3, 146.0], [43.4, 146.0], [43.5, 146.0], [43.6, 146.0], [43.7, 147.0], [43.8, 147.0], [43.9, 147.0], [44.0, 147.0], [44.1, 147.0], [44.2, 147.0], [44.3, 148.0], [44.4, 148.0], [44.5, 148.0], [44.6, 148.0], [44.7, 148.0], [44.8, 149.0], [44.9, 149.0], [45.0, 149.0], [45.1, 149.0], [45.2, 149.0], [45.3, 150.0], [45.4, 150.0], [45.5, 150.0], [45.6, 150.0], [45.7, 150.0], [45.8, 151.0], [45.9, 151.0], [46.0, 151.0], [46.1, 151.0], [46.2, 151.0], [46.3, 152.0], [46.4, 152.0], [46.5, 152.0], [46.6, 152.0], [46.7, 152.0], [46.8, 153.0], [46.9, 153.0], [47.0, 153.0], [47.1, 153.0], [47.2, 154.0], [47.3, 154.0], [47.4, 154.0], [47.5, 154.0], [47.6, 155.0], [47.7, 155.0], [47.8, 155.0], [47.9, 155.0], [48.0, 155.0], [48.1, 156.0], [48.2, 156.0], [48.3, 156.0], [48.4, 156.0], [48.5, 157.0], [48.6, 157.0], [48.7, 157.0], [48.8, 157.0], [48.9, 158.0], [49.0, 158.0], [49.1, 158.0], [49.2, 158.0], [49.3, 158.0], [49.4, 159.0], [49.5, 159.0], [49.6, 159.0], [49.7, 159.0], [49.8, 160.0], [49.9, 160.0], [50.0, 160.0], [50.1, 160.0], [50.2, 161.0], [50.3, 161.0], [50.4, 161.0], [50.5, 161.0], [50.6, 162.0], [50.7, 162.0], [50.8, 162.0], [50.9, 162.0], [51.0, 163.0], [51.1, 163.0], [51.2, 163.0], [51.3, 163.0], [51.4, 164.0], [51.5, 164.0], [51.6, 164.0], [51.7, 164.0], [51.8, 165.0], [51.9, 165.0], [52.0, 165.0], [52.1, 165.0], [52.2, 166.0], [52.3, 166.0], [52.4, 166.0], [52.5, 166.0], [52.6, 167.0], [52.7, 167.0], [52.8, 167.0], [52.9, 168.0], [53.0, 168.0], [53.1, 168.0], [53.2, 169.0], [53.3, 169.0], [53.4, 169.0], [53.5, 169.0], [53.6, 170.0], [53.7, 170.0], [53.8, 170.0], [53.9, 171.0], [54.0, 171.0], [54.1, 171.0], [54.2, 172.0], [54.3, 172.0], [54.4, 172.0], [54.5, 173.0], [54.6, 173.0], [54.7, 173.0], [54.8, 173.0], [54.9, 174.0], [55.0, 174.0], [55.1, 174.0], [55.2, 174.0], [55.3, 175.0], [55.4, 175.0], [55.5, 175.0], [55.6, 176.0], [55.7, 176.0], [55.8, 176.0], [55.9, 176.0], [56.0, 177.0], [56.1, 177.0], [56.2, 177.0], [56.3, 178.0], [56.4, 178.0], [56.5, 178.0], [56.6, 179.0], [56.7, 179.0], [56.8, 179.0], [56.9, 179.0], [57.0, 180.0], [57.1, 180.0], [57.2, 180.0], [57.3, 181.0], [57.4, 181.0], [57.5, 181.0], [57.6, 182.0], [57.7, 182.0], [57.8, 182.0], [57.9, 182.0], [58.0, 183.0], [58.1, 183.0], [58.2, 183.0], [58.3, 184.0], [58.4, 184.0], [58.5, 184.0], [58.6, 184.0], [58.7, 185.0], [58.8, 185.0], [58.9, 186.0], [59.0, 186.0], [59.1, 186.0], [59.2, 187.0], [59.3, 187.0], [59.4, 187.0], [59.5, 188.0], [59.6, 188.0], [59.7, 188.0], [59.8, 188.0], [59.9, 189.0], [60.0, 189.0], [60.1, 189.0], [60.2, 190.0], [60.3, 190.0], [60.4, 190.0], [60.5, 190.0], [60.6, 191.0], [60.7, 191.0], [60.8, 191.0], [60.9, 192.0], [61.0, 192.0], [61.1, 192.0], [61.2, 193.0], [61.3, 193.0], [61.4, 193.0], [61.5, 194.0], [61.6, 194.0], [61.7, 194.0], [61.8, 194.0], [61.9, 195.0], [62.0, 195.0], [62.1, 195.0], [62.2, 196.0], [62.3, 196.0], [62.4, 196.0], [62.5, 197.0], [62.6, 197.0], [62.7, 197.0], [62.8, 197.0], [62.9, 198.0], [63.0, 198.0], [63.1, 198.0], [63.2, 199.0], [63.3, 199.0], [63.4, 200.0], [63.5, 200.0], [63.6, 200.0], [63.7, 201.0], [63.8, 201.0], [63.9, 202.0], [64.0, 202.0], [64.1, 202.0], [64.2, 203.0], [64.3, 203.0], [64.4, 203.0], [64.5, 204.0], [64.6, 204.0], [64.7, 204.0], [64.8, 205.0], [64.9, 205.0], [65.0, 205.0], [65.1, 206.0], [65.2, 206.0], [65.3, 207.0], [65.4, 207.0], [65.5, 207.0], [65.6, 208.0], [65.7, 208.0], [65.8, 209.0], [65.9, 209.0], [66.0, 209.0], [66.1, 210.0], [66.2, 210.0], [66.3, 210.0], [66.4, 211.0], [66.5, 211.0], [66.6, 211.0], [66.7, 212.0], [66.8, 212.0], [66.9, 212.0], [67.0, 212.0], [67.1, 213.0], [67.2, 213.0], [67.3, 214.0], [67.4, 214.0], [67.5, 214.0], [67.6, 215.0], [67.7, 215.0], [67.8, 215.0], [67.9, 216.0], [68.0, 216.0], [68.1, 217.0], [68.2, 217.0], [68.3, 217.0], [68.4, 218.0], [68.5, 218.0], [68.6, 218.0], [68.7, 219.0], [68.8, 219.0], [68.9, 220.0], [69.0, 220.0], [69.1, 221.0], [69.2, 221.0], [69.3, 222.0], [69.4, 222.0], [69.5, 222.0], [69.6, 223.0], [69.7, 223.0], [69.8, 223.0], [69.9, 224.0], [70.0, 224.0], [70.1, 225.0], [70.2, 225.0], [70.3, 225.0], [70.4, 226.0], [70.5, 226.0], [70.6, 227.0], [70.7, 227.0], [70.8, 228.0], [70.9, 228.0], [71.0, 229.0], [71.1, 229.0], [71.2, 230.0], [71.3, 230.0], [71.4, 230.0], [71.5, 231.0], [71.6, 231.0], [71.7, 232.0], [71.8, 232.0], [71.9, 233.0], [72.0, 233.0], [72.1, 233.0], [72.2, 234.0], [72.3, 234.0], [72.4, 235.0], [72.5, 235.0], [72.6, 236.0], [72.7, 236.0], [72.8, 237.0], [72.9, 237.0], [73.0, 238.0], [73.1, 238.0], [73.2, 239.0], [73.3, 239.0], [73.4, 240.0], [73.5, 241.0], [73.6, 241.0], [73.7, 241.0], [73.8, 242.0], [73.9, 243.0], [74.0, 243.0], [74.1, 244.0], [74.2, 244.0], [74.3, 245.0], [74.4, 245.0], [74.5, 246.0], [74.6, 246.0], [74.7, 247.0], [74.8, 247.0], [74.9, 248.0], [75.0, 248.0], [75.1, 249.0], [75.2, 249.0], [75.3, 250.0], [75.4, 250.0], [75.5, 251.0], [75.6, 252.0], [75.7, 252.0], [75.8, 253.0], [75.9, 253.0], [76.0, 254.0], [76.1, 254.0], [76.2, 255.0], [76.3, 255.0], [76.4, 256.0], [76.5, 256.0], [76.6, 257.0], [76.7, 258.0], [76.8, 258.0], [76.9, 259.0], [77.0, 259.0], [77.1, 260.0], [77.2, 260.0], [77.3, 261.0], [77.4, 262.0], [77.5, 262.0], [77.6, 263.0], [77.7, 264.0], [77.8, 264.0], [77.9, 265.0], [78.0, 265.0], [78.1, 266.0], [78.2, 267.0], [78.3, 267.0], [78.4, 268.0], [78.5, 269.0], [78.6, 269.0], [78.7, 270.0], [78.8, 271.0], [78.9, 272.0], [79.0, 272.0], [79.1, 273.0], [79.2, 274.0], [79.3, 274.0], [79.4, 275.0], [79.5, 276.0], [79.6, 276.0], [79.7, 277.0], [79.8, 278.0], [79.9, 278.0], [80.0, 279.0], [80.1, 280.0], [80.2, 281.0], [80.3, 282.0], [80.4, 282.0], [80.5, 283.0], [80.6, 284.0], [80.7, 284.0], [80.8, 285.0], [80.9, 286.0], [81.0, 287.0], [81.1, 287.0], [81.2, 288.0], [81.3, 289.0], [81.4, 290.0], [81.5, 291.0], [81.6, 292.0], [81.7, 292.0], [81.8, 293.0], [81.9, 294.0], [82.0, 295.0], [82.1, 296.0], [82.2, 297.0], [82.3, 297.0], [82.4, 298.0], [82.5, 299.0], [82.6, 300.0], [82.7, 300.0], [82.8, 301.0], [82.9, 303.0], [83.0, 303.0], [83.1, 304.0], [83.2, 305.0], [83.3, 307.0], [83.4, 308.0], [83.5, 309.0], [83.6, 310.0], [83.7, 311.0], [83.8, 312.0], [83.9, 313.0], [84.0, 314.0], [84.1, 315.0], [84.2, 316.0], [84.3, 317.0], [84.4, 319.0], [84.5, 320.0], [84.6, 321.0], [84.7, 322.0], [84.8, 323.0], [84.9, 324.0], [85.0, 326.0], [85.1, 327.0], [85.2, 328.0], [85.3, 330.0], [85.4, 331.0], [85.5, 333.0], [85.6, 334.0], [85.7, 335.0], [85.8, 336.0], [85.9, 338.0], [86.0, 339.0], [86.1, 341.0], [86.2, 342.0], [86.3, 344.0], [86.4, 345.0], [86.5, 347.0], [86.6, 349.0], [86.7, 351.0], [86.8, 352.0], [86.9, 355.0], [87.0, 357.0], [87.1, 359.0], [87.2, 361.0], [87.3, 362.0], [87.4, 363.0], [87.5, 366.0], [87.6, 368.0], [87.7, 371.0], [87.8, 373.0], [87.9, 375.0], [88.0, 378.0], [88.1, 381.0], [88.2, 383.0], [88.3, 386.0], [88.4, 388.0], [88.5, 390.0], [88.6, 394.0], [88.7, 396.0], [88.8, 399.0], [88.9, 402.0], [89.0, 405.0], [89.1, 407.0], [89.2, 410.0], [89.3, 412.0], [89.4, 416.0], [89.5, 419.0], [89.6, 424.0], [89.7, 428.0], [89.8, 431.0], [89.9, 435.0], [90.0, 439.0], [90.1, 441.0], [90.2, 446.0], [90.3, 453.0], [90.4, 458.0], [90.5, 465.0], [90.6, 473.0], [90.7, 481.0], [90.8, 487.0], [90.9, 492.0], [91.0, 499.0], [91.1, 504.0], [91.2, 509.0], [91.3, 519.0], [91.4, 532.0], [91.5, 540.0], [91.6, 548.0], [91.7, 555.0], [91.8, 564.0], [91.9, 570.0], [92.0, 577.0], [92.1, 585.0], [92.2, 594.0], [92.3, 604.0], [92.4, 613.0], [92.5, 621.0], [92.6, 626.0], [92.7, 635.0], [92.8, 644.0], [92.9, 651.0], [93.0, 662.0], [93.1, 679.0], [93.2, 694.0], [93.3, 710.0], [93.4, 732.0], [93.5, 750.0], [93.6, 774.0], [93.7, 795.0], [93.8, 821.0], [93.9, 856.0], [94.0, 879.0], [94.1, 904.0], [94.2, 929.0], [94.3, 981.0], [94.4, 1031.0], [94.5, 1074.0], [94.6, 1161.0], [94.7, 1217.0], [94.8, 1252.0], [94.9, 1297.0], [95.0, 1329.0], [95.1, 1376.0], [95.2, 1414.0], [95.3, 1455.0], [95.4, 1496.0], [95.5, 1558.0], [95.6, 1601.0], [95.7, 1664.0], [95.8, 1705.0], [95.9, 1747.0], [96.0, 1798.0], [96.1, 1836.0], [96.2, 1885.0], [96.3, 1953.0], [96.4, 1997.0], [96.5, 2051.0], [96.6, 2104.0], [96.7, 2145.0], [96.8, 2209.0], [96.9, 2259.0], [97.0, 2326.0], [97.1, 2412.0], [97.2, 2464.0], [97.3, 2538.0], [97.4, 2600.0], [97.5, 2656.0], [97.6, 2724.0], [97.7, 2791.0], [97.8, 2862.0], [97.9, 2961.0], [98.0, 3048.0], [98.1, 3151.0], [98.2, 3348.0], [98.3, 3524.0], [98.4, 3785.0], [98.5, 3945.0], [98.6, 4097.0], [98.7, 4297.0], [98.8, 4436.0], [98.9, 4634.0], [99.0, 4794.0], [99.1, 4917.0], [99.2, 5053.0], [99.3, 5163.0], [99.4, 5291.0], [99.5, 5450.0], [99.6, 5582.0], [99.7, 5757.0], [99.8, 5998.0], [99.9, 6300.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 14389.0, "series": [{"data": [[0.0, 3711.0], [600.0, 279.0], [700.0, 138.0], [800.0, 101.0], [900.0, 80.0], [1000.0, 51.0], [1100.0, 31.0], [1200.0, 75.0], [1300.0, 79.0], [1400.0, 63.0], [1500.0, 56.0], [1600.0, 53.0], [1700.0, 64.0], [1800.0, 61.0], [1900.0, 52.0], [2000.0, 54.0], [2100.0, 55.0], [2300.0, 38.0], [2200.0, 50.0], [2400.0, 43.0], [2500.0, 44.0], [2600.0, 50.0], [2700.0, 39.0], [2800.0, 38.0], [2900.0, 28.0], [3000.0, 32.0], [3100.0, 23.0], [3300.0, 23.0], [3200.0, 10.0], [3400.0, 13.0], [3500.0, 10.0], [3700.0, 17.0], [3600.0, 7.0], [3800.0, 13.0], [3900.0, 19.0], [4000.0, 24.0], [4200.0, 15.0], [4100.0, 11.0], [4300.0, 19.0], [4400.0, 14.0], [4500.0, 16.0], [4600.0, 20.0], [4800.0, 24.0], [4700.0, 18.0], [5100.0, 26.0], [5000.0, 26.0], [4900.0, 18.0], [5300.0, 22.0], [5200.0, 20.0], [5400.0, 17.0], [5600.0, 17.0], [5500.0, 18.0], [5800.0, 11.0], [5700.0, 15.0], [6100.0, 11.0], [5900.0, 13.0], [6000.0, 11.0], [6300.0, 8.0], [6200.0, 6.0], [6500.0, 5.0], [6600.0, 6.0], [6400.0, 3.0], [6700.0, 2.0], [6800.0, 1.0], [6900.0, 3.0], [7200.0, 1.0], [100.0, 14389.0], [200.0, 5471.0], [300.0, 1787.0], [400.0, 627.0], [500.0, 356.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 893.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 25095.0, "series": [{"data": [[0.0, 25095.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1250.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1313.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 893.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.8220338983050843, "minX": 1.71864672E12, "maxY": 60.0, "series": [{"data": [[1.71864684E12, 15.14391143911439], [1.71864732E12, 59.04851752021563], [1.71864702E12, 36.54791366906468], [1.71864696E12, 29.39858965748825], [1.71864714E12, 50.87383900928806], [1.71864708E12, 43.71212121212121], [1.71864678E12, 8.248210023866344], [1.71864726E12, 60.0], [1.71864672E12, 2.8220338983050843], [1.7186472E12, 57.87658146139928], [1.7186469E12, 22.253921153030948]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864732E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 149.65979381443293, "minX": 1.0, "maxY": 558.8217146247428, "series": [{"data": [[2.0, 198.38709677419357], [3.0, 222.79545454545456], [4.0, 206.76666666666662], [5.0, 181.64935064935065], [6.0, 192.1318681318681], [7.0, 150.32380952380947], [8.0, 184.15999999999997], [9.0, 153.73381294964028], [10.0, 155.03896103896096], [11.0, 169.6867469879518], [12.0, 172.89729729729729], [13.0, 168.645], [14.0, 169.96698113207555], [15.0, 150.48927038626604], [16.0, 168.28925619834703], [17.0, 155.21705426356587], [18.0, 151.81111111111113], [19.0, 149.65979381443293], [20.0, 158.72000000000003], [21.0, 157.32075471698099], [22.0, 166.8312883435583], [23.0, 162.5307917888562], [24.0, 170.4164305949008], [25.0, 165.53698630136978], [26.0, 169.26719576719577], [27.0, 184.80759493670882], [28.0, 183.58291457286444], [29.0, 194.4842615012105], [30.0, 190.46153846153837], [31.0, 207.40646651270225], [32.0, 202.6280623608017], [33.0, 209.6897321428571], [34.0, 207.1944444444444], [35.0, 212.47268907563037], [36.0, 219.49581589958154], [37.0, 225.43232323232337], [38.0, 257.2381930184805], [39.0, 241.79150579150587], [40.0, 259.9736842105261], [41.0, 282.6015779092701], [42.0, 283.42330097087375], [43.0, 249.1444652908068], [44.0, 308.16666666666674], [45.0, 322.147227533461], [46.0, 311.18726591760276], [47.0, 325.6285714285715], [48.0, 329.7364620938632], [49.0, 341.76599634369296], [50.0, 431.9181636726547], [51.0, 307.1940035273369], [52.0, 438.5565693430655], [53.0, 441.32447817836817], [54.0, 391.5454545454547], [55.0, 468.3634751773048], [56.0, 440.73605947955383], [57.0, 441.75517890772113], [58.0, 473.62659380692145], [59.0, 551.6179775280905], [60.0, 558.8217146247428], [1.0, 375.53846153846143]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[42.79016496795182, 344.55826415886986]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 337.3, "minX": 1.71864672E12, "maxY": 506874.75, "series": [{"data": [[1.71864684E12, 213486.45], [1.71864732E12, 242106.93333333332], [1.71864702E12, 456168.25], [1.71864696E12, 391353.95], [1.71864714E12, 506489.23333333334], [1.71864708E12, 493862.7], [1.71864678E12, 109541.86666666667], [1.71864726E12, 495344.43333333335], [1.71864672E12, 14834.95], [1.7186472E12, 506874.75], [1.7186469E12, 309253.43333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71864684E12, 4728.766666666666], [1.71864732E12, 5497.816666666667], [1.71864702E12, 10244.216666666667], [1.71864696E12, 8766.133333333333], [1.71864714E12, 11414.383333333333], [1.71864708E12, 11092.033333333333], [1.71864678E12, 2431.25], [1.71864726E12, 11174.416666666666], [1.71864672E12, 337.3], [1.7186472E12, 11415.566666666668], [1.7186469E12, 6919.516666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864732E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 146.6813842482099, "minX": 1.71864672E12, "maxY": 622.3719676549858, "series": [{"data": [[1.71864684E12, 147.33394833948327], [1.71864732E12, 622.3719676549858], [1.71864702E12, 230.48690647482002], [1.71864696E12, 188.02249832102117], [1.71864714E12, 380.0286377708985], [1.71864708E12, 292.7078681552362], [1.71864678E12, 146.6813842482099], [1.71864726E12, 549.7293590081792], [1.71864672E12, 174.3983050847458], [1.7186472E12, 491.71056028918184], [1.7186469E12, 159.58880881729533]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864732E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 144.29713603818607, "minX": 1.71864672E12, "maxY": 619.6900269541788, "series": [{"data": [[1.71864684E12, 144.7798277982782], [1.71864732E12, 619.6900269541788], [1.71864702E12, 227.95539568345293], [1.71864696E12, 185.52081934183997], [1.71864714E12, 377.50051599587357], [1.71864708E12, 290.0940988835717], [1.71864678E12, 144.29713603818607], [1.71864726E12, 547.134265365339], [1.71864672E12, 172.34745762711862], [1.7186472E12, 489.1634391944231], [1.7186469E12, 157.08774904620614]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864732E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.37207872078720755, "minX": 1.71864672E12, "maxY": 1.152542372881356, "series": [{"data": [[1.71864684E12, 0.37207872078720755], [1.71864732E12, 0.5450134770889492], [1.71864702E12, 0.4117985611510791], [1.71864696E12, 0.37877770315648074], [1.71864714E12, 0.5041279669762645], [1.71864708E12, 0.4359383306751722], [1.71864678E12, 0.4582338902147966], [1.71864726E12, 0.5816407280400941], [1.71864672E12, 1.152542372881356], [1.7186472E12, 0.5424735347275993], [1.7186469E12, 0.3743111487918613]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864732E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 74.0, "minX": 1.71864672E12, "maxY": 7210.0, "series": [{"data": [[1.71864684E12, 1456.0], [1.71864732E12, 7210.0], [1.71864702E12, 2300.0], [1.71864696E12, 1944.0], [1.71864714E12, 4669.0], [1.71864708E12, 3131.0], [1.71864678E12, 1476.0], [1.71864726E12, 6771.0], [1.71864672E12, 1674.0], [1.7186472E12, 6300.0], [1.7186469E12, 1664.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71864684E12, 75.0], [1.71864732E12, 109.0], [1.71864702E12, 79.0], [1.71864696E12, 77.0], [1.71864714E12, 89.0], [1.71864708E12, 82.0], [1.71864678E12, 74.0], [1.71864726E12, 110.0], [1.71864672E12, 80.0], [1.7186472E12, 108.0], [1.7186469E12, 75.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71864684E12, 187.0], [1.71864732E12, 779.5999999999997], [1.71864702E12, 284.0], [1.71864696E12, 230.4000000000001], [1.71864714E12, 465.0], [1.71864708E12, 371.1000000000008], [1.71864678E12, 182.0], [1.71864726E12, 645.7000000000003], [1.71864672E12, 270.0], [1.7186472E12, 626.0], [1.7186469E12, 201.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71864684E12, 1233.3500000000001], [1.71864732E12, 6346.6799999999985], [1.71864702E12, 2030.35], [1.71864696E12, 1631.5399999999986], [1.71864714E12, 3854.600000000001], [1.71864708E12, 2653.0], [1.71864678E12, 1275.0], [1.71864726E12, 5755.38], [1.71864672E12, 1642.5599999999988], [1.7186472E12, 5042.6], [1.7186469E12, 1399.69]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71864684E12, 105.0], [1.71864732E12, 233.0], [1.71864702E12, 132.0], [1.71864696E12, 116.0], [1.71864714E12, 200.0], [1.71864708E12, 165.0], [1.71864678E12, 111.0], [1.71864726E12, 237.0], [1.71864672E12, 119.0], [1.7186472E12, 233.0], [1.7186469E12, 107.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71864684E12, 568.75], [1.71864732E12, 4796.4], [1.71864702E12, 951.6999999999998], [1.71864696E12, 740.6999999999998], [1.71864714E12, 1902.0], [1.71864708E12, 1286.35], [1.71864678E12, 554.0], [1.71864726E12, 3083.299999999994], [1.71864672E12, 576.7999999999995], [1.7186472E12, 2622.0], [1.7186469E12, 611.1500000000001]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864732E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 237.0, "series": [{"data": [[2.0, 135.5], [3.0, 147.0], [4.0, 115.5], [5.0, 132.0], [6.0, 119.0], [7.0, 109.0], [8.0, 113.0], [9.0, 114.0], [10.0, 113.0], [11.0, 116.0], [12.0, 115.0], [13.0, 103.0], [14.0, 120.5], [15.0, 118.0], [16.0, 99.0], [17.0, 112.0], [18.0, 112.0], [19.0, 111.0], [20.0, 109.5], [21.0, 101.0], [22.0, 102.5], [23.0, 112.0], [24.0, 100.0], [25.0, 104.0], [26.0, 110.0], [27.0, 101.0], [28.0, 101.0], [29.0, 102.0], [30.0, 108.0], [31.0, 106.0], [32.0, 108.0], [33.0, 112.0], [34.0, 102.0], [35.0, 100.0], [37.0, 101.5], [36.0, 120.0], [38.0, 114.0], [39.0, 111.0], [40.0, 111.0], [41.0, 105.0], [42.0, 104.0], [43.0, 118.0], [44.0, 142.0], [45.0, 118.0], [47.0, 114.0], [46.0, 108.5], [48.0, 116.0], [49.0, 125.0], [51.0, 143.0], [50.0, 118.5], [53.0, 163.0], [52.0, 144.5], [55.0, 147.0], [54.0, 156.0], [56.0, 171.0], [57.0, 187.0], [59.0, 176.0], [58.0, 217.0], [61.0, 179.0], [60.0, 161.0], [63.0, 209.5], [62.0, 184.0], [65.0, 169.0], [64.0, 207.0], [66.0, 223.0], [67.0, 227.0], [71.0, 184.5], [70.0, 207.0], [68.0, 210.0], [69.0, 226.0], [74.0, 168.0], [75.0, 178.0], [72.0, 237.0], [73.0, 233.0], [76.0, 169.0], [78.0, 141.0], [77.0, 209.5], [79.0, 223.5], [80.0, 197.0], [83.0, 176.0], [85.0, 150.5], [1.0, 169.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 0.0], [4.0, 0.0], [5.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0], [32.0, 0.0], [33.0, 0.0], [34.0, 0.0], [35.0, 0.0], [37.0, 0.0], [36.0, 0.0], [38.0, 0.0], [39.0, 0.0], [40.0, 0.0], [41.0, 0.0], [43.0, 0.0], [42.0, 0.0], [44.0, 0.0], [45.0, 0.0], [47.0, 0.0], [46.0, 0.0], [48.0, 0.0], [49.0, 0.0], [50.0, 0.0], [51.0, 0.0], [53.0, 0.0], [52.0, 0.0], [55.0, 0.0], [54.0, 0.0], [56.0, 0.0], [57.0, 0.0], [59.0, 0.0], [58.0, 0.0], [61.0, 0.0], [60.0, 0.0], [63.0, 0.0], [62.0, 0.0], [65.0, 0.0], [64.0, 0.0], [67.0, 0.0], [66.0, 0.0], [71.0, 0.0], [70.0, 0.0], [68.0, 0.0], [69.0, 0.0], [74.0, 0.0], [75.0, 0.0], [72.0, 0.0], [73.0, 0.0], [76.0, 0.0], [78.0, 0.0], [77.0, 0.0], [79.0, 0.0], [80.0, 0.0], [83.0, 0.0], [85.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 235.0, "series": [{"data": [[2.0, 132.0], [3.0, 144.0], [4.0, 114.0], [5.0, 131.0], [6.0, 116.0], [7.0, 108.0], [8.0, 110.0], [9.0, 113.0], [10.0, 111.0], [11.0, 113.0], [12.0, 113.0], [13.0, 101.0], [14.0, 118.0], [15.0, 116.0], [16.0, 96.0], [17.0, 109.0], [18.0, 109.0], [19.0, 109.0], [20.0, 107.0], [21.0, 98.0], [22.0, 100.0], [23.0, 108.0], [24.0, 97.0], [25.0, 102.0], [26.0, 108.0], [27.0, 99.5], [28.0, 98.0], [29.0, 99.5], [30.0, 104.5], [31.0, 102.0], [32.0, 106.0], [33.0, 109.0], [34.0, 99.0], [35.0, 97.5], [37.0, 98.5], [36.0, 115.0], [38.0, 112.0], [39.0, 108.0], [40.0, 108.0], [41.0, 101.0], [42.0, 101.0], [43.0, 115.0], [44.0, 139.0], [45.0, 115.0], [47.0, 110.0], [46.0, 105.0], [48.0, 112.0], [49.0, 122.5], [51.0, 140.0], [50.0, 115.0], [53.0, 161.0], [52.0, 142.5], [55.0, 145.0], [54.0, 152.0], [56.0, 169.0], [57.0, 184.0], [59.0, 173.5], [58.0, 213.0], [61.0, 177.0], [60.0, 158.0], [63.0, 207.0], [62.0, 181.0], [65.0, 167.0], [64.0, 204.0], [66.0, 221.0], [67.0, 225.0], [71.0, 182.0], [70.0, 204.0], [68.0, 206.0], [69.0, 223.0], [74.0, 166.0], [75.0, 175.0], [72.0, 235.0], [73.0, 229.0], [76.0, 165.5], [78.0, 137.5], [77.0, 208.0], [79.0, 220.5], [80.0, 194.0], [83.0, 175.0], [85.0, 147.0], [1.0, 167.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 0.0], [4.0, 0.0], [5.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0], [32.0, 0.0], [33.0, 0.0], [34.0, 0.0], [35.0, 0.0], [37.0, 0.0], [36.0, 0.0], [38.0, 0.0], [39.0, 0.0], [40.0, 0.0], [41.0, 0.0], [43.0, 0.0], [42.0, 0.0], [44.0, 0.0], [45.0, 0.0], [47.0, 0.0], [46.0, 0.0], [48.0, 0.0], [49.0, 0.0], [50.0, 0.0], [51.0, 0.0], [53.0, 0.0], [52.0, 0.0], [55.0, 0.0], [54.0, 0.0], [56.0, 0.0], [57.0, 0.0], [59.0, 0.0], [58.0, 0.0], [61.0, 0.0], [60.0, 0.0], [63.0, 0.0], [62.0, 0.0], [65.0, 0.0], [64.0, 0.0], [67.0, 0.0], [66.0, 0.0], [71.0, 0.0], [70.0, 0.0], [68.0, 0.0], [69.0, 0.0], [74.0, 0.0], [75.0, 0.0], [72.0, 0.0], [73.0, 0.0], [76.0, 0.0], [78.0, 0.0], [77.0, 0.0], [79.0, 0.0], [80.0, 0.0], [83.0, 0.0], [85.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.71864672E12, "maxY": 64.85, "series": [{"data": [[1.71864684E12, 27.066666666666666], [1.71864732E12, 30.333333333333332], [1.71864702E12, 57.95], [1.71864696E12, 49.65], [1.71864714E12, 64.85], [1.71864708E12, 62.78333333333333], [1.71864678E12, 14.016666666666667], [1.71864726E12, 63.2], [1.71864672E12, 2.0], [1.7186472E12, 64.56666666666666], [1.7186469E12, 39.43333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864732E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.71864672E12, "maxY": 62.65, "series": [{"data": [[1.71864684E12, 25.9], [1.71864732E12, 30.183333333333334], [1.71864702E12, 56.2], [1.71864696E12, 48.083333333333336], [1.71864714E12, 62.65], [1.71864708E12, 60.86666666666667], [1.71864678E12, 13.316666666666666], [1.71864726E12, 61.333333333333336], [1.71864672E12, 1.85], [1.7186472E12, 62.65], [1.7186469E12, 37.93333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71864684E12, 1.2], [1.71864732E12, 0.7333333333333333], [1.71864702E12, 1.7166666666666666], [1.71864696E12, 1.55], [1.71864714E12, 1.95], [1.71864708E12, 1.8333333333333333], [1.71864678E12, 0.65], [1.71864726E12, 1.85], [1.71864672E12, 0.11666666666666667], [1.7186472E12, 1.9], [1.7186469E12, 1.3833333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864732E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.71864672E12, "maxY": 62.65, "series": [{"data": [[1.71864684E12, 1.2], [1.71864732E12, 0.7333333333333333], [1.71864702E12, 1.7166666666666666], [1.71864696E12, 1.55], [1.71864714E12, 1.95], [1.71864708E12, 1.8333333333333333], [1.71864678E12, 0.65], [1.71864726E12, 1.85], [1.71864672E12, 0.11666666666666667], [1.7186472E12, 1.9], [1.7186469E12, 1.3833333333333333]], "isOverall": false, "label": "TitleBasics by params-failure", "isController": false}, {"data": [[1.71864684E12, 25.9], [1.71864732E12, 30.183333333333334], [1.71864702E12, 56.2], [1.71864696E12, 48.083333333333336], [1.71864714E12, 62.65], [1.71864708E12, 60.86666666666667], [1.71864678E12, 13.316666666666666], [1.71864726E12, 61.333333333333336], [1.71864672E12, 1.85], [1.7186472E12, 62.65], [1.7186469E12, 37.93333333333333]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864732E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.71864672E12, "maxY": 62.65, "series": [{"data": [[1.71864684E12, 25.9], [1.71864732E12, 30.183333333333334], [1.71864702E12, 56.2], [1.71864696E12, 48.083333333333336], [1.71864714E12, 62.65], [1.71864708E12, 60.86666666666667], [1.71864678E12, 13.316666666666666], [1.71864726E12, 61.333333333333336], [1.71864672E12, 1.85], [1.7186472E12, 62.65], [1.7186469E12, 37.93333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71864684E12, 1.2], [1.71864732E12, 0.7333333333333333], [1.71864702E12, 1.7166666666666666], [1.71864696E12, 1.55], [1.71864714E12, 1.95], [1.71864708E12, 1.8333333333333333], [1.71864678E12, 0.65], [1.71864726E12, 1.85], [1.71864672E12, 0.11666666666666667], [1.7186472E12, 1.9], [1.7186469E12, 1.3833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864732E12, "title": "Total Transactions Per Second"}},
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

