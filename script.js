let passwordLength = 16;

const inputEl = document.querySelector("#password");

function genPassword() {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+-/:;?@[]_{|}";

    let password = "";

    for(let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    };
    inputEl.value = password;
};  

function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordLengthEl = document.querySelector("#password_length");

passwordLengthEl.addEventListener('input', function() {
    passwordLength = passwordLengthEl.value;
    genPassword();
});

const copyButtonEl = document.querySelector("#copy");
copyButtonEl.addEventListener('click', copy)

genPassword();