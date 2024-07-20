import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  const showNotification = () => {
    const notificationTitle = "My Notification 🔔";
    console.count("Start Notify");
    new Notification(notificationTitle, {
      body: "This is a sample notification.",
      tag: "test",
    }).onclick = () => console.log("Notification Clicked");
  };

  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <button onClick={showNotification}>Open Nitification</button>
      <Link href={"/next"}>Open</Link>
    </>
  );
}
