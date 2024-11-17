import Profile from  "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";
import React from "react";

export default function App() {
    const people = [
        {
            "name" : "Eli",
            "image_url" : "https://picsum.photos/id/216/100/100"
        },
        {
            "name" : "Jacob",
            "image_url" : "https://picsum.photos/id/217/100/100"
        },
        {
            "name" : "Sarah",
            "image_url" : "https://picsum.photos/id/218/100/100"
        },
        {
            "name" : "Brian",
            "image_url" : "https://picsum.photos/id/219/100/100"
        }
    ];
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                { people.map((person) =>{
                    return (
                        <Profile
                            name = {person.name}
                            picture={person.image_url}
                        />
                    );
                }) }
                <ButtonCount initialCount = {0} />
                <ButtonCount initialCount = {1} />
                <ButtonCount initialCount = {2} />
                <ButtonCount initialCount = {3} />
                <ButtonCount initialCount = {4} />
                <ButtonCount initialCount = {5} />
            </main>
        </>
    );
}