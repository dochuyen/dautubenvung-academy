import { Table } from "antd";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const TableVideo = () => {
  const [listCourses, setListCourses] = React.useState([]);
  const [curCourse, setCurCourse] = React.useState(19);
  const [listVideos, setListVideos] = React.useState([]);
  let courseId = useParams().courseId;
  const getListCourses = async (courseId: any) => {
    let listCoursesResponse = await axios.get(
      `${process.env.REACT_APP_PORT}/api/courses_detail/${courseId}`
    );
    let listCourses = listCoursesResponse.data;
    console.log("listCourses: ", listCourses);
    let listVideos = listCourses?.videos?.map((item: any, index: any) => {
      return {
        stt: index + 1,
        video: item,
        videoId: item?.split(" ")[1],
      };
    });
    console.log("listVideos: ", listVideos);
    setListCourses(listCourses);
    setListVideos(listVideos);
  };

  useEffect(() => {
    getListCourses(courseId);
  }, [courseId]);
  const columns = [
    { title: "stt", dataIndex: "stt", key: "stt" },
    { title: "Video", dataIndex: "video", key: "video" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item: any) => {
        console.log("item: ", item);
        let path = `/video/${courseId}/${item.videoId}`;
        return <Link to={path}>Xem video</Link>;
      },
    },
  ];
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        background: "#fff",
        marginTop: "80px",
        marginLeft: "15px",
        marginRight: "15px",
      }}
    >
      <button
        style={{
          background: "#1877F2",
          margin: "10px 0",
          border: "none",
          color: "#fff",
          fontWeight: 600,
          padding: "10px 30px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          window.history.back();
        }}
      >
        Back
      </button>
      <Table columns={columns} dataSource={listVideos} />
    </div>
  );
};
