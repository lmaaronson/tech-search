import React from 'react';

class Jobdetail extends React.Component {

  // const Jobdetail = props =>
  constructor() {
    super();
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      // var instances = M.Modal.init(elems, options);
    })
  };

  render() {
    return (
      <div>
        {/* Modal Trigger
        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal Link</a> */}
        {/* Modal Structure */}
        {/* <div id="modal1" className="modal"> */}
        <div id="modal1">
          <div className="modal-content">
            <h4 id="title">Full Stack Web Developer</h4>
            <a href="company_url"><p id="company_name"><strong>Big huge company</strong></p></a>
            <p id="company_city">In a big city<span id="company_state">NY</span></p>
            <p><i>Date posted:<span id="post_date">Jan. 1, 2000</span></i></p>
            <p id="description">With a long description of the job and its requirements, how to apply and so forth.</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Apply</a>
            title: 
description
post_date: 
company_name: 
company_city:    
company_state:  
  apply_url:
  company_url: 
keywords:
          </div>
        </div>
      </div>
    )
  };
};

export default Jobdetail;