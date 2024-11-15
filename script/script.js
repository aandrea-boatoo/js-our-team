"use strict";
// CARD MEMBRI GIA ESISTENTI
import { teamMembers } from "./teamMembers.js";

const staffSection = document.getElementById("staff");

for (let value of teamMembers) {
    const template = `
    <div class="card d-flex  flex-row justify-content-between">
    <div class="image">
        <img src="${value.img}" alt="${value.name}">
    </div>
    <div class="info">
        <h5 class="name">${value.name}</h5>
        <p class="role">${value.role}</p>
    </div>
    <p class="email">${value.email}</p>
</div>`
    staffSection.innerHTML += template;
}

// FORM E INSERIMENTO NUOVO MEMBRO
const nameInput = document.getElementById("inpName");
const jobInput = document.getElementById("inpJob");
const emailInput = document.getElementById("inpEmail");
const imgInput = document.getElementById("inpImg");
const subButton = document.getElementById("subButton");

subButton.addEventListener('click', function () {
    event.preventDefault();
    const newMember = {
        name: nameInput.value,
        role: jobInput.value,
        email: emailInput.value,
        img: "img/male2.png",
    }
    teamMembers.push(newMember);
    console.log(teamMembers);
});
