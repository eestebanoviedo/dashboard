import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawerPerfil: {
    width: "400px",
    height: "auto",
  },

  avatarPerfil: {
    marginTop: "50px",
    width: "auto",
    heigth: "auto",
  },
  large: {
    width: "100px",
    height: "100px",
    marginLeft: "160px",
    marginBottom: "20px",
  },
  divInputsDisabled: {
    width: "400px",
    marginTop: "30px",
    alignItems: "center",
    textAlign: "center",
    marginLeft: "10px",
  },
  inputDisabled: {
    width: "350px",
    alignItems: "center",
  },
  textPerfil: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: " bold",
  },
  btnPerfil: {
    margin: theme.spacing(3, 0, 2, 7),
    width: "316px",
    height: "36px",
    borderRadius: "4px",
  },
  dialogPass: {
    width: "auto",
    height: "auto",
  },

  dialogContent: {
    // width: "450px",
  },
  // inputDialog: {
  //   width: "377px",
  //   height: "56px",
  //   borderRadius: "4px",
  // },
  // dialogActions: {
  //   width: "450px",
  // },
  dialogTitte: {
    // margin: "10px",
  },
  btnCansel: {
    background: "transparent",
    margin: "10px",
    width: "99px",
    height: "36px",
    fontWeight: "500",
    justifyContent: "flex",
    // borderShadow: "0px",
  },
  btnDialog: {
    margin: "10px",
    width: "99px",
    height: "36px",
    fontWeight: "500",
    justifyContent: "flex",
    background: "#3E984C",
    "&:hover": {
      // backgroundColor: "#3D996090",
      // color: "green",
    },
  },
  formControl: {
    // width: "50px",
  },
}));
export default useStyles;
