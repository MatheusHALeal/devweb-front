import React, { Component } from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import Header from "../Header/Header.jsx";
import Button from "../CustomButtons/Button.jsx";
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import navbarsStyle from "../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import profileImage from "../../assets/img/faces/avatar.jpg";
class Navbar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Header
        color="dark"
        leftLinks={<List className={classes.list}>
        <ListItem className={classes.listItem}>
          <div className={classes.search}>
                        <div className={classes.searchIcon}>
                          <SearchIcon />
                        </div>
                        <InputBase
                          placeholder="Search…"
                          classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                        />
                      </div>
        </ListItem>

        </List>
        }
        rightLinks={<List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Discover
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Wishlist
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                justIcon
                round
                href="#pablo"
                className={classes.notificationNavLink}
                onClick={e => e.preventDefault()}
                color="rose"
              >
                <Email className={classes.icons} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                dropdownHeader="Dropdown Header"
                buttonText={
                  <img
                    src={profileImage}
                    className={classes.img}
                    alt="profile"
                  />
                }
                buttonProps={{
                  className:
                    classes.navLink + " " + classes.imageDropdownButton,
                  color: "transparent"
                }}
                dropdownList={[
                  "Me",
                  "Settings and other stuff",
                  "Sign out"
                ]}
              />
            </ListItem>
          </List>
          }
      />
    );
  }
}

export default withStyles(navbarsStyle)( Navbar);
