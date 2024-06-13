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
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 98.34024896265561, "KoPercent": 1.6597510373443984};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.31431535269709543, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.03439153439153439, 500, 1500, "Directors by name"], "isController": false}, {"data": [0.36212361331220283, 500, 1500, "TitleBasics by primary_title"], "isController": false}, {"data": [0.0, 500, 1500, "Actors by name"], "isController": false}, {"data": [0.8520066889632107, 500, 1500, "TitleBasics by params"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2410, 40, 1.6597510373443984, 8586.485892116192, 0, 50224, 2978.0, 30254.100000000006, 35579.85, 43111.48999999997, 3.9182850593026752, 14.32492303913001, 0.628649258614943], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Directors by name", 567, 0, 0.0, 6875.220458553794, 1142, 20556, 6690.0, 12746.2, 13640.2, 16454.64000000003, 0.9606473441574175, 1.0798612758311632, 0.1503625670716521], "isController": false}, {"data": ["TitleBasics by primary_title", 631, 0, 0.0, 2020.5372424722648, 136, 14920, 1390.0, 4301.600000000002, 6034.799999999997, 10915.159999999963, 1.0429734826884585, 5.16995529759455, 0.1720329026315659], "isController": false}, {"data": ["Actors by name", 614, 0, 0.0, 24870.112377850182, 5506, 50224, 25524.5, 38931.5, 42101.25, 46347.65, 1.001815995444511, 0.9983918196788316, 0.1540719756455921], "isController": false}, {"data": ["TitleBasics by params", 598, 40, 6.688963210702341, 418.0150501672239, 0, 14262, 196.0, 623.8000000000002, 1185.2999999999997, 6295.759999999998, 1.02586271966843, 7.6059074864390555, 0.17052535203988856], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 1, 2.5, 0.04149377593360996], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 6, 15.0, 0.24896265560165975], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 14, 35.0, 0.5809128630705395], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 2, 5.0, 0.08298755186721991], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 15, 37.5, 0.6224066390041494], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 2, 5.0, 0.08298755186721991], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2410, 40, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 15, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 14, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 6, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 2, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 2], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["TitleBasics by params", 598, 40, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 15, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 14, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 6, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 2, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 2], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
