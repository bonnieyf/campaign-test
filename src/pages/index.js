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
              <form>
                <div className="flex">
                  <div className="flex-item full">
                    <div className="flex">
                      <div className="flex-row">
                          <div>First Name</div>
                          <div><input type="text" /></div>
                      </div>
                      <div className="flex-row">
                          <div>Last Name</div>
                          <div><input type="text" /></div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-row">
                        <div>Email</div>
                        <div><input type="email" /></div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex-item">
                    <div className="flex-row">
                        <div>Company</div>
                        <div><input type="text" /></div>
                    </div>
                    <div className="flex-row">
                        <div>Industry</div>
                        <div>
                          <select>
                            <option value=''>Education</option>
                            <option value=''>Government</option>
                            <option value=''>OEM/Manufacturer</option>
                            <option value=''>Press</option>
                            <option value=''>Corporate</option>
                            <option value=''>Other</option>
                          </select>
                        </div>
                    </div>
                  </div>
                  <div className="flex-item">
                    <div className="flex-row">
                        <div>Country/Region</div>
                        <div><input type="text" /></div>
                    </div>
                  </div>
                </div>
                <br/>

                <div className="flex">
                  <div className="flex-item full">
                      <div className="flex-row">
                          <div><b>Which category are you inquiring about (select all that apply)</b></div>
                          <div>
                            <label><input type="checkbox"></input><span>Bags and Cases</span></label>
                            <label><input type="checkbox"></input><span>Screen Protection</span></label>
                            <label><input type="checkbox"></input><span>Hubs and Charging</span></label>
                            <label><input type="checkbox"></input><span>Cables and Adapters</span></label>
                            <label><input type="checkbox"></input><span>Audio</span></label>
                          </div>
                      </div>
                  </div>
                  <div className="flex-item full">
                      <div className="flex-row">
                          <div><h3>Details of your inquiry</h3></div>
                          <div>
                            <textarea></textarea>
                          </div>
                      </div>
                  </div>
                </div>
              
                <button className="submit" type="submit">Submit</button>
              </form>
          </Container>
        </section>


        <section className="about">
          <Container>
            <h2>About Moshi</h2>
            <p>Founded in California in 2005, Moshi is a purveyor of electronics and accessories for modern life. Our ethos of creating fewer, better products guides our in-house design teams in selecting the finest materials and components to ensure our goods exceed both quality and performance expectations. 
Renowned for a clean and minimalist design aesthetic, along with our commitment to innovation and premium quality, all Moshi products are backed by a 10-year worldwide warranty - an industry promoting a quality-over-quantity mindset across the globe.</p>

            <div className="box white">
              <h3>The Moshi Advantage</h3>
              <div className="icons">
                <div className="icon">
                  <i className="demo-icon">150x150</i>
                  <h3>10-year global warranty</h3>
                  <span>Extend the equipment replacement cycle no matter where in the world employees are located</span>
                </div>
                <div className="icon">
                  <i className="demo-icon">150x150</i>
                  <h3>Quality design and materials</h3>
                  <span>Thoughtfully designed using high quality, eco-friendly materials to enhance form, function, and longevity</span>
                </div>
                <div className="icon">
                  <i className="demo-icon">150x150</i>
                  <h3>Wide-ranging compatibility</h3>
                  <span>We work with leading standards organizations to ensure device compatibility, conformity, and performance</span>
                </div>
              </div>
            </div>


            <div className="box white">
              <h3>Members of</h3>
              <div className="icons small">
                <div className="icon">
                  <i className="demo-icon">150x150</i>
                  <h3>USB Implementers Forum</h3>
                </div>
                <div className="icon">
                  <i className="demo-icon">150x150</i>
                  <h3>VESA (DisplayPort)</h3>
                </div>
                <div className="icon">
                  <i className="demo-icon">150x150</i>
                  <h3>Wireless Power Consortium (Qi)</h3>
                </div>
                <div className="icon">
                  <i className="demo-icon">150x150</i>
                  <h3>Bluetooth SIG</h3>
                </div>
                <div className="icon">
                  <i className="demo-icon">150x150</i>
                  <h3>High Definition Multimedia Interface (HDMI)</h3>
                </div>
              </div>
            </div>
          </Container>
        </section>
    </div>
  )
}

export default IndexPage
