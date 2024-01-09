function genPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+-/:;?@[]_{|}";

    let password = "";
    

    for(let i = 0; i < 8; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    };

    //console.log(password)
    //captures the result of the "genPassword() function and returns it within an HTML element manipulating the DOM.
    const inputEl = document.querySelector("#password");
    inputEl.value = password;
}



genPassword();