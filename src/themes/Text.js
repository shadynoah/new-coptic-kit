import variable from "./../variables/platform";

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    },
    ".underline": {
      textDecorationLine: "underline"
    },
    ".bold": {
      fontWeight: "bold"
    },
    ".black": {
      color: "#000"
    },
    ".grey": {
      color: "#8b8b8b"
    },
    ".margin20": {
      margin: 20
    },
    ".font12": {
      fontSize: 12
    },
    ".font14": {
      fontSize: 14
    },
    ".font16": {
      fontSize: 16
    },
    ".font13": {
      fontSize: 13
    },
    ".red": {
      color: "rgb(255, 0, 0)"
    },
    ".white": {
      color: "#FFF"
    },
    ".modalHeaderTitleEnd": {
      fontSize: 20,
      fontWeight: "bold",
      alignSelf: "flex-end"
    },
    ".modalHeaderTitle": {
      fontSize: 20,
      fontWeight: "bold",
      alignSelf: "center"
    }
  };

  return textTheme;
};
