import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    {branding.toUpperCase()}
                </Link>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    branding: "My App"
};

Header.protoTypes = {
    branding: PropTypes.object.isRequired
}

export default Header;