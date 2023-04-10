const externeLinks = document.querySelectorAll(".externer-link-confirm");

let externeLinksURLs = [];
for(let i = 0; i < externeLinks.length; i++){
    externeLinksURLs.push(externeLinks[i].id);
}




for(let i = 0; i < externeLinks.length; i++){

    externeLinks[i].addEventListener("click", e => {
        if(confirm("Achung! \nSie sind dabei den Link '" + externeLinksURLs[i] 
        + "' zu öffnen, der auf eine von uns nicht betreute Seite führt. \nWir sind nicht für die Inhalte der externen Seite verantwortlich. \nWollen Sie dennoch fortfahren?"))
        {
            window.location = externeLinksURLs[i];
        }
    });
}


