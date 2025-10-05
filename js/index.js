const btn = document.querySelector("button");
const img = document.querySelector("img");
const userName = document.getElementById("name");
const age = document.getElementById("age");
const country = document.getElementById("country");

btn.addEventListener("click", function () {
  getRandomeUser();
});

async function getRandomeUser() {
  try {
    const res = await fetch("https://randomuser.me/api");
    if (res.ok) {
      const data = await res.json();
      const user = data.results[0];
      console.log(user);
      img.setAttribute("src", user.picture.large);
      userName.innerHTML = user.name.first + " " + user.name.last;
      age.innerHTML = "age: " + user.dob.age;
      country.innerHTML = "country: " + user.location.country;
    }
  } catch (error) {
    console.log(error);
  }
}
