import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo1.svg';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        {/* #98f2f8 */}
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            style={{ width: '40px', color: '#388287' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
              <Link to="/" className="nav-link nav-item">HAHA</Link>
              {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
         
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>

            <Link to="/" className="nav-item ml-auto">
              <ButtonContainer>
                <i className="fas fa-list-ul" />
              </ButtonContainer>
            </Link>

            <Link to="/cart" className="nav-item ml-auto">
              <ButtonContainer>
                <i className="fas fa-shopping-bag" />
              </ButtonContainer>
            </Link>

            <Link to="/user" className="nav-item ml-auto">
              <ButtonContainer>
                <i className="fas fa-user-alt" />
              </ButtonContainer>
            </Link>
          </form>
        </div>
        
      </NavWrapper>
      
    );
  }
}

const NavWrapper = styled.nav`
  background: #fff;
  .nav-link {
    font-size: 1.3rem;
    color: var(--mainDark) !important;
    text-transform: capitalize;
    &:hover {
      color: var(--lightBlue) !important;
    }
  }
  .navbar-toggler-icon {
    color: var(--mainProduct);
  }
`;
