import user_data from "./portfolio.json" assert { type: "json" };
import { newContact, newProject, newService } from "./utils.js";

const header = document.querySelector(".navbar");

window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

const services_ID = document.getElementById("services");
const servicesDiv = services_ID.getElementsByClassName("container").item(0);
let row = document.createElement("div");
row.classList.add("row");

const services = user_data["services"];

for (let i = 1; i <= services.length; i++) {
  const service = services[i - 1];
  row.append(
    newService(service.service_name, service.service_desc, service.service_icon)
  );
  if (i % 3 == 0 || i == services.length) {
    servicesDiv.append(row);
    row = document.createElement("div");
    row.classList.add("row");
  }
}
const projects_ID = document.getElementById("portfolio");
const projectsDiv = projects_ID.getElementsByClassName("container").item(0);
row = document.createElement("div");
row.classList.add("row");

const projects = user_data["projects"];

for (let i = 1; i <= projects.length; i++) {
  const project = projects[i - 1];
  row.append(
    newProject(
      project.project_name,
      project.project_desc,
      project.project_image,
      project.project_link
    )
  );
  if (i % 3 == 0 || i == projects.length) {
    projectsDiv.append(row);
    row = document.createElement("div");
    row.classList.add("row");
  }
}

const contacts_ID = document.getElementById("social-handles");

const contacts = user_data["contact"];

for (let i = 1; i <= contacts.length; i++) {
  const contact = contacts[i - 1];
  contacts_ID.append(newContact(contact.link, contact.social_media));
}

const map_frame = document.getElementById("location_id");
map_frame.src =
  "https://www.google.com/maps/embed/v1/place?q=" +
  user_data["location"].city +
  ",+" +
  user_data["location"].state +
  ",+" +
  user_data["location"].country +
  "&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

document.getElementsByClassName("hero_title").item(0).innerHTML = user_data['headline'];
document.getElementsByClassName("hero_desc").item(0).innerHTML = user_data['tagline'];
document.getElementsByClassName("navbar-brand").item(0).innerHTML = user_data['name'];