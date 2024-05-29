/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmProvider, useConfirm } from "../src";


const confirmOptions = {
  title: "Are you sure?",
  description: "This action cannot be undone.",
};
describe("useConfirm", () => {
    const deleteConfirmed = jest.fn();
    const deleteCancelled = jest.fn();
  
    const DeleteButton = () => {
      const confirm = useConfirm();
  
      return (
        <button
          onClick={() =>
            confirm(confirmOptions).then(deleteConfirmed).catch(deleteCancelled)
          }
        >
          Delete
        </button>
      );
    };
  
    const TestComponent = () => (
      <ConfirmProvider>
        <DeleteButton />
      </ConfirmProvider>
    );
  
    test("resolves the promise on confirm", async () => {
      const { getByText, queryByText } = render(<TestComponent />);
      expect(queryByText("Are you sure?")).toBeFalsy();
      userEvent.click(getByText("Delete"));
      await waitFor(() => expect(queryByText("Are you sure?")).toBeTruthy());
      userEvent.click(getByText("Confirm"));
      await waitFor(() => expect(deleteConfirmed).toHaveBeenCalled());
      expect(deleteCancelled).not.toHaveBeenCalled();
    });

    test("rejects the promise on cancel", async () => {
        const { getByText, queryByText } = render(<TestComponent />);
        expect(queryByText("Are you sure?")).toBeFalsy();
        userEvent.click(getByText("Delete"));
        await waitFor(() => expect(queryByText("Are you sure?")).toBeTruthy());
        userEvent.click(getByText("Cancel"));
        await waitFor(() => expect(deleteCancelled).toHaveBeenCalled());
      });
});