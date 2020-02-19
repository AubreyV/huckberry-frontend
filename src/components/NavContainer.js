import React, { Component } from 'react';
import NavLink from './NavLink';

import json_data from '../assets/NavigationData.json';

import '../styles/NavContainer.css';

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      panelData: {},
    };
  }

  componentDidMount() {
    let data = json_data.navigation.items;

    data.map(data => {
      data.active = false;      
    });

    this.setState({ data });
  }

  mouseHandler = (index) => {
    let newData = [ ...this.state.data ];
    newData[index].active = !newData[index].active;
    let panelData = newData[index].active ? newData[index] : {};

    this.setState({ data: newData, panelData: panelData });
  }

  renderJsonData() {
    const fetchedData = this.state.data.map((data, index) => {
      return (
        <NavLink key={index} index={index} {...data} mouseListener={this.mouseHandler }/>
      )
    });

    return fetchedData;
  }

  renderPanel() {
    let { panelData } = this.state;
    let panelView;

    if (Object.getOwnPropertyNames(panelData).length >= 1) {
      panelView = panelData.children.map(child => {
        return (
          <div className="section">
            <div className="title">{child.title}</div>
            { child.children.map(innerChild => {
              return (
                <div className="item">
                  { innerChild.title }
                </div>
              )
            })}
          </div>
        )
      })
    }

    return panelView;
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav-list d-flex">
          <div className="nav-link d-flex">
            { this.renderJsonData() }
          </div>
          
        </div>
        <hr />
        <div className="panel">
          { this.renderPanel() }
        </div>
      </div>
    );
  }
}

export default NavContainer;