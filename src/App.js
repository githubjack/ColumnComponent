import React from "react";
import { Split } from "@bedrock-layout/split";

import Form from "./Form";

export default function App() {
  return (
    <Split fraction="1/3" gutter="xxl" switchAt="45rem">
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form />
    </Split>
  );
}
