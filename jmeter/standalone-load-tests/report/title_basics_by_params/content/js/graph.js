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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 23517.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 78.0], [3.7, 79.0], [3.8, 80.0], [3.9, 81.0], [4.0, 82.0], [4.1, 83.0], [4.2, 83.0], [4.3, 84.0], [4.4, 84.0], [4.5, 84.0], [4.6, 85.0], [4.7, 85.0], [4.8, 85.0], [4.9, 86.0], [5.0, 86.0], [5.1, 86.0], [5.2, 86.0], [5.3, 86.0], [5.4, 87.0], [5.5, 87.0], [5.6, 87.0], [5.7, 87.0], [5.8, 87.0], [5.9, 87.0], [6.0, 88.0], [6.1, 88.0], [6.2, 88.0], [6.3, 88.0], [6.4, 88.0], [6.5, 88.0], [6.6, 89.0], [6.7, 89.0], [6.8, 89.0], [6.9, 89.0], [7.0, 89.0], [7.1, 89.0], [7.2, 90.0], [7.3, 90.0], [7.4, 90.0], [7.5, 90.0], [7.6, 90.0], [7.7, 90.0], [7.8, 90.0], [7.9, 91.0], [8.0, 91.0], [8.1, 91.0], [8.2, 91.0], [8.3, 91.0], [8.4, 91.0], [8.5, 92.0], [8.6, 92.0], [8.7, 92.0], [8.8, 92.0], [8.9, 92.0], [9.0, 93.0], [9.1, 93.0], [9.2, 93.0], [9.3, 93.0], [9.4, 93.0], [9.5, 93.0], [9.6, 94.0], [9.7, 94.0], [9.8, 94.0], [9.9, 94.0], [10.0, 94.0], [10.1, 94.0], [10.2, 95.0], [10.3, 95.0], [10.4, 95.0], [10.5, 95.0], [10.6, 95.0], [10.7, 95.0], [10.8, 96.0], [10.9, 96.0], [11.0, 96.0], [11.1, 96.0], [11.2, 96.0], [11.3, 96.0], [11.4, 97.0], [11.5, 97.0], [11.6, 97.0], [11.7, 97.0], [11.8, 97.0], [11.9, 97.0], [12.0, 97.0], [12.1, 98.0], [12.2, 98.0], [12.3, 98.0], [12.4, 98.0], [12.5, 98.0], [12.6, 98.0], [12.7, 99.0], [12.8, 99.0], [12.9, 99.0], [13.0, 99.0], [13.1, 99.0], [13.2, 99.0], [13.3, 100.0], [13.4, 100.0], [13.5, 100.0], [13.6, 100.0], [13.7, 100.0], [13.8, 100.0], [13.9, 101.0], [14.0, 101.0], [14.1, 101.0], [14.2, 101.0], [14.3, 101.0], [14.4, 102.0], [14.5, 102.0], [14.6, 102.0], [14.7, 102.0], [14.8, 102.0], [14.9, 103.0], [15.0, 103.0], [15.1, 103.0], [15.2, 103.0], [15.3, 103.0], [15.4, 103.0], [15.5, 104.0], [15.6, 104.0], [15.7, 104.0], [15.8, 104.0], [15.9, 104.0], [16.0, 105.0], [16.1, 105.0], [16.2, 105.0], [16.3, 105.0], [16.4, 105.0], [16.5, 106.0], [16.6, 106.0], [16.7, 106.0], [16.8, 106.0], [16.9, 106.0], [17.0, 106.0], [17.1, 107.0], [17.2, 107.0], [17.3, 107.0], [17.4, 107.0], [17.5, 108.0], [17.6, 108.0], [17.7, 108.0], [17.8, 108.0], [17.9, 108.0], [18.0, 109.0], [18.1, 109.0], [18.2, 109.0], [18.3, 109.0], [18.4, 110.0], [18.5, 110.0], [18.6, 110.0], [18.7, 110.0], [18.8, 111.0], [18.9, 111.0], [19.0, 111.0], [19.1, 111.0], [19.2, 112.0], [19.3, 112.0], [19.4, 112.0], [19.5, 113.0], [19.6, 113.0], [19.7, 113.0], [19.8, 113.0], [19.9, 113.0], [20.0, 114.0], [20.1, 114.0], [20.2, 114.0], [20.3, 115.0], [20.4, 115.0], [20.5, 115.0], [20.6, 115.0], [20.7, 115.0], [20.8, 116.0], [20.9, 116.0], [21.0, 116.0], [21.1, 117.0], [21.2, 117.0], [21.3, 117.0], [21.4, 118.0], [21.5, 118.0], [21.6, 118.0], [21.7, 119.0], [21.8, 119.0], [21.9, 119.0], [22.0, 119.0], [22.1, 120.0], [22.2, 120.0], [22.3, 120.0], [22.4, 120.0], [22.5, 121.0], [22.6, 121.0], [22.7, 121.0], [22.8, 122.0], [22.9, 122.0], [23.0, 122.0], [23.1, 123.0], [23.2, 123.0], [23.3, 123.0], [23.4, 124.0], [23.5, 124.0], [23.6, 124.0], [23.7, 125.0], [23.8, 125.0], [23.9, 125.0], [24.0, 126.0], [24.1, 126.0], [24.2, 126.0], [24.3, 127.0], [24.4, 127.0], [24.5, 127.0], [24.6, 128.0], [24.7, 128.0], [24.8, 128.0], [24.9, 129.0], [25.0, 129.0], [25.1, 129.0], [25.2, 130.0], [25.3, 130.0], [25.4, 130.0], [25.5, 131.0], [25.6, 131.0], [25.7, 132.0], [25.8, 132.0], [25.9, 133.0], [26.0, 133.0], [26.1, 133.0], [26.2, 134.0], [26.3, 134.0], [26.4, 135.0], [26.5, 135.0], [26.6, 135.0], [26.7, 136.0], [26.8, 136.0], [26.9, 137.0], [27.0, 137.0], [27.1, 138.0], [27.2, 138.0], [27.3, 139.0], [27.4, 139.0], [27.5, 139.0], [27.6, 140.0], [27.7, 140.0], [27.8, 141.0], [27.9, 141.0], [28.0, 142.0], [28.1, 142.0], [28.2, 142.0], [28.3, 143.0], [28.4, 143.0], [28.5, 144.0], [28.6, 144.0], [28.7, 145.0], [28.8, 145.0], [28.9, 146.0], [29.0, 146.0], [29.1, 147.0], [29.2, 148.0], [29.3, 148.0], [29.4, 149.0], [29.5, 150.0], [29.6, 150.0], [29.7, 151.0], [29.8, 152.0], [29.9, 152.0], [30.0, 153.0], [30.1, 154.0], [30.2, 154.0], [30.3, 155.0], [30.4, 156.0], [30.5, 157.0], [30.6, 158.0], [30.7, 158.0], [30.8, 159.0], [30.9, 160.0], [31.0, 161.0], [31.1, 162.0], [31.2, 163.0], [31.3, 164.0], [31.4, 164.0], [31.5, 165.0], [31.6, 166.0], [31.7, 167.0], [31.8, 168.0], [31.9, 168.0], [32.0, 169.0], [32.1, 170.0], [32.2, 171.0], [32.3, 172.0], [32.4, 173.0], [32.5, 174.0], [32.6, 175.0], [32.7, 176.0], [32.8, 177.0], [32.9, 178.0], [33.0, 178.0], [33.1, 179.0], [33.2, 180.0], [33.3, 181.0], [33.4, 181.0], [33.5, 182.0], [33.6, 183.0], [33.7, 183.0], [33.8, 184.0], [33.9, 185.0], [34.0, 185.0], [34.1, 186.0], [34.2, 187.0], [34.3, 188.0], [34.4, 188.0], [34.5, 189.0], [34.6, 190.0], [34.7, 190.0], [34.8, 191.0], [34.9, 192.0], [35.0, 193.0], [35.1, 193.0], [35.2, 194.0], [35.3, 194.0], [35.4, 195.0], [35.5, 196.0], [35.6, 196.0], [35.7, 197.0], [35.8, 198.0], [35.9, 199.0], [36.0, 199.0], [36.1, 200.0], [36.2, 200.0], [36.3, 201.0], [36.4, 202.0], [36.5, 202.0], [36.6, 203.0], [36.7, 203.0], [36.8, 204.0], [36.9, 205.0], [37.0, 206.0], [37.1, 206.0], [37.2, 207.0], [37.3, 207.0], [37.4, 208.0], [37.5, 209.0], [37.6, 209.0], [37.7, 210.0], [37.8, 210.0], [37.9, 211.0], [38.0, 212.0], [38.1, 212.0], [38.2, 213.0], [38.3, 214.0], [38.4, 214.0], [38.5, 215.0], [38.6, 216.0], [38.7, 216.0], [38.8, 217.0], [38.9, 217.0], [39.0, 218.0], [39.1, 219.0], [39.2, 219.0], [39.3, 220.0], [39.4, 221.0], [39.5, 222.0], [39.6, 223.0], [39.7, 223.0], [39.8, 224.0], [39.9, 225.0], [40.0, 225.0], [40.1, 227.0], [40.2, 228.0], [40.3, 228.0], [40.4, 229.0], [40.5, 230.0], [40.6, 232.0], [40.7, 233.0], [40.8, 234.0], [40.9, 235.0], [41.0, 236.0], [41.1, 237.0], [41.2, 238.0], [41.3, 239.0], [41.4, 240.0], [41.5, 240.0], [41.6, 242.0], [41.7, 243.0], [41.8, 244.0], [41.9, 246.0], [42.0, 247.0], [42.1, 248.0], [42.2, 250.0], [42.3, 251.0], [42.4, 252.0], [42.5, 254.0], [42.6, 255.0], [42.7, 256.0], [42.8, 257.0], [42.9, 259.0], [43.0, 260.0], [43.1, 261.0], [43.2, 262.0], [43.3, 263.0], [43.4, 264.0], [43.5, 265.0], [43.6, 265.0], [43.7, 266.0], [43.8, 267.0], [43.9, 268.0], [44.0, 269.0], [44.1, 269.0], [44.2, 270.0], [44.3, 272.0], [44.4, 272.0], [44.5, 273.0], [44.6, 274.0], [44.7, 275.0], [44.8, 276.0], [44.9, 277.0], [45.0, 277.0], [45.1, 278.0], [45.2, 279.0], [45.3, 279.0], [45.4, 280.0], [45.5, 281.0], [45.6, 281.0], [45.7, 282.0], [45.8, 282.0], [45.9, 283.0], [46.0, 284.0], [46.1, 285.0], [46.2, 285.0], [46.3, 286.0], [46.4, 286.0], [46.5, 287.0], [46.6, 287.0], [46.7, 288.0], [46.8, 288.0], [46.9, 288.0], [47.0, 289.0], [47.1, 289.0], [47.2, 290.0], [47.3, 290.0], [47.4, 291.0], [47.5, 291.0], [47.6, 292.0], [47.7, 292.0], [47.8, 293.0], [47.9, 293.0], [48.0, 294.0], [48.1, 294.0], [48.2, 295.0], [48.3, 295.0], [48.4, 296.0], [48.5, 297.0], [48.6, 297.0], [48.7, 298.0], [48.8, 298.0], [48.9, 299.0], [49.0, 299.0], [49.1, 300.0], [49.2, 300.0], [49.3, 300.0], [49.4, 301.0], [49.5, 302.0], [49.6, 302.0], [49.7, 303.0], [49.8, 303.0], [49.9, 304.0], [50.0, 304.0], [50.1, 305.0], [50.2, 305.0], [50.3, 306.0], [50.4, 306.0], [50.5, 307.0], [50.6, 308.0], [50.7, 308.0], [50.8, 309.0], [50.9, 309.0], [51.0, 310.0], [51.1, 310.0], [51.2, 311.0], [51.3, 312.0], [51.4, 312.0], [51.5, 313.0], [51.6, 313.0], [51.7, 314.0], [51.8, 315.0], [51.9, 315.0], [52.0, 316.0], [52.1, 317.0], [52.2, 317.0], [52.3, 318.0], [52.4, 319.0], [52.5, 319.0], [52.6, 320.0], [52.7, 321.0], [52.8, 322.0], [52.9, 323.0], [53.0, 324.0], [53.1, 325.0], [53.2, 325.0], [53.3, 326.0], [53.4, 327.0], [53.5, 328.0], [53.6, 328.0], [53.7, 329.0], [53.8, 330.0], [53.9, 331.0], [54.0, 332.0], [54.1, 333.0], [54.2, 335.0], [54.3, 336.0], [54.4, 337.0], [54.5, 339.0], [54.6, 340.0], [54.7, 342.0], [54.8, 343.0], [54.9, 345.0], [55.0, 347.0], [55.1, 349.0], [55.2, 351.0], [55.3, 353.0], [55.4, 355.0], [55.5, 356.0], [55.6, 357.0], [55.7, 358.0], [55.8, 360.0], [55.9, 362.0], [56.0, 363.0], [56.1, 364.0], [56.2, 366.0], [56.3, 366.0], [56.4, 368.0], [56.5, 369.0], [56.6, 370.0], [56.7, 371.0], [56.8, 371.0], [56.9, 372.0], [57.0, 373.0], [57.1, 374.0], [57.2, 375.0], [57.3, 376.0], [57.4, 377.0], [57.5, 378.0], [57.6, 378.0], [57.7, 379.0], [57.8, 380.0], [57.9, 381.0], [58.0, 382.0], [58.1, 382.0], [58.2, 383.0], [58.3, 384.0], [58.4, 385.0], [58.5, 386.0], [58.6, 386.0], [58.7, 387.0], [58.8, 388.0], [58.9, 389.0], [59.0, 389.0], [59.1, 390.0], [59.2, 390.0], [59.3, 391.0], [59.4, 391.0], [59.5, 392.0], [59.6, 392.0], [59.7, 393.0], [59.8, 394.0], [59.9, 395.0], [60.0, 395.0], [60.1, 396.0], [60.2, 396.0], [60.3, 397.0], [60.4, 398.0], [60.5, 398.0], [60.6, 399.0], [60.7, 399.0], [60.8, 400.0], [60.9, 401.0], [61.0, 401.0], [61.1, 402.0], [61.2, 402.0], [61.3, 403.0], [61.4, 404.0], [61.5, 404.0], [61.6, 405.0], [61.7, 406.0], [61.8, 406.0], [61.9, 407.0], [62.0, 408.0], [62.1, 409.0], [62.2, 409.0], [62.3, 410.0], [62.4, 410.0], [62.5, 411.0], [62.6, 412.0], [62.7, 413.0], [62.8, 413.0], [62.9, 414.0], [63.0, 415.0], [63.1, 415.0], [63.2, 416.0], [63.3, 417.0], [63.4, 418.0], [63.5, 418.0], [63.6, 419.0], [63.7, 420.0], [63.8, 420.0], [63.9, 421.0], [64.0, 422.0], [64.1, 423.0], [64.2, 424.0], [64.3, 424.0], [64.4, 425.0], [64.5, 426.0], [64.6, 427.0], [64.7, 428.0], [64.8, 429.0], [64.9, 430.0], [65.0, 432.0], [65.1, 433.0], [65.2, 435.0], [65.3, 436.0], [65.4, 437.0], [65.5, 439.0], [65.6, 440.0], [65.7, 442.0], [65.8, 443.0], [65.9, 446.0], [66.0, 448.0], [66.1, 450.0], [66.2, 453.0], [66.3, 455.0], [66.4, 456.0], [66.5, 459.0], [66.6, 460.0], [66.7, 461.0], [66.8, 464.0], [66.9, 465.0], [67.0, 466.0], [67.1, 467.0], [67.2, 469.0], [67.3, 470.0], [67.4, 471.0], [67.5, 473.0], [67.6, 474.0], [67.7, 475.0], [67.8, 476.0], [67.9, 477.0], [68.0, 478.0], [68.1, 478.0], [68.2, 479.0], [68.3, 480.0], [68.4, 481.0], [68.5, 482.0], [68.6, 483.0], [68.7, 484.0], [68.8, 484.0], [68.9, 485.0], [69.0, 486.0], [69.1, 487.0], [69.2, 487.0], [69.3, 488.0], [69.4, 489.0], [69.5, 490.0], [69.6, 491.0], [69.7, 491.0], [69.8, 492.0], [69.9, 493.0], [70.0, 494.0], [70.1, 495.0], [70.2, 496.0], [70.3, 496.0], [70.4, 497.0], [70.5, 498.0], [70.6, 499.0], [70.7, 499.0], [70.8, 500.0], [70.9, 501.0], [71.0, 502.0], [71.1, 502.0], [71.2, 503.0], [71.3, 504.0], [71.4, 505.0], [71.5, 505.0], [71.6, 506.0], [71.7, 507.0], [71.8, 508.0], [71.9, 509.0], [72.0, 509.0], [72.1, 510.0], [72.2, 511.0], [72.3, 512.0], [72.4, 513.0], [72.5, 514.0], [72.6, 515.0], [72.7, 516.0], [72.8, 517.0], [72.9, 518.0], [73.0, 519.0], [73.1, 520.0], [73.2, 521.0], [73.3, 522.0], [73.4, 523.0], [73.5, 524.0], [73.6, 526.0], [73.7, 527.0], [73.8, 528.0], [73.9, 530.0], [74.0, 532.0], [74.1, 534.0], [74.2, 537.0], [74.3, 539.0], [74.4, 540.0], [74.5, 542.0], [74.6, 545.0], [74.7, 548.0], [74.8, 549.0], [74.9, 553.0], [75.0, 556.0], [75.1, 558.0], [75.2, 560.0], [75.3, 563.0], [75.4, 564.0], [75.5, 566.0], [75.6, 567.0], [75.7, 569.0], [75.8, 570.0], [75.9, 571.0], [76.0, 572.0], [76.1, 574.0], [76.2, 576.0], [76.3, 576.0], [76.4, 578.0], [76.5, 579.0], [76.6, 580.0], [76.7, 582.0], [76.8, 583.0], [76.9, 584.0], [77.0, 585.0], [77.1, 586.0], [77.2, 588.0], [77.3, 589.0], [77.4, 590.0], [77.5, 591.0], [77.6, 592.0], [77.7, 593.0], [77.8, 594.0], [77.9, 595.0], [78.0, 595.0], [78.1, 597.0], [78.2, 598.0], [78.3, 598.0], [78.4, 599.0], [78.5, 600.0], [78.6, 601.0], [78.7, 602.0], [78.8, 603.0], [78.9, 604.0], [79.0, 606.0], [79.1, 607.0], [79.2, 608.0], [79.3, 609.0], [79.4, 610.0], [79.5, 611.0], [79.6, 612.0], [79.7, 613.0], [79.8, 614.0], [79.9, 615.0], [80.0, 616.0], [80.1, 618.0], [80.2, 619.0], [80.3, 620.0], [80.4, 621.0], [80.5, 623.0], [80.6, 625.0], [80.7, 626.0], [80.8, 628.0], [80.9, 630.0], [81.0, 631.0], [81.1, 633.0], [81.2, 635.0], [81.3, 637.0], [81.4, 640.0], [81.5, 643.0], [81.6, 646.0], [81.7, 649.0], [81.8, 653.0], [81.9, 657.0], [82.0, 659.0], [82.1, 662.0], [82.2, 665.0], [82.3, 668.0], [82.4, 671.0], [82.5, 673.0], [82.6, 674.0], [82.7, 676.0], [82.8, 679.0], [82.9, 681.0], [83.0, 683.0], [83.1, 685.0], [83.2, 686.0], [83.3, 687.0], [83.4, 688.0], [83.5, 690.0], [83.6, 691.0], [83.7, 693.0], [83.8, 694.0], [83.9, 695.0], [84.0, 697.0], [84.1, 698.0], [84.2, 699.0], [84.3, 700.0], [84.4, 702.0], [84.5, 703.0], [84.6, 705.0], [84.7, 707.0], [84.8, 710.0], [84.9, 711.0], [85.0, 713.0], [85.1, 715.0], [85.2, 717.0], [85.3, 719.0], [85.4, 721.0], [85.5, 723.0], [85.6, 726.0], [85.7, 730.0], [85.8, 733.0], [85.9, 736.0], [86.0, 739.0], [86.1, 743.0], [86.2, 747.0], [86.3, 751.0], [86.4, 756.0], [86.5, 761.0], [86.6, 764.0], [86.7, 769.0], [86.8, 774.0], [86.9, 777.0], [87.0, 780.0], [87.1, 782.0], [87.2, 785.0], [87.3, 789.0], [87.4, 791.0], [87.5, 793.0], [87.6, 795.0], [87.7, 798.0], [87.8, 800.0], [87.9, 802.0], [88.0, 805.0], [88.1, 807.0], [88.2, 808.0], [88.3, 811.0], [88.4, 812.0], [88.5, 815.0], [88.6, 818.0], [88.7, 823.0], [88.8, 827.0], [88.9, 831.0], [89.0, 836.0], [89.1, 842.0], [89.2, 852.0], [89.3, 861.0], [89.4, 868.0], [89.5, 875.0], [89.6, 881.0], [89.7, 885.0], [89.8, 890.0], [89.9, 893.0], [90.0, 897.0], [90.1, 901.0], [90.2, 905.0], [90.3, 910.0], [90.4, 915.0], [90.5, 920.0], [90.6, 926.0], [90.7, 932.0], [90.8, 940.0], [90.9, 953.0], [91.0, 968.0], [91.1, 977.0], [91.2, 987.0], [91.3, 992.0], [91.4, 1003.0], [91.5, 1012.0], [91.6, 1019.0], [91.7, 1040.0], [91.8, 1069.0], [91.9, 1080.0], [92.0, 1089.0], [92.1, 1098.0], [92.2, 1114.0], [92.3, 1148.0], [92.4, 1172.0], [92.5, 1192.0], [92.6, 1213.0], [92.7, 1232.0], [92.8, 1249.0], [92.9, 1272.0], [93.0, 1292.0], [93.1, 1310.0], [93.2, 1344.0], [93.3, 1385.0], [93.4, 1402.0], [93.5, 1430.0], [93.6, 1477.0], [93.7, 1503.0], [93.8, 1529.0], [93.9, 1578.0], [94.0, 1611.0], [94.1, 1650.0], [94.2, 1694.0], [94.3, 1719.0], [94.4, 1771.0], [94.5, 1815.0], [94.6, 1874.0], [94.7, 1903.0], [94.8, 1968.0], [94.9, 2022.0], [95.0, 2106.0], [95.1, 2179.0], [95.2, 2224.0], [95.3, 2294.0], [95.4, 2393.0], [95.5, 2604.0], [95.6, 2815.0], [95.7, 2946.0], [95.8, 3190.0], [95.9, 3426.0], [96.0, 3602.0], [96.1, 3858.0], [96.2, 4305.0], [96.3, 4792.0], [96.4, 5100.0], [96.5, 5410.0], [96.6, 5544.0], [96.7, 5856.0], [96.8, 6080.0], [96.9, 6319.0], [97.0, 6651.0], [97.1, 6942.0], [97.2, 7164.0], [97.3, 7683.0], [97.4, 8015.0], [97.5, 8410.0], [97.6, 8635.0], [97.7, 8912.0], [97.8, 9193.0], [97.9, 9316.0], [98.0, 9529.0], [98.1, 9803.0], [98.2, 10077.0], [98.3, 10405.0], [98.4, 10717.0], [98.5, 11094.0], [98.6, 11386.0], [98.7, 11981.0], [98.8, 12802.0], [98.9, 13591.0], [99.0, 14841.0], [99.1, 15466.0], [99.2, 16306.0], [99.3, 17181.0], [99.4, 17909.0], [99.5, 18382.0], [99.6, 19205.0], [99.7, 19893.0], [99.8, 20495.0], [99.9, 21369.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4028.0, "series": [{"data": [[0.0, 2347.0], [100.0, 4028.0], [200.0, 2285.0], [300.0, 2066.0], [400.0, 1769.0], [500.0, 1362.0], [600.0, 1025.0], [700.0, 627.0], [800.0, 402.0], [900.0, 230.0], [1000.0, 135.0], [1100.0, 74.0], [1200.0, 89.0], [1300.0, 60.0], [1400.0, 54.0], [1500.0, 49.0], [1600.0, 47.0], [1700.0, 41.0], [1800.0, 40.0], [1900.0, 25.0], [2000.0, 26.0], [2100.0, 31.0], [2300.0, 18.0], [2200.0, 28.0], [2400.0, 12.0], [2500.0, 3.0], [2600.0, 10.0], [2800.0, 13.0], [2700.0, 7.0], [2900.0, 9.0], [3000.0, 8.0], [3100.0, 7.0], [3200.0, 8.0], [3300.0, 7.0], [3400.0, 14.0], [3500.0, 6.0], [3600.0, 6.0], [3700.0, 6.0], [3800.0, 7.0], [3900.0, 4.0], [4000.0, 7.0], [4200.0, 3.0], [4100.0, 2.0], [4300.0, 5.0], [4600.0, 8.0], [4400.0, 2.0], [4500.0, 2.0], [4700.0, 2.0], [4800.0, 7.0], [5000.0, 6.0], [4900.0, 3.0], [5100.0, 4.0], [5300.0, 6.0], [5200.0, 8.0], [5400.0, 12.0], [5500.0, 10.0], [5600.0, 5.0], [5700.0, 6.0], [5800.0, 9.0], [5900.0, 6.0], [6000.0, 6.0], [6100.0, 5.0], [6200.0, 11.0], [6300.0, 4.0], [6400.0, 4.0], [6500.0, 6.0], [6600.0, 9.0], [6900.0, 6.0], [6800.0, 7.0], [6700.0, 5.0], [7000.0, 10.0], [7100.0, 5.0], [7200.0, 2.0], [7300.0, 4.0], [7400.0, 3.0], [7500.0, 3.0], [7600.0, 5.0], [7900.0, 3.0], [7700.0, 3.0], [7800.0, 7.0], [8000.0, 7.0], [8100.0, 6.0], [8400.0, 7.0], [8700.0, 9.0], [8600.0, 6.0], [8500.0, 9.0], [8300.0, 5.0], [8200.0, 2.0], [9200.0, 12.0], [9000.0, 6.0], [8900.0, 5.0], [8800.0, 5.0], [9100.0, 9.0], [9300.0, 12.0], [9400.0, 7.0], [9500.0, 6.0], [9700.0, 7.0], [9600.0, 6.0], [10000.0, 8.0], [9800.0, 8.0], [9900.0, 6.0], [10200.0, 5.0], [10100.0, 5.0], [10400.0, 9.0], [10300.0, 3.0], [10700.0, 7.0], [10600.0, 5.0], [10500.0, 4.0], [11000.0, 8.0], [11100.0, 3.0], [11200.0, 11.0], [10900.0, 3.0], [10800.0, 1.0], [11700.0, 4.0], [11400.0, 2.0], [11500.0, 5.0], [11600.0, 3.0], [11300.0, 4.0], [12200.0, 3.0], [11900.0, 3.0], [11800.0, 1.0], [12000.0, 2.0], [12700.0, 2.0], [12600.0, 2.0], [12500.0, 3.0], [12400.0, 2.0], [12300.0, 2.0], [13000.0, 1.0], [13300.0, 3.0], [12800.0, 2.0], [12900.0, 5.0], [13200.0, 5.0], [13100.0, 2.0], [13600.0, 2.0], [13500.0, 2.0], [13900.0, 1.0], [14100.0, 1.0], [14000.0, 1.0], [14200.0, 3.0], [14300.0, 1.0], [14500.0, 2.0], [14800.0, 5.0], [14600.0, 1.0], [14400.0, 2.0], [15000.0, 4.0], [15200.0, 1.0], [15100.0, 2.0], [15300.0, 1.0], [14900.0, 1.0], [15600.0, 4.0], [15700.0, 3.0], [15400.0, 6.0], [15500.0, 3.0], [15800.0, 2.0], [16000.0, 2.0], [16300.0, 3.0], [15900.0, 1.0], [16200.0, 2.0], [16400.0, 2.0], [17000.0, 2.0], [16600.0, 2.0], [16800.0, 4.0], [17200.0, 5.0], [17600.0, 3.0], [18200.0, 2.0], [17800.0, 2.0], [18000.0, 6.0], [18400.0, 2.0], [19200.0, 3.0], [18600.0, 4.0], [19400.0, 4.0], [19000.0, 2.0], [18800.0, 1.0], [20000.0, 3.0], [19600.0, 2.0], [19800.0, 1.0], [20400.0, 5.0], [20200.0, 4.0], [20600.0, 3.0], [21200.0, 1.0], [21400.0, 1.0], [20800.0, 1.0], [21000.0, 2.0], [21600.0, 2.0], [22400.0, 1.0], [21800.0, 1.0], [22800.0, 2.0], [23400.0, 1.0], [16700.0, 2.0], [16900.0, 1.0], [17100.0, 3.0], [17300.0, 1.0], [18300.0, 3.0], [17700.0, 4.0], [18100.0, 4.0], [17900.0, 4.0], [17500.0, 1.0], [18700.0, 3.0], [19300.0, 4.0], [19100.0, 3.0], [18500.0, 1.0], [18900.0, 1.0], [20100.0, 5.0], [19500.0, 3.0], [19700.0, 1.0], [20300.0, 1.0], [21100.0, 3.0], [20500.0, 4.0], [20700.0, 2.0], [20900.0, 1.0], [21300.0, 2.0], [22500.0, 1.0], [22100.0, 2.0], [22900.0, 1.0], [23500.0, 1.0], [22700.0, 2.0], [23300.0, 1.0]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 619.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 11905.0, "series": [{"data": [[0.0, 11905.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4029.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1116.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 619.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.587064676616917, "minX": 1.7187315E12, "maxY": 60.0, "series": [{"data": [[1.7187315E12, 3.587064676616917], [1.71873198E12, 58.7016985138005], [1.7187318E12, 37.61914357682615], [1.71873162E12, 16.302730970366074], [1.7187321E12, 57.412023460410545], [1.71873192E12, 52.125000000000014], [1.71873174E12, 30.29121863799285], [1.71873156E12, 9.33922996878252], [1.71873204E12, 60.0], [1.71873186E12, 44.89094759131824], [1.71873168E12, 23.371673819742476]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187321E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 141.41847826086948, "minX": 1.0, "maxY": 1565.4201430274127, "series": [{"data": [[2.0, 416.9032258064516], [3.0, 344.25000000000006], [4.0, 296.327868852459], [5.0, 245.35064935064935], [6.0, 237.76666666666665], [7.0, 240.28301886792445], [8.0, 239.4098360655738], [9.0, 148.2058823529412], [10.0, 276.61437908496725], [11.0, 187.88484848484848], [12.0, 141.41847826086948], [13.0, 152.10659898477152], [14.0, 271.9052132701421], [15.0, 172.94782608695647], [16.0, 177.03361344537828], [17.0, 187.57421875000006], [18.0, 196.95454545454564], [19.0, 180.3879003558718], [20.0, 164.1926910299002], [21.0, 197.40129449838187], [22.0, 245.12820512820528], [23.0, 210.19365079365065], [24.0, 298.88012618296517], [25.0, 167.33333333333326], [26.0, 264.5833333333335], [27.0, 224.92151162790697], [28.0, 292.4011299435027], [29.0, 271.2016574585635], [30.0, 526.669064748202], [31.0, 337.7746031746034], [32.0, 484.7785714285714], [33.0, 520.2718749999998], [34.0, 713.5283842794756], [35.0, 683.324232081911], [36.0, 761.8154981549811], [37.0, 486.71954674220973], [38.0, 615.2834008097173], [39.0, 977.1472868217061], [40.0, 880.8165938864623], [41.0, 838.6821192052981], [42.0, 961.8311688311686], [43.0, 1025.625874125874], [44.0, 889.4609929078011], [45.0, 935.3922413793107], [46.0, 1085.194346289752], [47.0, 1043.695833333333], [48.0, 1174.159169550172], [49.0, 834.3519163763068], [50.0, 1156.9282868525895], [51.0, 1424.3675213675215], [52.0, 1168.2041522491343], [53.0, 1157.9307692307684], [54.0, 1389.178260869564], [55.0, 1298.5121212121232], [56.0, 1042.85873605948], [57.0, 1504.3632653061222], [58.0, 1325.0649819494583], [59.0, 1337.627376425855], [60.0, 1565.4201430274127], [1.0, 673.4615384615385]], "isOverall": false, "label": "TitleBasics by params", "isController": false}, {"data": [[38.536306525553314, 807.6459335559466]], "isOverall": false, "label": "TitleBasics by params-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 580.25, "minX": 1.7187315E12, "maxY": 305510.8333333333, "series": [{"data": [[1.7187315E12, 25637.966666666667], [1.71873198E12, 246712.7], [1.7187318E12, 260315.13333333333], [1.71873162E12, 225885.53333333333], [1.7187321E12, 88513.75], [1.71873192E12, 253885.75], [1.71873174E12, 293082.51666666666], [1.71873156E12, 125710.16666666667], [1.71873204E12, 245414.65], [1.71873186E12, 247181.78333333333], [1.71873168E12, 305510.8333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7187315E12, 580.25], [1.71873198E12, 5518.883333333333], [1.7187318E12, 5828.1], [1.71873162E12, 5016.966666666666], [1.7187321E12, 2014.3833333333334], [1.71873192E12, 5670.65], [1.71873174E12, 6560.866666666667], [1.71873156E12, 2781.9666666666667], [1.71873204E12, 5478.25], [1.71873186E12, 5540.666666666667], [1.71873168E12, 6836.983333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187321E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 148.27159209157116, "minX": 1.7187315E12, "maxY": 1951.9662756598234, "series": [{"data": [[1.7187315E12, 166.65671641791033], [1.71873198E12, 1455.8237791932033], [1.7187318E12, 732.7717884130985], [1.71873162E12, 156.74201045903524], [1.7187321E12, 1951.9662756598234], [1.71873192E12, 1181.7697095435688], [1.71873174E12, 400.7791218637994], [1.71873156E12, 148.27159209157116], [1.71873204E12, 1483.0851293103424], [1.71873186E12, 1010.9761778718882], [1.71873168E12, 197.70815450643755]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187321E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 145.66389177939666, "minX": 1.7187315E12, "maxY": 1949.7287390029308, "series": [{"data": [[1.7187315E12, 164.41293532338318], [1.71873198E12, 1453.1963906581734], [1.7187318E12, 728.3571788413099], [1.71873162E12, 153.00987797791987], [1.7187321E12, 1949.7287390029308], [1.71873192E12, 1178.7785269709523], [1.71873174E12, 397.36290322580675], [1.71873156E12, 145.66389177939666], [1.71873204E12, 1480.216056034482], [1.71873186E12, 1008.4822657490718], [1.71873168E12, 194.94935622317576]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187321E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4055781522370715, "minX": 1.7187315E12, "maxY": 1.1642228739002947, "series": [{"data": [[1.7187315E12, 0.8805970149253736], [1.71873198E12, 1.1337579617834384], [1.7187318E12, 0.7753148614609571], [1.71873162E12, 0.4055781522370715], [1.7187321E12, 1.1642228739002947], [1.71873192E12, 1.0612033195020756], [1.71873174E12, 0.5649641577060931], [1.71873156E12, 0.47138397502601365], [1.71873204E12, 1.0457974137931063], [1.71873186E12, 0.9168872419269454], [1.71873168E12, 0.4163090128755374]], "isOverall": false, "label": "TitleBasics by params", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187321E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 75.0, "minX": 1.7187315E12, "maxY": 23517.0, "series": [{"data": [[1.7187315E12, 1752.0], [1.71873198E12, 23517.0], [1.7187318E12, 11214.0], [1.71873162E12, 1545.0], [1.7187321E12, 23459.0], [1.71873192E12, 18382.0], [1.71873174E12, 6421.0], [1.71873156E12, 1350.0], [1.71873204E12, 22729.0], [1.71873186E12, 14591.0], [1.71873168E12, 3858.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7187315E12, 77.0], [1.71873198E12, 80.0], [1.7187318E12, 76.0], [1.71873162E12, 75.0], [1.7187321E12, 103.0], [1.71873192E12, 105.0], [1.71873174E12, 80.0], [1.71873156E12, 77.0], [1.71873204E12, 102.0], [1.71873186E12, 76.0], [1.71873168E12, 78.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7187315E12, 229.4000000000001], [1.71873198E12, 1816.1999999999998], [1.7187318E12, 891.2000000000003], [1.71873162E12, 204.0], [1.7187321E12, 7796.6], [1.71873192E12, 1383.899999999999], [1.71873174E12, 597.0], [1.71873156E12, 193.0], [1.71873204E12, 1850.3000000000013], [1.71873186E12, 1299.6000000000001], [1.71873168E12, 267.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7187315E12, 1455.7599999999948], [1.71873198E12, 20118.899999999998], [1.7187318E12, 9303.489999999998], [1.71873162E12, 1237.0], [1.7187321E12, 21285.160000000007], [1.71873192E12, 15748.469999999996], [1.71873174E12, 5075.000000000003], [1.71873156E12, 1197.65], [1.71873204E12, 20059.090000000007], [1.71873186E12, 12363.359999999999], [1.71873168E12, 1744.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7187315E12, 117.0], [1.71873198E12, 539.5], [1.7187318E12, 383.5], [1.71873162E12, 108.0], [1.7187321E12, 525.0], [1.71873192E12, 495.0], [1.71873174E12, 215.0], [1.71873156E12, 113.0], [1.71873204E12, 518.0], [1.71873186E12, 461.0], [1.71873168E12, 115.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7187315E12, 532.9999999999991], [1.71873198E12, 9079.849999999986], [1.7187318E12, 3500.449999999998], [1.71873162E12, 589.5], [1.7187321E12, 10854.39999999999], [1.71873192E12, 6884.499999999996], [1.71873174E12, 1477.0], [1.71873156E12, 557.25], [1.71873204E12, 9684.099999999991], [1.71873186E12, 5555.199999999999], [1.71873168E12, 674.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187321E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1430.0, "series": [{"data": [[2.0, 118.0], [3.0, 231.0], [4.0, 146.0], [5.0, 104.0], [6.0, 108.5], [7.0, 114.0], [8.0, 116.5], [9.0, 118.0], [10.0, 120.0], [11.0, 117.0], [12.0, 121.0], [13.0, 121.0], [14.0, 117.0], [15.0, 119.5], [16.0, 108.0], [17.0, 116.0], [18.0, 419.5], [19.0, 107.0], [20.0, 129.0], [21.0, 310.0], [22.0, 150.0], [23.0, 397.0], [24.0, 284.5], [25.0, 211.0], [26.0, 445.0], [27.0, 430.0], [28.0, 406.0], [29.0, 392.0], [30.0, 376.0], [31.0, 406.5], [32.0, 405.0], [33.0, 411.0], [35.0, 328.0], [34.0, 412.0], [36.0, 275.5], [37.0, 448.0], [39.0, 269.0], [38.0, 392.0], [40.0, 216.0], [41.0, 200.0], [43.0, 160.0], [42.0, 268.0], [44.0, 184.0], [45.0, 372.0], [46.0, 130.0], [47.0, 124.5], [49.0, 151.0], [48.0, 203.0], [50.0, 118.0], [51.0, 105.0], [52.0, 125.5], [53.0, 119.0], [54.0, 196.0], [66.0, 227.0], [1.0, 1430.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 0.0], [4.0, 0.0], [5.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [19.0, 0.0], [20.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0], [32.0, 0.0], [33.0, 0.0], [35.0, 0.0], [34.0, 0.0], [36.0, 0.0], [37.0, 0.0], [39.0, 0.0], [38.0, 0.0], [40.0, 0.0], [41.0, 0.0], [43.0, 0.0], [42.0, 0.0], [44.0, 0.0], [45.0, 0.0], [46.0, 0.0], [47.0, 0.0], [49.0, 0.0], [48.0, 0.0], [50.0, 0.0], [52.0, 0.0], [53.0, 0.0], [66.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1430.0, "series": [{"data": [[2.0, 117.0], [3.0, 231.0], [4.0, 145.0], [5.0, 101.0], [6.0, 107.5], [7.0, 110.0], [8.0, 113.5], [9.0, 116.0], [10.0, 117.0], [11.0, 113.0], [12.0, 119.0], [13.0, 119.0], [14.0, 115.0], [15.0, 117.5], [16.0, 105.0], [17.0, 112.0], [18.0, 417.5], [19.0, 105.0], [20.0, 126.0], [21.0, 306.0], [22.0, 149.0], [23.0, 394.0], [24.0, 282.0], [25.0, 207.0], [26.0, 443.0], [27.0, 427.0], [28.0, 402.0], [29.0, 389.0], [30.0, 372.0], [31.0, 402.5], [32.0, 403.0], [33.0, 408.0], [35.0, 325.0], [34.0, 407.0], [36.0, 272.5], [37.0, 445.5], [39.0, 267.0], [38.0, 389.0], [40.0, 212.0], [41.0, 197.5], [43.0, 158.0], [42.0, 266.0], [44.0, 180.0], [45.0, 370.0], [46.0, 127.0], [47.0, 120.0], [49.0, 148.0], [48.0, 196.0], [50.0, 116.0], [51.0, 102.0], [52.0, 118.5], [53.0, 116.0], [54.0, 194.5], [66.0, 226.0], [1.0, 1430.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 0.0], [4.0, 0.0], [5.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [17.0, 0.0], [19.0, 0.0], [20.0, 0.0], [21.0, 0.0], [22.0, 0.0], [23.0, 0.0], [24.0, 0.0], [25.0, 0.0], [26.0, 0.0], [27.0, 0.0], [28.0, 0.0], [29.0, 0.0], [30.0, 0.0], [31.0, 0.0], [32.0, 0.0], [33.0, 0.0], [35.0, 0.0], [34.0, 0.0], [36.0, 0.0], [37.0, 0.0], [39.0, 0.0], [38.0, 0.0], [40.0, 0.0], [41.0, 0.0], [43.0, 0.0], [42.0, 0.0], [44.0, 0.0], [45.0, 0.0], [46.0, 0.0], [47.0, 0.0], [49.0, 0.0], [48.0, 0.0], [50.0, 0.0], [52.0, 0.0], [53.0, 0.0], [66.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.35, "minX": 1.7187315E12, "maxY": 38.8, "series": [{"data": [[1.7187315E12, 3.35], [1.71873198E12, 31.516666666666666], [1.7187318E12, 33.13333333333333], [1.71873162E12, 28.783333333333335], [1.7187321E12, 10.566666666666666], [1.71873192E12, 32.28333333333333], [1.71873174E12, 37.55], [1.71873156E12, 16.066666666666666], [1.71873204E12, 30.983333333333334], [1.71873186E12, 31.45], [1.71873168E12, 38.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187321E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.7187315E12, "maxY": 37.483333333333334, "series": [{"data": [[1.7187315E12, 3.183333333333333], [1.71873198E12, 30.266666666666666], [1.7187318E12, 31.966666666666665], [1.71873162E12, 27.483333333333334], [1.7187321E12, 11.05], [1.71873192E12, 31.1], [1.71873174E12, 35.983333333333334], [1.71873156E12, 15.233333333333333], [1.71873204E12, 30.033333333333335], [1.71873186E12, 30.383333333333333], [1.71873168E12, 37.483333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7187315E12, 0.16666666666666666], [1.71873198E12, 1.1333333333333333], [1.7187318E12, 1.1166666666666667], [1.71873162E12, 1.2], [1.7187321E12, 0.31666666666666665], [1.71873192E12, 1.0333333333333334], [1.71873174E12, 1.2166666666666666], [1.71873156E12, 0.7833333333333333], [1.71873204E12, 0.9], [1.71873186E12, 1.1], [1.71873168E12, 1.35]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7187321E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.7187315E12, "maxY": 37.483333333333334, "series": [{"data": [[1.7187315E12, 0.16666666666666666], [1.71873198E12, 1.1333333333333333], [1.7187318E12, 1.1166666666666667], [1.71873162E12, 1.2], [1.7187321E12, 0.31666666666666665], [1.71873192E12, 1.0333333333333334], [1.71873174E12, 1.2166666666666666], [1.71873156E12, 0.7833333333333333], [1.71873204E12, 0.9], [1.71873186E12, 1.1], [1.71873168E12, 1.35]], "isOverall": false, "label": "TitleBasics by params-failure", "isController": false}, {"data": [[1.7187315E12, 3.183333333333333], [1.71873198E12, 30.266666666666666], [1.7187318E12, 31.966666666666665], [1.71873162E12, 27.483333333333334], [1.7187321E12, 11.05], [1.71873192E12, 31.1], [1.71873174E12, 35.983333333333334], [1.71873156E12, 15.233333333333333], [1.71873204E12, 30.033333333333335], [1.71873186E12, 30.383333333333333], [1.71873168E12, 37.483333333333334]], "isOverall": false, "label": "TitleBasics by params-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187321E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.7187315E12, "maxY": 37.483333333333334, "series": [{"data": [[1.7187315E12, 3.183333333333333], [1.71873198E12, 30.266666666666666], [1.7187318E12, 31.966666666666665], [1.71873162E12, 27.483333333333334], [1.7187321E12, 11.05], [1.71873192E12, 31.1], [1.71873174E12, 35.983333333333334], [1.71873156E12, 15.233333333333333], [1.71873204E12, 30.033333333333335], [1.71873186E12, 30.383333333333333], [1.71873168E12, 37.483333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7187315E12, 0.16666666666666666], [1.71873198E12, 1.1333333333333333], [1.7187318E12, 1.1166666666666667], [1.71873162E12, 1.2], [1.7187321E12, 0.31666666666666665], [1.71873192E12, 1.0333333333333334], [1.71873174E12, 1.2166666666666666], [1.71873156E12, 0.7833333333333333], [1.71873204E12, 0.9], [1.71873186E12, 1.1], [1.71873168E12, 1.35]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7187321E12, "title": "Total Transactions Per Second"}},
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

