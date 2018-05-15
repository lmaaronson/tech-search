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
            <h4>Full Stack Web Developer</h4>
            <p><strong>Big huge company</strong></p>
            <p><i>In a big city</i></p>
            <p>With a long description of the job and its requirements, how to apply and so forth.</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Apply</a>
          </div>
        </div>
      </div>
    )
  };
};

export default Jobdetail;