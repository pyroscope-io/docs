import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext"; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext

// FlamegraphDotComIframe return an iframe component
// It also handles theme changing automatically
export function FlamegraphDotComIframe({ src }: { src: string }) {
  const { isDarkTheme } = useThemeContext();
  const u = new URL(src);
  u.searchParams.set("colorMode", isDarkTheme ? "dark" : "light");

  return (
    <iframe
      frameBorder="0"
      width="100%"
      height="400"
      src={u.toString()}
    ></iframe>
  );
}
