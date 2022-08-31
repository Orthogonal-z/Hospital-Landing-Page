import React from "react";
import "./FaqSection.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const FaqSection = () => {
  return (
    <div className="faqsection">
      <div className="faq-container">
        <h1 className="heading">F.A.Q</h1>
        <div className="all-faq">
          <div className="single-faq">
            <Accordion
              style={{ backgroundColor: "#F1F1F1", margin: "6px 0" }}
              className="faq-accordion"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1
                  className="text-faq"
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  1. Which is the best IVF clinic in srinagar?
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <h1 className="text-faq-bottom">
                  Imprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  Imprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivf ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivf
                  <div></div>
                  <Link
                    underline="none"
                    href="#"
                    style={{
                      fontSize: 18,
                      color: "red",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Learn More{" "}
                    {
                      <ArrowRightAltIcon
                        style={{
                          marginLeft: 5,
                          fontSize: 35,
                        }}
                      />
                    }
                  </Link>
                </h1>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                backgroundColor: "#F1F1F1",
                margin: "6px 0",
              }}
              className="faq-accordion"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1
                  className="text-faq"
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  2. Which is the best IVF clinic in srinagar?
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Imprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  Imprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivf ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivf
                  <div></div>
                  <Link
                    underline="none"
                    href="#"
                    style={{
                      fontSize: 18,
                      color: "red",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Learn More{" "}
                    {
                      <ArrowRightAltIcon
                        style={{
                          marginLeft: 5,
                          fontSize: 35,
                        }}
                      />
                    }
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{
                backgroundColor: "#F1F1F1",
                margin: "6px 0",
              }}
              className="faq-accordion"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1
                  className="text-faq"
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  3. Which is the best IVF clinic in srinagar?
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Imprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  Imprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivf ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivf
                  <div></div>
                  <Link
                    underline="none"
                    href="#"
                    style={{
                      fontSize: 18,
                      color: "red",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Learn More{" "}
                    {
                      <ArrowRightAltIcon
                        style={{
                          marginLeft: 5,
                          fontSize: 35,
                        }}
                      />
                    }
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="faq-accordion"
              style={{
                backgroundColor: "#F1F1F1",
                margin: "6px 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1
                  className="text-faq"
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  4. Which is the best IVF clinic in srinagar?
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Imprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  Imprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivf ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivfImprimis ivfImprimis ivfImprimis ivfImprimis
                  ivfImprimis ivf
                  <div></div>
                  <Link
                    underline="none"
                    href="#"
                    style={{
                      fontSize: 18,
                      color: "red",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Learn More{" "}
                    {
                      <ArrowRightAltIcon
                        style={{
                          marginLeft: 5,
                          fontSize: 35,
                        }}
                      />
                    }
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
