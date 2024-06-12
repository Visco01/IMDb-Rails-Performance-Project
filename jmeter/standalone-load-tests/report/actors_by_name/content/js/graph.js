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
        data: {"result": {"minY": 5608.0, "minX": 0.0, "maxY": 22061.0, "series": [{"data": [[0.0, 5608.0], [0.1, 5608.0], [0.2, 5608.0], [0.3, 5608.0], [0.4, 5608.0], [0.5, 5608.0], [0.6, 5608.0], [0.7, 5659.0], [0.8, 5659.0], [0.9, 5659.0], [1.0, 5659.0], [1.1, 5659.0], [1.2, 5659.0], [1.3, 5659.0], [1.4, 5758.0], [1.5, 5758.0], [1.6, 5758.0], [1.7, 5758.0], [1.8, 5758.0], [1.9, 5758.0], [2.0, 5795.0], [2.1, 5795.0], [2.2, 5795.0], [2.3, 5795.0], [2.4, 5795.0], [2.5, 5795.0], [2.6, 5795.0], [2.7, 5878.0], [2.8, 5878.0], [2.9, 5878.0], [3.0, 5878.0], [3.1, 5878.0], [3.2, 5878.0], [3.3, 5878.0], [3.4, 5967.0], [3.5, 5967.0], [3.6, 5967.0], [3.7, 5967.0], [3.8, 5967.0], [3.9, 5967.0], [4.0, 6032.0], [4.1, 6032.0], [4.2, 6032.0], [4.3, 6032.0], [4.4, 6032.0], [4.5, 6032.0], [4.6, 6032.0], [4.7, 6047.0], [4.8, 6047.0], [4.9, 6047.0], [5.0, 6047.0], [5.1, 6047.0], [5.2, 6047.0], [5.3, 6047.0], [5.4, 6049.0], [5.5, 6049.0], [5.6, 6049.0], [5.7, 6049.0], [5.8, 6049.0], [5.9, 6049.0], [6.0, 6107.0], [6.1, 6107.0], [6.2, 6107.0], [6.3, 6107.0], [6.4, 6107.0], [6.5, 6107.0], [6.6, 6107.0], [6.7, 6123.0], [6.8, 6123.0], [6.9, 6123.0], [7.0, 6123.0], [7.1, 6123.0], [7.2, 6123.0], [7.3, 6123.0], [7.4, 6196.0], [7.5, 6196.0], [7.6, 6196.0], [7.7, 6196.0], [7.8, 6196.0], [7.9, 6196.0], [8.0, 6277.0], [8.1, 6277.0], [8.2, 6277.0], [8.3, 6277.0], [8.4, 6277.0], [8.5, 6277.0], [8.6, 6277.0], [8.7, 6394.0], [8.8, 6394.0], [8.9, 6394.0], [9.0, 6394.0], [9.1, 6394.0], [9.2, 6394.0], [9.3, 6394.0], [9.4, 6519.0], [9.5, 6519.0], [9.6, 6519.0], [9.7, 6519.0], [9.8, 6519.0], [9.9, 6519.0], [10.0, 6923.0], [10.1, 6923.0], [10.2, 6923.0], [10.3, 6923.0], [10.4, 6923.0], [10.5, 6923.0], [10.6, 6923.0], [10.7, 7092.0], [10.8, 7092.0], [10.9, 7092.0], [11.0, 7092.0], [11.1, 7092.0], [11.2, 7092.0], [11.3, 7092.0], [11.4, 7466.0], [11.5, 7466.0], [11.6, 7466.0], [11.7, 7466.0], [11.8, 7466.0], [11.9, 7466.0], [12.0, 7763.0], [12.1, 7763.0], [12.2, 7763.0], [12.3, 7763.0], [12.4, 7763.0], [12.5, 7763.0], [12.6, 7763.0], [12.7, 7765.0], [12.8, 7765.0], [12.9, 7765.0], [13.0, 7765.0], [13.1, 7765.0], [13.2, 7765.0], [13.3, 7765.0], [13.4, 7933.0], [13.5, 7933.0], [13.6, 7933.0], [13.7, 7933.0], [13.8, 7933.0], [13.9, 7933.0], [14.0, 8786.0], [14.1, 8786.0], [14.2, 8786.0], [14.3, 8786.0], [14.4, 8786.0], [14.5, 8786.0], [14.6, 8786.0], [14.7, 8933.0], [14.8, 8933.0], [14.9, 8933.0], [15.0, 8933.0], [15.1, 8933.0], [15.2, 8933.0], [15.3, 8933.0], [15.4, 9004.0], [15.5, 9004.0], [15.6, 9004.0], [15.7, 9004.0], [15.8, 9004.0], [15.9, 9004.0], [16.0, 9110.0], [16.1, 9110.0], [16.2, 9110.0], [16.3, 9110.0], [16.4, 9110.0], [16.5, 9110.0], [16.6, 9110.0], [16.7, 9340.0], [16.8, 9340.0], [16.9, 9340.0], [17.0, 9340.0], [17.1, 9340.0], [17.2, 9340.0], [17.3, 9340.0], [17.4, 9474.0], [17.5, 9474.0], [17.6, 9474.0], [17.7, 9474.0], [17.8, 9474.0], [17.9, 9474.0], [18.0, 9494.0], [18.1, 9494.0], [18.2, 9494.0], [18.3, 9494.0], [18.4, 9494.0], [18.5, 9494.0], [18.6, 9494.0], [18.7, 9567.0], [18.8, 9567.0], [18.9, 9567.0], [19.0, 9567.0], [19.1, 9567.0], [19.2, 9567.0], [19.3, 9567.0], [19.4, 9800.0], [19.5, 9800.0], [19.6, 9800.0], [19.7, 9800.0], [19.8, 9800.0], [19.9, 9800.0], [20.0, 9935.0], [20.1, 9935.0], [20.2, 9935.0], [20.3, 9935.0], [20.4, 9935.0], [20.5, 9935.0], [20.6, 9935.0], [20.7, 9938.0], [20.8, 9938.0], [20.9, 9938.0], [21.0, 9938.0], [21.1, 9938.0], [21.2, 9938.0], [21.3, 9938.0], [21.4, 10012.0], [21.5, 10012.0], [21.6, 10012.0], [21.7, 10012.0], [21.8, 10012.0], [21.9, 10012.0], [22.0, 10012.0], [22.1, 10310.0], [22.2, 10310.0], [22.3, 10310.0], [22.4, 10310.0], [22.5, 10310.0], [22.6, 10310.0], [22.7, 10370.0], [22.8, 10370.0], [22.9, 10370.0], [23.0, 10370.0], [23.1, 10370.0], [23.2, 10370.0], [23.3, 10370.0], [23.4, 10448.0], [23.5, 10448.0], [23.6, 10448.0], [23.7, 10448.0], [23.8, 10448.0], [23.9, 10448.0], [24.0, 10448.0], [24.1, 10780.0], [24.2, 10780.0], [24.3, 10780.0], [24.4, 10780.0], [24.5, 10780.0], [24.6, 10780.0], [24.7, 11046.0], [24.8, 11046.0], [24.9, 11046.0], [25.0, 11046.0], [25.1, 11046.0], [25.2, 11046.0], [25.3, 11046.0], [25.4, 12020.0], [25.5, 12020.0], [25.6, 12020.0], [25.7, 12020.0], [25.8, 12020.0], [25.9, 12020.0], [26.0, 12020.0], [26.1, 12197.0], [26.2, 12197.0], [26.3, 12197.0], [26.4, 12197.0], [26.5, 12197.0], [26.6, 12197.0], [26.7, 12645.0], [26.8, 12645.0], [26.9, 12645.0], [27.0, 12645.0], [27.1, 12645.0], [27.2, 12645.0], [27.3, 12645.0], [27.4, 12994.0], [27.5, 12994.0], [27.6, 12994.0], [27.7, 12994.0], [27.8, 12994.0], [27.9, 12994.0], [28.0, 12994.0], [28.1, 13010.0], [28.2, 13010.0], [28.3, 13010.0], [28.4, 13010.0], [28.5, 13010.0], [28.6, 13010.0], [28.7, 13618.0], [28.8, 13618.0], [28.9, 13618.0], [29.0, 13618.0], [29.1, 13618.0], [29.2, 13618.0], [29.3, 13618.0], [29.4, 13618.0], [29.5, 13618.0], [29.6, 13618.0], [29.7, 13618.0], [29.8, 13618.0], [29.9, 13618.0], [30.0, 13618.0], [30.1, 13667.0], [30.2, 13667.0], [30.3, 13667.0], [30.4, 13667.0], [30.5, 13667.0], [30.6, 13667.0], [30.7, 13672.0], [30.8, 13672.0], [30.9, 13672.0], [31.0, 13672.0], [31.1, 13672.0], [31.2, 13672.0], [31.3, 13672.0], [31.4, 13720.0], [31.5, 13720.0], [31.6, 13720.0], [31.7, 13720.0], [31.8, 13720.0], [31.9, 13720.0], [32.0, 13720.0], [32.1, 13740.0], [32.2, 13740.0], [32.3, 13740.0], [32.4, 13740.0], [32.5, 13740.0], [32.6, 13740.0], [32.7, 13742.0], [32.8, 13742.0], [32.9, 13742.0], [33.0, 13742.0], [33.1, 13742.0], [33.2, 13742.0], [33.3, 13742.0], [33.4, 13745.0], [33.5, 13745.0], [33.6, 13745.0], [33.7, 13745.0], [33.8, 13745.0], [33.9, 13745.0], [34.0, 13745.0], [34.1, 13895.0], [34.2, 13895.0], [34.3, 13895.0], [34.4, 13895.0], [34.5, 13895.0], [34.6, 13895.0], [34.7, 13937.0], [34.8, 13937.0], [34.9, 13937.0], [35.0, 13937.0], [35.1, 13937.0], [35.2, 13937.0], [35.3, 13937.0], [35.4, 14009.0], [35.5, 14009.0], [35.6, 14009.0], [35.7, 14009.0], [35.8, 14009.0], [35.9, 14009.0], [36.0, 14066.0], [36.1, 14066.0], [36.2, 14066.0], [36.3, 14066.0], [36.4, 14066.0], [36.5, 14066.0], [36.6, 14066.0], [36.7, 14102.0], [36.8, 14102.0], [36.9, 14102.0], [37.0, 14102.0], [37.1, 14102.0], [37.2, 14102.0], [37.3, 14102.0], [37.4, 14138.0], [37.5, 14138.0], [37.6, 14138.0], [37.7, 14138.0], [37.8, 14138.0], [37.9, 14138.0], [38.0, 14231.0], [38.1, 14231.0], [38.2, 14231.0], [38.3, 14231.0], [38.4, 14231.0], [38.5, 14231.0], [38.6, 14231.0], [38.7, 14255.0], [38.8, 14255.0], [38.9, 14255.0], [39.0, 14255.0], [39.1, 14255.0], [39.2, 14255.0], [39.3, 14255.0], [39.4, 14349.0], [39.5, 14349.0], [39.6, 14349.0], [39.7, 14349.0], [39.8, 14349.0], [39.9, 14349.0], [40.0, 14369.0], [40.1, 14369.0], [40.2, 14369.0], [40.3, 14369.0], [40.4, 14369.0], [40.5, 14369.0], [40.6, 14369.0], [40.7, 14551.0], [40.8, 14551.0], [40.9, 14551.0], [41.0, 14551.0], [41.1, 14551.0], [41.2, 14551.0], [41.3, 14551.0], [41.4, 14576.0], [41.5, 14576.0], [41.6, 14576.0], [41.7, 14576.0], [41.8, 14576.0], [41.9, 14576.0], [42.0, 14578.0], [42.1, 14578.0], [42.2, 14578.0], [42.3, 14578.0], [42.4, 14578.0], [42.5, 14578.0], [42.6, 14578.0], [42.7, 14650.0], [42.8, 14650.0], [42.9, 14650.0], [43.0, 14650.0], [43.1, 14650.0], [43.2, 14650.0], [43.3, 14650.0], [43.4, 14677.0], [43.5, 14677.0], [43.6, 14677.0], [43.7, 14677.0], [43.8, 14677.0], [43.9, 14677.0], [44.0, 14859.0], [44.1, 14859.0], [44.2, 14859.0], [44.3, 14859.0], [44.4, 14859.0], [44.5, 14859.0], [44.6, 14859.0], [44.7, 14949.0], [44.8, 14949.0], [44.9, 14949.0], [45.0, 14949.0], [45.1, 14949.0], [45.2, 14949.0], [45.3, 14949.0], [45.4, 15006.0], [45.5, 15006.0], [45.6, 15006.0], [45.7, 15006.0], [45.8, 15006.0], [45.9, 15006.0], [46.0, 15012.0], [46.1, 15012.0], [46.2, 15012.0], [46.3, 15012.0], [46.4, 15012.0], [46.5, 15012.0], [46.6, 15012.0], [46.7, 15118.0], [46.8, 15118.0], [46.9, 15118.0], [47.0, 15118.0], [47.1, 15118.0], [47.2, 15118.0], [47.3, 15118.0], [47.4, 15197.0], [47.5, 15197.0], [47.6, 15197.0], [47.7, 15197.0], [47.8, 15197.0], [47.9, 15197.0], [48.0, 15430.0], [48.1, 15430.0], [48.2, 15430.0], [48.3, 15430.0], [48.4, 15430.0], [48.5, 15430.0], [48.6, 15430.0], [48.7, 15442.0], [48.8, 15442.0], [48.9, 15442.0], [49.0, 15442.0], [49.1, 15442.0], [49.2, 15442.0], [49.3, 15442.0], [49.4, 15459.0], [49.5, 15459.0], [49.6, 15459.0], [49.7, 15459.0], [49.8, 15459.0], [49.9, 15459.0], [50.0, 15572.0], [50.1, 15572.0], [50.2, 15572.0], [50.3, 15572.0], [50.4, 15572.0], [50.5, 15572.0], [50.6, 15572.0], [50.7, 15575.0], [50.8, 15575.0], [50.9, 15575.0], [51.0, 15575.0], [51.1, 15575.0], [51.2, 15575.0], [51.3, 15575.0], [51.4, 15697.0], [51.5, 15697.0], [51.6, 15697.0], [51.7, 15697.0], [51.8, 15697.0], [51.9, 15697.0], [52.0, 15789.0], [52.1, 15789.0], [52.2, 15789.0], [52.3, 15789.0], [52.4, 15789.0], [52.5, 15789.0], [52.6, 15789.0], [52.7, 15852.0], [52.8, 15852.0], [52.9, 15852.0], [53.0, 15852.0], [53.1, 15852.0], [53.2, 15852.0], [53.3, 15852.0], [53.4, 15997.0], [53.5, 15997.0], [53.6, 15997.0], [53.7, 15997.0], [53.8, 15997.0], [53.9, 15997.0], [54.0, 16050.0], [54.1, 16050.0], [54.2, 16050.0], [54.3, 16050.0], [54.4, 16050.0], [54.5, 16050.0], [54.6, 16050.0], [54.7, 16100.0], [54.8, 16100.0], [54.9, 16100.0], [55.0, 16100.0], [55.1, 16100.0], [55.2, 16100.0], [55.3, 16100.0], [55.4, 16220.0], [55.5, 16220.0], [55.6, 16220.0], [55.7, 16220.0], [55.8, 16220.0], [55.9, 16220.0], [56.0, 16222.0], [56.1, 16222.0], [56.2, 16222.0], [56.3, 16222.0], [56.4, 16222.0], [56.5, 16222.0], [56.6, 16222.0], [56.7, 16225.0], [56.8, 16225.0], [56.9, 16225.0], [57.0, 16225.0], [57.1, 16225.0], [57.2, 16225.0], [57.3, 16225.0], [57.4, 16231.0], [57.5, 16231.0], [57.6, 16231.0], [57.7, 16231.0], [57.8, 16231.0], [57.9, 16231.0], [58.0, 16231.0], [58.1, 16231.0], [58.2, 16231.0], [58.3, 16231.0], [58.4, 16231.0], [58.5, 16231.0], [58.6, 16231.0], [58.7, 16232.0], [58.8, 16232.0], [58.9, 16232.0], [59.0, 16232.0], [59.1, 16232.0], [59.2, 16232.0], [59.3, 16232.0], [59.4, 16232.0], [59.5, 16232.0], [59.6, 16232.0], [59.7, 16232.0], [59.8, 16232.0], [59.9, 16232.0], [60.0, 16309.0], [60.1, 16309.0], [60.2, 16309.0], [60.3, 16309.0], [60.4, 16309.0], [60.5, 16309.0], [60.6, 16309.0], [60.7, 16457.0], [60.8, 16457.0], [60.9, 16457.0], [61.0, 16457.0], [61.1, 16457.0], [61.2, 16457.0], [61.3, 16457.0], [61.4, 16487.0], [61.5, 16487.0], [61.6, 16487.0], [61.7, 16487.0], [61.8, 16487.0], [61.9, 16487.0], [62.0, 16508.0], [62.1, 16508.0], [62.2, 16508.0], [62.3, 16508.0], [62.4, 16508.0], [62.5, 16508.0], [62.6, 16508.0], [62.7, 16548.0], [62.8, 16548.0], [62.9, 16548.0], [63.0, 16548.0], [63.1, 16548.0], [63.2, 16548.0], [63.3, 16548.0], [63.4, 16592.0], [63.5, 16592.0], [63.6, 16592.0], [63.7, 16592.0], [63.8, 16592.0], [63.9, 16592.0], [64.0, 16702.0], [64.1, 16702.0], [64.2, 16702.0], [64.3, 16702.0], [64.4, 16702.0], [64.5, 16702.0], [64.6, 16702.0], [64.7, 16716.0], [64.8, 16716.0], [64.9, 16716.0], [65.0, 16716.0], [65.1, 16716.0], [65.2, 16716.0], [65.3, 16716.0], [65.4, 16874.0], [65.5, 16874.0], [65.6, 16874.0], [65.7, 16874.0], [65.8, 16874.0], [65.9, 16874.0], [66.0, 16931.0], [66.1, 16931.0], [66.2, 16931.0], [66.3, 16931.0], [66.4, 16931.0], [66.5, 16931.0], [66.6, 16931.0], [66.7, 17044.0], [66.8, 17044.0], [66.9, 17044.0], [67.0, 17044.0], [67.1, 17044.0], [67.2, 17044.0], [67.3, 17044.0], [67.4, 17046.0], [67.5, 17046.0], [67.6, 17046.0], [67.7, 17046.0], [67.8, 17046.0], [67.9, 17046.0], [68.0, 17070.0], [68.1, 17070.0], [68.2, 17070.0], [68.3, 17070.0], [68.4, 17070.0], [68.5, 17070.0], [68.6, 17070.0], [68.7, 17230.0], [68.8, 17230.0], [68.9, 17230.0], [69.0, 17230.0], [69.1, 17230.0], [69.2, 17230.0], [69.3, 17230.0], [69.4, 17349.0], [69.5, 17349.0], [69.6, 17349.0], [69.7, 17349.0], [69.8, 17349.0], [69.9, 17349.0], [70.0, 17497.0], [70.1, 17497.0], [70.2, 17497.0], [70.3, 17497.0], [70.4, 17497.0], [70.5, 17497.0], [70.6, 17497.0], [70.7, 17547.0], [70.8, 17547.0], [70.9, 17547.0], [71.0, 17547.0], [71.1, 17547.0], [71.2, 17547.0], [71.3, 17547.0], [71.4, 17571.0], [71.5, 17571.0], [71.6, 17571.0], [71.7, 17571.0], [71.8, 17571.0], [71.9, 17571.0], [72.0, 17606.0], [72.1, 17606.0], [72.2, 17606.0], [72.3, 17606.0], [72.4, 17606.0], [72.5, 17606.0], [72.6, 17606.0], [72.7, 17614.0], [72.8, 17614.0], [72.9, 17614.0], [73.0, 17614.0], [73.1, 17614.0], [73.2, 17614.0], [73.3, 17614.0], [73.4, 17626.0], [73.5, 17626.0], [73.6, 17626.0], [73.7, 17626.0], [73.8, 17626.0], [73.9, 17626.0], [74.0, 17699.0], [74.1, 17699.0], [74.2, 17699.0], [74.3, 17699.0], [74.4, 17699.0], [74.5, 17699.0], [74.6, 17699.0], [74.7, 17727.0], [74.8, 17727.0], [74.9, 17727.0], [75.0, 17727.0], [75.1, 17727.0], [75.2, 17727.0], [75.3, 17727.0], [75.4, 17890.0], [75.5, 17890.0], [75.6, 17890.0], [75.7, 17890.0], [75.8, 17890.0], [75.9, 17890.0], [76.0, 17903.0], [76.1, 17903.0], [76.2, 17903.0], [76.3, 17903.0], [76.4, 17903.0], [76.5, 17903.0], [76.6, 17903.0], [76.7, 17968.0], [76.8, 17968.0], [76.9, 17968.0], [77.0, 17968.0], [77.1, 17968.0], [77.2, 17968.0], [77.3, 17968.0], [77.4, 18374.0], [77.5, 18374.0], [77.6, 18374.0], [77.7, 18374.0], [77.8, 18374.0], [77.9, 18374.0], [78.0, 18374.0], [78.1, 18391.0], [78.2, 18391.0], [78.3, 18391.0], [78.4, 18391.0], [78.5, 18391.0], [78.6, 18391.0], [78.7, 18395.0], [78.8, 18395.0], [78.9, 18395.0], [79.0, 18395.0], [79.1, 18395.0], [79.2, 18395.0], [79.3, 18395.0], [79.4, 18438.0], [79.5, 18438.0], [79.6, 18438.0], [79.7, 18438.0], [79.8, 18438.0], [79.9, 18438.0], [80.0, 18438.0], [80.1, 18500.0], [80.2, 18500.0], [80.3, 18500.0], [80.4, 18500.0], [80.5, 18500.0], [80.6, 18500.0], [80.7, 18506.0], [80.8, 18506.0], [80.9, 18506.0], [81.0, 18506.0], [81.1, 18506.0], [81.2, 18506.0], [81.3, 18506.0], [81.4, 18532.0], [81.5, 18532.0], [81.6, 18532.0], [81.7, 18532.0], [81.8, 18532.0], [81.9, 18532.0], [82.0, 18532.0], [82.1, 18536.0], [82.2, 18536.0], [82.3, 18536.0], [82.4, 18536.0], [82.5, 18536.0], [82.6, 18536.0], [82.7, 18614.0], [82.8, 18614.0], [82.9, 18614.0], [83.0, 18614.0], [83.1, 18614.0], [83.2, 18614.0], [83.3, 18614.0], [83.4, 18697.0], [83.5, 18697.0], [83.6, 18697.0], [83.7, 18697.0], [83.8, 18697.0], [83.9, 18697.0], [84.0, 18697.0], [84.1, 18704.0], [84.2, 18704.0], [84.3, 18704.0], [84.4, 18704.0], [84.5, 18704.0], [84.6, 18704.0], [84.7, 18900.0], [84.8, 18900.0], [84.9, 18900.0], [85.0, 18900.0], [85.1, 18900.0], [85.2, 18900.0], [85.3, 18900.0], [85.4, 18902.0], [85.5, 18902.0], [85.6, 18902.0], [85.7, 18902.0], [85.8, 18902.0], [85.9, 18902.0], [86.0, 18902.0], [86.1, 19014.0], [86.2, 19014.0], [86.3, 19014.0], [86.4, 19014.0], [86.5, 19014.0], [86.6, 19014.0], [86.7, 19067.0], [86.8, 19067.0], [86.9, 19067.0], [87.0, 19067.0], [87.1, 19067.0], [87.2, 19067.0], [87.3, 19067.0], [87.4, 19187.0], [87.5, 19187.0], [87.6, 19187.0], [87.7, 19187.0], [87.8, 19187.0], [87.9, 19187.0], [88.0, 19187.0], [88.1, 19219.0], [88.2, 19219.0], [88.3, 19219.0], [88.4, 19219.0], [88.5, 19219.0], [88.6, 19219.0], [88.7, 19331.0], [88.8, 19331.0], [88.9, 19331.0], [89.0, 19331.0], [89.1, 19331.0], [89.2, 19331.0], [89.3, 19331.0], [89.4, 19361.0], [89.5, 19361.0], [89.6, 19361.0], [89.7, 19361.0], [89.8, 19361.0], [89.9, 19361.0], [90.0, 19361.0], [90.1, 19371.0], [90.2, 19371.0], [90.3, 19371.0], [90.4, 19371.0], [90.5, 19371.0], [90.6, 19371.0], [90.7, 19398.0], [90.8, 19398.0], [90.9, 19398.0], [91.0, 19398.0], [91.1, 19398.0], [91.2, 19398.0], [91.3, 19398.0], [91.4, 19470.0], [91.5, 19470.0], [91.6, 19470.0], [91.7, 19470.0], [91.8, 19470.0], [91.9, 19470.0], [92.0, 19470.0], [92.1, 19606.0], [92.2, 19606.0], [92.3, 19606.0], [92.4, 19606.0], [92.5, 19606.0], [92.6, 19606.0], [92.7, 19675.0], [92.8, 19675.0], [92.9, 19675.0], [93.0, 19675.0], [93.1, 19675.0], [93.2, 19675.0], [93.3, 19675.0], [93.4, 19693.0], [93.5, 19693.0], [93.6, 19693.0], [93.7, 19693.0], [93.8, 19693.0], [93.9, 19693.0], [94.0, 19693.0], [94.1, 19870.0], [94.2, 19870.0], [94.3, 19870.0], [94.4, 19870.0], [94.5, 19870.0], [94.6, 19870.0], [94.7, 19930.0], [94.8, 19930.0], [94.9, 19930.0], [95.0, 19930.0], [95.1, 19930.0], [95.2, 19930.0], [95.3, 19930.0], [95.4, 20230.0], [95.5, 20230.0], [95.6, 20230.0], [95.7, 20230.0], [95.8, 20230.0], [95.9, 20230.0], [96.0, 20230.0], [96.1, 20286.0], [96.2, 20286.0], [96.3, 20286.0], [96.4, 20286.0], [96.5, 20286.0], [96.6, 20286.0], [96.7, 20464.0], [96.8, 20464.0], [96.9, 20464.0], [97.0, 20464.0], [97.1, 20464.0], [97.2, 20464.0], [97.3, 20464.0], [97.4, 20936.0], [97.5, 20936.0], [97.6, 20936.0], [97.7, 20936.0], [97.8, 20936.0], [97.9, 20936.0], [98.0, 20936.0], [98.1, 21465.0], [98.2, 21465.0], [98.3, 21465.0], [98.4, 21465.0], [98.5, 21465.0], [98.6, 21465.0], [98.7, 22020.0], [98.8, 22020.0], [98.9, 22020.0], [99.0, 22020.0], [99.1, 22020.0], [99.2, 22020.0], [99.3, 22020.0], [99.4, 22061.0], [99.5, 22061.0], [99.6, 22061.0], [99.7, 22061.0], [99.8, 22061.0], [99.9, 22061.0], [100.0, 22061.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5600.0, "maxY": 7.0, "series": [{"data": [[5600.0, 2.0], [5700.0, 2.0], [5800.0, 1.0], [6000.0, 3.0], [6100.0, 3.0], [5900.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [7400.0, 1.0], [7900.0, 1.0], [7700.0, 2.0], [8700.0, 1.0], [8900.0, 1.0], [9000.0, 1.0], [9100.0, 1.0], [9500.0, 1.0], [9300.0, 1.0], [9400.0, 2.0], [9900.0, 2.0], [10000.0, 1.0], [9800.0, 1.0], [10400.0, 1.0], [10300.0, 2.0], [10700.0, 1.0], [11000.0, 1.0], [12100.0, 1.0], [12000.0, 1.0], [12600.0, 1.0], [12900.0, 1.0], [13000.0, 1.0], [13600.0, 4.0], [13700.0, 4.0], [13800.0, 1.0], [14000.0, 2.0], [14300.0, 2.0], [13900.0, 1.0], [14100.0, 2.0], [14200.0, 2.0], [14800.0, 1.0], [14600.0, 2.0], [14500.0, 3.0], [15000.0, 2.0], [15100.0, 2.0], [14900.0, 1.0], [15400.0, 3.0], [15700.0, 1.0], [15600.0, 1.0], [15800.0, 1.0], [15500.0, 2.0], [16200.0, 7.0], [16300.0, 1.0], [16000.0, 1.0], [15900.0, 1.0], [16100.0, 1.0], [17200.0, 1.0], [16900.0, 1.0], [16700.0, 2.0], [17000.0, 3.0], [16400.0, 2.0], [16500.0, 3.0], [16800.0, 1.0], [17400.0, 1.0], [17300.0, 1.0], [17600.0, 4.0], [17900.0, 2.0], [17500.0, 2.0], [18300.0, 3.0], [18400.0, 1.0], [17800.0, 1.0], [17700.0, 1.0], [19200.0, 1.0], [18500.0, 4.0], [19300.0, 4.0], [19400.0, 1.0], [18600.0, 2.0], [19000.0, 2.0], [19100.0, 1.0], [18700.0, 1.0], [18900.0, 2.0], [20400.0, 1.0], [19600.0, 3.0], [19800.0, 1.0], [19900.0, 1.0], [20200.0, 2.0], [20900.0, 1.0], [21400.0, 1.0], [22000.0, 2.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 150.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 150.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 150.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 13.730769230769232, "minX": 1.71819924E12, "maxY": 19.999999999999996, "series": [{"data": [[1.7182005E12, 16.882352941176475], [1.7182002E12, 19.999999999999996], [1.71819924E12, 17.428571428571427], [1.71820026E12, 13.730769230769232]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9655.111111111111, "minX": 1.0, "maxY": 18968.0, "series": [{"data": [[2.0, 14576.0], [3.0, 14374.42857142857], [4.0, 15572.0], [5.0, 15873.2], [6.0, 13619.25], [7.0, 10154.5], [8.0, 11687.0], [9.0, 11535.0], [10.0, 11017.0], [11.0, 9655.111111111111], [12.0, 13594.571428571428], [13.0, 14273.375], [14.0, 10366.666666666666], [15.0, 15717.0], [16.0, 15280.333333333332], [1.0, 13895.0], [17.0, 14551.75], [18.0, 13557.375], [19.0, 18968.0], [20.0, 13384.1], [21.0, 18395.0], [22.0, 17306.75], [23.0, 17442.5], [24.0, 17108.5], [25.0, 15012.727272727272], [26.0, 16445.222222222223], [27.0, 15772.5], [28.0, 18701.0], [29.0, 16251.285714285716], [30.0, 16433.25]], "isOverall": false, "label": "Actors by name", "isController": false}, {"data": [[17.01333333333333, 14485.466666666665]], "isOverall": false, "label": "Actors by name-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 63.88333333333333, "minX": 1.71819924E12, "maxY": 1009.4, "series": [{"data": [[1.7182005E12, 1009.4], [1.7182002E12, 444.8], [1.71819924E12, 963.1833333333333], [1.71820026E12, 537.1333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7182005E12, 135.18333333333334], [1.7182002E12, 63.88333333333333], [1.71819924E12, 129.95], [1.71820026E12, 68.71666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11064.458333333332, "minX": 1.71819924E12, "maxY": 17296.576923076926, "series": [{"data": [[1.7182005E12, 14150.196078431376], [1.7182002E12, 11064.458333333332], [1.71819924E12, 15018.408163265307], [1.71820026E12, 17296.576923076926]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11064.416666666666, "minX": 1.71819924E12, "maxY": 17296.538461538457, "series": [{"data": [[1.7182005E12, 14150.117647058823], [1.7182002E12, 11064.416666666666], [1.71819924E12, 15018.387755102043], [1.71820026E12, 17296.538461538457]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 39.27450980392158, "minX": 1.71819924E12, "maxY": 95.16666666666667, "series": [{"data": [[1.7182005E12, 39.27450980392158], [1.7182002E12, 95.16666666666667], [1.71819924E12, 59.51020408163262], [1.71820026E12, 51.0]], "isOverall": false, "label": "Actors by name", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5608.0, "minX": 1.71819924E12, "maxY": 22061.0, "series": [{"data": [[1.7182005E12, 20286.0], [1.7182002E12, 17230.0], [1.71819924E12, 22061.0], [1.71820026E12, 19870.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7182005E12, 5608.0], [1.7182002E12, 5659.0], [1.71819924E12, 6047.0], [1.71820026E12, 13895.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7182005E12, 19390.6], [1.7182002E12, 16796.0], [1.71819924E12, 20464.0], [1.71820026E12, 19242.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7182005E12, 20286.0], [1.7182002E12, 17230.0], [1.71819924E12, 22061.0], [1.71820026E12, 19870.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7182005E12, 15118.0], [1.7182002E12, 10545.0], [1.71819924E12, 16225.0], [1.71820026E12, 17620.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7182005E12, 20050.0], [1.7182002E12, 17183.5], [1.71819924E12, 21742.5], [1.71820026E12, 19695.35]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10448.0, "minX": 1.0, "maxY": 18140.5, "series": [{"data": [[1.0, 10448.0], [2.0, 11288.5], [4.0, 18140.5], [5.0, 17586.5], [6.0, 16733.0], [12.0, 16270.5], [3.0, 15274.0], [7.0, 13740.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 10448.0, "minX": 1.0, "maxY": 18140.5, "series": [{"data": [[1.0, 10448.0], [2.0, 11288.5], [4.0, 18140.5], [5.0, 17586.5], [6.0, 16733.0], [12.0, 16270.5], [3.0, 15273.5], [7.0, 13740.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.71819924E12, "maxY": 0.85, "series": [{"data": [[1.7182005E12, 0.85], [1.7182002E12, 0.8333333333333334], [1.71819924E12, 0.8166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71819924E12, "maxY": 0.85, "series": [{"data": [[1.7182005E12, 0.85], [1.7182002E12, 0.4], [1.71819924E12, 0.8166666666666667], [1.71820026E12, 0.43333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7182005E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71819924E12, "maxY": 0.85, "series": [{"data": [[1.7182005E12, 0.85], [1.7182002E12, 0.4], [1.71819924E12, 0.8166666666666667], [1.71820026E12, 0.43333333333333335]], "isOverall": false, "label": "Actors by name-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71819924E12, "maxY": 0.85, "series": [{"data": [[1.7182005E12, 0.85], [1.7182002E12, 0.4], [1.71819924E12, 0.8166666666666667], [1.71820026E12, 0.43333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7182005E12, "title": "Total Transactions Per Second"}},
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

