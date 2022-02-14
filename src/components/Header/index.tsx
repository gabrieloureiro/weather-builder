import * as C from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import { CARDS_ANIMATION, TRANSITION } from "animations";
import { useLanguage } from "context";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";
import { LOCALE } from "locales";
import { useWeatherContent } from "modules/Weather/context";
import { ChangeEvent } from "react";

const MotionFlex = motion<Omit<C.FlexProps, "transition">>(C.Flex);

const Header = () => {
  const { formatMessage } = useIntl();
  const { currentLocale, handleChangeLocale } = useLanguage();
  const { onRefetch } = useWeatherContent();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleChangeLocale(event.target.value);
    onRefetch();
  };

  return (
    <MotionFlex
      w="100%"
      h="56px"
      bg="gray.700"
      borderRadius="16px"
      p="12px 24px"
      align="center"
      justify="space-between"
      mb="48px"
      variants={CARDS_ANIMATION}
      transition={TRANSITION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <C.Text
        as="h1"
        fontSize={["1xl", "3xl"]}
        fontWeight="bold"
        w="256px"
        letterSpacing="tight"
      >
        {formatMessage({ id: "page.home.title" })}
        <C.Text as="span" ml="2px" color="cyan.400">
          .
        </C.Text>
      </C.Text>
      <C.Select
        ml="12px"
        color="white"
        icon={<BsGlobe color="white" />}
        maxWidth={["40px", "155px"]}
        cursor="pointer"
        value={currentLocale}
        onChange={(event) => onChange(event)}
      >
        <option value={LOCALE.PT_BR}>
          {formatMessage({ id: "header.select.option.portuguese" })}
        </option>
        <option value={LOCALE.EN_US}>
          {formatMessage({ id: "header.select.option.english" })}
        </option>
      </C.Select>
    </MotionFlex>
  );
};

export default Header;
