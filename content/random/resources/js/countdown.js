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

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const ELEMENT_IDS = {
    mainContent: "mainContent",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds"
};

const Difference = function (year, month, day) {
    const _today = new Date();
    const _future = new Date(year, month - 1, day);
    const _difference = _future - _today;

    return {
        value: _difference,
        days: Math.floor(_difference / DAY),
        hours: Math.floor((_difference % DAY) / HOUR),
        minutes: Math.floor((_difference % HOUR) / MINUTE),
        seconds: Math.floor((_difference % MINUTE) / SECOND)
    }
};

const Countdown = function (year, month, day, finalMsg, options = ELEMENT_IDS) {
    const difference = new Difference(year, month, day);

    if (difference.value < 0) {
        document.getElementById(options.mainContent).innerHTML = finalMsg;

        return 0;
    }

    document.getElementById(options.days).innerHTML = String(difference.days);
    document.getElementById(options.hours).innerHTML = String(difference.hours);
    document.getElementById(options.minutes).innerHTML = String(difference.minutes);
    document.getElementById(options.seconds).innerHTML = String(difference.seconds);

    window.setTimeout(Countdown, SECOND, year, month, day, finalMsg, options);
};
