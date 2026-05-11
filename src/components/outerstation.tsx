import { Box, Button, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Outfit } from "next/font/google";
import { ContentContainer } from "./contentContainer";
import { FaLink } from "react-icons/fa";

const outfit = Outfit({ subsets: ["latin"], weight: "400" });

export function OuterStation() {
  return (
    <Box w="full">
      <ContentContainer>
        <VStack gap="8">
          <Stack direction={{ base: "column", md: "row" }} gap={6} align="top">
            <Image
              objectFit="scale-down"
              maxW={{ base: "full", md: "300px" }}
              src="/outerstation.png"
              alt="Portada de Outer Station"
            />
            <VStack gap={3} align="left" textAlign="left">
              <Text
                as="h2"
                textStyle="4xl"
                textAlign="left"
                className={`playful-text variant ${outfit.className}`}
              >
                Outer Station
              </Text>
              <Text lineHeight="taller">
                Has recorrido el camino de tierra durante horas. Frente a ti, un
                edificio de cemento y hierro en lo alto de una colina, coronado
                por una parabólica deshecha. En la oscuridad brilla la luz verde
                de un viejo monitor.
              </Text>
              <Text lineHeight="taller" style={{ fontStyle: "italic" }}>
                Bienvenido a Outer Station. Lo que leas aquí ha sido transcrito
                a partir de comunicaciones recibidas de lugares que no existen.
              </Text>
              <Text lineHeight="taller">
                En{" "}
                <a
                  href="https://outerstation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Outer Station
                </a>{" "}
                encontrarás historias cortas de terror con toques de fantasía y
                ciencia ficción.
              </Text>
            </VStack>
          </Stack>
          <Button
            variant="solid"
            size="lg"
            bg="var(--playful-gradient)"
            color="white"
            opacity={{
              base: 1,
              _hover: 0.6,
            }}
          >
            <a href="https://outerstation.com" target="blank">
              <FaLink
                style={{ display: "inline-block", marginRight: "1rem" }}
              />
              outerstation.com
            </a>
          </Button>
        </VStack>
      </ContentContainer>
    </Box>
  );
}
