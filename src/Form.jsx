import React from "react";
import styled from "styled-components";
import { spacingMap } from "./spacingMap";
import FormGroup from "./FormGroup";
// import { Columns, Column } from "@bedrock-layout/columns";

const Columns = styled.div`
--columns : ${({ columns = 1 }) => columns}; 
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
 /* grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);*/
 grid-template-columns: repeat(var(--columns),1fr);
`;

const Column = styled.div`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;

export default function Form() {
  return (
    <Columns columns={6}>
      <Column $span={3}>
        <FormGroup htmlFor="firstName" label="First Name">
          <input type="text" id="firstName" />
        </FormGroup>
      </Column>
      <Column $span={3}>
        <FormGroup htmlFor="lastName" label="Last Name">
          <input type="text" id="lastName" />
        </FormGroup>
      </Column>
      <Column $span={4}>
        <FormGroup htmlFor="email" label="Email">
          <input type="text" id="email" />
        </FormGroup>
      </Column>
      <Column $span={6}>
        <FormGroup htmlFor="address" label="Street Address">
          <input type="text" id="address" />
        </FormGroup>
      </Column>
      <Column $span={2}>
        <FormGroup htmlFor="city" label="City">
          <input type="text" id="city" />
        </FormGroup>
      </Column>
      <Column $span={2}>
        <FormGroup htmlFor="state" label="State">
          <input type="text" id="state" />
        </FormGroup>
      </Column>
      <Column $span={2}>
        <FormGroup htmlFor="zipCode" label="Zip Code">
          <input type="text" id="zipCode" />
        </FormGroup>
      </Column>
    </Columns>
  );
}
