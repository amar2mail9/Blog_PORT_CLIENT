"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Typography, Box, createTheme, ThemeProvider } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    text: {
      secondary: grey[700],
    },
  },
});

export default function ContactUs() {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
        {/* Header */}
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
            color="primary"
            gutterBottom
          >
            Contact Me
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className="max-w-xl mx-auto"
          >
            Feel free to reach out for any web development queries,
            collaboration, internship opportunities, or support.
          </Typography>
        </motion.div>

        {/* Contact Info Box */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              color="primary"
              className="text-center"
            >
              Contact Information
            </Typography>

            <Box mb={3} display="flex" alignItems="center">
              <FaEnvelope className="text-blue-600 text-lg mr-4" />
              <Typography variant="body1" color="textSecondary">
                amar47kumar47@gmail.com
              </Typography>
            </Box>

            <Box mb={3} display="flex" alignItems="center">
              <FaPhone className="text-blue-600 text-lg mr-4" />
              <Typography variant="body1" color="textSecondary">
                +91 9608553167
              </Typography>
            </Box>

            <Box mb={3} display="flex" alignItems="center">
              <FaMapMarkerAlt className="text-blue-600 text-lg mr-4" />
              <Typography variant="body1" color="textSecondary">
                Dallupura, Noida, Uttar Pradesh – 110096
              </Typography>
            </Box>

            <Box mb={3} display="flex" alignItems="center">
              <FaLinkedin className="text-blue-600 text-lg mr-4" />
              <Typography variant="body1" color="textSecondary">
                <a
                  href="https://linkedin.com/in/amar96085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-700"
                >
                  linkedin.com/in/amar96085
                </a>
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <FaGithub className="text-blue-600 text-lg mr-4" />
              <Typography variant="body1" color="textSecondary">
                <a
                  href="https://github.com/amar2mail9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-700"
                >
                  github.com/amar2mail9
                </a>
              </Typography>
            </Box>
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
}
