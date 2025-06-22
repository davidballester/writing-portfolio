import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import { Merriweather } from "next/font/google";
import "./global.css";

const merriweather = Merriweather({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "David Ballester Mena",
  description:
    "Todo sobre mi faceta como escritor de ficción y amante de la literatura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <Provider>
          <Box
            background={`
              radial-gradient(ellipse at top, #111, transparent),
              radial-gradient(ellipse at center, #ff159520, transparent),
              radial-gradient(ellipse at bottom, #111, transparent);
            `}
            className={merriweather.className}
          >
            <Box
              backgroundImage="radial-gradient(#ffe52e20 0.5px, transparent 0.5px)"
              backgroundSize="15px 15px"
              backgroundRepeat="repeat"
            >
              {children}
            </Box>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
