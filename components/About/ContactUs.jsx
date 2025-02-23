"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import { Button, TextField, Typography, Box } from "@mui/material"; // Import Material-UI components

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send an email
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          color="textPrimary"
          gutterBottom
        >
          Contact Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We'd love to hear from you! Reach out with your questions, feedback,
          or suggestions.
        </Typography>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            color="textPrimary"
          >
            Send us a message
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
                inputProps={{ style: { padding: "12px" } }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
                inputProps={{ style: { padding: "12px" } }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
                multiline
                rows={4}
                inputProps={{ style: { padding: "12px" } }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: "12px" }}
            >
              Send
            </Button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            color="textPrimary"
          >
            Contact Information
          </Typography>
          <Box mb={2} display="flex" alignItems="center">
            <FaEnvelope className="text-blue-500 mr-4" />
            <Typography variant="body1" color="textSecondary">
              contact@polytechub.com
            </Typography>
          </Box>
          <Box mb={2} display="flex" alignItems="center">
            <FaPhone className="text-green-500 mr-4" />
            <Typography variant="body1" color="textSecondary">
              +1 (555) 123-4567
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <FaMapMarkerAlt className="text-red-500 mr-4" />
            <Typography variant="body1" color="textSecondary">
              123 Tech Street, Innovation City
            </Typography>
          </Box>
        </motion.div>
      </div>
    </div>
  );
}
