import * as C from "@chakra-ui/react";
import * as S from "./styles";

import { MdRefresh } from "react-icons/md";
import { useIntl } from "react-intl";
import { RefreshButtonProps } from "./types";
import {
  REFRESH_BUTTON_ANIMATION,
  REFRESH_BUTTON_TRANSITION,
} from "./animations";

const RefreshButton: React.VFC<RefreshButtonProps> = ({
  onRefetch,
  isFetching,
  isFetched,
  ...rest
}) => {
  const { formatMessage } = useIntl();

  const showRefreshingLabel = !isFetched && isFetching;

  return (
    <S.Button
      leftIcon={<MdRefresh size="24px" />}
      w={["100%", "180px"]}
      h="56px"
      bg="gray.700"
      borderColor="gray.50"
      _hover={{
        bg: "gray.600",
      }}
      onClick={onRefetch}
      variants={REFRESH_BUTTON_ANIMATION}
      transition={REFRESH_BUTTON_TRANSITION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
      {...rest}
    >
      <C.Text fontSize={["14px", "16px"]}>
        {formatMessage({
          id: showRefreshingLabel
            ? "button.refreshing.label"
            : "button.refresh.label",
        })}
      </C.Text>
    </S.Button>
  );
};

export default RefreshButton;
