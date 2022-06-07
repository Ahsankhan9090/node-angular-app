import React from 'react';

import API from '../../api/api';

class AuditTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audits: [],
      pagination: {
        currentPage: 1,
        perPage: 10,
      },
    };
    this.fetchAudits = this.fetchAudits.bind(this);
    if (process.env.NODE_ENV === 'test') return;
    // Continue initialization for non-test environments
    this.fetchAudits();
  }

  handleChangePage(newPage) {
    const { pagination } = this.state;
    this.setState({
      pagination: {
        ...pagination,
        currentPage: newPage,
      }
    });
  }

  fetchAudits() {
    API.get('/api/audits')
      .then((res) => {
        this.setState({ audits: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderPagination() {
    const { audits, pagination } = this.state;

    const pages = Array.from({ length: audits.length / pagination.perPage }, (_, i) => i + 1);

    return (
      <div>
        {pages.map((page) => {
          const pageStyle = page === pagination.currentPage
            ? {
              background: '#abc'
            }
            : {
              background: '#999'
            };

          return (
            <button
              type="button"
              style={{
                padding: '0.33rem',
                margin: '0.25rem',
                ...pageStyle,
              }}
              onClick={() => this.handleChangePage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    );
  }

  render() {
    const { audits, pagination } = this.state;

    const visibleAudits = audits.slice(
      (pagination.currentPage - 1) * pagination.perPage,
      pagination.currentPage * pagination.perPage,
    );

    const listItems = visibleAudits.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.event}</td>
        <td>{item.status}</td>
        <td>{item.message}</td>
        <td>{item.user_id}</td>
        <td>{item.created_at}</td>
      </tr>
    ));

    return (
      <div className="card">
        <div className="card-body">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Filter
              </span>
            </div>
          </div>

          {this.renderPagination()}

          <table className="table table-hover table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">event</th>
                <th scope="col">status</th>
                <th scope="col">message</th>
                <th scope="col">user</th>
                <th scope="col">created at</th>
              </tr>
            </thead>
            <tbody>
              {listItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AuditTable;
