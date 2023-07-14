import * as React from "react";
import { SimpleSchedule } from "./components/SimpleSchedule";
import { MonthlySchedule } from "./components/MonthlySchedule";

export const App: React.FC = () => {
  return (
    <>
      {/* <MonthlySchedule /> */}
      <SimpleSchedule />
    </>
  );
};
