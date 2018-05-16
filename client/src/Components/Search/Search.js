import React, { Component } from 'react'
import "./Search.css";
// import Suggestions from './Suggestions'

import axios from 'axios'

const { API_KEY } = process.env

//UPDATE API
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
  state = {
    query: '',
    results: []
  }


  
  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }
   
    handleInputChange = () => {
      this.setState({
        query: this.search.value
      })
    }
   
    render() {
      return (
        <form><p>{this.state.query}</p>
          <input
            placeholder="Job Title"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            onKeyUp="getInfo()"
          />
            {/* <input
            placeholder="Location"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          /> */}
           {/* <Suggestions results={this.state.results} /> */}


<div>
      <a className="active" href="#home">Home</a>
      <a href="#backend">BackEnd</a>
      <a href="#frontend">FrontEnd</a>
      <a href="#fullstack">Full Stack</a>
      <a href="#profile">User Profile</a>
      <button className="submit" />
     <p> 
      <input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Job Title"/>
      <input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Location"/>
      </p>
      
    
    <table id="myTable">
      <tr className="header">
        <th>Name</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Berglunds snabbkop</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Koniglich Essen</td>
        <td>Germany</td>
      </tr>
    </table>
    
    
    
    </div>

        </form>
      )
    }
   }

export default Search;