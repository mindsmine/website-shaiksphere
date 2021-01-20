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

const DATE_FORMAT = "MM/DD/YYYY";

/**
 *
 * @param {Array} countdownElementIDs
 * @param {Array} timeSinceElementIDs
 * @param {Array} durationElementIDs
 * @constructor
 */
const OnLoad = function (countdownElementIDs, timeSinceElementIDs, durationElementIDs) {
    const now = new Date();

    countdownElementIDs.forEach(elementID => {
        const element = window.document.getElementById(elementID);

        const _date = element.getAttribute("data-countdown-date") || now;

        const _finalMsg = element.getAttribute("data-countdown-finalMsg") || "Final Message Not Available!";

        Countdown(_date, _finalMsg, elementID);
    });

    timeSinceElementIDs.forEach(elementID => {
        const element = window.document.getElementById(elementID);

        const _startDate = element.getAttribute("data-countdown-start-date") || now;

        DisplayTimeSpan(_startDate, null, element);
    });

    durationElementIDs.forEach(elementID => {
        const element = window.document.getElementById(elementID);

        const _startDate = element.getAttribute("data-countdown-start-date") || now;
        const _endDate = element.getAttribute("data-countdown-end-date") || now;

        DisplayTimeSpan(_startDate, _endDate, element);
    });

    ShowSource("pageSource");
};

const Countdown = function (date, finalMsg, elementID) {
    const d1 = dayjs();
    const d2 = dayjs(date, DATE_FORMAT).startOf("day");

    const durationObject = mindsmine.Duration.preciseDiff(d1.toDate(), d2.toDate());

    if (durationObject.firstDateIsAfter) {
        window.document.getElementById(elementID).innerHTML = finalMsg;

        return 0;
    }

    window.document.getElementById(elementID).innerHTML = durationObject.durationString;

    window.setTimeout(Countdown, 1000, date, finalMsg, elementID);
};

/**
 *
 * @param {String} startDate
 * @param {String} endDate
 * @param {Element} element
 * @constructor
 */
const DisplayTimeSpan = function (startDate, endDate = null, element) {
    const d1 = dayjs(startDate, DATE_FORMAT).startOf("day");
    const d2 = (endDate == null) ? dayjs().startOf("day") : dayjs(endDate, DATE_FORMAT).startOf("day");

    element.innerHTML = mindsmine.Duration.preciseDiff(d1.toDate(), d2.toDate()).durationString;
};
