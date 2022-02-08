import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Pages from '../Pages/Pages'
import './Item.css'

const Item = () => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div id="hero" class="hero overlay subpage-hero blog-hero">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1>Items</h1>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Items</li>
                        </ol>
                    </div>
                </div>
            </div>

            <main id="main" class="site-main">

                <section class="site-section subpage-site-section section-blog">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="widget search-form">
                                    <h4 class="widget-title">Search the blog</h4>
                                    <form class="form-group">
                                        <input type="text" class="form-control" placeholder="Search" required />
                                        <button class="btn btn-green" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                                    </form>
                                </div>
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
                                            <td>We and selected third parties use cookies or similar technologies for technical purposes and, with your consent</td>
                                            <td>6000</td>
                                            <td>6000</td>
                                        </tr>
                                        <tr>
                                            <td>Dom</td>
                                            <td>for wifi</td>
                                            <td>2</td>
                                            <td>We and selected third parties use cookies or similar technologies for technical purposes and, with your consent</td>
                                            <td>6000</td>
                                            <td>6000</td>
                                        </tr>
                                        <tr>
                                            <td>Dom</td>
                                            <td>for wifi</td>
                                            <td>2</td>
                                            <td>We and selected third parties use cookies or similar technologies for technical purposes and, with your consent</td>
                                            <td>6000</td>
                                            <td>6000</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="ui-pagination mt-50">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <Pages />
                                        </div>
                                    </div>
                                </div>
                            </div>           
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Item;