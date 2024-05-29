# chakra-ui-confirm

A simple confirmation dialog for Chakra UI. 

## Installation

```bash
npm install chakra-ui-confirm
```

## Usage

Wrap your app inside the `ConfirmProvider` component.

```jsx
import { useConfirm } from "chakra-ui-confirm";

const App = () => {
  const confirm = useConfirm();

  const handleClick = async () => {
    confirm({
      title: "Are you sure?",
      description: "This action cannot be undone.",
    })
      .then(() => {
        console.log("Confrimed");
      })
      .catch(() => {
        console.log("Canceled");
      });
  };

  return (
    <ConfirmProvider>
      <button onClick={handleClick}>Delete</button>
    </ConfirmProvider>
  );
};
```

## Options

- `title` (string): The title of the confirmation dialog.
- `description` (string): The description of the confirmation dialog.
