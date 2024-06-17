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

    var data = {"OkPercent": 96.87226366852299, "KoPercent": 3.127736331477006};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9008441035340268, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9008441035340268, 500, 1500, "TitleBasics by params"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 28551, 893, 3.127736331477006, 344.55826415886986, 0, 7210, 194.0, 512.0, 2051.0, 5163.0, 47.4844911603772, 364.39636525864006, 8.187883822991335], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["TitleBasics by params", 28551, 893, 3.127736331477006, 344.55826415886986, 0, 7210, 194.0, 512.0, 2051.0, 5163.0, 47.4844911603772, 364.39636525864006, 8.187883822991335], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=126&amp;page=1", 2, 0.22396416573348266, 0.007005008581135512], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 60, 6.718924972004479, 0.21015025743406535], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=313&amp;page=1", 55, 6.159014557670773, 0.19263773598122658], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=936&amp;page=1", 37, 4.143337066069429, 0.12959265875100698], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 60, 6.718924972004479, 0.21015025743406535], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=155&amp;page=1", 55, 6.159014557670773, 0.19263773598122658], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 60, 6.718924972004479, 0.21015025743406535], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=312&amp;page=1", 43, 4.8152295632698765, 0.1506076844944135], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=1750&amp;page=1", 31, 3.471444568868981, 0.10857763300760044], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=1175&amp;page=1", 19, 2.127659574468085, 0.06654758152078737], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=348&amp;page=1", 11, 1.2318029115341544, 0.038527547196245314], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=226&amp;page=1", 5, 0.5599104143337066, 0.01751252145283878], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=594&amp;page=1", 15, 1.6797312430011198, 0.05253756435851634], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=873&amp;page=1", 1, 0.11198208286674133, 0.003502504290567756], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 60, 6.718924972004479, 0.21015025743406535], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=175&amp;page=1", 8, 0.8958566629339306, 0.02802003432454205], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 60, 6.718924972004479, 0.21015025743406535], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=127&amp;page=1", 54, 6.047032474804031, 0.18913523169065882], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=550&amp;page=1", 22, 2.463605823068309, 0.07705509439249063], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=120&amp;page=1", 33, 3.6954087346024638, 0.11558264158873595], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=117&amp;page=1", 16, 1.7917133258678613, 0.0560400686490841], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=730&amp;page=1", 18, 2.015677491601344, 0.06304507723021961], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=410&amp;page=1", 7, 0.7838745800671892, 0.02451753003397429], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=2880&amp;page=1", 47, 5.2631578947368425, 0.16461770165668452], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 60, 6.718924972004479, 0.21015025743406535], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=320&amp;page=1", 54, 6.047032474804031, 0.18913523169065882], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 28551, 893, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 60], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["TitleBasics by params", 28551, 893, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 60, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 60], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
