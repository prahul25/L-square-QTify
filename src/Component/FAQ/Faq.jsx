import React, { useState } from "react";
import styles from "./Faq.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.wrapper}>
        <Typography
          variant="p"
          gutterBottom
          style={{
            fontSize: "50px",
            fontWeight: "600",
            fontFamily: "Poppins",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            cursor: "default",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className={styles.accordionWrapper}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMore style={{ color: "#34C94B", fontSize: "40px" }} />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={styles.accordionBox}
            >
              <Typography
                variant="p"
                gutterBottom
                style={{
                  marginLeft: "10px",
                }}
              >
                Is QTify free to use?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="p"
                gutterBottom
                style={{ fontSize: "18px", marginLeft: "10px" }}
              >
                Yes! It is 100% free, and has 0% ads!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className={styles.accordionWrapper}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMore style={{ color: "#34C94B", fontSize: "40px" }} />
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              className={styles.accordionBox}
            >
              <Typography
                variant="p"
                gutterBottom
                style={{
                  marginLeft: "10px",
                }}
              >
                Can I download and listen to songs offline?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="p"
                gutterBottom
                style={{ fontSize: "18px", marginLeft: "10px" }}
              >
                Sorry, unfortunately we don't provide the service to download
                any songs.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className={styles.accordionWrapper}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMore style={{ color: "#34C94B", fontSize: "40px" }} />
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              className={styles.accordionBox}
            >
              <Typography
                variant="p"
                gutterBottom
                style={{
                  marginLeft: "10px",
                }}
              >
                I am an artist, can I have my songs uploaded on QTify?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="p"
                gutterBottom
                style={{ fontSize: "18px", marginLeft: "10px" }}
              >
                Yes, please reach out to us at letmesing@qtify.com
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default Faq;
