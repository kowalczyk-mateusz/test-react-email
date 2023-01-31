import { Container } from "@react-email/container";

import { Img } from "@react-email/img";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";
import { Preview } from "@react-email/preview";
import { Head } from "@react-email/head";

interface Props {
  firstName: string;
  translation: any;
}

export default function GuestInvite({
  firstName = "Mateusz",
  translation = enTranslation,
}: Props) {
  return (
    <>
      <Head>Testowy email</Head>
      <Section style={main}>
        <Container style={container}>
          <Container
            style={{
              margin: "50px 0px 31px 0px",
            }}
          >
            <Img
              src="https://admin.visitors.signalos.io/static/logo-small-parkiza.png"
              alt="logo"
              style={logo}
              width={201}
              height={55}
            />
          </Container>
          <Text style={textStyle}>
            <span style={bold}>
              {translation?.header.hello} {firstName}!
            </span>{" "}
            {translation?.header.headerBottom}
          </Text>
          <Img
            src="https://admin.visitors.signalos.io/static/desktop-photo-parkiza.png"
            alt="background"
            style={{
              padding: "40px 0 50px 0",
              width: "600px",
              height: "318px",
              objectFit: "cover",
            }}
          />
          <Container
            style={{
              padding: "0px 36px",
            }}
          >
            <Text
              style={{
                color: "#667085",
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              {translation?.info.congratulations}
            </Text>
            <Text
              style={{
                color: "#667085",
                fontWeight: 400,
                fontSize: 16,
                margin: 0,
              }}
            >
              {translation?.info.step1}
            </Text>
            <table
              style={{
                marginTop: "24px",
                marginBottom: "24px",
              }}
              border={0}
              cellPadding="0"
              cellSpacing="0"
              align="center"
            >
              <tr>
                <td style={center} align="center" valign="middle">
                  <Img
                    src="https://admin.parking.signalos.io/static/appStore.png"
                    width={141}
                    height={47}
                    style={{
                      marginRight: "34px",
                    }}
                  />
                </td>
                <td style={center} align="center" valign="middle">
                  <Img
                    src="https://admin.parking.signalos.io/static/googlePlay.png"
                    width={161}
                    height={47}
                  />
                </td>
              </tr>
            </table>
            <Text
              style={{
                color: "#667085",
                fontWeight: 400,
                fontSize: 16,
                margin: 0,
              }}
            >
              {translation?.info.step2}
            </Text>
            <Text
              style={{
                color: "#667085",
                fontWeight: 400,
                fontSize: 16,
                margin: 0,
                paddingTop: "24px",
              }}
            >
              {translation?.info.step3}
            </Text>
            <Text
              style={{
                color: "#667085",
                fontWeight: 400,
                fontSize: 16,
                margin: 0,
                paddingTop: "24px",
              }}
            >
              {translation?.info.thatsIt}
            </Text>
            <Text
              style={{
                color: "#667085",
                fontWeight: 400,
                fontSize: 16,
                margin: 0,
                paddingTop: "24px",
              }}
            >
              {translation?.info.guide}
              <Link
                style={{
                  color: "#667085",
                  textDecoration: "underline",
                }}
                href="https://example.com"
              >
                {translation?.info.clickHere}
              </Link>
            </Text>
            <Text style={title}>{translation?.terms.title}</Text>
            <Hr />
            <Section>
              <Container>
                <Text style={bodyText}>{translation?.terms.term1}</Text>
                <Text style={bodyText}>{translation?.terms.term2}</Text>
                <Text style={bodyText}>{translation?.terms.term3}</Text>
                <Text style={bodyText}>{translation?.terms.term4}</Text>
                <Text style={bodyText}>{translation?.terms.term5}</Text>
                <Text style={bodyText}>{translation?.terms.term6}</Text>
                <Text style={bodyText}>{translation?.terms.term7}</Text>
                <Text style={bodyText}>{translation?.terms.term8}</Text>
                <Text style={bodyText}>{translation?.terms.term9}</Text>
              </Container>
            </Section>
            <Section>
              <Container>
                <Text style={title}>{translation?.gdpr.title}</Text>
                <Hr />
                <Text style={bodyText}>{translation?.gdpr.body}</Text>
              </Container>
            </Section>
          </Container>
        </Container>
      </Section>
    </>
  );
}
const fontFamily = {
  fontFamily: "Arial",
  fontStyle: "normal",
};

const main = {
  backgroundColor: "#fff",
};

const textStyle = {
  margin: "0 auto",
  color: "#000",
  fontSize: 16,
  lineHeight: "24px",
  padding: "0 97px",
  fontWeight: 400,
  ...fontFamily,
};

const container = {
  maxWidth: "620px",
  minWidth: "375px",
  width: "100%",
  margin: "0 auto",
};

const center = {
  verticalAlign: "middle",
};

const logo = {
  margin: "0 auto",
};

const bold = {
  fontWeight: "bold",
};

const title = {
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "28px",
  marginTop: "65px",
  color: "#000",
  ...fontFamily,
};

const bodyText = {
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "24px",
  color: "#667085",
  ...fontFamily,
};

export const enTranslation = {
  header: {
    hello: "Hello",
    headerBottom:
      "You have been invited to the Parkiza - app that lets you share office parking spots.",
  },
  info: {
    congratulations:
      "Congratulations - you have been invited to the Parkiza app! You are only a couple of easy steps away from exploring all the conveniences of the Parkiza app:",
    step1: "1. Download our app on the Google Play or App Store:",
    step2:
      "2. Enter your workplace email and verify your account by the 6-digit code sent to the given email.",
    step3: "3. Enter the details of your vehicle.",
    thatsIt: "That’s it! ",
    guide:
      "We also suggest you to go through a 1-minute guide that will be offered after registration is completed. You can revert to this guide later in the app by clicking Account -> Need a help? or by ",
    clickHere: "clicking here.",
  },
  terms: {
    title: "Terms of service",
    term1:
      "1. Please be informed that the Building is equipped with a Video Monitoring System and Guests Book Registration System, The Administrator of a Video Monitoring System and Guests Book Registration System is the Landlord. : Ghelamco GP 11 Sp. z o.o. HUB SKA.",
    term2:
      "2. Video Monitoring System is used to protect and ensure safety of the Building. Personal data of all guests is processed in order to grant one-time access to the Building.",
    term3:
      "3. The processing the personal data registered in the Video Monitoring System is the legitimate interest of the Administrator in accordance with art. 6 section 1 lit. f of the Regulation on the of Personal Data Protection (Rozporządzenia o Ochronie Danych Osobowych).",
    term4:
      "4. All records in form of video files will be kept for a period of 20 to 30 days and personal data in the Guests Book will be stored in electronic form for a period of 90 days.",
    term5:
      "5. A person who has been registered by the Video Monitoring System has the right to access their individual personal data, Any of personal data will not be transferred to a third party.",
    term6:
      "6. All Guests of the Building has the right to access their personal data and the right to rectify, delete, limit processing, the right to transfer data, the right to denied, the right to withdraw consent at any time without affecting the lawfulness of the processing that was carried out on the basis of consent before its withdrawal.",
    term7:
      "7. Personal data will not be processed in an automated manner, including any form of profiling.",
    term8:
      "8. A person registered by the Video Monitoring System and Guests Book has the right to lodge a complaint to the supervisory authority.",
    term9:
      "9. Providing personal data is voluntary, but providing personal data (name and surname) is necessary to obtain one-time access as a guest to the Building.",
  },
  gdpr: {
    title: "General Data Protection Regulation",
    body: "Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych, dalej: RODO) informujemy, że: Administrator danych Administratorem Pana/Pani danych jest spółka ABC z siedzibą w Warszawie, ul. ABC 2, 00-001 Warszawa. Inspektor ochrony danych W sprawach związanych z ochroną danych osobowych można kontaktować się z inspektorem ochrony danych pisemnie: za pośrednictwem poczty elektronicznej pod adresem e-mail: ........@...... lub poczty tradycyjnej pod adresem siedziby administratora danych. Cele i podstawy przetwarzania Przetwarzamy Pana/Pani dane osobowe na podstawie: art. 6 ust 1 lit. b RODO w cel zawarcia i wykonywania umowy o pracę, art. 6 ust 1 lit. c RODO wykonania obowiązków wynikających z prawa pracy lub zawartej umowy cywilnoprawnej przez co rozumiemy także wykonywanie obowiązków z zakresu BHP, rozliczanie wszelkich należności, zgłaszanie pracowników do odpowiednich urzędów czy archiwizowania akt osobowych, art. 6 ust. 1 lit. c RODO w zakresie pozyskiwania informacji o niekaralności zgodnie z ustawą z dnia 12 kwietnia 2018 r. o zasadach pozyskiwania informacji o niekaralności osób ubiegających się o zatrudnienie i osób zatrudnionych w podmiotach sektora finansowego (powyższe mogą odbierać jedynie podmioty wskazane ustawą z dnia 12 kwietnia 2018 r. o zasadach pozyskiwania informacji o niekaralności osób ubiegających się o zatrudnienie i osób zatrudnionych w podmiotach sektora finansowego ),",
  },
};
