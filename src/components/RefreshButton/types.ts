import * as C from "@chakra-ui/react";

export type RefreshButtonProps = {
  onRefetch: () => void;
  isFetching: boolean;
  isFetched: boolean;
} & C.ButtonProps;
