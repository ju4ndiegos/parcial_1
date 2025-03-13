import getData from "../api/getData";
import { useState } from "react";

function Detail(d){
    console.log(d);

    const [datos, setDatos] = useState(() => getData(d.d));

    console.log(datos);
    return (
        <>
        <h1>{d.d}</h1>
        
        <ul>
            <li>{datos.name}</li>

        </ul>
        </>
    );
}
export default Detail;