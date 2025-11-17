import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { createEvent, deleteEvent, editEvent, getEvent } from "../services/allApi";
import Swal from "sweetalert2";

const Addevents = () => {
  const [inputtitle, setInputTitle] = useState("");
  const [inputdate, setInputDate] = useState("");
  const [inputlocation, setInputLocation] = useState("");
  const [eventdata, setEventData] = useState([]);
  const [editdata, setEditData] = useState({});
  const [editid, setEditId] = useState(null);

  useEffect(() => {
    loadEvent();
  }, []);

  const onAddClick = async () => {
    let reqBody = {
      title: inputtitle,
      date: inputdate,
      location: inputlocation,
    };
    let apiresponse = await createEvent(reqBody);
    console.log(apiresponse);

    if (apiresponse.status == 201) {
      Swal.fire({
        title: "event added successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      loadEvent();
    } else {
      Swal.fire({
        title: "error ocurred while adding event!",
        text: "You clicked the button!",
        icon: "error",
      });
    }
  };

  const loadEvent = async () => {
    let apiresponse = await getEvent();
    console.log(apiresponse);

    if (apiresponse.status == 200) {
      setEventData(apiresponse.data);
    } else {
      Swal.fire({
        title: "error ocurred while adding event!",
        text: "You clicked the button!",
        icon: "error",
      });
    }
  };

  const onDeleteClick = async (id) => {
    let apiresponse = await deleteEvent(id);
    console.log(apiresponse);

    if (apiresponse.status == 200) {
      Swal.fire({
        title: "event deleted successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      loadEvent();
    } else {
      Swal.fire({
        title: "error ocurred while deleting the event!",
        text: "You clicked the button!",
        icon: "error",
      });
    }
  };

  const onEditbtnClick = (eventObj) => {
    setInputTitle(eventObj.title);
    setInputDate(eventObj.date);
    setInputLocation(eventObj.location);

    setEditId(eventObj.id);
  };
  const editClick = async () => {
    let reqBody = {
      title: inputtitle,
      date: inputdate,
      location: inputlocation,
    };
    let apiresponse=await editEvent(editid,reqBody)
    console.log(apiresponse)

    if(apiresponse.status==200){
      Swal.fire({
        title: "event edited successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      loadEvent();

      setInputTitle("")
      setInputDate("")
      setInputLocation("")
      setEditId(null)
    }else{
      Swal.fire({
        title: "error ocurred while editing the event!",
        text: "You clicked the button!",
        icon: "error",
      });
    }
  };
  return (
    <>
      <div
        style={{
          width: "600px",
          minHeight: "400px",
          color: "pink",
          backgroundColor: "pink",
          padding: "50px",
          textAlign: "center",
          marginLeft: "315px",
        }}
      >
        <Typography variant="h4" color="black">
          Let’s Plan Your Event
        </Typography>{" "}
        <br />
        <input
          value={inputtitle}
          onChange={(e) => setInputTitle(e.target.value)}
          style={{ width: "50vh" }}
          type="text"
          name=""
          id=""
          placeholder="title"
        />{" "}
        <br />
        <br />
        <input
          value={inputdate}
          onChange={(e) => setInputDate(e.target.value)}
          style={{ width: "50vh" }}
          type="date"
          name=""
          id=""
          placeholder="date"
        />{" "}
        <br />
        <br />
        <input
          value={inputlocation}
          onChange={(e) => setInputLocation(e.target.value)}
          style={{ width: "25vh" }}
          type="text"
          name=""
          id=""
          placeholder="location"
        />
        {editid ? (
          <Button onClick={editClick} variant="contained" color="warning">
            Edit
          </Button>
        ) : (
          <Button onClick={onAddClick} variant="contained" color="success">
            Add
          </Button>
        )}
        <br />
        <br />
        <div className="table-scroll">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>title</th>
                <th>date</th>
                <th>location</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {eventdata.length > 0 ? (
                <>
                  {eventdata.map((eachevent, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{eachevent.id}</td>
                      <td>{eachevent.title}</td>
                      <td>{eachevent.date}</td>
                      <td>{eachevent.location}</td>

                      <td>
                        <div className="btn-row">
                          <Button
                            onClick={() => onEditbtnClick(eachevent)}
                            variant="contained"
                            color="primary"
                          >
                            Edit
                          </Button>{" "}
                          <br />
                          <br />
                          <Button
                            onClick={() => onDeleteClick(eachevent.id)}
                            variant="contained"
                            color="secondary"
                          >
                            Del
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No event data added
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Addevents;
