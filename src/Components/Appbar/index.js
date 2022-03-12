import React, { Component } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { styles } from "./constants";

export class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid item xs={12}>
          <Toolbar>
            <Grid container>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                <i
                  class="icon-logo"
                  style={{ color: "#33aadb", fontSize: 25 }}
                />
              </Grid>

              <Grid item xs={10} sm={10} md={11} lg={11}>
                <Grid container>
                  <Grid item xs={2} sm={6} md={7} lg={7}></Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button className={classes.titleHeader}> Inicio </Button>
                  </Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button className={classes.titleHeader}> Nosotros</Button>
                  </Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button className={classes.titleHeader}> Servicio</Button>
                  </Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button className={classes.titleHeader}> Clientes </Button>
                  </Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button
                      className={classes.titleHeader}
                      style={{ borderRadius: "70px", border: "1px solid #fff" }}
                    >
                      Contacto
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
const appbar = withStyles(styles, { withTheme: true })(Appbar);

export default connect(mapStateToProps, {})(appbar);
