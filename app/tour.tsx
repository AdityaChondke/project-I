"use client"; 
import React, { useEffect } from 'react'
import { useState } from "react";
import Joyride from "react-joyride";

export default function Tour() {
    const [run, setRun] = useState(true);


    const steps = [
      {
        target: "#Investments", // Add an ID to elements you want to highlight
        content: "Click here to see all your investments",
      },
      {
        target: "#Transactions",
        content: "Click here to see all your recent transcations",
      },
      {
        target: "#fund-a",
        content: "Table entry shows your investment and current fund stats",
      },
      {
        target: "#fund-a-graph",
        content: "Graph shows performance of your fund",
      },
      {
        target: "#Explore",
        content: "Click here to explore trending investment options.",
      },
      {
        target: "#Settings",
        content: "Click here to change your settings and raise service request.",
      },
      
    ];

    return (
        <Joyride
          steps={steps}
          run={run}
          continuous={true}
          showProgress={true}
          showSkipButton={true}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
      );
}

