import { AboutMe } from "@/components/aboutme";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Rowan } from "@/components/rowan";
import { Box, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack gap="0">
      <Box mt="12">
        <Header />
      </Box>
      <AboutMe />
      <Rowan />
      <Box mb="12">
        <Footer />
      </Box>
    </VStack>
  );
}
