import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import gif from "../../Wedges-3s-200px.gif";
import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data, date }) => {
  if (!data) {
    return <img src={gif} alt="loading" />;
  }

  return (
    <div className={styles.container}>
      <Grid container justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography gutterBottom>Infected</Typography>
            <hr />

            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={data.confirmed.value}
                separator=","
                duration={3}
              />
            </Typography>
            <Typography>{new Date().toDateString()}</Typography>
            <hr />
            <Typography variant="body2">Number of Active Cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography gutterBottom>Recovered</Typography>
            <hr />
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.recovered.value}
                separator=","
                duration={3}
              />
            </Typography>
            <Typography  >
              {new Date().toDateString()}
            </Typography>
            <hr />
            <Typography variant="body2">Total Recovered</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography gutterBottom>Deaths</Typography>
            <hr />
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={data.deaths.value}
                separator=","
                duration={3}
              />
            </Typography>
            <Typography>{new Date().toDateString()}</Typography>
            <hr />
            <Typography variant="body2">Total Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
