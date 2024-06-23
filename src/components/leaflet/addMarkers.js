export const addMarkers = (map, data) => {
    const results = data.results;
    results.forEach(
        ({
            point_geo: { lat, lon: lng },
            nom_site,
            sports,
            start_date,
            end_date,
        }) => {
            const marker = L.marker([lat, lng]).addTo(map);
            marker
                .bindPopup(
                    `<b>${nom_site}</b><br>${sports}<br>${start_date} - ${end_date}`,
                )
                .openPopup();
        },
    );
};
