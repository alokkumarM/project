"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("067e9eee-2ad3-47a5-a399-c92105d4f3ca");
  }, []);

  return null;
};