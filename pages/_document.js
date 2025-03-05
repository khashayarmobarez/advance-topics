// document is the uppest level file like index.html
// there is a default value in document
// it is even upper than the _app.js
// the code below is written

import Document, {Html, Head, Main, NextScript} from "next/document";
 
class myDocument extends Document {
    render() {
        return (
            <Html dir="rtl" lang="fa">
                <Head >
                    <meta name="author" content="khashayar mobarez" />
                </Head>
                <body>
                    <h1>a tag in document file </h1>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default myDocument