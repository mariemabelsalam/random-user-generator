const btn = document.querySelector("button");
const user = document.querySelector(".user");
let userData;

btn.addEventListener("click", function () {
  getrandomUers();
});

async function getrandomUers() {
  let result = await fetch("https://randomuser.me/api");
  let data = await result.json();
  userData = data.results[0];
  //   console.log(userData);
  //   console.log(data);
  display();
}

function display() {
  user.innerHTML = `
       <div class="image">
              <img src="${
                userData.picture.large
              }" class="w-25 h-25 rounded-circle" alt="">
        </div>
        <div class="content py-2 fs-3">
            <p>${userData.name.first + " " + userData.name.last}</p>
            <p>Age: ${userData.dob.age}</p>
            <p>country: ${userData.location.country}</p>
        </div>
   `;
}
