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

class HighlightExample {

    /**
     * Validates the user-entry and displays the output (error or success) accordingly.
     */
    static onFormSubmit(formInputID, formOutputID) {
        const formInput = document.getElementById(formInputID);
        const formOutput = document.getElementById(formOutputID);

        const outputText = this.highlightPalindromeText(formInput.value);

        formOutput.innerHTML = (outputText == null)
            ? "<strong style='color: red;'>Provide a paragraph which consists of words</strong>"
            : `<div style="border: 1px solid grey; padding: 3px; width: 400px;">${outputText}</div>`;

    }

    /**
     * Cleans the form input as well as cleans out the display message.
     */
    static onFormReset(formID, formOutputID) {
        document.getElementById(formID).reset();
        document.getElementById(formOutputID).innerText = "";
    }

    /**
     * Extracts the words from the paragraph and tests each word for palindrome status. Then, recreates the paragraph
     * with the highlighted words in it.
     *
     * @param {String} paragraph
     *
     * @returns {String|null}
     */
    static highlightPalindromeText(paragraph) {
        if (mindsmine.String.isEmpty(paragraph)) {
            return null;
        }

        let htmlText = [];

        paragraph.split(" ").forEach((string) => {
            let tempString = string.replace(/[^\w\s+]|_/, "");

            if (mindsmine.String.isPalindrome(tempString)) {
                htmlText.push(`<span style="background-color: yellow;">${string}</span>`);
            } else {
                htmlText.push(string);
            }
        });

        return htmlText.join(" ");
    }
}
