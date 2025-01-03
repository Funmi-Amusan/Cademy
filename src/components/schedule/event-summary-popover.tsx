import { useRef, useEffect } from 'react'
import { CalenderEventType } from '../../store'
import { MdOutlineClose } from "react-icons/md";

interface EventSummaryPopoverProps {
  isOpen: boolean
  onClose: () => void
  event: CalenderEventType
}

export function EventSummaryPopover({ isOpen, onClose, event }: EventSummaryPopoverProps) {

    
    
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        ref={popoverRef}
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Event Summary</h2>
          <button  onClick={onClose}>
            <MdOutlineClose className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-2">
          <p><strong>Title:</strong> {event.title}</p>
          {/* Format the date before displaying it */}
          <p>
  <strong>Date:</strong> 
  {event.date.toLocaleDateString('en-NG', {
    year: 'numeric', 
    month: 'short', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit'
  })}
</p>

          {/* Add more event details here */}
        </div>
      </div>
    </div>
  )
}