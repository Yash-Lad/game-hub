import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '6714341480eb43b6981c00d01fdf256b'
    }
})