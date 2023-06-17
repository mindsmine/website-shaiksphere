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

const paramShow = mindsmine.URL.getHashParameter(window.location.href, "show");

class Tenure {
    #company = null;
    #startDate = null;
    #endDate = null;

    constructor(company, startDate, endDate = null) {
        this.#company = company;
        this.#startDate = startDate;
        this.#endDate = endDate;
    }

    get company() {
        return this.#company;
    }

    get startDate() {
        return this.#startDate;
    }

    get endDate() {
        return (this.#endDate == null) ? "" : this.#endDate;
    }

    get duration() {
        const d1 = dayjs(this.#startDate, DATE_FORMAT).startOf("day");
        const d2 = (this.#endDate == null) ? dayjs().startOf("day") : dayjs(this.#endDate, DATE_FORMAT).startOf("day");

        return mindsmine.Duration.preciseDiff(d1.toDate(), d2.toDate()).displayString;
    }
}

/*
class OnDOMLoadHelper {
    static run() {
        const _symbols = new Set();

        _STOCKS.forEach(stock => {
            _symbols.add(stock.symbol);
        });

        this.runTiingo(_symbols);
    }


*/
class OnDOMLoadHelper {
    static run() {
        const _tableRows = [];

        _TENURES.forEach((tenure) => {
            const _tableCells = [];

            _tableCells.push(`<td>${tenure.company}</td>`);
            _tableCells.push(`<td>${tenure.startDate}</td>`);
            _tableCells.push(`<td>${tenure.endDate}</td>`);

            if (mindsmine.Boolean.getNullSafe(paramShow)) {
                _tableCells.push(`<td>${tenure.duration}</td>`);
            }

            _tableRows.push(`<tr>${_tableCells.join("")}</tr>`);
        });

        document.getElementById("content").innerHTML = _tableRows.join("");
    }
}
