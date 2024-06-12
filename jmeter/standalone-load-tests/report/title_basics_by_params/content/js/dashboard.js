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

    var data = {"OkPercent": 96.85337370242215, "KoPercent": 3.1466262975778547};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8794874567474048, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.8794874567474048, 500, 1500, "TitleBasics by params"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 27744, 873, 3.1466262975778547, 362.4092055940046, 0, 5848, 240.0, 647.0, 1712.9500000000007, 3915.980000000003, 46.20219120686239, 354.62779755441795, 7.965369693300982], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["TitleBasics by params", 27744, 873, 3.1466262975778547, 362.4092055940046, 0, 5848, 240.0, 647.0, 1712.9500000000007, 3915.980000000003, 46.20219120686239, 354.62779755441795, 7.965369693300982], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 60, 6.8728522336769755, 0.21626297577854672], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=313&amp;page=1", 56, 6.414662084765178, 0.20184544405997693], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=936&amp;page=1", 35, 4.009163802978236, 0.12615340253748558], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 60, 6.8728522336769755, 0.21626297577854672], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=155&amp;page=1", 55, 6.300114547537228, 0.1982410611303345], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 60, 6.8728522336769755, 0.21626297577854672], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=312&amp;page=1", 42, 4.810996563573883, 0.1513840830449827], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=1750&amp;page=1", 30, 3.4364261168384878, 0.10813148788927336], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=1175&amp;page=1", 18, 2.0618556701030926, 0.06487889273356401], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=348&amp;page=1", 9, 1.0309278350515463, 0.032439446366782004], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=226&amp;page=1", 4, 0.4581901489117984, 0.01441753171856978], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=594&amp;page=1", 13, 1.4891179839633448, 0.04685697808535179], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 60, 6.8728522336769755, 0.21626297577854672], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=175&amp;page=1", 6, 0.6872852233676976, 0.02162629757785467], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 60, 6.8728522336769755, 0.21626297577854672], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=127&amp;page=1", 53, 6.0710194730813285, 0.1910322952710496], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=550&amp;page=1", 21, 2.4054982817869415, 0.07569204152249134], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=120&amp;page=1", 33, 3.7800687285223367, 0.1189446366782007], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=117&amp;page=1", 15, 1.7182130584192439, 0.05406574394463668], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=730&amp;page=1", 18, 2.0618556701030926, 0.06487889273356401], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=410&amp;page=1", 5, 0.572737686139748, 0.018021914648212227], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=2880&amp;page=1", 47, 5.383734249713632, 0.16940599769319492], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 60, 6.8728522336769755, 0.21626297577854672], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=320&amp;page=1", 53, 6.0710194730813285, 0.1910322952710496], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 27744, 873, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 60], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["TitleBasics by params", 27744, 873, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 60], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
