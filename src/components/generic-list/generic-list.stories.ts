import type { Meta, StoryObj } from "@storybook/react";
import GenericList from "./generic-list";

const meta: any = {
  title: "Example/generic-list",
  component: GenericList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GenericList>;

export default meta;

type Story = StoryObj<typeof GenericList>; //meta>;

export const StandardList: Story = {
  args: {
    data: [
      { id: 1, name: "John", surname: "Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane", surname: "Smith", email: "jane.smith@example.com" },
      { id: 3, name: "Michael", surname: "Johnson", email: "michael.johnson@example.com" },
      { id: 4, name: "Emily", surname: "Brown", email: "emily.brown@example.com" },
      { id: 5, name: "William", surname: "Davis", email: "william.davis@example.com" },
      { id: 6, name: "Sarah", surname: "Wilson", email: "sarah.wilson@example.com" },
    ],
    cols: [
      ["Id", "id", 1],
      ["Name", "name", 3],
      ["Surname", "surname", 4],
      ["Email", "email", 4],
    ],

    rowChildren: (x: any) => null,
    hideHeader: false,
    // actions?: NumberStringTuple;
    status: "finished",
    inputProps: {
      onChange: (value: Array<object> | object) => alert(JSON.stringify(value)),
      multiselect: true,
    },
  },
};
