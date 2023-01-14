export function newService(serviceName, serviceDesc, serviceImage) {
  const icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("servicesIcon");
  icon.classList.add(serviceImage);

  const title = document.createElement("h4");
  title.classList.add("card-title");
  title.classList.add("mt-3");
  title.innerHTML = serviceName;

  const project = document.createElement("p");
  project.innerHTML = serviceDesc;
  project.classList.add("card-text");
  project.classList.add("mt-3");

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");
  card_body.append(icon);
  card_body.append(title);
  card_body.append(project);

  const cardServicesText = document.createElement("div");
  cardServicesText.classList.add("card");
  cardServicesText.classList.add("servicesText");
  cardServicesText.append(card_body);

  const card = document.createElement("div");
  card.classList.add("col-lg-4");
  card.classList.add("mt-4");
  card.append(cardServicesText);

  return card;
}

export function newProject(
  projectName,
  projectDescriptions,
  projectImage,
  projectLink
) {
  const link = document.createElement("a");
  link.classList.add("btn");
  link.classList.add("btn-success");
  link.innerHTML = "Link";
  link.href = projectLink;

  const linkDiv = document.createElement("div");
  linkDiv.classList.add("text-center");
  linkDiv.append(link);

  const description = document.createElement("p");
  description.classList.add("card-text");
  projectDescriptions.forEach((projectDescription) => {
    const list_item = document.createElement("li");
    list_item.innerHTML = projectDescription;
    description.append(list_item);
  });

  const title = document.createElement("h4");
  title.innerHTML = projectName;
  title.classList.add("card-title");

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");
  card_body.append(title);
  card_body.append(description);
  card_body.append(linkDiv);

  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = projectImage;

  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("col-lg-4");
  card.classList.add("mt-4");
  card.append(image);
  card.append(card_body);

  return card;
}

export function newContact(contactLink, contactIcon) {
  const contact = document.createElement("div");
  contact.classList.add("social-icons");
  contact.classList.add("mt-4");

  const icon = document.createElement("i");
  icon.classList.add("fab");
  icon.classList.add(contactIcon);

  const link = document.createElement("a");
  link.href = contactLink;
  link.target = "_blank";
  link.append(icon);

  contact.append(link);

  return contact;
}
