"use client";
import { createContext, useEffect, useState } from "react";
import Notification from "@/components/ui/Notification";

interface Notif {
  title: string;
  message: string;
  status: "success" | "error" | "pending";
}

interface NotificaitonContextState {
  notification: Notif | null;
  showNotification: (notif: Notif) => void;
  hideNotification: () => void;
}

export const NotificationContext = createContext<NotificaitonContextState>({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

// let timer: NodeJS.Timeout;

export function NotificationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notif, setNotif] = useState<Notif | null>(null);

  useEffect(() => {
    if (notif) {
      const timer = setTimeout(() => {
        setNotif(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notif]);

  const showNotification = (newNotif: Notif) => {
    setNotif(newNotif);
    // if (timer) {
    //   clearTimeout(timer);
    // }
    // timer = setTimeout(() => {
    //   setNotif(null);
    // }, 3000);
  };

  const hideNotification = () => {
    setNotif(null);
  };

  const value = {
    notification: notif,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {notif && (
        <Notification
          title={notif.title}
          message={notif.message}
          status={notif.status}
        />
      )}
    </NotificationContext.Provider>
  );
}
