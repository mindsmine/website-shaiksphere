/*
 Copyright 2008-present Shaiksphere, Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const DATE_FORMAT = "MM/DD/YYYY";
const FINAL_PRIORITY_DATE_MOMENT = moment("3/7/2013", DATE_FORMAT);

const DATA_SET = {
    2013: {
        November: "6/15/2008",
        December: "11/15/2004"
    },
    2014: {
        January: "11/15/2004",
        February: "11/15/2004",
        March: "11/15/2004",
        April: "11/15/2004",
        May: "11/15/2004",
        June: "11/15/2004",
        July: "9/1/2008",
        August: "1/22/2009",
        September: "5/1/2009",
        October: "5/1/2009",
        November: "2/15/2005",
        December: "2/15/2005"
    },
    2015: {
        January: "2/15/2005",
        February: "9/1/2005",
        March: "1/1/2007",
        April: "9/1/2007",
        May: "4/15/2008",
        June: "10/1/2008",
        July: "10/1/2008",
        August: "10/1/2008",
        September: "1/1/2006",
        October: "5/1/2005",
        November: "8/1/2006",
        December: "6/1/2007"
    },
    2016: {
        January: "2/1/2008",
        February: "8/1/2008",
        March: "10/15/2008",
        April: "11/8/2008",
        May: "11/22/2008",
        June: "10/1/2004",
        July: "11/1/2004",
        August: "11/15/2004",
        September: "2/22/2005",
        October: "1/15/2007",
        November: "11/1/2007",
        December: "2/1/2008"
    },
    2017: {
        January: "4/15/2008",
        February: "4/15/2008",
        March: "6/1/2008",
        April: "6/22/2008",
        May: "6/22/2008",
        June: "7/1/2008",
        July: "7/22/2008",
        August: "7/22/2008",
        September: "8/22/2008",
        October: "9/15/2008",
        November: "10/8/2008",
        December: "11/1/2008"
    },
    2018: {
        January: "11/22/2008",
        February: "12/8/2008",
        March: "12/15/2008",
        April: "12/22/2008",
        May: "12/22/2008",
        June: "12/26/2008",
        July: "03/15/2009",
        August: "03/15/2009",
        September: "01/01/2007",
        October: "03/26/2009",
        November: "03/26/2009",
        December: "04/01/2009"
    }
};

const _getChartTitle = function (latestPriorityDate) {
    const latestPriorityDateMoment = moment(latestPriorityDate, DATE_FORMAT);

    if (moment.preciseDiff(latestPriorityDateMoment, FINAL_PRIORITY_DATE_MOMENT, true).firstDateWasLater) {
        return "NO MORE WAITING!!!";
    }

    const difference = moment.preciseDiff(latestPriorityDateMoment, FINAL_PRIORITY_DATE_MOMENT);

    if (mindsmine.String.isEmpty(difference)) {
        return "AMAZING! Magically, the priority dates are the same!!!";
    }

    return `Crude Minimum Wait Time = ${difference}`;
};

const drawChart = function () {
    const DATA_SET_ARRAY = [];
    const TABLE_BODY = document.getElementById("contentTable").tBodies.namedItem("contentTableBody");

    Object.keys(DATA_SET).map(item_year => {
        let __rowCount = 0;
        let __item_months = Object.keys(DATA_SET[item_year]);

        let _tr = document.createElement("tr");

        let _td = document.createElement("td");
        _td.setAttribute("rowspan", __item_months.length);
        _td.appendChild(document.createTextNode(item_year));

        _tr.appendChild(_td);

        __item_months.map(item_month => {
            if (__rowCount > 0) {
                _tr = document.createElement("tr");
            }

            let item_date = DATA_SET[item_year][item_month];
            let numOfDays = FINAL_PRIORITY_DATE_MOMENT.diff(moment(item_date, DATE_FORMAT), "days");

            // Add name of month
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(item_month));
            _tr.appendChild(_td);

            // Add priority date for the month
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(item_date));
            _tr.appendChild(_td);

            // Add number of days from final priority date
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(numOfDays));
            _tr.appendChild(_td);

            // Add row to the table
            TABLE_BODY.appendChild(_tr);

            __rowCount++;

            DATA_SET_ARRAY.push([
                `${item_year} - ${item_month}`,
                item_date,
                numOfDays
            ]);
        });
    });

    let config = {
        type: "line",
        data: {
            labels: DATA_SET_ARRAY.map(__dataArr => {
                return __dataArr[0];
            }),
            datasets: [{
                label: "Number of Days",
                backgroundColor: "rgb(255, 0, 0)",
                borderColor: "rgb(255, 0, 0)",
                data: DATA_SET_ARRAY.map(__dataArr => {
                    return __dataArr[2];
                }),
                fill: false
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: _getChartTitle(DATA_SET_ARRAY[DATA_SET_ARRAY.length - 1][1])
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };

    let ctx = document.getElementById("waitingCanvas").getContext("2d");
    new Chart(ctx, config);
};
