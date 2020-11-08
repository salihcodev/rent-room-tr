// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { RiProfileLine } from "react-icons/ri";

// COMPONENT IMPORTS::==>
import "./ContactUs.component.style.scss";
const ContactUs = () => {
  return (
    <section className="contactUS">
      <h2 className="heading">Keep in touch</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputDescription">room description</label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            placeholder="size, beds, ..."
          />
          <small id="emailHelp" class="form-text text-muted">
            optional
          </small>
        </div>
        <div className="form-group">
          <label for="hobbies">put your hobbies, sports ...etc</label>
          <input
            type="text"
            className="form-control"
            id="hobbies"
            placeholder="tennis, gym, golf, drawing"
          />
          <small id="emailHelp" class="form-text text-muted">
            optional
          </small>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label for="services">food services</label>
            <select id="services" className="form-control">
              <option selected>choose...</option>
              <option>full board</option>
              <option>breakfast</option>
              <option>half day</option>
              <option>dinner</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="capacity">capacity</label>
            <select id="capacity" className="form-control">
              <option selected>choose...</option>
              <option>one person</option>
              <option>two person</option>
              <option>three person</option>
              <option>four person</option>
              <option>five person</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="clothes" />
            <label class="custom-control-label" for="clothes">
              include washing clothes ?
            </label>
          </div>

          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="married" />
            <label class="custom-control-label" for="married">
              married ?
            </label>
          </div>
        </div>
        <a href="#" type="submit" className="sendUserInfo" role="button">
          <span className="btnIcon">
            <RiProfileLine />{" "}
          </span>
          <span className="btnContext">send your information</span>
        </a>
      </form>
    </section>
  );
};

export default ContactUs;
