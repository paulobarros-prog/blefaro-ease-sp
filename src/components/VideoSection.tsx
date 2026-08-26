import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Play, ChevronDown } from "lucide-react";
import { pushEvent, scrollToId } from "@/lib/lp";

const VIDEO_ID = "KlA2FGbBdWs";

const VideoSection = () => {
  const [started, setStarted] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const tracked = useRef<Record<string, boolean>>({});

  const track = (key: string, event: string) => {
    if (tracked.current[key]) return;
    tracked.current[key] = true;
    pushEvent(event, { eventCategory: "video", eventAction: "progress", eventLabel: key });
  };

  // Lazy: only load the YouTube API after the visitor chooses to play.
  useEffect(() => {
    if (!started) return;

    const createPlayer = () => {
      // @ts-ignore
      const yt = new window.YT.Player("youtube-player", {
        videoId: VIDEO_ID,
        playerVars: { enablejsapi: 1, rel: 0, origin: window.location.origin, autoplay: 1 },
        events: {
          onReady: (e: any) => setPlayer(e.target),
          onStateChange: (e: any) => {
            // @ts-ignore
            if (e.data === window.YT.PlayerState.PLAYING) {
              track("play", "video_play");
            }
          },
        },
      });
      return yt;
    };

    // @ts-ignore
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    // @ts-ignore
    window.onYouTubeIframeAPIReady = createPlayer;
  }, [started]);

  useEffect(() => {
    if (!player) return;
    const interval = setInterval(() => {
      const duration = player.getDuration?.() || 0;
      if (!duration) return;
      const progress = (player.getCurrentTime() / duration) * 100;
      if (progress >= 25) track("25", "video_progress_25");
      if (progress >= 50) track("50", "video_progress_50");
      if (progress >= 75) track("75", "video_progress_75");
      if (progress >= 99) track("100", "video_progress_100");
    }, 1000);
    return () => clearInterval(interval);
  }, [player]);

  const handlePlay = () => {
    pushEvent("video_thumbnail_click", { eventCategory: "video", eventLabel: "iniciar_video" });
    setStarted(true);
  };

  return (
    <section id="video" className="scroll-mt-24 py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-sand/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 space-y-3 sm:space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-graphite">
            Entenda a <span className="text-primary">Blefaroplastia</span> antes de decidir
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Neste vídeo, a Dra. Thayssa explica de maneira clara o que é a
            Blefaroplastia, para quem ela pode ser indicada e como funciona o
            procedimento. O objetivo é ajudar você a entender melhor essa
            possibilidade antes de decidir se deseja realizar uma avaliação.
          </p>
        </motion.div>

        <Card className="overflow-hidden shadow-2xl rounded-2xl sm:rounded-3xl bg-card border-none">
          <div className="relative w-full pt-[56.25%] bg-graphite">
            {started ? (
              <div id="youtube-player" className="absolute top-0 left-0 w-full h-full" />
            ) : (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Assistir ao vídeo da Dra. Thayssa sobre blefaroplastia"
                className="absolute top-0 left-0 w-full h-full group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                  alt="Dra. Thayssa Barreto explicando a blefaroplastia em vídeo"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-graphite/25 transition-colors group-hover:bg-graphite/40">
                  <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground ml-1" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </Card>

        <div className="mt-4 sm:mt-6 flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-accent/50 rounded-xl sm:rounded-2xl">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-accent-foreground">
            <strong>Conteúdo informativo:</strong> este vídeo tem caráter
            educacional. A avaliação médica individual é indispensável para
            indicação do procedimento.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Button
            size="lg"
            onClick={() => {
              pushEvent("cta_click", { eventCategory: "engagement", eventLabel: "video_quero_entender_meu_caso" });
              scrollToId("qualificacao");
            }}
            className="group rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            Quero entender meu caso
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
