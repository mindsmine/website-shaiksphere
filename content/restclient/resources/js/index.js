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
        if (document.getElementById("authorization").checked === true) {
            this.changeAuthSection("visible", false);
        } else {
            this.changeAuthSection("hidden", true);
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
        let withCredentials = false;

        if (authorizationInputField.checked === true) {
            const auth_basic_string = `${auth_basic_username.value}:${auth_basic_password.value}`;
            const auth_basic_token = btoa(auth_basic_string);

            headers = {
                Authorization: `Basic ${auth_basic_token}`
            };

            withCredentials = true;
        }

        mindsmine.Ajax.request(
            httpMethodInputField.value,
            urlEndpointInputField.value,
            {
                headers: headers,
                withCredentials: withCredentials
            }
        ).then(response => {
            formOneTextAreaOutputField.value = JSON.stringify(JSON.parse(response.responseText), null, 2);
        }).catch(response => {
            formOneTextAreaOutputField.value = `Error: ${response.responseText} (status code = ${response.status})`;
        });
    }

    static changeAuthSection(_visibility, _disabled) {
        document.getElementById("auth_row_1").style.visibility = _visibility;
        document.getElementById("auth_row_2").style.visibility = _visibility;
        document.getElementById("auth_row_3").style.visibility = _visibility;

        document.getElementById("auth_basic_username").disabled = _disabled;
        document.getElementById("auth_basic_password").disabled = _disabled;
    }
}
