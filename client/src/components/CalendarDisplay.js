import React from 'react';
import './CalendarDisplay.css';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import DateTimePicker from 'react-datetime-picker';
import Calendar from "@ericz1803/react-google-calendar";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datetime-picker/dist/DateTimePicker.css'

// TODO: fix calendar edit. start w/ edit pop-up and delete function.

function CalendarDisplay() {

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");

    const session = useSession(); // tokens
    const supabase = useSupabaseClient(); // talk to supabase!
    const { isLoading } = useSessionContext();


    if (isLoading) { //flicker fix
        return <></>
    }

    //scopes specify what you can access w/ the provider
    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar'
            }
        });
        if (error) {
            alert("Error logging in to Google provider with Supabase");
            console.log(error);
        }
    }

    async function signOut() {
        await supabase.auth.signOut();
    }

    async function createCalendarEvent() {
        console.log("creating calendar e")
        const event = {
            'summary': eventName,
            'description': eventDescription,
            'start': {
                'dateTime': start.toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            'end': {
                'dateTime': end.toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        }
        await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + session.provider_token //ACCES TOKEN FOR GOOGLE
            },
            body: JSON.stringify(event)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            alert("Event created, check your Google Calendar");
        })
    }

    //log session to see data
    console.log(session);
    console.log("------ START -------")
    console.log(start);
    console.log(end);
    console.log("------ END -------")
    console.log(eventName);
    console.log(eventDescription);

    const API_KEY = "AIzaSyBQzqTpCH7pEq5_rGmZaj3y0wkq0oV_wuI";
    // TODO: is there a way to access a private google calendar???? how do i make this nice for the user???
    let calendars = [
        {
            calendarId: (session) ? session.user.email : null
        }
    ];
    
    return (
        <div className="App">
            <div style={{ margin: "5px" }}>
                {session ?
                    <>

                        <h2>Hey there, {session.user.user_metadata.name}!</h2>
                        <h1 className="functionTitle">My Calendar</h1>
                        <p>Start of your event</p>
                        <DateTimePicker onChange={setStart} value={start} style={{ width: "auto" }} />
                        <p>End of your event</p>
                        <DateTimePicker onChange={setEnd} value={end} />
                        <p>Event name</p>
                        <input type="text" onChange={(e) => setEventName(e.target.value)} />
                        <p>Event description</p>
                        <input type="text" onChange={(e) => setEventDescription(e.target.value)} />
                        <p></p>
                        <hr />
                        <button onClick={() => createCalendarEvent()}>Create Calendar Event</button>
                        <p></p>

                        <Calendar apiKey={API_KEY} calendars={calendars}></Calendar>
                        <button onClick={() => signOut()}>Sign Out</button>


                    </>
                    :
                    <>
                        <h1 className="functionTitle">My Calendar</h1>
                        <button onClick={() => googleSignIn()}>Sign In With Google</button>
                    </>
                }
            </div>
        </div>
    );
};

export { CalendarDisplay };