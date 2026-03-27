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

const OnLoad = function () {
    const now = new Date();

    window.document.querySelectorAll(".countdown").forEach(element => {
        const _date = element.getAttribute("data-countdown-date") || now;

        const _finalMsg = element.getAttribute("data-countdown-finalMsg") || "Final Message Not Available!";

        Countdown(_date, _finalMsg, element);
    });

    window.document.querySelectorAll(".since").forEach(element => {
        const _startDate = element.getAttribute("data-countdown-start-date") || now;

        DisplayTimeSpan(_startDate, null, element);
    });

    window.document.querySelectorAll(".duration").forEach(element => {
        const _startDate = element.getAttribute("data-countdown-start-date") || now;
        const _endDate = element.getAttribute("data-countdown-end-date") || now;

        DisplayTimeSpan(_startDate, _endDate, element);
    });

    window.document.getElementById("pageSource").innerHTML = mindsmine.String.htmlEncode(
        window.document.getElementsByTagName("html")[0].innerHTML
    );
};
