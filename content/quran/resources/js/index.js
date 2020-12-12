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

class SurahHolder {
    constructor(name, index, count) {
        this.name = name;
        this.index = index;
        this.count = count;
    }
}

const SurahList = [];

SurahList.push(new SurahHolder("al-Fātiḥah",   1,  7));
SurahList.push(null);
SurahList.push(new SurahHolder("al-Baq̈arah",   2,  6));
SurahList.push(null);
SurahList.push(new SurahHolder("al-'Aṣr",    103,  4));
SurahList.push(new SurahHolder("al-Humazah", 104, 10));
SurahList.push(new SurahHolder("al-Fīl",     105,  6));
SurahList.push(new SurahHolder("Q̈urayš",     106,  5));
SurahList.push(new SurahHolder("al-Ma'ūn",   107,  8));
SurahList.push(new SurahHolder("al-Kawthar", 108,  4));
SurahList.push(new SurahHolder("al-Kāfirūn", 109,  7));
SurahList.push(new SurahHolder("an-Naṣr",    110,  4));
SurahList.push(new SurahHolder("al-Masad",   111,  6));
SurahList.push(new SurahHolder("al-'Ikhlāṣ", 112,  5));
SurahList.push(new SurahHolder("al-Falaq̈",   113,  6));
SurahList.push(new SurahHolder("an-Nās",     114,  7));

const onDOMLoad = () => {
    let tbodyContent = [];

    SurahList.forEach(surah => {
        if (surah == null) {
            tbodyContent.push(`<tr><td><hr /></td></tr>`);
        } else {
            tbodyContent.push(`<tr><td class="surahTitle">${surah.index} - ${surah.name}</td></tr>`);
    
            for (let i = 1; i <= surah.count; i++) {
                let imgName = `${Number(surah.index).toString().padStart(3, 0)}-${Number(i).toString().padStart(3, 0)}`;
    
                tbodyContent.push(`<tr><td><img src="https://www.alislam.org/quran/search2/verses/${imgName}.png" /></td></tr>`);
            }
    
            tbodyContent.push(`<tr><td>&nbsp;</td></tr>`);
        }
    });

    // document.getElementById("display").innerHTML = mindsmine.String.htmlEncode(bodyContent.join(""));

    let bodyContent = `<center><table><tbody>${tbodyContent.join("")}</tbody></table></center>`;

    window.document.getElementsByTagName("body")[0].innerHTML = bodyContent;
}
