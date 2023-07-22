"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5c92c7dd-e5f3-4b29-b93f-9a424adc7fd3");
  }, []);

  return null;
};
