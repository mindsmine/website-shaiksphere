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
    2013: {
        November: {
            EB2: "15Jun08",
            EB3: "22Sep03"
        },
        December: {
            EB2: "15Nov04",
            EB3: "01Sep03"
        }
    },
    2014: {
        January: {
            EB2: "15Nov04",
            EB3: "01Sep03"
        },
        February: {
            EB2: "15Nov04",
            EB3: "01Sep03"
        },
        March: {
            EB2: "15Nov04",
            EB3: "15Sep03"
        },
        April: {
            EB2: "15Nov04",
            EB3: "15Sep03"
        },
        May: {
            EB2: "15Nov04",
            EB3: "01Oct03"
        },
        June: {
            EB2: "15Nov04",
            EB3: "15Oct03"
        },
        July: {
            EB2: "01Sep08",
            EB3: "01Nov03"
        },
        August: {
            EB2: "22Jan09",
            EB3: "08Nov03"
        },
        September: {
            EB2: "01May09",
            EB3: "08Nov03"
        },
        October: {
            EB2: "01May09",
            EB3: "15Nov03"
        },
        November: {
            EB2: "15Feb05",
            EB3: "22Nov03"
        },
        December: {
            EB2: "15Feb05",
            EB3: "01Dec03"
        }
    },
    2015: {
        January: {
            EB2: "15Feb05",
            EB3: "15Dec03"
        },
        February: {
            EB2: "01Sep05",
            EB3: "22Dec03"
        },
        March: {
            EB2: "01Jan07",
            EB3: "01Jan04"
        },
        April: {
            EB2: "01Sep07",
            EB3: "08Jan04"
        },
        May: {
            EB2: "15Apr08",
            EB3: "15Jan04"
        },
        June: {
            EB2: "01Oct08",
            EB3: "22Jan04"
        },
        July: {
            EB2: "01Oct08",
            EB3: "01Feb04"
        },
        August: {
            EB2: "01Oct08",
            EB3: "01Jun04"
        },
        September: {
            EB2: "01Jan06",
            EB3: "22Dec04"
        },
        October: {
            EB2: "01May05",
            EB3: "08Mar04"
        },
        November: {
            EB2: "01Aug06",
            EB3: "01Apr04"
        },
        December: {
            EB2: "01Jun07",
            EB3: "22Apr04"
        }
    },
    2016: {
        January: {
            EB2: "01Feb08",
            EB3: "15May04"
        },
        February: {
            EB2: "01Aug08",
            EB3: "15Jun04"
        },
        March: {
            EB2: "15Oct08",
            EB3: "15Jul04"
        },
        April: {
            EB2: "08Nov08",
            EB3: "08Aug04"
        },
        May: {
            EB2: "22Nov08",
            EB3: "01Sep04"
        },
        June: {
            EB2: "01Oct04",
            EB3: "22Sep04"
        },
        July: {
            EB2: "01Nov04",
            EB3: "22Oct04"
        },
        August: {
            EB2: "15Nov04",
            EB3: "08Nov04"
        },
        September: {
            EB2: "22Feb05",
            EB3: "15Feb05"
        },
        October: {
            EB2: "15Jan07",
            EB3: "01Mar05"
        },
        November: {
            EB2: "01Nov07",
            EB3: "08Mar05"
        },
        December: {
            EB2: "01Feb08",
            EB3: "15Mar05"
        }
    },
    2017: {
        January: {
            EB2: "15Apr08",
            EB3: "15Mar05"
        },
        February: {
            EB2: "15Apr08",
            EB3: "22Mar05"
        },
        March: {
            EB2: "01Jun08",
            EB3: "22Mar05"
        },
        April: {
            EB2: "22Jun08",
            EB3: "24Mar05"
        },
        May: {
            EB2: "22Jun08",
            EB3: "25Mar05"
        },
        June: {
            EB2: "01Jul08",
            EB3: "15May05"
        },
        July: {
            EB2: "22Jul08",
            EB3: "15Feb06"
        },
        August: {
            EB2: "22Jul08",
            EB3: "15Jul06"
        },
        September: {
            EB2: "22Aug08",
            EB3: "15Oct06"
        },
        October: {
            EB2: "15Sep08",
            EB3: "15Oct06"
        },
        November: {
            EB2: "08Oct08",
            EB3: "15Oct06"
        },
        December: {
            EB2: "01Nov08",
            EB3: "15Oct06"
        }
    },
    2018: {
        January: {
            EB2: "22Nov08",
            EB3: "01Nov06"
        },
        February: {
            EB2: "08Dec08",
            EB3: "01Dec06"
        },
        March: {
            EB2: "15Dec08",
            EB3: "01Jan07"
        },
        April: {
            EB2: "22Dec08",
            EB3: "01Feb08"
        },
        May: {
            EB2: "22Dec08",
            EB3: "01May08"
        },
        June: {
            EB2: "26Dec08",
            EB3: "01May08"
        },
        July: {
            EB2: "15Mar09",
            EB3: "01Nov08"
        },
        August: {
            EB2: "15Mar09",
            EB3: "01Jan09"
        },
        September: {
            EB2: "01Jan07",
            EB3: "01Jan03"
        },
        October: {
            EB2: "26Mar09",
            EB3: "01Jan09"
        },
        November: {
            EB2: "26Mar09",
            EB3: "01Jan09"
        },
        December: {
            EB2: "01Apr09",
            EB3: "01Mar09"
        }
    },
    2019: {
        January: {
            EB2: "01Apr09",
            EB3: "01Mar09"
        },
        February: {
            EB2: "06Apr09",
            EB3: "22Apr09"
        },
        March: {
            EB2: "09Apr09",
            EB3: "22May09"
        },
        April: {
            EB2: "12Apr09",
            EB3: "22Jun09"
        },
        May: {
            EB2: "16Apr09",
            EB3: "01Jul09"
        },
        June: {
            EB2: "19Apr09",
            EB3: "01Jul09"
        },
        July: {
            EB2: "24Apr09",
            EB3: "01Jul09"
        },
        August: {
            EB2: "02May09",
            EB3: "01Jan06"
        },
        September: {
            EB2: "08May09",
            EB3: "01Jul05"
        },
        October: {
            EB2: "12May09",
            EB3: "01Jan09"
        },
        November: {
            EB2: "13May09",
            EB3: "01Jan09"
        },
        December: {
            EB2: "15May09",
            EB3: "01Jan09"
        }
    },
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
        },
        June: {
            EB2: "01Jan13",
            EB3: "15Apr13"
        },
        July: {
            EB2: "01Jan13",
            EB3: "22Apr13"
        },
        August: {
            EB2: "01Jan13",
            EB3: "22May13"
        },
        September: {
            EB2: "01Jan13",
            EB3: "22May13"
        }
    }
};

const EB2_LATEST_PRIORITY_DATE = dayjs(DATA_SET["2025"].September.EB2, DATE_FORMAT);
const EB3_LATEST_PRIORITY_DATE = dayjs(DATA_SET["2025"].September.EB3, DATE_FORMAT);

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
        const chartTitle = [];

        // EB2
        if (EB2_LATEST_PRIORITY_DATE.isAfter(FINAL_PRIORITY_DATE)) {
            chartTitle.push("For EB2, current date is past the priority date.");
        } else {
            const durationObject = mindsmine.Duration.preciseDiff(
                FINAL_PRIORITY_DATE.toDate(),
                dayjs().startOf("day").toDate()
            );

            chartTitle.push(`For EB2, still ${durationObject.displayString} for priority date to be current.`);
        }

        // EB3
        if (EB3_LATEST_PRIORITY_DATE.isAfter(FINAL_PRIORITY_DATE)) {
            chartTitle.push("For EB3, current date is past the priority date.");
        } else {
            const durationObject = mindsmine.Duration.preciseDiff(
                FINAL_PRIORITY_DATE.toDate(),
                dayjs().startOf("day").toDate()
            );

            chartTitle.push(`For EB3, still ${durationObject.displayString} for priority date to be current.`);
        }

        return chartTitle.join(" ");
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

            // Add name of month
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(item_month));
            _tr.appendChild(_td);

            // Add EB2 priority date for the month
            _td = document.createElement("td");
            if (itemDateEB2Obj.isAfter(FINAL_PRIORITY_DATE)) {
                _td.innerHTML = `<span style="background-color: yellow;">${item_date_eb2}</span>`;
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
            if (itemDateEB3Obj.isAfter(FINAL_PRIORITY_DATE)) {
                _td.innerHTML = `<span style="background-color: yellow;">${item_date_eb3}</span>`;
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
