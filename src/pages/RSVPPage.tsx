import { useState } from "react";
import type { Language } from "../types";
import rsvpTranslations from "../translations/rsvp";
import * as Sentry from "@sentry/react";
import rsvpImage from "../assets/tableBanner.png";

interface RSVPPageProps {
  language: Language;
}

export default function RSVPPage({ language }: RSVPPageProps) {
  const t = rsvpTranslations[language.code];

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [events, setEvents] = useState({
    welcomeParty: false,
    ceremonyReception: false,
  });
  const [dietary, setDietary] = useState("");
  const [message, setMessage] = useState("");

  // Error and submission state
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Field-specific errors
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [attendingError, setAttendingError] = useState("");
  const [eventsError, setEventsError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Clear previous field errors
    setNameError("");
    setPhoneError("");
    setEmailError("");
    setAttendingError("");
    setEventsError("");

    // Validate fields
    let hasErrors = false;
    if (name.trim() === "") {
      setNameError(t.nameErrorMessage);
      hasErrors = true;
    }
    if (email.trim() === "") {
      setEmailError(t.emailErrorMessage);
      hasErrors = true;
    }
    if (phone.trim() === "") {
      setPhoneError(t.phoneErrorMessage);
      hasErrors = true;
    }
    if (attending === "") {
      setAttendingError(t.attendingErrorMessage);
      hasErrors = true;
    }
    if (
      attending === "yes" &&
      !events.welcomeParty &&
      !events.ceremonyReception
    ) {
      setEventsError(t.eventRequiredMessage);
      hasErrors = true;
    }

    if (hasErrors) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby8UHENAMfHwJ0y5jgZy5sysDQRe9ZSNQ38cMUBRcfgaRJ-AOc2GK5CjSSSl90o8H0p/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            phone,
            attending,
            events,
            dietary,
            message,
          }),
        },
      );

      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (error) {
      setError(t.submitErrorMessage);
      Sentry.captureException(
        new Error(error instanceof Error ? error.message : "Unknown error"),
        {
          extra: {
            name,
            attending,
            events,
            dietary,
            message,
          },
        },
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full px-4 py-12 h-[60vh] flex items-center justify-center border-t">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-3">
            {t.successMessage}
          </h2>
          <p className="text-base text-gray-600 font-light leading-relaxed max-w-md mx-auto">
            {t.successMessageTwo}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        id="hero"
        className="relative w-full h-[40vh] max-h-[40vh] sm:h-[70vh] sm:max-h-[70vh] overflow-hidden"
      >
        <img
          src={rsvpImage}
          alt="RSVP"
          className="absolute inset-0 w-full h-full object-cover object-[calc(50%+50px)_center] sm:object-cover sm:object-[calc(50%)]"
        />
      </div>
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-[40px] sm:text-7xl font-light mb-8 text-gray-900">
            {t.title}
          </p>
          <p className="text-lg sm:text-xl text-gray-600 font-light tracking-wide mx-auto max-w-xl">
            {t.intro}
          </p>
          <p className="text-lg sm:text-xl text-gray-600 font-light tracking-wide mx-auto mb-4">
            {t.introTwo}
          </p>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-md mx-auto">
            {t.deadlineText}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Name Field */}
            <div className="group">
              <label
                className="block text-base md:text-lg font-medium text-gray-700 mb-1"
                htmlFor="name"
              >
                {t.nameLabel}
              </label>
              <p className="italic text-sm mb-2.5 text-gray-700">
                {t.nameHelperText}
              </p>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
              />
              {nameError && (
                <p className="text-red-500 text-xs mt-2 font-medium">
                  {nameError}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                className="block text-base md:text-lg font-medium text-gray-700 mb-2.5"
                htmlFor="email"
              >
                {t.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-2 font-medium">
                  {emailError}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="group">
              <label
                className="block text-base md:text-lg font-medium text-gray-700 mb-2.5"
                htmlFor="phone"
              >
                {t.phoneLabel}
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError("");
                }}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
              />
              {phoneError && (
                <p className="text-red-500 text-xs mt-2 font-medium">
                  {phoneError}
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 my-8" />

            {/* Attending Field */}
            <div className="group">
              <p className="block text-base md:text-lg font-medium text-gray-700 mb-4">
                {t.attendingLabel}
              </p>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer group/radio">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={attending === "yes"}
                    onChange={() => {
                      setAttending("yes");
                      setAttendingError("");
                    }}
                    className="w-4 h-4 mr-3 cursor-pointer accent-gray-900"
                  />
                  <span className="text-base md:text-lg text-gray-700 group-hover/radio:text-gray-900 transition-colors">
                    {t.yesOption}
                  </span>
                </label>
                <label className="flex items-center cursor-pointer group/radio">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={attending === "no"}
                    onChange={() => {
                      setAttending("no");
                      setAttendingError("");
                    }}
                    className="w-4 h-4 mr-3 cursor-pointer accent-gray-900"
                  />
                  <span className="text-base md:text-lg text-gray-700 group-hover/radio:text-gray-900 transition-colors">
                    {t.noOption}
                  </span>
                </label>
              </div>
              {attendingError && (
                <p className="text-red-500 text-xs mt-2 font-medium">
                  {attendingError}
                </p>
              )}
            </div>

            {/* Events Field */}
            {attending === "yes" && (
              <div className="group">
                <p className="block text-base md:text-lg font-medium text-gray-700 mb-4">
                  {t.eventsLabel}
                </p>
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer group/checkbox">
                    <input
                      type="checkbox"
                      checked={events.welcomeParty}
                      onChange={() => {
                        setEvents((prev) => ({
                          ...prev,
                          welcomeParty: !prev.welcomeParty,
                        }));
                        setEventsError("");
                      }}
                      className="w-4 h-4 mt-1 mr-3 cursor-pointer accent-gray-900"
                    />
                    <span className="text-base md:text-lg text-gray-700 group-hover/checkbox:text-gray-900 transition-colors">
                      {t.welcomePartyOption}
                    </span>
                  </label>
                  <label className="flex items-start cursor-pointer group/checkbox">
                    <input
                      type="checkbox"
                      checked={events.ceremonyReception}
                      onChange={() => {
                        setEvents((prev) => ({
                          ...prev,
                          ceremonyReception: !prev.ceremonyReception,
                        }));
                        setEventsError("");
                      }}
                      className="w-4 h-4 mt-1 mr-3 cursor-pointer accent-gray-900"
                    />
                    <span className="text-base md:text-lg text-gray-700 group-hover/checkbox:text-gray-900 transition-colors">
                      {t.ceremonyReceptionOption}
                    </span>
                  </label>
                </div>
                {eventsError && (
                  <p className="text-red-500 text-xs mt-2 font-medium">
                    {eventsError}
                  </p>
                )}
              </div>
            )}

            {/* Divider */}
            <div className="h-px bg-gray-100 my-8" />

            {/* Dietary Field */}
            {attending === "yes" && (
              <div className="group">
                <label
                  className="block text-base md:text-lg font-medium text-gray-700 mb-2.5"
                  htmlFor="dietary"
                >
                  {t.dietaryLabel}{" "}
                  <span className="italic text-sm mb-2.5">(optional)</span>
                </label>
                <input
                  id="dietary"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors resize-none"
                />
              </div>
            )}
            {/* Message Field */}
            <div className="group">
              <label
                className="block text-base md:text-lg font-medium text-gray-700 mb-2.5"
                htmlFor="message"
              >
                {t.messageLabel}{" "}
                <span className="italic text-sm mb-2.5">(optional)</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors resize-none"
                rows={2}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-lg sm:text-xl py-3 px-6 rounded-md font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:bg-gray-900 active:scale-95 cursor-pointer"
                }`}
              >
                {t.submitButton}
                <svg
                  className={`h-4 w-4 ${
                    loading ? "animate-spin opacity-100" : "opacity-0"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}
          </form>

          <p className="mt-8 text-center text-gray-700 italic sm:w-4/5 mx-auto">
            {t.disclaimerText}
          </p>
        </div>
      </div>
    </div>
  );
}
