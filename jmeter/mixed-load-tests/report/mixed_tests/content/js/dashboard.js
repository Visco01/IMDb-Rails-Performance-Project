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

    var data = {"OkPercent": 93.85428922879453, "KoPercent": 6.145710771205477};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.6259192159589261, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.6406846149712505, 500, 1500, "Directors by name"], "isController": false}, {"data": [0.6287491638795987, 500, 1500, "TitleBasics by primary_title"], "isController": false}, {"data": [0.6457507119853079, 500, 1500, "Actors by name"], "isController": false}, {"data": [0.5884954569748797, 500, 1500, "TitleBasics by params"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 149584, 9193, 6.145710771205477, 5537.990720932904, 0, 228724, 117.0, 16900.9, 17677.0, 19013.0, 119.45810054081336, 404.54392459563775, 18.283259482601654], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Directors by name", 37218, 1917, 5.150733516040625, 5157.952979740943, 0, 129767, 90.0, 16771.0, 17776.95, 18999.0, 30.592441896307257, 36.40612317109508, 4.541137838296036], "isController": false}, {"data": ["TitleBasics by primary_title", 37375, 1961, 5.246822742474916, 5778.126394648798, 0, 219634, 114.5, 16958.0, 18744.0, 32538.970000000005, 29.882644160271717, 116.20288436476093, 4.659704581079309], "isController": false}, {"data": ["Actors by name", 37571, 1860, 4.950626813233611, 5073.276170450627, 0, 129785, 88.0, 16758.9, 17745.800000000003, 18999.0, 30.87623045529928, 32.36261301559344, 4.507238825127833], "isController": false}, {"data": ["TitleBasics by params", 37420, 3455, 9.233030464991982, 6142.7198556921585, 0, 228724, 140.5, 17220.800000000003, 18978.0, 34369.92000000001, 29.883691586247433, 221.65731572206008, 4.837056653533654], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Malformed escape pair at index 73: http://192.168.196.143:3000/title_basics?title=John%20Wick:%20Don't%20F*#%%20with%20John%20Wick&amp;page=1", 22, 0.23931252039595344, 0.014707455342817413], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: 192.168.196.143:3000 failed to respond", 7551, 82.13858370499293, 5.047999786073377], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=629&amp;page=1", 226, 2.4583922549766126, 0.15108567761257888], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 236, 2.56717067333841, 0.1577708845865868], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 235, 2.5562928315022297, 0.157102363889186], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=313&amp;page=1", 108, 1.174806918307408, 0.07220023531928549], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1, 0.010877841836179703, 6.685206974007916E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=127&amp;page=1", 20, 0.21755683672359405, 0.01337041394801583], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=43200&amp;page=1", 206, 2.2408354182530186, 0.13771526366456305], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=155&amp;page=1", 90, 0.9790057652561732, 0.060166862766071236], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 230, 2.5019036223213313, 0.15375976040218206], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 239, 2.599804198846949, 0.15977644667878918], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=320&amp;page=1", 29, 0.31545741324921134, 0.019387100224622953], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 149584, 9193, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: 192.168.196.143:3000 failed to respond", 7551, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 239, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 236, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 235, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 230], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Directors by name", 37218, 1917, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: 192.168.196.143:3000 failed to respond", 1917, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["TitleBasics by primary_title", 37375, 1961, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: 192.168.196.143:3000 failed to respond", 1939, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Malformed escape pair at index 73: http://192.168.196.143:3000/title_basics?title=John%20Wick:%20Don't%20F*#%%20with%20John%20Wick&amp;page=1", 22, "", "", "", "", "", ""], "isController": false}, {"data": ["Actors by name", 37571, 1860, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: 192.168.196.143:3000 failed to respond", 1860, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["TitleBasics by params", 37420, 3455, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: 192.168.196.143:3000 failed to respond", 1835, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=453&amp;page=1", 239, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=true&amp;max_runtime=684&amp;page=1", 236, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=287&amp;page=1", 235, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 47: http://192.168.196.143:3000/title_basics?genre=\\\\N&amp;adult=false&amp;max_runtime=416&amp;page=1", 230], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
