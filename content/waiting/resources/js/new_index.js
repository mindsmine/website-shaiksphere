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

const DATE_FORMAT = "DDMMMYY";
// const FINAL_PRIORITY_DATE = dayjs("3/7/2013", DATE_FORMAT);

const DATA_SET = {
    /*
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
    */
    2020: {
        January: {
            EB2: "18May09",
            EB3: "01Jan09"
        },
        February: {
            EB2: "19May09",
            EB3: "08Jan09"
        },
        March: {
            EB2: "22May09",
            EB3: "15Jan09"
        },
        April: {
            EB2: "25May09",
            EB3: "22Jan09"
        },
        May: {
            EB2: "02Jun09",
            EB3: "01Mar09"
        },
        June: {
            EB2: "12Jun09",
            EB3: "01Apr09"
        },
        July: {
            EB2: "08Jul09",
            EB3: "01Jun09"
        },
        August: {
            EB2: "08Jul09",
            EB3: "01Oct09"
        },
        September: {
            EB2: "08Jul09",
            EB3: "01Oct09"
        },
        October: {
            EB2: "01Sep09",
            EB3: "15Jan10"
        },
        November: {
            EB2: "22Sep09",
            EB3: "01Mar10"
        },
        December: {
            EB2: "01Oct09",
            EB3: "15Mar10"
        }
    },
    2021: {
        January: {
            EB2: "08Oct09",
            EB3: "22Mar10"
        },
        February: {
            EB2: "12Oct09",
            EB3: "01Apr10"
        },
        March: {
            EB2: "15Jan10",
            EB3: "01Jul10"
        },
        April: {
            EB2: "01May10",
            EB3: "01Sep10"
        },
        May: {
            EB2: "01Aug10",
            EB3: "01Feb11"
        },
        June: {
            EB2: "01Dec10",
            EB3: "01Nov11"
        },
        July: {
            EB2: "01Jun11",
            EB3: "01Jan13"
        },
        August: {
            EB2: "01Jun11",
            EB3: "01Jul13"
        },
        September: {
            EB2: "01Sep11",
            EB3: "01Jan14"
        },
        October: {
            EB2: "01Sep11",
            EB3: "01Jan14"
        },
        November: {
            EB2: "01Dec11",
            EB3: "15Jan12"
        },
        December: {
            EB2: "01May12",
            EB3: "15Jan12"
        }
    },
    2022: {
        January: {
            EB2: "08Jul12",
            EB3: "15Jan12"
        },
        February: {
            EB2: "01Jan13",
            EB3: "15Jan12"
        },
        March: {
            EB2: "01May13",
            EB3: "15Jan12"
        },
        April: {
            EB2: "08Jul13",
            EB3: "15Jan12"
        },
        May: {
            EB2: "01Sep13",
            EB3: "15Jan12"
        },
        June: {
            EB2: "01Sep14",
            EB3: "15Jan12"
        },
        July: {
            EB2: "01Dec14",
            EB3: "15Jan12"
        },
        August: {
            EB2: "01Dec14",
            EB3: "15Feb12"
        },
        September: {
            EB2: "01Dec14",
            EB3: "15Feb12"
        },
        October: {
            EB2: "01Apr12",
            EB3: "01Apr12"
        },
        November: {
            EB2: "01Apr12",
            EB3: "01Apr12"
        },
        December: {
            EB2: "08Oct11",
            EB3: "15Jun12"
        }
    },
    2023: {
        January: {
            EB2: "08Oct11",
            EB3: "15Jun12"
        },
        February: {
            EB2: "08Oct11",
            EB3: "15Jun12"
        },
        March: {
            EB2: "08Oct11",
            EB3: "15Jun12"
        },
        April: {
            EB2: "01Jan11",
            EB3: "15Jun12"
        },
        May: {
            EB2: "01Jan11",
            EB3: "15Jun12"
        },
        June: {
            EB2: "01Jan11",
            EB3: "15Jun12"
        },
        July: {
            EB2: "01Jan11",
            EB3: "01Jan09"
        },
        August: {
            EB2: "01Jan11",
            EB3: "01Jan09"
        },
        September: {
            EB2: "01Jan11",
            EB3: "01Jan09"
        },
        October: {
            EB2: "01Jan12",
            EB3: "01May12"
        },
        November: {
            EB2: "01Jan12",
            EB3: "01May12"
        },
        December: {
            EB2: "01Jan12",
            EB3: "01May12"
        }
    },
    2024: {
        January: {
            EB2: "01Mar12",
            EB3: "01Jun12"
        },
        February: {
            EB2: "01Mar12",
            EB3: "01Jul12"
        },
        March: {
            EB2: "01Mar12",
            EB3: "01Jul12"
        },
        April: {
            EB2: "15Apr12",
            EB3: "15Aug12"
        },
        May: {
            EB2: "15Apr12",
            EB3: "15Aug12"
        },
        June: {
            EB2: "15Apr12",
            EB3: "22Aug12"
        },
        July: {
            EB2: "15Jun12",
            EB3: "22Sep12"
        },
        August: {
            EB2: "15Jul12",
            EB3: "22Oct12"
        },
        September: {
            EB2: "15Jul12",
            EB3: "22Oct12"
        },
        October: {
            EB2: "15Jul12",
            EB3: "01Nov12"
        },
        November: {
            EB2: "15Jul12",
            EB3: "01Nov12"
        },
        December: {
            EB2: "01Aug12",
            EB3: "08Nov12"
        }
    },
    2025: {
        January: {
            EB2: "01Oct12",
            EB3: "01Dec12"
        },
        February: {
            EB2: "15Oct12",
            EB3: "15Dec12"
        },
        March: {
            EB2: "01Dec12",
            EB3: "01Feb13"
        },
        April: {
            EB2: "01Jan13",
            EB3: "01Apr13"
        },
        May: {
            EB2: "01Jan13",
            EB3: "15Apr13"
        }
    }
};

const EB2_LATEST_PRIORITY_DATE = dayjs(DATA_SET["2025"].May.EB2, DATE_FORMAT);
const EB3_LATEST_PRIORITY_DATE = dayjs(DATA_SET["2025"].May.EB3, DATE_FORMAT);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const drawChart = () => {
    let PRIORITY_DATE_STRING = "07Mar13";

    const paramFor = mindsmine.URL.getQueryParameter(window.location.href, "for");

    if (mindsmine.String.areEqual(paramFor, "Sarfraz")) {
        PRIORITY_DATE_STRING = "12Dec19";
    }

    const FINAL_PRIORITY_DATE = dayjs(PRIORITY_DATE_STRING, DATE_FORMAT);

    const CHART_TITLE = (() => {
        if (EB2_LATEST_PRIORITY_DATE.isAfter(FINAL_PRIORITY_DATE)) {
            return "Current date is past the priority date. File ASAP. Do NOT wait anymore!";
        }

        const durationObject = mindsmine.Duration.preciseDiff(
            FINAL_PRIORITY_DATE.toDate(),
            dayjs().startOf("day").toDate()
            // EB2_LATEST_PRIORITY_DATE.toDate()
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

            const item_date_eb2 = DATA_SET[item_year][item_month]["EB2"];
            const item_date_eb3 = DATA_SET[item_year][item_month]["EB3"];

            const itemDateEB2Obj = dayjs(item_date_eb2, DATE_FORMAT);
            const itemDateEB3Obj = dayjs(item_date_eb3, DATE_FORMAT);

            const numOfDaysEB2 = mindsmine.Duration.preciseDiff(FINAL_PRIORITY_DATE.toDate(), itemDateEB2Obj.toDate()).displayString;
            const numOfDaysEB3 = mindsmine.Duration.preciseDiff(FINAL_PRIORITY_DATE.toDate(), itemDateEB3Obj.toDate()).displayString;

            const isEB2After = FINAL_PRIORITY_DATE.isBefore(itemDateEB2Obj);
            const isEB3After = FINAL_PRIORITY_DATE.isBefore(itemDateEB3Obj);

            // Add name of month
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(item_month));
            _tr.appendChild(_td);

            // Add EB2 priority date for the month
            _td = document.createElement("td");
            if (isEB2After) {
                _td.innerHTML = `<span style="color: red;">${item_date_eb2}</span>`;
            } else {
                _td.appendChild(document.createTextNode(item_date_eb2));
            }
            _tr.appendChild(_td);

            // Add EB2 number of days from final priority date
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(numOfDaysEB2));
            _tr.appendChild(_td);

            // Add EB3 priority date for the month
            _td = document.createElement("td");
            if (isEB3After) {
                _td.innerHTML = `<span style="color: blue;">${item_date_eb3}</span>`;
            } else {
                _td.appendChild(document.createTextNode(item_date_eb3));
            }
            _tr.appendChild(_td);

            // Add EB3 number of days from final priority date
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(numOfDaysEB3));
            _tr.appendChild(_td);

            // Add row to the table
            TABLE_BODY.appendChild(_tr);

            __rowCount++;

            DATA_SET_ARRAY.push([
                `${item_year} - ${item_month}`,
                FINAL_PRIORITY_DATE.diff(itemDateEB2Obj, "days"),
                FINAL_PRIORITY_DATE.diff(itemDateEB3Obj, "days")
            ]);
        });
    });

    let config = {
        type: "line",
        data: {
            labels: DATA_SET_ARRAY.map(__dataArr => {
                return __dataArr[0];
            }),
            datasets: [
                {
                    label: "EB2",
                    backgroundColor: "rgba(255, 0, 0, 1)",
                    borderColor: "rgba(255, 0, 0, 1)",
                    data: DATA_SET_ARRAY.map(__dataArr => {
                        return __dataArr[1];
                    }),
                    tension: 0.4,
                    fill: false
                },
                {
                    label: "EB3",
                    backgroundColor: "rgba(0, 0, 255, 1)",
                    borderColor: "rgba(0, 0, 255, 1)",
                    data: DATA_SET_ARRAY.map(__dataArr => {
                        return __dataArr[2];
                    }),
                    tension: 0.4,
                    fill: false
                }
            ]
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
