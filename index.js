function updateMap(){
     
    fetch("/data.json")
    .then(response => response.json())
    .then(corona_data =>{
        console.log(corona_data.data)
        corona_data.data.forEach(element =>{
           latitude = element.latitude;
           longitude = element.longitude;

           cases = element.infected;
           if (cases>255){
               color = "rgb(255, 0, 0)";
           }

           else{
               color = `rgb(${cases}, 0, 0)`;
           }
          /* rec = element.recovered;
           if(rec<10){
            color1="rgb(255,255,255)"

           }
           else{
            color1 = `rgb(0, $(rec), 0)`;
           }   */        

           // Mark on the map
           new mapboxgl.Marker({
               draggable: false,
               color: color
           }).setLngLat([longitude, latitude])
           .addTo(map); 
           //mark for recovered
         /*  new mapboxgl.Marker({
            draggable: false,
            color: color1
        }).setLngLat([longitude, latitude])
        .addTo(map); */

        });
    })

}
updateMap();