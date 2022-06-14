import React from 'react';

export default function SettingsContainer() {
  return (
    <div className="container">

      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item"><a href="http://example.com">User</a></li>
          <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
        </ol>
      </nav>

      <div className="row gutters-sm">
        <div className="col-md-4 d-none d-md-block">
          <div className="card">
            <div className="card-body">
              <nav className="nav flex-column nav-pills nav-gap-y-1">
                <a href="#profile" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded active">
                  Profile Information
                </a>
                <a href="#account" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                  Account Settings
                </a>
                <a href="#security" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                  Security
                </a>
                <a href="#notification" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                  Notification
                </a>
                <a href="#billing" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                  Billing
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header border-bottom mb-3 d-flex d-md-none">
              <ul className="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
                <li className="nav-item">
                  <a href="#profile" data-toggle="tab" className="nav-link has-icon active">1</a>
                </li>
                <li className="nav-item">
                  <a href="#account" data-toggle="tab" className="nav-link has-icon">2</a>
                </li>
                <li className="nav-item">
                  <a href="#security" data-toggle="tab" className="nav-link has-icon">3</a>
                </li>
                <li className="nav-item">
                  <a href="#notification" data-toggle="tab" className="nav-link has-icon">4</a>
                </li>
                <li className="nav-item">
                  <a href="#billing" data-toggle="tab" className="nav-link has-icon">5</a>
                </li>
              </ul>
            </div>
            <div className="card-body tab-content">
              <div className="tab-pane active" id="profile">
                <h6>YOUR PROFILE INFORMATION</h6>
                <hr />
                <form>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Enter your fullname" value="Kenneth Valdez" />
                    <small id="fullNameHelp" className="form-text text-muted">Your name may appear around here where you are mentioned. You can change or remove it at any time.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter your location" value="Bay Area, San Francisco, CA" />
                  </div>
                  <div className="form-group small text-muted">
                    All of the fields on this page are optional and can be deleted at any time,
                    and by filling them out, you&apos;re giving us consent to share this data
                    wherever your user profile appears.
                  </div>
                  <button type="button" className="btn btn-primary">Update Profile</button>
                </form>
              </div>
              <div className="tab-pane" id="account">
                <h6>ACCOUNT SETTINGS</h6>
                <hr />
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter your username" value="kennethvaldez" />
                    <small id="usernameHelp" className="form-text text-muted">After changing your username, your old username becomes available for anyone else to claim.</small>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label className="d-block text-danger">Delete Account</label>
                    <p className="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain.</p>
                  </div>
                  <button className="btn btn-danger" type="button">Delete Account</button>
                </form>
              </div>
              <div className="tab-pane" id="security">
                <h6>SECURITY SETTINGS</h6>
                <hr />
                <form>
                  <div className="form-group">
                    <label className="d-block">Change Password</label>
                    <input type="text" className="form-control" placeholder="Enter your old password" />
                    <input type="text" className="form-control mt-1" placeholder="New password" />
                    <input type="text" className="form-control mt-1" placeholder="Confirm new password" />
                  </div>
                </form>
                <hr />
                <form>
                  <div className="form-group">
                    <label className="d-block">Two Factor Authentication</label>
                    <button className="btn btn-info" type="button">Enable two-factor authentication</button>
                    <p className="small text-muted mt-2">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>
                  </div>
                </form>
                <hr />
                <form>
                  <div className="form-group mb-0">
                    <label className="d-block">Sessions</label>
                    <p className="font-size-sm text-secondary">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.</p>
                    <ul className="list-group list-group-sm">
                      <li className="list-group-item has-icon">
                        <div>
                          <h6 className="mb-0">San Francisco City 190.24.335.55</h6>
                          <small className="text-muted">Your current session seen in United States</small>
                        </div>
                        <button className="btn btn-light btn-sm ml-auto" type="button">More info</button>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="tab-pane" id="notification">
                <h6>NOTIFICATION SETTINGS</h6>
                <hr />
                <form>
                  <div className="form-group">
                    <label className="d-block mb-0">Security Alerts</label>
                    <div className="small text-muted mb-3">Receive security alert notifications via email</div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" checked="" />
                      <label className="custom-control-label" htmlFor="customCheck1">Email each time a vulnerability is found</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck2" checked="" />
                      <label className="custom-control-label" htmlFor="customCheck2">Email a digest summary of vulnerability</label>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <label className="d-block">SMS Notifications</label>
                    <ul className="list-group list-group-sm">
                      <li className="list-group-item has-icon">
                        Comments
                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                          <input type="checkbox" className="custom-control-input" id="customSwitch1" checked="" />
                          <label className="custom-control-label" htmlFor="customSwitch1" />
                        </div>
                      </li>
                      <li className="list-group-item has-icon">
                        Updates From People
                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                          <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                          <label className="custom-control-label" htmlFor="customSwitch2" />
                        </div>
                      </li>
                      <li className="list-group-item has-icon">
                        Reminders
                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                          <input type="checkbox" className="custom-control-input" id="customSwitch3" checked="" />
                          <label className="custom-control-label" htmlFor="customSwitch3" />
                        </div>
                      </li>
                      <li className="list-group-item has-icon">
                        Events
                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                          <input type="checkbox" className="custom-control-input" id="customSwitch4" checked="" />
                          <label className="custom-control-label" htmlFor="customSwitch4" />
                        </div>
                      </li>
                      <li className="list-group-item has-icon">
                        Pages You Follow
                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                          <input type="checkbox" className="custom-control-input" id="customSwitch5" />
                          <label className="custom-control-label" htmlFor="customSwitch5" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="tab-pane" id="billing">
                <h6>BILLING SETTINGS</h6>
                <hr />
                <form>
                  <div className="form-group">
                    <label className="d-block mb-0">Payment Method</label>
                    <div className="small text-muted mb-3">You have not added a payment method</div>
                    <button className="btn btn-info" type="button">Add Payment Method</button>
                  </div>
                  <div className="form-group mb-0">
                    <label className="d-block">Payment History</label>
                    <div className="border border-gray-500 bg-gray-200 p-3 text-center font-size-sm">You have not made any payment.</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
