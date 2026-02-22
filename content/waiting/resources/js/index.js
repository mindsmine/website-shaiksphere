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

class WaitingClass {
    static onFormSubmit() {
        const priorityDateLabel = document.getElementById("priority_date_label");
        const priorityDateInput = document.getElementById("priority_date_input");

        const submitButton = document.getElementById("submitButton");
        const refreshButton = document.getElementById("refreshButton");
        
        const formOutput = document.getElementById("formOneOutput");

        priorityDateLabel.style.display = "none";
        priorityDateInput.style.display = "none";

        submitButton.style.display = "none";
        refreshButton.style.display = "block";

        this.drawChartAndTable(priorityDateInput.value);

        formOutput.style.display = "block";
    }

    static drawChartAndTable(priority_date_value) {
        const FINAL_PRIORITY_DATE = dayjs(priority_date_value);

        const DATA_SET_ARRAY = [];
        const SUMMARY_TEXT_DIV = document.getElementById("summaryText");
        const TABLE_BODY = document.getElementById("contentTable").tBodies.namedItem("contentTableBody");

        let LATEST_BULLETIN_YEAR, LATEST_BULLETIN_MONTH, LATEST_EB2_DATE_OBJ, LATEST_EB3_DATE_OBJ, LATEST_EB2_DAYS, LATEST_EB3_DAYS, _span;

        // Create array, latest dates and draw table
        Object.keys(DATA_SET).map(item_year => {
            LATEST_BULLETIN_YEAR = item_year;

            let __rowCount = 0;
            let __item_months = Object.keys(DATA_SET[item_year]);

            let _tr = document.createElement("tr");

            // Add year
            let _td = document.createElement("td");
            _td.setAttribute("rowspan", __item_months.length);
            _td.appendChild(document.createTextNode(item_year));

            _tr.appendChild(_td);

            __item_months.map(item_month => {
                LATEST_BULLETIN_MONTH = item_month;

                if (__rowCount > 0) {
                    _tr = document.createElement("tr");
                }

                const item_date_eb2 = DATA_SET[item_year][item_month]["EB2"];
                const item_date_eb3 = DATA_SET[item_year][item_month]["EB3"];

                const itemDateEB2Obj = dayjs(item_date_eb2, DATE_FORMAT);
                const itemDateEB3Obj = dayjs(item_date_eb3, DATE_FORMAT);

                LATEST_EB2_DATE_OBJ = itemDateEB2Obj;
                LATEST_EB3_DATE_OBJ = itemDateEB3Obj;

                const numOfDaysEB2 = mindsmine.Duration.preciseDiff(FINAL_PRIORITY_DATE.toDate(), itemDateEB2Obj.toDate()).displayString;
                const numOfDaysEB3 = mindsmine.Duration.preciseDiff(FINAL_PRIORITY_DATE.toDate(), itemDateEB3Obj.toDate()).displayString;

                LATEST_EB2_DAYS = numOfDaysEB2;
                LATEST_EB3_DAYS = numOfDaysEB3;

                // Add name of month
                _td = document.createElement("td");
                _td.appendChild(document.createTextNode(item_month));
                _tr.appendChild(_td);

                // Add EB2 priority date for the month
                _td = document.createElement("td");
                if (itemDateEB2Obj.isAfter(FINAL_PRIORITY_DATE)) {
                    _span = document.createElement("span");
                    _span.style = "background-color: yellow;";
                    _span.appendChild(document.createTextNode(item_date_eb2));
                    _td.appendChild(_span);
                } else {
                    _td.appendChild(document.createTextNode(item_date_eb2));
                }
                _tr.appendChild(_td);

                // Add EB2 number of days from final priority date
                _td = document.createElement("td");
                _span = document.createElement("span");
                _span.style = "color: rgb(205, 127, 50);";
                _span.appendChild(document.createTextNode(numOfDaysEB2));
                _td.appendChild(_span);
                _tr.appendChild(_td);

                // Add EB3 priority date for the month
                _td = document.createElement("td");
                if (itemDateEB3Obj.isAfter(FINAL_PRIORITY_DATE)) {
                    _span = document.createElement("span");
                    _span.style = "background-color: yellow;";
                    _span.appendChild(document.createTextNode(item_date_eb3));
                    _td.appendChild(_span);
                } else {
                    _td.appendChild(document.createTextNode(item_date_eb3));
                }
                _tr.appendChild(_td);

                // Add EB3 number of days from final priority date
                _td = document.createElement("td");
                _span = document.createElement("span");
                _span.style = "color: rgb(100, 149, 237);";
                _span.appendChild(document.createTextNode(numOfDaysEB3));
                _td.appendChild(_span)
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

        // Create Summary Text
        const SUMMARY_TEXT = (() => {
            const summaryText = [];

            summaryText.push(`Results are based upon your priority date of '${priority_date_value}' and visa bulletin published for '${LATEST_BULLETIN_MONTH} ${LATEST_BULLETIN_YEAR}'.`);

            summaryText.push("<br /><br />");

            summaryText.push("Your <u>Final Action Date</u> for <strong>EB-2</strong> is");

            if (LATEST_EB2_DATE_OBJ.isAfter(FINAL_PRIORITY_DATE)) {
                summaryText.push("CURRENT.");
            } else {
                summaryText.push(`still <em>at least</em> ${LATEST_EB2_DAYS} away.`);
            }

            summaryText.push("<br /><br />");

            summaryText.push("Your <u>Final Action Date</u> for <strong>EB-3</strong> is");

            if (LATEST_EB3_DATE_OBJ.isAfter(FINAL_PRIORITY_DATE)) {
                summaryText.push("CURRENT.");
            } else {
                summaryText.push(`still <em>at least</em> ${LATEST_EB3_DAYS} away.`);
            }

            return summaryText.join(" ");
        })();

        SUMMARY_TEXT_DIV.innerHTML = SUMMARY_TEXT;

        let config = {
            type: "line",
            data: {
                labels: DATA_SET_ARRAY.map(__dataArr => {
                    return __dataArr[0];
                }),
                datasets: [
                    {
                        label: "EB-2",
                        backgroundColor: "rgba(205, 127, 50, 1)",
                        borderColor: "rgba(205, 127, 50, 1)",
                        data: DATA_SET_ARRAY.map(__dataArr => {
                            return __dataArr[1];
                        }),
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: "EB-3",
                        backgroundColor: "rgba(100, 149, 237, 1)",
                        borderColor: "rgba(100, 149, 237, 1)",
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
                        text: "Each data point corresponds to the number of days between your priority date and published current date for that category"
                    },
                    legend: {
                        display: true
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

        const context = document.getElementById("waitingCanvas").getContext("2d");

        new Chart(context, config);
    }
}
