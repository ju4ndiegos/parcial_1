import './detail.css';
import { Card, Carousel, Figure, Image, Stack } from "react-bootstrap";
import getData from "../api/getData";
import { useState } from "react";

function Detail(tipo){
    //console.log(d);
    const [datos,setDatos] = useState([]);

    if (datos.length === 0){
        console.log(datos);
        getData(tipo.d).then((data) => {
            setDatos(data);
        });
    }

    const route = "./"+tipo.d+".png";

    const grupos = [];
    for (let i = 0; i < datos.length; i += 4) {

        grupos.push(
        
            <Carousel.Item>
                <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={3}>
                        {datos.slice(i, i + 4).map((data, idx)=> {      
                         return(<Card key={idx+i}>
                          <Card.Body>
                              <Card.Img src={data.image} alt={data.name} width={50}/>
                              <Card.Title>{data.name}</Card.Title>
                          </Card.Body>
                        </Card>)
                        })}
                </Stack>
                </Carousel.Item>
        );
    }

    console.log(grupos);
    

    return (
        <div className='detailTodo'>
            <header className='header'>
                <Figure>
                    <Image src={route} alt ={tipo.d} width={50}/>
                </Figure>
                <h1><strong>{tipo.d}</strong></h1>
                <Figure>
                    <Image src={route} alt ={tipo.d} width={50}/>
                </Figure>
            </header>
            <div className='container-detail'></div>

            <div className='carousel'>
            <Carousel data-bs-theme="dark">
            
            {grupos.map((grupo) => {
                return grupo;
            })}
            
                
            </Carousel>
            </div>
        </div>
    );
}
export default Detail;