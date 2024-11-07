import Profile from  "./Profile.jsx";
import React from "react";

export default function App() {

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <Profile name="Eli" picture="https://picsum.photos/id/216/100/100"/>
                <Profile name="Jacob" picture="https://picsum.photos/id/217/100/100"/>
                <Profile name="Sarah" picture="https://picsum.photos/id/218/100/100"/>
                <Profile name="Brian" picture="https://picsum.photos/id/219/100/100"/>
            </main>
        </>
    );
}