import axios from "axios";

export const get_all_bokings = () => {
  return axios.get("/bokings").then(res => {
    console.log(res.data);

    return res.data;
  });
};
export const read_one_bokings = id => {
  return axios.get(`/bokings/${id}`).then(res => {
    console.log(res.data);

    return res.data;
  });
};
export const create_one_boking = data => {
  return axios.post("/bokings", { data }).then(res => {
    console.log(res.data);
    return res;
  });
};

export const edit_one_boking = (id, data) => {
  return axios.put(`/bokings/${id}`, { data }).then(res => {
    console.log(res.data);
  });
};

export const delete_one_boking = id => {
  axios
    .delete(`/bokings/${id}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
