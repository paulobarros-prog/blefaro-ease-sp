export const WHATSAPP_NUMBER = "5511932366856";
export const INSTAGRAM_URL = "https://www.instagram.com/drathayssa.barreto/";

export const pushEvent = (event: string, payload: Record<string, unknown> = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
};

export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};
