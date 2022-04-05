import axios from "axios";
import { refreshToken } from "./data-api";

axios.interceptors.request.use(async (req) => {
    const expires = Number(new Date(localStorage.getItem("expires")));
    const current = Number(new Date());

    if (expires <= current) {
        await refreshToken(localStorage.getItem("refreshToken"))
            .then((res) => {
                console.log("Refresh");
                localStorage.setItem("token", res.access.token);
                localStorage.setItem("expires", res.access.expires);
                localStorage.setItem("refreshToken", res.refresh.token);
                req.headers = {
                    ...req.headers,
                    Authorization: `Bearer ${res.access.token}`,
                };

                return req;
            })
            .catch((err) => console.log(err));
    }

    req.headers = {
        ...req.headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return req;
});