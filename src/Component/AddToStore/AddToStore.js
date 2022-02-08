import React, { Component } from "react";
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './AddToStore.css'

class AddToStore extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div id="hero" class="hero overlay subpage-hero portfolio-hero">
          <div class="hero-content">
            <div class="hero-text">
              <h1>Add To Store</h1>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">Add To Store</li>
              </ol>
            </div>
          </div>
        </div>

        <main id="main" class="site-main">
          <section class="site-section subpage-site-section section-portfolio">
            <div class="container addItemForm">
              <form>
                <div class="row">
                  <h4>Add Item To Store</h4>
                  <div class="input-group input-group-icon">
                    <input type="text" placeholder="Quantity" />
                    <div class="input-icon">
                      <i class="fa fa-inbox"></i>
                    </div>
                  </div>
                  <div class="input-group input-group-icon">
                    <input type="text" placeholder="Total" />
                    <div class="input-icon">
                      <i class="fa fa-inbox"></i>
                    </div>
                  </div>
                </div>
                  <div class="input-group button input-group-icon">
                      <input value="Add" type="submit" />
                  </div>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default AddToStore;
