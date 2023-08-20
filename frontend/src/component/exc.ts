// const getAllridesoffersOpen = async () => {
//     try {
//       const url = API_URL + `/rideOffers/getAllridesoffersOpenById`;
//       const response = await doApiGet(url);
//       console.log("response", response);
//       const rides = response.data.ar_rideoffers;
//       console.log(rides);
//       setRidesOffer(rides); // Assign the value to the state variable
//       return rides;
//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to fetch rides");
//     }
//   };


//   const deleteRideRequest = async (idRideDel) => {
//     try {
//       const url = API_URL + `/rideRequests/deleterideRequest/${idRideDel}`;
//       await doApiMethod(url, 'DELETE');
//       setflagRequest(true)

//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to delete rides");
//     }
//   }



//   const doApiForm = async (bodyData) => {
//     let urlRideDetails = API_URL + "/rideDetails/addRideDetails"
//     let urlRideOffers = API_URL + "/rideOffers/addRideOffer"
//     try {
//       let { data } = await doApiMethod(urlRideDetails, "POST", bodyData);

//       let current_user = JSON.parse(localStorage.getItem(CURRENT_USER))
//       let resp = await doApiMethod(urlRideOffers, "POST", { user_id: current_user._id, rideDetails_id: data._id })

//       setInterval(() =>{
//         window.location.reload();
//       }, 10000)

//     }
//     catch (err) {
//       console.log(err.response);
//       alert("There is problem");

//     }
//   }








