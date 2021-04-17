import * as React from 'react';

interface IHeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<IHeroProps> = ({ title, subtitle }) => (
  <section className='hero is-link mt-5'>
    <div className='hero-body'>
      <p className='title'>{title}</p>
      <p className='subtitle'>{subtitle}</p>
    </div>
  </section>
);

export default Hero;
