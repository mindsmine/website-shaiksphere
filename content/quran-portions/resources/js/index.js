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
    constructor(index, count, name, translation) {
        this.index = index;
        this.count = count;
        this.name = name;
        this.translation = translation;
    }
}

const SurahList = [];

SurahList.push(new SurahHolder(  1,  7, "al-Fātiḥah", "The Opening"));
SurahList.push(null);
SurahList.push(null);
SurahList.push(new SurahHolder(  2,  6, "al-Baq̈arah", "The Cow (<em>5 verses</em>)"));
SurahList.push(null);
SurahList.push(null);
SurahList.push(new SurahHolder(  2, 256, "Ayāh al-Kursī", "Verse of the Throne"));
SurahList.push(null);
SurahList.push(null);
SurahList.push(new SurahHolder(103,  4, "al-'Aṣr", "The Declining Day"));
SurahList.push(new SurahHolder(104, 10, "al-Humazah", "The Gossipmonger"));
SurahList.push(new SurahHolder(105,  6, "al-Fīl", "The Elephant"));
SurahList.push(new SurahHolder(106,  5, "Q̈urayš", "Quraysh"));
SurahList.push(new SurahHolder(107,  8, "al-Ma'ūn", "The Acts of Kindness"));
SurahList.push(new SurahHolder(108,  4, "al-Kawthar", "Abundance"));
SurahList.push(new SurahHolder(109,  7, "al-Kāfirūn", "The Disbelievers"));
SurahList.push(new SurahHolder(110,  4, "an-Naṣr", "The Help"));
SurahList.push(new SurahHolder(111,  6, "al-Masad", "The Palm Fiber"));
SurahList.push(new SurahHolder(112,  5, "al-'Ikhlāṣ", "Sincerity"));
SurahList.push(new SurahHolder(113,  6, "al-Falaq̈", "The Daybreak"));
SurahList.push(new SurahHolder(114,  7, "an-Nās", "Humankind"));

const onDOMLoad = () => {
    let tbodyContent = [];

    SurahList.forEach(surah => {
        if (surah == null) {
            tbodyContent.push(`<tr><td><hr /></td></tr>`);
        } else {
            tbodyContent.push(`<tr><td class="surahTitle">${surah.index} - ${surah.name} - ${surah.translation}</td></tr>`);

            if (surah.count === 256) {
                tbodyContent.push(`<tr><td><img src="https://www.alislam.org/quran/search2/verses/002-001.png" /></td></tr>`);
                tbodyContent.push(`<tr><td><img src="https://www.alislam.org/quran/search2/verses/002-256a.png" /></td></tr>`);
                tbodyContent.push(`<tr><td><img src="https://www.alislam.org/quran/search2/verses/002-256b.png" /></td></tr>`);
            } else {
                for (let i = 1; i <= surah.count; i++) {
                    let imgName = `${Number(surah.index).toString().padStart(3, 0)}-${Number(i).toString().padStart(3, 0)}`;
        
                    tbodyContent.push(`<tr><td><img src="https://www.alislam.org/quran/search2/verses/${imgName}.png" /></td></tr>`);
                }
            }
    
            tbodyContent.push(`<tr><td>&nbsp;</td></tr>`);
        }
    });

    let bodyContent = `<center><table><tbody>${tbodyContent.join("")}</tbody></table></center>`;

    window.document.getElementsByTagName("body")[0].innerHTML = bodyContent;
}
