import { Text, VStack } from "@chakra-ui/react";
import { Outfit } from "next/font/google";
import { ContentContainer } from "./contentContainer";

const outfit = Outfit({ subsets: ["latin"], weight: "400" });

export function Header() {
  return (
    <ContentContainer>
      <VStack as="header" gap={{ base: 6, md: 6 }} mb="12">
        <Text
          as="h1"
          textStyle={{ base: "5xl", md: "7xl" }}
          textAlign="center"
          className={`playful-text ${outfit.className}`}
        >
          David Ballester Mena
        </Text>
        <Text textStyle={{ base: "xl", md: "3xl" }} textAlign="center">
          Escritor y Programador
        </Text>
      </VStack>
    </ContentContainer>
  );
}
