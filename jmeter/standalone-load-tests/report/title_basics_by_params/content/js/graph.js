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
        data: {"result": {"minY": 40.0, "minX": 0.0, "maxY": 6529.0, "series": [{"data": [[0.0, 40.0], [0.1, 42.0], [0.2, 42.0], [0.3, 43.0], [0.4, 43.0], [0.5, 43.0], [0.6, 44.0], [0.7, 44.0], [0.8, 44.0], [0.9, 44.0], [1.0, 44.0], [1.1, 45.0], [1.2, 45.0], [1.3, 45.0], [1.4, 45.0], [1.5, 45.0], [1.6, 45.0], [1.7, 45.0], [1.8, 45.0], [1.9, 46.0], [2.0, 46.0], [2.1, 46.0], [2.2, 46.0], [2.3, 46.0], [2.4, 46.0], [2.5, 46.0], [2.6, 46.0], [2.7, 46.0], [2.8, 47.0], [2.9, 47.0], [3.0, 47.0], [3.1, 47.0], [3.2, 47.0], [3.3, 47.0], [3.4, 47.0], [3.5, 47.0], [3.6, 47.0], [3.7, 47.0], [3.8, 47.0], [3.9, 47.0], [4.0, 47.0], [4.1, 48.0], [4.2, 48.0], [4.3, 48.0], [4.4, 48.0], [4.5, 48.0], [4.6, 48.0], [4.7, 48.0], [4.8, 48.0], [4.9, 48.0], [5.0, 48.0], [5.1, 48.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 49.0], [6.3, 49.0], [6.4, 50.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 50.0], [7.0, 50.0], [7.1, 50.0], [7.2, 50.0], [7.3, 50.0], [7.4, 51.0], [7.5, 51.0], [7.6, 51.0], [7.7, 51.0], [7.8, 51.0], [7.9, 51.0], [8.0, 51.0], [8.1, 51.0], [8.2, 51.0], [8.3, 51.0], [8.4, 52.0], [8.5, 52.0], [8.6, 52.0], [8.7, 52.0], [8.8, 52.0], [8.9, 52.0], [9.0, 52.0], [9.1, 52.0], [9.2, 52.0], [9.3, 53.0], [9.4, 53.0], [9.5, 53.0], [9.6, 53.0], [9.7, 53.0], [9.8, 53.0], [9.9, 53.0], [10.0, 53.0], [10.1, 53.0], [10.2, 54.0], [10.3, 54.0], [10.4, 54.0], [10.5, 54.0], [10.6, 54.0], [10.7, 54.0], [10.8, 54.0], [10.9, 54.0], [11.0, 55.0], [11.1, 55.0], [11.2, 55.0], [11.3, 55.0], [11.4, 55.0], [11.5, 55.0], [11.6, 56.0], [11.7, 56.0], [11.8, 56.0], [11.9, 56.0], [12.0, 56.0], [12.1, 56.0], [12.2, 57.0], [12.3, 57.0], [12.4, 57.0], [12.5, 57.0], [12.6, 57.0], [12.7, 57.0], [12.8, 58.0], [12.9, 58.0], [13.0, 58.0], [13.1, 58.0], [13.2, 58.0], [13.3, 58.0], [13.4, 59.0], [13.5, 59.0], [13.6, 59.0], [13.7, 59.0], [13.8, 60.0], [13.9, 60.0], [14.0, 60.0], [14.1, 60.0], [14.2, 60.0], [14.3, 61.0], [14.4, 61.0], [14.5, 61.0], [14.6, 61.0], [14.7, 62.0], [14.8, 62.0], [14.9, 62.0], [15.0, 62.0], [15.1, 62.0], [15.2, 63.0], [15.3, 63.0], [15.4, 63.0], [15.5, 64.0], [15.6, 64.0], [15.7, 64.0], [15.8, 64.0], [15.9, 65.0], [16.0, 65.0], [16.1, 65.0], [16.2, 65.0], [16.3, 66.0], [16.4, 66.0], [16.5, 66.0], [16.6, 66.0], [16.7, 67.0], [16.8, 67.0], [16.9, 67.0], [17.0, 68.0], [17.1, 68.0], [17.2, 68.0], [17.3, 69.0], [17.4, 69.0], [17.5, 69.0], [17.6, 70.0], [17.7, 70.0], [17.8, 70.0], [17.9, 71.0], [18.0, 71.0], [18.1, 72.0], [18.2, 72.0], [18.3, 72.0], [18.4, 73.0], [18.5, 73.0], [18.6, 73.0], [18.7, 74.0], [18.8, 74.0], [18.9, 74.0], [19.0, 75.0], [19.1, 75.0], [19.2, 75.0], [19.3, 76.0], [19.4, 76.0], [19.5, 76.0], [19.6, 77.0], [19.7, 77.0], [19.8, 77.0], [19.9, 78.0], [20.0, 78.0], [20.1, 79.0], [20.2, 79.0], [20.3, 80.0], [20.4, 80.0], [20.5, 80.0], [20.6, 81.0], [20.7, 82.0], [20.8, 82.0], [20.9, 82.0], [21.0, 83.0], [21.1, 83.0], [21.2, 84.0], [21.3, 84.0], [21.4, 85.0], [21.5, 85.0], [21.6, 86.0], [21.7, 86.0], [21.8, 86.0], [21.9, 87.0], [22.0, 87.0], [22.1, 88.0], [22.2, 88.0], [22.3, 89.0], [22.4, 89.0], [22.5, 89.0], [22.6, 90.0], [22.7, 90.0], [22.8, 91.0], [22.9, 91.0], [23.0, 92.0], [23.1, 92.0], [23.2, 92.0], [23.3, 93.0], [23.4, 93.0], [23.5, 94.0], [23.6, 94.0], [23.7, 95.0], [23.8, 95.0], [23.9, 95.0], [24.0, 96.0], [24.1, 96.0], [24.2, 97.0], [24.3, 97.0], [24.4, 98.0], [24.5, 98.0], [24.6, 99.0], [24.7, 99.0], [24.8, 100.0], [24.9, 100.0], [25.0, 101.0], [25.1, 102.0], [25.2, 102.0], [25.3, 102.0], [25.4, 103.0], [25.5, 104.0], [25.6, 104.0], [25.7, 105.0], [25.8, 105.0], [25.9, 105.0], [26.0, 106.0], [26.1, 106.0], [26.2, 107.0], [26.3, 107.0], [26.4, 108.0], [26.5, 109.0], [26.6, 109.0], [26.7, 110.0], [26.8, 110.0], [26.9, 111.0], [27.0, 111.0], [27.1, 112.0], [27.2, 112.0], [27.3, 113.0], [27.4, 113.0], [27.5, 114.0], [27.6, 115.0], [27.7, 115.0], [27.8, 116.0], [27.9, 116.0], [28.0, 117.0], [28.1, 118.0], [28.2, 118.0], [28.3, 119.0], [28.4, 119.0], [28.5, 120.0], [28.6, 120.0], [28.7, 121.0], [28.8, 121.0], [28.9, 122.0], [29.0, 123.0], [29.1, 123.0], [29.2, 124.0], [29.3, 124.0], [29.4, 125.0], [29.5, 126.0], [29.6, 126.0], [29.7, 127.0], [29.8, 127.0], [29.9, 128.0], [30.0, 128.0], [30.1, 129.0], [30.2, 129.0], [30.3, 130.0], [30.4, 130.0], [30.5, 131.0], [30.6, 132.0], [30.7, 133.0], [30.8, 133.0], [30.9, 134.0], [31.0, 135.0], [31.1, 135.0], [31.2, 136.0], [31.3, 137.0], [31.4, 137.0], [31.5, 138.0], [31.6, 139.0], [31.7, 140.0], [31.8, 141.0], [31.9, 141.0], [32.0, 142.0], [32.1, 142.0], [32.2, 143.0], [32.3, 144.0], [32.4, 144.0], [32.5, 145.0], [32.6, 146.0], [32.7, 146.0], [32.8, 147.0], [32.9, 148.0], [33.0, 149.0], [33.1, 149.0], [33.2, 150.0], [33.3, 150.0], [33.4, 151.0], [33.5, 152.0], [33.6, 153.0], [33.7, 153.0], [33.8, 154.0], [33.9, 154.0], [34.0, 155.0], [34.1, 156.0], [34.2, 156.0], [34.3, 157.0], [34.4, 157.0], [34.5, 158.0], [34.6, 159.0], [34.7, 159.0], [34.8, 160.0], [34.9, 161.0], [35.0, 162.0], [35.1, 162.0], [35.2, 163.0], [35.3, 164.0], [35.4, 165.0], [35.5, 165.0], [35.6, 165.0], [35.7, 166.0], [35.8, 167.0], [35.9, 167.0], [36.0, 168.0], [36.1, 168.0], [36.2, 169.0], [36.3, 170.0], [36.4, 170.0], [36.5, 171.0], [36.6, 172.0], [36.7, 172.0], [36.8, 173.0], [36.9, 174.0], [37.0, 174.0], [37.1, 175.0], [37.2, 175.0], [37.3, 176.0], [37.4, 177.0], [37.5, 177.0], [37.6, 178.0], [37.7, 179.0], [37.8, 180.0], [37.9, 180.0], [38.0, 181.0], [38.1, 181.0], [38.2, 182.0], [38.3, 183.0], [38.4, 183.0], [38.5, 184.0], [38.6, 185.0], [38.7, 185.0], [38.8, 186.0], [38.9, 186.0], [39.0, 187.0], [39.1, 187.0], [39.2, 188.0], [39.3, 188.0], [39.4, 189.0], [39.5, 189.0], [39.6, 190.0], [39.7, 190.0], [39.8, 191.0], [39.9, 191.0], [40.0, 192.0], [40.1, 192.0], [40.2, 193.0], [40.3, 193.0], [40.4, 194.0], [40.5, 195.0], [40.6, 195.0], [40.7, 196.0], [40.8, 196.0], [40.9, 197.0], [41.0, 197.0], [41.1, 197.0], [41.2, 198.0], [41.3, 199.0], [41.4, 199.0], [41.5, 199.0], [41.6, 200.0], [41.7, 200.0], [41.8, 201.0], [41.9, 201.0], [42.0, 202.0], [42.1, 202.0], [42.2, 203.0], [42.3, 203.0], [42.4, 204.0], [42.5, 204.0], [42.6, 205.0], [42.7, 205.0], [42.8, 206.0], [42.9, 206.0], [43.0, 207.0], [43.1, 208.0], [43.2, 208.0], [43.3, 209.0], [43.4, 209.0], [43.5, 210.0], [43.6, 210.0], [43.7, 211.0], [43.8, 211.0], [43.9, 212.0], [44.0, 212.0], [44.1, 213.0], [44.2, 213.0], [44.3, 214.0], [44.4, 214.0], [44.5, 215.0], [44.6, 215.0], [44.7, 216.0], [44.8, 216.0], [44.9, 217.0], [45.0, 218.0], [45.1, 219.0], [45.2, 219.0], [45.3, 220.0], [45.4, 221.0], [45.5, 222.0], [45.6, 222.0], [45.7, 223.0], [45.8, 224.0], [45.9, 224.0], [46.0, 225.0], [46.1, 226.0], [46.2, 227.0], [46.3, 228.0], [46.4, 228.0], [46.5, 229.0], [46.6, 230.0], [46.7, 231.0], [46.8, 231.0], [46.9, 233.0], [47.0, 233.0], [47.1, 234.0], [47.2, 235.0], [47.3, 236.0], [47.4, 237.0], [47.5, 238.0], [47.6, 239.0], [47.7, 240.0], [47.8, 241.0], [47.9, 242.0], [48.0, 242.0], [48.1, 243.0], [48.2, 244.0], [48.3, 245.0], [48.4, 246.0], [48.5, 247.0], [48.6, 247.0], [48.7, 248.0], [48.8, 249.0], [48.9, 250.0], [49.0, 251.0], [49.1, 252.0], [49.2, 252.0], [49.3, 254.0], [49.4, 255.0], [49.5, 255.0], [49.6, 256.0], [49.7, 257.0], [49.8, 258.0], [49.9, 259.0], [50.0, 260.0], [50.1, 261.0], [50.2, 262.0], [50.3, 263.0], [50.4, 264.0], [50.5, 265.0], [50.6, 266.0], [50.7, 267.0], [50.8, 267.0], [50.9, 268.0], [51.0, 269.0], [51.1, 270.0], [51.2, 271.0], [51.3, 272.0], [51.4, 273.0], [51.5, 274.0], [51.6, 275.0], [51.7, 276.0], [51.8, 277.0], [51.9, 278.0], [52.0, 278.0], [52.1, 279.0], [52.2, 280.0], [52.3, 281.0], [52.4, 282.0], [52.5, 283.0], [52.6, 284.0], [52.7, 285.0], [52.8, 286.0], [52.9, 287.0], [53.0, 288.0], [53.1, 289.0], [53.2, 290.0], [53.3, 291.0], [53.4, 291.0], [53.5, 292.0], [53.6, 293.0], [53.7, 294.0], [53.8, 295.0], [53.9, 296.0], [54.0, 297.0], [54.1, 298.0], [54.2, 298.0], [54.3, 299.0], [54.4, 300.0], [54.5, 301.0], [54.6, 302.0], [54.7, 303.0], [54.8, 304.0], [54.9, 304.0], [55.0, 305.0], [55.1, 306.0], [55.2, 307.0], [55.3, 308.0], [55.4, 309.0], [55.5, 310.0], [55.6, 311.0], [55.7, 312.0], [55.8, 313.0], [55.9, 315.0], [56.0, 316.0], [56.1, 317.0], [56.2, 318.0], [56.3, 319.0], [56.4, 320.0], [56.5, 321.0], [56.6, 322.0], [56.7, 324.0], [56.8, 325.0], [56.9, 327.0], [57.0, 328.0], [57.1, 330.0], [57.2, 331.0], [57.3, 332.0], [57.4, 333.0], [57.5, 334.0], [57.6, 336.0], [57.7, 337.0], [57.8, 340.0], [57.9, 341.0], [58.0, 342.0], [58.1, 344.0], [58.2, 347.0], [58.3, 349.0], [58.4, 351.0], [58.5, 352.0], [58.6, 354.0], [58.7, 356.0], [58.8, 358.0], [58.9, 359.0], [59.0, 361.0], [59.1, 362.0], [59.2, 364.0], [59.3, 366.0], [59.4, 367.0], [59.5, 369.0], [59.6, 371.0], [59.7, 372.0], [59.8, 373.0], [59.9, 375.0], [60.0, 377.0], [60.1, 378.0], [60.2, 380.0], [60.3, 381.0], [60.4, 383.0], [60.5, 384.0], [60.6, 385.0], [60.7, 386.0], [60.8, 388.0], [60.9, 390.0], [61.0, 391.0], [61.1, 393.0], [61.2, 394.0], [61.3, 396.0], [61.4, 398.0], [61.5, 399.0], [61.6, 401.0], [61.7, 402.0], [61.8, 404.0], [61.9, 405.0], [62.0, 407.0], [62.1, 409.0], [62.2, 411.0], [62.3, 413.0], [62.4, 414.0], [62.5, 416.0], [62.6, 418.0], [62.7, 419.0], [62.8, 421.0], [62.9, 424.0], [63.0, 428.0], [63.1, 430.0], [63.2, 433.0], [63.3, 435.0], [63.4, 438.0], [63.5, 441.0], [63.6, 444.0], [63.7, 446.0], [63.8, 448.0], [63.9, 452.0], [64.0, 455.0], [64.1, 457.0], [64.2, 460.0], [64.3, 462.0], [64.4, 465.0], [64.5, 467.0], [64.6, 470.0], [64.7, 473.0], [64.8, 475.0], [64.9, 477.0], [65.0, 480.0], [65.1, 482.0], [65.2, 485.0], [65.3, 487.0], [65.4, 489.0], [65.5, 492.0], [65.6, 494.0], [65.7, 497.0], [65.8, 500.0], [65.9, 503.0], [66.0, 506.0], [66.1, 509.0], [66.2, 512.0], [66.3, 514.0], [66.4, 517.0], [66.5, 520.0], [66.6, 523.0], [66.7, 526.0], [66.8, 530.0], [66.9, 533.0], [67.0, 537.0], [67.1, 544.0], [67.2, 548.0], [67.3, 554.0], [67.4, 560.0], [67.5, 565.0], [67.6, 572.0], [67.7, 580.0], [67.8, 586.0], [67.9, 594.0], [68.0, 601.0], [68.1, 608.0], [68.2, 617.0], [68.3, 623.0], [68.4, 633.0], [68.5, 642.0], [68.6, 650.0], [68.7, 659.0], [68.8, 667.0], [68.9, 677.0], [69.0, 685.0], [69.1, 693.0], [69.2, 698.0], [69.3, 702.0], [69.4, 708.0], [69.5, 713.0], [69.6, 718.0], [69.7, 723.0], [69.8, 729.0], [69.9, 736.0], [70.0, 745.0], [70.1, 752.0], [70.2, 757.0], [70.3, 764.0], [70.4, 770.0], [70.5, 776.0], [70.6, 782.0], [70.7, 789.0], [70.8, 795.0], [70.9, 801.0], [71.0, 807.0], [71.1, 813.0], [71.2, 820.0], [71.3, 827.0], [71.4, 833.0], [71.5, 843.0], [71.6, 850.0], [71.7, 858.0], [71.8, 866.0], [71.9, 873.0], [72.0, 880.0], [72.1, 885.0], [72.2, 893.0], [72.3, 900.0], [72.4, 910.0], [72.5, 916.0], [72.6, 920.0], [72.7, 927.0], [72.8, 934.0], [72.9, 941.0], [73.0, 947.0], [73.1, 953.0], [73.2, 961.0], [73.3, 968.0], [73.4, 974.0], [73.5, 980.0], [73.6, 987.0], [73.7, 993.0], [73.8, 999.0], [73.9, 1007.0], [74.0, 1014.0], [74.1, 1018.0], [74.2, 1024.0], [74.3, 1032.0], [74.4, 1041.0], [74.5, 1050.0], [74.6, 1059.0], [74.7, 1070.0], [74.8, 1081.0], [74.9, 1089.0], [75.0, 1099.0], [75.1, 1111.0], [75.2, 1118.0], [75.3, 1128.0], [75.4, 1143.0], [75.5, 1157.0], [75.6, 1175.0], [75.7, 1189.0], [75.8, 1205.0], [75.9, 1221.0], [76.0, 1238.0], [76.1, 1262.0], [76.2, 1275.0], [76.3, 1291.0], [76.4, 1303.0], [76.5, 1316.0], [76.6, 1331.0], [76.7, 1344.0], [76.8, 1365.0], [76.9, 1381.0], [77.0, 1394.0], [77.1, 1404.0], [77.2, 1414.0], [77.3, 1425.0], [77.4, 1436.0], [77.5, 1449.0], [77.6, 1464.0], [77.7, 1475.0], [77.8, 1481.0], [77.9, 1492.0], [78.0, 1500.0], [78.1, 1507.0], [78.2, 1516.0], [78.3, 1527.0], [78.4, 1537.0], [78.5, 1552.0], [78.6, 1564.0], [78.7, 1578.0], [78.8, 1589.0], [78.9, 1597.0], [79.0, 1606.0], [79.1, 1613.0], [79.2, 1624.0], [79.3, 1631.0], [79.4, 1640.0], [79.5, 1649.0], [79.6, 1660.0], [79.7, 1674.0], [79.8, 1685.0], [79.9, 1694.0], [80.0, 1703.0], [80.1, 1711.0], [80.2, 1718.0], [80.3, 1726.0], [80.4, 1733.0], [80.5, 1742.0], [80.6, 1752.0], [80.7, 1763.0], [80.8, 1772.0], [80.9, 1779.0], [81.0, 1787.0], [81.1, 1791.0], [81.2, 1801.0], [81.3, 1807.0], [81.4, 1813.0], [81.5, 1819.0], [81.6, 1826.0], [81.7, 1832.0], [81.8, 1837.0], [81.9, 1844.0], [82.0, 1848.0], [82.1, 1853.0], [82.2, 1858.0], [82.3, 1863.0], [82.4, 1867.0], [82.5, 1872.0], [82.6, 1876.0], [82.7, 1879.0], [82.8, 1883.0], [82.9, 1886.0], [83.0, 1889.0], [83.1, 1892.0], [83.2, 1896.0], [83.3, 1899.0], [83.4, 1902.0], [83.5, 1904.0], [83.6, 1907.0], [83.7, 1910.0], [83.8, 1912.0], [83.9, 1915.0], [84.0, 1917.0], [84.1, 1920.0], [84.2, 1922.0], [84.3, 1925.0], [84.4, 1928.0], [84.5, 1931.0], [84.6, 1933.0], [84.7, 1936.0], [84.8, 1938.0], [84.9, 1941.0], [85.0, 1944.0], [85.1, 1948.0], [85.2, 1951.0], [85.3, 1955.0], [85.4, 1958.0], [85.5, 1961.0], [85.6, 1964.0], [85.7, 1967.0], [85.8, 1969.0], [85.9, 1971.0], [86.0, 1973.0], [86.1, 1976.0], [86.2, 1978.0], [86.3, 1981.0], [86.4, 1982.0], [86.5, 1985.0], [86.6, 1987.0], [86.7, 1990.0], [86.8, 1993.0], [86.9, 1995.0], [87.0, 1997.0], [87.1, 2000.0], [87.2, 2003.0], [87.3, 2006.0], [87.4, 2008.0], [87.5, 2011.0], [87.6, 2015.0], [87.7, 2017.0], [87.8, 2020.0], [87.9, 2024.0], [88.0, 2027.0], [88.1, 2030.0], [88.2, 2034.0], [88.3, 2037.0], [88.4, 2042.0], [88.5, 2045.0], [88.6, 2049.0], [88.7, 2053.0], [88.8, 2056.0], [88.9, 2061.0], [89.0, 2065.0], [89.1, 2067.0], [89.2, 2070.0], [89.3, 2073.0], [89.4, 2077.0], [89.5, 2080.0], [89.6, 2083.0], [89.7, 2086.0], [89.8, 2089.0], [89.9, 2092.0], [90.0, 2095.0], [90.1, 2098.0], [90.2, 2101.0], [90.3, 2104.0], [90.4, 2108.0], [90.5, 2113.0], [90.6, 2118.0], [90.7, 2122.0], [90.8, 2126.0], [90.9, 2133.0], [91.0, 2143.0], [91.1, 2149.0], [91.2, 2155.0], [91.3, 2161.0], [91.4, 2167.0], [91.5, 2174.0], [91.6, 2181.0], [91.7, 2188.0], [91.8, 2195.0], [91.9, 2204.0], [92.0, 2214.0], [92.1, 2221.0], [92.2, 2231.0], [92.3, 2240.0], [92.4, 2247.0], [92.5, 2256.0], [92.6, 2271.0], [92.7, 2283.0], [92.8, 2296.0], [92.9, 2306.0], [93.0, 2319.0], [93.1, 2333.0], [93.2, 2346.0], [93.3, 2365.0], [93.4, 2377.0], [93.5, 2390.0], [93.6, 2404.0], [93.7, 2415.0], [93.8, 2425.0], [93.9, 2438.0], [94.0, 2450.0], [94.1, 2463.0], [94.2, 2474.0], [94.3, 2482.0], [94.4, 2494.0], [94.5, 2501.0], [94.6, 2507.0], [94.7, 2514.0], [94.8, 2524.0], [94.9, 2540.0], [95.0, 2551.0], [95.1, 2571.0], [95.2, 2590.0], [95.3, 2603.0], [95.4, 2624.0], [95.5, 2642.0], [95.6, 2663.0], [95.7, 2680.0], [95.8, 2714.0], [95.9, 2763.0], [96.0, 2796.0], [96.1, 2814.0], [96.2, 2826.0], [96.3, 2861.0], [96.4, 2889.0], [96.5, 2920.0], [96.6, 2934.0], [96.7, 2959.0], [96.8, 2974.0], [96.9, 2988.0], [97.0, 3010.0], [97.1, 3029.0], [97.2, 3073.0], [97.3, 3138.0], [97.4, 3253.0], [97.5, 3499.0], [97.6, 3601.0], [97.7, 3650.0], [97.8, 3703.0], [97.9, 3765.0], [98.0, 3799.0], [98.1, 3860.0], [98.2, 3929.0], [98.3, 3981.0], [98.4, 4025.0], [98.5, 4085.0], [98.6, 4130.0], [98.7, 4187.0], [98.8, 4303.0], [98.9, 4453.0], [99.0, 4502.0], [99.1, 4524.0], [99.2, 4555.0], [99.3, 4579.0], [99.4, 4614.0], [99.5, 4720.0], [99.6, 5376.0], [99.7, 6081.0], [99.8, 6145.0], [99.9, 6211.0], [100.0, 6529.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 7542.0, "series": [{"data": [[0.0, 7542.0], [600.0, 384.0], [700.0, 498.0], [800.0, 435.0], [900.0, 459.0], [1000.0, 366.0], [1100.0, 234.0], [1200.0, 180.0], [1300.0, 216.0], [1400.0, 284.0], [1500.0, 281.0], [1600.0, 321.0], [1700.0, 373.0], [1800.0, 649.0], [1900.0, 1153.0], [2000.0, 931.0], [2100.0, 522.0], [2200.0, 300.0], [2300.0, 226.0], [2400.0, 278.0], [2500.0, 243.0], [2600.0, 146.0], [2800.0, 127.0], [2700.0, 77.0], [2900.0, 161.0], [3000.0, 85.0], [3100.0, 40.0], [3200.0, 17.0], [3300.0, 9.0], [3400.0, 14.0], [3500.0, 29.0], [3700.0, 64.0], [3600.0, 60.0], [3800.0, 47.0], [3900.0, 52.0], [4000.0, 64.0], [4300.0, 23.0], [4200.0, 20.0], [4100.0, 59.0], [4500.0, 109.0], [4600.0, 44.0], [4400.0, 37.0], [4800.0, 5.0], [4700.0, 9.0], [4900.0, 3.0], [5100.0, 4.0], [5000.0, 2.0], [5200.0, 5.0], [5300.0, 7.0], [5400.0, 7.0], [5600.0, 6.0], [5500.0, 3.0], [5800.0, 2.0], [5700.0, 7.0], [6000.0, 7.0], [6100.0, 51.0], [5900.0, 1.0], [6200.0, 21.0], [6300.0, 8.0], [6400.0, 6.0], [6500.0, 1.0], [100.0, 5134.0], [200.0, 3913.0], [300.0, 2186.0], [400.0, 1305.0], [500.0, 669.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3715.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 20092.0, "series": [{"data": [[0.0, 20092.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3715.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6714.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 90.95063985374776, "minX": 1.71925578E12, "maxY": 100.0, "series": [{"data": [[1.71925602E12, 100.0], [1.71925584E12, 100.0], [1.71925632E12, 100.0], [1.7192559E12, 100.0], [1.71925638E12, 90.95063985374776], [1.7192562E12, 100.0], [1.71925578E12, 95.05947368421056], [1.71925626E12, 100.0], [1.71925608E12, 100.0], [1.71925614E12, 100.0], [1.71925596E12, 100.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925638E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 151.4, "minX": 1.0, "maxY": 2068.0, "series": [{"data": [[2.0, 1838.0], [3.0, 798.0], [4.0, 1604.0], [5.0, 815.0], [6.0, 1666.0], [7.0, 805.0], [8.0, 1475.0], [9.0, 1877.0], [10.0, 799.0], [11.0, 1444.0], [12.0, 1482.0], [13.0, 790.0], [14.0, 2068.0], [15.0, 356.66666666666663], [16.0, 563.0], [17.0, 419.0], [18.0, 407.0], [19.0, 399.5], [20.0, 405.5], [21.0, 1071.5], [22.0, 720.0], [23.0, 297.66666666666663], [24.0, 400.5], [25.0, 394.5], [26.0, 395.5], [27.0, 702.0], [28.0, 258.0], [29.0, 205.25], [30.0, 234.33333333333334], [31.0, 236.0], [32.0, 243.66666666666666], [33.0, 652.3333333333334], [34.0, 211.66666666666666], [35.0, 295.5], [36.0, 209.0], [37.0, 235.66666666666666], [38.0, 219.0], [39.0, 279.5], [40.0, 224.0], [41.0, 247.0], [42.0, 280.25], [43.0, 182.22222222222223], [44.0, 151.4], [45.0, 157.0], [46.0, 235.66666666666666], [47.0, 771.0], [48.0, 465.0], [49.0, 698.3333333333334], [50.0, 437.2], [51.0, 442.8], [52.0, 684.6666666666666], [53.0, 528.75], [55.0, 685.6666666666666], [54.0, 1893.0], [57.0, 850.6666666666666], [56.0, 1964.0], [58.0, 529.875], [59.0, 370.3333333333333], [60.0, 373.8571428571429], [61.0, 444.2], [62.0, 433.6], [63.0, 366.3333333333333], [64.0, 524.25], [65.0, 584.25], [66.0, 454.6], [67.0, 539.5], [68.0, 1041.0], [69.0, 1021.0], [70.0, 694.3333333333334], [71.0, 468.0], [72.0, 200.33333333333334], [73.0, 424.8], [74.0, 451.2], [75.0, 376.5], [76.0, 613.3333333333334], [77.0, 943.5], [79.0, 1095.0], [78.0, 1907.0], [80.0, 907.0], [81.0, 824.25], [82.0, 747.6], [83.0, 812.0], [85.0, 1154.0], [87.0, 877.2222222222222], [86.0, 2027.0], [84.0, 2053.0], [88.0, 1039.0], [89.0, 1415.5384615384617], [91.0, 1075.0833333333333], [90.0, 1942.0], [92.0, 1004.0], [93.0, 886.3], [94.0, 989.0], [95.0, 777.8666666666667], [96.0, 805.0], [97.0, 442.0769230769231], [98.0, 664.5], [99.0, 853.0], [100.0, 750.4513785209474], [1.0, 813.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[99.53025785524692, 748.8749713312129]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1663.0333333333333, "minX": 1.71925578E12, "maxY": 477575.0333333333, "series": [{"data": [[1.71925602E12, 431287.93333333335], [1.71925584E12, 454323.6], [1.71925632E12, 357682.13333333336], [1.7192559E12, 384062.1], [1.71925638E12, 69903.61666666667], [1.7192562E12, 356839.9], [1.71925578E12, 231603.86666666667], [1.71925626E12, 477575.0333333333], [1.71925608E12, 468836.0833333333], [1.71925614E12, 401128.48333333334], [1.71925596E12, 369463.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71925602E12, 9479.4], [1.71925584E12, 10512.1], [1.71925632E12, 8238.083333333334], [1.7192559E12, 9018.4], [1.71925638E12, 1663.0333333333333], [1.7192562E12, 8266.366666666667], [1.71925578E12, 5780.9], [1.71925626E12, 11199.85], [1.71925608E12, 10708.966666666667], [1.71925614E12, 9445.6], [1.71925596E12, 8571.766666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925638E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 439.12859468258364, "minX": 1.71925578E12, "maxY": 2020.4917733089583, "series": [{"data": [[1.71925602E12, 737.9096172402722], [1.71925584E12, 544.7068516912396], [1.71925632E12, 961.0187914517311], [1.7192559E12, 808.7622756518795], [1.71925638E12, 2020.4917733089583], [1.7192562E12, 1011.7533994854825], [1.71925578E12, 805.8642105263166], [1.71925626E12, 439.12859468258364], [1.71925608E12, 501.61540648095735], [1.71925614E12, 720.5109606705328], [1.71925596E12, 950.9114509246094]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925638E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 435.6559956592507, "minX": 1.71925578E12, "maxY": 2018.1407678244964, "series": [{"data": [[1.71925602E12, 732.1453843679644], [1.71925584E12, 541.0002891008951], [1.71925632E12, 958.2951363301398], [1.7192559E12, 805.761598374535], [1.71925638E12, 2018.1407678244964], [1.7192562E12, 1007.8585079015068], [1.71925578E12, 802.1452631578936], [1.71925626E12, 435.6559956592507], [1.71925608E12, 497.0136441159743], [1.71925614E12, 717.4941972920695], [1.71925596E12, 947.458036984355]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925638E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71925578E12, "maxY": 2.6189473684210522, "series": [{"data": [[1.71925602E12, 1.1859118687680887], [1.71925584E12, 1.0714079213645586], [1.71925632E12, 1.3563006632277073], [1.7192559E12, 1.2851337622756498], [1.71925638E12, 0.0], [1.7192562E12, 1.3796398382947435], [1.71925578E12, 2.6189473684210522], [1.71925626E12, 0.9842647856755316], [1.71925608E12, 1.0361000568504786], [1.71925614E12, 1.182140554480983], [1.71925596E12, 1.3837126600284475]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925638E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.71925578E12, "maxY": 6529.0, "series": [{"data": [[1.71925602E12, 2815.0], [1.71925584E12, 6529.0], [1.71925632E12, 5053.0], [1.7192559E12, 3795.0], [1.71925638E12, 4578.0], [1.7192562E12, 4177.0], [1.71925578E12, 5830.0], [1.71925626E12, 4154.0], [1.71925608E12, 3402.0], [1.71925614E12, 4876.0], [1.71925596E12, 3342.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71925602E12, 43.0], [1.71925584E12, 40.0], [1.71925632E12, 42.0], [1.7192559E12, 40.0], [1.71925638E12, 54.0], [1.7192562E12, 42.0], [1.71925578E12, 40.0], [1.71925626E12, 42.0], [1.71925608E12, 40.0], [1.71925614E12, 40.0], [1.71925596E12, 41.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71925602E12, 2092.0], [1.71925584E12, 527.0], [1.71925632E12, 2045.0], [1.7192559E12, 2155.2], [1.71925638E12, 4128.4], [1.7192562E12, 2644.8], [1.71925578E12, 1852.8000000000002], [1.71925626E12, 1152.9000000000005], [1.71925608E12, 1947.0], [1.71925614E12, 2100.7000000000003], [1.71925596E12, 2251.800000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71925602E12, 2507.9], [1.71925584E12, 6201.4], [1.71925632E12, 4087.0999999999976], [1.7192559E12, 3013.3], [1.71925638E12, 4377.84], [1.7192562E12, 3823.5600000000004], [1.71925578E12, 5338.85], [1.71925626E12, 3711.5200000000004], [1.71925608E12, 2791.81], [1.71925614E12, 4573.0], [1.71925596E12, 3008.87]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71925602E12, 318.0], [1.71925584E12, 195.0], [1.71925632E12, 573.5], [1.7192559E12, 266.0], [1.71925638E12, 1977.0], [1.7192562E12, 409.0], [1.71925578E12, 399.0], [1.71925626E12, 216.0], [1.71925608E12, 171.0], [1.71925614E12, 249.0], [1.71925596E12, 444.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71925602E12, 2271.0], [1.71925584E12, 4506.0], [1.71925632E12, 2411.0], [1.7192559E12, 2485.2999999999997], [1.71925638E12, 4188.8], [1.7192562E12, 3091.8], [1.71925578E12, 2515.399999999994], [1.71925626E12, 1840.199999999997], [1.71925608E12, 2480.0], [1.71925614E12, 2888.5499999999997], [1.71925596E12, 2536.3999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925638E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 1.0, "maxY": 2421.5, "series": [{"data": [[2.0, 1667.0], [3.0, 1456.0], [4.0, 729.5], [5.0, 1485.0], [6.0, 1781.0], [7.0, 1991.0], [8.0, 1434.5], [9.0, 1394.5], [10.0, 1978.0], [11.0, 1562.0], [12.0, 1861.0], [13.0, 1740.0], [14.0, 920.0], [15.0, 2247.0], [16.0, 1310.0], [17.0, 1769.5], [18.0, 1502.5], [19.0, 896.0], [20.0, 492.0], [21.0, 1203.5], [22.0, 1646.0], [23.0, 705.0], [24.0, 856.0], [25.0, 1088.5], [26.0, 1400.0], [27.0, 1933.0], [28.0, 978.5], [29.0, 1055.0], [30.0, 85.5], [31.0, 191.0], [32.0, 1997.5], [33.0, 1755.0], [35.0, 162.5], [34.0, 990.0], [37.0, 321.0], [36.0, 483.5], [38.0, 1588.5], [39.0, 1013.0], [40.0, 238.5], [41.0, 721.0], [43.0, 585.0], [42.0, 1730.5], [44.0, 1960.0], [45.0, 1618.0], [47.0, 2421.5], [46.0, 1606.0], [48.0, 1663.5], [49.0, 1720.0], [50.0, 1990.5], [51.0, 2082.0], [52.0, 1034.5], [53.0, 226.0], [54.0, 1020.0], [55.0, 375.0], [56.0, 1025.5], [57.0, 1915.0], [59.0, 392.5], [58.0, 594.0], [61.0, 322.0], [60.0, 392.5], [62.0, 309.5], [63.0, 452.0], [66.0, 403.0], [64.0, 504.5], [67.0, 249.0], [65.0, 227.0], [69.0, 235.5], [68.0, 212.5], [71.0, 186.0], [70.0, 165.5], [75.0, 151.5], [74.0, 228.0], [72.0, 193.0], [73.0, 145.5], [78.0, 93.0], [79.0, 213.0], [77.0, 199.0], [76.0, 265.0], [81.0, 143.0], [82.0, 203.0], [80.0, 175.5], [83.0, 146.0], [84.0, 185.0], [86.0, 98.0], [87.0, 181.0], [85.0, 97.5], [88.0, 197.0], [91.0, 154.5], [89.0, 69.5], [90.0, 56.0], [92.0, 1842.5], [95.0, 400.0], [93.0, 462.0], [1.0, 1504.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 52.5, "minX": 1.0, "maxY": 2406.5, "series": [{"data": [[2.0, 1665.0], [3.0, 1454.0], [4.0, 727.0], [5.0, 1485.0], [6.0, 1780.0], [7.0, 1991.0], [8.0, 1433.0], [9.0, 1391.0], [10.0, 1976.5], [11.0, 1558.0], [12.0, 1859.0], [13.0, 1737.5], [14.0, 918.0], [15.0, 2245.0], [16.0, 1307.5], [17.0, 1767.5], [18.0, 1500.5], [19.0, 893.0], [20.0, 488.5], [21.0, 1201.0], [22.0, 1624.0], [23.0, 701.0], [24.0, 851.5], [25.0, 1086.5], [26.0, 1399.5], [27.0, 1932.0], [28.0, 975.5], [29.0, 1055.0], [30.0, 83.5], [31.0, 187.5], [32.0, 1994.5], [33.0, 1753.0], [35.0, 158.0], [34.0, 987.0], [37.0, 318.5], [36.0, 480.0], [38.0, 1552.0], [39.0, 1009.0], [40.0, 236.5], [41.0, 718.0], [43.0, 576.0], [42.0, 1724.5], [44.0, 1958.5], [45.0, 1617.0], [47.0, 2406.5], [46.0, 1550.0], [48.0, 1661.0], [49.0, 1714.0], [50.0, 1988.5], [51.0, 2079.0], [52.0, 1032.5], [53.0, 219.5], [54.0, 1017.0], [55.0, 371.0], [56.0, 1020.0], [57.0, 1912.0], [59.0, 389.0], [58.0, 593.0], [61.0, 319.0], [60.0, 388.5], [62.0, 308.0], [63.0, 447.5], [66.0, 397.5], [64.0, 501.0], [67.0, 246.5], [65.0, 221.0], [69.0, 233.0], [68.0, 209.0], [71.0, 184.0], [70.0, 159.5], [75.0, 147.5], [74.0, 224.5], [72.0, 190.0], [73.0, 143.0], [78.0, 90.0], [79.0, 209.0], [77.0, 196.0], [76.0, 261.0], [81.0, 141.0], [82.0, 200.5], [80.0, 173.0], [83.0, 142.0], [84.0, 170.0], [86.0, 95.0], [87.0, 179.0], [85.0, 95.5], [88.0, 195.0], [91.0, 152.0], [89.0, 66.5], [90.0, 52.5], [92.0, 1840.5], [95.0, 397.0], [93.0, 457.0], [1.0, 1413.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.71925578E12, "maxY": 60.85, "series": [{"data": [[1.71925602E12, 51.4], [1.71925584E12, 57.36666666666667], [1.71925632E12, 46.78333333333333], [1.7192559E12, 49.833333333333336], [1.71925638E12, 7.5], [1.7192562E12, 45.38333333333333], [1.71925578E12, 32.233333333333334], [1.71925626E12, 60.85], [1.71925608E12, 58.81666666666667], [1.71925614E12, 52.11666666666667], [1.71925596E12, 46.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925638E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.116666666666667, "minX": 1.71925578E12, "maxY": 61.43333333333333, "series": [{"data": [[1.71925602E12, 51.81666666666667], [1.71925584E12, 57.65], [1.71925632E12, 45.233333333333334], [1.7192559E12, 49.21666666666667], [1.71925638E12, 9.116666666666667], [1.7192562E12, 45.35], [1.71925578E12, 31.666666666666668], [1.71925626E12, 61.43333333333333], [1.71925608E12, 58.63333333333333], [1.71925614E12, 51.7], [1.71925596E12, 46.86666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71925638E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.116666666666667, "minX": 1.71925578E12, "maxY": 61.43333333333333, "series": [{"data": [[1.71925602E12, 51.81666666666667], [1.71925584E12, 57.65], [1.71925632E12, 45.233333333333334], [1.7192559E12, 49.21666666666667], [1.71925638E12, 9.116666666666667], [1.7192562E12, 45.35], [1.71925578E12, 31.666666666666668], [1.71925626E12, 61.43333333333333], [1.71925608E12, 58.63333333333333], [1.71925614E12, 51.7], [1.71925596E12, 46.86666666666667]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925638E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.116666666666667, "minX": 1.71925578E12, "maxY": 61.43333333333333, "series": [{"data": [[1.71925602E12, 51.81666666666667], [1.71925584E12, 57.65], [1.71925632E12, 45.233333333333334], [1.7192559E12, 49.21666666666667], [1.71925638E12, 9.116666666666667], [1.7192562E12, 45.35], [1.71925578E12, 31.666666666666668], [1.71925626E12, 61.43333333333333], [1.71925608E12, 58.63333333333333], [1.71925614E12, 51.7], [1.71925596E12, 46.86666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71925638E12, "title": "Total Transactions Per Second"}},
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

