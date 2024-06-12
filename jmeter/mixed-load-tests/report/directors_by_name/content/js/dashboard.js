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

    var data = {"OkPercent": 98.80952380952381, "KoPercent": 1.1904761904761905};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.33217592592592593, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.04265091863517061, 500, 1500, "Directors by name"], "isController": false}, {"data": [0.4252336448598131, 500, 1500, "TitleBasics by primary_title"], "isController": false}, {"data": [0.0, 500, 1500, "Actors by name"], "isController": false}, {"data": [0.8576115485564304, 500, 1500, "TitleBasics by params"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3024, 36, 1.1904761904761905, 7630.552579365076, 0, 47863, 2492.0, 24460.0, 34634.25, 42248.5, 0.6452096067101799, 2.367467960617037, 0.10396902255118524], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Directors by name", 762, 0, 0.0, 6190.303149606308, 1053, 16718, 5991.0, 11327.500000000002, 12543.400000000001, 15242.150000000001, 0.16279668467329034, 0.1826397004391451, 0.025509796175666594], "isController": false}, {"data": ["TitleBasics by primary_title", 749, 0, 0.0, 1565.8638184245647, 101, 11453, 1118.0, 3335.0, 4171.5, 7372.5, 0.16031334945741743, 0.8155441259685151, 0.026370803546585046], "isController": false}, {"data": ["Actors by name", 751, 0, 0.0, 22415.062583222378, 5308, 47863, 20658.0, 39113.00000000001, 41823.2, 45178.68, 0.16026537043067637, 0.15890492870431744, 0.024631747764287414], "isController": false}, {"data": ["TitleBasics by params", 762, 36, 4.724409448818897, 460.93963254593194, 0, 13375, 176.0, 869.2000000000007, 1465.8500000000004, 5898.8700000000035, 0.1634301632028194, 1.2195401621181106, 0.027721558258885386], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 1, 2.7777777777777777, 0.03306878306878307], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 6, 16.666666666666668, 0.1984126984126984], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 12, 33.333333333333336, 0.3968253968253968], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 1, 2.7777777777777777, 0.03306878306878307], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 11, 30.555555555555557, 0.3637566137566138], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 5, 13.88888888888889, 0.16534391534391535], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3024, 36, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 12, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 11, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 6, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 5, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 1], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["TitleBasics by params", 762, 36, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 12, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 11, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 6, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 5, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 1], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
