"use client";

import React, { useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate API call - Replace with your actual endpoint
            await new Promise((resolve) => setTimeout(resolve, 1500));
            
            // For now, just open email client
            const mailtoLink = `mailto:Reneshnaidu.para@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
            window.location.href = mailtoLink;

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: "600px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
            }}
        >
            {/* Name Input */}
            <div>
                <label
                    htmlFor="name"
                    style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        color: "var(--text)",
                        marginBottom: "8px",
                    }}
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "14px 16px",
                        background: "rgba(194, 164, 255, 0.03)",
                        border: `1px solid ${errors.name ? "#ff4444" : "var(--border)"}`,
                        borderRadius: "8px",
                        color: "var(--text)",
                        fontSize: "14px",
                        outline: "none",
                        transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.background = "rgba(194, 164, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                        if (!errors.name) {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.03)";
                        }
                    }}
                />
                {errors.name && (
                    <span
                        style={{
                            display: "block",
                            marginTop: "6px",
                            fontSize: "12px",
                            color: "#ff4444",
                        }}
                    >
                        {errors.name}
                    </span>
                )}
            </div>

            {/* Email Input */}
            <div>
                <label
                    htmlFor="email"
                    style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        color: "var(--text)",
                        marginBottom: "8px",
                    }}
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "14px 16px",
                        background: "rgba(194, 164, 255, 0.03)",
                        border: `1px solid ${errors.email ? "#ff4444" : "var(--border)"}`,
                        borderRadius: "8px",
                        color: "var(--text)",
                        fontSize: "14px",
                        outline: "none",
                        transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.background = "rgba(194, 164, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                        if (!errors.email) {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.03)";
                        }
                    }}
                />
                {errors.email && (
                    <span
                        style={{
                            display: "block",
                            marginTop: "6px",
                            fontSize: "12px",
                            color: "#ff4444",
                        }}
                    >
                        {errors.email}
                    </span>
                )}
            </div>

            {/* Message Textarea */}
            <div>
                <label
                    htmlFor="message"
                    style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        color: "var(--text)",
                        marginBottom: "8px",
                    }}
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    style={{
                        width: "100%",
                        padding: "14px 16px",
                        background: "rgba(194, 164, 255, 0.03)",
                        border: `1px solid ${errors.message ? "#ff4444" : "var(--border)"}`,
                        borderRadius: "8px",
                        color: "var(--text)",
                        fontSize: "14px",
                        outline: "none",
                        transition: "all 0.3s ease",
                        resize: "vertical",
                        fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.background = "rgba(194, 164, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                        if (!errors.message) {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.background = "rgba(194, 164, 255, 0.03)";
                        }
                    }}
                />
                {errors.message && (
                    <span
                        style={{
                            display: "block",
                            marginTop: "6px",
                            fontSize: "12px",
                            color: "#ff4444",
                        }}
                    >
                        {errors.message}
                    </span>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                style={{
                    padding: "16px 48px",
                    borderRadius: "8px",
                    background: isSubmitting ? "var(--text-muted)" : "var(--accent)",
                    border: "none",
                    color: "#0b080c",
                    fontSize: "15px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    alignSelf: "flex-start",
                }}
                onMouseEnter={(e) => {
                    if (!isSubmitting) {
                        e.currentTarget.style.background = "var(--accent-dark)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                    }
                }}
                onMouseLeave={(e) => {
                    if (!isSubmitting) {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.transform = "translateY(0)";
                    }
                }}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
                <div
                    style={{
                        padding: "12px 16px",
                        borderRadius: "8px",
                        background: "rgba(34, 197, 94, 0.1)",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                        color: "#22c55e",
                        fontSize: "14px",
                    }}
                >
                    Message sent successfully! I'll get back to you soon.
                </div>
            )}

            {submitStatus === "error" && (
                <div
                    style={{
                        padding: "12px 16px",
                        borderRadius: "8px",
                        background: "rgba(239, 68, 68, 0.1)",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                        color: "#ef4444",
                        fontSize: "14px",
                    }}
                >
                    Failed to send message. Please try again or email directly.
                </div>
            )}
        </form>
    );
};

export default ContactForm;

// Made with Bob
