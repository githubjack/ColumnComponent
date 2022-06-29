import React from "react";
import { Stack } from "@bedrock-layout/stack";

export default function FormGroup(props) {
  return (
    <Stack gutter="md">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Stack>
  );
}
