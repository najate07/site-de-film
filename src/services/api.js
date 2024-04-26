import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjNlZDEzMTUwOGU0ODI2ZWY0NWUxMDdlZWVjYmY1NCIsInN1YiI6IjY1NzgyZTc2ZTkzZTk1MjE5MmNjOTEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vx5cdewJPcqwo4jvJkF_k00RQuKON7HC4tJOH5dPrP8";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})