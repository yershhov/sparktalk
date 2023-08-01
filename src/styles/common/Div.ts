import styled from "styled-components";

interface IDivProps {
  background: string;
  color: string;
  h: string;
  w: string;
  textAlign: string;

  p: string;
  pt: string;
  pb: string;

  m: string;
  mt: string;
  mb: string;

  fontSize: string;
}

type TDivProps = Partial<IDivProps>;

export const Div = styled.div<TDivProps>`
  background: ${(props) => props.background ?? null};
  color: ${(props) => props.color ?? null};
  height: ${(props) => props.h ?? null};
  width: ${(props) => props.w ?? null};
  text-align: ${(props) => props.textAlign ?? null};

  padding: ${(props) => props.p ?? null};
  padding-top: ${(props) => props.pt ?? null};
  padding-bottom: ${(props) => props.pb ?? null};

  margin: ${(props) => props.m ?? null};
  margin-top: ${(props) => props.mt ?? null};
  margin-bottom: ${(props) => props.mb ?? null};

  font-size: ${(props) => props.fontSize ?? null};
`;
