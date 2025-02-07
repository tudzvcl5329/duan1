document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email-input");
    const submitBtn = document.getElementById("submit-btn");
    const errorMsg = document.getElementById("error-msg");
    const personalInfo = document.getElementById("personal-info");
    const emailForm = document.getElementById("email-form");

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    submitBtn.addEventListener("click", function () {
        const emailValue = emailInput.value.trim();

        if (!emailValue) {
            errorMsg.textContent = "Vui lòng nhập email!";
        } else if (!emailRegex.test(emailValue)) {
            errorMsg.textContent = "Email không hợp lệ!";
        } else {
            errorMsg.textContent = "";
            emailForm.classList.add("hide");
            personalInfo.classList.remove("hide");
        }
    });
});
