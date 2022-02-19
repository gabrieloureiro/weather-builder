import { TRANSITION } from "animations";
import { ImWhatsapp } from "react-icons/im";
import { useIntl } from "react-intl";
import * as S from "./styles";

const FloatChat: React.VFC = () => {
  const { formatMessage } = useIntl();

  return (
    <S.FloatChat
      aria-label="whatsapp"
      target="_blank"
      rel="noopener noreferrer external"
      href="https://api.whatsapp.com/send?phone=5585999134041"
    >
      <S.Message>
        {formatMessage(
          { id: "float-chat.message" },
          { name: <strong>Gabriel Loureiro</strong> }
        )}
      </S.Message>
      <ImWhatsapp size={24} color="#FFF" />
    </S.FloatChat>
  );
};

export default FloatChat;
