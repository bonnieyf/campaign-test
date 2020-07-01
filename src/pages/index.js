import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import kvStyle from '~/pages/homepage.css'

import { Container } from '../utils/styles'

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" keywords={[`designed for microsoft`, `designed for surface`, `surface accessory`, `microsoft surface certified`, `microsoft surface bag`, `microsoft surface case`, `microsoft surface adapter`, `microsoft surface cable`, `microsoft surface screen protector`, `microsoft surface headphones`]} />
        <section>
          <div className="kv kvbg1">
            <div className="center">
            <div className="box">
              <h2>Moshi Designed for Surface Products</h2>
              <h3>Seamlessly Productive, Effortlessly Professional</h3>
            </div>
            </div>
          </div>
        </section>

        <section className="textSection">
          <Container>
            <div className="center">
              <h2>Moshi and Designed for Surface</h2>
              <p>Moshi is proud to be a DFS program partner, working closely with Microsoft to develop stylish and innovative solutions to enhance performance, maximize productivity, and extend device life.</p>

            </div>

            <div className="center-ml">
              <div className="flexbox">
                <div>
                  <div className="hightlight">
                    <h2>Why Choose Designed for Surface?</h2>
                    <p>Products which have received Designed for Surface (DFS) program certification meet strict requirements for compatability, reliability, quality, functionaly, and regulatory compliance. We offer a range of stylish and innovative DFS-certified products to compliment the full suite of Surface devices.</p>
                  </div>
                </div>
                <div>
                  <img className="productImg" src="http://download.moshi.com/Images/upload/Umbra_Surface_Pro_2017/1772/Umbra_for_Surface_Pro_03_45_degree%20.jpg" />
                </div>
              </div>

              <div className="quote">
                <p>Moshi’s partnership with Microsoft’s Designed for Surface Program is invaluable. Their design, material selection and engineering expertise is among the best and the end result is a high-quality product that is going to last. Microsoft looks forward to the growing lineup of Moshi products in the Designed for Surface program.</p>
                <span>Patrick Mendenall – Director, Designed for Surface at Microsoft</span>
              </div>
            </div>
          </Container>
        </section>


        <section className="products">
          <div className="center">
            <h2>Featured Products</h2>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>


        <section className="product-part">
          <div className="center">
            <h2>Bags and Cases</h2>
            <p>Carry and protect Surface devices in style. Our range of backpacks, totes, and briefcases are crafted from quality materials and include thoughtful features stay organized while on the move.</p>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>

        <section className="product-part gray-bg">
          <div className="center">
            <h2>Screen Protection</h2>
            <p>Keep Surface's brilliant touch-sceen display clean and scratch-free with our custom screen protectors. Anti-glare, blue-light filter, and privacy options help to further protect eyes and on-screen data.</p>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>

        <section className="product-part">
          <div className="center">
            <h2>Hubs and Charging</h2>
            <p>Expand the connectivity of Surface devices for a full desktop experience with a USB-C hub and keep phones and other portable devices topped up while working or traveling.</p>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>

        <section className="product-part gray-bg">
          <div className="center">
            <h2>Cables and Adapters</h2>
            <p>Maximize the versatility of Surface devices for presenting, transferring data, and connecting additional devices.</p>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>

        <section className="product-part">
          <div className="center">
            <h2>Audio</h2>
            <p>From joining important video calls to blocking out unwanted distractions on the commute, our range of earphones and headphones are the perfect compliment to a Surface device.</p>
          </div>
          <Container>
            <ProductGrid />
          </Container>
        </section>


        <section className="form gray-bg">
          <div className="center">
            <p>Want to know more about how Moshi DFS solutions can help your business? Complete the form below and one of our salespeople will get in contact with you to discuss your requirements further.</p>
          </div>
          <Container>
          </Container>
        </section>
    </div>
  )
}

export default IndexPage
