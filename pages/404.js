/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SectionFooter from "pages-sections/footer/SectionFooter.js";

import errorPageStyle from "assets/jss/nextjs-material-kit-pro/pages/errorPageStyles.js";

import image from "assets/img/clint-mckoy.jpg";

const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        // brand="NextJS Material Kit PRO"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundColor: "#272727",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>404</h1>
              <h2 className={classes.subTitle}>Página não encontrada :(</h2>
              <h4 className={classes.description}>
                Recarregue a página e tente novamente
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
      <SectionFooter/> 
    </div>
  );
}
