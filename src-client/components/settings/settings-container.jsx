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
                <a href="#billing" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                  Billing
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body tab-content">
              <div className="tab-pane active" id="profile">
                <h6>YOUR PROFILE INFORMATION</h6>
                <form>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      aria-describedby="fullNameHelp"
                      placeholder="Enter your full name"
                    />
                    <small id="fullNameHelp" className="form-text text-muted">Your name may appear around here where you are mentioned. You can change or remove it at any time.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter your location" />
                  </div>
                  <div className="form-group small text-muted">
                    All of the fields on this page are optional and can be deleted at any time,
                    and by filling them out, you&apos;re giving us consent to share this data
                    wherever your user profile appears.
                  </div>
                </form>

                <hr />
                <div className="mt-3">
                  <h6>NOTIFICATION SETTINGS</h6>
                  <form>
                    <div className="form-group mb-0">
                      <ul className="list-group list-group-sm">
                        <li className="list-group-item has-icon">
                          Daily email updates
                          <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                            <label className="custom-control-label" htmlFor="customSwitch1" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
