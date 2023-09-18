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

const INPUT_DATE_FORMAT = "YYYY-M-D";
const OUTPUT_DATE_FORMAT = "ddd, MMM D, YYYY";

class ProcessEstimates {
    #processName = null;
    #minimumMonths = null;
    #maximumMonths = null;

    constructor(name, min, max) {
        this.#processName = name;
        this.#minimumMonths = min;
        this.#maximumMonths = max;
    }

    get processName() {
        return this.#processName;
    }

    get minimumMonths() {
        return this.#minimumMonths;
    }

    get maximumMonths() {
        return this.#maximumMonths;
    }
}
 
class Estimate {

    /**
     * Validates the user-entry and displays the output (error or success) accordingly.
     */
    static onFormSubmit(formInputID) {
        const formInput = document.getElementById(formInputID);

        const initialDate = dayjs(formInput.value, INPUT_DATE_FORMAT).startOf("day");

        const TABLE = document.getElementById("contentTable");

        TABLE.style.visibility = "visible";
        const TABLE_BODY = TABLE.tBodies.namedItem("contentTableBody");
        TABLE_BODY.innerHTML = "";

        const tableRows = [];
        tableRows.push(new ProcessEstimates("AP", 4, 12));
        tableRows.push(new ProcessEstimates("EAD", 4, 12));
        tableRows.push(new ProcessEstimates("AOS", 14, 22));
        
        tableRows.forEach(tableRow => {
            let _tr = document.createElement("tr");

            // Add Process Name
            let _td = document.createElement("td");
            _td.appendChild(document.createTextNode(tableRow.processName));
            _tr.appendChild(_td);

            // Add Minimum Estimated Date
            let _expectedMinDate = initialDate.add(tableRow.minimumMonths + 1, "month");
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(_expectedMinDate.day(1).format(OUTPUT_DATE_FORMAT)));
            _tr.appendChild(_td);

            // Add Maximum Estimated Date
            let _expectedMaxDate = initialDate.add(tableRow.maximumMonths + 1, "month");
            _td = document.createElement("td");
            _td.appendChild(document.createTextNode(_expectedMaxDate.day(1).format(OUTPUT_DATE_FORMAT)));
            _tr.appendChild(_td);

            TABLE_BODY.appendChild(_tr);
        });
    }
}
