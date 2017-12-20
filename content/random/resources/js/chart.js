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
        January: "11/22/2008"
    }
};

const _getChartTitle = function (latestPriorityDate) {
    const LATEST_PRIORITY_DATE_MOMENT = moment(latestPriorityDate, DATE_FORMAT);

    // Shift the timezone of Latest Priority Date to that of Final Priority Date
    LATEST_PRIORITY_DATE_MOMENT.add(FINAL_PRIORITY_DATE_MOMENT.utcOffset() - LATEST_PRIORITY_DATE_MOMENT.utcOffset(), "minutes");

    if (LATEST_PRIORITY_DATE_MOMENT.isSame(FINAL_PRIORITY_DATE_MOMENT)) {
        return "AMAZING! Magically, the priority dates are the same!!!";
    }

    if (LATEST_PRIORITY_DATE_MOMENT.isAfter(FINAL_PRIORITY_DATE_MOMENT)) {
        return "NO MORE WAITING!!!";
    }

    let years = FINAL_PRIORITY_DATE_MOMENT.year() - LATEST_PRIORITY_DATE_MOMENT.year();
    let months = FINAL_PRIORITY_DATE_MOMENT.month() - LATEST_PRIORITY_DATE_MOMENT.month();
    let days = FINAL_PRIORITY_DATE_MOMENT.date() - LATEST_PRIORITY_DATE_MOMENT.date();
    let hours = FINAL_PRIORITY_DATE_MOMENT.hour() - LATEST_PRIORITY_DATE_MOMENT.hour();
    let minutes = FINAL_PRIORITY_DATE_MOMENT.minute() - LATEST_PRIORITY_DATE_MOMENT.minute();
    let seconds = FINAL_PRIORITY_DATE_MOMENT.second() - LATEST_PRIORITY_DATE_MOMENT.second();

    if (seconds < 0) {
        seconds = 60 + seconds;
        minutes--;
    }

    if (minutes < 0) {
        minutes = 60 + minutes;
        hours--;
    }

    if (hours < 0) {
        hours = 24 + hours;
        days--;
    }

    if (days < 0) {
        let _daysInLastFullMonth = moment(
            FINAL_PRIORITY_DATE_MOMENT.year() + "-" + (FINAL_PRIORITY_DATE_MOMENT.month() + 1),
            "YYYY-MM"
        ).subtract(
            1,
            "months"
        ).daysInMonth();

        days = _daysInLastFullMonth + days;

        let __diff = LATEST_PRIORITY_DATE_MOMENT.date() - _daysInLastFullMonth;

        if (__diff > 0) {
            days += __diff;
        }

        months--;
    }

    if (months < 0) {
        months = 12 + months;
        years--;
    }

    return `Current Wait Time = ${years} years ${months} months ${days} days`;
};

const drawChart = function () {
    const DATA_SET_ARRAY = [];
    const TABLE_BODY = document.getElementById("contentTable").tBodies.namedItem("contentTableBody");

    Object.keys(DATA_SET).map(function (item_year) {
        let __rowCount = 0;
        let __item_months = Object.keys(DATA_SET[item_year]);

        let _tr = document.createElement("tr");

        let _td = document.createElement("td");
        _td.setAttribute("rowspan", __item_months.length);
        _td.appendChild(document.createTextNode(item_year));

        _tr.appendChild(_td);

        __item_months.map(function (item_month) {
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
            labels: DATA_SET_ARRAY.map(function (__dataArr) {
                return __dataArr[0];
            }),
            datasets: [{
                label: "Number of Days",
                backgroundColor: "rgb(255, 0, 0)",
                borderColor: "rgb(255, 0, 0)",
                data: DATA_SET_ARRAY.map(function (__dataArr) {
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
    let myChart = new Chart(ctx, config);
};
