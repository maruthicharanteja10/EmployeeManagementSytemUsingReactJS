import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
        <footer className="footer  text-dark text-center py-3">
                <div className="container">
                    <span>© {new Date().getFullYear()} Employee Management System. All Rights Reserved.</span>
                </div>
            </footer>
    );
  }
}

export default FooterComponent;
