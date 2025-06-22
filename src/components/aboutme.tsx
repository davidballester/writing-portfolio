import { Box, Text } from "@chakra-ui/react";
import { ContentContainer } from "./contentContainer";

export function AboutMe() {
  return (
    <Box
      w="full"
      color="white"
      position="relative"
      background="var(--playful-gradient-alternative)"
    >
      <ContentContainer>
        <Text
          as="p"
          textStyle={{ base: "xl", md: "2xl" }}
          textShadow="1px 1px 2px black"
          lineHeight={{ base: "200%", md: "200%" }}
        >
          Soy David, malagueño y apasionado de las buenas historias, ya vengan
          en forma de novela, videojuego o película. Me dedico a la programación
          web y, en mis ratos libres, a imaginar las historias que siempre quise
          leer.
        </Text>
      </ContentContainer>
    </Box>
  );
}
