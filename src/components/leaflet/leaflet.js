import { initMap } from './leafletConfig.js';
import { fetchData } from '../api/fetchData.js';
import { addMarkers } from './addMarkers.js';

export const Leaflet = async function Leaflet() {
    if (document.getElementById('map')) {
        const map = initMap();
        const data = await fetchData();
        addMarkers(map, data);
    }
};
