import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button } from "@chakra-ui/react";
import React, { FC, useRef } from "react";

interface ConfirmDialogProps {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
}) => {
  return (
    <AlertDialog
      isOpen={true}
      onClose={onCancel}
      leastDestructiveRef={useRef(null)}
    >
      <AlertDialogOverlay>
        <AlertDialogContent backgroundColor="gray.700" color="white">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{description ?? "Are you sure?"}</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onCancel}>Cancel</Button>
            <Button colorScheme="red" onClick={onConfirm} ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
