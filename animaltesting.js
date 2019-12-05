let container = document.createElement("div");
    container.className = "animaltestcontainer";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.marginLeft = "auto";
    container.style.marginRight = "auto";
    document.getElementById("animaltestbox").appendChild(container);

let showAnimalTests = function(test) {
    let type = document.createElement("div");
    type.className = "typeoftest";
    let typeName = document.createElement("p");
    typeName.innerHTML = test.typeOfTest;
    typeName.className = "typeoftesttext";
    type.append(typeName);
    container.appendChild(type); 

        let animalTestInfoContainer = document.createElement("div");
        animalTestInfoContainer.style.marginLeft = "auto";
        animalTestInfoContainer.style.marginRight = "auto";
        animalTestInfoContainer.className = "animatestlinfocontainer";

        let animalTestInfoContainerHeading = document.createElement("h3");
        animalTestInfoContainerHeading.innerHTML = test.typeOfTest;
        animalTestInfoContainer.append(animalTestInfoContainerHeading);

        let info1 = document.createElement("p");
        info1.innerHTML = test.purpose;
        info1.className = "informationtext";
        animalTestInfoContainer.append(info1);

        let animalTestInfoContent = document.createElement("div");
        animalTestInfoContent.style.display = "block";
        animalTestInfoContent.style.marginLeft = "auto";
        animalTestInfoContent.style.marginRight = "auto";
        animalTestInfoContent.style.width = "95%";
        animalTestInfoContainer.append(animalTestInfoContent);

        let informationBox2 = document.createElement("div");
        informationBox2.style.display = "block";
        informationBox2.style.marginRight = "8px";
        animalTestInfoContainer.append(informationBox2);

        let heading2 = document.createElement("h4");
        heading2.className = "informationheading";
        heading2.innerHTML = "Animals used:"
        informationBox2.append(heading2);

        let info2 = document.createElement("p");
        info2.className = "animalsused";
        info2.innerHTML = test.animalsUsed;
        informationBox2.append(info2);

        let informationBox3 = document.createElement("div");
        informationBox3.style.display = "block";
        informationBox3.style.width = "90%";
        informationBox3.style.height = "auto";
        informationBox3.style.marginLeft = "auto";
        informationBox3.style.marginRight = "auto";
        animalTestInfoContainer.append(informationBox3);

        let heading3 = document.createElement("h4");
        heading3.className = "informationheading";
        heading3.innerHTML = "What animals endure:"
        informationBox3.append(heading3);

        let info3 = document.createElement("p");
        info3.innerHTML = test.endure;
        info3.className = "informationtext";
        informationBox3.append(info3);

        document.getElementById("animaltestbox").appendChild(animalTestInfoContainer);

        type.onclick = function(test) {
        if (animalTestInfoContainer.style.display === "none") {
            animalTestInfoContainer.style.display = "block";
            type.style.backgroundColor = "#f34a50";
            type.style.color = "white";
            //alert("clicked");
        }
        else {
            animalTestInfoContainer.style.display = "none";
            type.style.backgroundColor = "";
            type.style.color = "";
        }
    }
}

let tests = [
    {
        typeOfTest: "Skin sensitization",
        animalsUsed: "32 guinea pigs or 16 mice",
        endure: "The test substance is applied to the surface of the skin or injected under the skin of a guinea pig, or applied to the ear of a mouse. Animals' skin may show signs of redness, ulcers, scaling, inflammation, and itchiness.",
        purpose: "Tests for allergic reaction on skin."
    },
    {
        typeOfTest: "Skin irritation / corrosion",
        animalsUsed: "1-3 rabbits",
        endure: "The test substance is applied to the shaved skin of rabbits. Their skin may show signs of redness, rash, lesions, scaling, inflammation, and/or other signs of damage.",
        purpose: "Tests for skin irritation (reversible skin damage) and skin corrosion (severe and irreversible skin damage)."
    },
    {
        typeOfTest: "Eye irritation / corrosion",
        animalsUsed: "1-3 rabbits",
        endure: "The test substance is applied to a rabbits' eyes. Their eyes may show signs of redness, bleeding, ulcers, blindness, and/or other signs of damage.",
        purpose: "Tests for eye irritation (reversible eye damage) and eye corrosion (severe and irreversible eye damage)."
    },
    {
        typeOfTest: "Acute oral toxicity",
        animalsUsed: "7 rats",
        endure: "The test substance is forced down a rat’s throat using a syringe. Animals may experience diarrhea, convulsions, bleeding from the mouth, seizures, paralysis, and ultimately, death.",
        purpose: "Determines the amount of a substance that causes half of the exposed animals to die within 14 days of exposure when the substance is swallowed."
    },
    {
        typeOfTest: "Acute dermal toxicity",
        animalsUsed: "30 rats, rabbits or guinea pigs",
        endure: "The test substance is applied to the shaved skin of the rat, guinea pig, or rabbit and covered with a patch to keep her from licking or otherwise removing the substance.",
        purpose: "Determines the amount of a substance that causes half of the exposed animals to die within 14 days of exposure when the substance is applied to the skin for 24 hours."
    },
    {
        typeOfTest: "Acute inhalation toxicity",
        animalsUsed: "20-40 rats",
        endure: " Rats are locked in full-body restraint tubes and forced to inhale the test substance. Animals may experience bleeding of the nose, convulsions, paralysis, seizures, and ultimately, death.",
        purpose: "Determines the amount of a substance that causes half of the exposed animals to die within 14 days of exposure when the substance is inhaled."
    },
    {
        typeOfTest: "Subacute and subchronic toxicity",
        animalsUsed: "40 rats (14-28 day) or 80 rats",
        endure: " Rats are force-fed a substance, forced to inhale a substance, and/or a substance applied to their skin daily for 14, 21, 28, 90 and/or 180 days. At the end of the exposure period the animals are killed and their organs are examined.",
        purpose: "Tests for changes in the cells or organs caused by repeat exposure."
    },
    {
        typeOfTest: "Chronic toxicity",
        animalsUsed: "120 rats",
        endure: "Rats are force-fed a substance, forced to inhale a substance, and/or a substance applied to their skin daily for one year or longer. At the end of the exposure period the animals are killed and their organs are examined.",
        purpose: "Measures the absorption, distribution, and metabolism of a substance throughout the tissues and organs following exposure."
    },
    {
        typeOfTest: "Carcinogenicity",
        animalsUsed: "400 mice + 400 rats",
        endure: " A mouse is exposed to a substance either by being fed the substance through their food or water, being force-fed the substance, having it rubbed on their skin, or being forced to inhale the substance. After two years of daily exposure, she is killed so her tissues can be examined for signs of cancer (or other signs of toxicity).",
        purpose: "Tests for cancer and other long-term effects of exposure."
    },
    {
        typeOfTest: "Toxicokinetics",
        animalsUsed: "4-12 rats",
        endure: " A rat is exposed to a substance either by being fed the substance through their food or water, being force-fed the substance, having it rubbed on their skin, or being forced to inhale the substance. He may be exposed once or multiple times depending on the substance. Blood is drawn at daily intervals to determine the peak concentration of substance in the blood. He is then killed at a specific time-point; different animals are killed at different times to obtain a record of how the substance moves through their body over time.",
        purpose: "Measures the absorption, distribution, and metabolism of a substance throughout the tissues and organs following exposure."
    },
    {
        typeOfTest: "Reproductive toxicity",
        animalsUsed: "1,400-2,600 rats",
        endure: "Male and female adult rats are exposed, usually by force-feeding, for at least two weeks and then mated. The pregnant mothers are then exposed daily throughout pregnancy and breast-feeding and are then killed. After weaning, the pups are force-fed throughout their lifetimes, sometimes experiencing symptoms of chronic poisoning such as weight loss or convulsions. Pups that survive until puberty are then mated, and force-feeding continues through the second generation’s pregnancy and breast feeding. At the time of weaning of the second generation, mothers and pups are all killed and their tissues examined.",
        purpose: "Tests for effects on fertility, ability to reproduce, and birth defects."
    },
    {
        typeOfTest: "Developmental toxicity",
        animalsUsed: "660 rabbits (100 adult females and 560 pups) or 1,300 rats (100 adult females and 1,200 pups)",
        endure: "A pregnant female is exposed, usually by force-feeding, starting at the initiation of pregnancy and contiuing throughout the pregnancy. She is then killed on the day before she is expected to give birth (on average, 22 days for rats or 31 days for rabbits). Her pups are extracted and evaluated for signs of developmental abnormalities.",
        purpose: "Tests for birth defects."
    },
    {
        typeOfTest: "Genetic toxicity / mutagenicity",
        animalsUsed: "80-500 mice or rats",
        endure: "There are several different tests for genetic alterations that use mice or rats. In a common test, a mouse or rat is force-fed the substance on a daily basis for at least 14 days. Samples of his bone marrow and/or blood are taken to look for genetic changes.",
        purpose: "Tests for the beginning stages of cancer."
    }
];

for (let test of tests) {
    showAnimalTests(test);
}