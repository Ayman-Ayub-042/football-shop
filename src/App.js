import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";

import Sidebar from "../src/Components/Sidebar";
import Dashboard from "../src/pages/Dashboard";
import Analytics from "./pages/Analytics";
import PlayerareaAttendence from "./pages/PlayerareaAttendence";
import PlayerareaPlayers from "./pages/PlayerareaPlayers";
import PlayerareaSkill from "./pages/PlayerareaSkill";
import AddSkill from "./pages/AddSkill";
import Tariningdrills from "./pages/Tariningdrills";
import AllDrills from "./pages/AllDrills";
import UploadingDrill from "./pages/UploadingDrill";
import Playerprofile from "./pages/Playerprofile";
import Timline from "./pages/Timline";
import Groups from "./pages/Groups";
import AddGroups from "./pages/AddGroups";
import Chat from "./pages/Chat";
import NewsFeed from "./pages/NewsFeed";
import Addskillpage2 from "./pages/Addskillpage2";
import Selectedgroup from "./Components/Selectedgroup";

import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Items from "./pages/Items";
import EditItems from "./pages/EditItems";
import AddItems from "./pages/AddItems";
const SideBarLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route element={<SideBarLayout />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/analytics" element={<Analytics/>}/>
          <Route exact path="/playerarea" element={<PlayerareaAttendence/>} />
          <Route
            exact
            path="/playerarea/attendence"
            element={<PlayerareaAttendence />}
          />
          <Route
            exact
            path="/playerarea/players"
            element={<PlayerareaPlayers />}
          />
          <Route exact path="/orders" element={<Orders/>}/>
          <Route exact path="/items" element={<Items/>}/>
          <Route exact path="/items/edititems" element={<EditItems/>}/>
          <Route exact path="/items/additems" element={<AddItems/>}/>
          <Route exact path="/playerarea/skill" element={<AddSkill />} />
          <Route exct path="/playerarea/addskill" element={<PlayerareaSkill />} />
          <Route exact path="/traningdrill" element={<Tariningdrills />} />
          <Route exact path="/traningdrill/alldrills" element={<AllDrills />} />
          <Route
            exact
            path="/traningdrill/uploaddrills"
            element={<UploadingDrill />}
          />

          <Route
            exact
            path="/playerprofile/profile"
            element={<Playerprofile />}
          />
          <Route exact path="/playerprofile/timeline" element={<Timline />} />
          <Route exact path="/newsfeed" element={<NewsFeed />} />
          <Route exact path="/newsfeed/selectedGroup" element={<Selectedgroup />} />
          <Route exact path="/selectedGroup" element={<Selectedgroup />} />
          <Route exact path="/newsfeed/groups" element={<Groups />} />
          <Route exact path="/newsfeed/addgroups" element={<AddGroups />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/addskillpage2" element={<Addskillpage2 />} />
          <Route exact path="/categories" element={<Categories />} />
       
        </Route>
      </Routes>
    </>
  );
}

export default App;
