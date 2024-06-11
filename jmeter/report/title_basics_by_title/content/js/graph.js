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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 3668.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 2.0], [0.3, 113.0], [0.4, 117.0], [0.5, 122.0], [0.6, 125.0], [0.7, 127.0], [0.8, 128.0], [0.9, 131.0], [1.0, 133.0], [1.1, 136.0], [1.2, 138.0], [1.3, 140.0], [1.4, 142.0], [1.5, 144.0], [1.6, 146.0], [1.7, 148.0], [1.8, 149.0], [1.9, 150.0], [2.0, 152.0], [2.1, 153.0], [2.2, 155.0], [2.3, 155.0], [2.4, 157.0], [2.5, 158.0], [2.6, 160.0], [2.7, 161.0], [2.8, 162.0], [2.9, 163.0], [3.0, 164.0], [3.1, 165.0], [3.2, 165.0], [3.3, 166.0], [3.4, 167.0], [3.5, 168.0], [3.6, 170.0], [3.7, 171.0], [3.8, 172.0], [3.9, 173.0], [4.0, 173.0], [4.1, 174.0], [4.2, 175.0], [4.3, 176.0], [4.4, 177.0], [4.5, 178.0], [4.6, 179.0], [4.7, 180.0], [4.8, 182.0], [4.9, 183.0], [5.0, 184.0], [5.1, 185.0], [5.2, 185.0], [5.3, 186.0], [5.4, 187.0], [5.5, 188.0], [5.6, 189.0], [5.7, 191.0], [5.8, 192.0], [5.9, 193.0], [6.0, 194.0], [6.1, 195.0], [6.2, 196.0], [6.3, 197.0], [6.4, 197.0], [6.5, 198.0], [6.6, 200.0], [6.7, 200.0], [6.8, 201.0], [6.9, 202.0], [7.0, 203.0], [7.1, 204.0], [7.2, 205.0], [7.3, 206.0], [7.4, 206.0], [7.5, 207.0], [7.6, 208.0], [7.7, 209.0], [7.8, 210.0], [7.9, 211.0], [8.0, 212.0], [8.1, 213.0], [8.2, 214.0], [8.3, 215.0], [8.4, 217.0], [8.5, 217.0], [8.6, 219.0], [8.7, 220.0], [8.8, 221.0], [8.9, 222.0], [9.0, 223.0], [9.1, 225.0], [9.2, 226.0], [9.3, 228.0], [9.4, 229.0], [9.5, 231.0], [9.6, 232.0], [9.7, 233.0], [9.8, 235.0], [9.9, 236.0], [10.0, 237.0], [10.1, 238.0], [10.2, 240.0], [10.3, 241.0], [10.4, 242.0], [10.5, 243.0], [10.6, 244.0], [10.7, 246.0], [10.8, 247.0], [10.9, 249.0], [11.0, 250.0], [11.1, 252.0], [11.2, 253.0], [11.3, 255.0], [11.4, 256.0], [11.5, 257.0], [11.6, 258.0], [11.7, 259.0], [11.8, 260.0], [11.9, 261.0], [12.0, 263.0], [12.1, 264.0], [12.2, 266.0], [12.3, 267.0], [12.4, 268.0], [12.5, 269.0], [12.6, 271.0], [12.7, 272.0], [12.8, 273.0], [12.9, 273.0], [13.0, 275.0], [13.1, 276.0], [13.2, 277.0], [13.3, 279.0], [13.4, 281.0], [13.5, 283.0], [13.6, 284.0], [13.7, 286.0], [13.8, 286.0], [13.9, 288.0], [14.0, 290.0], [14.1, 291.0], [14.2, 292.0], [14.3, 294.0], [14.4, 295.0], [14.5, 297.0], [14.6, 299.0], [14.7, 301.0], [14.8, 301.0], [14.9, 303.0], [15.0, 304.0], [15.1, 305.0], [15.2, 306.0], [15.3, 308.0], [15.4, 310.0], [15.5, 311.0], [15.6, 313.0], [15.7, 315.0], [15.8, 316.0], [15.9, 318.0], [16.0, 319.0], [16.1, 322.0], [16.2, 324.0], [16.3, 325.0], [16.4, 327.0], [16.5, 328.0], [16.6, 329.0], [16.7, 330.0], [16.8, 331.0], [16.9, 332.0], [17.0, 333.0], [17.1, 335.0], [17.2, 337.0], [17.3, 338.0], [17.4, 340.0], [17.5, 341.0], [17.6, 343.0], [17.7, 345.0], [17.8, 347.0], [17.9, 349.0], [18.0, 352.0], [18.1, 353.0], [18.2, 355.0], [18.3, 356.0], [18.4, 357.0], [18.5, 360.0], [18.6, 361.0], [18.7, 364.0], [18.8, 366.0], [18.9, 367.0], [19.0, 369.0], [19.1, 370.0], [19.2, 372.0], [19.3, 374.0], [19.4, 375.0], [19.5, 377.0], [19.6, 379.0], [19.7, 381.0], [19.8, 383.0], [19.9, 384.0], [20.0, 387.0], [20.1, 389.0], [20.2, 391.0], [20.3, 393.0], [20.4, 396.0], [20.5, 396.0], [20.6, 399.0], [20.7, 401.0], [20.8, 403.0], [20.9, 405.0], [21.0, 406.0], [21.1, 408.0], [21.2, 410.0], [21.3, 411.0], [21.4, 412.0], [21.5, 413.0], [21.6, 414.0], [21.7, 415.0], [21.8, 417.0], [21.9, 418.0], [22.0, 420.0], [22.1, 422.0], [22.2, 424.0], [22.3, 425.0], [22.4, 427.0], [22.5, 429.0], [22.6, 430.0], [22.7, 432.0], [22.8, 434.0], [22.9, 434.0], [23.0, 437.0], [23.1, 438.0], [23.2, 439.0], [23.3, 440.0], [23.4, 443.0], [23.5, 445.0], [23.6, 446.0], [23.7, 447.0], [23.8, 448.0], [23.9, 450.0], [24.0, 452.0], [24.1, 453.0], [24.2, 456.0], [24.3, 457.0], [24.4, 458.0], [24.5, 460.0], [24.6, 462.0], [24.7, 463.0], [24.8, 464.0], [24.9, 466.0], [25.0, 467.0], [25.1, 469.0], [25.2, 471.0], [25.3, 472.0], [25.4, 473.0], [25.5, 476.0], [25.6, 477.0], [25.7, 478.0], [25.8, 480.0], [25.9, 483.0], [26.0, 484.0], [26.1, 487.0], [26.2, 489.0], [26.3, 491.0], [26.4, 492.0], [26.5, 493.0], [26.6, 495.0], [26.7, 498.0], [26.8, 500.0], [26.9, 501.0], [27.0, 503.0], [27.1, 506.0], [27.2, 508.0], [27.3, 511.0], [27.4, 514.0], [27.5, 516.0], [27.6, 518.0], [27.7, 520.0], [27.8, 522.0], [27.9, 523.0], [28.0, 525.0], [28.1, 529.0], [28.2, 530.0], [28.3, 532.0], [28.4, 534.0], [28.5, 538.0], [28.6, 540.0], [28.7, 542.0], [28.8, 545.0], [28.9, 547.0], [29.0, 548.0], [29.1, 550.0], [29.2, 552.0], [29.3, 553.0], [29.4, 555.0], [29.5, 558.0], [29.6, 560.0], [29.7, 563.0], [29.8, 566.0], [29.9, 568.0], [30.0, 571.0], [30.1, 573.0], [30.2, 577.0], [30.3, 580.0], [30.4, 583.0], [30.5, 585.0], [30.6, 587.0], [30.7, 590.0], [30.8, 593.0], [30.9, 594.0], [31.0, 596.0], [31.1, 598.0], [31.2, 600.0], [31.3, 602.0], [31.4, 604.0], [31.5, 606.0], [31.6, 608.0], [31.7, 612.0], [31.8, 614.0], [31.9, 619.0], [32.0, 622.0], [32.1, 623.0], [32.2, 625.0], [32.3, 626.0], [32.4, 629.0], [32.5, 631.0], [32.6, 633.0], [32.7, 635.0], [32.8, 636.0], [32.9, 638.0], [33.0, 640.0], [33.1, 642.0], [33.2, 644.0], [33.3, 648.0], [33.4, 650.0], [33.5, 652.0], [33.6, 654.0], [33.7, 657.0], [33.8, 660.0], [33.9, 661.0], [34.0, 664.0], [34.1, 665.0], [34.2, 667.0], [34.3, 669.0], [34.4, 672.0], [34.5, 673.0], [34.6, 674.0], [34.7, 676.0], [34.8, 679.0], [34.9, 680.0], [35.0, 682.0], [35.1, 684.0], [35.2, 686.0], [35.3, 687.0], [35.4, 689.0], [35.5, 690.0], [35.6, 692.0], [35.7, 694.0], [35.8, 696.0], [35.9, 697.0], [36.0, 700.0], [36.1, 701.0], [36.2, 704.0], [36.3, 705.0], [36.4, 707.0], [36.5, 708.0], [36.6, 710.0], [36.7, 712.0], [36.8, 715.0], [36.9, 717.0], [37.0, 719.0], [37.1, 721.0], [37.2, 723.0], [37.3, 724.0], [37.4, 727.0], [37.5, 728.0], [37.6, 730.0], [37.7, 733.0], [37.8, 734.0], [37.9, 736.0], [38.0, 737.0], [38.1, 739.0], [38.2, 741.0], [38.3, 743.0], [38.4, 744.0], [38.5, 746.0], [38.6, 747.0], [38.7, 749.0], [38.8, 751.0], [38.9, 752.0], [39.0, 755.0], [39.1, 757.0], [39.2, 758.0], [39.3, 760.0], [39.4, 761.0], [39.5, 762.0], [39.6, 764.0], [39.7, 766.0], [39.8, 767.0], [39.9, 769.0], [40.0, 770.0], [40.1, 772.0], [40.2, 774.0], [40.3, 775.0], [40.4, 776.0], [40.5, 779.0], [40.6, 779.0], [40.7, 780.0], [40.8, 782.0], [40.9, 783.0], [41.0, 784.0], [41.1, 785.0], [41.2, 786.0], [41.3, 787.0], [41.4, 789.0], [41.5, 790.0], [41.6, 791.0], [41.7, 792.0], [41.8, 793.0], [41.9, 794.0], [42.0, 795.0], [42.1, 797.0], [42.2, 798.0], [42.3, 799.0], [42.4, 800.0], [42.5, 800.0], [42.6, 802.0], [42.7, 803.0], [42.8, 804.0], [42.9, 805.0], [43.0, 806.0], [43.1, 807.0], [43.2, 809.0], [43.3, 811.0], [43.4, 812.0], [43.5, 812.0], [43.6, 813.0], [43.7, 814.0], [43.8, 816.0], [43.9, 816.0], [44.0, 817.0], [44.1, 818.0], [44.2, 819.0], [44.3, 820.0], [44.4, 821.0], [44.5, 822.0], [44.6, 824.0], [44.7, 825.0], [44.8, 826.0], [44.9, 827.0], [45.0, 828.0], [45.1, 829.0], [45.2, 830.0], [45.3, 831.0], [45.4, 831.0], [45.5, 833.0], [45.6, 834.0], [45.7, 834.0], [45.8, 835.0], [45.9, 837.0], [46.0, 838.0], [46.1, 839.0], [46.2, 841.0], [46.3, 841.0], [46.4, 842.0], [46.5, 843.0], [46.6, 843.0], [46.7, 844.0], [46.8, 845.0], [46.9, 847.0], [47.0, 848.0], [47.1, 849.0], [47.2, 850.0], [47.3, 851.0], [47.4, 852.0], [47.5, 853.0], [47.6, 855.0], [47.7, 856.0], [47.8, 857.0], [47.9, 857.0], [48.0, 859.0], [48.1, 859.0], [48.2, 860.0], [48.3, 861.0], [48.4, 862.0], [48.5, 863.0], [48.6, 864.0], [48.7, 865.0], [48.8, 866.0], [48.9, 868.0], [49.0, 869.0], [49.1, 870.0], [49.2, 871.0], [49.3, 872.0], [49.4, 873.0], [49.5, 874.0], [49.6, 875.0], [49.7, 877.0], [49.8, 878.0], [49.9, 879.0], [50.0, 880.0], [50.1, 881.0], [50.2, 882.0], [50.3, 883.0], [50.4, 884.0], [50.5, 886.0], [50.6, 886.0], [50.7, 887.0], [50.8, 888.0], [50.9, 890.0], [51.0, 891.0], [51.1, 892.0], [51.2, 893.0], [51.3, 894.0], [51.4, 895.0], [51.5, 897.0], [51.6, 899.0], [51.7, 900.0], [51.8, 902.0], [51.9, 903.0], [52.0, 903.0], [52.1, 904.0], [52.2, 905.0], [52.3, 906.0], [52.4, 908.0], [52.5, 909.0], [52.6, 910.0], [52.7, 912.0], [52.8, 913.0], [52.9, 914.0], [53.0, 916.0], [53.1, 917.0], [53.2, 918.0], [53.3, 919.0], [53.4, 920.0], [53.5, 921.0], [53.6, 923.0], [53.7, 924.0], [53.8, 925.0], [53.9, 926.0], [54.0, 927.0], [54.1, 928.0], [54.2, 930.0], [54.3, 931.0], [54.4, 932.0], [54.5, 934.0], [54.6, 935.0], [54.7, 936.0], [54.8, 937.0], [54.9, 938.0], [55.0, 940.0], [55.1, 942.0], [55.2, 943.0], [55.3, 945.0], [55.4, 946.0], [55.5, 947.0], [55.6, 949.0], [55.7, 951.0], [55.8, 952.0], [55.9, 953.0], [56.0, 954.0], [56.1, 956.0], [56.2, 957.0], [56.3, 959.0], [56.4, 960.0], [56.5, 961.0], [56.6, 963.0], [56.7, 964.0], [56.8, 966.0], [56.9, 968.0], [57.0, 970.0], [57.1, 972.0], [57.2, 973.0], [57.3, 976.0], [57.4, 977.0], [57.5, 981.0], [57.6, 983.0], [57.7, 986.0], [57.8, 988.0], [57.9, 991.0], [58.0, 992.0], [58.1, 995.0], [58.2, 998.0], [58.3, 1002.0], [58.4, 1004.0], [58.5, 1006.0], [58.6, 1008.0], [58.7, 1012.0], [58.8, 1016.0], [58.9, 1018.0], [59.0, 1022.0], [59.1, 1024.0], [59.2, 1027.0], [59.3, 1031.0], [59.4, 1032.0], [59.5, 1037.0], [59.6, 1041.0], [59.7, 1044.0], [59.8, 1048.0], [59.9, 1052.0], [60.0, 1056.0], [60.1, 1061.0], [60.2, 1064.0], [60.3, 1069.0], [60.4, 1072.0], [60.5, 1075.0], [60.6, 1080.0], [60.7, 1085.0], [60.8, 1091.0], [60.9, 1093.0], [61.0, 1096.0], [61.1, 1101.0], [61.2, 1105.0], [61.3, 1108.0], [61.4, 1112.0], [61.5, 1115.0], [61.6, 1118.0], [61.7, 1119.0], [61.8, 1122.0], [61.9, 1125.0], [62.0, 1128.0], [62.1, 1131.0], [62.2, 1133.0], [62.3, 1136.0], [62.4, 1139.0], [62.5, 1144.0], [62.6, 1146.0], [62.7, 1151.0], [62.8, 1155.0], [62.9, 1158.0], [63.0, 1159.0], [63.1, 1163.0], [63.2, 1166.0], [63.3, 1169.0], [63.4, 1172.0], [63.5, 1176.0], [63.6, 1178.0], [63.7, 1181.0], [63.8, 1184.0], [63.9, 1187.0], [64.0, 1189.0], [64.1, 1192.0], [64.2, 1195.0], [64.3, 1198.0], [64.4, 1203.0], [64.5, 1205.0], [64.6, 1207.0], [64.7, 1209.0], [64.8, 1212.0], [64.9, 1215.0], [65.0, 1218.0], [65.1, 1219.0], [65.2, 1222.0], [65.3, 1224.0], [65.4, 1226.0], [65.5, 1228.0], [65.6, 1229.0], [65.7, 1231.0], [65.8, 1234.0], [65.9, 1236.0], [66.0, 1238.0], [66.1, 1241.0], [66.2, 1245.0], [66.3, 1247.0], [66.4, 1250.0], [66.5, 1252.0], [66.6, 1254.0], [66.7, 1255.0], [66.8, 1257.0], [66.9, 1261.0], [67.0, 1266.0], [67.1, 1269.0], [67.2, 1272.0], [67.3, 1275.0], [67.4, 1277.0], [67.5, 1281.0], [67.6, 1283.0], [67.7, 1287.0], [67.8, 1289.0], [67.9, 1293.0], [68.0, 1296.0], [68.1, 1299.0], [68.2, 1301.0], [68.3, 1305.0], [68.4, 1309.0], [68.5, 1313.0], [68.6, 1315.0], [68.7, 1318.0], [68.8, 1320.0], [68.9, 1324.0], [69.0, 1326.0], [69.1, 1330.0], [69.2, 1333.0], [69.3, 1339.0], [69.4, 1343.0], [69.5, 1347.0], [69.6, 1353.0], [69.7, 1356.0], [69.8, 1362.0], [69.9, 1366.0], [70.0, 1370.0], [70.1, 1373.0], [70.2, 1379.0], [70.3, 1382.0], [70.4, 1387.0], [70.5, 1390.0], [70.6, 1400.0], [70.7, 1407.0], [70.8, 1411.0], [70.9, 1417.0], [71.0, 1422.0], [71.1, 1428.0], [71.2, 1432.0], [71.3, 1435.0], [71.4, 1442.0], [71.5, 1447.0], [71.6, 1451.0], [71.7, 1456.0], [71.8, 1465.0], [71.9, 1470.0], [72.0, 1474.0], [72.1, 1479.0], [72.2, 1485.0], [72.3, 1490.0], [72.4, 1498.0], [72.5, 1503.0], [72.6, 1510.0], [72.7, 1515.0], [72.8, 1524.0], [72.9, 1530.0], [73.0, 1534.0], [73.1, 1539.0], [73.2, 1545.0], [73.3, 1549.0], [73.4, 1555.0], [73.5, 1560.0], [73.6, 1566.0], [73.7, 1572.0], [73.8, 1576.0], [73.9, 1585.0], [74.0, 1592.0], [74.1, 1597.0], [74.2, 1607.0], [74.3, 1613.0], [74.4, 1620.0], [74.5, 1627.0], [74.6, 1631.0], [74.7, 1642.0], [74.8, 1651.0], [74.9, 1654.0], [75.0, 1663.0], [75.1, 1670.0], [75.2, 1675.0], [75.3, 1687.0], [75.4, 1692.0], [75.5, 1701.0], [75.6, 1706.0], [75.7, 1713.0], [75.8, 1724.0], [75.9, 1731.0], [76.0, 1735.0], [76.1, 1739.0], [76.2, 1745.0], [76.3, 1750.0], [76.4, 1758.0], [76.5, 1765.0], [76.6, 1772.0], [76.7, 1778.0], [76.8, 1784.0], [76.9, 1789.0], [77.0, 1793.0], [77.1, 1800.0], [77.2, 1805.0], [77.3, 1810.0], [77.4, 1815.0], [77.5, 1824.0], [77.6, 1829.0], [77.7, 1839.0], [77.8, 1846.0], [77.9, 1851.0], [78.0, 1856.0], [78.1, 1860.0], [78.2, 1869.0], [78.3, 1877.0], [78.4, 1885.0], [78.5, 1892.0], [78.6, 1898.0], [78.7, 1903.0], [78.8, 1907.0], [78.9, 1912.0], [79.0, 1916.0], [79.1, 1919.0], [79.2, 1929.0], [79.3, 1938.0], [79.4, 1946.0], [79.5, 1951.0], [79.6, 1963.0], [79.7, 1967.0], [79.8, 1972.0], [79.9, 1982.0], [80.0, 1987.0], [80.1, 1991.0], [80.2, 1995.0], [80.3, 2001.0], [80.4, 2005.0], [80.5, 2011.0], [80.6, 2015.0], [80.7, 2020.0], [80.8, 2025.0], [80.9, 2033.0], [81.0, 2037.0], [81.1, 2043.0], [81.2, 2049.0], [81.3, 2057.0], [81.4, 2062.0], [81.5, 2067.0], [81.6, 2072.0], [81.7, 2078.0], [81.8, 2083.0], [81.9, 2086.0], [82.0, 2090.0], [82.1, 2094.0], [82.2, 2097.0], [82.3, 2102.0], [82.4, 2105.0], [82.5, 2109.0], [82.6, 2110.0], [82.7, 2113.0], [82.8, 2117.0], [82.9, 2120.0], [83.0, 2123.0], [83.1, 2127.0], [83.2, 2130.0], [83.3, 2133.0], [83.4, 2137.0], [83.5, 2140.0], [83.6, 2143.0], [83.7, 2147.0], [83.8, 2150.0], [83.9, 2151.0], [84.0, 2155.0], [84.1, 2158.0], [84.2, 2160.0], [84.3, 2163.0], [84.4, 2165.0], [84.5, 2169.0], [84.6, 2174.0], [84.7, 2177.0], [84.8, 2180.0], [84.9, 2183.0], [85.0, 2185.0], [85.1, 2187.0], [85.2, 2189.0], [85.3, 2192.0], [85.4, 2194.0], [85.5, 2195.0], [85.6, 2198.0], [85.7, 2201.0], [85.8, 2204.0], [85.9, 2205.0], [86.0, 2208.0], [86.1, 2211.0], [86.2, 2215.0], [86.3, 2217.0], [86.4, 2220.0], [86.5, 2222.0], [86.6, 2223.0], [86.7, 2226.0], [86.8, 2229.0], [86.9, 2230.0], [87.0, 2233.0], [87.1, 2235.0], [87.2, 2238.0], [87.3, 2241.0], [87.4, 2245.0], [87.5, 2247.0], [87.6, 2250.0], [87.7, 2252.0], [87.8, 2255.0], [87.9, 2257.0], [88.0, 2259.0], [88.1, 2262.0], [88.2, 2264.0], [88.3, 2266.0], [88.4, 2268.0], [88.5, 2270.0], [88.6, 2274.0], [88.7, 2276.0], [88.8, 2277.0], [88.9, 2280.0], [89.0, 2284.0], [89.1, 2288.0], [89.2, 2289.0], [89.3, 2294.0], [89.4, 2298.0], [89.5, 2300.0], [89.6, 2303.0], [89.7, 2306.0], [89.8, 2308.0], [89.9, 2311.0], [90.0, 2313.0], [90.1, 2314.0], [90.2, 2317.0], [90.3, 2321.0], [90.4, 2323.0], [90.5, 2326.0], [90.6, 2329.0], [90.7, 2331.0], [90.8, 2334.0], [90.9, 2337.0], [91.0, 2339.0], [91.1, 2342.0], [91.2, 2344.0], [91.3, 2346.0], [91.4, 2348.0], [91.5, 2351.0], [91.6, 2354.0], [91.7, 2356.0], [91.8, 2359.0], [91.9, 2361.0], [92.0, 2364.0], [92.1, 2367.0], [92.2, 2370.0], [92.3, 2373.0], [92.4, 2377.0], [92.5, 2381.0], [92.6, 2384.0], [92.7, 2386.0], [92.8, 2388.0], [92.9, 2390.0], [93.0, 2394.0], [93.1, 2396.0], [93.2, 2398.0], [93.3, 2401.0], [93.4, 2405.0], [93.5, 2407.0], [93.6, 2409.0], [93.7, 2414.0], [93.8, 2418.0], [93.9, 2422.0], [94.0, 2425.0], [94.1, 2428.0], [94.2, 2431.0], [94.3, 2436.0], [94.4, 2440.0], [94.5, 2444.0], [94.6, 2447.0], [94.7, 2453.0], [94.8, 2456.0], [94.9, 2460.0], [95.0, 2465.0], [95.1, 2470.0], [95.2, 2473.0], [95.3, 2477.0], [95.4, 2482.0], [95.5, 2487.0], [95.6, 2491.0], [95.7, 2494.0], [95.8, 2504.0], [95.9, 2509.0], [96.0, 2511.0], [96.1, 2518.0], [96.2, 2527.0], [96.3, 2532.0], [96.4, 2536.0], [96.5, 2540.0], [96.6, 2544.0], [96.7, 2550.0], [96.8, 2560.0], [96.9, 2567.0], [97.0, 2574.0], [97.1, 2579.0], [97.2, 2585.0], [97.3, 2589.0], [97.4, 2595.0], [97.5, 2607.0], [97.6, 2615.0], [97.7, 2619.0], [97.8, 2626.0], [97.9, 2638.0], [98.0, 2652.0], [98.1, 2658.0], [98.2, 2669.0], [98.3, 2684.0], [98.4, 2697.0], [98.5, 2708.0], [98.6, 2725.0], [98.7, 2735.0], [98.8, 2747.0], [98.9, 2773.0], [99.0, 2795.0], [99.1, 2832.0], [99.2, 2864.0], [99.3, 2891.0], [99.4, 2931.0], [99.5, 3001.0], [99.6, 3090.0], [99.7, 3147.0], [99.8, 3296.0], [99.9, 3407.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 958.0, "series": [{"data": [[0.0, 24.0], [600.0, 499.0], [700.0, 660.0], [800.0, 958.0], [900.0, 683.0], [1000.0, 292.0], [1100.0, 336.0], [1200.0, 393.0], [1300.0, 255.0], [1400.0, 190.0], [1500.0, 175.0], [100.0, 658.0], [1600.0, 139.0], [1700.0, 167.0], [1800.0, 158.0], [1900.0, 171.0], [2000.0, 203.0], [2100.0, 356.0], [2300.0, 391.0], [2200.0, 392.0], [2400.0, 258.0], [2500.0, 172.0], [2600.0, 104.0], [2700.0, 61.0], [2800.0, 33.0], [2900.0, 17.0], [3000.0, 12.0], [3100.0, 15.0], [200.0, 831.0], [3200.0, 5.0], [3300.0, 9.0], [3400.0, 8.0], [3500.0, 1.0], [3600.0, 2.0], [300.0, 620.0], [400.0, 637.0], [500.0, 451.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 31.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4704.0, "series": [{"data": [[0.0, 2755.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4704.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2846.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 31.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.1603375527426145, "minX": 1.71809652E12, "maxY": 20.0, "series": [{"data": [[1.71809712E12, 20.0], [1.71809682E12, 20.0], [1.71809652E12, 4.1603375527426145], [1.71809718E12, 20.0], [1.71809688E12, 20.0], [1.71809658E12, 9.237547892720304], [1.71809724E12, 20.0], [1.71809694E12, 20.0], [1.71809664E12, 15.281437125748512], [1.7180973E12, 20.0], [1.718097E12, 20.0], [1.7180967E12, 19.71808510638299], [1.71809736E12, 19.929487179487175], [1.71809706E12, 20.0], [1.71809676E12, 20.0]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71809736E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 326.14285714285717, "minX": 1.0, "maxY": 1159.4012819045436, "series": [{"data": [[2.0, 434.86956521739125], [8.0, 519.9534883720929], [9.0, 647.8095238095237], [10.0, 766.929411764706], [11.0, 778.4239130434785], [3.0, 408.3513513513514], [12.0, 834.9247311827957], [13.0, 768.4018691588785], [14.0, 885.0833333333336], [15.0, 1003.5596330275225], [1.0, 326.14285714285717], [4.0, 350.64705882352945], [16.0, 975.2773109243694], [17.0, 964.4915254237284], [18.0, 1082.584], [19.0, 1078.7903225806447], [5.0, 345.92424242424244], [20.0, 1159.4012819045436], [6.0, 387.17105263157896], [7.0, 433.60975609756105]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}, {"data": [[18.764609133127017, 1099.535797213624]], "isOverall": false, "label": "TitleBasics by primary_title-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 668.95, "minX": 1.71809652E12, "maxY": 67917.65, "series": [{"data": [[1.71809712E12, 66237.3], [1.71809682E12, 57526.333333333336], [1.71809652E12, 20368.933333333334], [1.71809718E12, 59661.5], [1.71809688E12, 63920.816666666666], [1.71809658E12, 42565.21666666667], [1.71809724E12, 58905.95], [1.71809694E12, 67917.65], [1.71809664E12, 53410.61666666667], [1.7180973E12, 59426.583333333336], [1.718097E12, 62970.53333333333], [1.7180967E12, 59584.01666666667], [1.71809736E12, 35972.316666666666], [1.71809706E12, 65195.316666666666], [1.71809676E12, 55662.76666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71809712E12, 2252.15], [1.71809682E12, 2056.25], [1.71809652E12, 668.95], [1.71809718E12, 2106.9], [1.71809688E12, 2222.483333333333], [1.71809658E12, 1465.6166666666666], [1.71809724E12, 2127.3166666666666], [1.71809694E12, 2270.1833333333334], [1.71809664E12, 1875.8333333333333], [1.7180973E12, 2114.616666666667], [1.718097E12, 2135.7833333333333], [1.7180967E12, 2108.1666666666665], [1.71809736E12, 1280.0666666666666], [1.71809706E12, 2222.1833333333334], [1.71809676E12, 1972.4166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71809736E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 376.5021097046412, "minX": 1.71809652E12, "maxY": 1295.7181303116142, "series": [{"data": [[1.71809712E12, 1078.2812887236682], [1.71809682E12, 1222.341463414635], [1.71809652E12, 376.5021097046412], [1.71809718E12, 1193.6617842876167], [1.71809688E12, 1105.1874213836484], [1.71809658E12, 635.363984674329], [1.71809724E12, 1178.6284584980242], [1.71809694E12, 1065.0808823529417], [1.71809664E12, 935.0374251497005], [1.7180973E12, 1170.1521164021156], [1.718097E12, 1159.0562091503284], [1.7180967E12, 1161.1702127659591], [1.71809736E12, 1223.470085470084], [1.71809706E12, 1101.0326633165828], [1.71809676E12, 1295.7181303116142]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71809736E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 375.3333333333333, "minX": 1.71809652E12, "maxY": 1294.5977337110467, "series": [{"data": [[1.71809712E12, 1076.9132589838914], [1.71809682E12, 1221.2981029810298], [1.71809652E12, 375.3333333333333], [1.71809718E12, 1192.415446071903], [1.71809688E12, 1104.0930817610056], [1.71809658E12, 634.2835249042141], [1.71809724E12, 1177.4005270092252], [1.71809694E12, 1063.8897058823536], [1.71809664E12, 933.863772455089], [1.7180973E12, 1168.7923280423267], [1.718097E12, 1157.7202614379069], [1.7180967E12, 1160.0385638297869], [1.71809736E12, 1207.683760683759], [1.71809706E12, 1099.8027638190965], [1.71809676E12, 1294.5977337110467]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71809736E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.03639846743295, "minX": 1.71809652E12, "maxY": 4.648936170212761, "series": [{"data": [[1.71809712E12, 1.6022304832713758], [1.71809682E12, 1.1775067750677501], [1.71809652E12, 1.172995780590716], [1.71809718E12, 1.2623169107856196], [1.71809688E12, 1.069182389937106], [1.71809658E12, 1.03639846743295], [1.71809724E12, 1.1304347826086951], [1.71809694E12, 1.0845588235294115], [1.71809664E12, 1.188622754491017], [1.7180973E12, 1.482804232804231], [1.718097E12, 2.0313725490196064], [1.7180967E12, 4.648936170212761], [1.71809736E12, 1.9230769230769231], [1.71809706E12, 1.5351758793969836], [1.71809676E12, 2.192634560906515]], "isOverall": false, "label": "TitleBasics by primary_title", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71809736E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 93.0, "minX": 1.71809652E12, "maxY": 3668.0, "series": [{"data": [[1.71809712E12, 3448.0], [1.71809682E12, 3127.0], [1.71809652E12, 1548.0], [1.71809718E12, 3668.0], [1.71809688E12, 3313.0], [1.71809658E12, 2416.0], [1.71809724E12, 3648.0], [1.71809694E12, 3178.0], [1.71809664E12, 3001.0], [1.7180973E12, 3308.0], [1.718097E12, 3497.0], [1.7180967E12, 3521.0], [1.71809736E12, 3312.0], [1.71809706E12, 3497.0], [1.71809676E12, 3461.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71809712E12, 118.0], [1.71809682E12, 122.0], [1.71809652E12, 107.0], [1.71809718E12, 154.0], [1.71809688E12, 123.0], [1.71809658E12, 108.0], [1.71809724E12, 93.0], [1.71809694E12, 114.0], [1.71809664E12, 117.0], [1.7180973E12, 119.0], [1.718097E12, 95.0], [1.7180967E12, 125.0], [1.71809736E12, 106.0], [1.71809706E12, 115.0], [1.71809676E12, 133.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71809712E12, 2265.4], [1.71809682E12, 2409.2], [1.71809652E12, 511.20000000000005], [1.71809718E12, 2382.8], [1.71809688E12, 2323.4000000000005], [1.71809658E12, 1408.0], [1.71809724E12, 2330.0], [1.71809694E12, 2259.8], [1.71809664E12, 1898.6000000000001], [1.7180973E12, 2328.1000000000004], [1.718097E12, 2404.1000000000004], [1.7180967E12, 2325.7], [1.71809736E12, 2343.2], [1.71809706E12, 2314.3], [1.71809676E12, 2512.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71809712E12, 2815.0399999999986], [1.71809682E12, 2762.2], [1.71809652E12, 1403.0400000000013], [1.71809718E12, 2933.1200000000003], [1.71809688E12, 2836.3600000000015], [1.71809658E12, 2049.2099999999987], [1.71809724E12, 2925.7999999999993], [1.71809694E12, 2743.52], [1.71809664E12, 2616.589999999995], [1.7180973E12, 2700.9599999999964], [1.718097E12, 2865.9300000000007], [1.7180967E12, 2908.7400000000002], [1.71809736E12, 2810.9600000000005], [1.71809706E12, 2632.33], [1.71809676E12, 2978.040000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71809712E12, 870.0], [1.71809682E12, 961.0], [1.71809652E12, 402.0], [1.71809718E12, 952.0], [1.71809688E12, 874.0], [1.71809658E12, 517.5], [1.71809724E12, 929.0], [1.71809694E12, 860.0], [1.71809664E12, 759.0], [1.7180973E12, 934.0], [1.718097E12, 937.0], [1.7180967E12, 916.0], [1.71809736E12, 952.0], [1.71809706E12, 890.0], [1.71809676E12, 1016.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71809712E12, 2418.5999999999995], [1.71809682E12, 2573.7999999999993], [1.71809652E12, 612.2], [1.71809718E12, 2507.3999999999996], [1.71809688E12, 2412.8], [1.71809658E12, 1608.6499999999996], [1.71809724E12, 2516.0], [1.71809694E12, 2401.6], [1.71809664E12, 2030.0499999999995], [1.7180973E12, 2455.45], [1.718097E12, 2534.55], [1.7180967E12, 2489.7999999999997], [1.71809736E12, 2455.1999999999994], [1.71809706E12, 2419.8999999999996], [1.71809676E12, 2635.7999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71809736E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 954.5, "series": [{"data": [[2.0, 403.0], [8.0, 858.0], [9.0, 816.5], [10.0, 865.0], [11.0, 884.0], [3.0, 416.0], [12.0, 906.0], [13.0, 954.5], [14.0, 885.0], [15.0, 899.0], [1.0, 493.0], [4.0, 435.0], [16.0, 926.0], [17.0, 910.0], [18.0, 905.5], [19.0, 885.0], [5.0, 448.0], [20.0, 832.5], [21.0, 845.5], [22.0, 781.5], [23.0, 594.0], [6.0, 472.0], [7.0, 634.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [9.0, 0.5], [20.0, 0.0], [11.0, 1.0], [12.0, 0.0], [13.0, 0.0], [15.0, 542.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 953.5, "series": [{"data": [[2.0, 403.0], [8.0, 858.0], [9.0, 815.0], [10.0, 863.5], [11.0, 882.5], [3.0, 415.0], [12.0, 905.0], [13.0, 953.5], [14.0, 884.5], [15.0, 897.5], [1.0, 493.0], [4.0, 433.5], [16.0, 926.0], [17.0, 908.0], [18.0, 905.0], [19.0, 884.0], [5.0, 447.5], [20.0, 831.0], [21.0, 845.0], [22.0, 780.5], [23.0, 593.0], [6.0, 470.5], [7.0, 633.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 0.0], [17.0, 0.0], [18.0, 0.0], [9.0, 0.0], [20.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.033333333333333, "minX": 1.71809652E12, "maxY": 13.633333333333333, "series": [{"data": [[1.71809712E12, 13.45], [1.71809682E12, 12.266666666666667], [1.71809652E12, 4.033333333333333], [1.71809718E12, 12.483333333333333], [1.71809688E12, 13.216666666666667], [1.71809658E12, 8.716666666666667], [1.71809724E12, 12.65], [1.71809694E12, 13.633333333333333], [1.71809664E12, 11.25], [1.7180973E12, 12.583333333333334], [1.718097E12, 12.75], [1.7180967E12, 12.6], [1.71809736E12, 7.6], [1.71809706E12, 13.266666666666667], [1.71809676E12, 11.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71809736E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71809652E12, "maxY": 13.516666666666667, "series": [{"data": [[1.71809712E12, 13.45], [1.71809682E12, 12.25], [1.71809652E12, 3.95], [1.71809718E12, 12.516666666666667], [1.71809688E12, 13.183333333333334], [1.71809658E12, 8.7], [1.71809724E12, 12.65], [1.71809694E12, 13.516666666666667], [1.71809664E12, 11.133333333333333], [1.7180973E12, 12.6], [1.718097E12, 12.7], [1.7180967E12, 12.5], [1.71809736E12, 7.616666666666666], [1.71809706E12, 13.266666666666667], [1.71809676E12, 11.716666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71809682E12, 0.05], [1.718097E12, 0.05], [1.7180967E12, 0.03333333333333333], [1.71809688E12, 0.06666666666666667], [1.71809676E12, 0.05], [1.71809694E12, 0.08333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}, {"data": [[1.71809736E12, 0.18333333333333332]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71809736E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71809652E12, "maxY": 13.516666666666667, "series": [{"data": [[1.71809712E12, 13.45], [1.71809682E12, 12.25], [1.71809652E12, 3.95], [1.71809718E12, 12.516666666666667], [1.71809688E12, 13.183333333333334], [1.71809658E12, 8.7], [1.71809724E12, 12.65], [1.71809694E12, 13.516666666666667], [1.71809664E12, 11.133333333333333], [1.7180973E12, 12.6], [1.718097E12, 12.7], [1.7180967E12, 12.5], [1.71809736E12, 7.616666666666666], [1.71809706E12, 13.266666666666667], [1.71809676E12, 11.716666666666667]], "isOverall": false, "label": "TitleBasics by primary_title-success", "isController": false}, {"data": [[1.71809682E12, 0.05], [1.718097E12, 0.05], [1.7180967E12, 0.03333333333333333], [1.71809736E12, 0.18333333333333332], [1.71809688E12, 0.06666666666666667], [1.71809676E12, 0.05], [1.71809694E12, 0.08333333333333333]], "isOverall": false, "label": "TitleBasics by primary_title-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71809736E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71809652E12, "maxY": 13.516666666666667, "series": [{"data": [[1.71809712E12, 13.45], [1.71809682E12, 12.25], [1.71809652E12, 3.95], [1.71809718E12, 12.516666666666667], [1.71809688E12, 13.183333333333334], [1.71809658E12, 8.7], [1.71809724E12, 12.65], [1.71809694E12, 13.516666666666667], [1.71809664E12, 11.133333333333333], [1.7180973E12, 12.6], [1.718097E12, 12.7], [1.7180967E12, 12.5], [1.71809736E12, 7.616666666666666], [1.71809706E12, 13.266666666666667], [1.71809676E12, 11.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71809682E12, 0.05], [1.718097E12, 0.05], [1.7180967E12, 0.03333333333333333], [1.71809736E12, 0.18333333333333332], [1.71809688E12, 0.06666666666666667], [1.71809676E12, 0.05], [1.71809694E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71809736E12, "title": "Total Transactions Per Second"}},
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

