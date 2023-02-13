// import {BrowserRouter } from "react-router-dom";

import React from 'react'

function Form({ userData }) {
  console.log(userData);
  return (
    // <span class="border border-danger">
    <div className='container rounded border border-dark border border-4'>
      <div className=" table-responsive mt-5">
        <table>
          <div>
            <tbody>
              <div>
                <tr>
                  <tr></tr>
                  <td>{userData?.name}</td>
                </tr>
              </div>
              <div className='aa'>
                <tr>
                  <tr></tr>
                  <td>{userData?.email}</td>
                </tr>
              </div>
              <div className='bb'>
                <tr>
                  <tr></tr>
                  <td>{userData?.phone}</td>
                </tr>
              </div>
              <div className='cc'>
                <tr>
                  <tr></tr>
                  <td>{userData?.location}</td>
                </tr>
              </div>
<hr></hr>
              <div className='dd'>
                <tr>
                  <tr><b>EDUCATION:</b></tr>
                </tr>
                <tr>
                  <td>{userData?.education}</td>
                </tr>
              </div>

              <div className='ee'>
                <tr>
                  <tr><b>POSITION OF RESPONSIBLITY:</b></tr>
                </tr>
                <tr>
                  <td>{userData?.positionOfResponsiblity}</td>
                </tr>
              </div>

              <div className='ff'>
                <tr>
                  <tr><b>TRAININGS:</b></tr>
                </tr>
                <tr>
                  <td>{userData?.trainings}</td>
                </tr>
              </div>

              <div className='gg'>
                <tr>
                  <tr><b>PROJECTS:</b></tr>
                </tr>
                <tr>
                  <td>{userData?.projects}</td>
                </tr>
              </div>

              <div className='hh'>
                <tr>
                  <tr><b>SKILLS:</b></tr>
                </tr>
                <tr>
                  <td>{userData?.skills}</td>
                </tr>
              </div>

              <div className='ii'>
                <tr>
                  <tr><b>WORK SAMPLE</b></tr>
                </tr>
                <tr>
                  <td>{userData?.worksample}</td>
                </tr>
              </div>

              <div className='jj'>
                <tr>
                  <tr><b>ADDITIONAL DETAILS</b></tr>
                </tr>
                <tr>
                  <td>{userData?.additionaldetails}</td>
                </tr>
              </div>
            </tbody>
          </div>
        </table>

      </div>
    </div>
    // </span>
  )
}
export default Form;

