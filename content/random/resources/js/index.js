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

const FORMAT_DATE_TIME = "YYYY-MM-DD";

const OnLoad = function () {
    Countdown(2020, 7, 24, "Time for Summer 2020 Olympics!", "summer2020");
    Countdown(2020, 11, 3, "Time for new President!", "president2020");
    Countdown(2022, 2, 4, "Time for Winter 2022 Olympics!", "winter2022");
    Countdown(2024, 7, 26, "Time for Summer 2024 Olympics!", "summer2024");
    Countdown(2028, 7, 21, "Time for Summer 2024 Olympics!", "summer2028");

    TimeSince(2018, 2, 20, "since");
    TimeSince(2008, 6, 16, "industry");
    ShowSource("pageSource");
};

const ShowSource = function (divID = "") {
    document.getElementById(divID).innerHTML = mindsmine.String.htmlEncode(
        document.getElementsByTagName("html")[0].innerHTML
    );
};

const Countdown = function (year, month, day, finalMsg, elementID) {
    const m1 = moment();
    const m2 = moment(`${year}-${month}-${day}`, FORMAT_DATE_TIME).startOf("day");

    const difference = moment.preciseDiff(m1, m2, true);

    if (difference.firstDateWasLater) {
        document.getElementById(elementID).innerHTML = finalMsg;

        return 0;
    }

    document.getElementById(elementID).innerHTML = moment.preciseDiff(m1, m2);

    window.setTimeout(Countdown, 1000, year, month, day, finalMsg, elementID);
};

const TimeSince = function (year, month, day, elementID) {
    const m1 = moment(`${year}-${month}-${day}`, FORMAT_DATE_TIME).startOf("day");
    const m2 = moment().startOf("day");

    document.getElementById(elementID).innerHTML = moment.preciseDiff(m1, m2);
};
