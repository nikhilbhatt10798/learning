const express = required("express");

const app = express();
const userRoutes = required("./routes/userRoutes");

const mongoose = required('mongoose');
mongoose.connect('mongodb://localhost:2701/users');