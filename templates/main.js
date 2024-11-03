function initMap() {

    const localizacaoClinica = { lat: -23.60344335895204, lng: -46.52975984700882 }; 

    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, 
        center: localizacaoClinica,
    });

   
    const marker = new google.maps.Marker({
        position: localizacaoClinica,
        map: map,
        title: "Nossa Clínica",
    });
}

document.addEventListener("DOMContentLoaded", function () {
    
    const Pcorporal = ["../static/Crio01.jpeg", "../static/mae.png", "../static/profilePicture.jpeg"];
    const Pfacial = ["../static/mae.png", "../static/mae2.png", "../static/mae3.png"];
    const Pgluteos = [];
    const Phidrolipo = [];
    const Pcrio = [];
   

    let index1 = 0;
    let index2 = 0;


    function changeImage1() {
        const imgElement = document.getElementById("carousel-corporal");
        index1 = (index1 + 1) % Pcorporal.length;
        imgElement.src = Pcorporal[index1];
    }

    function changeImage2() {
        const imgElement = document.getElementById("carousel-facial");
        index2 = (index2 + 1) % Pfacial.length;
        imgElement.src = Pfacial[index2];
    }

    
    setInterval(changeImage1, 5000);
    setInterval(changeImage2, 5000);
});
