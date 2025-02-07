document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email-input");
    const submitBtn = document.getElementById("submit-btn");
    const errorMsg = document.getElementById("error-msg");
    const personalInfo = document.getElementById("personal-info");
    const emailForm = document.getElementById("email-form");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    submitBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (!regex.test(email)) {
            errorMsg.textContent = "Vui lòng nhập email hợp lệ!";
            return;
        }
        errorMsg.textContent = "";
        personalInfo.classList.remove("hide");
        emailForm.classList.add("hide");
    });
});


function toggleInfo(id, button) {
    let container = document.getElementById(id);
    if (container.classList.contains("hidden")) {
      container.classList.remove("hidden");
      button.textContent = "View Less";
    } else {
      container.classList.add("hidden");
      button.textContent = "View More";
    }
  }
