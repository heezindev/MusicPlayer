import styled from "@emotion/styled";
import {
  ButtonHTMLAttributes,
  forwardRef,
  memo,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import { cx } from "@emotion/css";

type Props = PropsWithChildren<{
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

const Button = forwardRef<any, Props>(
  ({ children, type = "button", className, onClick, ...props }, ref) => {
    return (
      <ButtonStyle
        ref={ref}
        className={cx(className, {})}
        type={type}
        onClick={onClick}
        {...props}
      >
        <div className="container">{children}</div>
      </ButtonStyle>
    );
  }
);

Button.displayName = "Button";

export default memo(Button);

const ButtonStyle = styled.button`
  position: relative;

  width: 100%;
  height: 42px;
  padding: 10px 50px;

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.32px;

  color: #fb0808;

  overflow: hidden;

  background: #3d3d3d;
  border-radius: 8px;

  cursor: pointer;
  border: none;

  &.large {
    height: 64px;
  }

  & > .container {
    z-index: 1;
  }

  & > .backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 100%;

    z-index: 0;

    cursor: pointer;
  }
`;
