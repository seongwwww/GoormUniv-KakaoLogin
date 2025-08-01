export default function ProfileImg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <mask
        id="mask0_219_6"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="50"
        height="50"
      >
        <circle cx="25" cy="25" r="25" fill="#F7FAFC" />
      </mask>
      <g mask="url(#mask0_219_6)">
        <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
        <circle cx="25" cy="18.5" r="8.75" fill="black" />
        <circle cx="24.875" cy="44.875" r="16.875" fill="black" />
      </g>
    </svg>
  );
}
