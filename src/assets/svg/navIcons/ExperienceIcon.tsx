import { IconType } from "$types/IconType"

export default function ExperienceIcon({ width, height, isVisible }: IconType) {
  return (
    <svg
      width={width}
      height={height}
      style={{ display: isVisible ? "block" : "none" }}
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 32V11C0 10.2 0.3 9.5 0.9 8.9C1.5 8.3 2.2 8 3 8H10V3C10 2.2 10.3 1.5 10.9 0.9C11.5 0.3 12.2 0 13 0H27C27.8 0 28.5 0.3 29.1 0.9C29.7 1.5 30 2.2 30 3V8H37C37.8 8 38.5 8.3 39.1 8.9C39.7 9.5 40 10.2 40 11V32H0ZM3 29H37V21.5H31.5V23.5H28.5V21.5H11.5V23.5H8.5V21.5H3V29ZM3 11V18.5H8.5V16.5H11.5V18.5H28.5V16.5H31.5V18.5H37V11H3ZM13 8H27V3H13V8Z"
        fill="#0E1111"
      />
    </svg>
  )
}
