import type { SVGProps } from "react";

export function GR(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 64 64"
      {...props}
    >
      <path fill="#428bc1" d="M56 14H32v6h27.5c-.9-2.1-2.1-4.2-3.5-6"></path>
      <path
        fill="#f9f9f9"
        d="M32 14h24q-2.55-3.45-6-6H32zm27.5 6H32v6h29.4c-.4-2.1-1.1-4.1-1.9-6"
      ></path>
      <path
        fill="#428bc1"
        d="M4.5 44h55c.8-1.9 1.5-3.9 1.9-6H2.6c.4 2.1 1.1 4.1 1.9 6"
      ></path>
      <path
        fill="#f9f9f9"
        d="M8 50h48c1.4-1.8 2.6-3.9 3.5-6h-55c.9 2.1 2.1 4.2 3.5 6"
      ></path>
      <path fill="#428bc1" d="M8 50q2.55 3.45 6 6h36q3.45-2.55 6-6z"></path>
      <path
        fill="#f9f9f9"
        d="M14 56c5 3.8 11.2 6 18 6s13-2.2 18-6zm6-24V20h12v-6H20V4.5c-2.1.9-4.2 2.1-6 3.5v6H8c-1.4 1.8-2.6 3.9-3.5 6H14v12H2q0 3.15.6 6h58.8q.6-2.85.6-6z"
      ></path>
      <path
        fill="#428bc1"
        d="M61.4 26H32v-6H20v12h42q0-3.15-.6-6M32 2c-4.3 0-8.3.9-12 2.5V14h12V8h18c-5-3.8-11.2-6-18-6M14 14V8q-3.45 2.55-6 6zm-9.5 6C2.9 23.7 2 27.7 2 32h12V20z"
      ></path>
    </svg>
  );
}

export function UK(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 512 512"
      {...props}
    >
      <mask id="SVGuywqVbel">
        <circle cx={256} cy={256} r={256} fill="#fff"></circle>
      </mask>
      <g mask="url(#SVGuywqVbel)">
        <path
          fill="#eee"
          d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"
        ></path>
        <path
          fill="#0052b4"
          d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"
        ></path>
        <path
          fill="#d80027"
          d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"
        ></path>
      </g>
    </svg>
  );
}
