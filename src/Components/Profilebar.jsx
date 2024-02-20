import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Drawer,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  Squares2X2Icon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  ChartBarIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import Dashboard from "./Dashboard";
import Reportgen from "./Reportgen";
import Report from "./Report";

const Profilebar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenheight, setScreenHeight] = useState(window.innerHeight);
  const [isside, setisside] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      setisside(windowWidth < 1535);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const menuItems = [
    "Dashboard",
    "Report Generation",
    "Doctor Details",
    "Analysis",
    "Report",
  ];
  const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]);
  const [open, setOpen] = useState(1); // Track the selected item
  const handleItemClick = (itemNumber) => {
    setOpen(itemNumber);
    setActiveMenuItem(menuItems[itemNumber-1]);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  


  return (
    <div className={`w-full flex flex-row ${screenWidth<1180?"h-full":"h-screen"}`}>
      {!isside && (
        <div
          className={`w-full md:w-1/6 lg:w-1/5 xl:w-1/6 bg-black h-screen overflow-y-auto `}
        >
          <Card className="h-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none">
            <div className="mb-2 flex flex-col items-center gap-4 p-4">
              <div className="flex items-center gap-1 rounded-full">
                <Avatar
                  variant="circular"
                  size="xxl"
                  alt="tania andrew"
                  className="border-[3px] border-white-900"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </div>
              <div>
                <Typography variant="h5" color="blue-gray">
                  Anirudh P Menon
                </Typography>
                <Typography variant="h7" color="blue-gray">
                  Nurse ID: 123456
                </Typography>
              </div>
            </div>
            <List
              className={` bg-white ${
                screenWidth < 1535 ? "" : " w-full pl-8 pr-4"
              }`}
            >
              <ListItem
                className={`${
                  screenWidth < 1535 ? "w-2/3 px-4" : " w-full p-3"
                }`}
                selected={open === 1}
                onClick={() => handleItemClick(1)}
                style={{ backgroundColor: open === 1 && activeMenuItem!="Report" ? "cyan" : "transparent" }}
              >
                <ListItemPrefix>
                  <Squares2X2Icon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </ListItem>

              <ListItem
                className={`${
                  screenWidth < 1535 ? "w-2/3 px-4" : " w-full p-3"
                }`}
                selected={open === 2}
                onClick={() => handleItemClick(2)}
                style={{ backgroundColor: open === 2 ? "cyan" : "transparent" }}
              >
                <ListItemPrefix>
                  <ClipboardDocumentIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                Report Generation
                </Typography>
              </ListItem>

              <ListItem
                className={`${
                  screenWidth < 1535 ? "w-2/3 px-4" : " w-full p-3"
                }`}
                selected={open === 3}
                onClick={() => handleItemClick(3)}
                style={{ backgroundColor: open === 3 ? "cyan" : "transparent" }}
              >
                <ListItemPrefix>
                  <UserGroupIcon className="h-5 w-5" />
                </ListItemPrefix>
                Doctor Details
              </ListItem>
              <ListItem
                className={`${
                  screenWidth < 1535 ? "w-2/3 px-4" : " w-full p-3"
                }`}
                selected={open === 4}
                onClick={() => handleItemClick(4)}
                style={{ backgroundColor: open === 4 ? "cyan" : "transparent" }}
              >
                <ListItemPrefix>
                  <ChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Analysis
              </ListItem>
              <hr className="my-5 border-blue-gray-50 w-full" />
              <ListItem
                className={`${
                  screenWidth < 1535 ? "w-2/3 px-4" : " w-full p-3"
                }`}
              >
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem
                className={`${
                  screenWidth < 1535 ? "w-2/3 px-4" : " w-full p-3"
                }`}
              >
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </Card>
        </div>
      )}
      {(isside && activeMenuItem!="Report") && (
        <div>
          <Drawer
            open={isDrawerOpen}
            overlay={false}
            className={`
            ${screenheight > 670 ? "mt-20" : "mt-20"}`}
          >
            <Card className="h-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none">
              <div className="mb-2 flex flex-col items-center gap-2 p-0">
                <div className="flex items-center gap-1 rounded-full">
                  <Avatar
                    variant="circular"
                    alt="tania andrew"
                    className="border-[3px] border-white-900"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  />
                </div>
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Anirudh P Menon
                  </Typography>
                  <Typography variant="h7" color="blue-gray">
                    Nurse ID: 123456
                  </Typography>
                </div>
              </div>
              <List
                className={` bg-white ${
                  screenWidth < 1535 ? "p-0 pl-2" : " w-full pl-8 pr-4"
                }`}
              >
                <ListItem
                  className={`${
                    screenWidth < 1535 ? "w-5/6 px-4" : " w-full p-3"
                  }`}
                  selected={open === 1}
                  onClick={() => handleItemClick(1)}
                  style={{
                    backgroundColor: open === 1 ? "cyan" : "transparent",
                  }}
                >
                  <ListItemPrefix>
                    <Squares2X2Icon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </ListItem>

                <ListItem
                  className={`${
                    screenWidth < 1535 ? "w-5/6 px-4" : " w-full p-3"
                  }`}
                  selected={open === 2}
                  onClick={() => handleItemClick(2)}
                  style={{
                    backgroundColor: open === 2 ? "cyan" : "transparent",
                  }}
                >
                  <ListItemPrefix>
                    <ClipboardDocumentIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                  Report Generation
                  </Typography>
                </ListItem>

                <ListItem
                  className={`${
                    screenWidth < 1535 ? "w-5/6 px-4" : " w-full p-3"
                  }`}
                  selected={open === 3}
                  onClick={() => handleItemClick(3)}
                  style={{
                    backgroundColor: open === 3 ? "cyan" : "transparent",
                  }}
                >
                  <ListItemPrefix>
                    <UserGroupIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Doctor Details
                </ListItem>
                <ListItem
                  className={`${
                    screenWidth < 1535 ? "w-5/6 px-4" : " w-full p-3"
                  }`}
                  selected={open === 4}
                  onClick={() => handleItemClick(4)}
                  style={{
                    backgroundColor: open === 4 ? "cyan" : "transparent",
                  }}
                >
                  <ListItemPrefix>
                    <ChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Analysis
                </ListItem>
                
                <hr
                  className={` border-blue-gray-50 w-full ${
                    screenWidth < 1535 ? "my-2" : " my-5"
                  }`}
                />
                <ListItem
                  className={`${
                    screenWidth < 1535 ? "w-5/6 px-4" : " w-full p-3"
                  }`}
                >
                  <ListItemPrefix>
                    <Cog6ToothIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Settings
                </ListItem>
                <ListItem
                  className={`${
                    screenWidth < 1535 ? "w-5/6 px-4" : " w-full p-3"
                  }`}
                >
                  <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Log Out
                </ListItem>
              </List>
            </Card>
          </Drawer>
        </div>
      )}
      <div
        className={` bg-gray-200 flex flex-col h-full ${
          screenWidth < 1535 ? "w-full" : "w-5/6"
        }`}
      >
        {activeMenuItem!="Report" &&
        <div
          className={`w-full h-20 bg-gradient-to-b from-blue-gray-500 to-gray-600 flex flex-row items-center  ${
            screenWidth < 460 ? "pl-4 gap-4" : "pl-12 gap-8"
          }`}
        >
          {screenWidth < 1535 && (
            <div>
              <button class="relative group rounded-full">
                <div
                  className={`relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-md ${
                    isClicked ? "rotate-[45deg]" : ""
                  }`}
                  onClick={() => {
                    handleClick();
                    openDrawer();
                  }}
                >
                  <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ">
                    <div
                      className={`bg-white h-[2px] w-1/2 rounded ${
                        isClicked
                          ? "rotate-90 h-[1px] origin-right delay-75 translate-y-[1px]"
                          : ""
                      }`}
                    ></div>
                    <div class="bg-white h-[1px] rounded"></div>
                    <div
                      className={`bg-white h-[2px] w-1/2 rounded self-end ${
                        isClicked
                          ? "rotate-90 h-[1px] origin-left delay-75 translate-y-[1px]"
                          : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          )}
          <div
            className={`flex flex-row items-center  ${
              screenWidth < 600 ? "w-4/6 gap-2" : "gap-20 w-3/4"
            }`}
          >
            <div class={`${screenWidth<600?"w-full":"w-2/3"}`}>
              <div class="relative flex items-center w-full h-12 rounded-2xl focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>

            <button
              type="button"
              class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-trasparent rounded-lg cursor-default"
            >
              <BellIcon className="w-8 h-8 cursor-pointer" />
              <div class="absolute inline-flex items-center justify-center w-[20px] h-[20px] text-[9px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-0 -end-0 dark:border-gray-900">
                20
              </div>
            </button>
          </div>
        </div>
}
        <div className={`w-full  ${activeMenuItem === "Report"?"h-full":"mt-auto h-5/6"}`}>
          {activeMenuItem === "Dashboard" && (<Dashboard onReportClick={() => handleMenuItemClick("Report")}/>)}
          {activeMenuItem === "Report Generation" && (<Reportgen/>)}
          {activeMenuItem === "Report" &&(<Report onDashboard={()=> handleMenuItemClick("Dashboard")}/>)}
        </div>
      </div>
    </div>
  );
};

export default Profilebar;
