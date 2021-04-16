// import React from "react";
// import { useSelector } from "react-redux";
// import "./App.css";
// import Colors from "./components/colors";
// import DetailsThumb from "./components/DetailsThumb";
// const App = () => {
//   const products = useSelector((state) => state.products);
//   products: [
//     {
//       id: "3",
//       title: "2019 Lexus i350 Front Bumper",
//       price: 500,
//       images: [
//         "https://s.aolcdn.com/commerce/autodata/images/CAD00LES191A021001.jpg",
//         "https://i.pinimg.com/originals/03/ff/78/03ff78f04457600102a05b6a166dbcfd.png",
//         "https://i.ebayimg.com/images/g/zbgAAOSwlGZfRiE3/s-l400.jpg",
//       ],
//       condition: "good",
//       location: { borough: "bronx" },
//       colors: ["red", "blue", "green", "purple", "orange"],
//       productDescription: "in good condition. Like New.",
//     },
//   ],
//   index: 0,
// };
//   myRef = React.createRef();
//   handleTab = (index) => {
//     this.setState({ index: index });
//     const images = this.myRef.current.children;
//     for (let i = 0; i < images.length; i++) {
//       images[i].className = images[i].className.replace("active", "");
//     }
//     images[index].className = "active";
//   };
//   componentDidMount() {
//     const { index } = this.state;
//     this.myRef.current.children[index].className = "active";
//   }
//   render() {
//     const { products, index } = this.state;
//     return (
//       <div className="app">
//         {products.map((item) => (
//           <div className="details" key={item.id}>
//             <div className="big-img">
//               <img src={item.images[index]} alt="" />
//             </div>
//             <div className="box">
//               <div className="row">
//                 <h2>{item.title}</h2>
//                 <span>${item.price}</span>
//               </div>
//               <div className="colors">
//                 {item.colors.map((color, index) => (
//                   <button
//                     style={{ background: color }}
//                     key={index}
//                     onClick={() => this.handleTab(color)}
//                   ></button>
//                 ))}
//               </div>
//               <p style={{ fontFamily: "Verdana" }}>
//                 Description: {item.productDescription}
//               </p>
//               <p style={{ fontFamily: "Verdana" }}>
//                 Condition: {item.condition}
//               </p>
//               {/*<DetailsThumb
//                 images={item.images}
//                 tab={this.handleTab}
//                 myRef={this.myRef}
//               />*/}
//               <div className="thumb" ref={this.myRef}>
//                 {item.images.map((img, index) => (
//                   <img
//                     src={img}
//                     alt=""
//                     key={index}
//                     onClick={() => this.handleTab(index)}
//                   />
//                 ))}
//               </div>
//               <button className="cart"> Add to cart </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// };
// export default App;
