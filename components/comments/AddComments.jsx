"use client";
import { TextareaAutosize, TextField, Button, Grid } from "@mui/material";
import React from "react";

const AddComments = () => {
  return (
    <section className="p-6 bg-white shadow-lg rounded-lg max-w-xl mx-auto border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-600">
        Post Your Comments
      </h2>

      <form>
        <Grid container spacing={3}>
          {/* Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="name"
              label="Your Name"
              required
              variant="outlined"
              fullWidth
              className="bg-gray-50 "
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Your Email"
              required
              variant="outlined"
              fullWidth
              className="bg-gray-50"
            />
          </Grid>

          {/* Comment Field */}
          <Grid item xs={12}>
            <TextareaAutosize
              id="comment"
              minRows={4}
              placeholder="Write your comment here..."
              required
              className="w-full p-2 bg-gray-50 border border-gray-400 rounded-md outline-none"
              style={{ color: "#D5006C" }} // gray text color
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary" // gray button color
              type="submit"
              fullWidth
              className="py-2 mt-4"
            >
              Submit Comment
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};

export default AddComments;
