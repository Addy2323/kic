'use client'

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

// Official WhatsApp Vector Icon
function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.777.978-.953 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.508-.678-.518-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.029-1.054 2.509s1.079 2.91 1.23 3.111c.15.2 2.124 3.244 5.147 4.549.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.58-.087 1.78-.727 2.031-1.429.251-.703.251-1.305.176-1.429-.075-.124-.276-.2-.577-.35zM12.042 2C6.516 2 2.023 6.492 2.023 12.018c0 1.95.56 3.774 1.533 5.318L2 22l4.821-1.523a9.96 9.96 0 0 0 5.221 1.541h.004c5.524 0 10.017-4.493 10.017-10.018A10.001 10.001 0 0 0 12.042 2z" />
    </svg>
  )
}

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const phoneNumberDisplay = '+255 755 029 323'
  const phoneNumberRaw = '255755029323'
  const defaultMessage = encodeURIComponent(
    'Hello Kigola International team, I would like to inquire about your projects and partnership opportunities.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumberRaw}?text=${defaultMessage}`

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <>
      {/* WhatsApp Popup Card */}
      {isOpen && (
        <div
          ref={popupRef}
          role="dialog"
          aria-label="WhatsApp Support Popup"
          style={{ zIndex: 9999 }}
          className="fixed bottom-24 right-5 sm:bottom-28 sm:right-7 w-[350px] max-w-[calc(100vw-32px)] rounded-3xl border border-border/90 bg-white p-5 text-[#05180f] shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-3">
              <div
                style={{ width: '44px', height: '44px', borderRadius: '50%' }}
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#25D366] text-white shadow-sm"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-[#05180f] tracking-tight">
                  KIC WhatsApp Support
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#25D366]">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online &amp; Ready to Help</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="mt-4 space-y-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Have questions about renewable energy, healthcare projects, agriculture, or partnership opportunities? Chat with our team directly.
            </p>

            {/* Number Pill Box */}
            <div className="flex items-center justify-between rounded-xl bg-secondary/70 px-4 py-2.5 text-xs font-mono">
              <span className="text-muted-foreground font-sans font-medium">WhatsApp:</span>
              <span className="font-bold text-[#1fad53] text-sm">{phoneNumberDisplay}</span>
            </div>

            {/* Direct CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#20ba5a] hover:shadow-lg active:scale-98"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action WhatsApp Circular Button */}
      <div
        style={{ zIndex: 9998 }}
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7"
      >
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Chat with us on WhatsApp"
          style={{
            width: '62px',
            height: '62px',
            minWidth: '62px',
            minHeight: '62px',
            borderRadius: '50%',
          }}
          className="group relative flex aspect-square cursor-pointer items-center justify-center bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 active:scale-95"
        >
          {/* Subtle Pulse Ring */}
          {!isOpen && (
            <span
              style={{ borderRadius: '50%' }}
              className="absolute -inset-1.5 bg-[#25D366]/35 animate-ping duration-1000 -z-10 pointer-events-none"
            />
          )}

          {isOpen ? (
            <X size={26} className="transition-transform duration-200 group-hover:rotate-90 text-white" />
          ) : (
            <WhatsAppIcon className="h-8 w-8 text-white" />
          )}
        </button>
      </div>
    </>
  )
}
