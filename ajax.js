const PROJSON = "https://jsonplaceholder.typicode.com/users";

$.getJSON(PROJSON, function (respuesta, estado) {
    if(estado === "success"){
      let data = respuesta;
      for (const dato of data) {
        $("#listadoJson").append(
            `<div>
                <ul>
                    <li>Id: ${dato.id}</li>
                    <li>name: ${dato.name}</li>
                    <li>username: ${dato.username}</li>
                    <li>email: ${dato.email}</li>
                    <li>address street: ${dato.address.street}</li>
                    <li>suite: ${dato.address.suite}</li>
                    <li>city: ${dato.address.city}</li>
                    <li>zipcode: ${dato.address.zipcode}</li>
                    <li>geolat: ${dato.address.geo.lat}</li>
                    <li>geolnt: ${dato.address.geo.lng}</li>
            </div>`
        )
      }
    }
});