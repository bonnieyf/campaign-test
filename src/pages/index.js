import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import kvStyle from '~/pages/homepage.css'

import { Container } from '../utils/styles'

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section>
          <div className="kv kvbg1">
            <div className="center">
            <div className="box">
              <h1>Lounge Q</h1>
              <p>Elegant, ultra-fast wireless charging stand. Now available for ordering.</p>
              <div class="btn">SHOP NOW</div>
            </div>
            </div>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>

        <section>
          <div className="kv kvbg2">
            <div className="center a-left">
            <div className="box">
              <h2>Protect</h2>
              <p>Whether you need extreme drop protection or a wallet case to organize your life, Moshi offers both stylish and functional protection for your device.</p>
              <div class="btn">SHOP NOW</div>
            </div>
            </div>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>


        <section>
          <div className="kv kvbg3">
            <div className="center a-center">
            <div className="box">
              <h2>New MacBook Pro?</h2>
              <p>Our new MacBook Pro accessories offer the ultimate protection and style for your device.</p>
              <div class="btn">SHOP NOW</div>
            </div>
            </div>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>
    </div>
  )
}

export default IndexPage
