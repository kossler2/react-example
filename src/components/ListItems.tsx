import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import LogoutIcon from "@mui/icons-material/Logout";
import PageviewIcon from '@mui/icons-material/Pageview';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';

const primarynavList = [
  {
    link: "/",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    link: "/designer",
    label: "Designer",
    icon: <DesignServicesIcon />,
  },
  {
    link: "/respondent",
    label: "Respondent",
    icon: <PageviewIcon />,
  },
];

const secondaryNavList = [
  {
    link: "/reports",
    label: "Reports",
    icon: <AssessmentIcon />,
  },
  {
    link: "/login",
    label: "Logout",
    icon: <LogoutIcon />,
  },
];

export function MainListItems(){
  return(
      <>
      {primarynavList.map((data: any, index: any) => (
        <Link
          key={index}
          to={data.link}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton>
            <ListItemIcon>{data.icon}</ListItemIcon>
            <ListItemText primary={data.label} />
          </ListItemButton>
        </Link>
      ))}
    </>
  )
}
 

export function SecondaryListItems(){
  return(
    <>
      <ListSubheader component="div" inset>
        Finished Reports
      </ListSubheader>
      {secondaryNavList.map((data: any, index: any) => (
        <Link
          key={index}
          to={data.link}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton>
            <ListItemIcon>{data.icon}</ListItemIcon>
            <ListItemText primary={data.label} />
          </ListItemButton>
        </Link>
      ))}
    </>
  ) 
}

