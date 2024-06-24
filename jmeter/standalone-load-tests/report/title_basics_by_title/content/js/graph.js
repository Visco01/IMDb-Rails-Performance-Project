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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 6116.0, "series": [{"data": [[0.0, 4.0], [0.1, 4.0], [0.2, 4.0], [0.3, 5.0], [0.4, 5.0], [0.5, 5.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 8.0], [2.3, 8.0], [2.4, 8.0], [2.5, 8.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 11.0], [6.0, 11.0], [6.1, 11.0], [6.2, 11.0], [6.3, 11.0], [6.4, 11.0], [6.5, 11.0], [6.6, 11.0], [6.7, 11.0], [6.8, 11.0], [6.9, 12.0], [7.0, 12.0], [7.1, 12.0], [7.2, 12.0], [7.3, 12.0], [7.4, 12.0], [7.5, 12.0], [7.6, 12.0], [7.7, 12.0], [7.8, 13.0], [7.9, 13.0], [8.0, 13.0], [8.1, 13.0], [8.2, 13.0], [8.3, 13.0], [8.4, 13.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 14.0], [9.1, 14.0], [9.2, 14.0], [9.3, 15.0], [9.4, 15.0], [9.5, 15.0], [9.6, 15.0], [9.7, 15.0], [9.8, 15.0], [9.9, 15.0], [10.0, 16.0], [10.1, 16.0], [10.2, 16.0], [10.3, 16.0], [10.4, 16.0], [10.5, 16.0], [10.6, 17.0], [10.7, 17.0], [10.8, 17.0], [10.9, 17.0], [11.0, 17.0], [11.1, 18.0], [11.2, 18.0], [11.3, 18.0], [11.4, 18.0], [11.5, 19.0], [11.6, 19.0], [11.7, 19.0], [11.8, 19.0], [11.9, 20.0], [12.0, 20.0], [12.1, 20.0], [12.2, 20.0], [12.3, 21.0], [12.4, 21.0], [12.5, 21.0], [12.6, 22.0], [12.7, 22.0], [12.8, 22.0], [12.9, 23.0], [13.0, 23.0], [13.1, 23.0], [13.2, 24.0], [13.3, 24.0], [13.4, 24.0], [13.5, 25.0], [13.6, 25.0], [13.7, 25.0], [13.8, 26.0], [13.9, 26.0], [14.0, 27.0], [14.1, 27.0], [14.2, 27.0], [14.3, 28.0], [14.4, 28.0], [14.5, 29.0], [14.6, 29.0], [14.7, 30.0], [14.8, 30.0], [14.9, 31.0], [15.0, 31.0], [15.1, 32.0], [15.2, 32.0], [15.3, 33.0], [15.4, 33.0], [15.5, 34.0], [15.6, 34.0], [15.7, 35.0], [15.8, 35.0], [15.9, 36.0], [16.0, 36.0], [16.1, 37.0], [16.2, 38.0], [16.3, 38.0], [16.4, 39.0], [16.5, 39.0], [16.6, 40.0], [16.7, 41.0], [16.8, 41.0], [16.9, 42.0], [17.0, 43.0], [17.1, 43.0], [17.2, 44.0], [17.3, 45.0], [17.4, 46.0], [17.5, 47.0], [17.6, 48.0], [17.7, 48.0], [17.8, 49.0], [17.9, 50.0], [18.0, 51.0], [18.1, 53.0], [18.2, 54.0], [18.3, 54.0], [18.4, 56.0], [18.5, 57.0], [18.6, 58.0], [18.7, 59.0], [18.8, 60.0], [18.9, 61.0], [19.0, 62.0], [19.1, 63.0], [19.2, 64.0], [19.3, 65.0], [19.4, 66.0], [19.5, 67.0], [19.6, 68.0], [19.7, 68.0], [19.8, 69.0], [19.9, 70.0], [20.0, 71.0], [20.1, 71.0], [20.2, 72.0], [20.3, 73.0], [20.4, 73.0], [20.5, 74.0], [20.6, 75.0], [20.7, 75.0], [20.8, 76.0], [20.9, 76.0], [21.0, 77.0], [21.1, 77.0], [21.2, 78.0], [21.3, 79.0], [21.4, 79.0], [21.5, 80.0], [21.6, 80.0], [21.7, 81.0], [21.8, 81.0], [21.9, 82.0], [22.0, 82.0], [22.1, 83.0], [22.2, 83.0], [22.3, 84.0], [22.4, 84.0], [22.5, 85.0], [22.6, 85.0], [22.7, 86.0], [22.8, 86.0], [22.9, 86.0], [23.0, 87.0], [23.1, 87.0], [23.2, 88.0], [23.3, 88.0], [23.4, 89.0], [23.5, 89.0], [23.6, 90.0], [23.7, 90.0], [23.8, 91.0], [23.9, 91.0], [24.0, 91.0], [24.1, 92.0], [24.2, 92.0], [24.3, 93.0], [24.4, 93.0], [24.5, 93.0], [24.6, 94.0], [24.7, 94.0], [24.8, 95.0], [24.9, 95.0], [25.0, 96.0], [25.1, 96.0], [25.2, 96.0], [25.3, 97.0], [25.4, 97.0], [25.5, 98.0], [25.6, 98.0], [25.7, 98.0], [25.8, 99.0], [25.9, 99.0], [26.0, 99.0], [26.1, 99.0], [26.2, 100.0], [26.3, 100.0], [26.4, 101.0], [26.5, 101.0], [26.6, 102.0], [26.7, 102.0], [26.8, 102.0], [26.9, 103.0], [27.0, 103.0], [27.1, 103.0], [27.2, 104.0], [27.3, 104.0], [27.4, 105.0], [27.5, 105.0], [27.6, 105.0], [27.7, 105.0], [27.8, 106.0], [27.9, 106.0], [28.0, 107.0], [28.1, 107.0], [28.2, 107.0], [28.3, 108.0], [28.4, 108.0], [28.5, 109.0], [28.6, 109.0], [28.7, 109.0], [28.8, 110.0], [28.9, 110.0], [29.0, 111.0], [29.1, 111.0], [29.2, 111.0], [29.3, 112.0], [29.4, 112.0], [29.5, 113.0], [29.6, 113.0], [29.7, 114.0], [29.8, 114.0], [29.9, 114.0], [30.0, 115.0], [30.1, 115.0], [30.2, 115.0], [30.3, 116.0], [30.4, 116.0], [30.5, 117.0], [30.6, 117.0], [30.7, 117.0], [30.8, 118.0], [30.9, 118.0], [31.0, 119.0], [31.1, 119.0], [31.2, 119.0], [31.3, 120.0], [31.4, 120.0], [31.5, 121.0], [31.6, 121.0], [31.7, 122.0], [31.8, 122.0], [31.9, 123.0], [32.0, 123.0], [32.1, 123.0], [32.2, 124.0], [32.3, 124.0], [32.4, 125.0], [32.5, 125.0], [32.6, 126.0], [32.7, 126.0], [32.8, 127.0], [32.9, 127.0], [33.0, 128.0], [33.1, 128.0], [33.2, 129.0], [33.3, 129.0], [33.4, 130.0], [33.5, 131.0], [33.6, 131.0], [33.7, 132.0], [33.8, 132.0], [33.9, 133.0], [34.0, 133.0], [34.1, 134.0], [34.2, 135.0], [34.3, 135.0], [34.4, 136.0], [34.5, 136.0], [34.6, 137.0], [34.7, 138.0], [34.8, 138.0], [34.9, 139.0], [35.0, 140.0], [35.1, 140.0], [35.2, 141.0], [35.3, 142.0], [35.4, 143.0], [35.5, 143.0], [35.6, 144.0], [35.7, 145.0], [35.8, 146.0], [35.9, 146.0], [36.0, 147.0], [36.1, 148.0], [36.2, 148.0], [36.3, 149.0], [36.4, 149.0], [36.5, 150.0], [36.6, 151.0], [36.7, 152.0], [36.8, 152.0], [36.9, 153.0], [37.0, 154.0], [37.1, 154.0], [37.2, 155.0], [37.3, 156.0], [37.4, 156.0], [37.5, 157.0], [37.6, 158.0], [37.7, 159.0], [37.8, 159.0], [37.9, 160.0], [38.0, 160.0], [38.1, 161.0], [38.2, 161.0], [38.3, 162.0], [38.4, 162.0], [38.5, 163.0], [38.6, 164.0], [38.7, 164.0], [38.8, 165.0], [38.9, 165.0], [39.0, 166.0], [39.1, 166.0], [39.2, 167.0], [39.3, 168.0], [39.4, 168.0], [39.5, 168.0], [39.6, 169.0], [39.7, 169.0], [39.8, 170.0], [39.9, 171.0], [40.0, 171.0], [40.1, 171.0], [40.2, 172.0], [40.3, 172.0], [40.4, 173.0], [40.5, 173.0], [40.6, 174.0], [40.7, 174.0], [40.8, 174.0], [40.9, 175.0], [41.0, 175.0], [41.1, 176.0], [41.2, 176.0], [41.3, 177.0], [41.4, 177.0], [41.5, 177.0], [41.6, 178.0], [41.7, 178.0], [41.8, 179.0], [41.9, 179.0], [42.0, 180.0], [42.1, 180.0], [42.2, 181.0], [42.3, 181.0], [42.4, 181.0], [42.5, 182.0], [42.6, 182.0], [42.7, 183.0], [42.8, 183.0], [42.9, 184.0], [43.0, 184.0], [43.1, 184.0], [43.2, 185.0], [43.3, 185.0], [43.4, 185.0], [43.5, 186.0], [43.6, 186.0], [43.7, 187.0], [43.8, 187.0], [43.9, 187.0], [44.0, 188.0], [44.1, 188.0], [44.2, 189.0], [44.3, 189.0], [44.4, 189.0], [44.5, 190.0], [44.6, 190.0], [44.7, 190.0], [44.8, 191.0], [44.9, 191.0], [45.0, 191.0], [45.1, 192.0], [45.2, 192.0], [45.3, 193.0], [45.4, 193.0], [45.5, 194.0], [45.6, 194.0], [45.7, 194.0], [45.8, 195.0], [45.9, 195.0], [46.0, 195.0], [46.1, 196.0], [46.2, 196.0], [46.3, 196.0], [46.4, 197.0], [46.5, 197.0], [46.6, 198.0], [46.7, 198.0], [46.8, 198.0], [46.9, 199.0], [47.0, 199.0], [47.1, 199.0], [47.2, 200.0], [47.3, 200.0], [47.4, 200.0], [47.5, 201.0], [47.6, 201.0], [47.7, 201.0], [47.8, 202.0], [47.9, 202.0], [48.0, 203.0], [48.1, 203.0], [48.2, 203.0], [48.3, 204.0], [48.4, 204.0], [48.5, 204.0], [48.6, 205.0], [48.7, 205.0], [48.8, 206.0], [48.9, 206.0], [49.0, 206.0], [49.1, 207.0], [49.2, 207.0], [49.3, 208.0], [49.4, 208.0], [49.5, 208.0], [49.6, 209.0], [49.7, 209.0], [49.8, 210.0], [49.9, 210.0], [50.0, 211.0], [50.1, 211.0], [50.2, 211.0], [50.3, 212.0], [50.4, 212.0], [50.5, 212.0], [50.6, 213.0], [50.7, 213.0], [50.8, 214.0], [50.9, 214.0], [51.0, 215.0], [51.1, 215.0], [51.2, 216.0], [51.3, 216.0], [51.4, 217.0], [51.5, 217.0], [51.6, 218.0], [51.7, 218.0], [51.8, 219.0], [51.9, 219.0], [52.0, 220.0], [52.1, 220.0], [52.2, 221.0], [52.3, 221.0], [52.4, 222.0], [52.5, 222.0], [52.6, 223.0], [52.7, 223.0], [52.8, 224.0], [52.9, 224.0], [53.0, 225.0], [53.1, 225.0], [53.2, 226.0], [53.3, 227.0], [53.4, 227.0], [53.5, 228.0], [53.6, 228.0], [53.7, 229.0], [53.8, 229.0], [53.9, 230.0], [54.0, 231.0], [54.1, 231.0], [54.2, 232.0], [54.3, 232.0], [54.4, 233.0], [54.5, 234.0], [54.6, 235.0], [54.7, 235.0], [54.8, 236.0], [54.9, 236.0], [55.0, 237.0], [55.1, 237.0], [55.2, 238.0], [55.3, 239.0], [55.4, 240.0], [55.5, 240.0], [55.6, 241.0], [55.7, 241.0], [55.8, 242.0], [55.9, 243.0], [56.0, 244.0], [56.1, 244.0], [56.2, 245.0], [56.3, 245.0], [56.4, 246.0], [56.5, 247.0], [56.6, 247.0], [56.7, 248.0], [56.8, 249.0], [56.9, 250.0], [57.0, 250.0], [57.1, 251.0], [57.2, 252.0], [57.3, 252.0], [57.4, 253.0], [57.5, 253.0], [57.6, 254.0], [57.7, 255.0], [57.8, 256.0], [57.9, 256.0], [58.0, 257.0], [58.1, 258.0], [58.2, 258.0], [58.3, 259.0], [58.4, 259.0], [58.5, 260.0], [58.6, 260.0], [58.7, 261.0], [58.8, 262.0], [58.9, 262.0], [59.0, 263.0], [59.1, 263.0], [59.2, 264.0], [59.3, 265.0], [59.4, 265.0], [59.5, 266.0], [59.6, 267.0], [59.7, 267.0], [59.8, 268.0], [59.9, 268.0], [60.0, 269.0], [60.1, 269.0], [60.2, 270.0], [60.3, 270.0], [60.4, 271.0], [60.5, 271.0], [60.6, 272.0], [60.7, 272.0], [60.8, 273.0], [60.9, 273.0], [61.0, 274.0], [61.1, 274.0], [61.2, 275.0], [61.3, 275.0], [61.4, 276.0], [61.5, 276.0], [61.6, 277.0], [61.7, 277.0], [61.8, 278.0], [61.9, 278.0], [62.0, 279.0], [62.1, 279.0], [62.2, 280.0], [62.3, 280.0], [62.4, 281.0], [62.5, 281.0], [62.6, 282.0], [62.7, 282.0], [62.8, 283.0], [62.9, 284.0], [63.0, 284.0], [63.1, 284.0], [63.2, 285.0], [63.3, 285.0], [63.4, 286.0], [63.5, 286.0], [63.6, 287.0], [63.7, 287.0], [63.8, 288.0], [63.9, 288.0], [64.0, 289.0], [64.1, 289.0], [64.2, 290.0], [64.3, 290.0], [64.4, 290.0], [64.5, 291.0], [64.6, 291.0], [64.7, 292.0], [64.8, 292.0], [64.9, 293.0], [65.0, 293.0], [65.1, 294.0], [65.2, 294.0], [65.3, 295.0], [65.4, 295.0], [65.5, 296.0], [65.6, 296.0], [65.7, 297.0], [65.8, 298.0], [65.9, 298.0], [66.0, 299.0], [66.1, 299.0], [66.2, 300.0], [66.3, 300.0], [66.4, 301.0], [66.5, 301.0], [66.6, 302.0], [66.7, 302.0], [66.8, 303.0], [66.9, 303.0], [67.0, 304.0], [67.1, 305.0], [67.2, 305.0], [67.3, 305.0], [67.4, 306.0], [67.5, 307.0], [67.6, 307.0], [67.7, 308.0], [67.8, 309.0], [67.9, 309.0], [68.0, 310.0], [68.1, 310.0], [68.2, 311.0], [68.3, 312.0], [68.4, 312.0], [68.5, 313.0], [68.6, 314.0], [68.7, 314.0], [68.8, 315.0], [68.9, 316.0], [69.0, 316.0], [69.1, 317.0], [69.2, 318.0], [69.3, 318.0], [69.4, 319.0], [69.5, 320.0], [69.6, 321.0], [69.7, 322.0], [69.8, 322.0], [69.9, 323.0], [70.0, 324.0], [70.1, 325.0], [70.2, 326.0], [70.3, 327.0], [70.4, 327.0], [70.5, 328.0], [70.6, 329.0], [70.7, 330.0], [70.8, 332.0], [70.9, 333.0], [71.0, 334.0], [71.1, 336.0], [71.2, 337.0], [71.3, 338.0], [71.4, 339.0], [71.5, 340.0], [71.6, 341.0], [71.7, 342.0], [71.8, 344.0], [71.9, 345.0], [72.0, 346.0], [72.1, 347.0], [72.2, 349.0], [72.3, 350.0], [72.4, 351.0], [72.5, 353.0], [72.6, 354.0], [72.7, 355.0], [72.8, 356.0], [72.9, 357.0], [73.0, 358.0], [73.1, 359.0], [73.2, 360.0], [73.3, 362.0], [73.4, 363.0], [73.5, 364.0], [73.6, 365.0], [73.7, 366.0], [73.8, 368.0], [73.9, 369.0], [74.0, 370.0], [74.1, 371.0], [74.2, 372.0], [74.3, 373.0], [74.4, 374.0], [74.5, 375.0], [74.6, 376.0], [74.7, 377.0], [74.8, 378.0], [74.9, 379.0], [75.0, 380.0], [75.1, 381.0], [75.2, 382.0], [75.3, 383.0], [75.4, 385.0], [75.5, 385.0], [75.6, 386.0], [75.7, 387.0], [75.8, 389.0], [75.9, 390.0], [76.0, 391.0], [76.1, 392.0], [76.2, 393.0], [76.3, 394.0], [76.4, 395.0], [76.5, 396.0], [76.6, 397.0], [76.7, 398.0], [76.8, 399.0], [76.9, 400.0], [77.0, 401.0], [77.1, 402.0], [77.2, 403.0], [77.3, 404.0], [77.4, 405.0], [77.5, 406.0], [77.6, 407.0], [77.7, 409.0], [77.8, 410.0], [77.9, 410.0], [78.0, 412.0], [78.1, 413.0], [78.2, 415.0], [78.3, 416.0], [78.4, 418.0], [78.5, 419.0], [78.6, 421.0], [78.7, 422.0], [78.8, 424.0], [78.9, 426.0], [79.0, 427.0], [79.1, 429.0], [79.2, 432.0], [79.3, 434.0], [79.4, 436.0], [79.5, 439.0], [79.6, 441.0], [79.7, 443.0], [79.8, 445.0], [79.9, 448.0], [80.0, 450.0], [80.1, 453.0], [80.2, 455.0], [80.3, 457.0], [80.4, 460.0], [80.5, 462.0], [80.6, 464.0], [80.7, 466.0], [80.8, 468.0], [80.9, 470.0], [81.0, 473.0], [81.1, 475.0], [81.2, 478.0], [81.3, 480.0], [81.4, 482.0], [81.5, 485.0], [81.6, 487.0], [81.7, 489.0], [81.8, 491.0], [81.9, 493.0], [82.0, 495.0], [82.1, 497.0], [82.2, 499.0], [82.3, 502.0], [82.4, 504.0], [82.5, 506.0], [82.6, 510.0], [82.7, 513.0], [82.8, 515.0], [82.9, 518.0], [83.0, 521.0], [83.1, 524.0], [83.2, 528.0], [83.3, 531.0], [83.4, 534.0], [83.5, 539.0], [83.6, 543.0], [83.7, 547.0], [83.8, 551.0], [83.9, 555.0], [84.0, 560.0], [84.1, 564.0], [84.2, 567.0], [84.3, 571.0], [84.4, 575.0], [84.5, 578.0], [84.6, 581.0], [84.7, 584.0], [84.8, 587.0], [84.9, 591.0], [85.0, 594.0], [85.1, 597.0], [85.2, 601.0], [85.3, 604.0], [85.4, 607.0], [85.5, 610.0], [85.6, 615.0], [85.7, 619.0], [85.8, 623.0], [85.9, 628.0], [86.0, 635.0], [86.1, 640.0], [86.2, 648.0], [86.3, 651.0], [86.4, 657.0], [86.5, 663.0], [86.6, 669.0], [86.7, 675.0], [86.8, 679.0], [86.9, 684.0], [87.0, 688.0], [87.1, 692.0], [87.2, 696.0], [87.3, 702.0], [87.4, 706.0], [87.5, 712.0], [87.6, 718.0], [87.7, 724.0], [87.8, 730.0], [87.9, 737.0], [88.0, 743.0], [88.1, 753.0], [88.2, 761.0], [88.3, 770.0], [88.4, 779.0], [88.5, 787.0], [88.6, 796.0], [88.7, 804.0], [88.8, 810.0], [88.9, 814.0], [89.0, 821.0], [89.1, 828.0], [89.2, 835.0], [89.3, 844.0], [89.4, 852.0], [89.5, 859.0], [89.6, 868.0], [89.7, 876.0], [89.8, 884.0], [89.9, 889.0], [90.0, 897.0], [90.1, 903.0], [90.2, 909.0], [90.3, 915.0], [90.4, 920.0], [90.5, 926.0], [90.6, 940.0], [90.7, 951.0], [90.8, 962.0], [90.9, 970.0], [91.0, 981.0], [91.1, 989.0], [91.2, 996.0], [91.3, 1001.0], [91.4, 1010.0], [91.5, 1020.0], [91.6, 1033.0], [91.7, 1046.0], [91.8, 1063.0], [91.9, 1079.0], [92.0, 1093.0], [92.1, 1103.0], [92.2, 1117.0], [92.3, 1135.0], [92.4, 1149.0], [92.5, 1167.0], [92.6, 1181.0], [92.7, 1193.0], [92.8, 1208.0], [92.9, 1230.0], [93.0, 1259.0], [93.1, 1281.0], [93.2, 1301.0], [93.3, 1316.0], [93.4, 1329.0], [93.5, 1350.0], [93.6, 1369.0], [93.7, 1386.0], [93.8, 1401.0], [93.9, 1414.0], [94.0, 1434.0], [94.1, 1458.0], [94.2, 1481.0], [94.3, 1504.0], [94.4, 1530.0], [94.5, 1556.0], [94.6, 1579.0], [94.7, 1595.0], [94.8, 1606.0], [94.9, 1621.0], [95.0, 1633.0], [95.1, 1651.0], [95.2, 1663.0], [95.3, 1679.0], [95.4, 1696.0], [95.5, 1709.0], [95.6, 1729.0], [95.7, 1752.0], [95.8, 1774.0], [95.9, 1791.0], [96.0, 1805.0], [96.1, 1816.0], [96.2, 1837.0], [96.3, 1859.0], [96.4, 1882.0], [96.5, 1894.0], [96.6, 1912.0], [96.7, 1931.0], [96.8, 1958.0], [96.9, 1986.0], [97.0, 2006.0], [97.1, 2018.0], [97.2, 2038.0], [97.3, 2064.0], [97.4, 2083.0], [97.5, 2103.0], [97.6, 2123.0], [97.7, 2159.0], [97.8, 2187.0], [97.9, 2213.0], [98.0, 2232.0], [98.1, 2254.0], [98.2, 2267.0], [98.3, 2286.0], [98.4, 2299.0], [98.5, 2309.0], [98.6, 2326.0], [98.7, 2350.0], [98.8, 2370.0], [98.9, 2387.0], [99.0, 2398.0], [99.1, 2413.0], [99.2, 2436.0], [99.3, 2458.0], [99.4, 2489.0], [99.5, 2511.0], [99.6, 2551.0], [99.7, 2624.0], [99.8, 2754.0], [99.9, 3057.0], [100.0, 6116.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 9853.0, "series": [{"data": [[0.0, 9853.0], [600.0, 795.0], [700.0, 520.0], [800.0, 530.0], [900.0, 459.0], [1000.0, 304.0], [1100.0, 254.0], [1200.0, 170.0], [1300.0, 226.0], [1400.0, 183.0], [1500.0, 174.0], [100.0, 7938.0], [1600.0, 260.0], [1700.0, 205.0], [1800.0, 212.0], [1900.0, 168.0], [2000.0, 192.0], [2100.0, 135.0], [2300.0, 235.0], [2200.0, 213.0], [2400.0, 161.0], [2500.0, 79.0], [2600.0, 31.0], [2800.0, 17.0], [2700.0, 29.0], [2900.0, 11.0], [3000.0, 5.0], [3100.0, 6.0], [200.0, 7178.0], [3300.0, 4.0], [3200.0, 4.0], [3400.0, 4.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 3.0], [3900.0, 2.0], [4000.0, 3.0], [4600.0, 2.0], [300.0, 4039.0], [6100.0, 1.0], [400.0, 2017.0], [500.0, 1116.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2159.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 31042.0, "series": [{"data": [[0.0, 31042.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4542.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2159.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 85.05289052890535, "minX": 1.71922596E12, "maxY": 100.0, "series": [{"data": [[1.71922596E12, 85.05289052890535], [1.71922614E12, 100.0], [1.71922644E12, 100.0], [1.71922608E12, 100.0], [1.71922626E12, 100.0], [1.71922656E12, 97.1584385763491], [1.7192262E12, 100.0], [1.71922638E12, 100.0], [1.71922632E12, 100.0], [1.7192265E12, 100.0], [1.71922602E12, 100.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922656E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 95.92307692307693, "minX": 1.0, "maxY": 2414.0, "series": [{"data": [[2.0, 2385.0], [3.0, 2386.0], [4.0, 2396.0], [5.0, 2410.0], [6.0, 2414.0], [7.0, 1235.5], [8.0, 1223.0], [9.0, 1252.5], [10.0, 1256.0], [11.0, 1285.0], [12.0, 1279.0], [13.0, 872.3333333333334], [14.0, 858.0], [15.0, 854.6666666666666], [16.0, 845.3333333333334], [17.0, 826.6666666666666], [18.0, 853.3333333333334], [19.0, 659.75], [20.0, 643.5], [21.0, 642.25], [22.0, 639.25], [23.0, 647.25], [24.0, 655.5], [25.0, 673.25], [26.0, 440.66666666666663], [27.0, 520.8], [28.0, 525.4], [29.0, 520.4], [30.0, 519.6], [31.0, 502.2], [32.0, 383.85714285714283], [33.0, 424.3333333333333], [34.0, 437.6666666666667], [35.0, 423.0], [36.0, 434.0], [37.0, 411.5], [38.0, 442.875], [39.0, 377.57142857142856], [40.0, 420.1428571428571], [41.0, 418.5714285714286], [42.0, 424.42857142857144], [43.0, 367.57142857142856], [44.0, 349.22222222222223], [45.0, 315.125], [46.0, 377.625], [47.0, 301.75], [48.0, 350.0], [49.0, 312.0], [50.0, 475.0], [51.0, 692.0], [52.0, 304.2222222222222], [53.0, 317.6666666666667], [54.0, 309.44444444444446], [55.0, 341.6666666666667], [56.0, 339.28571428571433], [57.0, 618.25], [58.0, 194.3846153846154], [59.0, 241.1764705882353], [60.0, 246.79999999999998], [61.0, 247.2], [62.0, 341.25], [63.0, 695.5], [64.0, 259.9230769230769], [65.0, 178.3125], [66.0, 164.39999999999998], [67.0, 264.3636363636364], [68.0, 260.0], [69.0, 535.8], [70.0, 242.0], [71.0, 145.47619047619048], [72.0, 183.8125], [73.0, 184.08333333333334], [74.0, 234.44444444444446], [75.0, 305.0], [76.0, 242.83333333333331], [77.0, 198.06666666666666], [78.0, 252.78571428571428], [79.0, 179.68181818181816], [80.0, 210.4], [81.0, 276.44444444444446], [82.0, 751.6666666666666], [83.0, 336.875], [84.0, 256.6666666666667], [85.0, 205.75], [86.0, 416.1428571428571], [87.0, 289.4137931034483], [88.0, 540.0], [89.0, 306.50000000000006], [90.0, 127.75], [91.0, 250.0], [92.0, 235.04761904761907], [93.0, 180.22222222222223], [94.0, 253.76470588235287], [95.0, 239.94117647058823], [96.0, 124.27777777777777], [97.0, 115.57142857142857], [98.0, 95.92307692307693], [99.0, 155.52631578947367], [100.0, 368.47795930531936], [1.0, 2376.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[99.22491587844154, 367.68227220942003]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4504.9, "minX": 1.71922596E12, "maxY": 309027.26666666666, "series": [{"data": [[1.71922596E12, 119092.36666666667], [1.71922614E12, 243418.25], [1.71922644E12, 264805.15], [1.71922608E12, 292071.0333333333], [1.71922626E12, 300128.15], [1.71922656E12, 132894.6], [1.7192262E12, 248195.55], [1.71922638E12, 261776.05], [1.71922632E12, 242083.26666666666], [1.7192265E12, 300901.73333333334], [1.71922602E12, 309027.26666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71922596E12, 4504.9], [1.71922614E12, 11158.0], [1.71922644E12, 9798.5], [1.71922608E12, 11520.35], [1.71922626E12, 10618.433333333332], [1.71922656E12, 4833.133333333333], [1.7192262E12, 11186.483333333334], [1.71922638E12, 9874.1], [1.71922632E12, 10110.966666666667], [1.7192265E12, 9488.883333333333], [1.71922602E12, 11485.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922656E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 114.26752767527664, "minX": 1.71922596E12, "maxY": 549.1601607347872, "series": [{"data": [[1.71922596E12, 114.26752767527664], [1.71922614E12, 273.8644652538185], [1.71922644E12, 495.3623801466449], [1.71922608E12, 239.4154508490796], [1.71922626E12, 384.8428835489835], [1.71922656E12, 549.1601607347872], [1.7192262E12, 301.4934999999995], [1.71922638E12, 481.72352941176416], [1.71922632E12, 428.2669929309408], [1.7192265E12, 534.8405671296299], [1.71922602E12, 258.45352525006126]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922656E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 114.26260762607629, "minX": 1.71922596E12, "maxY": 549.1567164179096, "series": [{"data": [[1.71922596E12, 114.26260762607629], [1.71922614E12, 273.8624938393297], [1.71922644E12, 495.3465877044555], [1.71922608E12, 239.41090648170376], [1.71922626E12, 384.83813044626265], [1.71922656E12, 549.1567164179096], [1.7192262E12, 301.48950000000013], [1.71922638E12, 481.7176470588231], [1.71922632E12, 428.2648178357802], [1.7192265E12, 534.8330439814818], [1.71922602E12, 258.4510856306414]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922656E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71922596E12, "maxY": 0.03259532595325956, "series": [{"data": [[1.71922596E12, 0.03259532595325956], [1.71922614E12, 0.0064070970921636244], [1.71922644E12, 0.005640157924421887], [1.71922608E12, 0.005979430758191825], [1.71922626E12, 0.0060734090308951745], [1.71922656E12, 0.0], [1.7192262E12, 0.005499999999999999], [1.71922638E12, 0.008403361344537803], [1.71922632E12, 0.006525285481239799], [1.7192265E12, 0.007233796296296292], [1.71922602E12, 0.0039033910709929216]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922656E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.71922596E12, "maxY": 6116.0, "series": [{"data": [[1.71922596E12, 389.0], [1.71922614E12, 1955.0], [1.71922644E12, 3122.0], [1.71922608E12, 2343.0], [1.71922626E12, 4097.0], [1.71922656E12, 3057.0], [1.7192262E12, 2214.0], [1.71922638E12, 3943.0], [1.71922632E12, 6116.0], [1.7192265E12, 3033.0], [1.71922602E12, 1952.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71922596E12, 4.0], [1.71922614E12, 4.0], [1.71922644E12, 4.0], [1.71922608E12, 4.0], [1.71922626E12, 4.0], [1.71922656E12, 4.0], [1.7192262E12, 4.0], [1.71922638E12, 4.0], [1.71922632E12, 4.0], [1.7192265E12, 4.0], [1.71922602E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71922596E12, 264.29999999999995], [1.71922614E12, 726.0999999999999], [1.71922644E12, 1728.500000000001], [1.71922608E12, 504.60000000000036], [1.71922626E12, 941.6000000000008], [1.71922656E12, 1991.100000000001], [1.7192262E12, 644.8000000000002], [1.71922638E12, 1748.6000000000004], [1.71922632E12, 1647.2999999999997], [1.7192265E12, 1644.6000000000004], [1.71922602E12, 531.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71922596E12, 344.9200000000001], [1.71922614E12, 1299.8199999999997], [1.71922644E12, 2534.2999999999975], [1.71922608E12, 1061.9000000000015], [1.71922626E12, 1932.9599999999991], [1.71922656E12, 2707.1099999999988], [1.7192262E12, 1529.8699999999972], [1.71922638E12, 2489.87], [1.71922632E12, 2536.7300000000005], [1.7192265E12, 2370.2899999999995], [1.71922602E12, 854.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71922596E12, 98.0], [1.71922614E12, 180.0], [1.71922644E12, 240.0], [1.71922608E12, 195.0], [1.71922626E12, 227.0], [1.71922656E12, 276.5], [1.7192262E12, 221.0], [1.71922638E12, 204.5], [1.71922632E12, 204.0], [1.7192265E12, 273.5], [1.71922602E12, 212.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71922596E12, 298.64999999999986], [1.71922614E12, 902.0499999999997], [1.71922644E12, 2214.5999999999985], [1.71922608E12, 670.7999999999993], [1.71922626E12, 1346.9999999999995], [1.71922656E12, 2466.0], [1.7192262E12, 1004.9499999999998], [1.71922638E12, 2196.45], [1.71922632E12, 2045.0999999999995], [1.7192265E12, 2077.0], [1.71922602E12, 646.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922656E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11.0, "minX": 2.0, "maxY": 1706.0, "series": [{"data": [[2.0, 545.5], [3.0, 428.0], [4.0, 355.0], [5.0, 706.0], [6.0, 490.0], [7.0, 904.0], [8.0, 288.5], [9.0, 1343.5], [10.0, 902.5], [11.0, 1518.0], [12.0, 558.0], [13.0, 437.0], [16.0, 897.5], [17.0, 973.0], [18.0, 1108.0], [20.0, 1355.5], [21.0, 1188.5], [22.0, 765.0], [23.0, 1190.0], [24.0, 1284.0], [25.0, 263.0], [26.0, 141.5], [27.0, 484.0], [28.0, 260.0], [29.0, 737.0], [30.0, 1039.0], [31.0, 11.0], [32.0, 110.0], [33.0, 527.5], [35.0, 191.0], [34.0, 558.0], [37.0, 395.0], [36.0, 1052.0], [39.0, 13.0], [38.0, 393.0], [41.0, 542.0], [40.0, 375.5], [43.0, 606.0], [42.0, 1706.0], [44.0, 973.0], [45.0, 221.0], [46.0, 153.0], [47.0, 1028.0], [49.0, 189.0], [48.0, 304.5], [51.0, 949.0], [50.0, 725.5], [53.0, 551.5], [52.0, 237.0], [55.0, 296.0], [54.0, 1061.0], [57.0, 195.5], [56.0, 331.5], [58.0, 236.0], [59.0, 308.0], [60.0, 184.0], [61.0, 282.0], [63.0, 272.0], [62.0, 188.5], [66.0, 286.5], [64.0, 200.0], [67.0, 204.0], [65.0, 261.0], [71.0, 141.0], [68.0, 228.0], [70.0, 164.0], [69.0, 264.0], [75.0, 191.0], [74.0, 168.0], [73.0, 198.0], [72.0, 234.0], [76.0, 193.0], [77.0, 121.0], [78.0, 152.0], [79.0, 137.0], [83.0, 160.0], [81.0, 183.0], [80.0, 203.5], [82.0, 225.0], [86.0, 154.5], [85.0, 195.5], [84.0, 257.0], [87.0, 214.0], [89.0, 118.0], [88.0, 187.5], [91.0, 127.0], [90.0, 218.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11.0, "minX": 2.0, "maxY": 1706.0, "series": [{"data": [[2.0, 545.5], [3.0, 428.0], [4.0, 355.0], [5.0, 706.0], [6.0, 490.0], [7.0, 904.0], [8.0, 288.5], [9.0, 1343.5], [10.0, 902.5], [11.0, 1518.0], [12.0, 558.0], [13.0, 437.0], [16.0, 897.5], [17.0, 973.0], [18.0, 1108.0], [20.0, 1355.5], [21.0, 1188.5], [22.0, 765.0], [23.0, 1190.0], [24.0, 1284.0], [25.0, 263.0], [26.0, 141.5], [27.0, 484.0], [28.0, 260.0], [29.0, 737.0], [30.0, 1039.0], [31.0, 11.0], [32.0, 110.0], [33.0, 527.5], [35.0, 191.0], [34.0, 558.0], [37.0, 395.0], [36.0, 1051.5], [39.0, 13.0], [38.0, 393.0], [41.0, 542.0], [40.0, 375.5], [43.0, 606.0], [42.0, 1706.0], [44.0, 973.0], [45.0, 221.0], [46.0, 153.0], [47.0, 1028.0], [49.0, 189.0], [48.0, 304.5], [51.0, 949.0], [50.0, 725.5], [53.0, 551.5], [52.0, 237.0], [55.0, 296.0], [54.0, 1061.0], [57.0, 195.5], [56.0, 331.5], [58.0, 236.0], [59.0, 308.0], [60.0, 184.0], [61.0, 282.0], [63.0, 272.0], [62.0, 188.5], [66.0, 286.5], [64.0, 200.0], [67.0, 204.0], [65.0, 261.0], [71.0, 141.0], [68.0, 228.0], [70.0, 164.0], [69.0, 264.0], [75.0, 191.0], [74.0, 168.0], [73.0, 198.0], [72.0, 234.0], [76.0, 193.0], [77.0, 121.0], [78.0, 152.0], [79.0, 137.0], [83.0, 160.0], [81.0, 183.0], [80.0, 203.5], [82.0, 225.0], [86.0, 154.5], [85.0, 195.5], [84.0, 257.0], [87.0, 214.0], [89.0, 118.0], [88.0, 187.5], [91.0, 127.0], [90.0, 218.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 27.266666666666666, "minX": 1.71922596E12, "maxY": 69.23333333333333, "series": [{"data": [[1.71922596E12, 27.266666666666666], [1.71922614E12, 67.9], [1.71922644E12, 58.88333333333333], [1.71922608E12, 69.23333333333333], [1.71922626E12, 62.96666666666667], [1.71922656E12, 28.966666666666665], [1.7192262E12, 66.55], [1.71922638E12, 59.483333333333334], [1.71922632E12, 61.53333333333333], [1.7192265E12, 57.666666666666664], [1.71922602E12, 68.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922656E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 27.1, "minX": 1.71922596E12, "maxY": 69.68333333333334, "series": [{"data": [[1.71922596E12, 27.1], [1.71922614E12, 67.63333333333334], [1.71922644E12, 59.1], [1.71922608E12, 69.68333333333334], [1.71922626E12, 63.11666666666667], [1.71922656E12, 29.033333333333335], [1.7192262E12, 66.66666666666667], [1.71922638E12, 59.5], [1.71922632E12, 61.3], [1.7192265E12, 57.6], [1.71922602E12, 68.31666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71922656E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 27.1, "minX": 1.71922596E12, "maxY": 69.68333333333334, "series": [{"data": [[1.71922596E12, 27.1], [1.71922614E12, 67.63333333333334], [1.71922644E12, 59.1], [1.71922608E12, 69.68333333333334], [1.71922626E12, 63.11666666666667], [1.71922656E12, 29.033333333333335], [1.7192262E12, 66.66666666666667], [1.71922638E12, 59.5], [1.71922632E12, 61.3], [1.7192265E12, 57.6], [1.71922602E12, 68.31666666666666]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922656E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 27.1, "minX": 1.71922596E12, "maxY": 69.68333333333334, "series": [{"data": [[1.71922596E12, 27.1], [1.71922614E12, 67.63333333333334], [1.71922644E12, 59.1], [1.71922608E12, 69.68333333333334], [1.71922626E12, 63.11666666666667], [1.71922656E12, 29.033333333333335], [1.7192262E12, 66.66666666666667], [1.71922638E12, 59.5], [1.71922632E12, 61.3], [1.7192265E12, 57.6], [1.71922602E12, 68.31666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71922656E12, "title": "Total Transactions Per Second"}},
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

