import { Link } from "@mui/material";
import CustomTable from "../../../../../Components/CustomTable/CustomTable";
import CourseMenu from "../CourseMenu/CourseMenu";

const CourseName = ({ name, url }) => {
  return (
    <Link to={url} sx={{ fontWeight: "600" }}>
      {name}
    </Link>
  );
};
const headCells = [
  {
    id: "courseName",
    disablePadding: false,
    label: "Course Name",
  },
  {
    id: "videoCount",
    disablePadding: false,
    label: "Video Count",
  },
  {
    id: "studentCount",
    disablePadding: false,
    label: "Student Count",
  },
  {
    id: "courseRating",
    disablePadding: false,
    label: "Course Rating",
  },
  {
    id: "courseStatus",
    disablePadding: false,
    label: "Course Status",
  },
  {
    id: "settings",
    disablePadding: false,
    label: "",
    disableSorting: true,
  },
];
function CoursesList({
  coursesList,
  loadingCoursesList,
  errorCoursesList,
  refetchCoursesList,
}) {
  console.log(coursesList);
  function createData(
    id,
    courseName,
    videoCount,
    studentCount,
    courseRating,
    courseStatus
  ) {
    return {
      id,
      courseName: (
        <CourseName name={courseName} url={`/instructor/courses/${id}`} />
      ),
      videoCount,
      studentCount,
      courseRating,
      courseStatus,
      settings: <CourseMenu key={id} id={id} setRefetch={refetchCoursesList} />,
    };
  }
  const rows = coursesList?.courses?.map((_, index, arr) => {
    const item = arr[arr.length - index - 1];
    return createData(
      item._id,
      item.title,
      item.videoCount || 0,
      item.studentCount || 0,
      item.rating || 0,
      item.status || "Draft"
    );
  });
  return (
    <CustomTable
      title={"Courses List"}
      rows={rows || []}
      headCells={headCells}
      showCheckbox={false}
      loading={loadingCoursesList}
      error={errorCoursesList}
    />
  );
}

export default CoursesList;
