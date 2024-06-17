let count = 0;
let cards = document.querySelectorAll(".content");
let cards1 = document.querySelectorAll(".quaContent");

function toggleTheme() {
  count++;
  if (count % 2 !== 0) {
    document.querySelector("body").classList.remove("bg-dark", "text-white");
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.remove("bg-dark", "text-white");
      card.classList.add("bg-white", "text-black");
    }
    for (let i = 0; i < cards1.length; i++) {
      let card = cards1[i];
      card.classList.remove("border-light");
      card.classList.add("border-dark");
    }
  } else {
    document.querySelector("body").classList.add("bg-dark", "text-white");
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.remove("bg-white", "text-black");
      card.classList.add("bg-dark", "text-white");
    }
    for (let i = 0; i < cards1.length; i++) {
      let card = cards1[i];
      card.classList.remove("border-dark");
      card.classList.add("border-light");
    }
  }
}

function sendMail(e) {
  let name = document.querySelector("#name").value;
  let mobile = document.querySelector("#mobile").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  let error = false;
  if (name === "" || name === null) {
    document.querySelector("#nameError").innerHTML = "Please enter your name";
    document.querySelector("#name").style.border = "1px solid red";
    error = true;
  } else {
    document.querySelector("#nameError").innerHTML = "";
    document.querySelector("#name").style.border = "1px solid black";
  }

  if (mobile === "" || mobile === null) {
    document.querySelector("#mobileError").innerHTML =
      "Please enter your mobile number";
    document.querySelector("#mobile").style.border = "1px solid red";
    error = true;
  } else if (mobile.length != 10 || isNaN(mobile)) {
    document.querySelector("#mobileError").innerHTML =
      "Please enter your valid mobile number";
    error = true;
  } else {
    document.querySelector("#mobileError").innerHTML = "";
    document.querySelector("#mobile").style.border = "1px solid black";
  }

  let emailPattern = /^[a-z]+[a-z0-9\._]{3,}@[a-z]{3,10}\.[a-z\.]{2,8}$/;
  if (email === "" || email === null) {
    document.querySelector("#emailError").innerHTML = "Please enter your email";
    document.querySelector("#email").style.border = "1px solid red";
    error = true;
  } else if (!email.match(emailPattern)) {
    document.querySelector("#emailError").innerHTML =
      "Please enter your valid email";
    error = true;
  } else {
    document.querySelector("#emailError").innerHTML = "";
    document.querySelector("#email").style.border = "1px solid black";
  }

  if (message === "" || message === "Enter address" || message === null) {
    document.querySelector("#messageError").innerHTML = "Please enter message";
    document.querySelector("#message").style.border = "1px solid red";
    error = true;
  } else {
    document.querySelector("#messageError").innerHTML = "";
    document.querySelector("#message").style.border = "1px solid black";
  }

  e.preventDefault();
  if (error) {
  } else {
    var params = {
      from_name: document.getElementById("name").value,
      mobile_no: document.getElementById("mobile").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_f5tht34", "template_8ry6bx8", params)
      .then(function (res) {
        console.log("Success! " + res.status);
      })
      .catch(function (err) {
        console.log("Failed to send message. Please try again.");
      });
    document.querySelector("#name").value = "";
    document.querySelector("#mobile").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  }
}
