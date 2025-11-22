import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

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
        videoId: "XXXXXXXXXXX", // Replace with actual video ID
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
      console.log("Video play event");
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
        console.log("Video 25% event");
        setTracked((prev) => ({ ...prev, "25": true }));
      }
      if (progress >= 50 && !tracked["50"]) {
        console.log("Video 50% event");
        setTracked((prev) => ({ ...prev, "50": true }));
      }
      if (progress >= 75 && !tracked["75"]) {
        console.log("Video 75% event");
        setTracked((prev) => ({ ...prev, "75": true }));
      }
      if (progress >= 99 && !tracked["100"]) {
        console.log("Video 100% event");
        setTracked((prev) => ({ ...prev, "100": true }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [player, tracked]);

  return (
    <section id="video-section" className="py-20 px-4 bg-sand/30">
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
            className="mt-6 flex items-start gap-3 p-4 bg-accent/50 rounded-2xl"
          >
            <AlertCircle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-accent-foreground">
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
