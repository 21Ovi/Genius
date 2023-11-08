"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrisptChat = () => {
  useEffect(() => {
    Crisp.configure("91934e75-ddd2-48aa-b84f-4217dbd281c8");
  }, []);

  return null;
};
