import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BriefcaseBusiness, GitFork } from "lucide-react";

type SocialLink = {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
};

type ActionButtonProps = {
  text: string;
  href: string;
};

type GlassmorphismProfileCardProps = {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
  socialLinks?: SocialLink[];
  actionButton: ActionButtonProps;
};

export function Component() {
  const cardProps: GlassmorphismProfileCardProps = {
    avatarUrl: "/naman-profile.jpg",
    name: "Naman Gupta",
    title: "CSE · Artificial Intelligence & ML",
    bio: "Turning fundamentals into useful software—one problem, project, and iteration at a time.",
    socialLinks: [
      {
        id: "github",
        icon: GitFork,
        label: "GitHub",
        href: "https://github.com/Namangupta6023",
      },
      {
        id: "linkedin",
        icon: BriefcaseBusiness,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/naman-gupta-983b8b369/",
      },
    ],
    actionButton: {
      text: "Let’s connect",
      href: "https://www.linkedin.com/in/naman-gupta-983b8b369/",
    },
  };

  return <GlassmorphismProfileCard {...cardProps} />;
}

export function GlassmorphismProfileCard({
  avatarUrl,
  name,
  title,
  bio,
  socialLinks = [],
  actionButton,
}: GlassmorphismProfileCardProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[25rem]">
      <div className="absolute -inset-8 -z-10 rounded-full bg-cyan-400/10 blur-3xl" />
      <div
        className="profile-glass relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-white/12 px-7 py-8 text-center backdrop-blur-xl sm:px-9 sm:py-10"
        style={{ boxShadow: "0 34px 90px rgba(0, 0, 0, 0.42)" }}
      >
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
        <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-lime-300">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]" />
          Learning in public
        </div>

        <div className="avatar-ring mt-7 h-32 w-32 rounded-full p-[3px]">
          <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
            <img
              src={avatarUrl}
              alt={`${name}'s profile`}
              className="h-full w-full scale-[1.65] object-cover object-[50%_58%]"
            />
          </div>
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
          Hello, I&apos;m
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.045em] text-white">
          {name}
        </h2>
        <p className="mt-2 text-sm font-semibold text-lime-300">{title}</p>
        <p className="mt-5 max-w-xs text-[0.95rem] leading-7 text-slate-300">
          {bio}
        </p>

        <div className="mt-5 w-full rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.055] px-4 py-3.5">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-300">
            Current focus
          </p>
          <p className="mt-1.5 text-sm font-semibold text-slate-200">
            DSA · Full-stack · AI/ML
          </p>
        </div>

        <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <SocialButton
              key={item.id}
              item={item}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          ))}
        </div>

        <ActionButton action={actionButton} />
      </div>
    </div>
  );
}

function SocialButton({
  item,
  setHoveredItem,
  hoveredItem,
}: {
  item: SocialLink;
  setHoveredItem: (id: string | null) => void;
  hoveredItem: string | null;
}) {
  const Icon = item.icon;

  return (
    <div className="relative">
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
        onFocus={() => setHoveredItem(item.id)}
        onBlur={() => setHoveredItem(null)}
        aria-label={item.label}
      >
        <Icon
          size={20}
          className="text-slate-300 transition-colors group-hover:text-cyan-200"
        />
      </a>
      <Tooltip item={item} hoveredItem={hoveredItem} />
    </div>
  );
}

function ActionButton({ action }: { action: ActionButtonProps }) {
  return (
    <a
      href={action.href}
      target="_blank"
      rel="noreferrer"
      className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98]"
    >
      <span>{action.text}</span>
      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

function Tooltip({
  item,
  hoveredItem,
}: {
  item: SocialLink;
  hoveredItem: string | null;
}) {
  return (
    <div
      role="tooltip"
      className={`pointer-events-none absolute -top-11 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-slate-900/95 px-3 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition duration-200 ${
        hoveredItem === item.id
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0"
      }`}
    >
      {item.label}
    </div>
  );
}
