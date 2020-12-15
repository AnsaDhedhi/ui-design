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
import SIcon from './sortIcon';
import MIcon from './menuIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    marginBottom: "2px",
    marginTop: "15px",
    fontWeight: "600",
    color: "#797979",
    fontSize: "1rem",

  },

  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignContent: "spacing",
    // alignContent: "center",
    // height: "450px",
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
      display: "block",

      // fontSize: "90%"
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
      <Grid container>



        <Grid container stretch spacing={1} >

          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper} >
              <Grid container direction="column" >
                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item style={{ paddingTop: "10px" }}>
                    Total Orders
                  </Grid>

                </Grid>

                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item >
                    <ShoppingBasketIcon style={{ fontSize: "3rem", color: "#505050" }} />
                  </Grid>
                  <Grid item alignItems="center">
                    <Typography variant="h4" gutterBottom >
                      <CountUp start={0} end={10000} duration={2.75} separator="," />
                    </Typography>

                  </Grid>
                </Grid>
                <Grid item>

                  <img src="/images/grid1.png" alt="grid1" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />

                </Grid>

              </Grid>


            </Paper>

          </Grid >
          <Grid item sm={6} xs={12} >
            <Paper className={classes.paper}>
              <Grid container direction="column">
                <Grid container justify="space-between" alignContent="flex-start" >
                  <Grid item style={{ paddingTop: "10px" }}>
                    Total Profit
                  </Grid>

                </Grid>

                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item >
                    <MonetizationOnRoundedIcon style={{ fontSize: "3rem", color: "#505050" }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" >
                      <CountUp start={0} end={3950893472} duration={2.75} separator="," />
                    </Typography>



                  </Grid>
                  <Grid item>
                    <img src="/images/grid1.png" alt="grid1" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
                  </Grid>



                </Grid>

              </Grid >
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={1} className={"spacing"}>
          <Grid item xs={12} sm={7}>
            <Paper className={classes.paper}>
              <Grid container direction="column">
                {/* <Grid container> */}
                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item style={{ paddingTop: "10px" }}>
                    Orders by category

                  </Grid>

                  <Grid item>
                    <Grid container direction="row" >
                      <span>
                        <SIcon />
                      </span>
                      <span>
                        <MIcon />
                      </span>
                    </Grid>
                  </Grid>

                </Grid>
                {/* </Grid > */}
                <div>
                  <img className={classes.image} src="/images/grid3.png" alt="grid3" style={{ padding: "5px", width: "100%" }} />
                </div>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <Grid container direction="column">
                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item style={{ paddingTop: "10px" }}>
                    Orders by Audit
                  </Grid>

                  <Grid item>
                    <Grid container direction="row" >
                      <span>
                        <SIcon />
                      </span>
                      <span>
                        <MIcon />
                      </span>
                    </Grid>
                  </Grid>

                </Grid>

                <div>
                  <img className={classes.image} src="/images/grid4.png" alt="grid4" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
                </div>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={1} className={"spacing"}>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <Grid container direction="column">

                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item style={{ paddingTop: "10px" }}>
                    Orders by Sales Channel
                  </Grid>

                  <Grid item>
                    <Grid container direction="row" >
                      <span>
                        <SIcon />
                      </span>
                      <span>
                        <MIcon />
                      </span>
                    </Grid>
                  </Grid>

                </Grid>

                <div >
                  <img className={classes.image} src="/images/grid5.png" alt="grid5" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
                </div>
              </Grid>
            </Paper>
          </Grid >

          <Grid item xs={12} sm={7}>
            <Paper className={classes.paper}>
              <Grid container direction="column">
                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item style={{ paddingTop: "10px" }}>
                    Orders by region

                  </Grid>

                  <Grid item>
                    <Grid container direction="row" >
                      <span>
                        <SIcon />
                      </span>
                      <span>
                        <MIcon />
                      </span>
                    </Grid>
                  </Grid>

                </Grid>

                <div>
                  <img className={classes.image} src="/images/grid6.png" alt="grid6" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
                </div>
              </Grid>
            </Paper>
          </Grid>
        </Grid >

        <Grid item className={"spacing"} sm={12}>
          <Paper className={classes.paper}>
            <Grid container direction="column">

              <Grid container justify="space-between" alignContent="flex-start">
                <Grid item style={{ paddingTop: "10px" }}>
                  Sales and profit by country

                  </Grid>

                <Grid item>
                  <Grid container direction="row" >
                    <span>
                      <SIcon />
                    </span>
                    <span>
                      <MIcon />
                    </span>
                  </Grid>
                </Grid>

              </Grid>

              <div>
                <img className={classes.image} src="/images/grid7.png" alt="grid7" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
              </div>
            </Grid>
          </Paper>
        </Grid>

        <Grid container spacing={1} className={"spacing"}>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <Grid container direction="column">

                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item style={{ paddingTop: "10px" }}>
                    Order priority

                  </Grid>

                  <Grid item>
                    <Grid container direction="row" >
                      <span>
                        <SIcon />
                      </span>
                      <span>
                        <MIcon />
                      </span>
                    </Grid>
                  </Grid>

                </Grid>

                <div>
                  <img className={classes.image} src="/images/grid8.png" alt="grid8" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
                </div>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Paper className={classes.paper}>
              <Grid container direction="column">

                <Grid container justify="space-between" alignContent="flex-start">
                  <Grid item style={{ paddingTop: "10px" }}>
                    Sales trend

                  </Grid>

                  <Grid item>
                    <Grid container direction="row" >
                      <span>
                        <SIcon />
                      </span>
                      <span>
                        <MIcon />
                      </span>
                    </Grid>
                  </Grid>

                </Grid>

                <div>
                  <img className={classes.image} src="/images/grid9.png" alt="grid9" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
                </div>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

      </Grid>
    </div >
  );
}
