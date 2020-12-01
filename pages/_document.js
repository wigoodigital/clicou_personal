import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";


import BentonSansLight from "assets/fonts/BentonSans-Light.ttf";
import BentonSansBook from "assets/fonts/BentonSans-Book.ttf";
import BentonSansBold from "assets/fonts/BentonSans-Bold.ttf";



class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href={require("assets/img/favicon.png")} />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/apple-icon.png")}
          />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
            

          <style dangerouslySetInnerHTML={{__html: `
              @font-face {
                font-family: 'Benton Sans';
                src: url('https://clicoupersonal.com/fonts/BentonSans-Light.eot?#iefix') format('embedded-opentype'),  url('https://clicoupersonal.com/fonts/BentonSans-Light.otf')  format('opentype'), url('https://clicoupersonal.com/fonts/BentonSans-Light.woff') format('woff'), url('https://clicoupersonal.com/fonts/BentonSans-Light.ttf')  format('truetype'), url('https://clicoupersonal.com/fonts/BentonSans-Light.svg#BentonSans-Light') format('svg');
                font-weight: 300;
                font-style: normal;
              }
              @font-face {
                font-family: 'Benton Sans';
                src: url('https://clicoupersonal.com/fonts/BentonSans-Book.eot?#iefix') format('embedded-opentype'),  url('https://clicoupersonal.com/fonts/BentonSans-Book.otf')  format('opentype'), url('https://clicoupersonal.com/fonts/BentonSans-Book.woff') format('woff'), url('https://clicoupersonal.com/fonts/BentonSans-Book.ttf')  format('truetype'), url('https://clicoupersonal.com/fonts/BentonSans-Book.svg#BentonSans-Book') format('svg');
                font-weight: 500;
                font-style: normal;
              }            
              @font-face {
                font-family: 'Benton Sans';
                src: url('https://clicoupersonal.com/fonts/BentonSans-Bold.eot?#iefix') format('embedded-opentype'),  url('https://clicoupersonal.com/fonts/BentonSans-Bold.otf')  format('opentype'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.woff') format('woff'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.ttf')  format('truetype'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.svg#BentonSans-Bold') format('svg');
                font-weight: 700;
                font-style: normal;
              }
              @font-face {
                font-family: 'Benton Sans';
                src: url('https://clicoupersonal.com/fonts/BentonSans-Bold.eot?#iefix') format('embedded-opentype'),  url('https://clicoupersonal.com/fonts/BentonSans-Bold.otf')  format('opentype'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.woff') format('woff'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.ttf')  format('truetype'), url('https://clicoupersonal.com/fonts/BentonSans-Bold.svg#BentonSans-Bold') format('svg');
                font-weight: 900;
                font-style: normal;
              }

          `}}></style>

          <style jsx>{`

            @font-face {
              font-family: 'Benton Sans';
              src: url(${BentonSansLight}) format('truetype');  
              font-weight: 300;
              font-style: normal;
            }
            @font-face {
              font-family: 'Benton Sans';
              src: url(${BentonSansBook}) format('truetype');              
              font-weight: 500;
              font-style: normal;
            }            
            @font-face {
              font-family: 'Benton Sans';
              src: url(${BentonSansBold}) format('truetype');
              font-weight: 700;
              font-style: normal;
            }
            @font-face {
              font-family: 'Benton Sans';
              src: url(${BentonSansBold}) format('truetype');
              font-weight: 900;
              font-style: normal;
            }
                        

          `}
          </style>
                    

          

        </Head>
        <body>

          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
