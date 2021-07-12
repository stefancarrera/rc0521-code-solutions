// import React from 'react';

// export default class ValidatedInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange() {
//     this.setState({ value: event.target.value });
//   }

//   render() {
//     if ({ this.state.value.length < 8 } && { this.state.value.length > 1 }) {
//       return (
//         <div>
//         <form>
//           <label htmlFor="password">
//             Password:
//           </label>
//           <input name="password" id="password" type="text" value={this.state.value} onChange={this.handleChange}></input>
//           <span>ICON</span>
//           <p>Your password is too short.</p>
//         </form>
//       </div>
//     );
//   } if else ({ this.state.value.length = 0}) {
//     return (
//       <div>
//       <form>
//         <label htmlFor="password">
//           Password:
//         </label>
//         <input name="password" id="password" type="text" value={this.state.value} onChange={this.handleChange}></input>
//         <span>ICON</span>
//         <p>A password is requried</p>
//       </form>
//     </div>
//     );
//   } else {
//     return (
//       <div>
//       <form>
//         <label htmlFor="password">
//           Password:
//         </label>
//         <input name="password" id="password" type="text" value={this.state.value} onChange={this.handleChange}></input>
//         <span>ICON</span>
//         <p></p>
//       </form>
//     </div>
//     );
//   }
// }

// }
