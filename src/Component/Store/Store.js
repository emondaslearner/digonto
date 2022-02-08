import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

class Store extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div id="hero" class="hero overlay subpage-hero blog-hero">
          <div class="hero-content">
            <div class="hero-text">
              <h1>Store</h1>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">Store</li>
              </ol>
            </div>
          </div>
        </div>

        <main id="main" class="site-main">
          <section class="site-section subpage-site-section section-blog">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <table class="styled-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Instrument</th>
                        <th>Quantity</th>
                        <th>Purpose</th>
                        <th>Take</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dom</td>
                        <td>for wifi</td>
                        <td>2</td>
                        <td>
                          We and selected third parties use cookies or similar
                          technologies for technical purposes and, with your
                          consent
                        </td>
                        <td>6000</td>
                        <td>6000</td>
                      </tr>
                      <tr>
                        <td>Dom</td>
                        <td>for wifi</td>
                        <td>2</td>
                        <td>
                          We and selected third parties use cookies or similar
                          technologies for technical purposes and, with your
                          consent
                        </td>
                        <td>6000</td>
                        <td>6000</td>
                      </tr>
                      <tr>
                        <td>Dom</td>
                        <td>for wifi</td>
                        <td>2</td>
                        <td>
                          We and selected third parties use cookies or similar
                          technologies for technical purposes and, with your
                          consent
                        </td>
                        <td>6000</td>
                        <td>6000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Store;
