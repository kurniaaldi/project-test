import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  titleContent: {
    fontWeight: 700,
    fontSize: 45,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.primary.main,
  },
  titleContent1: {
    fontWeight: 700,
    fontSize: 15,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.primary.main,
  },
  textContent: {
    fontWeight: 400,
    fontSize: 13,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.secondary.main,
  },
  button: {
    textTransform: "none",
    background: "#776FC4",
    borderRadius: 30,
    color: "#fff",
    fontWeight: 700,
    fontSize: 14,
  },
  gridContainer: {
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  cardImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 460,
    width: 362,
    boxShadow: "1px 53px 61px -53px rgba(204, 209, 211, 1)",

    [theme.breakpoints.down("sm")]: {
      width: 330,
    },
  },
  cardText: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    minHeight: 460,
    minWidth: 362,
    [theme.breakpoints.down("sm")]: {
      width: 330,
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [capthca, setCapthca] = React.useState("");
  const recaptchaRef = React.createRef();

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async () => {
    if (capthca) {
      setLoading(true);
      await axios
        .post("http://localhost:5000/form", form)
        .then((res) => {
          console.log(res);
          setLoading(false);
          setOpen(true);
          setForm({
            fullName: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  const onChangeCapthca = (e) => {
    setCapthca(e);
  };

  const disabled = !form.fullName || !form.email || !form.message || !capthca;

  return (
    <Grid container spacing={4} className={classes.gridContainer}>
      <Grid item md={4}>
        <div className={classes.cardImg}>
          <img
            src="/contact.png"
            alt="rempah-rempah"
            style={{ width: 360, height: 360 }}
          />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.cardText}>
          <Typography className={classes.titleContent}>About Us</Typography>
          <br />

          <Typography className={classes.titleContent1} gutterBottom>
            Location
          </Typography>
          <Typography className={classes.textContent} gutterBottom>
            Sona Topas Tower,
            <br /> Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet,
            <br /> Jakarta Selatan, 12920.
          </Typography>
          <br />
          <Typography className={classes.titleContent1} gutterBottom>
            Email
          </Typography>
          <Typography className={classes.textContent} gutterBottom>
            info@62trade.com
          </Typography>
          <TextField
            name="fullName"
            value={form.fullName}
            onChange={handleChangeForm}
            margin="dense"
            placeholder="Full name"
            variant="outlined"
            style={{ width: 300, borderRadius: 5 }}
          />
          <TextField
            name="email"
            value={form.email}
            onChange={handleChangeForm}
            margin="dense"
            placeholder="Email address"
            variant="outlined"
            style={{ width: 300, borderRadius: 5 }}
          />
          <TextField
            name="message"
            value={form.message}
            onChange={handleChangeForm}
            margin="dense"
            placeholder="Your message here"
            variant="outlined"
            multiline
            rows={4}
            style={{ width: 300, borderRadius: 5, marginBottom: 5 }}
          />
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChangeCapthca}
            style={{ margin: "10px 0px 20px" }}
            ref={recaptchaRef}
          />
          <Button
            onClick={handleSendMessage}
            variant="contained"
            className={classes.button}
            disabled={disabled}
          >
            {loading ? (
              <CircularProgress style={{ width: 25, height: 25 }} />
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Contact;
