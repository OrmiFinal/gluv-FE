import axios from "axios";

export const FetchAllTeamData = async ({ page = 1, search = "", category = "", order_by = "", order = "" }) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
        
        const queryString = `?page=${page}&search=${search}&category='${category}'&order_by=${order_by}&order=${order}`;
        const apiUrl = `http://localhost:8000/teams/${queryString}`;

        const res = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log("apiUrl")
        console.log("apiUrl")
        console.log("apiUrl")
        console.log("apiUrl")
        console.log(apiUrl)
        console.log("apiUrl")
        console.log("apiUrl")
        console.log("결과")
        console.log("결과")
        console.log("결과")
        console.log("결과")
        console.log(res);
        // rest of the code...
        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
};





export const FetchTeam = async ({id}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
   
        const res = await axios.get(`http://localhost:8000/teams/${id}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
     
        console.log("FetchTeamsPost");
        console.log("FetchTeamsPost");
        console.log(res.data);
        // rest of the code...
        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
  };

  