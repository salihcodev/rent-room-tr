// // BASIC IMPORTS::==>
// import React from "react";
// import { AppContext } from "../../context";

// // COMPONENTS IMPORTS::==>

// // UTILITIES IMPORTS::==>
// import { Link } from "react-router-dom";

// // COMPONENT IMPORTS::==>
// import "./Testimonials.component.style.scss";
// class testimonials extends React.Component {
//   static contextType = AppContext;
//   render() {
//     const value = this.context;
//     const { TestimonialsData, isSmall } = value;
//     const smallScreen = isSmall;

//     return (
//       <section className="testimonials">
//         <div className="container">
//           <div className="carouselWrapper ">
//             <h2 className="heading">Our clients opinion</h2>

//             {TestimonialsData.map((testi) => (
//               <div className="testimonial">
//                 <div className="sengleTestiWrapper" key={testi.id}>
//                   <div className="author">
//                     <div className="row">
//                       <div className="col-2">
//                         <div className="avatarWrapper">
//                           <div className="authorAvatar">
//                             <img
//                               src={`https://randomuser.me/api/portraits/men/${testi.id}.jpg`}
//                               alt={testi.authorAvatar}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-10">
//                         <div className="authorNameAndText">
//                           <h5 className="authorName">{testi.authorName}</h5>
//                           <div className="text">{testi.text}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default testimonials;
