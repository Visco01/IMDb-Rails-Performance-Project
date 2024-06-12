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
        data: {"result": {"minY": 111.0, "minX": 0.0, "maxY": 3754.0, "series": [{"data": [[0.0, 111.0], [0.1, 112.0], [0.2, 113.0], [0.3, 116.0], [0.4, 118.0], [0.5, 119.0], [0.6, 119.0], [0.7, 120.0], [0.8, 120.0], [0.9, 121.0], [1.0, 121.0], [1.1, 121.0], [1.2, 121.0], [1.3, 121.0], [1.4, 122.0], [1.5, 122.0], [1.6, 125.0], [1.7, 125.0], [1.8, 127.0], [1.9, 130.0], [2.0, 130.0], [2.1, 132.0], [2.2, 132.0], [2.3, 133.0], [2.4, 134.0], [2.5, 134.0], [2.6, 137.0], [2.7, 138.0], [2.8, 138.0], [2.9, 139.0], [3.0, 143.0], [3.1, 143.0], [3.2, 143.0], [3.3, 144.0], [3.4, 145.0], [3.5, 145.0], [3.6, 146.0], [3.7, 146.0], [3.8, 147.0], [3.9, 148.0], [4.0, 148.0], [4.1, 148.0], [4.2, 149.0], [4.3, 150.0], [4.4, 150.0], [4.5, 150.0], [4.6, 151.0], [4.7, 151.0], [4.8, 152.0], [4.9, 152.0], [5.0, 153.0], [5.1, 154.0], [5.2, 154.0], [5.3, 155.0], [5.4, 155.0], [5.5, 158.0], [5.6, 159.0], [5.7, 159.0], [5.8, 160.0], [5.9, 160.0], [6.0, 161.0], [6.1, 162.0], [6.2, 162.0], [6.3, 163.0], [6.4, 164.0], [6.5, 164.0], [6.6, 165.0], [6.7, 166.0], [6.8, 166.0], [6.9, 167.0], [7.0, 168.0], [7.1, 169.0], [7.2, 170.0], [7.3, 170.0], [7.4, 171.0], [7.5, 171.0], [7.6, 172.0], [7.7, 173.0], [7.8, 173.0], [7.9, 173.0], [8.0, 174.0], [8.1, 174.0], [8.2, 175.0], [8.3, 175.0], [8.4, 176.0], [8.5, 176.0], [8.6, 176.0], [8.7, 176.0], [8.8, 176.0], [8.9, 179.0], [9.0, 180.0], [9.1, 181.0], [9.2, 181.0], [9.3, 182.0], [9.4, 182.0], [9.5, 183.0], [9.6, 187.0], [9.7, 187.0], [9.8, 188.0], [9.9, 188.0], [10.0, 189.0], [10.1, 189.0], [10.2, 189.0], [10.3, 190.0], [10.4, 190.0], [10.5, 191.0], [10.6, 192.0], [10.7, 193.0], [10.8, 193.0], [10.9, 194.0], [11.0, 195.0], [11.1, 196.0], [11.2, 196.0], [11.3, 196.0], [11.4, 197.0], [11.5, 197.0], [11.6, 197.0], [11.7, 197.0], [11.8, 198.0], [11.9, 198.0], [12.0, 200.0], [12.1, 201.0], [12.2, 201.0], [12.3, 201.0], [12.4, 201.0], [12.5, 204.0], [12.6, 204.0], [12.7, 204.0], [12.8, 205.0], [12.9, 205.0], [13.0, 205.0], [13.1, 206.0], [13.2, 206.0], [13.3, 206.0], [13.4, 207.0], [13.5, 208.0], [13.6, 208.0], [13.7, 209.0], [13.8, 210.0], [13.9, 210.0], [14.0, 211.0], [14.1, 211.0], [14.2, 212.0], [14.3, 213.0], [14.4, 214.0], [14.5, 215.0], [14.6, 215.0], [14.7, 217.0], [14.8, 217.0], [14.9, 218.0], [15.0, 221.0], [15.1, 224.0], [15.2, 227.0], [15.3, 228.0], [15.4, 228.0], [15.5, 230.0], [15.6, 232.0], [15.7, 234.0], [15.8, 234.0], [15.9, 235.0], [16.0, 235.0], [16.1, 235.0], [16.2, 236.0], [16.3, 237.0], [16.4, 238.0], [16.5, 238.0], [16.6, 239.0], [16.7, 240.0], [16.8, 241.0], [16.9, 241.0], [17.0, 242.0], [17.1, 244.0], [17.2, 247.0], [17.3, 248.0], [17.4, 251.0], [17.5, 251.0], [17.6, 252.0], [17.7, 253.0], [17.8, 254.0], [17.9, 255.0], [18.0, 256.0], [18.1, 257.0], [18.2, 260.0], [18.3, 261.0], [18.4, 261.0], [18.5, 262.0], [18.6, 263.0], [18.7, 264.0], [18.8, 265.0], [18.9, 267.0], [19.0, 267.0], [19.1, 269.0], [19.2, 276.0], [19.3, 277.0], [19.4, 279.0], [19.5, 279.0], [19.6, 280.0], [19.7, 280.0], [19.8, 281.0], [19.9, 281.0], [20.0, 285.0], [20.1, 287.0], [20.2, 288.0], [20.3, 288.0], [20.4, 288.0], [20.5, 289.0], [20.6, 291.0], [20.7, 291.0], [20.8, 291.0], [20.9, 292.0], [21.0, 292.0], [21.1, 292.0], [21.2, 294.0], [21.3, 296.0], [21.4, 298.0], [21.5, 303.0], [21.6, 303.0], [21.7, 307.0], [21.8, 307.0], [21.9, 309.0], [22.0, 309.0], [22.1, 314.0], [22.2, 315.0], [22.3, 315.0], [22.4, 317.0], [22.5, 322.0], [22.6, 324.0], [22.7, 328.0], [22.8, 329.0], [22.9, 329.0], [23.0, 329.0], [23.1, 331.0], [23.2, 332.0], [23.3, 333.0], [23.4, 336.0], [23.5, 336.0], [23.6, 337.0], [23.7, 337.0], [23.8, 339.0], [23.9, 339.0], [24.0, 339.0], [24.1, 340.0], [24.2, 340.0], [24.3, 342.0], [24.4, 345.0], [24.5, 349.0], [24.6, 349.0], [24.7, 350.0], [24.8, 352.0], [24.9, 353.0], [25.0, 353.0], [25.1, 354.0], [25.2, 354.0], [25.3, 354.0], [25.4, 355.0], [25.5, 355.0], [25.6, 356.0], [25.7, 356.0], [25.8, 358.0], [25.9, 359.0], [26.0, 362.0], [26.1, 365.0], [26.2, 367.0], [26.3, 370.0], [26.4, 370.0], [26.5, 370.0], [26.6, 371.0], [26.7, 373.0], [26.8, 377.0], [26.9, 378.0], [27.0, 380.0], [27.1, 383.0], [27.2, 383.0], [27.3, 385.0], [27.4, 385.0], [27.5, 385.0], [27.6, 387.0], [27.7, 392.0], [27.8, 393.0], [27.9, 394.0], [28.0, 395.0], [28.1, 398.0], [28.2, 398.0], [28.3, 398.0], [28.4, 402.0], [28.5, 403.0], [28.6, 404.0], [28.7, 407.0], [28.8, 408.0], [28.9, 411.0], [29.0, 411.0], [29.1, 412.0], [29.2, 412.0], [29.3, 413.0], [29.4, 414.0], [29.5, 414.0], [29.6, 415.0], [29.7, 419.0], [29.8, 420.0], [29.9, 422.0], [30.0, 423.0], [30.1, 424.0], [30.2, 425.0], [30.3, 428.0], [30.4, 430.0], [30.5, 432.0], [30.6, 433.0], [30.7, 435.0], [30.8, 438.0], [30.9, 439.0], [31.0, 442.0], [31.1, 442.0], [31.2, 444.0], [31.3, 446.0], [31.4, 449.0], [31.5, 450.0], [31.6, 450.0], [31.7, 452.0], [31.8, 452.0], [31.9, 454.0], [32.0, 455.0], [32.1, 456.0], [32.2, 457.0], [32.3, 457.0], [32.4, 458.0], [32.5, 459.0], [32.6, 461.0], [32.7, 462.0], [32.8, 462.0], [32.9, 462.0], [33.0, 463.0], [33.1, 463.0], [33.2, 464.0], [33.3, 464.0], [33.4, 464.0], [33.5, 465.0], [33.6, 465.0], [33.7, 467.0], [33.8, 468.0], [33.9, 468.0], [34.0, 469.0], [34.1, 470.0], [34.2, 471.0], [34.3, 471.0], [34.4, 471.0], [34.5, 472.0], [34.6, 475.0], [34.7, 475.0], [34.8, 476.0], [34.9, 476.0], [35.0, 476.0], [35.1, 477.0], [35.2, 478.0], [35.3, 480.0], [35.4, 481.0], [35.5, 481.0], [35.6, 481.0], [35.7, 484.0], [35.8, 489.0], [35.9, 490.0], [36.0, 492.0], [36.1, 493.0], [36.2, 493.0], [36.3, 493.0], [36.4, 494.0], [36.5, 494.0], [36.6, 495.0], [36.7, 498.0], [36.8, 502.0], [36.9, 503.0], [37.0, 504.0], [37.1, 505.0], [37.2, 506.0], [37.3, 508.0], [37.4, 513.0], [37.5, 513.0], [37.6, 517.0], [37.7, 517.0], [37.8, 520.0], [37.9, 524.0], [38.0, 526.0], [38.1, 527.0], [38.2, 527.0], [38.3, 528.0], [38.4, 529.0], [38.5, 530.0], [38.6, 530.0], [38.7, 533.0], [38.8, 537.0], [38.9, 537.0], [39.0, 538.0], [39.1, 539.0], [39.2, 541.0], [39.3, 541.0], [39.4, 542.0], [39.5, 544.0], [39.6, 545.0], [39.7, 545.0], [39.8, 547.0], [39.9, 551.0], [40.0, 551.0], [40.1, 552.0], [40.2, 553.0], [40.3, 555.0], [40.4, 557.0], [40.5, 558.0], [40.6, 560.0], [40.7, 560.0], [40.8, 561.0], [40.9, 563.0], [41.0, 564.0], [41.1, 567.0], [41.2, 567.0], [41.3, 573.0], [41.4, 574.0], [41.5, 575.0], [41.6, 581.0], [41.7, 589.0], [41.8, 590.0], [41.9, 592.0], [42.0, 593.0], [42.1, 593.0], [42.2, 593.0], [42.3, 594.0], [42.4, 599.0], [42.5, 599.0], [42.6, 601.0], [42.7, 601.0], [42.8, 604.0], [42.9, 610.0], [43.0, 612.0], [43.1, 614.0], [43.2, 615.0], [43.3, 616.0], [43.4, 616.0], [43.5, 618.0], [43.6, 618.0], [43.7, 618.0], [43.8, 620.0], [43.9, 625.0], [44.0, 629.0], [44.1, 633.0], [44.2, 634.0], [44.3, 636.0], [44.4, 636.0], [44.5, 638.0], [44.6, 638.0], [44.7, 639.0], [44.8, 640.0], [44.9, 645.0], [45.0, 646.0], [45.1, 646.0], [45.2, 646.0], [45.3, 649.0], [45.4, 652.0], [45.5, 658.0], [45.6, 659.0], [45.7, 663.0], [45.8, 663.0], [45.9, 665.0], [46.0, 665.0], [46.1, 666.0], [46.2, 669.0], [46.3, 670.0], [46.4, 670.0], [46.5, 671.0], [46.6, 672.0], [46.7, 672.0], [46.8, 672.0], [46.9, 673.0], [47.0, 673.0], [47.1, 673.0], [47.2, 676.0], [47.3, 677.0], [47.4, 683.0], [47.5, 686.0], [47.6, 687.0], [47.7, 687.0], [47.8, 688.0], [47.9, 689.0], [48.0, 690.0], [48.1, 693.0], [48.2, 694.0], [48.3, 695.0], [48.4, 697.0], [48.5, 699.0], [48.6, 701.0], [48.7, 702.0], [48.8, 703.0], [48.9, 706.0], [49.0, 707.0], [49.1, 710.0], [49.2, 712.0], [49.3, 713.0], [49.4, 718.0], [49.5, 724.0], [49.6, 724.0], [49.7, 725.0], [49.8, 726.0], [49.9, 727.0], [50.0, 727.0], [50.1, 728.0], [50.2, 730.0], [50.3, 730.0], [50.4, 731.0], [50.5, 735.0], [50.6, 735.0], [50.7, 735.0], [50.8, 740.0], [50.9, 740.0], [51.0, 740.0], [51.1, 742.0], [51.2, 743.0], [51.3, 744.0], [51.4, 747.0], [51.5, 747.0], [51.6, 751.0], [51.7, 752.0], [51.8, 752.0], [51.9, 754.0], [52.0, 754.0], [52.1, 755.0], [52.2, 755.0], [52.3, 757.0], [52.4, 758.0], [52.5, 760.0], [52.6, 760.0], [52.7, 760.0], [52.8, 760.0], [52.9, 763.0], [53.0, 764.0], [53.1, 764.0], [53.2, 768.0], [53.3, 770.0], [53.4, 771.0], [53.5, 771.0], [53.6, 771.0], [53.7, 774.0], [53.8, 774.0], [53.9, 775.0], [54.0, 776.0], [54.1, 782.0], [54.2, 783.0], [54.3, 786.0], [54.4, 786.0], [54.5, 786.0], [54.6, 787.0], [54.7, 790.0], [54.8, 791.0], [54.9, 793.0], [55.0, 795.0], [55.1, 797.0], [55.2, 805.0], [55.3, 805.0], [55.4, 813.0], [55.5, 815.0], [55.6, 822.0], [55.7, 828.0], [55.8, 829.0], [55.9, 831.0], [56.0, 831.0], [56.1, 831.0], [56.2, 832.0], [56.3, 834.0], [56.4, 846.0], [56.5, 855.0], [56.6, 859.0], [56.7, 861.0], [56.8, 864.0], [56.9, 865.0], [57.0, 865.0], [57.1, 867.0], [57.2, 869.0], [57.3, 869.0], [57.4, 872.0], [57.5, 873.0], [57.6, 874.0], [57.7, 880.0], [57.8, 880.0], [57.9, 880.0], [58.0, 881.0], [58.1, 882.0], [58.2, 882.0], [58.3, 884.0], [58.4, 885.0], [58.5, 886.0], [58.6, 890.0], [58.7, 891.0], [58.8, 892.0], [58.9, 894.0], [59.0, 894.0], [59.1, 898.0], [59.2, 903.0], [59.3, 909.0], [59.4, 910.0], [59.5, 916.0], [59.6, 917.0], [59.7, 919.0], [59.8, 920.0], [59.9, 924.0], [60.0, 926.0], [60.1, 927.0], [60.2, 928.0], [60.3, 929.0], [60.4, 930.0], [60.5, 930.0], [60.6, 934.0], [60.7, 935.0], [60.8, 939.0], [60.9, 940.0], [61.0, 940.0], [61.1, 944.0], [61.2, 945.0], [61.3, 949.0], [61.4, 950.0], [61.5, 957.0], [61.6, 958.0], [61.7, 958.0], [61.8, 961.0], [61.9, 962.0], [62.0, 965.0], [62.1, 975.0], [62.2, 994.0], [62.3, 995.0], [62.4, 997.0], [62.5, 1001.0], [62.6, 1002.0], [62.7, 1003.0], [62.8, 1004.0], [62.9, 1014.0], [63.0, 1021.0], [63.1, 1026.0], [63.2, 1028.0], [63.3, 1029.0], [63.4, 1030.0], [63.5, 1030.0], [63.6, 1031.0], [63.7, 1032.0], [63.8, 1033.0], [63.9, 1036.0], [64.0, 1036.0], [64.1, 1037.0], [64.2, 1038.0], [64.3, 1039.0], [64.4, 1039.0], [64.5, 1039.0], [64.6, 1040.0], [64.7, 1046.0], [64.8, 1046.0], [64.9, 1056.0], [65.0, 1056.0], [65.1, 1056.0], [65.2, 1062.0], [65.3, 1064.0], [65.4, 1070.0], [65.5, 1070.0], [65.6, 1072.0], [65.7, 1074.0], [65.8, 1076.0], [65.9, 1076.0], [66.0, 1076.0], [66.1, 1079.0], [66.2, 1080.0], [66.3, 1084.0], [66.4, 1084.0], [66.5, 1086.0], [66.6, 1092.0], [66.7, 1096.0], [66.8, 1102.0], [66.9, 1110.0], [67.0, 1110.0], [67.1, 1118.0], [67.2, 1121.0], [67.3, 1125.0], [67.4, 1137.0], [67.5, 1144.0], [67.6, 1145.0], [67.7, 1147.0], [67.8, 1148.0], [67.9, 1151.0], [68.0, 1152.0], [68.1, 1154.0], [68.2, 1161.0], [68.3, 1162.0], [68.4, 1163.0], [68.5, 1163.0], [68.6, 1165.0], [68.7, 1169.0], [68.8, 1170.0], [68.9, 1173.0], [69.0, 1174.0], [69.1, 1176.0], [69.2, 1181.0], [69.3, 1191.0], [69.4, 1197.0], [69.5, 1198.0], [69.6, 1203.0], [69.7, 1204.0], [69.8, 1211.0], [69.9, 1212.0], [70.0, 1214.0], [70.1, 1219.0], [70.2, 1220.0], [70.3, 1232.0], [70.4, 1236.0], [70.5, 1241.0], [70.6, 1242.0], [70.7, 1245.0], [70.8, 1246.0], [70.9, 1247.0], [71.0, 1248.0], [71.1, 1262.0], [71.2, 1263.0], [71.3, 1266.0], [71.4, 1270.0], [71.5, 1271.0], [71.6, 1273.0], [71.7, 1277.0], [71.8, 1279.0], [71.9, 1286.0], [72.0, 1290.0], [72.1, 1297.0], [72.2, 1298.0], [72.3, 1298.0], [72.4, 1299.0], [72.5, 1310.0], [72.6, 1311.0], [72.7, 1313.0], [72.8, 1315.0], [72.9, 1316.0], [73.0, 1326.0], [73.1, 1335.0], [73.2, 1336.0], [73.3, 1341.0], [73.4, 1349.0], [73.5, 1354.0], [73.6, 1354.0], [73.7, 1356.0], [73.8, 1357.0], [73.9, 1362.0], [74.0, 1366.0], [74.1, 1377.0], [74.2, 1379.0], [74.3, 1384.0], [74.4, 1385.0], [74.5, 1392.0], [74.6, 1394.0], [74.7, 1394.0], [74.8, 1397.0], [74.9, 1404.0], [75.0, 1406.0], [75.1, 1407.0], [75.2, 1408.0], [75.3, 1417.0], [75.4, 1420.0], [75.5, 1424.0], [75.6, 1426.0], [75.7, 1435.0], [75.8, 1445.0], [75.9, 1455.0], [76.0, 1460.0], [76.1, 1474.0], [76.2, 1491.0], [76.3, 1495.0], [76.4, 1503.0], [76.5, 1504.0], [76.6, 1506.0], [76.7, 1513.0], [76.8, 1515.0], [76.9, 1515.0], [77.0, 1518.0], [77.1, 1520.0], [77.2, 1521.0], [77.3, 1524.0], [77.4, 1525.0], [77.5, 1527.0], [77.6, 1529.0], [77.7, 1544.0], [77.8, 1546.0], [77.9, 1565.0], [78.0, 1570.0], [78.1, 1575.0], [78.2, 1576.0], [78.3, 1580.0], [78.4, 1584.0], [78.5, 1584.0], [78.6, 1586.0], [78.7, 1592.0], [78.8, 1592.0], [78.9, 1595.0], [79.0, 1596.0], [79.1, 1598.0], [79.2, 1599.0], [79.3, 1607.0], [79.4, 1614.0], [79.5, 1621.0], [79.6, 1621.0], [79.7, 1622.0], [79.8, 1629.0], [79.9, 1648.0], [80.0, 1649.0], [80.1, 1652.0], [80.2, 1655.0], [80.3, 1656.0], [80.4, 1657.0], [80.5, 1657.0], [80.6, 1660.0], [80.7, 1661.0], [80.8, 1663.0], [80.9, 1673.0], [81.0, 1675.0], [81.1, 1683.0], [81.2, 1688.0], [81.3, 1696.0], [81.4, 1702.0], [81.5, 1730.0], [81.6, 1744.0], [81.7, 1747.0], [81.8, 1748.0], [81.9, 1751.0], [82.0, 1759.0], [82.1, 1769.0], [82.2, 1769.0], [82.3, 1776.0], [82.4, 1781.0], [82.5, 1782.0], [82.6, 1787.0], [82.7, 1799.0], [82.8, 1805.0], [82.9, 1805.0], [83.0, 1818.0], [83.1, 1819.0], [83.2, 1821.0], [83.3, 1824.0], [83.4, 1828.0], [83.5, 1860.0], [83.6, 1862.0], [83.7, 1862.0], [83.8, 1864.0], [83.9, 1876.0], [84.0, 1876.0], [84.1, 1879.0], [84.2, 1883.0], [84.3, 1887.0], [84.4, 1892.0], [84.5, 1899.0], [84.6, 1900.0], [84.7, 1902.0], [84.8, 1909.0], [84.9, 1913.0], [85.0, 1913.0], [85.1, 1920.0], [85.2, 1936.0], [85.3, 1956.0], [85.4, 1964.0], [85.5, 1965.0], [85.6, 1972.0], [85.7, 1978.0], [85.8, 1983.0], [85.9, 1987.0], [86.0, 1994.0], [86.1, 1996.0], [86.2, 2000.0], [86.3, 2001.0], [86.4, 2004.0], [86.5, 2016.0], [86.6, 2026.0], [86.7, 2032.0], [86.8, 2038.0], [86.9, 2039.0], [87.0, 2043.0], [87.1, 2050.0], [87.2, 2054.0], [87.3, 2061.0], [87.4, 2096.0], [87.5, 2099.0], [87.6, 2103.0], [87.7, 2116.0], [87.8, 2120.0], [87.9, 2122.0], [88.0, 2126.0], [88.1, 2134.0], [88.2, 2140.0], [88.3, 2142.0], [88.4, 2145.0], [88.5, 2150.0], [88.6, 2154.0], [88.7, 2155.0], [88.8, 2157.0], [88.9, 2169.0], [89.0, 2169.0], [89.1, 2170.0], [89.2, 2174.0], [89.3, 2187.0], [89.4, 2187.0], [89.5, 2196.0], [89.6, 2200.0], [89.7, 2205.0], [89.8, 2214.0], [89.9, 2219.0], [90.0, 2226.0], [90.1, 2229.0], [90.2, 2231.0], [90.3, 2238.0], [90.4, 2249.0], [90.5, 2272.0], [90.6, 2278.0], [90.7, 2293.0], [90.8, 2298.0], [90.9, 2305.0], [91.0, 2314.0], [91.1, 2321.0], [91.2, 2335.0], [91.3, 2338.0], [91.4, 2344.0], [91.5, 2359.0], [91.6, 2379.0], [91.7, 2382.0], [91.8, 2384.0], [91.9, 2388.0], [92.0, 2393.0], [92.1, 2400.0], [92.2, 2431.0], [92.3, 2441.0], [92.4, 2458.0], [92.5, 2460.0], [92.6, 2469.0], [92.7, 2479.0], [92.8, 2501.0], [92.9, 2511.0], [93.0, 2511.0], [93.1, 2514.0], [93.2, 2578.0], [93.3, 2587.0], [93.4, 2587.0], [93.5, 2600.0], [93.6, 2611.0], [93.7, 2626.0], [93.8, 2633.0], [93.9, 2639.0], [94.0, 2648.0], [94.1, 2648.0], [94.2, 2649.0], [94.3, 2651.0], [94.4, 2651.0], [94.5, 2658.0], [94.6, 2668.0], [94.7, 2689.0], [94.8, 2709.0], [94.9, 2711.0], [95.0, 2711.0], [95.1, 2743.0], [95.2, 2744.0], [95.3, 2746.0], [95.4, 2748.0], [95.5, 2751.0], [95.6, 2770.0], [95.7, 2788.0], [95.8, 2791.0], [95.9, 2806.0], [96.0, 2810.0], [96.1, 2820.0], [96.2, 2837.0], [96.3, 2849.0], [96.4, 2869.0], [96.5, 2873.0], [96.6, 2874.0], [96.7, 2876.0], [96.8, 2883.0], [96.9, 2887.0], [97.0, 2907.0], [97.1, 2911.0], [97.2, 2925.0], [97.3, 2948.0], [97.4, 2966.0], [97.5, 2969.0], [97.6, 3004.0], [97.7, 3008.0], [97.8, 3023.0], [97.9, 3023.0], [98.0, 3026.0], [98.1, 3036.0], [98.2, 3038.0], [98.3, 3042.0], [98.4, 3060.0], [98.5, 3085.0], [98.6, 3133.0], [98.7, 3137.0], [98.8, 3193.0], [98.9, 3204.0], [99.0, 3208.0], [99.1, 3235.0], [99.2, 3246.0], [99.3, 3267.0], [99.4, 3272.0], [99.5, 3344.0], [99.6, 3344.0], [99.7, 3349.0], [99.8, 3381.0], [99.9, 3524.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 124.0, "series": [{"data": [[600.0, 62.0], [700.0, 69.0], [800.0, 41.0], [900.0, 35.0], [1000.0, 44.0], [1100.0, 29.0], [1200.0, 30.0], [1300.0, 25.0], [1400.0, 16.0], [1500.0, 30.0], [100.0, 124.0], [1600.0, 22.0], [1700.0, 14.0], [1800.0, 19.0], [1900.0, 16.0], [2000.0, 15.0], [2100.0, 21.0], [2200.0, 13.0], [2300.0, 13.0], [2400.0, 7.0], [2500.0, 7.0], [2600.0, 14.0], [2700.0, 11.0], [2800.0, 11.0], [2900.0, 7.0], [3000.0, 10.0], [3100.0, 3.0], [200.0, 98.0], [3300.0, 4.0], [3200.0, 6.0], [3500.0, 1.0], [3700.0, 1.0], [300.0, 72.0], [400.0, 87.0], [500.0, 60.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 245.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 411.0, "series": [{"data": [[0.0, 381.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 411.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 245.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.694444444444445, "minX": 1.71819912E12, "maxY": 23.872340425531913, "series": [{"data": [[1.71820038E12, 12.061349693251534], [1.71820008E12, 5.694444444444445], [1.71819912E12, 15.849206349206344], [1.71820014E12, 19.48366013071897], [1.71819918E12, 23.872340425531913], [1.71820044E12, 22.989247311827963]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 492.3333333333333, "minX": 1.0, "maxY": 1675.95, "series": [{"data": [[2.0, 1402.6], [3.0, 751.4000000000001], [4.0, 760.7058823529413], [5.0, 688.6499999999999], [6.0, 492.3333333333333], [7.0, 684.5238095238094], [8.0, 754.5714285714284], [9.0, 733.9655172413793], [10.0, 549.2702702702703], [11.0, 604.5294117647057], [12.0, 876.8571428571429], [13.0, 843.2777777777775], [14.0, 809.7346938775511], [15.0, 744.388888888889], [16.0, 740.590909090909], [1.0, 1539.75], [17.0, 799.8648648648648], [18.0, 1253.105263157895], [19.0, 815.088888888889], [20.0, 1027.2222222222224], [21.0, 890.8536585365854], [22.0, 1154.6739130434783], [23.0, 1016.1304347826087], [24.0, 1335.2894736842109], [25.0, 1105.6458333333333], [26.0, 1319.1428571428576], [27.0, 1263.8043478260872], [28.0, 1477.5961538461538], [29.0, 1319.8139534883721], [30.0, 1675.95]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[17.981677917068456, 982.9479267116686]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 100.33333333333333, "minX": 1.71819912E12, "maxY": 27243.75, "series": [{"data": [[1.71820038E12, 14938.566666666668], [1.71820008E12, 3349.733333333333], [1.71819912E12, 22893.233333333334], [1.71820014E12, 27243.75], [1.71819918E12, 7917.516666666666], [1.71820044E12, 16039.216666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71820038E12, 453.9166666666667], [1.71820008E12, 100.33333333333333], [1.71819912E12, 703.35], [1.71820014E12, 859.9666666666667], [1.71819918E12, 267.76666666666665], [1.71820044E12, 525.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 569.1111111111112, "minX": 1.71819912E12, "maxY": 1546.9361702127658, "series": [{"data": [[1.71820038E12, 597.840490797546], [1.71820008E12, 569.1111111111112], [1.71819912E12, 779.8015873015872], [1.71820014E12, 1046.3431372549023], [1.71819918E12, 1546.9361702127658], [1.71820044E12, 1286.4408602150543]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 568.1111111111112, "minX": 1.71819912E12, "maxY": 1545.2978723404256, "series": [{"data": [[1.71820038E12, 596.4049079754603], [1.71820008E12, 568.1111111111112], [1.71819912E12, 778.4603174603171], [1.71820014E12, 1044.9771241830072], [1.71819918E12, 1545.2978723404256], [1.71820044E12, 1285.3172043010748]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.75531914893617, "minX": 1.71819912E12, "maxY": 46.222222222222214, "series": [{"data": [[1.71820038E12, 10.638036809815947], [1.71820008E12, 46.222222222222214], [1.71819912E12, 10.289682539682552], [1.71820014E12, 4.679738562091502], [1.71819918E12, 2.75531914893617], [1.71820044E12, 3.1666666666666674]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 111.0, "minX": 1.71819912E12, "maxY": 3754.0, "series": [{"data": [[1.71820038E12, 2038.0], [1.71820008E12, 2321.0], [1.71819912E12, 2948.0], [1.71820014E12, 3754.0], [1.71819918E12, 3349.0], [1.71820044E12, 3381.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71820038E12, 112.0], [1.71820008E12, 120.0], [1.71819912E12, 111.0], [1.71820014E12, 118.0], [1.71819918E12, 173.0], [1.71820044E12, 144.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71820038E12, 1522.1999999999998], [1.71820008E12, 1546.8000000000004], [1.71819912E12, 1818.3000000000004], [1.71820014E12, 2407.4000000000005], [1.71819918E12, 3029.5], [1.71820044E12, 2788.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71820038E12, 2009.8399999999992], [1.71820008E12, 2321.0], [1.71819912E12, 2617.0899999999997], [1.71820014E12, 3262.5900000000006], [1.71819918E12, 3349.0], [1.71820044E12, 3348.81]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71820038E12, 470.0], [1.71820008E12, 423.0], [1.71819912E12, 612.5], [1.71820014E12, 795.0], [1.71819918E12, 1497.0], [1.71820044E12, 1081.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71820038E12, 1844.3999999999987], [1.71820008E12, 1836.499999999999], [1.71819912E12, 2073.25], [1.71820014E12, 2710.3], [1.71819918E12, 3214.75], [1.71820044E12, 2953.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 275.0, "minX": 1.0, "maxY": 1968.5, "series": [{"data": [[8.0, 688.5], [2.0, 1186.5], [9.0, 735.0], [10.0, 482.0], [11.0, 481.0], [3.0, 325.0], [12.0, 672.0], [13.0, 725.5], [14.0, 786.0], [15.0, 944.0], [16.0, 1038.5], [1.0, 340.5], [4.0, 275.0], [17.0, 768.0], [18.0, 1968.5], [19.0, 1035.5], [5.0, 663.0], [21.0, 1675.0], [6.0, 416.0], [7.0, 425.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 274.0, "minX": 1.0, "maxY": 1967.0, "series": [{"data": [[8.0, 688.0], [2.0, 1185.5], [9.0, 734.5], [10.0, 482.0], [11.0, 480.0], [3.0, 324.5], [12.0, 670.5], [13.0, 724.0], [14.0, 784.5], [15.0, 942.0], [16.0, 1038.5], [1.0, 339.5], [4.0, 274.0], [17.0, 763.0], [18.0, 1967.0], [19.0, 1035.0], [5.0, 662.0], [21.0, 1675.0], [6.0, 414.5], [7.0, 424.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7, "minX": 1.71819912E12, "maxY": 5.0, "series": [{"data": [[1.71820038E12, 2.933333333333333], [1.71820008E12, 0.7], [1.71819912E12, 4.55], [1.71820014E12, 5.0], [1.71819918E12, 1.2166666666666666], [1.71820044E12, 2.8833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.71819912E12, "maxY": 5.1, "series": [{"data": [[1.71820038E12, 2.716666666666667], [1.71820008E12, 0.6], [1.71819912E12, 4.2], [1.71820014E12, 5.1], [1.71819918E12, 1.5666666666666667], [1.71820044E12, 3.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71820044E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.71819912E12, "maxY": 5.1, "series": [{"data": [[1.71820038E12, 2.716666666666667], [1.71820008E12, 0.6], [1.71819912E12, 4.2], [1.71820014E12, 5.1], [1.71819918E12, 1.5666666666666667], [1.71820044E12, 3.1]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.71819912E12, "maxY": 5.1, "series": [{"data": [[1.71820038E12, 2.716666666666667], [1.71820008E12, 0.6], [1.71819912E12, 4.2], [1.71820014E12, 5.1], [1.71819918E12, 1.5666666666666667], [1.71820044E12, 3.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71820044E12, "title": "Total Transactions Per Second"}},
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

