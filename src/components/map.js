

export const generateMap = (parentElement) => {
   let places = [
      {
         name: "Piazza del Duomo",
         coords: [45.4639102, 9.1906426]
      }
   ];

   
   const zoom = 12;
   const maxZoom = 19;
   let map; 

   return {
    
      build: () => {
         map = L.map(parentElement).setView(places[0].coords, zoom);
                        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            maxZoom: maxZoom,
                            attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        }).addTo(map);
      },

    
      render: () => {
         if(map) map.remove();
         map = L.map(parentElement).setView([45.4639102, 9.1906426], zoom);
         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: maxZoom,
            attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
         }).addTo(map);

         places.forEach((place) => {
            const marker = L.marker(place.coords).addTo(map);
            marker.bindPopup(`<b>${place.name}</b>`);
         });
      },


      addPlace: (place) => {
         places.push(place);
         console.log(places)
      },
      getPlaces: ()=>{
         return places;
      },
      addAllPlaces: (p)=>{
         places = p;
      }
   };
}; 