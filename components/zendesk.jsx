"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
let zendeskLoaded = false;

const loadZendeskScript = (scriptUrl, scriptId) => {
  if (zendeskLoaded) return;

  const script = document.createElement("script");
  script.src = scriptUrl;
  script.id = scriptId;
  script.type = "text/javascript";
  script.async = true;
  script.onload = () => {
    window.zE("messenger", "show");
  };
  document.body.appendChild(script);
  zendeskLoaded = true;
};

const ZendeskChat = () => {
  const pathname = usePathname();
  const router = useRouter();
  const scriptUrl =
    `https://static.zdassets.com/ekr/snippet.js?key=a7f7ab40-7882-4720-9809-e91e03369d6f`;
  const scriptId = "ze-snippet";

  useEffect(() => {
    loadZendeskScript(scriptUrl, scriptId);
  }, [router, pathname]);

  useEffect(() => {
    if (zendeskLoaded && typeof window.zE !== "undefined") {
      window.zE("messenger", "show");
    }
  }, [router, pathname]);

  return null;
};

export default ZendeskChat;
