export const generateMap = (parentElement) => {
   let places = [];
   const zoom = 6;
   const maxZoom = 19;
   let map; 

   return {
    
      build: () => {
         map = L.map(parentElement).setView([46.301501, 12.718858639706518], zoom);
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