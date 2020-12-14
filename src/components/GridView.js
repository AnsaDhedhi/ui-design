import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import styles from "../styles/Cube.module.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    marginBottom: "2px",

  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignContent: "spacing",
    // alignContent: "center",
    // height: "230px",
    display: "flex",
    flexDirection: "row",
    paddingTop: "10px",

  },
  Container: {
    marginBottom: "2px",

  }

}));

export default function GridView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container stretch spacing={1}>
        <Grid  item sm={6} >
          <Paper className={classes.paper}>
            <Grid container direction="row">



            
            <Grid  style={{wrap:"nowrap"}} className="paperHeader" >
              <span className="leftSection">
                Total Orders
          </span>
              <span style={{ float: "right" }} className="rightSection">

                X
          </span>
            </Grid>
            <Grid style={{wrap:"nowrap"}} className="paperContent">

              <span className="leftSection">
                <ShoppingBasketIcon style={{ fontSize: "3rem" }} />
              </span>
              <span className="rightSection" style={{ float: "right" }}>
                
                  <Typography variant="h4" gutterBottom>
                    10,000
                  </Typography>
                
              </span>

            </Grid>

            <div className="paperFooter">
              <img src="/images/grid1.png" alt="mypic" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
            </div>
</Grid>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <div className="paperHeader">
              <span className="leftSection">
                Total profit
          </span>

            </div>
            <div className={"paperContent"}>

              <span className={"leftSection"}>
                <ShoppingBasketIcon style={{ fontSize: "3rem" }} />
              </span>
              <span className={"rightSection"}>
                <div className={classes.root}>
                  <Typography variant="h4" gutterBottom>
                    3,950,893,472
                  </Typography>
                </div>
              </span>

            </div>

            <div className={"paperFooter"}>
              <img src="/images/grid2.png" alt="mypic" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
            </div>

          </Paper>
        </Grid>

      </Grid>

      <Grid container spacing={1} className={"spacing"}>
        <Grid item sm="8">
          <Paper className={classes.paper}>
            <div className="paperHeader"> 
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            
            </div>
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
          </Paper>
        </Grid>

        <Grid item sm="4">
          <Paper className={classes.paper}>
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            I
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1} className={"spacing"}>
        <Grid item sm="5">
          <Paper className={classes.paper}>
            <div className={"paperHeader"}>
              <span className={"leftSection"}>
                Total Orders
          </span>

              <span style={{ float: "right", display: "block" }} className={"rightSection"}>

                {/* <SortIcon /> */}

                {/* <MenuIcon style={{ display: 'inline-block' }} /> */}

              </span>
            </div >

            <div className={"paperFooter"}>
              <img src="/images/grid5.png" alt="grid5" style={{ objectFit: "fill", padding: "5px", width: "100%" }} />
            </div>

          </Paper >
        </Grid >

        <Grid item sm="7">
          <Paper className={classes.paper}>
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.

          </Paper>
        </Grid>
      </Grid >

      <Grid item className={"spacing"} sm={12}>
        <Paper className={classes.paper}>
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
          Angular, Node, Express and PostgreSQL.
          </Paper>
      </Grid>
      <Grid container spacing={1} className={"spacing"}>
        <Grid item sm="5">
          <Paper className={classes.paper}>
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:

          </Paper>
        </Grid>

        <Grid item sm="7">
          <Paper className={classes.paper}>
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
            Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack:
            Angular, Node, Express and PostgreSQL.
          </Paper>
        </Grid>
      </Grid>


    </div>
  );
}