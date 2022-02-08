import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header id="masthead" class="site-header">
                <nav id="primary-navigation" class="site-navigation">
                    <div class="container">

                        <div class="navbar-header">

                            <a class="site-title"><span>Agency</span>Perfect</a>

                        </div>

                        <div class="collapse navbar-collapse" id="agency-navbar-collapse">

                            <ul class="nav navbar-nav navbar-right">

                                <li class="home"><Link to="/" data-toggle="dropdown">Home</Link></li>
                                <li><Link class="item" to="/items">Items</Link></li>
                                <li><Link class="addItem" to="/addItem">Add Item</Link></li>
                                <li><Link class="store"  to="/store">Store</Link></li>
                                <li><Link class="addToStore" to="/addToStore">Add To Store</Link></li>

                            </ul>

                        </div>

                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;