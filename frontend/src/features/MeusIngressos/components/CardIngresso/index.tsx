import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { ContainerConteudo, ContainerIngressos, LabelTitulos, LabelValores } from "./styles" 
import { meusIngressos } from '../../services/meusIngressos';
import { useEffect, useState } from "react";
import { ICompra } from '../../../../types/ICompra';
import { ContainerTituloPagina, TituloPagina } from '../../../EventosPopulares/styled';
import { BotaoVoltar } from '../../../../components/EventoForm/styles';
import { useNavigate } from 'react-router-dom';

export default function CardIngresso(){
    let i = 1;
    const navigate = useNavigate();
    const [compras, setCompras] = useState<ICompra[]>([]);

    useEffect(() => {
        meusIngressos()
        .then((data) => {
            setCompras(data);
        })
        .catch((erro) => {
            console.log("Erro: ", erro);
        }) 
    }, []);

    return (
        <>
        <BotaoVoltar onClick = {() => navigate(-1)}/>
        <ContainerTituloPagina> 
            <TituloPagina> Meus Ingressos </TituloPagina>
        </ContainerTituloPagina>
        <ContainerIngressos>
            <Row xs = {1} md = {3} className = "g-4">
            { compras && compras.length > 0 ? compras.map((compra: ICompra) => (
                <CardGroup key = {compra.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title> Compra de ingressos {i++} </Card.Title>
                            <Card.Text>
                                <ContainerConteudo>
                                    <LabelTitulos> Quantia: </LabelTitulos>
                                    <LabelValores> { compra.qtdIngresso } unidade(s) </LabelValores>
                                </ContainerConteudo>

                                <ContainerConteudo>
                                    <LabelTitulos> Evento: </LabelTitulos>
                                    <LabelValores> { compra.evento.nome } </LabelValores>
                                </ContainerConteudo>

                                <ContainerConteudo>
                                    <LabelTitulos> Descrição: </LabelTitulos>
                                    <LabelValores> { compra.evento.descricao } </LabelValores>
                                </ContainerConteudo>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> Data da compra: {compra.data} </small>
                        </Card.Footer>
                    </Card>
              </CardGroup>
            ))
            :
            <p> Você não possui compras realizadas! </p>
        }

        </Row>
        </ContainerIngressos>
        </>
    )
}