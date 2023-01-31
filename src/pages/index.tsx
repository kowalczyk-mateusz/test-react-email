import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { render } from "@react-email/render";
import MyTemplate from "emails";
import GuestInvite from "emails/guest-invite";
import { Preview } from "@react-email/preview";
import { inviteGuestTranslations } from "@/translations/guest";
import { useEffect, useState } from "react";
import { Html } from "@react-email/html";

export default function Home() {
  const [email, setEmail] = useState("inviteGuest");
  const [language, setLanguage] = useState<"pl" | "en">("en");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderEmail = (email: string) => {
    switch (email) {
      case "inviteGuest":
        return (
          <GuestInvite
            firstName="Mateusz"
            translation={inviteGuestTranslations[language]}
          />
        );
    }
  };

  const emailsNames = [{ name: "Visitors invite guest", value: "inviteGuest" }];

  const html = render(
    <Html>
      <MyTemplate />
    </Html>,
    {
      pretty: true,
    },
  );

  console.log(html);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "800px",
          marginBottom: "30px",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "purple",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => setLanguage("pl")}
        >
          PL
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "purple",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "800px",
          marginBottom: "30px",
          paddingBottom: "30px",
          borderBottom: "2px solid cadetBlue",
        }}
      >
        {emailsNames.map((el) => (
          <button
            style={{
              border: "none",
              backgroundColor: "cadetblue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            key={el.name}
            onClick={() => setEmail(el.value)}
          >
            {el.name}
          </button>
        ))}
      </div>
      {mounted && renderEmail(email)}
    </div>
  );
}
