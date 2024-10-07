import type { RefObject } from 'react';
import { useEventListener } from 'usehooks-ts';

type EventType = 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'focusin' | 'focusout';

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  reference: RefObject<T> | RefObject<T>[],
  handler: (event: MouseEvent | TouchEvent | FocusEvent) => void,
  eventType: EventType = 'mousedown',
  eventListenerOptions: AddEventListenerOptions = {}
): void {
  useEventListener(
    eventType,
    (event) => {
      const target = event.target as Node;

      if (!target || !target.isConnected) {
        return;
      }

      const isOutside = Array.isArray(reference)
        ? reference
            .filter((r) => Boolean(r.current))
            .every((r) => r.current && !r.current.contains(target))
        : reference.current && !reference.current.contains(target);

      if (isOutside) {
        handler(event);
      }
    },
    undefined,
    eventListenerOptions
  );
}
