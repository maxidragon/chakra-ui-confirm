import { Button } from "./components/ui/button"
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "./components/ui/dialog"

import React, {
  FC,
} from "react";

interface ConfirmDialogProps {
  title?: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmColor?: string;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  title = "Are you sure?",
  description,
  onConfirm,
  onCancel,
  confirmColor = "red.500"
}) => {
  return (
    <DialogRoot
      open={true}
      placement="center"
      onEscapeKeyDown={onCancel}
      onInteractOutside={onCancel}
    >
      <DialogContent>
        <DialogHeader fontSize="lg" fontWeight="bold">
          <DialogTitle>
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogBody>{description}</DialogBody>
        <DialogFooter>
          <Button onClick={onCancel}>Cancel</Button>
          <Button backgroundColor={confirmColor} onClick={onConfirm} ml={3}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
