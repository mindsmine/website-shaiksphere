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

class RESTClient {
    static onAuthorizationClick() {
        const authorizationInputField = document.getElementById("authorization");

        const auth_row_1 = document.getElementById("auth_row_1");
        const auth_row_2 = document.getElementById("auth_row_2");
        const auth_row_3 = document.getElementById("auth_row_3");

        const auth_basic_username = document.getElementById("auth_basic_username");
        const auth_basic_password = document.getElementById("auth_basic_password");

        console.log("I AM HERE");
        console.log(authorizationInputField.checked);

        if (authorizationInputField.checked === true) {
            auth_row_1.style.visibility = "visible";
            auth_row_2.style.visibility = "visible";
            auth_row_3.style.visibility = "visible";
            auth_basic_username.disabled = false;
            auth_basic_password.disabled = false;
        } else {
            auth_row_1.style.visibility = "hidden";
            auth_row_2.style.visibility = "hidden";
            auth_row_3.style.visibility = "hidden";
            auth_basic_username.disabled = true;
            auth_basic_password.disabled = true;
        }
    }

    static onFormSubmit() {
        const authorizationInputField = document.getElementById("authorization");
        const auth_basic_username = document.getElementById("auth_basic_username");
        const auth_basic_password = document.getElementById("auth_basic_password");
        const httpMethodInputField = document.getElementById("http_method");
        const urlEndpointInputField = document.getElementById("url_endpoint");
        const formOneTextAreaOutputField = document.getElementById("formOneTextAreaOutput");

        let headers = null;

        if (authorizationInputField.checked === true) {
            const auth_basic_string = `${auth_basic_username.value}:${auth_basic_password.value}`;
            const auth_basic_token = btoa(auth_basic_string);

            headers = {
                Authorization: `Basic ${auth_basic_token}`
            };
        }

        mindsmine.Ajax.request(
            httpMethodInputField.value,
            urlEndpointInputField.value,
            {
                headers: headers
            }
        ).then(response => {
            formOneTextAreaOutputField.value = JSON.stringify(JSON.parse(response.responseText), null, 2);
        }).catch(response => {
            formOneTextAreaOutputField.value = `Error: ${response.responseText} (status code = ${response.status})`;
        });
    }
}
