interface Props { size?: number; filled?: boolean }
export default function IconStar({ filled = true, size = 16 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill={filled ? '#c9920a' : 'none'} stroke="#c9920a" strokeWidth="1.8">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}
