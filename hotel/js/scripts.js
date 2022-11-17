// what is the path to the JSON file?
const apiURL = "hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {
      let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    myImageTag.alt = "hotel image";
    
    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    
    
    let myFigure = document.createElement("figure");
    myFigure.appendChild(myImageTag);
    myFigure.appendChild(myCaptionTag);

    let theIconLeftTag = document.createElement("ion-icon");
    theIconLeftTag.name = "car-outline";

    let theIconRightTag = document.createElement("ion-icon");
    theIconRightTag.name = "call-outline";

    let theAddressTag = document.createElement("p");
    theAddressTag.textContent = myList[i].address[0];

    let theCityTag = document.createElement("p");
    theCityTag.textContent = myList[i].address[1];

    let addressDiv = document.createElement("div");
    addressDiv.appendChild(theAddressTag);
    addressDiv.appendChild(theCityTag);

    let thePhoneTag = document.createElement("p");
    thePhoneTag.textContent = myList[i].phone;

    let spanLeftTag = document.createElement("span");
    spanLeftTag.className = "leftSpan";
    spanLeftTag.appendChild(theIconLeftTag);
    spanLeftTag.appendChild(addressDiv);
    

    let spanRightTag = document.createElement("span");
    spanRightTag.className = "rightSpan";
    spanRightTag.appendChild(theIconRightTag);
    spanRightTag.appendChild(thePhoneTag);



    let myDiv = document.createElement("div");
    myDiv.className = "infoDiv";
    myDiv.appendChild(spanLeftTag);
    myDiv.appendChild(spanRightTag);

    let mySection = document.createElement("section");
    mySection.appendChild(myFigure);
    mySection.appendChild(myDiv);

       


    document.getElementById('myCards').appendChild(mySection);
    

    }
    

    
    
}); //end of "then" fat arrow function