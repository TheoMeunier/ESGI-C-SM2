import '../../../node_modules/leaflet/dist/leaflet.js';

export const initMap = () => {
    const map = L.map('map').setView([51.505, -0.09], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    return map;
};
