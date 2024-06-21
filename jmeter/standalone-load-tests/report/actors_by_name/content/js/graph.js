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
        data: {"result": {"minY": 12112.0, "minX": 0.0, "maxY": 40983.0, "series": [{"data": [[0.0, 12112.0], [0.1, 12112.0], [0.2, 12112.0], [0.3, 12112.0], [0.4, 12112.0], [0.5, 12617.0], [0.6, 12617.0], [0.7, 12617.0], [0.8, 12617.0], [0.9, 14653.0], [1.0, 14653.0], [1.1, 14653.0], [1.2, 14653.0], [1.3, 16573.0], [1.4, 16573.0], [1.5, 16573.0], [1.6, 16573.0], [1.7, 16573.0], [1.8, 16595.0], [1.9, 16595.0], [2.0, 16595.0], [2.1, 16595.0], [2.2, 17330.0], [2.3, 17330.0], [2.4, 17330.0], [2.5, 17330.0], [2.6, 21654.0], [2.7, 21654.0], [2.8, 21654.0], [2.9, 21654.0], [3.0, 21798.0], [3.1, 21798.0], [3.2, 21798.0], [3.3, 21798.0], [3.4, 21798.0], [3.5, 25284.0], [3.6, 25284.0], [3.7, 25284.0], [3.8, 25284.0], [3.9, 25420.0], [4.0, 25420.0], [4.1, 25420.0], [4.2, 25420.0], [4.3, 26425.0], [4.4, 26425.0], [4.5, 26425.0], [4.6, 26425.0], [4.7, 26425.0], [4.8, 29967.0], [4.9, 29967.0], [5.0, 29967.0], [5.1, 29967.0], [5.2, 30558.0], [5.3, 30558.0], [5.4, 30558.0], [5.5, 30558.0], [5.6, 34227.0], [5.7, 34227.0], [5.8, 34227.0], [5.9, 34227.0], [6.0, 34277.0], [6.1, 34277.0], [6.2, 34277.0], [6.3, 34277.0], [6.4, 34277.0], [6.5, 34872.0], [6.6, 34872.0], [6.7, 34872.0], [6.8, 34872.0], [6.9, 35462.0], [7.0, 35462.0], [7.1, 35462.0], [7.2, 35462.0], [7.3, 35600.0], [7.4, 35600.0], [7.5, 35600.0], [7.6, 35600.0], [7.7, 35699.0], [7.8, 35699.0], [7.9, 35699.0], [8.0, 35699.0], [8.1, 35699.0], [8.2, 35751.0], [8.3, 35751.0], [8.4, 35751.0], [8.5, 35751.0], [8.6, 35866.0], [8.7, 35866.0], [8.8, 35866.0], [8.9, 35866.0], [9.0, 35870.0], [9.1, 35870.0], [9.2, 35870.0], [9.3, 35870.0], [9.4, 35870.0], [9.5, 35908.0], [9.6, 35908.0], [9.7, 35908.0], [9.8, 35908.0], [9.9, 35983.0], [10.0, 35983.0], [10.1, 35983.0], [10.2, 35983.0], [10.3, 36107.0], [10.4, 36107.0], [10.5, 36107.0], [10.6, 36107.0], [10.7, 36212.0], [10.8, 36212.0], [10.9, 36212.0], [11.0, 36212.0], [11.1, 36212.0], [11.2, 36268.0], [11.3, 36268.0], [11.4, 36268.0], [11.5, 36268.0], [11.6, 36406.0], [11.7, 36406.0], [11.8, 36406.0], [11.9, 36406.0], [12.0, 36470.0], [12.1, 36470.0], [12.2, 36470.0], [12.3, 36470.0], [12.4, 36487.0], [12.5, 36487.0], [12.6, 36487.0], [12.7, 36487.0], [12.8, 36487.0], [12.9, 36518.0], [13.0, 36518.0], [13.1, 36518.0], [13.2, 36518.0], [13.3, 36571.0], [13.4, 36571.0], [13.5, 36571.0], [13.6, 36571.0], [13.7, 36600.0], [13.8, 36600.0], [13.9, 36600.0], [14.0, 36600.0], [14.1, 36600.0], [14.2, 36629.0], [14.3, 36629.0], [14.4, 36629.0], [14.5, 36629.0], [14.6, 36676.0], [14.7, 36676.0], [14.8, 36676.0], [14.9, 36676.0], [15.0, 36782.0], [15.1, 36782.0], [15.2, 36782.0], [15.3, 36782.0], [15.4, 36855.0], [15.5, 36855.0], [15.6, 36855.0], [15.7, 36855.0], [15.8, 36855.0], [15.9, 36909.0], [16.0, 36909.0], [16.1, 36909.0], [16.2, 36909.0], [16.3, 36957.0], [16.4, 36957.0], [16.5, 36957.0], [16.6, 36957.0], [16.7, 36982.0], [16.8, 36982.0], [16.9, 36982.0], [17.0, 36982.0], [17.1, 37004.0], [17.2, 37004.0], [17.3, 37004.0], [17.4, 37004.0], [17.5, 37004.0], [17.6, 37044.0], [17.7, 37044.0], [17.8, 37044.0], [17.9, 37044.0], [18.0, 37060.0], [18.1, 37060.0], [18.2, 37060.0], [18.3, 37060.0], [18.4, 37095.0], [18.5, 37095.0], [18.6, 37095.0], [18.7, 37095.0], [18.8, 37095.0], [18.9, 37188.0], [19.0, 37188.0], [19.1, 37188.0], [19.2, 37188.0], [19.3, 37262.0], [19.4, 37262.0], [19.5, 37262.0], [19.6, 37262.0], [19.7, 37304.0], [19.8, 37304.0], [19.9, 37304.0], [20.0, 37304.0], [20.1, 37307.0], [20.2, 37307.0], [20.3, 37307.0], [20.4, 37307.0], [20.5, 37307.0], [20.6, 37312.0], [20.7, 37312.0], [20.8, 37312.0], [20.9, 37312.0], [21.0, 37327.0], [21.1, 37327.0], [21.2, 37327.0], [21.3, 37327.0], [21.4, 37338.0], [21.5, 37338.0], [21.6, 37338.0], [21.7, 37338.0], [21.8, 37396.0], [21.9, 37396.0], [22.0, 37396.0], [22.1, 37396.0], [22.2, 37396.0], [22.3, 37400.0], [22.4, 37400.0], [22.5, 37400.0], [22.6, 37400.0], [22.7, 37403.0], [22.8, 37403.0], [22.9, 37403.0], [23.0, 37403.0], [23.1, 37408.0], [23.2, 37408.0], [23.3, 37408.0], [23.4, 37408.0], [23.5, 37408.0], [23.6, 37414.0], [23.7, 37414.0], [23.8, 37414.0], [23.9, 37414.0], [24.0, 37427.0], [24.1, 37427.0], [24.2, 37427.0], [24.3, 37427.0], [24.4, 37438.0], [24.5, 37438.0], [24.6, 37438.0], [24.7, 37438.0], [24.8, 37494.0], [24.9, 37494.0], [25.0, 37494.0], [25.1, 37494.0], [25.2, 37494.0], [25.3, 37496.0], [25.4, 37496.0], [25.5, 37496.0], [25.6, 37496.0], [25.7, 37505.0], [25.8, 37505.0], [25.9, 37505.0], [26.0, 37505.0], [26.1, 37505.0], [26.2, 37505.0], [26.3, 37505.0], [26.4, 37505.0], [26.5, 37510.0], [26.6, 37510.0], [26.7, 37510.0], [26.8, 37510.0], [26.9, 37510.0], [27.0, 37521.0], [27.1, 37521.0], [27.2, 37521.0], [27.3, 37521.0], [27.4, 37558.0], [27.5, 37558.0], [27.6, 37558.0], [27.7, 37558.0], [27.8, 37582.0], [27.9, 37582.0], [28.0, 37582.0], [28.1, 37582.0], [28.2, 37582.0], [28.3, 37603.0], [28.4, 37603.0], [28.5, 37603.0], [28.6, 37603.0], [28.7, 37627.0], [28.8, 37627.0], [28.9, 37627.0], [29.0, 37627.0], [29.1, 37700.0], [29.2, 37700.0], [29.3, 37700.0], [29.4, 37700.0], [29.5, 37701.0], [29.6, 37701.0], [29.7, 37701.0], [29.8, 37701.0], [29.9, 37701.0], [30.0, 37717.0], [30.1, 37717.0], [30.2, 37717.0], [30.3, 37717.0], [30.4, 37721.0], [30.5, 37721.0], [30.6, 37721.0], [30.7, 37721.0], [30.8, 37722.0], [30.9, 37722.0], [31.0, 37722.0], [31.1, 37722.0], [31.2, 37729.0], [31.3, 37729.0], [31.4, 37729.0], [31.5, 37729.0], [31.6, 37729.0], [31.7, 37749.0], [31.8, 37749.0], [31.9, 37749.0], [32.0, 37749.0], [32.1, 37774.0], [32.2, 37774.0], [32.3, 37774.0], [32.4, 37774.0], [32.5, 37810.0], [32.6, 37810.0], [32.7, 37810.0], [32.8, 37810.0], [32.9, 37810.0], [33.0, 37848.0], [33.1, 37848.0], [33.2, 37848.0], [33.3, 37848.0], [33.4, 37868.0], [33.5, 37868.0], [33.6, 37868.0], [33.7, 37868.0], [33.8, 37922.0], [33.9, 37922.0], [34.0, 37922.0], [34.1, 37922.0], [34.2, 37923.0], [34.3, 37923.0], [34.4, 37923.0], [34.5, 37923.0], [34.6, 37923.0], [34.7, 37924.0], [34.8, 37924.0], [34.9, 37924.0], [35.0, 37924.0], [35.1, 37937.0], [35.2, 37937.0], [35.3, 37937.0], [35.4, 37937.0], [35.5, 37983.0], [35.6, 37983.0], [35.7, 37983.0], [35.8, 37983.0], [35.9, 38003.0], [36.0, 38003.0], [36.1, 38003.0], [36.2, 38003.0], [36.3, 38003.0], [36.4, 38022.0], [36.5, 38022.0], [36.6, 38022.0], [36.7, 38022.0], [36.8, 38028.0], [36.9, 38028.0], [37.0, 38028.0], [37.1, 38028.0], [37.2, 38046.0], [37.3, 38046.0], [37.4, 38046.0], [37.5, 38046.0], [37.6, 38046.0], [37.7, 38064.0], [37.8, 38064.0], [37.9, 38064.0], [38.0, 38064.0], [38.1, 38108.0], [38.2, 38108.0], [38.3, 38108.0], [38.4, 38108.0], [38.5, 38122.0], [38.6, 38122.0], [38.7, 38122.0], [38.8, 38122.0], [38.9, 38126.0], [39.0, 38126.0], [39.1, 38126.0], [39.2, 38126.0], [39.3, 38126.0], [39.4, 38146.0], [39.5, 38146.0], [39.6, 38146.0], [39.7, 38146.0], [39.8, 38177.0], [39.9, 38177.0], [40.0, 38177.0], [40.1, 38177.0], [40.2, 38191.0], [40.3, 38191.0], [40.4, 38191.0], [40.5, 38191.0], [40.6, 38212.0], [40.7, 38212.0], [40.8, 38212.0], [40.9, 38212.0], [41.0, 38212.0], [41.1, 38218.0], [41.2, 38218.0], [41.3, 38218.0], [41.4, 38218.0], [41.5, 38219.0], [41.6, 38219.0], [41.7, 38219.0], [41.8, 38219.0], [41.9, 38231.0], [42.0, 38231.0], [42.1, 38231.0], [42.2, 38231.0], [42.3, 38231.0], [42.4, 38234.0], [42.5, 38234.0], [42.6, 38234.0], [42.7, 38234.0], [42.8, 38257.0], [42.9, 38257.0], [43.0, 38257.0], [43.1, 38257.0], [43.2, 38301.0], [43.3, 38301.0], [43.4, 38301.0], [43.5, 38301.0], [43.6, 38319.0], [43.7, 38319.0], [43.8, 38319.0], [43.9, 38319.0], [44.0, 38319.0], [44.1, 38326.0], [44.2, 38326.0], [44.3, 38326.0], [44.4, 38326.0], [44.5, 38329.0], [44.6, 38329.0], [44.7, 38329.0], [44.8, 38329.0], [44.9, 38334.0], [45.0, 38334.0], [45.1, 38334.0], [45.2, 38334.0], [45.3, 38346.0], [45.4, 38346.0], [45.5, 38346.0], [45.6, 38346.0], [45.7, 38346.0], [45.8, 38364.0], [45.9, 38364.0], [46.0, 38364.0], [46.1, 38364.0], [46.2, 38364.0], [46.3, 38364.0], [46.4, 38364.0], [46.5, 38364.0], [46.6, 38386.0], [46.7, 38386.0], [46.8, 38386.0], [46.9, 38386.0], [47.0, 38386.0], [47.1, 38392.0], [47.2, 38392.0], [47.3, 38392.0], [47.4, 38392.0], [47.5, 38417.0], [47.6, 38417.0], [47.7, 38417.0], [47.8, 38417.0], [47.9, 38440.0], [48.0, 38440.0], [48.1, 38440.0], [48.2, 38440.0], [48.3, 38440.0], [48.4, 38440.0], [48.5, 38440.0], [48.6, 38440.0], [48.7, 38440.0], [48.8, 38473.0], [48.9, 38473.0], [49.0, 38473.0], [49.1, 38473.0], [49.2, 38479.0], [49.3, 38479.0], [49.4, 38479.0], [49.5, 38479.0], [49.6, 38498.0], [49.7, 38498.0], [49.8, 38498.0], [49.9, 38498.0], [50.0, 38518.0], [50.1, 38518.0], [50.2, 38518.0], [50.3, 38518.0], [50.4, 38518.0], [50.5, 38519.0], [50.6, 38519.0], [50.7, 38519.0], [50.8, 38519.0], [50.9, 38531.0], [51.0, 38531.0], [51.1, 38531.0], [51.2, 38531.0], [51.3, 38533.0], [51.4, 38533.0], [51.5, 38533.0], [51.6, 38533.0], [51.7, 38533.0], [51.8, 38539.0], [51.9, 38539.0], [52.0, 38539.0], [52.1, 38539.0], [52.2, 38541.0], [52.3, 38541.0], [52.4, 38541.0], [52.5, 38541.0], [52.6, 38654.0], [52.7, 38654.0], [52.8, 38654.0], [52.9, 38654.0], [53.0, 38661.0], [53.1, 38661.0], [53.2, 38661.0], [53.3, 38661.0], [53.4, 38661.0], [53.5, 38663.0], [53.6, 38663.0], [53.7, 38663.0], [53.8, 38663.0], [53.9, 38713.0], [54.0, 38713.0], [54.1, 38713.0], [54.2, 38713.0], [54.3, 38715.0], [54.4, 38715.0], [54.5, 38715.0], [54.6, 38715.0], [54.7, 38715.0], [54.8, 38726.0], [54.9, 38726.0], [55.0, 38726.0], [55.1, 38726.0], [55.2, 38734.0], [55.3, 38734.0], [55.4, 38734.0], [55.5, 38734.0], [55.6, 38736.0], [55.7, 38736.0], [55.8, 38736.0], [55.9, 38736.0], [56.0, 38742.0], [56.1, 38742.0], [56.2, 38742.0], [56.3, 38742.0], [56.4, 38742.0], [56.5, 38742.0], [56.6, 38742.0], [56.7, 38742.0], [56.8, 38742.0], [56.9, 38746.0], [57.0, 38746.0], [57.1, 38746.0], [57.2, 38746.0], [57.3, 38748.0], [57.4, 38748.0], [57.5, 38748.0], [57.6, 38748.0], [57.7, 38804.0], [57.8, 38804.0], [57.9, 38804.0], [58.0, 38804.0], [58.1, 38804.0], [58.2, 38819.0], [58.3, 38819.0], [58.4, 38819.0], [58.5, 38819.0], [58.6, 38820.0], [58.7, 38820.0], [58.8, 38820.0], [58.9, 38820.0], [59.0, 38827.0], [59.1, 38827.0], [59.2, 38827.0], [59.3, 38827.0], [59.4, 38827.0], [59.5, 38837.0], [59.6, 38837.0], [59.7, 38837.0], [59.8, 38837.0], [59.9, 38845.0], [60.0, 38845.0], [60.1, 38845.0], [60.2, 38845.0], [60.3, 38857.0], [60.4, 38857.0], [60.5, 38857.0], [60.6, 38857.0], [60.7, 38874.0], [60.8, 38874.0], [60.9, 38874.0], [61.0, 38874.0], [61.1, 38874.0], [61.2, 38896.0], [61.3, 38896.0], [61.4, 38896.0], [61.5, 38896.0], [61.6, 38919.0], [61.7, 38919.0], [61.8, 38919.0], [61.9, 38919.0], [62.0, 38936.0], [62.1, 38936.0], [62.2, 38936.0], [62.3, 38936.0], [62.4, 38938.0], [62.5, 38938.0], [62.6, 38938.0], [62.7, 38938.0], [62.8, 38938.0], [62.9, 38941.0], [63.0, 38941.0], [63.1, 38941.0], [63.2, 38941.0], [63.3, 38945.0], [63.4, 38945.0], [63.5, 38945.0], [63.6, 38945.0], [63.7, 38945.0], [63.8, 38945.0], [63.9, 38945.0], [64.0, 38945.0], [64.1, 38945.0], [64.2, 38946.0], [64.3, 38946.0], [64.4, 38946.0], [64.5, 38946.0], [64.6, 38961.0], [64.7, 38961.0], [64.8, 38961.0], [64.9, 38961.0], [65.0, 38968.0], [65.1, 38968.0], [65.2, 38968.0], [65.3, 38968.0], [65.4, 39000.0], [65.5, 39000.0], [65.6, 39000.0], [65.7, 39000.0], [65.8, 39000.0], [65.9, 39008.0], [66.0, 39008.0], [66.1, 39008.0], [66.2, 39008.0], [66.3, 39040.0], [66.4, 39040.0], [66.5, 39040.0], [66.6, 39040.0], [66.7, 39074.0], [66.8, 39074.0], [66.9, 39074.0], [67.0, 39074.0], [67.1, 39079.0], [67.2, 39079.0], [67.3, 39079.0], [67.4, 39079.0], [67.5, 39079.0], [67.6, 39094.0], [67.7, 39094.0], [67.8, 39094.0], [67.9, 39094.0], [68.0, 39111.0], [68.1, 39111.0], [68.2, 39111.0], [68.3, 39111.0], [68.4, 39122.0], [68.5, 39122.0], [68.6, 39122.0], [68.7, 39122.0], [68.8, 39122.0], [68.9, 39139.0], [69.0, 39139.0], [69.1, 39139.0], [69.2, 39139.0], [69.3, 39143.0], [69.4, 39143.0], [69.5, 39143.0], [69.6, 39143.0], [69.7, 39145.0], [69.8, 39145.0], [69.9, 39145.0], [70.0, 39145.0], [70.1, 39146.0], [70.2, 39146.0], [70.3, 39146.0], [70.4, 39146.0], [70.5, 39146.0], [70.6, 39146.0], [70.7, 39146.0], [70.8, 39146.0], [70.9, 39146.0], [71.0, 39149.0], [71.1, 39149.0], [71.2, 39149.0], [71.3, 39149.0], [71.4, 39154.0], [71.5, 39154.0], [71.6, 39154.0], [71.7, 39154.0], [71.8, 39157.0], [71.9, 39157.0], [72.0, 39157.0], [72.1, 39157.0], [72.2, 39157.0], [72.3, 39161.0], [72.4, 39161.0], [72.5, 39161.0], [72.6, 39161.0], [72.7, 39163.0], [72.8, 39163.0], [72.9, 39163.0], [73.0, 39163.0], [73.1, 39191.0], [73.2, 39191.0], [73.3, 39191.0], [73.4, 39191.0], [73.5, 39191.0], [73.6, 39211.0], [73.7, 39211.0], [73.8, 39211.0], [73.9, 39211.0], [74.0, 39228.0], [74.1, 39228.0], [74.2, 39228.0], [74.3, 39228.0], [74.4, 39241.0], [74.5, 39241.0], [74.6, 39241.0], [74.7, 39241.0], [74.8, 39241.0], [74.9, 39241.0], [75.0, 39241.0], [75.1, 39241.0], [75.2, 39241.0], [75.3, 39241.0], [75.4, 39241.0], [75.5, 39241.0], [75.6, 39241.0], [75.7, 39259.0], [75.8, 39259.0], [75.9, 39259.0], [76.0, 39259.0], [76.1, 39273.0], [76.2, 39273.0], [76.3, 39273.0], [76.4, 39273.0], [76.5, 39298.0], [76.6, 39298.0], [76.7, 39298.0], [76.8, 39298.0], [76.9, 39298.0], [77.0, 39314.0], [77.1, 39314.0], [77.2, 39314.0], [77.3, 39314.0], [77.4, 39340.0], [77.5, 39340.0], [77.6, 39340.0], [77.7, 39340.0], [77.8, 39340.0], [77.9, 39340.0], [78.0, 39340.0], [78.1, 39340.0], [78.2, 39340.0], [78.3, 39347.0], [78.4, 39347.0], [78.5, 39347.0], [78.6, 39347.0], [78.7, 39348.0], [78.8, 39348.0], [78.9, 39348.0], [79.0, 39348.0], [79.1, 39350.0], [79.2, 39350.0], [79.3, 39350.0], [79.4, 39350.0], [79.5, 39351.0], [79.6, 39351.0], [79.7, 39351.0], [79.8, 39351.0], [79.9, 39351.0], [80.0, 39366.0], [80.1, 39366.0], [80.2, 39366.0], [80.3, 39366.0], [80.4, 39440.0], [80.5, 39440.0], [80.6, 39440.0], [80.7, 39440.0], [80.8, 39445.0], [80.9, 39445.0], [81.0, 39445.0], [81.1, 39445.0], [81.2, 39446.0], [81.3, 39446.0], [81.4, 39446.0], [81.5, 39446.0], [81.6, 39446.0], [81.7, 39449.0], [81.8, 39449.0], [81.9, 39449.0], [82.0, 39449.0], [82.1, 39477.0], [82.2, 39477.0], [82.3, 39477.0], [82.4, 39477.0], [82.5, 39480.0], [82.6, 39480.0], [82.7, 39480.0], [82.8, 39480.0], [82.9, 39480.0], [83.0, 39480.0], [83.1, 39480.0], [83.2, 39480.0], [83.3, 39480.0], [83.4, 39536.0], [83.5, 39536.0], [83.6, 39536.0], [83.7, 39536.0], [83.8, 39553.0], [83.9, 39553.0], [84.0, 39553.0], [84.1, 39553.0], [84.2, 39562.0], [84.3, 39562.0], [84.4, 39562.0], [84.5, 39562.0], [84.6, 39562.0], [84.7, 39612.0], [84.8, 39612.0], [84.9, 39612.0], [85.0, 39612.0], [85.1, 39625.0], [85.2, 39625.0], [85.3, 39625.0], [85.4, 39625.0], [85.5, 39641.0], [85.6, 39641.0], [85.7, 39641.0], [85.8, 39641.0], [85.9, 39643.0], [86.0, 39643.0], [86.1, 39643.0], [86.2, 39643.0], [86.3, 39643.0], [86.4, 39654.0], [86.5, 39654.0], [86.6, 39654.0], [86.7, 39654.0], [86.8, 39679.0], [86.9, 39679.0], [87.0, 39679.0], [87.1, 39679.0], [87.2, 39696.0], [87.3, 39696.0], [87.4, 39696.0], [87.5, 39696.0], [87.6, 39696.0], [87.7, 39729.0], [87.8, 39729.0], [87.9, 39729.0], [88.0, 39729.0], [88.1, 39750.0], [88.2, 39750.0], [88.3, 39750.0], [88.4, 39750.0], [88.5, 39753.0], [88.6, 39753.0], [88.7, 39753.0], [88.8, 39753.0], [88.9, 39757.0], [89.0, 39757.0], [89.1, 39757.0], [89.2, 39757.0], [89.3, 39757.0], [89.4, 39757.0], [89.5, 39757.0], [89.6, 39757.0], [89.7, 39757.0], [89.8, 39765.0], [89.9, 39765.0], [90.0, 39765.0], [90.1, 39765.0], [90.2, 39863.0], [90.3, 39863.0], [90.4, 39863.0], [90.5, 39863.0], [90.6, 39874.0], [90.7, 39874.0], [90.8, 39874.0], [90.9, 39874.0], [91.0, 39874.0], [91.1, 39877.0], [91.2, 39877.0], [91.3, 39877.0], [91.4, 39877.0], [91.5, 39930.0], [91.6, 39930.0], [91.7, 39930.0], [91.8, 39930.0], [91.9, 39940.0], [92.0, 39940.0], [92.1, 39940.0], [92.2, 39940.0], [92.3, 39940.0], [92.4, 39971.0], [92.5, 39971.0], [92.6, 39971.0], [92.7, 39971.0], [92.8, 39979.0], [92.9, 39979.0], [93.0, 39979.0], [93.1, 39979.0], [93.2, 39989.0], [93.3, 39989.0], [93.4, 39989.0], [93.5, 39989.0], [93.6, 40017.0], [93.7, 40017.0], [93.8, 40017.0], [93.9, 40017.0], [94.0, 40017.0], [94.1, 40053.0], [94.2, 40053.0], [94.3, 40053.0], [94.4, 40053.0], [94.5, 40086.0], [94.6, 40086.0], [94.7, 40086.0], [94.8, 40086.0], [94.9, 40120.0], [95.0, 40120.0], [95.1, 40120.0], [95.2, 40120.0], [95.3, 40174.0], [95.4, 40174.0], [95.5, 40174.0], [95.6, 40174.0], [95.7, 40174.0], [95.8, 40266.0], [95.9, 40266.0], [96.0, 40266.0], [96.1, 40266.0], [96.2, 40274.0], [96.3, 40274.0], [96.4, 40274.0], [96.5, 40274.0], [96.6, 40332.0], [96.7, 40332.0], [96.8, 40332.0], [96.9, 40332.0], [97.0, 40332.0], [97.1, 40342.0], [97.2, 40342.0], [97.3, 40342.0], [97.4, 40342.0], [97.5, 40345.0], [97.6, 40345.0], [97.7, 40345.0], [97.8, 40345.0], [97.9, 40346.0], [98.0, 40346.0], [98.1, 40346.0], [98.2, 40346.0], [98.3, 40407.0], [98.4, 40407.0], [98.5, 40407.0], [98.6, 40407.0], [98.7, 40407.0], [98.8, 40569.0], [98.9, 40569.0], [99.0, 40569.0], [99.1, 40569.0], [99.2, 40589.0], [99.3, 40589.0], [99.4, 40589.0], [99.5, 40589.0], [99.6, 40983.0], [99.7, 40983.0], [99.8, 40983.0], [99.9, 40983.0], [100.0, 40983.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 12100.0, "maxY": 13.0, "series": [{"data": [[12100.0, 1.0], [12600.0, 1.0], [14600.0, 1.0], [16500.0, 2.0], [17300.0, 1.0], [21700.0, 1.0], [21600.0, 1.0], [25200.0, 1.0], [25400.0, 1.0], [26400.0, 1.0], [29900.0, 1.0], [30500.0, 1.0], [34200.0, 2.0], [34800.0, 1.0], [36600.0, 3.0], [35600.0, 2.0], [35900.0, 2.0], [36200.0, 2.0], [36700.0, 1.0], [36800.0, 1.0], [36400.0, 3.0], [36500.0, 2.0], [36100.0, 1.0], [35400.0, 1.0], [35800.0, 2.0], [35700.0, 1.0], [37300.0, 6.0], [37400.0, 8.0], [37500.0, 6.0], [37600.0, 2.0], [38000.0, 5.0], [38100.0, 6.0], [37800.0, 3.0], [37100.0, 1.0], [37200.0, 1.0], [37000.0, 4.0], [36900.0, 3.0], [37700.0, 8.0], [37900.0, 5.0], [38200.0, 6.0], [38300.0, 10.0], [38900.0, 9.0], [38800.0, 9.0], [38700.0, 9.0], [38600.0, 3.0], [38400.0, 6.0], [38500.0, 6.0], [39300.0, 8.0], [39600.0, 7.0], [39500.0, 3.0], [39800.0, 3.0], [39400.0, 7.0], [39000.0, 6.0], [39900.0, 5.0], [39700.0, 6.0], [40100.0, 2.0], [40200.0, 2.0], [40300.0, 4.0], [40400.0, 1.0], [40500.0, 2.0], [40900.0, 1.0], [40000.0, 3.0], [39200.0, 8.0], [39100.0, 13.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 40900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 234.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 234.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 234.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.6, "minX": 1.71896298E12, "maxY": 15.0, "series": [{"data": [[1.71896346E12, 15.0], [1.71896298E12, 15.0], [1.71896328E12, 15.0], [1.71896334E12, 15.0], [1.71896316E12, 15.0], [1.71896322E12, 15.0], [1.71896352E12, 14.6], [1.71896304E12, 15.0], [1.71896358E12, 5.6], [1.7189631E12, 15.0], [1.7189634E12, 15.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896358E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 12617.0, "minX": 1.0, "maxY": 38346.0, "series": [{"data": [[8.0, 34277.0], [9.0, 37312.0], [10.0, 36268.0], [11.0, 36518.0], [12.0, 35751.0], [3.0, 15991.5], [13.0, 38346.0], [14.0, 37327.0], [15.0, 38034.23181818183], [4.0, 16595.0], [1.0, 12617.0], [5.0, 21654.0], [6.0, 26425.0], [7.0, 30558.0]], "isOverall": false, "label": "Actors by name", "isController": false}, {"data": [[14.555555555555554, 37449.410256410265]], "isOverall": false, "label": "Actors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 25.666666666666668, "minX": 1.71896298E12, "maxY": 1235.1666666666667, "series": [{"data": [[1.71896346E12, 370.45], [1.71896298E12, 332.8333333333333], [1.71896328E12, 405.9], [1.71896334E12, 424.6333333333333], [1.71896316E12, 465.25], [1.71896322E12, 1235.1666666666667], [1.71896352E12, 427.53333333333336], [1.71896304E12, 475.3833333333333], [1.71896358E12, 213.23333333333332], [1.7189631E12, 509.01666666666665], [1.7189634E12, 452.93333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71896346E12, 59.38333333333333], [1.71896298E12, 47.95], [1.71896328E12, 57.56666666666667], [1.71896334E12, 59.35], [1.71896316E12, 56.266666666666666], [1.71896322E12, 59.43333333333333], [1.71896352E12, 65.45], [1.71896304E12, 55.05], [1.71896358E12, 25.666666666666668], [1.7189631E12, 62.4], [1.7189634E12, 58.833333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896358E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 24768.899999999998, "minX": 1.71896298E12, "maxY": 38663.428571428565, "series": [{"data": [[1.71896346E12, 38482.86363636363], [1.71896298E12, 32530.111111111113], [1.71896328E12, 38584.5], [1.71896334E12, 38395.21739130435], [1.71896316E12, 38410.95454545455], [1.71896322E12, 38588.37499999999], [1.71896352E12, 38432.52], [1.71896304E12, 38663.428571428565], [1.71896358E12, 24768.899999999998], [1.7189631E12, 38445.04166666667], [1.7189634E12, 38468.30434782609]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896358E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 24768.899999999998, "minX": 1.71896298E12, "maxY": 38663.428571428565, "series": [{"data": [[1.71896346E12, 38482.86363636363], [1.71896298E12, 32530.055555555555], [1.71896328E12, 38584.5], [1.71896334E12, 38395.21739130435], [1.71896316E12, 38410.95454545455], [1.71896322E12, 38588.37499999999], [1.71896352E12, 38432.52], [1.71896304E12, 38663.428571428565], [1.71896358E12, 24768.899999999998], [1.7189631E12, 38445.0], [1.7189634E12, 38468.30434782609]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896358E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.8, "minX": 1.71896298E12, "maxY": 40.83333333333334, "series": [{"data": [[1.71896346E12, 30.090909090909086], [1.71896298E12, 40.83333333333334], [1.71896328E12, 16.863636363636363], [1.71896334E12, 13.695652173913043], [1.71896316E12, 24.954545454545457], [1.71896322E12, 23.291666666666664], [1.71896352E12, 18.36], [1.71896304E12, 13.761904761904761], [1.71896358E12, 10.8], [1.7189631E12, 14.166666666666666], [1.7189634E12, 20.91304347826086]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896358E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12112.0, "minX": 1.71896298E12, "maxY": 40983.0, "series": [{"data": [[1.71896346E12, 40266.0], [1.71896298E12, 39877.0], [1.71896328E12, 40569.0], [1.71896334E12, 40345.0], [1.71896316E12, 40346.0], [1.71896322E12, 40407.0], [1.71896352E12, 40332.0], [1.71896304E12, 40589.0], [1.71896358E12, 37312.0], [1.7189631E12, 40983.0], [1.7189634E12, 39863.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71896346E12, 36855.0], [1.71896298E12, 12112.0], [1.71896328E12, 36107.0], [1.71896334E12, 35462.0], [1.71896316E12, 36600.0], [1.71896322E12, 36676.0], [1.71896352E12, 35751.0], [1.71896304E12, 36212.0], [1.71896358E12, 12617.0], [1.7189631E12, 34872.0], [1.7189634E12, 35870.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71896346E12, 39845.4], [1.71896298E12, 39714.1], [1.71896328E12, 40056.9], [1.71896334E12, 39975.8], [1.71896316E12, 39746.5], [1.71896322E12, 39952.0], [1.71896352E12, 40079.8], [1.71896304E12, 40254.0], [1.71896358E12, 37207.6], [1.7189631E12, 39846.5], [1.7189634E12, 39700.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71896346E12, 40266.0], [1.71896298E12, 39877.0], [1.71896328E12, 40569.0], [1.71896334E12, 40345.0], [1.71896316E12, 40346.0], [1.71896322E12, 40407.0], [1.71896352E12, 40332.0], [1.71896304E12, 40589.0], [1.71896358E12, 37312.0], [1.7189631E12, 40983.0], [1.7189634E12, 39863.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71896346E12, 38598.0], [1.71896298E12, 36606.0], [1.71896328E12, 38773.0], [1.71896334E12, 38742.0], [1.71896316E12, 38628.5], [1.71896322E12, 38440.0], [1.71896352E12, 38746.0], [1.71896304E12, 39074.0], [1.71896358E12, 24039.5], [1.7189631E12, 38566.5], [1.7189634E12, 38539.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71896346E12, 40228.65], [1.71896298E12, 39877.0], [1.71896328E12, 40496.549999999996], [1.71896334E12, 40271.799999999996], [1.71896316E12, 40275.2], [1.71896322E12, 40390.75], [1.71896352E12, 40268.4], [1.71896304E12, 40557.5], [1.71896358E12, 37312.0], [1.7189631E12, 40722.25], [1.7189634E12, 39840.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 38386.0, "minX": 1.0, "maxY": 39446.0, "series": [{"data": [[1.0, 38386.0], [4.0, 38761.5], [2.0, 38658.5], [3.0, 39446.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 38386.0, "minX": 1.0, "maxY": 39446.0, "series": [{"data": [[1.0, 38386.0], [4.0, 38761.5], [2.0, 38658.5], [3.0, 39446.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71896292E12, "maxY": 0.45, "series": [{"data": [[1.71896346E12, 0.36666666666666664], [1.71896298E12, 0.45], [1.71896328E12, 0.38333333333333336], [1.71896334E12, 0.36666666666666664], [1.71896316E12, 0.38333333333333336], [1.71896322E12, 0.38333333333333336], [1.71896352E12, 0.3333333333333333], [1.71896304E12, 0.35], [1.7189631E12, 0.38333333333333336], [1.7189634E12, 0.4], [1.71896292E12, 0.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896352E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.71896298E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.71896346E12, 0.36666666666666664], [1.71896298E12, 0.3], [1.71896328E12, 0.36666666666666664], [1.71896334E12, 0.38333333333333336], [1.71896316E12, 0.36666666666666664], [1.71896322E12, 0.4], [1.71896352E12, 0.4166666666666667], [1.71896304E12, 0.35], [1.71896358E12, 0.16666666666666666], [1.7189631E12, 0.4], [1.7189634E12, 0.38333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71896358E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.71896298E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.71896346E12, 0.36666666666666664], [1.71896298E12, 0.3], [1.71896328E12, 0.36666666666666664], [1.71896334E12, 0.38333333333333336], [1.71896316E12, 0.36666666666666664], [1.71896322E12, 0.4], [1.71896352E12, 0.4166666666666667], [1.71896304E12, 0.35], [1.71896358E12, 0.16666666666666666], [1.7189631E12, 0.4], [1.7189634E12, 0.38333333333333336]], "isOverall": false, "label": "Actors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896358E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.71896298E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.71896346E12, 0.36666666666666664], [1.71896298E12, 0.3], [1.71896328E12, 0.36666666666666664], [1.71896334E12, 0.38333333333333336], [1.71896316E12, 0.36666666666666664], [1.71896322E12, 0.4], [1.71896352E12, 0.4166666666666667], [1.71896304E12, 0.35], [1.71896358E12, 0.16666666666666666], [1.7189631E12, 0.4], [1.7189634E12, 0.38333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71896358E12, "title": "Total Transactions Per Second"}},
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

