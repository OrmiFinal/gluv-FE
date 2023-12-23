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

        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
  };



  export const TeamLeave = async ({id}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
   
        const res = await axios.delete(`http://localhost:8000/teams/${id}/leave/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
  };

  export const TeamDelete = async ({id}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
   
        const res = await axios.delete(`http://localhost:8000/teams/${id}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
  };



export const getTeamMembers = async ({ id }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user?.access_token || "";

    if (!accessToken) {
        console.error("Access token not available");
        return null;
    }

    const apiUrl2 = `http://localhost:8000/teams/${id}/members/`;
    console.log('API URL:', apiUrl2);

    try {
        const res = await axios.get(apiUrl2, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

    console.log(res)
        return res.data;
    } catch (error) {
        console.error("Fetching team members failed:", error.message);
        return null;
    }
};






// 수락하는팀
export const applyToTeam = async ({ id }) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const accessToken = user?.access_token || '';

    if (!accessToken) {
      console.error('Access token not available');
      return null;
    }

    const apiUrl = `http://localhost:8000/teams/${id}/apply/`;

    const res = await axios.post(
      apiUrl,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error('Applying to team failed:', error.message);
    return null;
  }
};




//킥
export const kickTeamMember = async ({ id, userToKickId }) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const accessToken = user?.access_token || '';
    console.log("id, userToKickId")
console.log(id, userToKickId)
    if (!accessToken) {
      console.error('Access token not available');
      return null;
    }

    const apiUrl = `http://localhost:8000/teams/${id}/kick/`;

    const res = await axios.delete(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        user_to_kick_id: userToKickId,
      },
    });

    return res.data;
  } catch (error) {
    console.error('Kicking team member failed:', error.message);
    return null;
  }
};
