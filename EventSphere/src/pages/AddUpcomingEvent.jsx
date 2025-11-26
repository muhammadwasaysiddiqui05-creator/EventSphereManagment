// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';

// const AddUpcomingEvent = () => {

//   const addEvent = async (e) => {
//     e.preventDefault();

//     let title = document.getElementById("title").value;
//     let description = document.getElementById("desc").value;
//     let date = document.getElementById("date").value;
//     let time = document.getElementById("time").value;
//     let location = document.getElementById("location").value;
//     let organizer = document.getElementById("organizer").value;
//     let category = document.getElementById("category").value;
//     let images = document.getElementById("image");

//     if(title === "" || description === "" || date === "" || time === "" || location === "" || organizer === "" || category === "" || images.files.length === 0){
//       alert("Please fill all fields and upload an image!");
//       return;
//     }

//     let formData = new FormData();
//     for(let i = 0; i < images.files.length; i++){
//       formData.append("image", images.files[i]);
//     }

//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("date", date);
//     formData.append("time", time);
//     formData.append("location", location);
//     formData.append("organizer", organizer);
//     formData.append("category", category);

//     try {
//       let res = await axios.post("http://localhost:3000/events/add", formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       if(res){
//         alert("Event added successfully!");
//         console.log(res.data);
//       }
//     } catch (error) {
//       console.error("Failed to add event", error);
//       alert("Failed to add event!");
//     }
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Add Upcoming Event</h2>
//       <div className="row">
//         <div className="col-md-12">
//           <form encType='multipart/form-data' onSubmit={addEvent}>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="title" placeholder="Event Title" />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" id="desc" placeholder="Description"></textarea>
//             </div>
//             <div className="mb-3">
//               <input type="date" className="form-control" id="date" placeholder="Date" />
//             </div>
//             <div className="mb-3">
//               <input type="time" className="form-control" id="time" placeholder="Time" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="location" placeholder="Location" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="organizer" placeholder="Organizer" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="category" placeholder="Category" />
//             </div>
//             <div className="mb-3">
//               <input type="file" className="form-control" id="image" multiple placeholder="Upload Image(s)" />
//             </div>
//             <button type='submit' className="btn btn-danger w-100">Add Event</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddUpcomingEvent;



// import React from 'react';
// import axios from 'axios';

// const AddFAQ = () => {

//   const addFAQ = async (e) => {
//     e.preventDefault();

//     let question = document.getElementById("question").value;
//     let answer = document.getElementById("answer").value;
//     let category = document.getElementById("category").value;
//     let image = document.getElementById("image");

//     if(question === "" || answer === ""){
//       alert("Please fill at least question and answer!");
//       return;
//     }

//     let formData = new FormData();

//     if(image.files.length > 0){
//       formData.append("image", image.files[0]); // single image optional
//     }

//     formData.append("question", question);
//     formData.append("answer", answer);
//     formData.append("category", category);

//     try {
//       let res = await axios.post("http://localhost:3000/faqs/add", formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       if(res){
//         alert("FAQ added successfully!");
//         console.log(res.data);
//       }
//     } catch (error) {
//       console.error("Failed to add FAQ", error);
//       alert("Failed to add FAQ!");
//     }
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Add a New FAQ</h2>
//       <div className="row">
//         <div className="col-md-12">
//           <form encType='multipart/form-data' onSubmit={addFAQ}>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="question" placeholder="Question" />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" id="answer" placeholder="Answer"></textarea>
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="category" placeholder="Category (optional)" />
//             </div>
//             <div className="mb-3">
//               <input type="file" className="form-control" id="image" placeholder="Upload Image (optional)" />
//             </div>
//             <button type='submit' className="btn btn-danger w-100">Add FAQ</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddFAQ;



//import React from 'react';
// import axios from 'axios';

// const AddOngoingEvent = () => {

//   const addOngoingEvent = async (e) => {
//     e.preventDefault();

//     let title = document.getElementById("title").value;
//     let description = document.getElementById("desc").value;
//     let startDate = document.getElementById("startDate").value;
//     let startTime = document.getElementById("startTime").value;
//     let endDate = document.getElementById("endDate").value;
//     let endTime = document.getElementById("endTime").value;
//     let location = document.getElementById("location").value;
//     let organizer = document.getElementById("organizer").value;
//     let category = document.getElementById("category").value;
//     let images = document.getElementById("image");

//     if(title === "" || description === "" || startDate === "" || startTime === "" || endDate === "" || endTime === "" || location === "" || organizer === "" || category === "" || images.files.length === 0){
//       alert("Please fill all fields and upload at least one image!");
//       return;
//     }

//     let formData = new FormData();

//     for(let i = 0; i < images.files.length; i++){
//       formData.append("image", images.files[i]);
//     }

//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("startDate", startDate);
//     formData.append("startTime", startTime);
//     formData.append("endDate", endDate);
//     formData.append("endTime", endTime);
//     formData.append("location", location);
//     formData.append("organizer", organizer);
//     formData.append("category", category);

//     try {
//       let res = await axios.post("http://localhost:3000/ongoing/add", formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       if(res){
//         alert("Ongoing Event added successfully!");
//         console.log(res.data);
//       }
//     } catch (error) {
//       console.error("Failed to add ongoing event", error);
//       alert("Failed to add ongoing event!");
//     }
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Add Ongoing Event</h2>
//       <div className="row">
//         <div className="col-md-12">
//           <form encType='multipart/form-data' onSubmit={addOngoingEvent}>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="title" placeholder="Event Title" />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" id="desc" placeholder="Description"></textarea>
//             </div>
//             <div className="mb-3">
//               <label>Start Date & Time</label>
//               <input type="date" className="form-control mb-2" id="startDate" />
//               <input type="time" className="form-control" id="startTime" />
//             </div>
//             <div className="mb-3">
//               <label>End Date & Time</label>
//               <input type="date" className="form-control mb-2" id="endDate" />
//               <input type="time" className="form-control" id="endTime" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="location" placeholder="Location" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="organizer" placeholder="Organizer/Host" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="category" placeholder="Category" />
//             </div>
//             <div className="mb-3">
//               <input type="file" className="form-control" id="image" multiple placeholder="Upload Image(s)" />
//             </div>
//             <button type='submit' className="btn btn-danger w-100">Add Ongoing Event</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddOngoingEvent;



// import React from 'react';
// import axios from 'axios';

// const AddTrendingEvent = () => {

//   const addTrendingEvent = async (e) => {
//     e.preventDefault();

//     let title = document.getElementById("title").value;
//     let description = document.getElementById("desc").value;
//     let startDate = document.getElementById("startDate").value;
//     let startTime = document.getElementById("startTime").value;
//     let endDate = document.getElementById("endDate").value;
//     let endTime = document.getElementById("endTime").value;
//     let location = document.getElementById("location").value;
//     let organizer = document.getElementById("organizer").value;
//     let category = document.getElementById("category").value;
//     let popularity = document.getElementById("popularity").value;
//     let images = document.getElementById("image");

//     if(title === "" || description === "" || startDate === "" || startTime === "" || location === "" || organizer === "" || category === "" || images.files.length === 0){
//       alert("Please fill all required fields and upload at least one image!");
//       return;
//     }

//     let formData = new FormData();

//     for(let i = 0; i < images.files.length; i++){
//       formData.append("image", images.files[i]);
//     }

//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("startDate", startDate);
//     formData.append("startTime", startTime);
//     formData.append("endDate", endDate);
//     formData.append("endTime", endTime);
//     formData.append("location", location);
//     formData.append("organizer", organizer);
//     formData.append("category", category);
//     formData.append("popularity", popularity);

//     try {
//       let res = await axios.post("http://localhost:3000/trending/add", formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       if(res){
//         alert("Trending Event added successfully!");
//         console.log(res.data);
//       }
//     } catch (error) {
//       console.error("Failed to add trending event", error);
//       alert("Failed to add trending event!");
//     }
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Add Trending Event</h2>
//       <div className="row">
//         <div className="col-md-12">
//           <form encType='multipart/form-data' onSubmit={addTrendingEvent}>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="title" placeholder="Event Title" />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" id="desc" placeholder="Description"></textarea>
//             </div>
//             <div className="mb-3">
//               <label>Start Date & Time</label>
//               <input type="date" className="form-control mb-2" id="startDate" />
//               <input type="time" className="form-control" id="startTime" />
//             </div>
//             <div className="mb-3">
//               <label>End Date & Time (optional)</label>
//               <input type="date" className="form-control mb-2" id="endDate" />
//               <input type="time" className="form-control" id="endTime" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="location" placeholder="Location" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="organizer" placeholder="Organizer/Host" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="category" placeholder="Category" />
//             </div>
//             <div className="mb-3">
//               <input type="number" className="form-control" id="popularity" placeholder="Popularity Score" min={0} />
//             </div>
//             <div className="mb-3">
//               <input type="file" className="form-control" id="image" multiple placeholder="Upload Image(s)" />
//             </div>
//             <button type='submit' className="btn btn-danger w-100">Add Trending Event</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddTrendingEvent;







// import React from 'react';
// import axios from 'axios';

// const AddPastEvent = () => {

//   const addPastEvent = async (e) => {
//     e.preventDefault();

//     let title = document.getElementById("title").value;
//     let description = document.getElementById("desc").value;
//     let startDate = document.getElementById("startDate").value;
//     let startTime = document.getElementById("startTime").value;
//     let endDate = document.getElementById("endDate").value;
//     let endTime = document.getElementById("endTime").value;
//     let location = document.getElementById("location").value;
//     let organizer = document.getElementById("organizer").value;
//     let category = document.getElementById("category").value;
//     let summary = document.getElementById("summary").value;
//     let images = document.getElementById("image");

//     if(title === "" || description === "" || startDate === "" || startTime === "" || endDate === "" || endTime === "" || location === "" || organizer === "" || category === "" || images.files.length === 0){
//       alert("Please fill all required fields and upload at least one image!");
//       return;
//     }

//     let formData = new FormData();

//     for(let i = 0; i < images.files.length; i++){
//       formData.append("image", images.files[i]);
//     }

//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("startDate", startDate);
//     formData.append("startTime", startTime);
//     formData.append("endDate", endDate);
//     formData.append("endTime", endTime);
//     formData.append("location", location);
//     formData.append("organizer", organizer);
//     formData.append("category", category);
//     formData.append("summary", summary);

//     try {
//       let res = await axios.post("http://localhost:3000/past/add", formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       if(res){
//         alert("Past Event added successfully!");
//         console.log(res.data);
//       }
//     } catch (error) {
//       console.error("Failed to add past event", error);
//       alert("Failed to add past event!");
//     }
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Add Past Event</h2>
//       <div className="row">
//         <div className="col-md-12">
//           <form encType='multipart/form-data' onSubmit={addPastEvent}>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="title" placeholder="Event Title" />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" id="desc" placeholder="Description"></textarea>
//             </div>
//             <div className="mb-3">
//               <label>Start Date & Time</label>
//               <input type="date" className="form-control mb-2" id="startDate" />
//               <input type="time" className="form-control" id="startTime" />
//             </div>
//             <div className="mb-3">
//               <label>End Date & Time</label>
//               <input type="date" className="form-control mb-2" id="endDate" />
//               <input type="time" className="form-control" id="endTime" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="location" placeholder="Location" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="organizer" placeholder="Organizer/Host" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="category" placeholder="Category" />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" id="summary" placeholder="Event Summary / Highlights (optional)"></textarea>
//             </div>
//             <div className="mb-3">
//               <input type="file" className="form-control" id="image" multiple placeholder="Upload Image(s)" />
//             </div>
//             <button type='submit' className="btn btn-danger w-100">Add Past Event</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddPastEvent;






// import React from 'react';
// import axios from 'axios';

// const AddEventSchedule = () => {

//   const addSchedule = async (e) => {
//     e.preventDefault();

//     let eventName = document.getElementById("eventName").value;
//     let date = document.getElementById("date").value;
//     let startTime = document.getElementById("startTime").value;
//     let endTime = document.getElementById("endTime").value;
//     let activity = document.getElementById("activity").value;
//     let speaker = document.getElementById("speaker").value;
//     let location = document.getElementById("location").value;
//     let notes = document.getElementById("notes").value;

//     if(eventName === "" || date === "" || startTime === "" || endTime === "" || activity === "" || location === ""){
//       alert("Please fill all required fields!");
//       return;
//     }

//     let scheduleData = {
//       eventName,
//       date,
//       startTime,
//       endTime,
//       activity,
//       speaker,
//       location,
//       notes
//     };

//     try {
//       let res = await axios.post("http://localhost:3000/schedule/add", scheduleData);
//       if(res){
//         alert("Event schedule added successfully!");
//         console.log(res.data);
//       }
//     } catch (error) {
//       console.error("Failed to add schedule", error);
//       alert("Failed to add schedule!");
//     }
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Add Event Schedule</h2>
//       <div className="row">
//         <div className="col-md-12">
//           <form onSubmit={addSchedule}>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="eventName" placeholder="Event Name" />
//             </div>
//             <div className="mb-3">
//               <input type="date" className="form-control" id="date" />
//             </div>
//             <div className="mb-3">
//               <label>Start Time</label>
//               <input type="time" className="form-control" id="startTime" />
//             </div>
//             <div className="mb-3">
//               <label>End Time</label>
//               <input type="time" className="form-control" id="endTime" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="activity" placeholder="Activity / Session Name" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="speaker" placeholder="Speaker / Host" />
//             </div>
//             <div className="mb-3">
//               <input type="text" className="form-control" id="location" placeholder="Location / Room" />
//             </div>
//             <div className="mb-3">
//               <textarea className="form-control" id="notes" placeholder="Notes (optional)"></textarea>
//             </div>
//             <button type='submit' className="btn btn-danger w-100">Add Schedule</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddEventSchedule;
