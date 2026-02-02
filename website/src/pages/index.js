import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// This is the "Hero" component (The big blue top section)
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Your Main Title */}
        <Heading as="h1" className="hero__title">
          Appunti di Matematica e Fisica
        </Heading>
        
        {/* Your Subtitle */}
        <p className="hero__subtitle">
          Lezioni interattive, esercizi e simulazioni per il liceo
        </p>
        
        <div className={styles.buttons}>
          {/* Button 1: Fisica */}
          <Link
            className="button button--secondary button--lg"
            to="/fisica"
            style={{ marginRight: '10px' }}>
            Vai a Fisica ⚛️
          </Link>
          
          {/* Button 2: Matematica */}
          <Link
            className="button button--secondary button--lg"
            to="/matematica">
            Vai a Matematica 📐
          </Link>
        </div>
      </div>
    </header>
  );
}

// This is the Main Page component
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Appunti di fisica e matematica per le scuole superiori">
      <HomepageHeader />
      
      <main>
        {/* We are creating a simple welcome section here instead of the 3 columns */}
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h2>Benvenuti!</h2>
          <p style={{ fontSize: '1.2rem' }}>
            Questo sito è pensato per aiutarti a visualizzare i concetti difficili.
            Usa il menu in alto o i bottoni qui sopra per iniziare.
          </p>
        </div>
      </main>
    </Layout>
  );
}