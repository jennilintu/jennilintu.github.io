let container0 = document.createElement("div");
container0.style.display = "flex";
container0.style.width = "75%";
container0.style.marginLeft = "auto";
container0.style.marginRight = "auto";
document.getElementById("bunny").appendChild(container0);

let showLogos = function (logo) {

    let logoContainer = document.createElement("div");
    logoContainer.style.display = "block";
    logoContainer.style.margin = "15px";
    logoContainer.style.padding = "25px";
    logoContainer.style.width = "30%";
    logoContainer.style.outline = "4px solid #f34a50";
    container0.append(logoContainer);

    let logoPhoto = document.createElement("img");
    logoPhoto.src = logo.photo;
    logoPhoto.style.width = "auto";
    logoPhoto.style.height = "100px";
    logoContainer.append(logoPhoto);

    let logoTextContainer1 = document.createElement("div");
    logoTextContainer1.className = "logotextcontainer";
    logoContainer.append(logoTextContainer1);

    let logoLabel1 = document.createElement("p");
    logoLabel1.innerHTML = "name:"
    logoLabel1.className = "ul";
    logoTextContainer1.append(logoLabel1);

    let logoName = document.createElement("li");
    logoName.innerHTML = logo.name;
    logoTextContainer1.append(logoName);

    let logoTextContainer2 = document.createElement("div");
    logoTextContainer2.className = "logotextcontainer";
    logoContainer.append(logoTextContainer2);

    let logoLabel2 = document.createElement("p");
    logoLabel2.className = "ul";
    logoLabel2.innerHTML = "organization:"
    logoTextContainer2.append(logoLabel2);

    let logoOrganization = document.createElement("li");
    logoOrganization.innerHTML = logo.organization;
    logoTextContainer2.append(logoOrganization);

    let logoTextContainer3 = document.createElement("div");
    logoTextContainer3.className = "logotextcontainer";
    logoContainer.append(logoTextContainer3);

    let logoLabel3 = document.createElement("p");
    logoLabel3.innerHTML = "location:"
    logoLabel3.className = "ul";
    logoTextContainer3.append(logoLabel3);

    let logoLocation = document.createElement("li");
    logoLocation.innerHTML = logo.location;
    logoTextContainer3.append(logoLocation);
}

let logos = [
    {
    name: "Leaping Bunny",
    organization: "CCIC and BUAV",
    location: "International",
    photo: "leapingbunny.png",
    },
    {
    name: "Caring Consumer",
    organization: "Peta",
    location: "USA-based",
    photo: "crueltyfree.png",
    },
    {
    name: "CCF Rabbit",
    organization: "Choose Cruelty-Free",
    location: "Australia-based",
    photo: "nottestedonanimals.png",
    }
];

for (logo of logos) {
    showLogos(logo);
}