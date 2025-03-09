import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import InputError from "./InputError";
import { validatePassword } from "@/types/validation";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean;
  error?: string; // Accepts Laravel backend error
  value: string; // Ensure it supports controlled input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Make sure onChange is required
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { className = "", isFocused = false, error, value, onChange, ...props },
    ref
  ) => {
    const localRef = useRef<HTMLInputElement>(null);
    const [localError, setLocalError] = useState<string | null>(null);

    useEffect(() => {
      if (isFocused) {
        localRef.current?.focus();
      }
    }, [isFocused]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = e.target.value;
      const validationError = validatePassword(newPassword);
      setLocalError(validationError);
      onChange(e); // Ensure it updates `data.password` in parent
    };

    return (
      <div>
        <input
          {...props}
          type="password"
          className={`rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                    dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600
                    ${className}`}
          ref={localRef}
          value={value} // Controlled input
          onChange={handleChange} // Make sure it updates the parent state
          required
        />
        <InputError className="mt-2" message={localError || error} />
      </div>
    );
  }
);

export default PasswordInput;
