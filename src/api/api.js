import axios from "axios";


const server = axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    baseURL: "http://127.0.0.1:8000"
})

//user
const login = async (data) => await server.post("/accounts/login", data);
const register = async (data) => await server.post("/accounts/register", data);
const postUserInfo = async (data) => await server.post("/accounts/userinfo",data);
const getUserInfo = async () => await server.get("/accounts/userinfo");


//rooms
const getRoomsList = async () => await server.get("/rooms/List");

module.exports = {login, register, postUserInfo, getUserInfo}
