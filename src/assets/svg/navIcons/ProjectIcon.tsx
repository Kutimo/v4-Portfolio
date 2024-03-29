import { IconType } from "$types/IconType"

export default function ProjectIcon({ width, height, isVisible }: IconType) {
  return (
    <svg
      width={width}
      height={height}
      style={{ display: isVisible ? "block" : "none" }}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 31H37V3H34V16.9L29.35 14.05L24.7 16.9V3H9V31ZM9 34C8.2 34 7.5 33.7 6.9 33.1C6.3 32.5 6 31.8 6 31V3C6 2.2 6.3 1.5 6.9 0.9C7.5 0.3 8.2 0 9 0H37C37.8 0 38.5 0.3 39.1 0.9C39.7 1.5 40 2.2 40 3V31C40 31.8 39.7 32.5 39.1 33.1C38.5 33.7 37.8 34 37 34H9ZM3 40C2.2 40 1.5 39.7 0.9 39.1C0.3 38.5 0 37.8 0 37V6H3V37H34V40H3Z"
        fill="#0E1111"
      />
    </svg>
  )
}
