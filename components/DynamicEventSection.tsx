'use client';

import { ListingItem } from '@/types';
import EventCountdown from '@/components/EventCountdown';

interface DynamicEventSectionProps {
  events: ListingItem[];
}

export default function DynamicEventSection({
  events,
}: DynamicEventSectionProps) {
  if (!events.length) {
    return null;
  }

  return (
    <section className="w-full space-y-6">
      {events.map((event) => {
        const layout = event.eventLayout || 'A';

        if (layout === 'B') {
          return <LayoutB key={event.id} event={event} />;
        }

        if (layout === 'C') {
          return <LayoutC key={event.id} event={event} />;
        }

        if (layout === 'D') {
          return <LayoutD key={event.id} event={event} />;
        }

        return <LayoutA key={event.id} event={event} />;
      })}
    </section>
  );
}

/* -----------------------------------------
   Shared event information
----------------------------------------- */

function EventMeta({ event }: { event: ListingItem }) {
  return (
    <div className="flex flex-wrap gap-3 text-sm">
      <span>📅 {event.eventDate}</span>
      <span>⏰ {event.eventTime}</span>
      <span>
        📍 {event.area}, {event.location}
      </span>
      {event.organizer?.name && (
        <span>👤 {event.organizer.name}</span>
      )}
    </div>
  );
}

function Countdown({ event }: { event: ListingItem }) {
  if (!event.eventDate || !event.eventTime) return null;

  return (
    <EventCountdown
      eventDate={event.eventDate}
      eventTime={event.eventTime}
    />
  );
}

/* -----------------------------------------
   STYLE A — Featured Event
----------------------------------------- */

function LayoutA({ event }: { event: ListingItem }) {
  return (
    <article className="relative overflow-hidden rounded-3xl">
      <img
        src={event.image}
        alt={event.title}
        className="h-[440px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
        {event.interestHook && (
          <p className="mb-3 max-w-2xl text-sm md:text-base">
            {event.interestHook}
          </p>
        )}

        <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
          {event.title}
        </h2>

        <div className="mt-4">
          <EventMeta event={event} />
        </div>

        <div className="mt-5">
          <Countdown event={event} />
        </div>

        {event.sourceUrl && (
          <a
            href={event.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            View Event
          </a>
        )}
      </div>
    </article>
  );
}

/* -----------------------------------------
   STYLE B — Spotlight
----------------------------------------- */

function LayoutB({ event }: { event: ListingItem }) {
  return (
    <article className="grid overflow-hidden rounded-3xl border bg-white md:grid-cols-2">
      <img
        src={event.image}
        alt={event.title}
        className="h-[300px] w-full object-cover md:h-full"
      />

      <div className="flex flex-col justify-center p-6 md:p-10">
        <span className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-60">
          Upcoming Event
        </span>

        <h2 className="text-2xl font-bold md:text-4xl">
          {event.title}
        </h2>

        {event.interestHook && (
          <p className="mt-4 text-sm leading-6 opacity-75">
            {event.interestHook}
          </p>
        )}

        <div className="mt-5">
          <EventMeta event={event} />
        </div>

        <div className="mt-5">
          <Countdown event={event} />
        </div>

        {event.sourceUrl && (
          <a
            href={event.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit rounded-full border px-5 py-2.5 text-sm font-semibold"
          >
            Explore Event
          </a>
        )}
      </div>
    </article>
  );
}

/* -----------------------------------------
   STYLE C — Experience
----------------------------------------- */

function LayoutC({ event }: { event: ListingItem }) {
  return (
    <article className="relative overflow-hidden rounded-3xl">
      <img
        src={event.image}
        alt={event.title}
        className="h-[420px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur md:bottom-8 md:left-8 md:right-auto md:max-w-xl">
        {event.interestHook && (
          <p className="text-sm font-medium opacity-70">
            {event.interestHook}
          </p>
        )}

        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          {event.title}
        </h2>

        <div className="mt-4">
          <EventMeta event={event} />
        </div>

        <div className="mt-4">
          <Countdown event={event} />
        </div>

        {event.sourceUrl && (
          <a
            href={event.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
          >
            View Details
          </a>
        )}
      </div>
    </article>
  );
}

/* -----------------------------------------
   STYLE D — Community Pick
----------------------------------------- */

function LayoutD({ event }: { event: ListingItem }) {
  return (
    <article className="overflow-hidden rounded-3xl border bg-white">
      <div className="grid md:grid-cols-[1.1fr_0.9fr]">
        <img
          src={event.image}
          alt={event.title}
          className="h-[300px] w-full object-cover md:h-full"
        />

        <div className="flex flex-col justify-center p-6 md:p-8">
          <span className="text-xs font-bold uppercase tracking-widest opacity-60">
            Community Pick
          </span>

          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            {event.title}
          </h2>

          {event.interestHook && (
            <p className="mt-3 text-sm leading-6 opacity-75">
              {event.interestHook}
            </p>
          )}

          <div className="mt-4">
            <EventMeta event={event} />
          </div>

          <div className="mt-4">
            <Countdown event={event} />
          </div>

          {event.sourceUrl && (
            <a
              href={event.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
            >
              Discover Event
            </a>
          )}
        </div>
      </div>
    </article>
  );
}