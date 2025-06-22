import { Box, Button, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Outfit } from "next/font/google";
import { ContentContainer } from "./contentContainer";
import { ReactNode } from "react";

const outfit = Outfit({ subsets: ["latin"], weight: "400" });

export function Rowan() {
  return (
    <Box w="full">
      <ContentContainer>
        <VStack gap="8">
          <Stack direction={{ base: "column", md: "row" }} gap={6} align="top">
            <Image
              objectFit="scale-down"
              maxW={{ base: "full", md: "300px" }}
              src="/rowan.png"
              alt="Portada de Rowan y el Caballero del Puño Rojo"
            />
            <VStack gap={3} align="left" textAlign="left">
              <Text
                as="h2"
                textStyle="4xl"
                textAlign="left"
                className={`playful-text variant ${outfit.className}`}
              >
                Rowan y el Caballero del Puño Rojo
              </Text>
              <Text lineHeight="taller">
                Cuando la dama errante Carolan de Biser es envenenada, su
                escudera, Rowan, emprende una peligrosa persecución en pos del
                Caballero del Puño Rojo. Junto a un elfo parlanchín y un goblin
                taciturno, atravesará antiguos bosques plagados de peligros,
                burlará caballeros bravucones y desvelará una conspiración que
                amenaza con desencadenar la guerra.
              </Text>
              <Text lineHeight="taller">
                <BookTitle>Rowan y el Caballero del Puño Rojo</BookTitle> es una
                novela de fantasía y aventuras para un público infantil y
                juvenil inspirada en grandes clásicos del género como{" "}
                <BookTitle>El Hobbit</BookTitle>y{" "}
                <BookTitle>La Historia Interminable</BookTitle>.
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
            Próximamente a la venta
          </Button>
        </VStack>
      </ContentContainer>
    </Box>
  );
}

function BookTitle({ children }: { children: ReactNode }) {
  return <span style={{ fontStyle: "italic" }}>{children}</span>;
}
