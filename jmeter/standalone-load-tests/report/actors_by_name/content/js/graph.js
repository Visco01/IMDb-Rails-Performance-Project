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
        data: {"result": {"minY": 10858.0, "minX": 0.0, "maxY": 40585.0, "series": [{"data": [[0.0, 10858.0], [0.1, 10858.0], [0.2, 10858.0], [0.3, 10858.0], [0.4, 10858.0], [0.5, 13943.0], [0.6, 13943.0], [0.7, 13943.0], [0.8, 13943.0], [0.9, 14370.0], [1.0, 14370.0], [1.1, 14370.0], [1.2, 14370.0], [1.3, 15154.0], [1.4, 15154.0], [1.5, 15154.0], [1.6, 15154.0], [1.7, 15154.0], [1.8, 19571.0], [1.9, 19571.0], [2.0, 19571.0], [2.1, 19571.0], [2.2, 21088.0], [2.3, 21088.0], [2.4, 21088.0], [2.5, 21088.0], [2.6, 22976.0], [2.7, 22976.0], [2.8, 22976.0], [2.9, 22976.0], [3.0, 23878.0], [3.1, 23878.0], [3.2, 23878.0], [3.3, 23878.0], [3.4, 23878.0], [3.5, 24316.0], [3.6, 24316.0], [3.7, 24316.0], [3.8, 24316.0], [3.9, 25238.0], [4.0, 25238.0], [4.1, 25238.0], [4.2, 25238.0], [4.3, 27492.0], [4.4, 27492.0], [4.5, 27492.0], [4.6, 27492.0], [4.7, 30632.0], [4.8, 30632.0], [4.9, 30632.0], [5.0, 30632.0], [5.1, 30632.0], [5.2, 31115.0], [5.3, 31115.0], [5.4, 31115.0], [5.5, 31115.0], [5.6, 32177.0], [5.7, 32177.0], [5.8, 32177.0], [5.9, 32177.0], [6.0, 32633.0], [6.1, 32633.0], [6.2, 32633.0], [6.3, 32633.0], [6.4, 32823.0], [6.5, 32823.0], [6.6, 32823.0], [6.7, 32823.0], [6.8, 32823.0], [6.9, 33717.0], [7.0, 33717.0], [7.1, 33717.0], [7.2, 33717.0], [7.3, 34640.0], [7.4, 34640.0], [7.5, 34640.0], [7.6, 34640.0], [7.7, 35027.0], [7.8, 35027.0], [7.9, 35027.0], [8.0, 35027.0], [8.1, 35300.0], [8.2, 35300.0], [8.3, 35300.0], [8.4, 35300.0], [8.5, 35300.0], [8.6, 35425.0], [8.7, 35425.0], [8.8, 35425.0], [8.9, 35425.0], [9.0, 35872.0], [9.1, 35872.0], [9.2, 35872.0], [9.3, 35872.0], [9.4, 35886.0], [9.5, 35886.0], [9.6, 35886.0], [9.7, 35886.0], [9.8, 36083.0], [9.9, 36083.0], [10.0, 36083.0], [10.1, 36083.0], [10.2, 36083.0], [10.3, 36087.0], [10.4, 36087.0], [10.5, 36087.0], [10.6, 36087.0], [10.7, 36128.0], [10.8, 36128.0], [10.9, 36128.0], [11.0, 36128.0], [11.1, 36155.0], [11.2, 36155.0], [11.3, 36155.0], [11.4, 36155.0], [11.5, 36164.0], [11.6, 36164.0], [11.7, 36164.0], [11.8, 36164.0], [11.9, 36164.0], [12.0, 36296.0], [12.1, 36296.0], [12.2, 36296.0], [12.3, 36296.0], [12.4, 36363.0], [12.5, 36363.0], [12.6, 36363.0], [12.7, 36363.0], [12.8, 36383.0], [12.9, 36383.0], [13.0, 36383.0], [13.1, 36383.0], [13.2, 36399.0], [13.3, 36399.0], [13.4, 36399.0], [13.5, 36399.0], [13.6, 36399.0], [13.7, 36403.0], [13.8, 36403.0], [13.9, 36403.0], [14.0, 36403.0], [14.1, 36477.0], [14.2, 36477.0], [14.3, 36477.0], [14.4, 36477.0], [14.5, 36539.0], [14.6, 36539.0], [14.7, 36539.0], [14.8, 36539.0], [14.9, 36606.0], [15.0, 36606.0], [15.1, 36606.0], [15.2, 36606.0], [15.3, 36606.0], [15.4, 36615.0], [15.5, 36615.0], [15.6, 36615.0], [15.7, 36615.0], [15.8, 36666.0], [15.9, 36666.0], [16.0, 36666.0], [16.1, 36666.0], [16.2, 36854.0], [16.3, 36854.0], [16.4, 36854.0], [16.5, 36854.0], [16.6, 36872.0], [16.7, 36872.0], [16.8, 36872.0], [16.9, 36872.0], [17.0, 36872.0], [17.1, 36873.0], [17.2, 36873.0], [17.3, 36873.0], [17.4, 36873.0], [17.5, 36909.0], [17.6, 36909.0], [17.7, 36909.0], [17.8, 36909.0], [17.9, 36915.0], [18.0, 36915.0], [18.1, 36915.0], [18.2, 36915.0], [18.3, 36921.0], [18.4, 36921.0], [18.5, 36921.0], [18.6, 36921.0], [18.7, 36921.0], [18.8, 36951.0], [18.9, 36951.0], [19.0, 36951.0], [19.1, 36951.0], [19.2, 36980.0], [19.3, 36980.0], [19.4, 36980.0], [19.5, 36980.0], [19.6, 36994.0], [19.7, 36994.0], [19.8, 36994.0], [19.9, 36994.0], [20.0, 37022.0], [20.1, 37022.0], [20.2, 37022.0], [20.3, 37022.0], [20.4, 37022.0], [20.5, 37029.0], [20.6, 37029.0], [20.7, 37029.0], [20.8, 37029.0], [20.9, 37073.0], [21.0, 37073.0], [21.1, 37073.0], [21.2, 37073.0], [21.3, 37084.0], [21.4, 37084.0], [21.5, 37084.0], [21.6, 37084.0], [21.7, 37084.0], [21.8, 37093.0], [21.9, 37093.0], [22.0, 37093.0], [22.1, 37093.0], [22.2, 37100.0], [22.3, 37100.0], [22.4, 37100.0], [22.5, 37100.0], [22.6, 37111.0], [22.7, 37111.0], [22.8, 37111.0], [22.9, 37111.0], [23.0, 37139.0], [23.1, 37139.0], [23.2, 37139.0], [23.3, 37139.0], [23.4, 37139.0], [23.5, 37173.0], [23.6, 37173.0], [23.7, 37173.0], [23.8, 37173.0], [23.9, 37187.0], [24.0, 37187.0], [24.1, 37187.0], [24.2, 37187.0], [24.3, 37211.0], [24.4, 37211.0], [24.5, 37211.0], [24.6, 37211.0], [24.7, 37236.0], [24.8, 37236.0], [24.9, 37236.0], [25.0, 37236.0], [25.1, 37236.0], [25.2, 37254.0], [25.3, 37254.0], [25.4, 37254.0], [25.5, 37254.0], [25.6, 37301.0], [25.7, 37301.0], [25.8, 37301.0], [25.9, 37301.0], [26.0, 37301.0], [26.1, 37301.0], [26.2, 37301.0], [26.3, 37301.0], [26.4, 37310.0], [26.5, 37310.0], [26.6, 37310.0], [26.7, 37310.0], [26.8, 37310.0], [26.9, 37311.0], [27.0, 37311.0], [27.1, 37311.0], [27.2, 37311.0], [27.3, 37320.0], [27.4, 37320.0], [27.5, 37320.0], [27.6, 37320.0], [27.7, 37339.0], [27.8, 37339.0], [27.9, 37339.0], [28.0, 37339.0], [28.1, 37384.0], [28.2, 37384.0], [28.3, 37384.0], [28.4, 37384.0], [28.5, 37384.0], [28.6, 37392.0], [28.7, 37392.0], [28.8, 37392.0], [28.9, 37392.0], [29.0, 37400.0], [29.1, 37400.0], [29.2, 37400.0], [29.3, 37400.0], [29.4, 37414.0], [29.5, 37414.0], [29.6, 37414.0], [29.7, 37414.0], [29.8, 37479.0], [29.9, 37479.0], [30.0, 37479.0], [30.1, 37479.0], [30.2, 37479.0], [30.3, 37499.0], [30.4, 37499.0], [30.5, 37499.0], [30.6, 37499.0], [30.7, 37504.0], [30.8, 37504.0], [30.9, 37504.0], [31.0, 37504.0], [31.1, 37517.0], [31.2, 37517.0], [31.3, 37517.0], [31.4, 37517.0], [31.5, 37532.0], [31.6, 37532.0], [31.7, 37532.0], [31.8, 37532.0], [31.9, 37532.0], [32.0, 37596.0], [32.1, 37596.0], [32.2, 37596.0], [32.3, 37596.0], [32.4, 37609.0], [32.5, 37609.0], [32.6, 37609.0], [32.7, 37609.0], [32.8, 37648.0], [32.9, 37648.0], [33.0, 37648.0], [33.1, 37648.0], [33.2, 37700.0], [33.3, 37700.0], [33.4, 37700.0], [33.5, 37700.0], [33.6, 37700.0], [33.7, 37704.0], [33.8, 37704.0], [33.9, 37704.0], [34.0, 37704.0], [34.1, 37720.0], [34.2, 37720.0], [34.3, 37720.0], [34.4, 37720.0], [34.5, 37733.0], [34.6, 37733.0], [34.7, 37733.0], [34.8, 37733.0], [34.9, 37737.0], [35.0, 37737.0], [35.1, 37737.0], [35.2, 37737.0], [35.3, 37737.0], [35.4, 37778.0], [35.5, 37778.0], [35.6, 37778.0], [35.7, 37778.0], [35.8, 37809.0], [35.9, 37809.0], [36.0, 37809.0], [36.1, 37809.0], [36.2, 37848.0], [36.3, 37848.0], [36.4, 37848.0], [36.5, 37848.0], [36.6, 37899.0], [36.7, 37899.0], [36.8, 37899.0], [36.9, 37899.0], [37.0, 37899.0], [37.1, 37904.0], [37.2, 37904.0], [37.3, 37904.0], [37.4, 37904.0], [37.5, 37909.0], [37.6, 37909.0], [37.7, 37909.0], [37.8, 37909.0], [37.9, 37911.0], [38.0, 37911.0], [38.1, 37911.0], [38.2, 37911.0], [38.3, 37917.0], [38.4, 37917.0], [38.5, 37917.0], [38.6, 37917.0], [38.7, 37917.0], [38.8, 37922.0], [38.9, 37922.0], [39.0, 37922.0], [39.1, 37922.0], [39.2, 37927.0], [39.3, 37927.0], [39.4, 37927.0], [39.5, 37927.0], [39.6, 37928.0], [39.7, 37928.0], [39.8, 37928.0], [39.9, 37928.0], [40.0, 37928.0], [40.1, 37956.0], [40.2, 37956.0], [40.3, 37956.0], [40.4, 37956.0], [40.5, 38033.0], [40.6, 38033.0], [40.7, 38033.0], [40.8, 38033.0], [40.9, 38081.0], [41.0, 38081.0], [41.1, 38081.0], [41.2, 38081.0], [41.3, 38081.0], [41.4, 38081.0], [41.5, 38081.0], [41.6, 38081.0], [41.7, 38081.0], [41.8, 38083.0], [41.9, 38083.0], [42.0, 38083.0], [42.1, 38083.0], [42.2, 38087.0], [42.3, 38087.0], [42.4, 38087.0], [42.5, 38087.0], [42.6, 38090.0], [42.7, 38090.0], [42.8, 38090.0], [42.9, 38090.0], [43.0, 38093.0], [43.1, 38093.0], [43.2, 38093.0], [43.3, 38093.0], [43.4, 38093.0], [43.5, 38099.0], [43.6, 38099.0], [43.7, 38099.0], [43.8, 38099.0], [43.9, 38112.0], [44.0, 38112.0], [44.1, 38112.0], [44.2, 38112.0], [44.3, 38114.0], [44.4, 38114.0], [44.5, 38114.0], [44.6, 38114.0], [44.7, 38116.0], [44.8, 38116.0], [44.9, 38116.0], [45.0, 38116.0], [45.1, 38116.0], [45.2, 38118.0], [45.3, 38118.0], [45.4, 38118.0], [45.5, 38118.0], [45.6, 38123.0], [45.7, 38123.0], [45.8, 38123.0], [45.9, 38123.0], [46.0, 38135.0], [46.1, 38135.0], [46.2, 38135.0], [46.3, 38135.0], [46.4, 38170.0], [46.5, 38170.0], [46.6, 38170.0], [46.7, 38170.0], [46.8, 38170.0], [46.9, 38182.0], [47.0, 38182.0], [47.1, 38182.0], [47.2, 38182.0], [47.3, 38191.0], [47.4, 38191.0], [47.5, 38191.0], [47.6, 38191.0], [47.7, 38212.0], [47.8, 38212.0], [47.9, 38212.0], [48.0, 38212.0], [48.1, 38216.0], [48.2, 38216.0], [48.3, 38216.0], [48.4, 38216.0], [48.5, 38216.0], [48.6, 38219.0], [48.7, 38219.0], [48.8, 38219.0], [48.9, 38219.0], [49.0, 38221.0], [49.1, 38221.0], [49.2, 38221.0], [49.3, 38221.0], [49.4, 38233.0], [49.5, 38233.0], [49.6, 38233.0], [49.7, 38233.0], [49.8, 38269.0], [49.9, 38269.0], [50.0, 38269.0], [50.1, 38269.0], [50.2, 38269.0], [50.3, 38272.0], [50.4, 38272.0], [50.5, 38272.0], [50.6, 38272.0], [50.7, 38292.0], [50.8, 38292.0], [50.9, 38292.0], [51.0, 38292.0], [51.1, 38301.0], [51.2, 38301.0], [51.3, 38301.0], [51.4, 38301.0], [51.5, 38302.0], [51.6, 38302.0], [51.7, 38302.0], [51.8, 38302.0], [51.9, 38302.0], [52.0, 38321.0], [52.1, 38321.0], [52.2, 38321.0], [52.3, 38321.0], [52.4, 38323.0], [52.5, 38323.0], [52.6, 38323.0], [52.7, 38323.0], [52.8, 38326.0], [52.9, 38326.0], [53.0, 38326.0], [53.1, 38326.0], [53.2, 38329.0], [53.3, 38329.0], [53.4, 38329.0], [53.5, 38329.0], [53.6, 38329.0], [53.7, 38330.0], [53.8, 38330.0], [53.9, 38330.0], [54.0, 38330.0], [54.1, 38335.0], [54.2, 38335.0], [54.3, 38335.0], [54.4, 38335.0], [54.5, 38338.0], [54.6, 38338.0], [54.7, 38338.0], [54.8, 38338.0], [54.9, 38341.0], [55.0, 38341.0], [55.1, 38341.0], [55.2, 38341.0], [55.3, 38341.0], [55.4, 38345.0], [55.5, 38345.0], [55.6, 38345.0], [55.7, 38345.0], [55.8, 38347.0], [55.9, 38347.0], [56.0, 38347.0], [56.1, 38347.0], [56.2, 38359.0], [56.3, 38359.0], [56.4, 38359.0], [56.5, 38359.0], [56.6, 38377.0], [56.7, 38377.0], [56.8, 38377.0], [56.9, 38377.0], [57.0, 38377.0], [57.1, 38385.0], [57.2, 38385.0], [57.3, 38385.0], [57.4, 38385.0], [57.5, 38404.0], [57.6, 38404.0], [57.7, 38404.0], [57.8, 38404.0], [57.9, 38411.0], [58.0, 38411.0], [58.1, 38411.0], [58.2, 38411.0], [58.3, 38422.0], [58.4, 38422.0], [58.5, 38422.0], [58.6, 38422.0], [58.7, 38422.0], [58.8, 38425.0], [58.9, 38425.0], [59.0, 38425.0], [59.1, 38425.0], [59.2, 38430.0], [59.3, 38430.0], [59.4, 38430.0], [59.5, 38430.0], [59.6, 38442.0], [59.7, 38442.0], [59.8, 38442.0], [59.9, 38442.0], [60.0, 38442.0], [60.1, 38445.0], [60.2, 38445.0], [60.3, 38445.0], [60.4, 38445.0], [60.5, 38463.0], [60.6, 38463.0], [60.7, 38463.0], [60.8, 38463.0], [60.9, 38479.0], [61.0, 38479.0], [61.1, 38479.0], [61.2, 38479.0], [61.3, 38528.0], [61.4, 38528.0], [61.5, 38528.0], [61.6, 38528.0], [61.7, 38528.0], [61.8, 38530.0], [61.9, 38530.0], [62.0, 38530.0], [62.1, 38530.0], [62.2, 38533.0], [62.3, 38533.0], [62.4, 38533.0], [62.5, 38533.0], [62.6, 38534.0], [62.7, 38534.0], [62.8, 38534.0], [62.9, 38534.0], [63.0, 38536.0], [63.1, 38536.0], [63.2, 38536.0], [63.3, 38536.0], [63.4, 38536.0], [63.5, 38537.0], [63.6, 38537.0], [63.7, 38537.0], [63.8, 38537.0], [63.9, 38543.0], [64.0, 38543.0], [64.1, 38543.0], [64.2, 38543.0], [64.3, 38556.0], [64.4, 38556.0], [64.5, 38556.0], [64.6, 38556.0], [64.7, 38560.0], [64.8, 38560.0], [64.9, 38560.0], [65.0, 38560.0], [65.1, 38560.0], [65.2, 38560.0], [65.3, 38560.0], [65.4, 38560.0], [65.5, 38560.0], [65.6, 38635.0], [65.7, 38635.0], [65.8, 38635.0], [65.9, 38635.0], [66.0, 38646.0], [66.1, 38646.0], [66.2, 38646.0], [66.3, 38646.0], [66.4, 38672.0], [66.5, 38672.0], [66.6, 38672.0], [66.7, 38672.0], [66.8, 38672.0], [66.9, 38676.0], [67.0, 38676.0], [67.1, 38676.0], [67.2, 38676.0], [67.3, 38678.0], [67.4, 38678.0], [67.5, 38678.0], [67.6, 38678.0], [67.7, 38709.0], [67.8, 38709.0], [67.9, 38709.0], [68.0, 38709.0], [68.1, 38732.0], [68.2, 38732.0], [68.3, 38732.0], [68.4, 38732.0], [68.5, 38732.0], [68.6, 38738.0], [68.7, 38738.0], [68.8, 38738.0], [68.9, 38738.0], [69.0, 38739.0], [69.1, 38739.0], [69.2, 38739.0], [69.3, 38739.0], [69.4, 38739.0], [69.5, 38739.0], [69.6, 38739.0], [69.7, 38739.0], [69.8, 38739.0], [69.9, 38739.0], [70.0, 38739.0], [70.1, 38739.0], [70.2, 38739.0], [70.3, 38755.0], [70.4, 38755.0], [70.5, 38755.0], [70.6, 38755.0], [70.7, 38757.0], [70.8, 38757.0], [70.9, 38757.0], [71.0, 38757.0], [71.1, 38773.0], [71.2, 38773.0], [71.3, 38773.0], [71.4, 38773.0], [71.5, 38783.0], [71.6, 38783.0], [71.7, 38783.0], [71.8, 38783.0], [71.9, 38783.0], [72.0, 38794.0], [72.1, 38794.0], [72.2, 38794.0], [72.3, 38794.0], [72.4, 38800.0], [72.5, 38800.0], [72.6, 38800.0], [72.7, 38800.0], [72.8, 38834.0], [72.9, 38834.0], [73.0, 38834.0], [73.1, 38834.0], [73.2, 38835.0], [73.3, 38835.0], [73.4, 38835.0], [73.5, 38835.0], [73.6, 38835.0], [73.7, 38856.0], [73.8, 38856.0], [73.9, 38856.0], [74.0, 38856.0], [74.1, 38863.0], [74.2, 38863.0], [74.3, 38863.0], [74.4, 38863.0], [74.5, 38879.0], [74.6, 38879.0], [74.7, 38879.0], [74.8, 38879.0], [74.9, 38895.0], [75.0, 38895.0], [75.1, 38895.0], [75.2, 38895.0], [75.3, 38895.0], [75.4, 38919.0], [75.5, 38919.0], [75.6, 38919.0], [75.7, 38919.0], [75.8, 38928.0], [75.9, 38928.0], [76.0, 38928.0], [76.1, 38928.0], [76.2, 38929.0], [76.3, 38929.0], [76.4, 38929.0], [76.5, 38929.0], [76.6, 38931.0], [76.7, 38931.0], [76.8, 38931.0], [76.9, 38931.0], [77.0, 38931.0], [77.1, 38931.0], [77.2, 38931.0], [77.3, 38931.0], [77.4, 38931.0], [77.5, 38934.0], [77.6, 38934.0], [77.7, 38934.0], [77.8, 38934.0], [77.9, 38948.0], [78.0, 38948.0], [78.1, 38948.0], [78.2, 38948.0], [78.3, 38948.0], [78.4, 38948.0], [78.5, 38948.0], [78.6, 38948.0], [78.7, 38948.0], [78.8, 38955.0], [78.9, 38955.0], [79.0, 38955.0], [79.1, 38955.0], [79.2, 39006.0], [79.3, 39006.0], [79.4, 39006.0], [79.5, 39006.0], [79.6, 39047.0], [79.7, 39047.0], [79.8, 39047.0], [79.9, 39047.0], [80.0, 39050.0], [80.1, 39050.0], [80.2, 39050.0], [80.3, 39050.0], [80.4, 39050.0], [80.5, 39062.0], [80.6, 39062.0], [80.7, 39062.0], [80.8, 39062.0], [80.9, 39117.0], [81.0, 39117.0], [81.1, 39117.0], [81.2, 39117.0], [81.3, 39131.0], [81.4, 39131.0], [81.5, 39131.0], [81.6, 39131.0], [81.7, 39131.0], [81.8, 39142.0], [81.9, 39142.0], [82.0, 39142.0], [82.1, 39142.0], [82.2, 39143.0], [82.3, 39143.0], [82.4, 39143.0], [82.5, 39143.0], [82.6, 39148.0], [82.7, 39148.0], [82.8, 39148.0], [82.9, 39148.0], [83.0, 39157.0], [83.1, 39157.0], [83.2, 39157.0], [83.3, 39157.0], [83.4, 39157.0], [83.5, 39205.0], [83.6, 39205.0], [83.7, 39205.0], [83.8, 39205.0], [83.9, 39232.0], [84.0, 39232.0], [84.1, 39232.0], [84.2, 39232.0], [84.3, 39238.0], [84.4, 39238.0], [84.5, 39238.0], [84.6, 39238.0], [84.7, 39252.0], [84.8, 39252.0], [84.9, 39252.0], [85.0, 39252.0], [85.1, 39252.0], [85.2, 39258.0], [85.3, 39258.0], [85.4, 39258.0], [85.5, 39258.0], [85.6, 39262.0], [85.7, 39262.0], [85.8, 39262.0], [85.9, 39262.0], [86.0, 39274.0], [86.1, 39274.0], [86.2, 39274.0], [86.3, 39274.0], [86.4, 39295.0], [86.5, 39295.0], [86.6, 39295.0], [86.7, 39295.0], [86.8, 39295.0], [86.9, 39345.0], [87.0, 39345.0], [87.1, 39345.0], [87.2, 39345.0], [87.3, 39350.0], [87.4, 39350.0], [87.5, 39350.0], [87.6, 39350.0], [87.7, 39354.0], [87.8, 39354.0], [87.9, 39354.0], [88.0, 39354.0], [88.1, 39367.0], [88.2, 39367.0], [88.3, 39367.0], [88.4, 39367.0], [88.5, 39367.0], [88.6, 39373.0], [88.7, 39373.0], [88.8, 39373.0], [88.9, 39373.0], [89.0, 39374.0], [89.1, 39374.0], [89.2, 39374.0], [89.3, 39374.0], [89.4, 39377.0], [89.5, 39377.0], [89.6, 39377.0], [89.7, 39377.0], [89.8, 39427.0], [89.9, 39427.0], [90.0, 39427.0], [90.1, 39427.0], [90.2, 39427.0], [90.3, 39470.0], [90.4, 39470.0], [90.5, 39470.0], [90.6, 39470.0], [90.7, 39516.0], [90.8, 39516.0], [90.9, 39516.0], [91.0, 39516.0], [91.1, 39540.0], [91.2, 39540.0], [91.3, 39540.0], [91.4, 39540.0], [91.5, 39548.0], [91.6, 39548.0], [91.7, 39548.0], [91.8, 39548.0], [91.9, 39548.0], [92.0, 39548.0], [92.1, 39548.0], [92.2, 39548.0], [92.3, 39548.0], [92.4, 39557.0], [92.5, 39557.0], [92.6, 39557.0], [92.7, 39557.0], [92.8, 39560.0], [92.9, 39560.0], [93.0, 39560.0], [93.1, 39560.0], [93.2, 39661.0], [93.3, 39661.0], [93.4, 39661.0], [93.5, 39661.0], [93.6, 39661.0], [93.7, 39706.0], [93.8, 39706.0], [93.9, 39706.0], [94.0, 39706.0], [94.1, 39738.0], [94.2, 39738.0], [94.3, 39738.0], [94.4, 39738.0], [94.5, 39755.0], [94.6, 39755.0], [94.7, 39755.0], [94.8, 39755.0], [94.9, 39761.0], [95.0, 39761.0], [95.1, 39761.0], [95.2, 39761.0], [95.3, 39761.0], [95.4, 39767.0], [95.5, 39767.0], [95.6, 39767.0], [95.7, 39767.0], [95.8, 39770.0], [95.9, 39770.0], [96.0, 39770.0], [96.1, 39770.0], [96.2, 39858.0], [96.3, 39858.0], [96.4, 39858.0], [96.5, 39858.0], [96.6, 39870.0], [96.7, 39870.0], [96.8, 39870.0], [96.9, 39870.0], [97.0, 39870.0], [97.1, 39937.0], [97.2, 39937.0], [97.3, 39937.0], [97.4, 39937.0], [97.5, 39967.0], [97.6, 39967.0], [97.7, 39967.0], [97.8, 39967.0], [97.9, 39979.0], [98.0, 39979.0], [98.1, 39979.0], [98.2, 39979.0], [98.3, 40062.0], [98.4, 40062.0], [98.5, 40062.0], [98.6, 40062.0], [98.7, 40062.0], [98.8, 40252.0], [98.9, 40252.0], [99.0, 40252.0], [99.1, 40252.0], [99.2, 40325.0], [99.3, 40325.0], [99.4, 40325.0], [99.5, 40325.0], [99.6, 40585.0], [99.7, 40585.0], [99.8, 40585.0], [99.9, 40585.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 10800.0, "maxY": 15.0, "series": [{"data": [[10800.0, 1.0], [14300.0, 1.0], [13900.0, 1.0], [15100.0, 1.0], [19500.0, 1.0], [21000.0, 1.0], [22900.0, 1.0], [24300.0, 1.0], [23800.0, 1.0], [25200.0, 1.0], [27400.0, 1.0], [30600.0, 1.0], [31100.0, 1.0], [32600.0, 1.0], [32100.0, 1.0], [32800.0, 1.0], [34600.0, 1.0], [33700.0, 1.0], [36800.0, 3.0], [35300.0, 1.0], [36100.0, 3.0], [36600.0, 3.0], [35800.0, 2.0], [35400.0, 1.0], [35000.0, 1.0], [36000.0, 2.0], [36300.0, 3.0], [36200.0, 1.0], [36400.0, 2.0], [36500.0, 1.0], [38400.0, 9.0], [38000.0, 8.0], [38100.0, 9.0], [38300.0, 15.0], [38200.0, 8.0], [38700.0, 11.0], [38500.0, 10.0], [38600.0, 5.0], [37700.0, 6.0], [37800.0, 3.0], [36900.0, 6.0], [37100.0, 5.0], [37200.0, 3.0], [37300.0, 8.0], [37900.0, 8.0], [38900.0, 9.0], [38800.0, 7.0], [37000.0, 5.0], [37600.0, 2.0], [37500.0, 4.0], [37400.0, 4.0], [39100.0, 6.0], [39200.0, 8.0], [39300.0, 7.0], [39500.0, 6.0], [39600.0, 1.0], [39000.0, 4.0], [39900.0, 3.0], [39800.0, 2.0], [40200.0, 1.0], [40300.0, 1.0], [39700.0, 6.0], [40000.0, 1.0], [40500.0, 1.0], [39400.0, 2.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 40500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 235.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 235.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 235.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.823529411764707, "minX": 1.71897612E12, "maxY": 15.0, "series": [{"data": [[1.71897654E12, 15.0], [1.71897636E12, 15.0], [1.71897618E12, 15.0], [1.71897666E12, 15.0], [1.71897648E12, 15.0], [1.7189763E12, 15.0], [1.71897612E12, 15.0], [1.7189766E12, 15.0], [1.71897642E12, 15.0], [1.71897624E12, 15.0], [1.71897672E12, 8.823529411764707]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897672E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 13943.0, "minX": 1.0, "maxY": 39870.0, "series": [{"data": [[8.0, 32177.0], [2.0, 15154.0], [9.0, 39870.0], [10.0, 33717.0], [11.0, 38422.0], [12.0, 38430.0], [3.0, 19571.0], [13.0, 37414.0], [14.0, 39142.0], [15.0, 37687.67873303167], [4.0, 22976.0], [1.0, 13943.0], [5.0, 25238.0], [6.0, 23878.0], [7.0, 30632.0]], "isOverall": false, "label": "Actors by name", "isController": false}, {"data": [[14.553191489361703, 37189.53617021277]], "isOverall": false, "label": "Actors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 42.65, "minX": 1.71897612E12, "maxY": 1251.3666666666666, "series": [{"data": [[1.71897654E12, 404.55], [1.71897636E12, 1251.3666666666666], [1.71897618E12, 430.46666666666664], [1.71897666E12, 366.15], [1.71897648E12, 462.06666666666666], [1.7189763E12, 431.3333333333333], [1.71897612E12, 294.95], [1.7189766E12, 417.45], [1.71897642E12, 387.7], [1.71897624E12, 554.0], [1.71897672E12, 335.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71897654E12, 53.766666666666666], [1.71897636E12, 58.88333333333333], [1.71897618E12, 52.6], [1.71897666E12, 55.416666666666664], [1.71897648E12, 64.55], [1.7189763E12, 54.13333333333333], [1.71897612E12, 42.65], [1.7189766E12, 64.21666666666667], [1.71897642E12, 55.18333333333333], [1.71897624E12, 64.88333333333334], [1.71897672E12, 43.63333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897672E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 30997.764705882353, "minX": 1.71897612E12, "maxY": 38402.38095238095, "series": [{"data": [[1.71897654E12, 38402.38095238095], [1.71897636E12, 38378.29166666667], [1.71897618E12, 38145.75000000001], [1.71897666E12, 37935.23809523809], [1.71897648E12, 38284.64], [1.7189763E12, 38090.04761904762], [1.71897612E12, 31473.0625], [1.7189766E12, 38185.20833333333], [1.71897642E12, 37604.4761904762], [1.71897624E12, 38351.2], [1.71897672E12, 30997.764705882353]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897672E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 30997.764705882353, "minX": 1.71897612E12, "maxY": 38402.38095238095, "series": [{"data": [[1.71897654E12, 38402.38095238095], [1.71897636E12, 38378.166666666664], [1.71897618E12, 38145.75000000001], [1.71897666E12, 37935.23809523809], [1.71897648E12, 38284.64], [1.7189763E12, 38090.04761904762], [1.71897612E12, 31473.0625], [1.7189766E12, 38185.20833333333], [1.71897642E12, 37604.4761904762], [1.71897624E12, 38351.2], [1.71897672E12, 30997.764705882353]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897672E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 6.699999999999999, "minX": 1.71897612E12, "maxY": 33.5625, "series": [{"data": [[1.71897654E12, 30.9047619047619], [1.71897636E12, 19.833333333333332], [1.71897618E12, 6.699999999999999], [1.71897666E12, 10.285714285714286], [1.71897648E12, 15.079999999999991], [1.7189763E12, 25.428571428571423], [1.71897612E12, 33.5625], [1.7189766E12, 23.20833333333333], [1.71897642E12, 10.619047619047619], [1.71897624E12, 15.039999999999997], [1.71897672E12, 18.000000000000004]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897672E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10858.0, "minX": 1.71897612E12, "maxY": 40585.0, "series": [{"data": [[1.71897654E12, 39937.0], [1.71897636E12, 40325.0], [1.71897618E12, 39557.0], [1.71897666E12, 39979.0], [1.71897648E12, 39767.0], [1.7189763E12, 40585.0], [1.71897612E12, 39295.0], [1.7189766E12, 39755.0], [1.71897642E12, 39345.0], [1.71897624E12, 40252.0], [1.71897672E12, 39870.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71897654E12, 35027.0], [1.71897636E12, 36087.0], [1.71897618E12, 35300.0], [1.71897666E12, 35425.0], [1.71897648E12, 36477.0], [1.7189763E12, 35886.0], [1.71897612E12, 10858.0], [1.7189766E12, 36083.0], [1.71897642E12, 34640.0], [1.71897624E12, 36854.0], [1.71897672E12, 13943.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71897654E12, 39768.2], [1.71897636E12, 39852.5], [1.71897618E12, 39231.8], [1.71897666E12, 39818.6], [1.71897648E12, 39440.4], [1.7189763E12, 39990.8], [1.71897612E12, 39232.0], [1.7189766E12, 39258.0], [1.71897642E12, 38887.6], [1.71897624E12, 39552.8], [1.71897672E12, 39475.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71897654E12, 39937.0], [1.71897636E12, 40325.0], [1.71897618E12, 39557.0], [1.71897666E12, 39979.0], [1.71897648E12, 39767.0], [1.7189763E12, 40585.0], [1.71897612E12, 39295.0], [1.7189766E12, 39755.0], [1.71897642E12, 39345.0], [1.71897624E12, 40252.0], [1.71897672E12, 39870.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71897654E12, 38560.0], [1.71897636E12, 38457.0], [1.71897618E12, 38379.0], [1.71897666E12, 37904.0], [1.71897648E12, 38272.0], [1.7189763E12, 38099.0], [1.71897612E12, 35300.5], [1.7189766E12, 38323.5], [1.71897642E12, 37909.0], [1.71897624E12, 38338.0], [1.71897672E12, 33717.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71897654E12, 39920.3], [1.71897636E12, 40235.5], [1.71897618E12, 39541.75], [1.71897666E12, 39966.9], [1.71897648E12, 39698.9], [1.7189763E12, 40532.7], [1.71897612E12, 39295.0], [1.7189766E12, 39659.5], [1.71897642E12, 39305.3], [1.71897624E12, 40044.4], [1.71897672E12, 39870.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897672E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 38033.0, "minX": 1.0, "maxY": 38454.5, "series": [{"data": [[1.0, 38270.5], [2.0, 38454.5], [3.0, 38033.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 38033.0, "minX": 1.0, "maxY": 38454.5, "series": [{"data": [[1.0, 38270.5], [2.0, 38454.5], [3.0, 38033.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71897612E12, "maxY": 0.5166666666666667, "series": [{"data": [[1.71897654E12, 0.36666666666666664], [1.71897636E12, 0.4166666666666667], [1.71897618E12, 0.31666666666666665], [1.71897666E12, 0.35], [1.71897648E12, 0.4], [1.7189763E12, 0.3333333333333333], [1.71897612E12, 0.5166666666666667], [1.7189766E12, 0.4], [1.71897642E12, 0.35], [1.71897624E12, 0.43333333333333335], [1.71897672E12, 0.03333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897672E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.71897612E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.71897654E12, 0.35], [1.71897636E12, 0.4], [1.71897618E12, 0.3333333333333333], [1.71897666E12, 0.35], [1.71897648E12, 0.4166666666666667], [1.7189763E12, 0.35], [1.71897612E12, 0.26666666666666666], [1.7189766E12, 0.4], [1.71897642E12, 0.35], [1.71897624E12, 0.4166666666666667], [1.71897672E12, 0.2833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71897672E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.71897612E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.71897654E12, 0.35], [1.71897636E12, 0.4], [1.71897618E12, 0.3333333333333333], [1.71897666E12, 0.35], [1.71897648E12, 0.4166666666666667], [1.7189763E12, 0.35], [1.71897612E12, 0.26666666666666666], [1.7189766E12, 0.4], [1.71897642E12, 0.35], [1.71897624E12, 0.4166666666666667], [1.71897672E12, 0.2833333333333333]], "isOverall": false, "label": "Actors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897672E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.71897612E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.71897654E12, 0.35], [1.71897636E12, 0.4], [1.71897618E12, 0.3333333333333333], [1.71897666E12, 0.35], [1.71897648E12, 0.4166666666666667], [1.7189763E12, 0.35], [1.71897612E12, 0.26666666666666666], [1.7189766E12, 0.4], [1.71897642E12, 0.35], [1.71897624E12, 0.4166666666666667], [1.71897672E12, 0.2833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71897672E12, "title": "Total Transactions Per Second"}},
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

