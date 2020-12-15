import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import styles from "../styles/Cube.module.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    marginBottom: "2px",
    marginTop: "15px",

  },

  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignContent: "spacing",
    // alignContent: "center",
    height: "450px",
    display: "flex",
    flexDirection: "row",
    paddingTop: "10px",
    [theme.breakpoints.up('xm')]: {
      height: "350px",
    },
  },
  Container: {
    marginBottom: "2px",

  },
  Content: {
    [theme.breakpoints.down('sm')]: {
      direction: "column",
      fontSize: "75%"
    },

  },
  image: {
    [theme.breakpoints.down('sm')]: {
      height: "100%",
      boxSizing: "border-box",

    },

  }

}));

export default function GridView() {
  const classes = useStyles();

  return (
    <div

      className={classes.root}>
      <Grid container stretch spacing={1} >
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{ maxHeight: "225px" }}>
            <Grid container direction="row">
              <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
                <span className="leftSection">
                  Total Orders
          </span>
                <span style={{ float: "right" }} className="rightSection">


                </span>
              </Grid>
              <Grid style={{ wrap: "nowrap" }} className="paperContent + classes.Content">

                <span className="leftSection">
                  <ShoppingBasketIcon style={{ fontSize: "3rem", color: "#505050" }} />
                </span>
                <span className="rightSection" style={{ float: "right" }}>

                  <Typography variant="h4" gutterBottom className={classes.Content}>
                    <CountUp start={0} end={10000} duration={2.75} separator="," />

                  </Typography>

                </span>

              </Grid>

              <div className="paperFooter">
                <img src="/images/grid1.png" alt="grid1" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{ maxHeight: "225px" }}>
            <Grid container direction="row">
              <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
                <span className="leftSection">
                  Total Profit
          </span>
                <span style={{ float: "right" }} className="rightSection">


                </span>
              </Grid>
              <Grid style={{ wrap: "wrap" }} className="paperContent">

                <span className="leftSection">
                  <MonetizationOnRoundedIcon style={{ fontSize: "3rem", color: "#505050" }} />
                </span>
                <span className="rightSection" style={{ float: "right" }}>

                  <Typography variant="h4" className={classes.Content} style={{ marginRight: "2px", }}>
                    <CountUp start={0} end={3950893472} duration={2.75} separator="," />

                  </Typography>

                </span>

              </Grid>

              <div className="paperFooter">
                <img src="/images/grid1.png" alt="grid1" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid>

      </Grid>

      <Grid container spacing={1} className={"spacing"}>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
                <span className="leftSection">
                  Orders by category

          </span>
              </Grid >
              <div style={{ height: "80%" }} className="paperFooter">
                <img className={classes.image} src="/images/grid3.png" alt="grid3" style={{ objectFit: "fill", padding: "5px", width: "100%", height: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
                <span className="leftSection">
                  Orders by audit

          </span>
              </Grid >
              <div style={{ height: "80%" }} className="paperFooter">
                <img className={classes.image} src="/images/grid4.png" alt="grid4" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1} className={"spacing"}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
                <span className="leftSection">
                  Orders by sales channel

          </span>
              </Grid >
              <div style={{ height: "80%" }} className="paperFooter">
                <img className={classes.image} src="/images/grid5.png" alt="grid5" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid >

        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
                <span className="leftSection">
                  Orders by region

          </span>
                <span style={{ float: "right" }} className="rightSection">


                </span>
              </Grid>

              <div style={{ height: "80%" }} className="paperFooter">
                <img className={classes.image} src="/images/grid6.png" alt="grid6" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid >

      <Grid item className={"spacing"} sm={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row">
            <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
              <span className="leftSection">
                Sales and profit by country

          </span>
              <span style={{ float: "right" }} className="rightSection">


              </span>
            </Grid>

            <div style={{ height: "80%" }} className="paperFooter">
              <img className={classes.image} src="/images/grid7.png" alt="grid7" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
            </div>
          </Grid>
        </Paper>
      </Grid>
      <Grid container spacing={1} className={"spacing"}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
                <span className="leftSection">
                  Order priority

          </span>
                <span style={{ float: "right" }} className="rightSection">


                </span>
              </Grid>

              <div style={{ height: "80%" }} className="paperFooter">
                <img className={classes.image} src="/images/grid8.png" alt="grid8" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid style={{ wrap: "nowrap" }} className="paperHeader" >
                <span className="leftSection">
                  Sales trend

          </span>
                <span style={{ float: "right" }} className="rightSection">


                </span>
              </Grid>

              <div style={{ height: "80%" }} className="paperFooter">
                <img className={classes.image} src="/images/grid9.png" alt="grid9" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>


    </div>
  );
}
