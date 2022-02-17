import * as C from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md";
import { useIntl } from "react-intl";
import { RefreshButtonProps } from "./types";

const RefreshButton: React.VFC<RefreshButtonProps> = ({
  onRefetch,
  isFetching,
  isFetched,
}) => {
  const { formatMessage } = useIntl();

  const showRefreshingLabel = !isFetched && isFetching;

  return (
    <C.Button
      leftIcon={<MdRefresh size="24px" />}
      w={["100%", "180px"]}
      h="56px"
      bg="gray.700"
      borderColor="gray.50"
      _hover={{
        bg: "gray.600",
      }}
      onClick={onRefetch}
    >
      <C.Text fontSize={["14px", "16px"]}>
        {formatMessage({
          id: showRefreshingLabel
            ? "button.refreshing.label"
            : "button.refresh.label",
        })}
      </C.Text>
    </C.Button>
  );
};

export default RefreshButton;
