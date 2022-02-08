import React, { Component } from "react";
import './AddItem.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

class AddItem extends Component {
  render() {
    return (
      <>
      <div className="header">
          <Header />
      </div>
        <div id="hero" class="hero overlay subpage-hero portfolio-hero">
          <div class="hero-content">
            <div class="hero-text">
              <h1>Add Item</h1>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">Add Item</li>
              </ol>
            </div>
          </div>
        </div>

        <main id="main" class="site-main">
          <section class="site-section subpage-site-section section-portfolio">
              <div class="container addItemForm">
                <form>
                  <div class="row">
                    <h4>Add Item</h4>
                    <div class="input-group input-group-icon">
                      <input type="text" placeholder="Instrument" />
                      <div class="input-icon">
                        <i class="fa fa-inbox"></i>
                      </div>
                    </div>
                    <div class="input-group input-group-icon">
                      <input type="text" placeholder="Quantity" />
                      <div class="input-icon">
                        <i class="fa fa-inbox"></i>
                      </div>
                    </div>
                    <div class="input-group input-group-icon">
                      <input type="text" placeholder="Price" />
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
                    <div class="input-group input-group-icon">
                      <textarea placeholder="Used purpose" name="" id="" cols="30" rows="5"></textarea>
                      <div class="input-icon">
                        <i class="fa fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-half">
                      <h4>Date of Birth</h4>
                      <div class="input-group">
                        <div class="col-third">
                          <input type="text" placeholder="DD" />
                        </div>
                        <div class="col-third">
                          <input type="text" placeholder="MM" />
                        </div>
                        <div class="col-third">
                          <input type="text" placeholder="YYYY" />
                        </div>
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
        <Footer/>
      </>
    );
  }
}

export default AddItem;
