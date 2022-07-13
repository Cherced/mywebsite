import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
            <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Camilo Alonso Hernandez Cediel || Portfolio, Welcome I hope your instance will be greatfull! " />
            <title> CHERCED || FrontenDev</title>
            </div>
            </Head>
            <body>
               <Main />
               <div id='myportal' /> 
               <NextScript />
            </body>
         </Html>
      )
   }
}
