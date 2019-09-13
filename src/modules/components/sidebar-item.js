// import React, { PureComponent } from "react";
// import { View } from "react-native";
// import { Body, CheckBox, Text, ListItem } from "native-base";
// import { findAll } from "highlight-words-core";

// export class SidebarItem extends PureComponent {
//   highlightStyle = { backgroundColor: "yellow" };

//   render() {
//     const chunks = findAll({
//       textToHighlight: this.props.item.text,
//       searchWords: [this.props.filter]
//     });
//     return (
//       <Text
//         style={{
//           fontSize: this.props.fontSizeOfText,
//           backgroundColor: this.props.backgroundColor,
//           textDecorationLine: this.props.textDecorationLine,
//           textAlign: "justify"
//         }}
//       >
//         {chunks.map((chunk, index) => {
//           const text = this.props.item.text.substr(
//             chunk.start,
//             chunk.end - chunk.start
//           );

//           return !chunk.highlight ? (
//             text
//           ) : (
//             <Text key={index} style={chunk.highlight && this.highlightStyle}>
//               {text}
//             </Text>
//           );
//         })}
//       </Text>
//     );
//   }
// }
