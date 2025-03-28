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

dayjs.extend(window.dayjs_plugin_customParseFormat);

const DATE_FORMAT = "M/D/YYYY";
// const FINAL_PRIORITY_DATE = dayjs("3/7/2013", DATE_FORMAT);

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
    },
    2019: {
        January: "04/01/2009",
        February: "04/06/2009",
        March: "04/09/2009",
        April: "04/12/2009",
        May: "04/16/2009",
        June: "04/19/2009",
        July: "04/24/2009",
        August: "05/02/2009",
        September: "05/08/2009",
        October: "05/12/2009",
        November: "05/13/2009",
        December: "05/15/2009"
    },
    2020: {
        January: "05/18/2009",
        February: "05/19/2009",
        March: "05/22/2009",
        April: "05/25/2009",
        May: "06/02/2009",
        June: "06/12/2009",
        July: "07/08/2009",
        August: "07/08/2009",
        September: "07/08/2009",
        October: "09/01/2009",
        November: "09/22/2009",
        December: "10/01/2009"
    },
    2021: {
        January: "10/08/2009",
        February: "10/12/2009",
        March: "01/15/2010",
        April: "05/01/2010",
        May: "08/01/2010",
        June: "12/01/2010",
        July: "06/01/2011",
        August: "06/01/2011",
        September: "09/01/2011",
        October: "09/01/2011",
        November: "12/01/2011",
        December: "05/01/2012"
    },
    2022: {
        January: "07/08/2012",
        February: "01/01/2013",
        March: "05/01/2013",
        April: "07/08/2013",
        May: "09/01/2013",
        June: "09/01/2014",
        July: "12/01/2014",
        August: "12/01/2014",
        September: "12/01/2014",
        October: "04/01/2012",
        November: "04/01/2012",
        December: "10/08/2011"
    },
    2023: {
        January: "10/08/2011",
        February: "10/08/2011",
        March: "10/08/2011",
        April: "01/01/2011",
        May: "01/01/2011",
        June: "01/01/2011",
        July: "01/01/2011",
        August: "01/01/2011",
        September: "01/01/2011",
        October: "01/01/2012",
        November: "01/01/2012",
        December: "01/01/2012"
    },
    2024: {
        January: "03/01/2012",
        February: "03/01/2012",
        March: "03/01/2012",
        April: "04/01/2012",
        May: "04/15/2012",
        June: "04/15/2012",
        July: "06/15/2012",
        August: "07/15/2012",
        September: "07/15/2012",
        October: "07/15/2012",
        November: "07/15/2012",
        December: "08/01/2012"
    },
    2025: {
        January: "10/01/2012",
        February: "10/15/2012",
        March: "12/01/2012",
        April: "01/01/2013"
    }
};

const LATEST_PRIORITY_DATE = dayjs(DATA_SET["2025"].April, DATE_FORMAT);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const drawChart = () => {
    let PRIORITY_DATE_STRING = "3/7/2013";

    const paramFor = mindsmine.URL.getQueryParameter(window.location.href, "for");

    if (mindsmine.String.areEqual(paramFor, "Sarfraz")) {
        PRIORITY_DATE_STRING = "12/12/2019";
    }

    const FINAL_PRIORITY_DATE = dayjs(PRIORITY_DATE_STRING, DATE_FORMAT);

    const CHART_TITLE = (() => {
        if (LATEST_PRIORITY_DATE.isAfter(FINAL_PRIORITY_DATE)) {
            return "Current date is past the priority date. File ASAP. Do NOT wait anymore!";
        }

        const durationObject = mindsmine.Duration.preciseDiff(
            FINAL_PRIORITY_DATE.toDate(),
            dayjs().startOf("day").toDate()
            // LATEST_PRIORITY_DATE.toDate()
        );

        return `Still ${durationObject.displayString} for priority date to be current`;
    })();

    const DATA_SET_ARRAY = [];
    const TABLE_BODY = document.getElementById("contentTable").tBodies.namedItem("contentTableBody");

    Object.keys(DATA_SET).map(item_year => {
        let __rowCount = 0;
        let __item_months = Object.keys(DATA_SET[item_year]);

        let _tr = document.createElement("tr");

        // Add year
        let _td = document.createElement("td");
        _td.setAttribute("rowspan", __item_months.length);
        _td.appendChild(document.createTextNode(item_year));

        _tr.appendChild(_td);

        __item_months.map(item_month => {
            if (__rowCount > 0) {
                _tr = document.createElement("tr");
            }

            const item_date = DATA_SET[item_year][item_month];
            const itemDateObj = dayjs(item_date, DATE_FORMAT);
            const numOfDays = mindsmine.Duration.preciseDiff(FINAL_PRIORITY_DATE.toDate(), itemDateObj.toDate()).displayString;

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
                FINAL_PRIORITY_DATE.diff(itemDateObj, "days")
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
                backgroundColor: "rgba(255, 0, 0, 1)",
                borderColor: "rgba(255, 0, 0, 1)",
                data: DATA_SET_ARRAY.map(__dataArr => {
                    return __dataArr[1];
                }),
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: CHART_TITLE
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: "Month"
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: "Days"
                    },
                    beginAtZero: true
                }
            }
        }
    };

    let ctx = document.getElementById("waitingCanvas").getContext("2d");
    new Chart(ctx, config);
};
