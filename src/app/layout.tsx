import { Inter } from "next/font/google";
import "./style.css";
import AnimatedCursor from "react-animated-cursor";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Museum Du Louvre | Da Vinci Exhibition",
  description:
    "A landing page built with Next, Typescript, SC, R3F to showcase an imaginary exhibition of the Da Vinci's works.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <AnimatedCursor
          innerSize={15}
          outerSize={8}
          color='209, 176, 94'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          innerStyle={{
            mixBlendMode: "exclusion",
          }}
        />
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
