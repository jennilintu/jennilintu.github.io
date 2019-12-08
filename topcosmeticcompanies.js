Papa.parse("https://jennilint.github.io/cosmeticcompanies.csv", {
    download: true,
    complete: function(result) {
        
        let container = document.createElement('div');
        container.className = "container";
        container.style.display = "flex";
        container.style.alignItems = "flex-end";
        container.style.position = "relative";
        container.style.marginTop = "40px";
        document.getElementById("chart").appendChild(container);

        let div = document.createElement("div");
        div.style.width = "100%"
        document.getElementById("chart").appendChild(div);

        document.getElementById("chart").style.display = "block";
        document.getElementById("chart").style.width = "90%"
        document.getElementById("chart").style.marginLeft = "auto";
        document.getElementById("chart").style.marginRight = "auto";
        document.getElementById("chart").style.padding = "10px";

        let dataByKey = {};

        for (let dataPoint of result.data) {
            let companyName = dataPoint[0];
            let companySales = dataPoint[1];
            let moreInfo = dataPoint[2];
            let companyBrand = dataPoint[3];
            let veganStatus = dataPoint[4];

            if (dataByKey[companyName] === undefined) {
                dataByKey[companyName] = {};
            }
            if (dataByKey[companyName][companySales] === undefined) {
                dataByKey[companyName][companySales] = {};
            }
            if (dataByKey[companyName][companySales][moreInfo] === undefined) {
                dataByKey[companyName][companySales][moreInfo] = {};
            }
            if (dataByKey[companyName][companySales][moreInfo][companyBrand] === undefined) {
                dataByKey[companyName][companySales][moreInfo][companyBrand] = {};
            }

            dataByKey[companyName][companySales][moreInfo][companyBrand] = veganStatus;
        }
        console.log(dataByKey);

        for (let companyName of Object.keys(dataByKey)) {
            let companyContainer = document.createElement("div");
            companyContainer.style.margin = "20px";
            companyContainer.style.width = "20%";
            companyContainer.style.display = "block";
            companyContainer.style.position = "relative";
            
            let companyContainerName = document.createElement("h3");
            companyContainerName.innerHTML = companyName;
            companyContainerName.style.cursor = "pointer";
            companyContainerName.onmouseover = function() {companyContainerName.style.color = "white";}
            companyContainerName.onmouseleave = function() {companyContainerName.style.color = "#f34a50";}
            companyContainerName.style.display = "block";

           
            for (let companySales of Object.keys(dataByKey[companyName])) {
                let companySalesContainer = document.createElement("div");
                companySalesContainer.style.display = "block";
                companySalesContainer.style.position = "relative";
                companySalesContainer.style.width = "85%";
                companySalesContainer.style.height = companySales*8 + "px";
                companySalesContainer.style.marginLeft = "auto";
                companySalesContainer.style.marginRight = "auto";
                companySalesContainer.style.backgroundColor = "white";
                
                let companySalesContainerText = document.createElement("p");
                companySalesContainerText.innerHTML = companySales + " billions of USD";
                companySalesContainerText.style.fontSize = "13px";
                companySalesContainerText.style.width = "100%";
                companySalesContainerText.style.height = "120px";
                companySalesContainerText.style.position = "absolute";
                companySalesContainerText.style.bottom = "-155px";
                companySalesContainerText.style.display = "none";
                companySalesContainerText.style.textAlign = "center";
                companySalesContainer.onmouseover = function(){
                    companySalesContainerText.style.display = "block";
                    companySalesContainer.style.outline = "4px solid #f34a50";}
                companySalesContainer.onmouseleave = function(){
                    companySalesContainerText.style.display = "none";
                    companySalesContainer.style.outline = "none";}
                companySalesContainer.append(companySalesContainerText);
                


            for ( let moreInfo of Object.keys(dataByKey[companyName][companySales])){
                    let moreInfoContainer = document.createElement("div");
                    moreInfoContainer.style.outline = "4px solid #f34a50";
                    moreInfoContainer.style.padding = "5px";
                    moreInfoContainer.style.width = "100%"
                    moreInfoContainer.style.display = "none";

                    let moreInfoContainerText = document.createElement("p");
                    moreInfoContainerText.innerHTML = moreInfo;
                    moreInfoContainer.append(moreInfoContainerText);

                    let moreInfoHeading2 = document.createElement("p");
                    if (companyName === "Coty") { moreInfoHeading2.innerHTML = ""; }
                    else { moreInfoHeading2.innerHTML = companyName + " brands that are cruelty-free:"; }
                    moreInfoContainer.append(moreInfoHeading2);

                    let containerOfBrands = document.createElement("div");
                    containerOfBrands.style.display = "flex";
                    containerOfBrands.style.flexWrap = "wrap";
                    containerOfBrands.style.justifyContent = "center";
                    containerOfBrands.style.width = "100%";
                    containerOfBrands.style.marginBottom = "20px";
                    moreInfoContainer.append(containerOfBrands);

                    for ( let companyBrand of Object.keys(dataByKey[companyName][companySales][moreInfo])){
                        let brandContainer = document.createElement("div");
                        if (companyBrand === "nothing") {
                            brandContainer.style.display = "none";
                        }
                        else {
                        brandContainer.style.display = "block";
                        brandContainer.style.margin = "14px";
                        brandContainer.style.width = "120px";
                        brandContainer.style.height = "auto";
                        brandContainer.style.padding = "3px";
                        brandContainer.style.outline = "5px solid #f34a50";
                    }
                        
                        let brandContainerText = document.createElement("h4");
                        brandContainerText.style.color = "#f34a50";
                        if (companyBrand === "nothing") {
                            brandContainerText.innerHTML = "";
                            brandContainer.style.outline = "none";}
                        else {brandContainerText.innerHTML = companyBrand};

                        containerOfBrands.append(brandContainer);
                        brandContainer.append(brandContainerText);

                        let veganStatusText = document.createElement("p");
                        veganStatusText.style.fontSize = "10px";
                        if (dataByKey[companyName][companySales][moreInfo][companyBrand] === "Vegan") {
                            veganStatusText.innerHTML = "(vegan)";}
                        else {veganStatusText.innerHTML = "";}
                        brandContainerText.appendChild(veganStatusText);
                        
                    }

                    companyContainerName.onclick = function() {
                        if (moreInfoContainer.style.display === "none"){
                        moreInfoContainer.style.display = "block";
                        companyContainerName.style.textDecoration = "underline";}
                        else {moreInfoContainer.style.display = "none";
                        companyContainerName.style.textDecoration = "none";}
                    }
            
            
            companyContainer.append(companySalesContainer);
            companyContainer.append(companyContainerName);
            container.appendChild(companyContainer);
            div.append(moreInfoContainer);
            }
            }
        
        
            
        }
    }
})
