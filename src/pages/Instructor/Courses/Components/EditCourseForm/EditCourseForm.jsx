import { Box, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { BaseApi } from "../../../../../util/BaseApi";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Information",
  "Target group",
  "Promotion",
  "Price",
  "Publish",
];

function EditCourseForm({ course }) {
  const [formState, setFormState] = React.useState({
    loading: false,
    error: false,
  });
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const formik = useFormik({
    initialValues: {
      title: course.title,
      subtitle: course.subtitle || "",
      language: course.language || "",
      category: course.category || "",
      subcategory: course.subcategory || "",
      level: course.level || "",
      price: course.price || "",
      discount: course.discount || "",
      description: course.description || "",
      tags: course.tags || "",
      promotionImage: course.coverImageUrl || "",
      promotionVideo: course.promotionalVideoUrl || "",
      status: course.status || "draft",
    },
    onSubmit: (values) => {
      setFormState({ loading: true, error: false });
      axios
        .patch(BaseApi + `/course/${course._id}`, values, {
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setFormState({ loading: false, error: false });
        })
        .catch((err) => {
          setFormState({ loading: false, error: true });
        });
    },
  });
  const completed = [
    formik.values.title !== "" &&
      formik.values.subtitle !== "" &&
      formik.values.description !== "",
    formik.values.category !== "" &&
      formik.values.subcategory !== "" &&
      formik.values.level !== "" &&
      formik.values.language !== "" &&
      formik.values.tags !== "",
    formik.values.promotionImage !== "" && formik.values.promotionVideo !== "",
    formik.values.price !== "" && formik.values.discount !== "",
    formik.values.status === "published",
  ];

  const tabsList = [
    <Step1 formik={formik} />,
    <Step2 formik={formik} />,
    <Step3 formik={formik} />,
    <Step4 formik={formik} />,
    <Step5 formik={formik} status={course.status} />,
  ];

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          backgroundColor: (theme) => theme.palette.background.b1,
          px: "1em",
          py: "3em",
          borderRadius: "8px",
        }}
      >
        <Box width={{ xs: "100%", sm: "90%" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            sx={{ flexWrap: "wrap", rowGap: "1em", pb: "3em" }}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton
                  color="inherit"
                  onClick={() => setActiveStep(index)}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          {tabsList[activeStep]}
          {activeStep !== 4 && (
            <Box display="flex" justifyContent="flex-end" gap="1em" pt="2em">
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/instructor/courses/" + course._id)}
              >
                Cancel
              </Button>
              <LoadingButton
                variant="contained"
                type="submit"
                loading={formState.loading}
              >
                Save
              </LoadingButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default EditCourseForm;
