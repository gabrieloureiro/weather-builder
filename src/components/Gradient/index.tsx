import { GRADIENT_ANIMATION } from "animations";
import * as S from "./styles";

const Gradient: React.VFC = () => {
  return (
    <S.Gradient
      variants={GRADIENT_ANIMATION}
      initial="unMounted"
      animate="mounted"
    />
  );
};

export default Gradient;
