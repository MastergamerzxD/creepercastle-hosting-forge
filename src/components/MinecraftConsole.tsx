import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MinecraftConsole = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const consoleLines = [
    "[15:32:18] [Server thread/INFO]: Starting minecraft server version 1.21.1",
    "[15:32:18] [Server thread/INFO]: Loading properties",
    "[15:32:18] [Server thread/INFO]: Default game type: SURVIVAL",
    "[15:32:19] [Server thread/INFO]: Generating keypair", 
    "[15:32:19] [Server thread/INFO]: Starting minecraft server on *:25565",
    "[15:32:20] [Server thread/INFO]: Using epoll channel type",
    "[15:32:21] [Server thread/INFO]: Preparing level \"world\"",
    "[15:32:22] [Server thread/INFO]: Preparing start region for dimension minecraft:overworld",
    "[15:32:23] [Server thread/INFO]: Time elapsed: 1247 ms",
    "[15:32:24] [Server thread/INFO]: Done (6.018s)! For help, type \"help\"",
    "[15:32:24] [Server thread/INFO]: Powered by CreeperCastle.cloud ✨"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLineIndex < consoleLines.length) {
        setLines(prev => [...prev, consoleLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }
    }, 600);

    return () => clearInterval(timer);
  }, [currentLineIndex, consoleLines]);

  return (
    <motion.div
      className="bg-black rounded-lg p-6 font-mono text-sm border border-gray-800 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-4 pb-2 border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-gray-400 text-xs">minecraft-server.jar</div>
      </div>
      
      <div className="space-y-1 min-h-[280px]">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className={`${
              line.includes("Done") || line.includes("Powered by CreeperCastle") 
                ? "text-green-400" 
                : line.includes("INFO") 
                  ? "text-gray-300" 
                  : "text-gray-500"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {line}
          </motion.div>
        ))}
        
        {currentLineIndex < consoleLines.length && (
          <motion.div 
            className="inline-block w-2 h-4 bg-green-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default MinecraftConsole;