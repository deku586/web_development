// Função para inicializar o mapa
function initMap() {
    // Coordenadas da clínica (exemplo: São Paulo)
    //
    const localizacaoClinica = { lat: -23.60344335895204, lng: -46.52975984700882 }; // Substitua com as coordenadas corretas

    // Cria um mapa centralizado nas coordenadas
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Nível de zoom ajustável
        center: localizacaoClinica,
    });

    // Marca o local da clínica no mapa
    const marker = new google.maps.Marker({
        position: localizacaoClinica,
        map: map,
        title: "Nossa Clínica",
    });
}