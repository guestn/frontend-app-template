import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';

export enum MessageBannerVariant {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export interface ToastMessage {
  label: string;
  variant: MessageBannerVariant;
}

export interface ToastOptions {
  timeout?: number;
}

export interface ToastContextType {
  add: (message: ToastMessage, options?: ToastOptions) => void;
  remove: (id: string) => void;
  messages: Array<ToastMessage & { id: string }>;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};

export interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [messages, setMessages] = useState<
    Array<ToastMessage & { id: string }>
  >([]);

  const add = useCallback((message: ToastMessage, options?: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newMessage = { ...message, id };

    setMessages((prev) => [...prev, newMessage]);

    // Auto-remove after timeout
    if (options?.timeout) {
      setTimeout(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      }, options.timeout);
    }
  }, []);

  const remove = useCallback((id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  }, []);

  const value: ToastContextType = {
    add,
    remove,
    messages,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Toast container could be added here */}
    </ToastContext.Provider>
  );
};
