import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center">
                    <a href="/" className="navbar-brand  ">
                      <h3 > Employee Management System</h3> 
                    </a>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;
