import React from 'react';


export default class Progressbar extends React.Component {
  render() {

    return (
      <div className="row" id="progressbar">
      <ul className="list-inline pbr" >
          <li><p>Java</p></li>
          <li><div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="200" id="jpb"> 55% </div></li>
        </ul>
        <ul className="list-inline pbr" >
            <li><p>Python</p></li>
            <li><div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="200" id="ppb"> 95% </div></li>
          </ul>
          <ul className="list-inline pbr" >
              <li><p>C++</p></li>
              <li><div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="200" id="ccpb"> 35% </div></li>
            </ul>
            <ul className="list-inline pbr" >
                <li><p>Calculus</p></li>
                <li><div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="200" id="cpb"> 25% </div></li>
              </ul>
      </div>     );
  }
}
