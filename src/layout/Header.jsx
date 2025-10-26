import React from 'react'

function Header() {

  return(
    <header id="header" className="hero">

      {/* Background image {responsive} */}
      <picture className="hero__bg" aria-hidden="true">
        <source
          type="image/avif"
          srcSet="/images/misty-forest-sm.avif 800w,
                  /images/misty-forest-md.avif 1200w,
                  /images/misty-forest-lg.avif 1600w,
                  /images/misty-forest-xl.avif 2400w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/images/misty-forest-sm.webp 800w,
                  /images/misty-forest-md.webp 1200w,
                  /images/misty-forest-lg.webp 1600w,
                  /images/misty-forest-xl.webp 2400w"
          sizes="100vw"
        />
        <img 
          className="hero__bg-img"
          src="/images/misty-forest-md.jpg"
          srcSet="/images/misty-forest-sm.jpg 800w,
                  /images/misty-forest-md.jpg 1200w,
                  /images/misty-forest-lg.jpg 1600w,
                  /images/misty-forest-xl.jpg 2400w"
          sizes="100vw"
          alt=""
          width="2400" height="1000"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Overlay tint so text reads well */}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__fog hero__fog--far" aria-hidden="true"></div>
      <div className="hero__fog hero__fog--near" aria-hidden="true"></div>
      <section className="hero__inner">
        <div className="hero__brand">
          <a href="/"><picture className="hero__logo">
            <source type="image/avif" srcSet="/images/logo-img-lg.avif 1x" />
            <source type="image/webp" srcSet="/images/logo-img-lg.webp 1x" />
            <img className="hero__logo-img" src="/images/logo-img-lg.png" alt="" width="600" height="600" />                
          </picture></a>
          <div className="hero__title-tag">
            <h1><a href="/" className="hero__title">Cryptid Quest</a></h1>
            <h3 className="hero__tagline">Search the Unknown</h3>
          </div>
        </div>
        <nav className="hero__nav">
          <ul className="flex-center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/bestiary">Bestiary</a></li>
            <li><a href="/crypt">The Crypt</a></li>
            <li><a href="/submit-cta">Submit a Sighting</a></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;