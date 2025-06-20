"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Typography, Box, createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

// Custom blue theme
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

export default function ContactUs() {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6">
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
          <Typography variant="body1" color="textSecondary" paragraph>
            I'm happy to connect! Feel free to reach out for any web development
            queries, collaboration, or support.
          </Typography>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              color="primary"
            >
              Contact Information
            </Typography>

            <Box mb={2} display="flex" alignItems="center">
              <FaEnvelope className="text-blue-500 mr-4" />
              <Typography variant="body1" color="textSecondary">
                amar47kumar47@gmail.com
              </Typography>
            </Box>

            <Box mb={2} display="flex" alignItems="center">
              <FaPhone className="text-blue-500 mr-4" />
              <Typography variant="body1" color="textSecondary">
                +91 9608553167
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <FaMapMarkerAlt className="text-blue-500 mr-4" />
              <Typography variant="body1" color="textSecondary">
                Dallupura, Noida, 110096
              </Typography>
            </Box>
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
}
