"use client";

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

const SessionWrap = ({ children }) => {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
};

export default SessionWrap;
