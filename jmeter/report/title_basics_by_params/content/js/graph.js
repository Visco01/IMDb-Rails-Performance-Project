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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 8223.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 86.0], [2.8, 88.0], [2.9, 89.0], [3.0, 90.0], [3.1, 91.0], [3.2, 91.0], [3.3, 92.0], [3.4, 92.0], [3.5, 93.0], [3.6, 93.0], [3.7, 93.0], [3.8, 94.0], [3.9, 94.0], [4.0, 95.0], [4.1, 95.0], [4.2, 95.0], [4.3, 96.0], [4.4, 96.0], [4.5, 96.0], [4.6, 97.0], [4.7, 97.0], [4.8, 97.0], [4.9, 98.0], [5.0, 98.0], [5.1, 98.0], [5.2, 99.0], [5.3, 99.0], [5.4, 99.0], [5.5, 100.0], [5.6, 100.0], [5.7, 100.0], [5.8, 101.0], [5.9, 101.0], [6.0, 101.0], [6.1, 102.0], [6.2, 102.0], [6.3, 102.0], [6.4, 103.0], [6.5, 103.0], [6.6, 103.0], [6.7, 104.0], [6.8, 104.0], [6.9, 104.0], [7.0, 105.0], [7.1, 105.0], [7.2, 105.0], [7.3, 106.0], [7.4, 106.0], [7.5, 106.0], [7.6, 107.0], [7.7, 107.0], [7.8, 107.0], [7.9, 107.0], [8.0, 108.0], [8.1, 108.0], [8.2, 108.0], [8.3, 109.0], [8.4, 109.0], [8.5, 109.0], [8.6, 110.0], [8.7, 110.0], [8.8, 110.0], [8.9, 111.0], [9.0, 111.0], [9.1, 111.0], [9.2, 112.0], [9.3, 112.0], [9.4, 112.0], [9.5, 113.0], [9.6, 113.0], [9.7, 114.0], [9.8, 114.0], [9.9, 114.0], [10.0, 115.0], [10.1, 115.0], [10.2, 115.0], [10.3, 116.0], [10.4, 116.0], [10.5, 116.0], [10.6, 117.0], [10.7, 117.0], [10.8, 117.0], [10.9, 117.0], [11.0, 118.0], [11.1, 118.0], [11.2, 119.0], [11.3, 119.0], [11.4, 119.0], [11.5, 120.0], [11.6, 120.0], [11.7, 120.0], [11.8, 120.0], [11.9, 121.0], [12.0, 121.0], [12.1, 121.0], [12.2, 122.0], [12.3, 122.0], [12.4, 122.0], [12.5, 123.0], [12.6, 123.0], [12.7, 123.0], [12.8, 124.0], [12.9, 124.0], [13.0, 124.0], [13.1, 124.0], [13.2, 125.0], [13.3, 125.0], [13.4, 125.0], [13.5, 126.0], [13.6, 126.0], [13.7, 126.0], [13.8, 126.0], [13.9, 127.0], [14.0, 127.0], [14.1, 127.0], [14.2, 128.0], [14.3, 128.0], [14.4, 128.0], [14.5, 129.0], [14.6, 129.0], [14.7, 129.0], [14.8, 130.0], [14.9, 130.0], [15.0, 130.0], [15.1, 130.0], [15.2, 131.0], [15.3, 131.0], [15.4, 131.0], [15.5, 132.0], [15.6, 132.0], [15.7, 132.0], [15.8, 132.0], [15.9, 133.0], [16.0, 133.0], [16.1, 133.0], [16.2, 133.0], [16.3, 134.0], [16.4, 134.0], [16.5, 134.0], [16.6, 134.0], [16.7, 135.0], [16.8, 135.0], [16.9, 135.0], [17.0, 135.0], [17.1, 136.0], [17.2, 136.0], [17.3, 136.0], [17.4, 136.0], [17.5, 137.0], [17.6, 137.0], [17.7, 137.0], [17.8, 137.0], [17.9, 138.0], [18.0, 138.0], [18.1, 138.0], [18.2, 138.0], [18.3, 139.0], [18.4, 139.0], [18.5, 139.0], [18.6, 139.0], [18.7, 139.0], [18.8, 140.0], [18.9, 140.0], [19.0, 140.0], [19.1, 140.0], [19.2, 141.0], [19.3, 141.0], [19.4, 141.0], [19.5, 141.0], [19.6, 142.0], [19.7, 142.0], [19.8, 142.0], [19.9, 143.0], [20.0, 143.0], [20.1, 143.0], [20.2, 143.0], [20.3, 144.0], [20.4, 144.0], [20.5, 144.0], [20.6, 144.0], [20.7, 145.0], [20.8, 145.0], [20.9, 145.0], [21.0, 146.0], [21.1, 146.0], [21.2, 146.0], [21.3, 146.0], [21.4, 147.0], [21.5, 147.0], [21.6, 147.0], [21.7, 147.0], [21.8, 148.0], [21.9, 148.0], [22.0, 148.0], [22.1, 148.0], [22.2, 149.0], [22.3, 149.0], [22.4, 149.0], [22.5, 149.0], [22.6, 149.0], [22.7, 150.0], [22.8, 150.0], [22.9, 150.0], [23.0, 150.0], [23.1, 151.0], [23.2, 151.0], [23.3, 151.0], [23.4, 152.0], [23.5, 152.0], [23.6, 152.0], [23.7, 152.0], [23.8, 153.0], [23.9, 153.0], [24.0, 153.0], [24.1, 153.0], [24.2, 154.0], [24.3, 154.0], [24.4, 154.0], [24.5, 155.0], [24.6, 155.0], [24.7, 155.0], [24.8, 155.0], [24.9, 156.0], [25.0, 156.0], [25.1, 156.0], [25.2, 157.0], [25.3, 157.0], [25.4, 157.0], [25.5, 157.0], [25.6, 158.0], [25.7, 158.0], [25.8, 158.0], [25.9, 159.0], [26.0, 159.0], [26.1, 159.0], [26.2, 159.0], [26.3, 160.0], [26.4, 160.0], [26.5, 160.0], [26.6, 161.0], [26.7, 161.0], [26.8, 161.0], [26.9, 161.0], [27.0, 162.0], [27.1, 162.0], [27.2, 162.0], [27.3, 163.0], [27.4, 163.0], [27.5, 163.0], [27.6, 163.0], [27.7, 164.0], [27.8, 164.0], [27.9, 164.0], [28.0, 165.0], [28.1, 165.0], [28.2, 165.0], [28.3, 166.0], [28.4, 166.0], [28.5, 166.0], [28.6, 167.0], [28.7, 167.0], [28.8, 167.0], [28.9, 167.0], [29.0, 168.0], [29.1, 168.0], [29.2, 168.0], [29.3, 169.0], [29.4, 169.0], [29.5, 169.0], [29.6, 170.0], [29.7, 170.0], [29.8, 170.0], [29.9, 171.0], [30.0, 171.0], [30.1, 171.0], [30.2, 172.0], [30.3, 172.0], [30.4, 172.0], [30.5, 172.0], [30.6, 173.0], [30.7, 173.0], [30.8, 173.0], [30.9, 174.0], [31.0, 174.0], [31.1, 174.0], [31.2, 175.0], [31.3, 175.0], [31.4, 175.0], [31.5, 176.0], [31.6, 176.0], [31.7, 176.0], [31.8, 177.0], [31.9, 177.0], [32.0, 178.0], [32.1, 178.0], [32.2, 178.0], [32.3, 179.0], [32.4, 179.0], [32.5, 179.0], [32.6, 180.0], [32.7, 180.0], [32.8, 181.0], [32.9, 181.0], [33.0, 181.0], [33.1, 182.0], [33.2, 182.0], [33.3, 182.0], [33.4, 183.0], [33.5, 183.0], [33.6, 183.0], [33.7, 184.0], [33.8, 184.0], [33.9, 184.0], [34.0, 185.0], [34.1, 185.0], [34.2, 185.0], [34.3, 186.0], [34.4, 186.0], [34.5, 187.0], [34.6, 187.0], [34.7, 187.0], [34.8, 188.0], [34.9, 188.0], [35.0, 189.0], [35.1, 189.0], [35.2, 189.0], [35.3, 190.0], [35.4, 190.0], [35.5, 190.0], [35.6, 191.0], [35.7, 191.0], [35.8, 192.0], [35.9, 192.0], [36.0, 192.0], [36.1, 193.0], [36.2, 193.0], [36.3, 193.0], [36.4, 194.0], [36.5, 194.0], [36.6, 195.0], [36.7, 195.0], [36.8, 195.0], [36.9, 196.0], [37.0, 196.0], [37.1, 197.0], [37.2, 197.0], [37.3, 197.0], [37.4, 198.0], [37.5, 198.0], [37.6, 198.0], [37.7, 199.0], [37.8, 199.0], [37.9, 200.0], [38.0, 200.0], [38.1, 200.0], [38.2, 201.0], [38.3, 201.0], [38.4, 201.0], [38.5, 202.0], [38.6, 202.0], [38.7, 202.0], [38.8, 203.0], [38.9, 203.0], [39.0, 204.0], [39.1, 204.0], [39.2, 204.0], [39.3, 205.0], [39.4, 205.0], [39.5, 206.0], [39.6, 206.0], [39.7, 206.0], [39.8, 207.0], [39.9, 207.0], [40.0, 207.0], [40.1, 208.0], [40.2, 208.0], [40.3, 209.0], [40.4, 209.0], [40.5, 209.0], [40.6, 210.0], [40.7, 210.0], [40.8, 211.0], [40.9, 211.0], [41.0, 211.0], [41.1, 212.0], [41.2, 212.0], [41.3, 212.0], [41.4, 213.0], [41.5, 213.0], [41.6, 213.0], [41.7, 214.0], [41.8, 214.0], [41.9, 215.0], [42.0, 215.0], [42.1, 215.0], [42.2, 216.0], [42.3, 216.0], [42.4, 216.0], [42.5, 217.0], [42.6, 217.0], [42.7, 217.0], [42.8, 218.0], [42.9, 218.0], [43.0, 218.0], [43.1, 219.0], [43.2, 219.0], [43.3, 219.0], [43.4, 220.0], [43.5, 220.0], [43.6, 221.0], [43.7, 221.0], [43.8, 221.0], [43.9, 222.0], [44.0, 222.0], [44.1, 222.0], [44.2, 223.0], [44.3, 223.0], [44.4, 223.0], [44.5, 224.0], [44.6, 224.0], [44.7, 225.0], [44.8, 225.0], [44.9, 225.0], [45.0, 225.0], [45.1, 226.0], [45.2, 226.0], [45.3, 227.0], [45.4, 227.0], [45.5, 227.0], [45.6, 228.0], [45.7, 228.0], [45.8, 228.0], [45.9, 229.0], [46.0, 229.0], [46.1, 230.0], [46.2, 230.0], [46.3, 230.0], [46.4, 231.0], [46.5, 231.0], [46.6, 232.0], [46.7, 232.0], [46.8, 232.0], [46.9, 233.0], [47.0, 233.0], [47.1, 234.0], [47.2, 234.0], [47.3, 234.0], [47.4, 235.0], [47.5, 235.0], [47.6, 235.0], [47.7, 236.0], [47.8, 236.0], [47.9, 237.0], [48.0, 237.0], [48.1, 237.0], [48.2, 238.0], [48.3, 238.0], [48.4, 238.0], [48.5, 239.0], [48.6, 239.0], [48.7, 239.0], [48.8, 240.0], [48.9, 240.0], [49.0, 241.0], [49.1, 241.0], [49.2, 242.0], [49.3, 242.0], [49.4, 242.0], [49.5, 243.0], [49.6, 243.0], [49.7, 243.0], [49.8, 244.0], [49.9, 244.0], [50.0, 245.0], [50.1, 245.0], [50.2, 245.0], [50.3, 246.0], [50.4, 246.0], [50.5, 247.0], [50.6, 247.0], [50.7, 248.0], [50.8, 248.0], [50.9, 248.0], [51.0, 249.0], [51.1, 249.0], [51.2, 249.0], [51.3, 250.0], [51.4, 250.0], [51.5, 251.0], [51.6, 251.0], [51.7, 251.0], [51.8, 252.0], [51.9, 252.0], [52.0, 252.0], [52.1, 253.0], [52.2, 253.0], [52.3, 254.0], [52.4, 254.0], [52.5, 254.0], [52.6, 255.0], [52.7, 255.0], [52.8, 255.0], [52.9, 256.0], [53.0, 256.0], [53.1, 257.0], [53.2, 257.0], [53.3, 258.0], [53.4, 258.0], [53.5, 258.0], [53.6, 259.0], [53.7, 259.0], [53.8, 260.0], [53.9, 260.0], [54.0, 260.0], [54.1, 261.0], [54.2, 261.0], [54.3, 262.0], [54.4, 262.0], [54.5, 263.0], [54.6, 263.0], [54.7, 263.0], [54.8, 264.0], [54.9, 264.0], [55.0, 265.0], [55.1, 265.0], [55.2, 266.0], [55.3, 266.0], [55.4, 267.0], [55.5, 267.0], [55.6, 268.0], [55.7, 268.0], [55.8, 268.0], [55.9, 269.0], [56.0, 269.0], [56.1, 270.0], [56.2, 270.0], [56.3, 270.0], [56.4, 271.0], [56.5, 271.0], [56.6, 272.0], [56.7, 272.0], [56.8, 273.0], [56.9, 273.0], [57.0, 273.0], [57.1, 274.0], [57.2, 274.0], [57.3, 275.0], [57.4, 275.0], [57.5, 276.0], [57.6, 276.0], [57.7, 277.0], [57.8, 277.0], [57.9, 277.0], [58.0, 278.0], [58.1, 278.0], [58.2, 279.0], [58.3, 279.0], [58.4, 279.0], [58.5, 280.0], [58.6, 280.0], [58.7, 281.0], [58.8, 281.0], [58.9, 282.0], [59.0, 282.0], [59.1, 283.0], [59.2, 283.0], [59.3, 283.0], [59.4, 284.0], [59.5, 284.0], [59.6, 285.0], [59.7, 285.0], [59.8, 286.0], [59.9, 286.0], [60.0, 287.0], [60.1, 287.0], [60.2, 288.0], [60.3, 288.0], [60.4, 289.0], [60.5, 289.0], [60.6, 290.0], [60.7, 290.0], [60.8, 291.0], [60.9, 291.0], [61.0, 292.0], [61.1, 292.0], [61.2, 293.0], [61.3, 293.0], [61.4, 293.0], [61.5, 294.0], [61.6, 294.0], [61.7, 295.0], [61.8, 295.0], [61.9, 296.0], [62.0, 296.0], [62.1, 297.0], [62.2, 297.0], [62.3, 298.0], [62.4, 298.0], [62.5, 299.0], [62.6, 299.0], [62.7, 300.0], [62.8, 301.0], [62.9, 301.0], [63.0, 302.0], [63.1, 302.0], [63.2, 303.0], [63.3, 303.0], [63.4, 304.0], [63.5, 304.0], [63.6, 305.0], [63.7, 305.0], [63.8, 306.0], [63.9, 306.0], [64.0, 307.0], [64.1, 308.0], [64.2, 308.0], [64.3, 309.0], [64.4, 309.0], [64.5, 310.0], [64.6, 310.0], [64.7, 311.0], [64.8, 311.0], [64.9, 312.0], [65.0, 312.0], [65.1, 313.0], [65.2, 313.0], [65.3, 314.0], [65.4, 315.0], [65.5, 315.0], [65.6, 316.0], [65.7, 316.0], [65.8, 317.0], [65.9, 317.0], [66.0, 318.0], [66.1, 319.0], [66.2, 319.0], [66.3, 320.0], [66.4, 320.0], [66.5, 321.0], [66.6, 322.0], [66.7, 322.0], [66.8, 323.0], [66.9, 324.0], [67.0, 324.0], [67.1, 325.0], [67.2, 326.0], [67.3, 326.0], [67.4, 327.0], [67.5, 327.0], [67.6, 328.0], [67.7, 329.0], [67.8, 329.0], [67.9, 330.0], [68.0, 330.0], [68.1, 331.0], [68.2, 331.0], [68.3, 332.0], [68.4, 333.0], [68.5, 333.0], [68.6, 334.0], [68.7, 335.0], [68.8, 335.0], [68.9, 336.0], [69.0, 337.0], [69.1, 338.0], [69.2, 338.0], [69.3, 339.0], [69.4, 340.0], [69.5, 340.0], [69.6, 341.0], [69.7, 342.0], [69.8, 342.0], [69.9, 343.0], [70.0, 343.0], [70.1, 344.0], [70.2, 345.0], [70.3, 345.0], [70.4, 346.0], [70.5, 347.0], [70.6, 348.0], [70.7, 348.0], [70.8, 349.0], [70.9, 350.0], [71.0, 351.0], [71.1, 351.0], [71.2, 352.0], [71.3, 353.0], [71.4, 354.0], [71.5, 354.0], [71.6, 355.0], [71.7, 356.0], [71.8, 356.0], [71.9, 357.0], [72.0, 358.0], [72.1, 358.0], [72.2, 359.0], [72.3, 360.0], [72.4, 361.0], [72.5, 361.0], [72.6, 362.0], [72.7, 363.0], [72.8, 364.0], [72.9, 364.0], [73.0, 365.0], [73.1, 366.0], [73.2, 367.0], [73.3, 367.0], [73.4, 368.0], [73.5, 369.0], [73.6, 370.0], [73.7, 371.0], [73.8, 372.0], [73.9, 373.0], [74.0, 373.0], [74.1, 374.0], [74.2, 375.0], [74.3, 376.0], [74.4, 377.0], [74.5, 378.0], [74.6, 379.0], [74.7, 379.0], [74.8, 380.0], [74.9, 381.0], [75.0, 382.0], [75.1, 383.0], [75.2, 384.0], [75.3, 385.0], [75.4, 386.0], [75.5, 387.0], [75.6, 388.0], [75.7, 388.0], [75.8, 390.0], [75.9, 391.0], [76.0, 391.0], [76.1, 393.0], [76.2, 394.0], [76.3, 395.0], [76.4, 396.0], [76.5, 397.0], [76.6, 398.0], [76.7, 399.0], [76.8, 400.0], [76.9, 400.0], [77.0, 402.0], [77.1, 402.0], [77.2, 403.0], [77.3, 405.0], [77.4, 405.0], [77.5, 407.0], [77.6, 408.0], [77.7, 409.0], [77.8, 410.0], [77.9, 411.0], [78.0, 412.0], [78.1, 413.0], [78.2, 415.0], [78.3, 416.0], [78.4, 417.0], [78.5, 418.0], [78.6, 419.0], [78.7, 420.0], [78.8, 421.0], [78.9, 422.0], [79.0, 424.0], [79.1, 425.0], [79.2, 426.0], [79.3, 427.0], [79.4, 429.0], [79.5, 430.0], [79.6, 431.0], [79.7, 432.0], [79.8, 433.0], [79.9, 435.0], [80.0, 436.0], [80.1, 437.0], [80.2, 439.0], [80.3, 440.0], [80.4, 442.0], [80.5, 443.0], [80.6, 445.0], [80.7, 446.0], [80.8, 447.0], [80.9, 449.0], [81.0, 450.0], [81.1, 451.0], [81.2, 452.0], [81.3, 454.0], [81.4, 455.0], [81.5, 456.0], [81.6, 458.0], [81.7, 459.0], [81.8, 461.0], [81.9, 463.0], [82.0, 464.0], [82.1, 465.0], [82.2, 467.0], [82.3, 469.0], [82.4, 470.0], [82.5, 472.0], [82.6, 474.0], [82.7, 476.0], [82.8, 477.0], [82.9, 479.0], [83.0, 480.0], [83.1, 482.0], [83.2, 484.0], [83.3, 486.0], [83.4, 487.0], [83.5, 489.0], [83.6, 491.0], [83.7, 494.0], [83.8, 496.0], [83.9, 498.0], [84.0, 499.0], [84.1, 501.0], [84.2, 503.0], [84.3, 505.0], [84.4, 508.0], [84.5, 510.0], [84.6, 512.0], [84.7, 515.0], [84.8, 517.0], [84.9, 519.0], [85.0, 521.0], [85.1, 523.0], [85.2, 526.0], [85.3, 528.0], [85.4, 530.0], [85.5, 533.0], [85.6, 535.0], [85.7, 538.0], [85.8, 540.0], [85.9, 542.0], [86.0, 545.0], [86.1, 547.0], [86.2, 550.0], [86.3, 553.0], [86.4, 555.0], [86.5, 557.0], [86.6, 560.0], [86.7, 563.0], [86.8, 565.0], [86.9, 568.0], [87.0, 571.0], [87.1, 574.0], [87.2, 578.0], [87.3, 581.0], [87.4, 584.0], [87.5, 587.0], [87.6, 590.0], [87.7, 593.0], [87.8, 596.0], [87.9, 600.0], [88.0, 604.0], [88.1, 607.0], [88.2, 611.0], [88.3, 614.0], [88.4, 617.0], [88.5, 621.0], [88.6, 625.0], [88.7, 629.0], [88.8, 633.0], [88.9, 637.0], [89.0, 641.0], [89.1, 646.0], [89.2, 650.0], [89.3, 654.0], [89.4, 659.0], [89.5, 664.0], [89.6, 668.0], [89.7, 673.0], [89.8, 678.0], [89.9, 683.0], [90.0, 687.0], [90.1, 692.0], [90.2, 699.0], [90.3, 704.0], [90.4, 711.0], [90.5, 717.0], [90.6, 724.0], [90.7, 732.0], [90.8, 739.0], [90.9, 747.0], [91.0, 758.0], [91.1, 764.0], [91.2, 773.0], [91.3, 782.0], [91.4, 796.0], [91.5, 807.0], [91.6, 819.0], [91.7, 833.0], [91.8, 850.0], [91.9, 866.0], [92.0, 883.0], [92.1, 904.0], [92.2, 930.0], [92.3, 970.0], [92.4, 1000.0], [92.5, 1039.0], [92.6, 1083.0], [92.7, 1133.0], [92.8, 1172.0], [92.9, 1220.0], [93.0, 1266.0], [93.1, 1312.0], [93.2, 1356.0], [93.3, 1414.0], [93.4, 1469.0], [93.5, 1531.0], [93.6, 1591.0], [93.7, 1643.0], [93.8, 1716.0], [93.9, 1791.0], [94.0, 1879.0], [94.1, 1946.0], [94.2, 2019.0], [94.3, 2084.0], [94.4, 2132.0], [94.5, 2197.0], [94.6, 2256.0], [94.7, 2302.0], [94.8, 2359.0], [94.9, 2412.0], [95.0, 2455.0], [95.1, 2499.0], [95.2, 2555.0], [95.3, 2603.0], [95.4, 2652.0], [95.5, 2711.0], [95.6, 2762.0], [95.7, 2818.0], [95.8, 2896.0], [95.9, 2952.0], [96.0, 3032.0], [96.1, 3105.0], [96.2, 3211.0], [96.3, 3349.0], [96.4, 3525.0], [96.5, 3690.0], [96.6, 3808.0], [96.7, 3999.0], [96.8, 4186.0], [96.9, 4307.0], [97.0, 4442.0], [97.1, 4558.0], [97.2, 4653.0], [97.3, 4748.0], [97.4, 4830.0], [97.5, 4898.0], [97.6, 4971.0], [97.7, 5053.0], [97.8, 5105.0], [97.9, 5185.0], [98.0, 5252.0], [98.1, 5315.0], [98.2, 5387.0], [98.3, 5449.0], [98.4, 5499.0], [98.5, 5582.0], [98.6, 5644.0], [98.7, 5721.0], [98.8, 5795.0], [98.9, 5857.0], [99.0, 5936.0], [99.1, 6005.0], [99.2, 6082.0], [99.3, 6163.0], [99.4, 6260.0], [99.5, 6339.0], [99.6, 6451.0], [99.7, 6577.0], [99.8, 6741.0], [99.9, 6928.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 18918.0, "series": [{"data": [[0.0, 3181.0], [600.0, 1353.0], [700.0, 707.0], [800.0, 382.0], [900.0, 186.0], [1000.0, 141.0], [1100.0, 125.0], [1200.0, 122.0], [1300.0, 122.0], [1400.0, 99.0], [1500.0, 101.0], [1600.0, 90.0], [1700.0, 78.0], [1800.0, 74.0], [1900.0, 74.0], [2000.0, 107.0], [2100.0, 95.0], [2300.0, 107.0], [2200.0, 111.0], [2400.0, 129.0], [2500.0, 113.0], [2600.0, 112.0], [2700.0, 105.0], [2800.0, 84.0], [2900.0, 88.0], [3000.0, 78.0], [3100.0, 53.0], [3200.0, 46.0], [3300.0, 42.0], [3400.0, 24.0], [3500.0, 40.0], [3700.0, 50.0], [3600.0, 36.0], [3800.0, 33.0], [3900.0, 30.0], [4000.0, 37.0], [4100.0, 25.0], [4200.0, 50.0], [4300.0, 43.0], [4600.0, 62.0], [4400.0, 45.0], [4500.0, 56.0], [4700.0, 66.0], [4800.0, 82.0], [4900.0, 75.0], [5100.0, 81.0], [5000.0, 94.0], [5200.0, 91.0], [5300.0, 81.0], [5400.0, 103.0], [5500.0, 75.0], [5600.0, 81.0], [5800.0, 89.0], [5700.0, 81.0], [6000.0, 73.0], [5900.0, 77.0], [6100.0, 71.0], [6300.0, 63.0], [6200.0, 66.0], [6500.0, 38.0], [6400.0, 52.0], [6600.0, 35.0], [6700.0, 33.0], [6800.0, 34.0], [6900.0, 18.0], [7000.0, 12.0], [7100.0, 10.0], [7400.0, 4.0], [7200.0, 6.0], [7300.0, 5.0], [7500.0, 4.0], [7600.0, 2.0], [7900.0, 2.0], [8000.0, 1.0], [8200.0, 1.0], [100.0, 18918.0], [200.0, 14419.0], [300.0, 8273.0], [400.0, 4218.0], [500.0, 2258.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1551.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 47493.0, "series": [{"data": [[0.0, 47493.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5460.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3824.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1551.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.068403908794787, "minX": 1.71810684E12, "maxY": 60.0, "series": [{"data": [[1.71810762E12, 60.0], [1.71810792E12, 60.0], [1.71810696E12, 15.274312541918185], [1.71810798E12, 60.0], [1.71810702E12, 21.185968284478626], [1.71810732E12, 50.99752475247515], [1.71810786E12, 60.0], [1.7181069E12, 9.371492704826029], [1.7181072E12, 39.024798326859916], [1.71810726E12, 45.01102839812526], [1.71810756E12, 60.0], [1.71810714E12, 32.987222595830595], [1.71810744E12, 60.0], [1.7181075E12, 60.0], [1.7181078E12, 60.0], [1.71810684E12, 4.068403908794787], [1.71810738E12, 56.977531131564675], [1.71810768E12, 60.0], [1.71810774E12, 60.0], [1.71810804E12, 56.15613382899629], [1.71810708E12, 27.05491105955145]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71810804E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 150.39622641509433, "minX": 1.0, "maxY": 668.4548721574209, "series": [{"data": [[2.0, 164.2], [3.0, 150.39622641509433], [4.0, 165.91304347826082], [5.0, 218.23456790123467], [6.0, 198.08163265306118], [7.0, 155.384], [8.0, 221.18110236220474], [9.0, 201.6369863013698], [10.0, 205.4259259259259], [11.0, 199.23497267759564], [12.0, 201.3692307692309], [13.0, 217.02857142857138], [14.0, 222.87499999999994], [15.0, 238.14937759336107], [16.0, 162.1862068965518], [17.0, 228.5927272727272], [18.0, 213.97359735973595], [19.0, 221.56507936507938], [20.0, 191.26984126984135], [21.0, 235.43304843304838], [22.0, 187.74270557029166], [23.0, 191.24050632911394], [24.0, 183.24630541871923], [25.0, 230.41625615763536], [26.0, 213.80522565320672], [27.0, 209.50456621004562], [28.0, 236.62614678899092], [29.0, 239.00430107526873], [30.0, 234.12391304347818], [31.0, 223.70993914807295], [32.0, 244.9265306122447], [33.0, 250.9123505976093], [34.0, 253.62404580152673], [35.0, 245.11787072243357], [36.0, 367.5498938428874], [37.0, 274.664874551971], [38.0, 290.50465549348235], [39.0, 269.0568383658971], [40.0, 296.88194444444423], [41.0, 328.24647887323914], [42.0, 308.41455160744505], [43.0, 326.1958762886596], [44.0, 291.1392000000001], [45.0, 355.0539629005059], [46.0, 368.5719120135363], [47.0, 357.3247172859451], [48.0, 372.9498381877024], [49.0, 399.272878535774], [50.0, 440.58952702702646], [51.0, 403.5622047244094], [52.0, 480.3904923599323], [53.0, 401.46874999999994], [54.0, 474.4606741573036], [55.0, 497.1578073089704], [56.0, 435.27027027027], [57.0, 627.4106529209612], [58.0, 487.83833333333365], [59.0, 554.225505443235], [60.0, 668.4548721574209], [1.0, 251.93333333333334]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[50.66019750377185, 523.3575126868728]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 801.7, "minX": 1.71810684E12, "maxY": 481897.7, "series": [{"data": [[1.71810762E12, 432948.86666666664], [1.71810792E12, 435867.15], [1.71810696E12, 195386.5], [1.71810798E12, 449026.9666666667], [1.71810702E12, 273413.9166666667], [1.71810732E12, 474470.51666666666], [1.71810786E12, 400366.4], [1.7181069E12, 117023.41666666667], [1.7181072E12, 439892.88333333336], [1.71810726E12, 474537.25], [1.71810756E12, 452279.0333333333], [1.71810714E12, 389902.18333333335], [1.71810744E12, 478851.15], [1.7181075E12, 461942.7166666667], [1.7181078E12, 429161.73333333334], [1.71810684E12, 39148.85], [1.71810738E12, 481897.7], [1.71810768E12, 425139.6], [1.71810774E12, 412543.48333333334], [1.71810804E12, 34422.71666666667], [1.71810708E12, 339371.9166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71810762E12, 9808.383333333333], [1.71810792E12, 9878.466666666667], [1.71810696E12, 4341.316666666667], [1.71810798E12, 10157.566666666668], [1.71810702E12, 6116.283333333334], [1.71810732E12, 10708.816666666668], [1.71810786E12, 9102.583333333334], [1.7181069E12, 2593.15], [1.7181072E12, 9876.7], [1.71810726E12, 10685.9], [1.71810756E12, 10246.9], [1.71810714E12, 8766.616666666667], [1.71810744E12, 10787.583333333334], [1.7181075E12, 10431.633333333333], [1.7181078E12, 9721.65], [1.71810684E12, 878.7166666666667], [1.71810738E12, 10877.016666666666], [1.71810768E12, 9625.3], [1.71810774E12, 9366.633333333333], [1.71810804E12, 801.7], [1.71810708E12, 7605.716666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71810804E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 176.67426710097703, "minX": 1.71810684E12, "maxY": 923.6728624535307, "series": [{"data": [[1.71810762E12, 670.0878787878767], [1.71810792E12, 684.1884014423052], [1.71810696E12, 196.386988598256], [1.71810798E12, 631.667635095874], [1.71810702E12, 198.92407496395975], [1.71810732E12, 427.2095709570954], [1.71810786E12, 752.6945620319117], [1.7181069E12, 196.93714927048262], [1.7181072E12, 299.2315506423665], [1.71810726E12, 338.87979046043586], [1.71810756E12, 637.8061253972845], [1.71810714E12, 247.2353732347007], [1.71810744E12, 575.5901369863018], [1.7181075E12, 608.1420873511065], [1.7181078E12, 693.5275061124681], [1.71810684E12, 176.67426710097703], [1.71810738E12, 513.093123984841], [1.71810768E12, 713.1846916640833], [1.71810774E12, 751.0736975857678], [1.71810804E12, 923.6728624535307], [1.71810708E12, 218.53016241299284]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71810804E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 174.34201954397386, "minX": 1.71810684E12, "maxY": 916.940520446096, "series": [{"data": [[1.71810762E12, 667.348787878789], [1.71810792E12, 681.5354567307694], [1.71810696E12, 193.85714285714266], [1.71810798E12, 628.7719349215571], [1.71810702E12, 195.71167707832782], [1.71810732E12, 423.783003300331], [1.71810786E12, 750.0097688049477], [1.7181069E12, 194.3299663299665], [1.7181072E12, 296.4822228861669], [1.71810726E12, 335.7849462365591], [1.71810756E12, 634.8699797746301], [1.71810714E12, 244.4751176866173], [1.71810744E12, 572.6117808219159], [1.7181075E12, 605.1761202495741], [1.7181078E12, 690.7338019559912], [1.71810684E12, 174.34201954397386], [1.71810738E12, 510.2899296155922], [1.71810768E12, 710.4642082429513], [1.71810774E12, 748.2843074968242], [1.71810804E12, 916.940520446096], [1.71810708E12, 215.4764114462493]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71810804E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5197853789403084, "minX": 1.71810684E12, "maxY": 1.6983758700696057, "series": [{"data": [[1.71810762E12, 1.002424242424244], [1.71810792E12, 0.8365384615384602], [1.71810696E12, 0.5197853789403084], [1.71810798E12, 0.7245787332945959], [1.71810702E12, 0.620855358000962], [1.71810732E12, 0.6762926292629259], [1.71810786E12, 0.9426896776294372], [1.7181069E12, 0.6161616161616157], [1.7181072E12, 0.9223184941738887], [1.71810726E12, 0.577060931899644], [1.71810756E12, 0.777520947702976], [1.71810714E12, 0.7555480833893744], [1.71810744E12, 0.7619178082191774], [1.7181075E12, 1.0130459444129318], [1.7181078E12, 0.9180929095354511], [1.71810684E12, 0.8208469055374591], [1.71810738E12, 0.7152138603140223], [1.71810768E12, 0.8462968701580404], [1.71810774E12, 0.8548284625158821], [1.71810804E12, 1.089219330855019], [1.71810708E12, 1.6983758700696057]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71810804E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.71810684E12, "maxY": 8223.0, "series": [{"data": [[1.71810762E12, 7436.0], [1.71810792E12, 7040.0], [1.71810696E12, 1914.0], [1.71810798E12, 6496.0], [1.71810702E12, 1675.0], [1.71810732E12, 4299.0], [1.71810786E12, 8223.0], [1.7181069E12, 1658.0], [1.7181072E12, 2771.0], [1.71810726E12, 3335.0], [1.71810756E12, 7037.0], [1.71810714E12, 2300.0], [1.71810744E12, 6033.0], [1.7181075E12, 6597.0], [1.7181078E12, 7113.0], [1.71810684E12, 1882.0], [1.71810738E12, 6084.0], [1.71810768E12, 7093.0], [1.71810774E12, 7250.0], [1.71810804E12, 6962.0], [1.71810708E12, 2085.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71810762E12, 112.0], [1.71810792E12, 113.0], [1.71810696E12, 83.0], [1.71810798E12, 116.0], [1.71810702E12, 84.0], [1.71810732E12, 95.0], [1.71810786E12, 114.0], [1.7181069E12, 80.0], [1.7181072E12, 88.0], [1.71810726E12, 92.0], [1.71810756E12, 115.0], [1.71810714E12, 84.0], [1.71810744E12, 115.0], [1.7181075E12, 115.0], [1.7181078E12, 114.0], [1.71810684E12, 85.0], [1.71810738E12, 106.0], [1.71810768E12, 111.0], [1.71810774E12, 117.0], [1.71810804E12, 118.0], [1.71810708E12, 84.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71810762E12, 786.6000000000022], [1.71810792E12, 800.2000000000007], [1.71810696E12, 503.6000000000022], [1.71810798E12, 741.2999999999997], [1.71810702E12, 463.70000000000095], [1.71810732E12, 600.0], [1.71810786E12, 1403.4000000000115], [1.7181069E12, 544.1000000000001], [1.7181072E12, 556.4000000000005], [1.71810726E12, 538.0], [1.71810756E12, 747.6000000000004], [1.71810714E12, 459.60000000000036], [1.71810744E12, 755.8000000000011], [1.7181075E12, 830.0], [1.7181078E12, 847.5], [1.71810684E12, 206.0], [1.71810738E12, 644.0], [1.71810768E12, 888.4000000000005], [1.71810774E12, 1054.400000000006], [1.71810804E12, 3249.5], [1.71810708E12, 491.39999999999964]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71810762E12, 6427.01], [1.71810792E12, 6369.439999999999], [1.71810696E12, 1320.6800000000005], [1.71810798E12, 5804.059999999999], [1.71810702E12, 1372.3499999999995], [1.71810732E12, 3218.9599999999964], [1.71810786E12, 7010.88], [1.7181069E12, 1302.0], [1.7181072E12, 2226.0], [1.71810726E12, 2617.4000000000005], [1.71810756E12, 6046.76], [1.71810714E12, 1912.9500000000016], [1.71810744E12, 5094.759999999998], [1.7181075E12, 5384.150000000001], [1.7181078E12, 6478.049999999993], [1.71810684E12, 1323.7000000000007], [1.71810738E12, 4697.870000000001], [1.71810768E12, 6286.78], [1.71810774E12, 6610.559999999999], [1.71810804E12, 6818.250000000003], [1.71810708E12, 1619.6400000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71810762E12, 297.0], [1.71810792E12, 292.0], [1.71810696E12, 117.0], [1.71810798E12, 298.0], [1.71810702E12, 118.0], [1.71810732E12, 267.0], [1.71810786E12, 279.0], [1.7181069E12, 122.0], [1.7181072E12, 170.0], [1.71810726E12, 201.0], [1.71810756E12, 291.0], [1.71810714E12, 142.0], [1.71810744E12, 314.0], [1.7181075E12, 300.5], [1.7181078E12, 274.5], [1.71810684E12, 125.0], [1.71810738E12, 280.5], [1.71810768E12, 300.0], [1.71810774E12, 300.0], [1.71810804E12, 294.0], [1.71810708E12, 130.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71810762E12, 4374.649999999994], [1.71810792E12, 4762.499999999996], [1.71810696E12, 891.7999999999993], [1.71810798E12, 4439.299999999998], [1.71810702E12, 820.3499999999999], [1.71810732E12, 1914.3999999999983], [1.71810786E12, 5453.1], [1.7181069E12, 888.1499999999992], [1.7181072E12, 1283.6999999999998], [1.71810726E12, 1372.0], [1.71810756E12, 4086.9499999999953], [1.71810714E12, 933.3000000000002], [1.71810744E12, 2680.7499999999995], [1.7181075E12, 3039.899999999998], [1.7181078E12, 5081.5], [1.71810684E12, 554.0], [1.71810738E12, 2608.5999999999985], [1.71810768E12, 5128.35], [1.71810774E12, 5481.0], [1.71810804E12, 5676.25], [1.71810708E12, 774.7999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71810804E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 712.0, "series": [{"data": [[2.0, 144.0], [3.0, 121.0], [4.0, 128.0], [5.0, 120.0], [6.0, 132.0], [7.0, 124.5], [8.0, 130.0], [9.0, 712.0], [10.0, 127.5], [11.0, 133.0], [12.0, 120.0], [13.0, 117.5], [14.0, 110.0], [15.0, 125.0], [16.0, 129.5], [17.0, 133.0], [18.0, 143.0], [19.0, 168.0], [20.0, 112.0], [21.0, 131.5], [22.0, 117.0], [23.0, 113.0], [24.0, 116.0], [25.0, 133.5], [26.0, 128.0], [27.0, 111.0], [28.0, 121.0], [29.0, 108.0], [30.0, 112.0], [31.0, 123.0], [32.0, 125.0], [33.0, 124.0], [34.0, 142.0], [35.0, 129.0], [36.0, 138.0], [37.0, 127.0], [38.0, 154.0], [39.0, 135.0], [40.0, 153.0], [41.0, 188.0], [42.0, 152.0], [43.0, 165.5], [45.0, 203.0], [44.0, 175.0], [46.0, 249.0], [47.0, 215.5], [48.0, 265.0], [49.0, 248.0], [50.0, 253.0], [51.0, 269.0], [52.0, 250.0], [53.0, 270.0], [54.0, 272.0], [55.0, 255.0], [57.0, 278.0], [56.0, 268.0], [59.0, 278.0], [58.0, 270.0], [60.0, 283.0], [61.0, 269.0], [62.0, 276.0], [63.0, 290.0], [64.0, 259.0], [66.0, 253.0], [65.0, 257.0], [67.0, 254.0], [70.0, 236.0], [69.0, 245.0], [68.0, 277.0], [71.0, 302.0], [74.0, 260.0], [72.0, 275.0], [75.0, 220.0], [73.0, 255.0], [78.0, 237.0], [77.0, 272.5], [76.0, 277.0], [79.0, 292.0], [82.0, 177.5], [81.0, 286.0], [1.0, 545.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [3.0, 0.0], [4.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [19.0, 0.0], [20.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0], [32.0, 0.0], [33.0, 0.0], [34.0, 0.0], [35.0, 0.0], [36.0, 0.0], [37.0, 0.0], [38.0, 0.0], [39.0, 0.0], [40.0, 0.0], [41.0, 0.0], [42.0, 0.0], [43.0, 0.0], [45.0, 0.0], [44.0, 0.0], [46.0, 0.0], [47.0, 0.0], [48.0, 0.0], [49.0, 0.0], [50.0, 0.0], [51.0, 0.0], [52.0, 0.0], [53.0, 0.0], [54.0, 0.0], [55.0, 0.0], [57.0, 0.0], [56.0, 0.0], [59.0, 0.0], [58.0, 0.0], [60.0, 0.0], [61.0, 0.0], [62.0, 0.0], [63.0, 0.0], [64.0, 0.0], [66.0, 0.0], [65.0, 0.0], [67.0, 0.0], [70.0, 0.0], [69.0, 0.0], [68.0, 0.0], [71.0, 0.0], [74.0, 0.0], [72.0, 0.0], [75.0, 0.0], [73.0, 0.0], [78.0, 0.0], [77.0, 0.0], [76.0, 0.0], [79.0, 0.0], [82.0, 0.0], [81.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 710.5, "series": [{"data": [[2.0, 142.0], [3.0, 118.0], [4.0, 127.0], [5.0, 118.0], [6.0, 129.0], [7.0, 122.0], [8.0, 127.5], [9.0, 710.5], [10.0, 125.5], [11.0, 131.0], [12.0, 118.0], [13.0, 115.5], [14.0, 107.0], [15.0, 122.0], [16.0, 126.0], [17.0, 132.0], [18.0, 141.0], [19.0, 167.0], [20.0, 107.0], [21.0, 129.0], [22.0, 114.0], [23.0, 111.0], [24.0, 112.5], [25.0, 131.0], [26.0, 125.0], [27.0, 109.0], [28.0, 118.0], [29.0, 105.0], [30.0, 109.0], [31.0, 121.0], [32.0, 122.0], [33.0, 122.0], [34.0, 140.0], [35.0, 126.0], [36.0, 134.5], [37.0, 124.5], [38.0, 151.5], [39.0, 133.0], [40.0, 149.0], [41.0, 186.0], [42.0, 150.0], [43.0, 163.0], [45.0, 201.0], [44.0, 172.0], [46.0, 247.0], [47.0, 212.5], [48.0, 262.0], [49.0, 246.0], [50.0, 249.0], [51.0, 266.0], [52.0, 247.0], [53.0, 267.0], [54.0, 268.5], [55.0, 252.0], [57.0, 275.0], [56.0, 265.0], [59.0, 275.0], [58.0, 267.5], [60.0, 280.0], [61.0, 267.0], [62.0, 273.0], [63.0, 287.5], [64.0, 256.5], [66.0, 249.0], [65.0, 254.0], [67.0, 250.5], [70.0, 232.0], [69.0, 243.0], [68.0, 273.5], [71.0, 299.0], [74.0, 255.0], [72.0, 272.0], [75.0, 216.0], [73.0, 243.0], [78.0, 235.0], [77.0, 269.5], [76.0, 273.0], [79.0, 289.5], [82.0, 174.5], [81.0, 283.0], [1.0, 544.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [3.0, 0.0], [4.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [19.0, 0.0], [20.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0], [32.0, 0.0], [33.0, 0.0], [34.0, 0.0], [35.0, 0.0], [36.0, 0.0], [37.0, 0.0], [38.0, 0.0], [39.0, 0.0], [40.0, 0.0], [41.0, 0.0], [42.0, 0.0], [43.0, 0.0], [45.0, 0.0], [44.0, 0.0], [46.0, 0.0], [47.0, 0.0], [48.0, 0.0], [49.0, 0.0], [50.0, 0.0], [51.0, 0.0], [52.0, 0.0], [53.0, 0.0], [54.0, 0.0], [55.0, 0.0], [57.0, 0.0], [56.0, 0.0], [59.0, 0.0], [58.0, 0.0], [60.0, 0.0], [61.0, 0.0], [62.0, 0.0], [63.0, 0.0], [64.0, 0.0], [66.0, 0.0], [65.0, 0.0], [67.0, 0.0], [70.0, 0.0], [69.0, 0.0], [68.0, 0.0], [71.0, 0.0], [74.0, 0.0], [72.0, 0.0], [75.0, 0.0], [73.0, 0.0], [78.0, 0.0], [77.0, 0.0], [76.0, 0.0], [79.0, 0.0], [82.0, 0.0], [81.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.816666666666667, "minX": 1.71810684E12, "maxY": 61.65, "series": [{"data": [[1.71810762E12, 55.016666666666666], [1.71810792E12, 55.36666666666667], [1.71810696E12, 24.933333333333334], [1.71810798E12, 57.53333333333333], [1.71810702E12, 34.65], [1.71810732E12, 60.65], [1.71810786E12, 51.233333333333334], [1.7181069E12, 14.85], [1.7181072E12, 55.56666666666667], [1.71810726E12, 60.516666666666666], [1.71810756E12, 57.833333333333336], [1.71810714E12, 49.983333333333334], [1.71810744E12, 60.88333333333333], [1.7181075E12, 58.63333333333333], [1.7181078E12, 54.61666666666667], [1.71810684E12, 5.15], [1.71810738E12, 61.65], [1.71810768E12, 53.88333333333333], [1.71810774E12, 52.2], [1.71810804E12, 3.816666666666667], [1.71810708E12, 43.166666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71810804E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.71810684E12, "maxY": 59.7, "series": [{"data": [[1.71810762E12, 53.86666666666667], [1.71810792E12, 54.266666666666666], [1.71810696E12, 23.783333333333335], [1.71810798E12, 55.8], [1.71810702E12, 33.53333333333333], [1.71810732E12, 58.78333333333333], [1.71810786E12, 50.016666666666666], [1.7181069E12, 14.2], [1.7181072E12, 54.2], [1.71810726E12, 58.65], [1.71810756E12, 56.266666666666666], [1.71810714E12, 48.1], [1.71810744E12, 59.2], [1.7181075E12, 57.266666666666666], [1.7181078E12, 53.4], [1.71810684E12, 4.816666666666666], [1.71810738E12, 59.7], [1.71810768E12, 52.86666666666667], [1.71810774E12, 51.45], [1.71810804E12, 4.4], [1.71810708E12, 41.71666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71810762E12, 1.1333333333333333], [1.71810792E12, 1.2], [1.71810696E12, 1.0666666666666667], [1.71810798E12, 1.5666666666666667], [1.71810702E12, 1.15], [1.71810732E12, 1.8166666666666667], [1.71810786E12, 1.1666666666666667], [1.7181069E12, 0.65], [1.7181072E12, 1.5833333333333333], [1.71810726E12, 1.8], [1.71810756E12, 1.4166666666666667], [1.71810714E12, 1.4666666666666666], [1.71810744E12, 1.6333333333333333], [1.7181075E12, 1.5], [1.7181078E12, 1.1333333333333333], [1.71810684E12, 0.3], [1.71810738E12, 1.8666666666666667], [1.71810768E12, 0.9166666666666666], [1.71810774E12, 1.0166666666666666], [1.71810804E12, 0.08333333333333333], [1.71810708E12, 1.3833333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71810804E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.71810684E12, "maxY": 59.7, "series": [{"data": [[1.71810762E12, 1.1333333333333333], [1.71810792E12, 1.2], [1.71810696E12, 1.0666666666666667], [1.71810798E12, 1.5666666666666667], [1.71810702E12, 1.15], [1.71810732E12, 1.8166666666666667], [1.71810786E12, 1.1666666666666667], [1.7181069E12, 0.65], [1.7181072E12, 1.5833333333333333], [1.71810726E12, 1.8], [1.71810756E12, 1.4166666666666667], [1.71810714E12, 1.4666666666666666], [1.71810744E12, 1.6333333333333333], [1.7181075E12, 1.5], [1.7181078E12, 1.1333333333333333], [1.71810684E12, 0.3], [1.71810738E12, 1.8666666666666667], [1.71810768E12, 0.9166666666666666], [1.71810774E12, 1.0166666666666666], [1.71810804E12, 0.08333333333333333], [1.71810708E12, 1.3833333333333333]], "isOverall": false, "label": "TitleBasics by params-failure", "isController": false}, {"data": [[1.71810762E12, 53.86666666666667], [1.71810792E12, 54.266666666666666], [1.71810696E12, 23.783333333333335], [1.71810798E12, 55.8], [1.71810702E12, 33.53333333333333], [1.71810732E12, 58.78333333333333], [1.71810786E12, 50.016666666666666], [1.7181069E12, 14.2], [1.7181072E12, 54.2], [1.71810726E12, 58.65], [1.71810756E12, 56.266666666666666], [1.71810714E12, 48.1], [1.71810744E12, 59.2], [1.7181075E12, 57.266666666666666], [1.7181078E12, 53.4], [1.71810684E12, 4.816666666666666], [1.71810738E12, 59.7], [1.71810768E12, 52.86666666666667], [1.71810774E12, 51.45], [1.71810804E12, 4.4], [1.71810708E12, 41.71666666666667]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71810804E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.71810684E12, "maxY": 59.7, "series": [{"data": [[1.71810762E12, 53.86666666666667], [1.71810792E12, 54.266666666666666], [1.71810696E12, 23.783333333333335], [1.71810798E12, 55.8], [1.71810702E12, 33.53333333333333], [1.71810732E12, 58.78333333333333], [1.71810786E12, 50.016666666666666], [1.7181069E12, 14.2], [1.7181072E12, 54.2], [1.71810726E12, 58.65], [1.71810756E12, 56.266666666666666], [1.71810714E12, 48.1], [1.71810744E12, 59.2], [1.7181075E12, 57.266666666666666], [1.7181078E12, 53.4], [1.71810684E12, 4.816666666666666], [1.71810738E12, 59.7], [1.71810768E12, 52.86666666666667], [1.71810774E12, 51.45], [1.71810804E12, 4.4], [1.71810708E12, 41.71666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71810762E12, 1.1333333333333333], [1.71810792E12, 1.2], [1.71810696E12, 1.0666666666666667], [1.71810798E12, 1.5666666666666667], [1.71810702E12, 1.15], [1.71810732E12, 1.8166666666666667], [1.71810786E12, 1.1666666666666667], [1.7181069E12, 0.65], [1.7181072E12, 1.5833333333333333], [1.71810726E12, 1.8], [1.71810756E12, 1.4166666666666667], [1.71810714E12, 1.4666666666666666], [1.71810744E12, 1.6333333333333333], [1.7181075E12, 1.5], [1.7181078E12, 1.1333333333333333], [1.71810684E12, 0.3], [1.71810738E12, 1.8666666666666667], [1.71810768E12, 0.9166666666666666], [1.71810774E12, 1.0166666666666666], [1.71810804E12, 0.08333333333333333], [1.71810708E12, 1.3833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71810804E12, "title": "Total Transactions Per Second"}},
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

