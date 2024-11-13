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
