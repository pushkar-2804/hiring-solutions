// console.clear();

const loginBtn = document.getElementById("login");
const loginFormBtn = document.getElementById("loginFormBtn");
const signupBtn = document.getElementById("signup");
const signupFormBtn = document.getElementById("signupFormBtn");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  loginBtn.innerText = "Login";
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  loginBtn.innerText = "or Login";

  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

// Function to handle login
const handleLogin = (event) => {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if (email && password) {
    loginFormBtn.disabled = true;
    loginFormBtn.innerHTML = "Loading...";
    axios
      .post("https://hiring-yjwj.onrender.com/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        window.location.assign("candidates.html");
        console.log("Login successful");
      })
      .catch((error) => {
        loginFormBtn.disabled = false;
        loginFormBtn.innerHTML = "Login";
        console.error("Error during login:", error);
        alert("An error occurred during login");
      });
  } else alert("An error occurred during signup");
};

// Function to handle signup
const handleSignup = (event) => {
  event.preventDefault();

  const companyName = document.getElementById("signupCompanyName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  if (email && password && companyName) {
    signupFormBtn.disabled = true;
    signupFormBtn.innerHTML = "Loading...";
    axios
      .post("https://hiring-yjwj.onrender.com/api/auth/signup", {
        companyName,
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        window.location.assign("candidates.html");
        console.log("Signup successful");
      })
      .catch((error) => {
        signupFormBtn.disabled = false;
        signupFormBtn.innerHTML = "Signup";
        console.error("Error during signup:", error);
        alert("An error occurred during signup");
      });
  } else alert("Fields should not be empty");
};

// Attach event listeners to login and signup forms
document.getElementById("loginForm").addEventListener("submit", handleLogin);
document.getElementById("signupForm").addEventListener("submit", handleSignup);
