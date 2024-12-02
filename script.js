// Carte principale
const mainMap = L.map('main-map').setView([6.1725, 1.2312], 6); // Vue initiale centrée sur le Togo
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mainMap);

// Marqueurs sur la carte principale
const mainLocations = [
    { name: "Ferme Principale (Togo)", coords: [6.1725, 1.2312] },
    { name: "Champs de Maïs (Togo)", coords: [6.1800, 1.2300] },
    { name: "Zone d'Élevage (Togo)", coords: [6.1650, 1.2350] }
];
mainLocations.forEach(location => {
    L.marker(location.coords).addTo(mainMap)
        .bindPopup(`<b>${location.name}</b>`);
});

// Carte de contact
const contactMap = L.map('contact-map').setView([6.5, 0], 5); // Vue générale de l'Afrique de l'Ouest
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(contactMap);

// Marqueurs sur la carte de contact
const contactLocations = [
    { name: "Ferme au Togo", coords: [6.1725, 1.2312] },
    { name: "Ferme au Bénin", coords: [6.3703, 2.3912] },
    { name: "Ferme en Côte d'Ivoire", coords: [5.3411, -4.0286] }
];
contactLocations.forEach(location => {
    L.marker(location.coords).addTo(contactMap)
        .bindPopup(`<b>${location.name}</b>`);
});
