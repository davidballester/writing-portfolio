import { Container, ContainerProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export function ContentContainer({
  children,
  ...props
}: ContainerProps & { children: ReactNode }) {
  return (
    <Container
      maxW={{ base: "5xl", md: "3xl" }}
      p="8"
      pt="16"
      pb="16"
      {...props}
    >
      {children}
    </Container>
  );
}
