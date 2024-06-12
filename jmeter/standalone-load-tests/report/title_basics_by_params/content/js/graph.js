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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 5848.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 86.0], [3.3, 89.0], [3.4, 90.0], [3.5, 90.0], [3.6, 91.0], [3.7, 91.0], [3.8, 92.0], [3.9, 92.0], [4.0, 93.0], [4.1, 93.0], [4.2, 93.0], [4.3, 93.0], [4.4, 94.0], [4.5, 94.0], [4.6, 94.0], [4.7, 94.0], [4.8, 95.0], [4.9, 95.0], [5.0, 95.0], [5.1, 95.0], [5.2, 96.0], [5.3, 96.0], [5.4, 96.0], [5.5, 96.0], [5.6, 96.0], [5.7, 97.0], [5.8, 97.0], [5.9, 97.0], [6.0, 97.0], [6.1, 97.0], [6.2, 98.0], [6.3, 98.0], [6.4, 98.0], [6.5, 98.0], [6.6, 98.0], [6.7, 99.0], [6.8, 99.0], [6.9, 99.0], [7.0, 99.0], [7.1, 99.0], [7.2, 99.0], [7.3, 99.0], [7.4, 100.0], [7.5, 100.0], [7.6, 100.0], [7.7, 100.0], [7.8, 100.0], [7.9, 101.0], [8.0, 101.0], [8.1, 101.0], [8.2, 101.0], [8.3, 101.0], [8.4, 102.0], [8.5, 102.0], [8.6, 102.0], [8.7, 102.0], [8.8, 102.0], [8.9, 102.0], [9.0, 103.0], [9.1, 103.0], [9.2, 103.0], [9.3, 103.0], [9.4, 103.0], [9.5, 104.0], [9.6, 104.0], [9.7, 104.0], [9.8, 104.0], [9.9, 104.0], [10.0, 104.0], [10.1, 105.0], [10.2, 105.0], [10.3, 105.0], [10.4, 105.0], [10.5, 105.0], [10.6, 105.0], [10.7, 106.0], [10.8, 106.0], [10.9, 106.0], [11.0, 106.0], [11.1, 106.0], [11.2, 106.0], [11.3, 107.0], [11.4, 107.0], [11.5, 107.0], [11.6, 107.0], [11.7, 107.0], [11.8, 107.0], [11.9, 107.0], [12.0, 108.0], [12.1, 108.0], [12.2, 108.0], [12.3, 108.0], [12.4, 108.0], [12.5, 108.0], [12.6, 109.0], [12.7, 109.0], [12.8, 109.0], [12.9, 109.0], [13.0, 109.0], [13.1, 109.0], [13.2, 110.0], [13.3, 110.0], [13.4, 110.0], [13.5, 110.0], [13.6, 110.0], [13.7, 110.0], [13.8, 111.0], [13.9, 111.0], [14.0, 111.0], [14.1, 111.0], [14.2, 111.0], [14.3, 111.0], [14.4, 112.0], [14.5, 112.0], [14.6, 112.0], [14.7, 112.0], [14.8, 112.0], [14.9, 112.0], [15.0, 112.0], [15.1, 113.0], [15.2, 113.0], [15.3, 113.0], [15.4, 113.0], [15.5, 113.0], [15.6, 113.0], [15.7, 114.0], [15.8, 114.0], [15.9, 114.0], [16.0, 114.0], [16.1, 114.0], [16.2, 114.0], [16.3, 115.0], [16.4, 115.0], [16.5, 115.0], [16.6, 115.0], [16.7, 115.0], [16.8, 115.0], [16.9, 116.0], [17.0, 116.0], [17.1, 116.0], [17.2, 116.0], [17.3, 116.0], [17.4, 116.0], [17.5, 117.0], [17.6, 117.0], [17.7, 117.0], [17.8, 117.0], [17.9, 117.0], [18.0, 117.0], [18.1, 118.0], [18.2, 118.0], [18.3, 118.0], [18.4, 118.0], [18.5, 118.0], [18.6, 118.0], [18.7, 119.0], [18.8, 119.0], [18.9, 119.0], [19.0, 119.0], [19.1, 119.0], [19.2, 119.0], [19.3, 120.0], [19.4, 120.0], [19.5, 120.0], [19.6, 120.0], [19.7, 120.0], [19.8, 121.0], [19.9, 121.0], [20.0, 121.0], [20.1, 121.0], [20.2, 122.0], [20.3, 122.0], [20.4, 122.0], [20.5, 122.0], [20.6, 122.0], [20.7, 123.0], [20.8, 123.0], [20.9, 123.0], [21.0, 123.0], [21.1, 123.0], [21.2, 124.0], [21.3, 124.0], [21.4, 124.0], [21.5, 124.0], [21.6, 124.0], [21.7, 124.0], [21.8, 125.0], [21.9, 125.0], [22.0, 125.0], [22.1, 125.0], [22.2, 125.0], [22.3, 125.0], [22.4, 126.0], [22.5, 126.0], [22.6, 126.0], [22.7, 126.0], [22.8, 126.0], [22.9, 127.0], [23.0, 127.0], [23.1, 127.0], [23.2, 127.0], [23.3, 127.0], [23.4, 128.0], [23.5, 128.0], [23.6, 128.0], [23.7, 128.0], [23.8, 128.0], [23.9, 128.0], [24.0, 129.0], [24.1, 129.0], [24.2, 129.0], [24.3, 129.0], [24.4, 130.0], [24.5, 130.0], [24.6, 130.0], [24.7, 130.0], [24.8, 130.0], [24.9, 130.0], [25.0, 131.0], [25.1, 131.0], [25.2, 131.0], [25.3, 131.0], [25.4, 131.0], [25.5, 132.0], [25.6, 132.0], [25.7, 132.0], [25.8, 132.0], [25.9, 132.0], [26.0, 133.0], [26.1, 133.0], [26.2, 133.0], [26.3, 133.0], [26.4, 134.0], [26.5, 134.0], [26.6, 134.0], [26.7, 134.0], [26.8, 134.0], [26.9, 135.0], [27.0, 135.0], [27.1, 135.0], [27.2, 135.0], [27.3, 135.0], [27.4, 135.0], [27.5, 136.0], [27.6, 136.0], [27.7, 136.0], [27.8, 136.0], [27.9, 137.0], [28.0, 137.0], [28.1, 137.0], [28.2, 137.0], [28.3, 137.0], [28.4, 137.0], [28.5, 138.0], [28.6, 138.0], [28.7, 138.0], [28.8, 138.0], [28.9, 139.0], [29.0, 139.0], [29.1, 139.0], [29.2, 139.0], [29.3, 139.0], [29.4, 140.0], [29.5, 140.0], [29.6, 140.0], [29.7, 140.0], [29.8, 141.0], [29.9, 141.0], [30.0, 141.0], [30.1, 141.0], [30.2, 141.0], [30.3, 142.0], [30.4, 142.0], [30.5, 142.0], [30.6, 142.0], [30.7, 143.0], [30.8, 143.0], [30.9, 143.0], [31.0, 143.0], [31.1, 144.0], [31.2, 144.0], [31.3, 144.0], [31.4, 144.0], [31.5, 145.0], [31.6, 145.0], [31.7, 145.0], [31.8, 145.0], [31.9, 145.0], [32.0, 146.0], [32.1, 146.0], [32.2, 146.0], [32.3, 146.0], [32.4, 147.0], [32.5, 147.0], [32.6, 147.0], [32.7, 147.0], [32.8, 148.0], [32.9, 148.0], [33.0, 148.0], [33.1, 148.0], [33.2, 149.0], [33.3, 149.0], [33.4, 149.0], [33.5, 149.0], [33.6, 149.0], [33.7, 150.0], [33.8, 150.0], [33.9, 150.0], [34.0, 150.0], [34.1, 151.0], [34.2, 151.0], [34.3, 151.0], [34.4, 151.0], [34.5, 152.0], [34.6, 152.0], [34.7, 152.0], [34.8, 152.0], [34.9, 153.0], [35.0, 153.0], [35.1, 153.0], [35.2, 153.0], [35.3, 153.0], [35.4, 154.0], [35.5, 154.0], [35.6, 154.0], [35.7, 154.0], [35.8, 155.0], [35.9, 155.0], [36.0, 155.0], [36.1, 156.0], [36.2, 156.0], [36.3, 156.0], [36.4, 156.0], [36.5, 157.0], [36.6, 157.0], [36.7, 157.0], [36.8, 157.0], [36.9, 158.0], [37.0, 158.0], [37.1, 158.0], [37.2, 158.0], [37.3, 159.0], [37.4, 159.0], [37.5, 159.0], [37.6, 159.0], [37.7, 160.0], [37.8, 160.0], [37.9, 160.0], [38.0, 160.0], [38.1, 161.0], [38.2, 161.0], [38.3, 161.0], [38.4, 162.0], [38.5, 162.0], [38.6, 162.0], [38.7, 162.0], [38.8, 163.0], [38.9, 163.0], [39.0, 163.0], [39.1, 163.0], [39.2, 164.0], [39.3, 164.0], [39.4, 164.0], [39.5, 165.0], [39.6, 165.0], [39.7, 165.0], [39.8, 166.0], [39.9, 166.0], [40.0, 166.0], [40.1, 166.0], [40.2, 167.0], [40.3, 167.0], [40.4, 167.0], [40.5, 167.0], [40.6, 168.0], [40.7, 168.0], [40.8, 168.0], [40.9, 169.0], [41.0, 169.0], [41.1, 169.0], [41.2, 170.0], [41.3, 170.0], [41.4, 170.0], [41.5, 170.0], [41.6, 171.0], [41.7, 171.0], [41.8, 171.0], [41.9, 172.0], [42.0, 172.0], [42.1, 172.0], [42.2, 173.0], [42.3, 173.0], [42.4, 173.0], [42.5, 173.0], [42.6, 174.0], [42.7, 174.0], [42.8, 174.0], [42.9, 175.0], [43.0, 175.0], [43.1, 175.0], [43.2, 175.0], [43.3, 176.0], [43.4, 176.0], [43.5, 177.0], [43.6, 177.0], [43.7, 177.0], [43.8, 178.0], [43.9, 178.0], [44.0, 178.0], [44.1, 179.0], [44.2, 179.0], [44.3, 179.0], [44.4, 180.0], [44.5, 180.0], [44.6, 180.0], [44.7, 181.0], [44.8, 181.0], [44.9, 181.0], [45.0, 182.0], [45.1, 182.0], [45.2, 182.0], [45.3, 183.0], [45.4, 183.0], [45.5, 184.0], [45.6, 184.0], [45.7, 184.0], [45.8, 185.0], [45.9, 185.0], [46.0, 185.0], [46.1, 186.0], [46.2, 186.0], [46.3, 186.0], [46.4, 187.0], [46.5, 187.0], [46.6, 187.0], [46.7, 188.0], [46.8, 188.0], [46.9, 188.0], [47.0, 189.0], [47.1, 189.0], [47.2, 190.0], [47.3, 190.0], [47.4, 190.0], [47.5, 191.0], [47.6, 191.0], [47.7, 191.0], [47.8, 192.0], [47.9, 192.0], [48.0, 192.0], [48.1, 193.0], [48.2, 193.0], [48.3, 193.0], [48.4, 194.0], [48.5, 194.0], [48.6, 194.0], [48.7, 195.0], [48.8, 195.0], [48.9, 196.0], [49.0, 196.0], [49.1, 197.0], [49.2, 197.0], [49.3, 197.0], [49.4, 198.0], [49.5, 198.0], [49.6, 198.0], [49.7, 199.0], [49.8, 199.0], [49.9, 199.0], [50.0, 200.0], [50.1, 200.0], [50.2, 200.0], [50.3, 201.0], [50.4, 201.0], [50.5, 202.0], [50.6, 202.0], [50.7, 202.0], [50.8, 203.0], [50.9, 203.0], [51.0, 203.0], [51.1, 204.0], [51.2, 204.0], [51.3, 205.0], [51.4, 205.0], [51.5, 205.0], [51.6, 206.0], [51.7, 206.0], [51.8, 207.0], [51.9, 207.0], [52.0, 207.0], [52.1, 207.0], [52.2, 208.0], [52.3, 208.0], [52.4, 209.0], [52.5, 209.0], [52.6, 210.0], [52.7, 210.0], [52.8, 210.0], [52.9, 211.0], [53.0, 211.0], [53.1, 211.0], [53.2, 212.0], [53.3, 212.0], [53.4, 212.0], [53.5, 213.0], [53.6, 213.0], [53.7, 214.0], [53.8, 214.0], [53.9, 214.0], [54.0, 215.0], [54.1, 215.0], [54.2, 215.0], [54.3, 215.0], [54.4, 216.0], [54.5, 216.0], [54.6, 217.0], [54.7, 217.0], [54.8, 218.0], [54.9, 218.0], [55.0, 218.0], [55.1, 219.0], [55.2, 219.0], [55.3, 220.0], [55.4, 220.0], [55.5, 220.0], [55.6, 221.0], [55.7, 221.0], [55.8, 222.0], [55.9, 222.0], [56.0, 223.0], [56.1, 223.0], [56.2, 223.0], [56.3, 224.0], [56.4, 224.0], [56.5, 225.0], [56.6, 225.0], [56.7, 225.0], [56.8, 226.0], [56.9, 226.0], [57.0, 227.0], [57.1, 227.0], [57.2, 227.0], [57.3, 228.0], [57.4, 228.0], [57.5, 228.0], [57.6, 229.0], [57.7, 229.0], [57.8, 230.0], [57.9, 230.0], [58.0, 231.0], [58.1, 231.0], [58.2, 231.0], [58.3, 232.0], [58.4, 232.0], [58.5, 233.0], [58.6, 233.0], [58.7, 234.0], [58.8, 234.0], [58.9, 234.0], [59.0, 235.0], [59.1, 235.0], [59.2, 235.0], [59.3, 236.0], [59.4, 236.0], [59.5, 237.0], [59.6, 237.0], [59.7, 238.0], [59.8, 238.0], [59.9, 239.0], [60.0, 239.0], [60.1, 240.0], [60.2, 240.0], [60.3, 240.0], [60.4, 241.0], [60.5, 241.0], [60.6, 242.0], [60.7, 242.0], [60.8, 242.0], [60.9, 243.0], [61.0, 243.0], [61.1, 244.0], [61.2, 244.0], [61.3, 245.0], [61.4, 245.0], [61.5, 246.0], [61.6, 246.0], [61.7, 247.0], [61.8, 247.0], [61.9, 248.0], [62.0, 248.0], [62.1, 249.0], [62.2, 249.0], [62.3, 250.0], [62.4, 250.0], [62.5, 251.0], [62.6, 251.0], [62.7, 252.0], [62.8, 252.0], [62.9, 253.0], [63.0, 253.0], [63.1, 253.0], [63.2, 254.0], [63.3, 255.0], [63.4, 255.0], [63.5, 256.0], [63.6, 257.0], [63.7, 257.0], [63.8, 257.0], [63.9, 258.0], [64.0, 258.0], [64.1, 259.0], [64.2, 259.0], [64.3, 260.0], [64.4, 260.0], [64.5, 261.0], [64.6, 261.0], [64.7, 262.0], [64.8, 262.0], [64.9, 263.0], [65.0, 264.0], [65.1, 264.0], [65.2, 265.0], [65.3, 265.0], [65.4, 266.0], [65.5, 266.0], [65.6, 267.0], [65.7, 268.0], [65.8, 268.0], [65.9, 269.0], [66.0, 269.0], [66.1, 270.0], [66.2, 271.0], [66.3, 271.0], [66.4, 272.0], [66.5, 272.0], [66.6, 272.0], [66.7, 273.0], [66.8, 274.0], [66.9, 275.0], [67.0, 275.0], [67.1, 276.0], [67.2, 276.0], [67.3, 277.0], [67.4, 277.0], [67.5, 278.0], [67.6, 279.0], [67.7, 279.0], [67.8, 280.0], [67.9, 281.0], [68.0, 281.0], [68.1, 282.0], [68.2, 283.0], [68.3, 283.0], [68.4, 284.0], [68.5, 285.0], [68.6, 285.0], [68.7, 286.0], [68.8, 287.0], [68.9, 287.0], [69.0, 288.0], [69.1, 289.0], [69.2, 289.0], [69.3, 290.0], [69.4, 290.0], [69.5, 291.0], [69.6, 292.0], [69.7, 292.0], [69.8, 293.0], [69.9, 294.0], [70.0, 294.0], [70.1, 295.0], [70.2, 296.0], [70.3, 297.0], [70.4, 298.0], [70.5, 298.0], [70.6, 299.0], [70.7, 299.0], [70.8, 300.0], [70.9, 301.0], [71.0, 302.0], [71.1, 303.0], [71.2, 303.0], [71.3, 304.0], [71.4, 305.0], [71.5, 306.0], [71.6, 307.0], [71.7, 307.0], [71.8, 308.0], [71.9, 309.0], [72.0, 310.0], [72.1, 311.0], [72.2, 312.0], [72.3, 312.0], [72.4, 313.0], [72.5, 314.0], [72.6, 315.0], [72.7, 316.0], [72.8, 317.0], [72.9, 318.0], [73.0, 318.0], [73.1, 319.0], [73.2, 320.0], [73.3, 320.0], [73.4, 321.0], [73.5, 322.0], [73.6, 323.0], [73.7, 324.0], [73.8, 324.0], [73.9, 325.0], [74.0, 326.0], [74.1, 327.0], [74.2, 328.0], [74.3, 329.0], [74.4, 329.0], [74.5, 330.0], [74.6, 331.0], [74.7, 332.0], [74.8, 333.0], [74.9, 334.0], [75.0, 334.0], [75.1, 335.0], [75.2, 336.0], [75.3, 337.0], [75.4, 338.0], [75.5, 339.0], [75.6, 340.0], [75.7, 341.0], [75.8, 342.0], [75.9, 343.0], [76.0, 344.0], [76.1, 345.0], [76.2, 346.0], [76.3, 347.0], [76.4, 348.0], [76.5, 349.0], [76.6, 350.0], [76.7, 351.0], [76.8, 352.0], [76.9, 353.0], [77.0, 354.0], [77.1, 354.0], [77.2, 355.0], [77.3, 356.0], [77.4, 357.0], [77.5, 359.0], [77.6, 360.0], [77.7, 361.0], [77.8, 362.0], [77.9, 363.0], [78.0, 363.0], [78.1, 365.0], [78.2, 366.0], [78.3, 367.0], [78.4, 368.0], [78.5, 369.0], [78.6, 371.0], [78.7, 372.0], [78.8, 372.0], [78.9, 374.0], [79.0, 375.0], [79.1, 376.0], [79.2, 377.0], [79.3, 378.0], [79.4, 379.0], [79.5, 381.0], [79.6, 382.0], [79.7, 383.0], [79.8, 384.0], [79.9, 385.0], [80.0, 386.0], [80.1, 388.0], [80.2, 389.0], [80.3, 390.0], [80.4, 391.0], [80.5, 393.0], [80.6, 394.0], [80.7, 396.0], [80.8, 397.0], [80.9, 398.0], [81.0, 400.0], [81.1, 401.0], [81.2, 403.0], [81.3, 404.0], [81.4, 406.0], [81.5, 408.0], [81.6, 410.0], [81.7, 411.0], [81.8, 413.0], [81.9, 415.0], [82.0, 417.0], [82.1, 418.0], [82.2, 420.0], [82.3, 422.0], [82.4, 423.0], [82.5, 424.0], [82.6, 426.0], [82.7, 427.0], [82.8, 429.0], [82.9, 431.0], [83.0, 432.0], [83.1, 434.0], [83.2, 436.0], [83.3, 438.0], [83.4, 440.0], [83.5, 441.0], [83.6, 443.0], [83.7, 446.0], [83.8, 447.0], [83.9, 448.0], [84.0, 451.0], [84.1, 453.0], [84.2, 454.0], [84.3, 456.0], [84.4, 458.0], [84.5, 460.0], [84.6, 463.0], [84.7, 465.0], [84.8, 467.0], [84.9, 469.0], [85.0, 472.0], [85.1, 473.0], [85.2, 475.0], [85.3, 477.0], [85.4, 480.0], [85.5, 481.0], [85.6, 483.0], [85.7, 485.0], [85.8, 486.0], [85.9, 489.0], [86.0, 491.0], [86.1, 494.0], [86.2, 497.0], [86.3, 499.0], [86.4, 501.0], [86.5, 504.0], [86.6, 506.0], [86.7, 509.0], [86.8, 512.0], [86.9, 515.0], [87.0, 518.0], [87.1, 520.0], [87.2, 523.0], [87.3, 526.0], [87.4, 530.0], [87.5, 532.0], [87.6, 535.0], [87.7, 538.0], [87.8, 542.0], [87.9, 545.0], [88.0, 548.0], [88.1, 551.0], [88.2, 554.0], [88.3, 556.0], [88.4, 558.0], [88.5, 561.0], [88.6, 564.0], [88.7, 567.0], [88.8, 570.0], [88.9, 573.0], [89.0, 577.0], [89.1, 579.0], [89.2, 582.0], [89.3, 586.0], [89.4, 589.0], [89.5, 591.0], [89.6, 597.0], [89.7, 600.0], [89.8, 603.0], [89.9, 608.0], [90.0, 613.0], [90.1, 617.0], [90.2, 623.0], [90.3, 627.0], [90.4, 631.0], [90.5, 634.0], [90.6, 637.0], [90.7, 641.0], [90.8, 647.0], [90.9, 651.0], [91.0, 655.0], [91.1, 660.0], [91.2, 665.0], [91.3, 672.0], [91.4, 676.0], [91.5, 681.0], [91.6, 685.0], [91.7, 690.0], [91.8, 698.0], [91.9, 704.0], [92.0, 709.0], [92.1, 716.0], [92.2, 723.0], [92.3, 731.0], [92.4, 739.0], [92.5, 751.0], [92.6, 761.0], [92.7, 768.0], [92.8, 780.0], [92.9, 794.0], [93.0, 804.0], [93.1, 815.0], [93.2, 830.0], [93.3, 845.0], [93.4, 856.0], [93.5, 870.0], [93.6, 885.0], [93.7, 898.0], [93.8, 914.0], [93.9, 936.0], [94.0, 954.0], [94.1, 972.0], [94.2, 996.0], [94.3, 1030.0], [94.4, 1052.0], [94.5, 1077.0], [94.6, 1105.0], [94.7, 1148.0], [94.8, 1181.0], [94.9, 1215.0], [95.0, 1239.0], [95.1, 1261.0], [95.2, 1298.0], [95.3, 1323.0], [95.4, 1359.0], [95.5, 1405.0], [95.6, 1432.0], [95.7, 1460.0], [95.8, 1489.0], [95.9, 1520.0], [96.0, 1561.0], [96.1, 1610.0], [96.2, 1646.0], [96.3, 1683.0], [96.4, 1730.0], [96.5, 1768.0], [96.6, 1808.0], [96.7, 1835.0], [96.8, 1875.0], [96.9, 1924.0], [97.0, 1972.0], [97.1, 2017.0], [97.2, 2058.0], [97.3, 2093.0], [97.4, 2147.0], [97.5, 2182.0], [97.6, 2252.0], [97.7, 2322.0], [97.8, 2405.0], [97.9, 2467.0], [98.0, 2536.0], [98.1, 2615.0], [98.2, 2722.0], [98.3, 2796.0], [98.4, 2905.0], [98.5, 3042.0], [98.6, 3159.0], [98.7, 3261.0], [98.8, 3364.0], [98.9, 3518.0], [99.0, 3612.0], [99.1, 3727.0], [99.2, 3820.0], [99.3, 3948.0], [99.4, 4092.0], [99.5, 4217.0], [99.6, 4415.0], [99.7, 4617.0], [99.8, 4802.0], [99.9, 5042.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 11818.0, "series": [{"data": [[0.0, 2028.0], [600.0, 596.0], [700.0, 309.0], [800.0, 210.0], [900.0, 139.0], [1000.0, 102.0], [1100.0, 80.0], [1200.0, 96.0], [1300.0, 78.0], [1400.0, 94.0], [1500.0, 68.0], [1600.0, 71.0], [1700.0, 67.0], [1800.0, 79.0], [1900.0, 60.0], [2000.0, 64.0], [2100.0, 61.0], [2200.0, 42.0], [2300.0, 30.0], [2400.0, 46.0], [2500.0, 34.0], [2600.0, 29.0], [2800.0, 26.0], [2700.0, 34.0], [2900.0, 25.0], [3000.0, 20.0], [3100.0, 28.0], [3300.0, 23.0], [3200.0, 24.0], [3400.0, 16.0], [3500.0, 28.0], [3700.0, 31.0], [3600.0, 23.0], [3800.0, 20.0], [3900.0, 21.0], [4000.0, 22.0], [4200.0, 17.0], [4300.0, 12.0], [4100.0, 21.0], [4500.0, 15.0], [4600.0, 17.0], [4400.0, 11.0], [4700.0, 15.0], [4800.0, 12.0], [4900.0, 14.0], [5000.0, 8.0], [5100.0, 2.0], [5200.0, 4.0], [5300.0, 2.0], [5600.0, 5.0], [5400.0, 3.0], [5500.0, 3.0], [5700.0, 2.0], [5800.0, 1.0], [100.0, 11818.0], [200.0, 5771.0], [300.0, 2850.0], [400.0, 1482.0], [500.0, 935.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 873.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 23086.0, "series": [{"data": [[0.0, 23086.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2629.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1156.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 873.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.963157894736842, "minX": 1.71821364E12, "maxY": 60.0, "series": [{"data": [[1.71821376E12, 18.46225382932168], [1.71821424E12, 49.58823529411763], [1.71821394E12, 39.88679783290557], [1.71821364E12, 4.963157894736842], [1.71821412E12, 59.67523364485985], [1.71821382E12, 25.597233201581005], [1.718214E12, 47.139344262295126], [1.7182137E12, 11.44423963133642], [1.71821418E12, 60.0], [1.71821388E12, 32.77033181522447], [1.71821406E12, 54.251018329938894]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821424E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 156.30534351145047, "minX": 1.0, "maxY": 550.8827169588908, "series": [{"data": [[2.0, 278.9285714285714], [3.0, 198.80000000000004], [4.0, 282.8679245283019], [5.0, 230.7205882352941], [6.0, 157.66666666666666], [7.0, 216.46315789473678], [8.0, 255.04629629629625], [9.0, 235.72033898305085], [10.0, 156.30534351145047], [11.0, 199.311377245509], [12.0, 208.68072289156623], [13.0, 221.13483146067418], [14.0, 212.77248677248673], [15.0, 185.36018957345965], [16.0, 158.28389830508476], [17.0, 221.89177489177487], [18.0, 199.7091633466137], [19.0, 198.8906250000001], [20.0, 199.50177935943066], [21.0, 157.68608414239486], [22.0, 212.83277591973248], [23.0, 199.39875389408104], [24.0, 211.76993865030678], [25.0, 201.6434782608694], [26.0, 178.0962566844921], [27.0, 206.190607734807], [28.0, 234.7671957671959], [29.0, 225.8733509234829], [30.0, 204.17042606516276], [31.0, 226.5714285714287], [32.0, 231.09761904761925], [33.0, 231.800469483568], [34.0, 231.1409691629955], [35.0, 234.10044642857144], [36.0, 230.7484407484408], [37.0, 248.1621052631578], [38.0, 278.39254385964915], [39.0, 273.65082644628103], [40.0, 279.5506329113924], [41.0, 292.19103313840156], [42.0, 299.92814371257475], [43.0, 297.49700598802406], [44.0, 321.30952380952374], [45.0, 358.457264957265], [46.0, 468.54506437768197], [47.0, 306.76449275362324], [48.0, 368.1650294695478], [49.0, 400.2843511450384], [50.0, 352.97748592870545], [51.0, 353.6554770318018], [52.0, 396.79963570127535], [53.0, 410.0873605947951], [54.0, 390.08409506398533], [55.0, 484.3850574712646], [56.0, 407.48954703832766], [57.0, 489.7561436672964], [58.0, 484.3082568807342], [59.0, 484.65302491103205], [60.0, 550.8827169588908], [1.0, 285.79999999999995]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[43.2943699538639, 362.4092055940046]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 503.45, "minX": 1.71821364E12, "maxY": 513617.93333333335, "series": [{"data": [[1.71821376E12, 239602.25], [1.71821424E12, 21833.0], [1.71821394E12, 460785.75], [1.71821364E12, 48589.816666666666], [1.71821412E12, 504802.8], [1.71821382E12, 332098.5], [1.718214E12, 479992.65], [1.7182137E12, 142580.86666666667], [1.71821418E12, 486778.93333333335], [1.71821388E12, 403677.8333333333], [1.71821406E12, 513617.93333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71821376E12, 5330.283333333334], [1.71821424E12, 503.45], [1.71821394E12, 10349.55], [1.71821364E12, 1088.1], [1.71821412E12, 11369.933333333332], [1.71821382E12, 7420.466666666666], [1.718214E12, 10793.283333333333], [1.7182137E12, 3159.266666666667], [1.71821418E12, 11010.233333333334], [1.71821388E12, 9048.733333333334], [1.71821406E12, 11558.833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821424E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 192.99398249452972, "minX": 1.71821364E12, "maxY": 698.1764705882355, "series": [{"data": [[1.71821376E12, 192.99398249452972], [1.71821424E12, 698.1764705882355], [1.71821394E12, 278.42771599657834], [1.71821364E12, 193.57631578947374], [1.71821412E12, 525.055815160956], [1.71821382E12, 199.18932806324096], [1.718214E12, 366.40710382513566], [1.7182137E12, 203.56589861751172], [1.71821418E12, 555.0528150134054], [1.71821388E12, 231.5416395575791], [1.71821406E12, 423.29531568228145]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821424E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 190.0601750547047, "minX": 1.71821364E12, "maxY": 695.5764705882351, "series": [{"data": [[1.71821376E12, 190.0601750547047], [1.71821424E12, 695.5764705882351], [1.71821394E12, 275.6743655546046], [1.71821364E12, 191.09210526315795], [1.71821412E12, 521.9034267912773], [1.71821382E12, 195.78102766798384], [1.718214E12, 338.5024590163945], [1.7182137E12, 200.96958525345636], [1.71821418E12, 551.876407506704], [1.71821388E12, 228.54196486662332], [1.71821406E12, 420.5374236252541]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821424E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.46798418972332, "minX": 1.71821364E12, "maxY": 0.8150134048257379, "series": [{"data": [[1.71821376E12, 0.515317286652078], [1.71821424E12, 0.5117647058823531], [1.71821394E12, 0.5252352437981195], [1.71821364E12, 0.7894736842105257], [1.71821412E12, 0.7551921079958448], [1.71821382E12, 0.46798418972332], [1.718214E12, 0.7647540983606561], [1.7182137E12, 0.5797235023041474], [1.71821418E12, 0.8150134048257379], [1.71821388E12, 0.5071567989590127], [1.71821406E12, 0.6354378818737273]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821424E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 83.0, "minX": 1.71821364E12, "maxY": 5848.0, "series": [{"data": [[1.71821376E12, 1806.0], [1.71821424E12, 5018.0], [1.71821394E12, 2887.0], [1.71821364E12, 1312.0], [1.71821412E12, 5848.0], [1.71821382E12, 2270.0], [1.718214E12, 3594.0], [1.7182137E12, 1592.0], [1.71821418E12, 5673.0], [1.71821388E12, 2222.0], [1.71821406E12, 4613.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71821376E12, 83.0], [1.71821424E12, 126.0], [1.71821394E12, 89.0], [1.71821364E12, 84.0], [1.71821412E12, 110.0], [1.71821382E12, 84.0], [1.718214E12, 94.0], [1.7182137E12, 84.0], [1.71821418E12, 109.0], [1.71821388E12, 86.0], [1.71821406E12, 94.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71821376E12, 558.1000000000001], [1.71821424E12, 2027.2000000000003], [1.71821394E12, 456.40000000000055], [1.71821364E12, 536.3000000000001], [1.71821412E12, 709.5], [1.71821382E12, 406.0000000000073], [1.718214E12, 653.0], [1.7182137E12, 551.2], [1.71821418E12, 772.0], [1.71821388E12, 484.69999999999936], [1.71821406E12, 607.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71821376E12, 1265.1700000000003], [1.71821424E12, 4768.090000000005], [1.71821394E12, 2127.6000000000004], [1.71821364E12, 1251.8700000000001], [1.71821412E12, 4470.850000000009], [1.71821382E12, 1420.4399999999987], [1.718214E12, 2665.7499999999973], [1.7182137E12, 1272.6599999999994], [1.71821418E12, 4803.44], [1.71821388E12, 1663.42], [1.71821406E12, 3429.8599999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71821376E12, 117.0], [1.71821424E12, 338.0], [1.71821394E12, 167.0], [1.71821364E12, 124.0], [1.71821412E12, 314.5], [1.71821382E12, 123.0], [1.718214E12, 230.0], [1.7182137E12, 119.0], [1.71821418E12, 304.0], [1.71821388E12, 138.0], [1.71821406E12, 262.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71821376E12, 737.0499999999997], [1.71821424E12, 3718.2000000000003], [1.71821394E12, 1029.0], [1.71821364E12, 894.2], [1.71821412E12, 2311.0], [1.71821382E12, 732.8000000000002], [1.718214E12, 1410.5], [1.7182137E12, 983.05], [1.71821418E12, 2708.7999999999997], [1.71821388E12, 801.0], [1.71821406E12, 1785.149999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821424E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 329.0, "series": [{"data": [[2.0, 128.0], [3.0, 121.0], [4.0, 135.0], [5.0, 121.0], [6.0, 142.5], [7.0, 125.0], [8.0, 155.0], [9.0, 128.0], [10.0, 135.0], [11.0, 122.0], [12.0, 104.5], [13.0, 133.5], [14.0, 191.0], [15.0, 122.0], [16.0, 110.5], [17.0, 116.0], [18.0, 115.0], [19.0, 115.5], [20.0, 117.0], [21.0, 114.0], [22.0, 117.0], [23.0, 119.5], [24.0, 114.0], [25.0, 131.0], [26.0, 126.5], [27.0, 117.0], [28.0, 114.0], [29.0, 124.0], [30.0, 117.0], [31.0, 116.0], [33.0, 116.0], [32.0, 131.0], [34.0, 125.5], [35.0, 117.0], [36.0, 119.0], [37.0, 124.5], [39.0, 118.0], [38.0, 176.0], [40.0, 122.0], [41.0, 124.0], [43.0, 179.0], [42.0, 128.0], [45.0, 128.0], [44.0, 177.0], [47.0, 150.5], [46.0, 126.5], [49.0, 201.0], [48.0, 173.0], [51.0, 175.0], [50.0, 145.0], [53.0, 228.0], [52.0, 147.0], [54.0, 200.0], [55.0, 243.5], [57.0, 179.0], [56.0, 179.0], [59.0, 230.0], [58.0, 257.0], [61.0, 232.0], [60.0, 239.0], [63.0, 225.0], [62.0, 213.0], [65.0, 248.0], [66.0, 262.0], [64.0, 252.5], [67.0, 231.0], [70.0, 266.0], [68.0, 268.0], [71.0, 261.0], [69.0, 274.5], [73.0, 231.0], [72.0, 235.5], [74.0, 311.5], [75.0, 282.0], [79.0, 174.0], [77.0, 239.5], [78.0, 237.0], [76.0, 329.0], [80.0, 233.5], [81.0, 218.5], [82.0, 221.5], [1.0, 174.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [3.0, 0.0], [4.0, 0.0], [5.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [19.0, 0.0], [20.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0], [33.0, 0.0], [32.0, 0.0], [34.0, 0.0], [35.0, 0.0], [36.0, 0.0], [37.0, 0.0], [39.0, 0.0], [38.0, 0.0], [41.0, 0.0], [40.0, 0.0], [43.0, 0.0], [42.0, 0.0], [45.0, 0.0], [44.0, 0.0], [47.0, 0.0], [46.0, 0.0], [49.0, 0.0], [48.0, 0.0], [51.0, 0.0], [50.0, 0.0], [53.0, 0.0], [52.0, 0.0], [54.0, 0.0], [55.0, 0.0], [57.0, 0.0], [56.0, 0.0], [59.0, 0.0], [58.0, 0.0], [61.0, 0.0], [60.0, 0.0], [63.0, 0.0], [62.0, 0.0], [65.0, 0.0], [66.0, 0.0], [64.0, 0.0], [67.0, 0.0], [70.0, 0.0], [68.0, 0.0], [71.0, 0.0], [69.0, 0.0], [73.0, 0.0], [72.0, 0.0], [74.0, 0.0], [75.0, 0.0], [79.0, 0.0], [77.0, 0.0], [78.0, 0.0], [76.0, 0.0], [80.0, 0.0], [81.0, 0.0], [82.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 328.0, "series": [{"data": [[2.0, 125.0], [3.0, 118.0], [4.0, 134.0], [5.0, 119.0], [6.0, 140.5], [7.0, 123.0], [8.0, 152.0], [9.0, 124.0], [10.0, 132.0], [11.0, 118.5], [12.0, 101.5], [13.0, 131.0], [14.0, 189.0], [15.0, 119.0], [16.0, 108.5], [17.0, 114.0], [18.0, 112.0], [19.0, 112.5], [20.0, 114.0], [21.0, 112.0], [22.0, 111.0], [23.0, 117.0], [24.0, 107.0], [25.0, 129.0], [26.0, 123.0], [27.0, 115.0], [28.0, 110.0], [29.0, 120.5], [30.0, 114.0], [31.0, 113.0], [33.0, 113.0], [32.0, 128.0], [34.0, 121.5], [35.0, 114.0], [36.0, 117.0], [37.0, 120.5], [39.0, 116.0], [38.0, 174.5], [40.0, 119.0], [41.0, 121.0], [43.0, 176.0], [42.0, 126.0], [45.0, 126.5], [44.0, 175.0], [47.0, 147.5], [46.0, 125.5], [49.0, 188.0], [48.0, 166.0], [51.0, 174.0], [50.0, 140.0], [53.0, 220.0], [52.0, 144.0], [54.0, 196.5], [55.0, 241.5], [57.0, 176.0], [56.0, 168.0], [59.0, 223.0], [58.0, 252.0], [61.0, 215.0], [60.0, 234.5], [63.0, 222.0], [62.0, 210.0], [65.0, 243.0], [66.0, 259.0], [64.0, 248.0], [67.0, 228.0], [70.0, 263.0], [68.0, 250.5], [71.0, 251.5], [69.0, 270.0], [73.0, 229.0], [72.0, 231.0], [74.0, 304.5], [75.0, 277.0], [79.0, 168.5], [77.0, 237.0], [78.0, 234.0], [76.0, 328.0], [80.0, 231.5], [81.0, 215.5], [82.0, 218.5], [1.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [3.0, 0.0], [4.0, 0.0], [5.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [19.0, 0.0], [20.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0], [33.0, 0.0], [32.0, 0.0], [34.0, 0.0], [35.0, 0.0], [36.0, 0.0], [37.0, 0.0], [39.0, 0.0], [38.0, 0.0], [41.0, 0.0], [40.0, 0.0], [43.0, 0.0], [42.0, 0.0], [45.0, 0.0], [44.0, 0.0], [47.0, 0.0], [46.0, 0.0], [49.0, 0.0], [48.0, 0.0], [51.0, 0.0], [50.0, 0.0], [53.0, 0.0], [52.0, 0.0], [54.0, 0.0], [55.0, 0.0], [57.0, 0.0], [56.0, 0.0], [59.0, 0.0], [58.0, 0.0], [61.0, 0.0], [60.0, 0.0], [63.0, 0.0], [62.0, 0.0], [65.0, 0.0], [66.0, 0.0], [64.0, 0.0], [67.0, 0.0], [70.0, 0.0], [68.0, 0.0], [71.0, 0.0], [69.0, 0.0], [73.0, 0.0], [72.0, 0.0], [74.0, 0.0], [75.0, 0.0], [79.0, 0.0], [77.0, 0.0], [78.0, 0.0], [76.0, 0.0], [80.0, 0.0], [81.0, 0.0], [82.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.71821364E12, "maxY": 65.55, "series": [{"data": [[1.71821376E12, 30.516666666666666], [1.71821424E12, 2.3333333333333335], [1.71821394E12, 58.36666666666667], [1.71821364E12, 6.366666666666666], [1.71821412E12, 64.15], [1.71821382E12, 42.266666666666666], [1.718214E12, 61.083333333333336], [1.7182137E12, 18.1], [1.71821418E12, 62.3], [1.71821388E12, 51.36666666666667], [1.71821406E12, 65.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821424E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71821364E12, "maxY": 63.43333333333333, "series": [{"data": [[1.71821376E12, 29.2], [1.71821424E12, 2.7666666666666666], [1.71821394E12, 56.78333333333333], [1.71821364E12, 5.966666666666667], [1.71821412E12, 62.4], [1.71821382E12, 40.68333333333333], [1.718214E12, 59.233333333333334], [1.7182137E12, 17.3], [1.71821418E12, 60.45], [1.71821388E12, 49.63333333333333], [1.71821406E12, 63.43333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71821376E12, 1.2666666666666666], [1.71821424E12, 0.06666666666666667], [1.71821394E12, 1.6666666666666667], [1.71821364E12, 0.36666666666666664], [1.71821412E12, 1.8], [1.71821382E12, 1.4833333333333334], [1.718214E12, 1.7666666666666666], [1.7182137E12, 0.7833333333333333], [1.71821418E12, 1.7166666666666666], [1.71821388E12, 1.6], [1.71821406E12, 2.033333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821424E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71821364E12, "maxY": 63.43333333333333, "series": [{"data": [[1.71821376E12, 1.2666666666666666], [1.71821424E12, 0.06666666666666667], [1.71821394E12, 1.6666666666666667], [1.71821364E12, 0.36666666666666664], [1.71821412E12, 1.8], [1.71821382E12, 1.4833333333333334], [1.718214E12, 1.7666666666666666], [1.7182137E12, 0.7833333333333333], [1.71821418E12, 1.7166666666666666], [1.71821388E12, 1.6], [1.71821406E12, 2.033333333333333]], "isOverall": false, "label": "TitleBasics by params-failure", "isController": false}, {"data": [[1.71821376E12, 29.2], [1.71821424E12, 2.7666666666666666], [1.71821394E12, 56.78333333333333], [1.71821364E12, 5.966666666666667], [1.71821412E12, 62.4], [1.71821382E12, 40.68333333333333], [1.718214E12, 59.233333333333334], [1.7182137E12, 17.3], [1.71821418E12, 60.45], [1.71821388E12, 49.63333333333333], [1.71821406E12, 63.43333333333333]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821424E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71821364E12, "maxY": 63.43333333333333, "series": [{"data": [[1.71821376E12, 29.2], [1.71821424E12, 2.7666666666666666], [1.71821394E12, 56.78333333333333], [1.71821364E12, 5.966666666666667], [1.71821412E12, 62.4], [1.71821382E12, 40.68333333333333], [1.718214E12, 59.233333333333334], [1.7182137E12, 17.3], [1.71821418E12, 60.45], [1.71821388E12, 49.63333333333333], [1.71821406E12, 63.43333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71821376E12, 1.2666666666666666], [1.71821424E12, 0.06666666666666667], [1.71821394E12, 1.6666666666666667], [1.71821364E12, 0.36666666666666664], [1.71821412E12, 1.8], [1.71821382E12, 1.4833333333333334], [1.718214E12, 1.7666666666666666], [1.7182137E12, 0.7833333333333333], [1.71821418E12, 1.7166666666666666], [1.71821388E12, 1.6], [1.71821406E12, 2.033333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821424E12, "title": "Total Transactions Per Second"}},
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

