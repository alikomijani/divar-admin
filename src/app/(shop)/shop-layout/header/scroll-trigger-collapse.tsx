"use client";
import { Collapse, useScrollTrigger } from "@mui/material";
import type { ReactNode } from "react";
import React from "react";

type Props = {
  threshold?: number;
  children?: ReactNode;
};

export default function ScrollTriggerCollapse({
  threshold = 40,
  children,
}: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold,
    target: window,
  });
  return <Collapse in={!trigger}>{children}</Collapse>;
}
