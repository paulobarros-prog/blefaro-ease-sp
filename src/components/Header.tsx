import { motion } from "framer-motion";
import logo from "@/assets/logo-dra-thayssa.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-primary backdrop-blur-md border-b border-primary/20"
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Logo da Dra. Thayssa Barreto"
            className="h-10 sm:h-12 md:h-14 lg:h-16"
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
