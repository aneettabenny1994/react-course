import { useState } from 'react'

export function ChatInput({ placeholder }) {
    const [showPassword, setShowPassword] = useState(false);
    function TogglePassword() {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <div>
                <input
                    className="login-input"
                    placeholder={placeholder}
                    type={placeholder !== "Password" ? "text" : "password"}
                />
                {placeholder === "Password" && (
                    <button onClick={TogglePassword}>
                        {showPassword ? "Hide" : "Show"}
                    </button>
                )}
            </div>
        </>
    );
}