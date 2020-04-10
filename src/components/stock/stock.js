import React, { Component } from "react";
import * as actions from "./../../actions/stock.action";
import { connect } from "react-redux";

// import { imageUrl } from "./../../constants";
// import { Link } from "react-router-dom";
import _ from "lodash";
// import Moment from "react-moment";
// import NumberFormat from "react-number-format";
// import "./stock.css";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

class Stock extends Component {
  componentDidMount() {
    this.debounceSearch = _.debounce(this.props.getProductByKeyword, 500);
    this.props.getProducts();
  }

  // ตัวแปร Golbal ไม่ต้องมี var let comst สามารถใส่ลงไปได้เลย
  dummyData = [
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
    { c1: "xxx", c2: "xxx", c3: "xxx", c4: "xxx", c5: "xxx" },
  ];

  // ทำการผูกข้อมูลเพื่อนำไปแสดง
  createRows = () => {
    const { result } = this.props.stockReducer;

    // ใช้ condition if เพื่อที่จะตรวจเช็คว่า โปรแกรมมีค่าว่างหรือไม่(์Null) แต่ถ้าไม่เป็นค้าว่างก็ไม่ต้อง Return อะไรออกมานั้นเอง
    if (result != null) {
      return result.map((item) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.image}</td>
          <td>{item.price}</td>
          <td>{item.stock}</td>
        </tr>
      ));
    }
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Stock
            <small>advanced tables</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#">Tables</a>
            </li>
            <li className="active">Data tables</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Hover Data Table</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                      </tr>
                    </thead>
                    {/* tbody */}
                    <tbody>{this.createRows()}</tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

const mapStateToProps = ({ stockReducer }) => ({
  stockReducer,
});

const mapDispatchToProps = {
  // spreading
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
