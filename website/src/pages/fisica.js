import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

// This data defines your buttons. You can add more later!
const PhysicsTopics = [
  {
    title: 'Meccanica',
    image: '🏎️', // You can use an image URL here instead of emoji
    description: 'Il movimento, le forze e l\'energia. Le basi della fisica classica.',
    link: '/docs/fisica/meccanica',
    year: 'Biennio',
  },
  {
    title: 'Termodinamica',
    image: '🔥',
    description: 'Calore, temperatura e i principi che governano l\'energia termica.',
    link: '/docs/fisica/02-Termodinamica',
    year: '3° Anno',
  },
  {
    title: 'Onde e Ottica',
    image: '🌈',
    description: 'Il suono, la luce e i fenomeni ondulatori.',
    link: '/docs/fisica/02-Onde-e-Ottica',
    year: '3° Anno',
  },
  {
    title: 'Elettromagnetismo',
    image: '⚡',
    description: 'Cariche elettriche, magneti e le equazioni di Maxwell.',
    link: '/docs/fisica/04-Elettromagnetismo',
    year: '4° Anno',
  },
  {
    title: 'Fisica Moderna',
    image: '⚛️',
    description: 'Relatività, quantistica e fisica nucleare.',
    link: '/docs/fisica/05-Fisica-Moderna',
    year: '5° Anno',
  },
];

function TopicCard({title, image, description, link, year}) {
  return (
    <div className="col col--4" style={{marginBottom: '20px'}}>
      <Link to={link} style={{textDecoration: 'none'}}>
        <div className="card h-100" style={{
            transition: 'transform 0.2s', 
            height: '100%',
            border: '1px solid var(--ifm-color-primary-lightest)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div className="card__header">
            <div style={{fontSize: '3rem', marginBottom: '10px'}}>{image}</div>
            <span className="badge badge--secondary">{year}</span>
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <button className="button button--primary button--block">Vai al corso</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function FisicaPage() {
  return (
    <Layout title="Fisica" description="Programma di Fisica del Liceo Scientifico">
      {/* Hero Section */}
      <div className="hero hero--primary" style={{textAlign: 'center', padding: '4rem 0'}}>
        <div className="container">
          <h1 className="hero__title">Laboratorio di Fisica</h1>
          <p className="hero__subtitle">
            Dalla mela di Newton ai buchi neri. Scegli un argomento per iniziare.
          </p>
        </div>
      </div>

      {/* Topics Grid */}
      <main className="container margin-vert--xl">
        <div className="row">
          {PhysicsTopics.map((props, idx) => (
            <TopicCard key={idx} {...props} />
          ))}
        </div>
      </main>
    </Layout>
  );
}