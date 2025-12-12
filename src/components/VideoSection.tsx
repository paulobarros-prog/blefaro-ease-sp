import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const pushDataLayerEvent = (eventName: string, label: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    eventCategory: 'video',
    eventAction: 'progress',
    eventLabel: label
  });
};

const VideoSection = () => {
  const [player, setPlayer] = useState<any>(null);
  const [tracked, setTracked] = useState({
    play: false,
    "25": false,
    "50": false,
    "75": false,
    "100": false,
  });

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      // @ts-ignore
      const ytPlayer = new YT.Player("youtube-player", {
        videoId: "KlA2FGbBdWs",
        playerVars: {
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => setPlayer(event.target),
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, []);

  const onPlayerStateChange = (event: any) => {
    // @ts-ignore
    if (event.data === YT.PlayerState.PLAYING && !tracked.play) {
      pushDataLayerEvent('video_play', 'video_started');
      setTracked((prev) => ({ ...prev, play: true }));
    }
  };

  useEffect(() => {
    if (!player) return;

    const interval = setInterval(() => {
      const currentTime = player.getCurrentTime();
      const duration = player.getDuration();
      const progress = (currentTime / duration) * 100;

      if (progress >= 25 && !tracked["25"]) {
        pushDataLayerEvent('video_progress_25', 'video_25_percent');
        setTracked((prev) => ({ ...prev, "25": true }));
      }
      if (progress >= 50 && !tracked["50"]) {
        pushDataLayerEvent('video_progress_50', 'video_50_percent');
        setTracked((prev) => ({ ...prev, "50": true }));
      }
      if (progress >= 75 && !tracked["75"]) {
        pushDataLayerEvent('video_progress_75', 'video_75_percent');
        setTracked((prev) => ({ ...prev, "75": true }));
      }
      if (progress >= 99 && !tracked["100"]) {
        pushDataLayerEvent('video_progress_100', 'video_100_percent');
        setTracked((prev) => ({ ...prev, "100": true }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [player, tracked]);

  return (
    <section id="video-section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-sand/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden shadow-2xl rounded-3xl bg-card">
            <div className="relative w-full pt-[56.25%]">
              <div
                id="youtube-player"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-6 flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-accent/50 rounded-xl sm:rounded-2xl"
          >
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-accent-foreground">
              <strong>Conteúdo informativo:</strong> Este vídeo tem caráter
              educacional. A avaliação médica individual é indispensável para
              indicação do procedimento.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
