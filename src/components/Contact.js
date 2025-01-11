import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    content: "lasannavodya@gmail.com",
    link: "mailto:lasannavodya@gmail.com",
  },
  {
    icon: FaPhone,
    title: "Phone",
    content: "+94 (76) 057-9866",
    link: "tel:+94760579866",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    content: "Colombo, Sri Lanka",
    link: "https://goo.gl/maps/123",
  },
];

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    to_name: "Lasan",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email.trim()) newErrors.from_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.from_email))
      newErrors.from_email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitMessage("");
      setSubmitStatus("");

      try {
        // Replace these with your actual EmailJS credentials
        const result = await emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );

        if (result.text === "OK") {
          setSubmitStatus("success");
          setSubmitMessage(
            "Thank you for your message! I will get back to you soon."
          );
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
            to_name: "Lasan",
          });
        }
      } catch (error) {
        setSubmitStatus("error");
        setSubmitMessage("Oops! Something went wrong. Please try again later.");
        console.error("EmailJS Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      {/* Background Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-pattern"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative mx-auto px-6"
      >
        <motion.div
          variants={fadeIn("up")}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ContactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              variants={fadeIn("up")}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mb-4 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
                >
                  <info.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {info.content}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up")}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Map or Image Section */}
            <div className="relative h-full min-h-[300px] bg-gray-100 dark:bg-gray-600">
              <motion.img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
                alt="Contact"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            </div>

            {/* Contact Form */}
            <div className="p-8">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeIn("up")} className="relative">
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.from_name
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 dark:border-gray-600 focus:ring-blue-200"
                    }`}
                  />
                  {errors.from_name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.from_name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={fadeIn("up")} className="relative">
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.from_email
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 dark:border-gray-600 focus:ring-blue-200"
                    }`}
                  />
                  {errors.from_email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.from_email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={fadeIn("up")} className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.message
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 dark:border-gray-600 focus:ring-blue-200"
                    }`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                <input type="hidden" name="to_name" value={formData.to_name} />

                <motion.button
                  variants={fadeIn("up")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-300"
                      : "bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-300"
                  }`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
