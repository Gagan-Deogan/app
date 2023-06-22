import "./main.css";
import { Todo } from "./Todo";
import { data } from "./data";
import edit from "../../assets/Group.png";
import link from "../../assets/link.png";
import add from "../../assets/add-square.png";
import filter from "../../assets/filter.png";
import arrowDown from "../../assets/arrow-down.png";
import calendar from "../../assets/calendar-2.png";
import user from "../../assets/profile-2user.png";
import pause from "../../assets/pause.png";
import sort from "../../assets/sort.png";
import kid1 from "../../assets/kid1.png";
import kid2 from "../../assets/kid2.png";
import kid3 from "../../assets/kid3.png";
import kid4 from "../../assets/kid4.png";

export const Main = () => {
  return (
    <main className="main-wrapper">
      <div className=" space-between mb-40">
        <div className="main-heading flex-row gap-24">
          <h1 className="heading">Mobile App</h1>

          <div className="flex-row gap-14">
            <button className="btn-outline">
              <img src={edit} alt="" />
            </button>
            <button className="btn-outline">
              <img src={link} alt="" />
            </button>
          </div>
        </div>

        <div className="end-div flex-row gap-8">
          <button className="flex-row link-btn gap-8">
            <img src={add} alt="" />
            invite
          </button>
          <div className="flex-row">
            <img src={kid1} className="" alt="" />
            <img src={kid2} className="ml-4neg" alt="" />
            <img src={kid3} className="ml-4neg" alt="" />
            <img src={kid4} className="ml-4neg" alt="" />
            <div className="ml-4neg pic">+2</div>
          </div>
        </div>
      </div>

      <div className="space-between mb-40">
        <div className="flex-row gap-14">
          <button className="outline-btn flex-row">
            <img src={filter} alt="" />
            Filter
            <img src={arrowDown} alt="" />
          </button>
          <button className="outline-btn  flex-row">
            <img src={calendar} alt="" />
            Today
            <img src={arrowDown} alt="" />
          </button>
        </div>

        <div className="flex-row gap-24">
          <button className="outline-btn  flex-row">
            <img src={user} alt="" />
            Share
          </button>
          <div className="divider-vr"></div>
          <button className="btn-primary">
            <img src={pause} alt="" />
          </button>
          <img src={sort} alt="" />
        </div>
      </div>

      <div className="section-main ">
        <Todo />
      </div>
    </main>
  );
};
