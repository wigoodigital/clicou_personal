/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";

import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import seloCadeado from "assets/img/selo-cadeado.png";
import siteSeguro from "assets/img/site-seguro.png";
import selossl from "assets/img/selossl.png";
import lestencrypt from "assets/img/letsencrypt_White.png";
import imgCard from "assets/img/img_card_new.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/footer/footerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionFooter() {
  const classes = useStyles();
  return (
      
      <GridContainer className={classes.content} justify="center" >        
        <GridItem xs={12} sm={12} md={8}>
          <Footer
            theme="dark"
            className={classes.footer}
            content={
              <div className={classNames(classes.pullCenter, classes.copyRight)}>
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a
                  href="https://www.justfit.com.br"
                  target="_blank"
                >
                  Clicou Personal
                </a>{" "}
                - Just Fit Participações em Empreendimentos S.A - 16.738.149/0007-06

              </div>
            }
          >
            <GridContainer justify="center">
              <GridItem xs={6} sm={2} md={2}>
                <div className={classes.right}> 
                  <div className={classes.imgContainer}>                  
                    <img src={lestencrypt} alt="..." className={classes.img} />
                  </div>
                </div>
              </GridItem>
              <GridItem xs={6} sm={2} md={2}>
                <div className={classes.left}> 
                  <div className={classes.imgContainer} style={{ marginTop: "20px" }}>                  
                    <img src={selossl} alt="..." className={classes.img} />
                  </div>
                </div>
              </GridItem>  
              <GridItem xs={12} sm={4} md={4}>
                <div className={classes.left } style={{ width: "100%" }}> 
                  <div style={{ marginTop: "35px" }}>                  
                    <img src={imgCard} alt="..." style={{ width: "100%" }} />                    
                  </div>
                </div>
              </GridItem>  
         
              {/* <GridItem xs={12} sm={4} md={4} className={classes.centerPhone}>
                <h5 className={classes.titleFooter}>Ficou com alguma dúvida?</h5>
              
                <a target="_blank" href="https://justfit.com.br/fale-conosco/">
                  <Button round color="secondary" size="lg">
                    Fale Conosco
                  </Button>
                </a>
                

                <ul className={classes.socialButtons}>      
                  <li>
                    
                      <Button justIcon simple href="https://www.facebook.com/justfitoficial" target="_blank" color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                    
                  </li>      
                  <li>
                    
                      <Button justIcon simple href="https://www.youtube.com/justfitoficial" target="_blank" color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                    
                  </li>
                  <li>
                    
                      <Button justIcon simple href="https://www.instagram.com/justfitoficial/" target="_blank"  color="instagram">
                        <i className="fab fa-instagram" />
                      </Button>
                    
                  </li>
                </ul>      
              </GridItem> */}
            </GridContainer>
          </Footer>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
