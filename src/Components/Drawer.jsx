import React from "react";

import { Drawer, Avatar } from "@material-ui/core";
import Text from "./Atoms/Texts/Text";
import Input from "./Atoms/Inputs/Input";
import Btn from "./Atoms/Buttons/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import useStyles from "./StyleDrawer";
import { useFormik } from "formik";
import { FormControl } from "@material-ui/core";

const validationSchema = yup.object({
  password: yup
    .string()
    .min(6)
    .when("oldPassword", (oldPassword, field) =>
      oldPassword ? field.required() : field
    ),
  passwordConfirmation: yup
    .string()
    .when("password", (password, field) =>
      password ? field.required().oneOf([yup.ref("password")]) : field
    ),
});

const DrawerBox = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = useStyles();

  return (
    <Drawer className={classes.drawerPerfil} {...props}>
      <div className={classes.avatarPerfil}>
        <Avatar className={classes.large} />
        <Text
          className={classes.textPerfil}
          txt={"Gianfranco Depaoli Gampel"}
        />
      </div>
      <div className={classes.divInputsDisabled}>
        <Input
          className={classes.inputDisabled}
          disabled
          label={"Nombre de usuario"}
          value="Gian Depaoli"
        />
        <Input
          // margin="dense"
          className={classes.inputDisabled}
          disabled
          label={"Departamento"}
          value="Sistema"
        />
        <Input
          disabled
          className={classes.inputDisabled}
          label={"Ocupacion"}
          value="Responsable"
        />{" "}
        <Input
          disabled
          className={classes.inputDisabled}
          label={"Ubicacion"}
          value="Rio Cuarto"
        />
      </div>
      <Btn
        color="secondary"
        variant="contained"
        txt={"Cambiar contraseña"}
        className={classes.btnPerfil}
        onClick={handleClickOpen}
      />
      <Dialog
        className={classes.dialogPass}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <DialogTitle className={classes.dialogTitte} id="form-dialog-title">
              Cambio de contraseña
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
              <Input
                className={classes.inputDialog}
                autoFocus
                id="password"
                label="Nueva contraseña"
                type="password"
                fullWidth
                color="secondary"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Input
                className={classes.inputDialog}
                autoFocus
                id="passwordConfirmation"
                label="Confirme nueva contraseña"
                type="password"
                fullWidth
                color="secondary"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                error={
                  formik.touched.passwordConfirmation &&
                  Boolean(formik.errors.passwordConfirmation)
                }
                helperText={
                  formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation
                }
              />
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
              <Btn
                onClick={handleClose}
                txt={"Cancelar"}
                className={(classes.btnDialog, classes.btnCansel)}
              />
              <Btn
                onClick={handleClose}
                color="secondary"
                variant="contained"
                txt={"Confirmar"}
                type={"submit"}
                className={classes.btnDialog}
              />
            </DialogActions>
          </FormControl>
        </form>
      </Dialog>
    </Drawer>
  );
};

export default DrawerBox;
