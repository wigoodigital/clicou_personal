import React from "react";

import Link from "next/link";

import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
import LoyaltyIcon from '@material-ui/icons/Loyalty';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/nextjs-material-kit-pro/pages/menuSections/sectionCards.js";

import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import christian from "assets/img/faces/christian.jpg";
import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg"; 

import oferta1 from "assets/img/oferta1.jpg";
import oferta2 from "assets/img/oferta2.jpg";

const useStyles = makeStyles(styles);

export default function SectionCards(props) {
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");
  const classes = useStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" id="cards">
      {/* <div className={classes.sectionGray}> */}
      <div>
        <div>
          {/* PRICING CARDS START */}
          <div>
            <div className={classes.container}>
              <div className={classes.title}>
                <h3>Opções</h3>
              </div>
              <GridContainer justify="center">           
                <GridItem xs={12} sm={8} md={6} lg={5}>
                  <Card
                    pricing
                    background
                    style={{ backgroundImage: `url(${oferta1})` }}
                  >
                    <CardBody pricing background>
                      <h6 className={classes.cardCategoryFullWhite}>OPÇÃO 1</h6>                      
                      <ul>
                        <li style={{ padding: "0" }}>
                          <h5 style={{ position: "absolute", marginTop: "-100px" }}><Success><LoyaltyIcon/></Success> OPÇÃO MAIS DESEJADA</h5>
                        </li>
                      </ul>
                      <h6 className={classes.cardCategoryFullWhite} style={{ fontWeight: "900", marginTop: "30px"}}>Valor do pacote</h6>
                      <h1 className={classes.cardTitleWhite} style={{ marginTop: "0px" }}>

                        <small>R$</small><strike style={{ color: "red" }}><span style={{ color: "white" }}>{props.user.ofertas[0].valor_credito}</span></strike>
                      </h1>
                      por:
                      <h2 className={classes.cardTitleWhite} style={{ marginTop: "0px" }}>
                        <small>R$</small>{parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}
                      </h2>
                      <p className={classes.cardCategoryFullWhite}>
                        <b>Escolhendo esta opção, <span style={{ fontWeight: "900", fontSize: "20px", color: "#ffffff" }}>você utiliza o valor do saldo que possui </span> para ter direito aos serviços abaixo <h3 className={classes.primaryColorText}>SEM CUSTO ADICIONAL</h3></b>
                      </p>
                      <h4>
                        Esta opção inclui:
                      </h4>
                      <ul>
                        <li>
                          <Success><Check /></Success> <b>{props.user.ofertas[0].diasDisponiveis} dias</b> do Plano <b>FIT Plus</b>
                        </li>
                        <li>
                          <Success><Check /></Success> <b>{props.user.ofertas[0].qtde_dias_clicou_personal} dias</b>  de <br/> Personal Online
                        </li>  
                        <li>
                          <Success><Check /></Success> Acesso a <b>TODAS</b> <br/>as unidades da rede
                        </li>             
                        <li>
                          <Success><Check /></Success> Poltrona de massagem
                        </li>             
                        <li>
                          <Success><Check /></Success> Direito a levar <b>5 convidados</b> <br/>para treinar<br/><small>de domingo a quinta e feriados</small>
                        </li>             
                        <li>
                          <Success><Check /></Success> Acesso ao Wi-Fi
                        </li>             
                        <li>
                          <Success><Check /></Success> Acompanhamento mensal de nível de gordura e idade corporal
                        </li>             
                        <li>
                          <Success><Check /></Success> FIT Férias
                        </li>             
                      </ul>
                      <Button color="primary" style={{ color: "#272727" }} round onClick={() => { props.setActive(5), props.setOffer(props.user.ofertas[0]) }}>Escolher opção</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={8} md={6} lg={5}>
                  <Card
                    pricing
                    background
                    style={{ backgroundImage: `url(${oferta2})`, backgroundPosition: "80%" }}
                  >
                    <CardBody pricing background>
                      <h6 className={classes.cardCategoryFullWhite}>OPÇÃO 2</h6>
                      <h6 className={classes.cardCategoryFullWhite} style={{ fontWeight: "900", marginTop: "30px"}}>Valor do pacote</h6>
                      <h1 className={classes.cardTitleWhite} style={{ marginTop: "0px" }}>
                        <small>R$</small><strike style={{ color: "red" }}><span style={{ color: "white" }}>{props.user.ofertas[1].valor_credito}</span></strike>
                      </h1>
                      por:
                      <h2 className={classes.cardTitleWhite} style={{ marginTop: "0px" }}>
                        <small>R$</small>{parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}
                      </h2>
                      <p className={classes.cardCategoryFullWhite}>
                        <b>Escolhendo esta opção, <span style={{ fontWeight: "900", fontSize: "20px", color: "#ffffff" }}> você utiliza o valor do saldo que possui</span> e pode transferi-lo para algum amigo(a) ou familiar. <h3 className={classes.primaryColorText}>SEM CUSTO ADICIONAL</h3> </b>
                      </p>
                      <h4>
                        Esta opção inclui:
                      </h4>
                      <ul>                        
                        <li>
                          <Success><Check /></Success><b>{props.user.ofertas[1].diasDisponiveis} dias</b> do Plano <b>FIT Plus</b>
                        </li>
                        <li>
                          <Success><Check /></Success><b>{props.user.ofertas[1].qtde_dias_clicou_personal} dias</b> de <br/>Personal Online +60 anos
                        </li>    
                        {/* <li>
                          <Success><Check /></Success> <b>Transferência</b> para um amigo(a) ou familiar
                        </li>     */}
                        <li>
                          <Success><Check /></Success> Acesso a <b>TODAS</b> <br/>as unidades da rede
                        </li>             
                        <li>
                          <Success><Check /></Success> Poltrona de massagem
                        </li>             
                        <li>
                          <Success><Check /></Success> Direito a levar <b>5 convidados</b> <br/>para treinar<br/><small>de domingo a quinta e feriados</small>
                        </li>             
                        <li>
                          <Success><Check /></Success> Acesso ao Wi-Fi
                        </li>             
                        <li>
                          <Success><Check /></Success> Acompanhamento mensal de nível de gordura e idade corporal
                        </li>             
                        <li>
                          <Success><Check /></Success> FIT Férias
                        </li>                   
                      </ul>
                      <Button color="info" style={{ color: "#272727" }} round onClick={() => { props.setActive(5), props.setOffer(props.user.ofertas[1]) }}>Escolher opção</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                {/* <GridItem xs={12} sm={4} md={4} lg={4}>
                  <Card pricing>
                    <CardBody pricing>
                      <Success>
                        <h6 className={classes.cardCategory}>OFERTA 2</h6>
                      </Success>
                      <h1 className={classes.cardTitle}>
                        <small>R$</small>300
                      </h1>
                      <ul>
                        <li>
                          <Success>
                            <Check />
                          </Success>{" "}
                          <b>7 meses</b> do plano Fit Plus
                        </li>
                        <li>
                          <Success>
                            <Check />
                          </Success>{" "}
                          <b>3 meses</b> de personal online
                        </li>          
                      </ul>
                      <Button color="primary" round onClick={() => { props.setActive(5) }}>
                        Escolher oferta
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>              */}
              </GridContainer>

              
              
            </div>
          </div>
          {/* PRICING CARDS END */}
        </div>

    
      </div>
    </div>
  );
}

SectionCards.propTypes = {  
  setActive: PropTypes.object,
  setOffer: PropTypes.object,
  user: PropTypes.object,
};

