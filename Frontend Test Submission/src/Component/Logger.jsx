import { useEffect } from "react";

const Logger = (event, data) => {
  useEffect(() => {
    if (data) {
      
      console.log(`[Logger] Event: ${event}`, data);

      
      const existingLogs = JSON.parse(localStorage.getItem("logs")) || [];
      const newLog = { event, data, time: new Date().toLocaleString() };
      localStorage.setItem("logs", JSON.stringify([...existingLogs, newLog]));
    }
  }, [event, data]);
};

export default Logger;