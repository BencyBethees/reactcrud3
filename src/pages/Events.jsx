import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getEvent } from "../services/allApi";

const EventPage = () => {
  const [allEvents, setAllEvents] = useState([]);  
  const [searchDate, setSearchDate] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await getEvent();
    setAllEvents(response.data);     // store API data
  };

  const handleSearch = () => {
    if (!searchDate) {
      setFilteredEvents([]);
      return;
    }

    const result = allEvents.filter((event) => event.date == searchDate);
    setFilteredEvents(result);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography
        style={{ color: "pink" }}
        variant="h4"
        fontWeight={700}
        textAlign="center"
        gutterBottom
      >
        Search Events by Date
      </Typography>

      {/* Search Section */}
      <Grid container spacing={2} alignItems="center" sx={{ mt: 3 }}>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Choose a date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            sx={{
              "& label.Mui-focused": { color: "hotpink" },
              "& .MuiInputBase-input": { color: "hotpink" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "hotpink" },
                "&:hover fieldset": { borderColor: "hotpink" },
                "&.Mui-focused fieldset": { borderColor: "hotpink" },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ height: "100%" }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {/* Results */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        {filteredEvents.length > 0 ? (
          <Typography style={{ color: "pink" }}>
            Events on {searchDate}
          </Typography>
        ) : searchDate ? (
          <Typography style={{ color: "pink" }}>
            No events found on this date
          </Typography>
        ) : (
          ""
        )}
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filteredEvents.map((event) => (
          <Grid item xs={12} key={event.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {event.title}
                </Typography>
                <Typography>Date: {event.date}</Typography>
                <Typography>Location: {event.location}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Link to={"/addevents"}>
        <Button
          style={{ marginTop: "80px" }}
          variant="contained"
          color="secondary"
        >
          Add Event
        </Button>
      </Link>
    </Container>
  );
};

export default EventPage;
