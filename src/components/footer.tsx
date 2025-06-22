import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { LuCopyright, LuNotebookText } from "react-icons/lu";
import { ContentContainer } from "./contentContainer";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <ContentContainer pb="0">
      <VStack as="footer" gap="3">
        <HStack gap="6">
          <Button asChild variant="ghost" size="lg">
            <a href="https://davidballestermena.netlify.app/">
              <LuNotebookText /> Mi portfolio como desarrollador
            </a>
          </Button>
        </HStack>
        <Text textStyle="sm" color="gray.400">
          Programado con{" "}
          <Link href="https://nextjs.org/" target="_blank">
            Next.js
          </Link>
          .
        </Text>
        <Text textStyle="sm" color="gray.400" textAlign="center">
          <LuCopyright style={{ display: "inline" }} /> David Ballester Mena{" "}
          {currentYear}. Todos los derechos reservados.
        </Text>
      </VStack>
    </ContentContainer>
  );
}
