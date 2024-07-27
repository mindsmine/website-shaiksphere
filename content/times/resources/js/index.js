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

const LOCALE = "en-US";

const IST = "Asia/Kolkata";
const ET = "America/New_York";
const CT = "America/Chicago";

const ZoneFormatter = (timeZone) => {
    return {
        Date: new Intl.DateTimeFormat(LOCALE, {
            dateStyle: "medium",
            timeZone: timeZone
        }),
        Time: new Intl.DateTimeFormat(LOCALE, {
            timeStyle: "short",
            timeZone: timeZone
        })
    };
};

const addMinutes = (date, minutes) => {
    const newDate = new Date(date.getTime());

    newDate.setMinutes(newDate.getMinutes() + minutes);

    return newDate;
};

const generateRowContent = (date) => {
    let cells = [];

    cells.push(`<td>${IndiaFormatter.Date.format(date)}</td>`);
    cells.push(`<td style="text-align: right;">${IndiaFormatter.Time.format(date)}</td>`);
    cells.push(`<td>${KCFormatter.Date.format(date)}</td>`);
    cells.push(`<td style="text-align: right;">${KCFormatter.Time.format(date)}</td>`);
    cells.push(`<td>${NYCFormatter.Date.format(date)}</td>`);
    cells.push(`<td style="text-align: right;">${NYCFormatter.Time.format(date)}</td>`);

    return cells.join("");
};

const IndiaFormatter = ZoneFormatter(IST);

const NYCFormatter = ZoneFormatter(ET);

const KCFormatter = ZoneFormatter(CT);

const onDOMLoad = () => {
    const curDate = new Date();

    let tbodyContent = [];
    tbodyContent.push("<tr colspan='6'>&nbsp;</tr>");
    tbodyContent.push("<tr colspan='6'>&nbsp;</tr>");

    tbodyContent.push(`<tr style="background-color: AntiqueWhite;">${generateRowContent(curDate)}</tr>`);

    tbodyContent.push("<tr colspan='6'>&nbsp;</tr>");
    tbodyContent.push("<tr colspan='6'>&nbsp;</tr>");

    const utcDate = new Date(Date.UTC(curDate.getFullYear(), curDate.getMonth(), curDate.getDate(), 13, 0, 0, 0));
    
    for (let i = 0; i < 8; i++) {
        tbodyContent.push(`<tr>${generateRowContent(addMinutes(utcDate, i * 30))}</tr>`);
    }

    tbodyContent.push("<tr colspan='6'>&nbsp;</tr>");
    tbodyContent.push("<tr colspan='6'>&nbsp;</tr>");

    for (let i = 27; i < 32; i++) {
        tbodyContent.push(`<tr>${generateRowContent(addMinutes(utcDate, i * 30))}</tr>`);
    }

    window.document.getElementById("contentTableBody").innerHTML = tbodyContent.join("");
}
