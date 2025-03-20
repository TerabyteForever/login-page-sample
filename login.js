/*
    A sample login page frontend example.

    Copyright (c) 2025 - Terabyte Forever <terabyteforever1@gmail.com>
*/

const onRadioChange = ()=>{
    const textStyles = {
        "password" : "text",
        "text" : "password"
    };
    const passwordTextbox = document.querySelector("#password-input");
    passwordTextbox.type = textStyles[passwordTextbox.type];
};