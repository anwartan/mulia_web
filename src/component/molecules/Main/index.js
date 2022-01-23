import React from 'react';
import { Datagrid } from '../../atoms';

export default function Main() {
  return  <div className="content-wrapper">
  
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard v1</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  

  
  <section className="content">
    <div className="container-fluid">
      
      <div className="row">
        <div className="col-lg-3 col-6">
          
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        
        <div className="col-lg-3 col-6">
          
          <div className="small-box bg-success">
            <div className="inner">
              <h3>53<sup style={{fontSize: 20}}>%</sup></h3>

              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        
        <div className="col-lg-3 col-6">
          
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>44</h3>

              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        
        <div className="col-lg-3 col-6">
          
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>

              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        
      </div>
      <div className='row'>
        <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Bordered Table</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{width: 10}}>#</th>
                      <th>Task</th>
                      <th>Progress</th>
                      <th style={{width: 40}}>Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar progress-bar-danger" style={{width: 55}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-danger">55%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-warning" style={{width: 70}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-warning">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar bg-primary" style={{width: 30}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-primary">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <div className="progress progress-xs progress-striped active">
                          <div className="progress-bar bg-success" style={{width: 90}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-success">90%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                </ul>
              </div>
            </div>

        </div>
      
      </div>
      <div className='row'>
        <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Bordered Table</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <Datagrid></Datagrid>
              </div>
              
            </div>

        </div>
      
      </div>
     
    </div>
  </section>
  </div>
  }
