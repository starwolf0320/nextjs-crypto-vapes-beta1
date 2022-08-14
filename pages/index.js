import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import NavigationBar from "@components/NavigationBar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crypto Vapes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Here is an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
