const axios = require("axios").default;

// axios.<method> will now provide autocomplete and parameter typings

const run = async () => {
  const client = axios.create({
    baseURL: "http://localhost:4000",
  });

  // Get records

  const res = await client.get("/users/me/records");

  console.log(res.statusText);
  console.log(res.data);

  // Get recordsID
  // const getResID = await client.get(
  //   "/users/me/records/625ecea9a51e478891beaa8d"
  // );

  // console.log(getResID.status);
  // console.log(getResID.statusText);
  // console.log(getResID.data);


  // const prostResponse = await client.post("/users/me/records", {
  //   activity: [
  //     {
  //       id: "out-02",
  //       name: "basketball",
  //       src: "./img/icon/basketball.png",
  //       type: "outdoor",
  //     },
  //   ],
  //   actDate: "2022-01-16",
  //   quantity: "500 cal",
  //   duration: "1:00:00 hrs",
  // });

  // console.log(prostResponse.status);
  // console.log(prostResponse.data);

  //   Get / users/me/records?activity[0]=basketball
  // const getRes = await client.get("/users/me/records", {
  //   params: { activity: [] },
  // });
  // console.log(getRes);
  //   put / users/me/records?activity[0]=basketball

  // const putRes = await client.put("/users/me/records/625ecea9a51e478891beaa8d", {
  //   activity: [
  //     {
  //       id: "out-02",
  //       name: "basketball",
  //       src: "./img/icon/basketball.png",
  //       type: "outdoor",
  //     },
  //   ],
  //   actDate: "2022-01-16",
  //   quantity: "500 cal",
  //   duration: "1:00:00 hrs",
  //   timestamp: "2022-04-19T15:00:57.059Z"
  // });
  // console.log(putRes.status);
  // console.log(putRes.data);
  // const delRec = await client.delete("/users/me/records/625ee6a7d6a337af39d0e539")
  // console.log(delRec.statusText)
  // console.log(delRec.data)
};

run()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
