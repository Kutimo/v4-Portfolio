import { IconType } from "$types/IconType"

export default function AboutIcon({ width, height, isVisible }: IconType) {
  return (
    <svg width={width} height={height} style={{ display: isVisible ? 'block' : 'none' }} viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 40V31.4C4.1 29.6667 2.625 27.6417 1.575 25.325C0.525 23.0083 0 20.5667 0 18C0 13 1.75 8.75 5.25 5.25C8.75 1.75 13 0 18 0C22.1667 0 25.8583 1.225 29.075 3.675C32.2917 6.125 34.3833 9.31667 35.35 13.25L38.1 24.15C38.2333 24.6167 38.15 25.0417 37.85 25.425C37.55 25.8083 37.15 26 36.65 26H32V33C32 33.825 31.7063 34.5313 31.1188 35.1188C30.5313 35.7063 29.825 36 29 36H24V40H21V33H29V23H34.7L32.45 14C31.65 10.7667 29.9 8.125 27.2 6.075C24.5 4.025 21.4333 3 18 3C13.8333 3 10.2917 4.44167 7.375 7.325C4.45833 10.2083 3 13.7257 3 17.877C3 20.0242 3.43873 22.0641 4.3162 23.9966C5.1937 25.9291 6.4383 27.6469 8.05 29.15L9 30.05V40H6ZM18 28C18.5667 28 19.0417 27.8083 19.425 27.425C19.8083 27.0417 20 26.5667 20 26C20 25.4333 19.8083 24.9583 19.425 24.575C19.0417 24.1917 18.5667 24 18 24C17.4333 24 16.9583 24.1917 16.575 24.575C16.1917 24.9583 16 25.4333 16 26C16 26.5667 16.1917 27.0417 16.575 27.425C16.9583 27.8083 17.4333 28 18 28ZM16.5 21.6H19.55C19.55 20.7667 19.6583 20.0917 19.875 19.575C20.0917 19.0583 20.5333 18.4333 21.2 17.7C21.8 17.0333 22.3833 16.3583 22.95 15.675C23.5167 14.9917 23.8 14.1 23.8 13C23.8 11.6 23.2583 10.4167 22.175 9.45C21.0917 8.48333 19.75 8 18.15 8C16.8167 8 15.6083 8.38333 14.525 9.15C13.4417 9.91667 12.6833 10.9167 12.25 12.15L15 13.3C15.2333 12.5667 15.6417 11.975 16.225 11.525C16.8083 11.075 17.45 10.85 18.15 10.85C18.8833 10.85 19.4917 11.05 19.975 11.45C20.4583 11.85 20.7 12.3667 20.7 13C20.7 13.7 20.4917 14.325 20.075 14.875C19.6583 15.425 19.1667 15.9833 18.6 16.55C17.9333 17.25 17.4167 17.95 17.05 18.65C16.6833 19.35 16.5 20.3333 16.5 21.6Z" fill="#0E1111" />
    </svg>

  )
}
