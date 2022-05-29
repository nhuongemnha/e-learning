import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Grid, Typography } from "@material-ui/core";
import Course from "../../components/Course";
import axios from "axios";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Typography component="h1" align="center" variant="h3">
          Danh sách khóa học
        </Typography>
        <Container maxWidth="lg">
          <Grid spacing={3} container>
            {this.props.courses.map((item) => {
              return (
                <Grid key={item.maKhoaHoc} item xs={12} sm={6} md={4}>
                  <Course item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }

  // async await: biến asynchronous thành synchronous

  async componentDidMount() {
    // side-effect : những hành động thay đổi 1 state nằm ngoài scope của func
    try {
      const res = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
        method: "GET",
        params: {
          MaNhom: "GP01",
        },
      });
      this.props.dispatch({ type: "SET_COURSES", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.course.courses,
  };
};

export default connect(mapStateToProps)(Home);
