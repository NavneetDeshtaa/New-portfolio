"use client";

import { Project } from "@/lib/types";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalData: Project | null;
  setModalData: (data: Project) => void;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<Project | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    setModalData(null);
  };

  return (
    <ModalContext.Provider 
      value={{ 
        open, 
        setOpen, 
        modalData, 
        setModalData, 
        openModal, 
        closeModal 
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}