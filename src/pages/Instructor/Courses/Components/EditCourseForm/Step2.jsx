import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function Step2({ formik }) {
  const categoryList = [
    "Web Development",
    "Mobile Development",
    "Game Development",
    "Software Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cyber Security",
    "Digital Marketing",
    "Graphic Design",
    "Video Editing",
    "Animation",
    "Photography",
    "Music",
    "Finance",
    "Entrepreneurship",
    "Personal Development",
    "Health & Fitness",
    "Diet & Nutrition",
    "Yoga",
    "Meditation",
    "Spirituality",
    "Academics",
    "Language",
    "Teaching & Academics",
    "Engineering",
    "Science",
    "Humanities",
    "Social Science",
    "Mathematics",
    "Media",
    "Law",
    "Government",
    "Real Estate",
    "Lifestyle",
    "Beauty & Makeup",
    "Travel",
    "Gaming",
    "Home Improvement",
    "Pet Care & Training",
    "Cooking",
    "Crafts & Hobbies",
    "6539600acf642baab5c104bc",
  ];
  const levelList = ["Beginner", "Intermediate", "Expert", "All Levels"];
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1em"
      sx={{
        "& MuiPaper-root": {
          backgroundColor: "red",
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="select-category">Category</InputLabel>
        <Select
          labelId="select-category"
          id="category"
          label="Category"
          onChange={(event) =>
            formik.setFieldValue("category", event.target.value)
          }
          value={formik.values.category}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: (theme) => theme.palette.background.b1,
              },
            },
          }}
        >
          {categoryList.map((category) => (
            <MenuItem value={category} key={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="subcategory"
        label="Subcategory"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        value={formik.values.subcategory}
      />
      <FormControl fullWidth>
        <InputLabel id="select-level">Level</InputLabel>
        <Select
          labelId="select-level"
          id="level"
          label="Level"
          onChange={(event) =>
            formik.setFieldValue("level", event.target.value)
          }
          value={formik.values.level}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: (theme) => theme.palette.background.b1,
              },
            },
          }}
        >
          {levelList.map((level) => (
            <MenuItem value={level} key={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="language"
        label="Language"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        value={formik.values.language}
      />
      <TextField
        id="tags"
        label="Tags"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        value={formik.values.tags}
        placeholder="Separate tags with commas"
      />
    </Box>
  );
}

export default Step2;
