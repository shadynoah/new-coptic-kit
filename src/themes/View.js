import variable from "./../variables/platform";

export default (variables = variable) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    ".stagedesigner": {
      flex: 5,
      backgroundColor: "rgba(255,255,255,0.85)",
      marginLeft: 10
    },
    ".stagedesignerPhone": {
      flex: 5,
      backgroundColor: "rgba(255,255,255,0.85)"
      // marginLeft: 10
    },
    ".sidebar": {
      flex: 3,
      backgroundColor: "rgba(255,255,255,0.85)"
    },
    ".sidebarPhone": {
      flex: 3,
      backgroundColor: "white"
    },
    ".underline": {
      height: 1
    },
    ".grey": {
      backgroundColor: "rgba(139, 139, 139,0.5)"
    },
    ".black": {
      backgroundColor: "rgba(139, 139, 139,0.5)"
    },
    ".marginTop": {
      marginTop: 10
    },
    ".marginTop2": {
      marginTop: 2
    },
    ".marginTop30": {
      marginTop: 30
    },
    ".marginLeft": {
      marginLeft: 10
    },
    ".marginLeft2": {
      marginLeft: 2
    },
    ".rowReverse": {
      flex: 1,
      flexDirection: "row-reverse"
    },
    ".row": {
      flex: 1,
      flexDirection: "row"
    },
    ".negativeMarginTop100": {
      marginTop: -100
    },
    ".outerModal": {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#00000080",
      alignItems: "center"
    },
    ".outerModalFull": {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      backgroundColor: "#00000080",
      alignItems: "flex-start"
    },
    ".innerModalBox400": {
      width: 400,
      height: 400,
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 5
    },
    ".innerModalBox300": {
      width: 300,
      height: 300,
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 5
    },
    ".innerModalBoxRectangle": {
      width: 400,
      height: 250,
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 5
    },
    ".innerModalList": {
      width: 300,
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 5
    },
    ".innerModalListWithSearch": {
      width: 600,
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 5
    },
    ".innerModalEditContent ": {
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 5
    },
    ".spaceBetween": {
      justifyContent: "space-between"
    },
    ".notelist": {
      padding: 10,
      backgroundColor: "rgba(236,240,241)"
    },
    ".modalContent": {
      padding: 10,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)"
    },
    ".modalContentLeft": {
      padding: 10,
      backgroundColor: "white",
      justifyContent: "center",
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)"
    },
    ".modalHeaderReversed": {
      flexDirection: "row-reverse",
      justifyContent: "center"
    },
    ".modalHeader": {
      flexDirection: "row",
      justifyContent: "center"
    },
    ".modalFooterButtons": {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      padding: 30,
      alignItems: "center",
      justifyContent: "center"
    },
    ".marginTop20": {
      marginTop: 20
    },
    ".modalFooterContainer": {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30
    },
    ".modalContentTransparent": {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)"
    },
    ".sharePhoneModalFooterContainer": {
      // flexDirection: "column",
      justifyContent: "center",
      marginTop: 30
    },

  };

  return viewTheme;
};
