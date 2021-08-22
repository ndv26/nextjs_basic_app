import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
    const router = useRouter();

    async function addMeetupHandler(meetupData) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log(data);
        router.push("/");
    }

    return (
        <Fragment>
            <Head>
                <title>New Meetup</title>
                <meta name="description" content="Add your own meetup" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    );
}

export default NewMeetup;
