import Navbar from "../../components/Navbar";
import { ContainerCards, Container } from "./styles";
import BarraPesquisa from '../../components/BarraPesquisa';
import Button from 'react-bootstrap/Button';
import 'react-alice-carousel/lib/alice-carousel.css';
import CustomCard from "../../components/Card";
import { IEvento } from '../../types/IEvento';
import { useEffect, useState } from 'react';
import {getEventsOrganizador, getEventsCliente} from "./services/api";
import { useNavigate } from 'react-router-dom';

import { ICard } from '../../types/IComponents';
import Footer from "../../components/Footer";
export default function Home() {
    const navigate = useNavigate();
    const [eventos, setEventos] = useState<IEvento[]>([]);
    const cards: JSX.Element[] = [];


    if(localStorage.getItem("typeUser") === "organizador"){
        useEffect(() => {
            getEventsOrganizador()
            .then((data) => {
              setEventos(data);
            })
            .catch((error) => {
              console.log('erro: ', error);
          });
          }, []);
    }else{
        useEffect(() => {
            getEventsCliente()
            .then((data) => {
                const arrCompras = Object.entries(data);
                console.log(arrCompras);                
            })
            .catch((error) => {
              console.log('erro: ', error);
          });
          }, []);
    }
    
    eventos.map((evento)=>{
        let dados: ICard = {
            id: evento.id,
            title: evento.nome,
            description: evento.descricao,
            data: evento.data,
            valorIngresso: evento.valorIngresso,
            pathImg: 'https://img.freepik.com/psd-gratuitas/modelo-de-banner-horizontal-de-neon-para-musica-eletronica-com-dj-feminina_23-2148979684.jpg?w=900&t=st=1679342315~exp=1679342915~hmac=664278eca29bfcbda4f23c171f99897a3a90ec386c3dd4a8f92fd34d6141b644'
        }
        let item = <CustomCard infos={dados} />;
        cards.push(item);
    });
    
    return (
        <>
            <Navbar />
            <Container>
                <Button variant="outline-dark" onClick={() => navigate('/eventosParaHoje')}>Meus eventos para hoje</Button>
                <BarraPesquisa />
                <ContainerCards>
                    {cards.map(evento => (
                        evento
                    ))}
                </ContainerCards>
                
            </Container>
            <Footer/>
        </>
    )
}