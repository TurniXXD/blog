export const StatusBar = ({ id }: { id: string }) => {
  const rect = [];
  for (let i = 5; i < 179; i += 6) rect.push(i);

  return (
    <svg
      id={id}
      width="181"
      height="25"
      viewBox="0 0 181 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H11V2H2V23H11V25H0V0Z" fill="#7dd8ff" />
      <path d="M181 0H170V2H179V23H170V25H181V0Z" fill="#7dd8ff" />
      {rect.map((r) => (
        <rect
          key={r}
          className={`${id} hidden`}
          x={r}
          y="5"
          width="3"
          height="15"
          fill="#7dd8ff"
        />
      ))}
    </svg>
  );
};

export const StatusBarCol = ({ id }: { id: string }) => {
  const rect = [];
  for (let i = 5; i < 179; i += 6) rect.push(i);

  return (
    <svg
      id={id}
      width="25"
      height="181"
      viewBox="0 0 25 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-rotate-180"
    >
      <path d="M0 0H2H25V11H23V2H2V11H0V0Z" fill="#7dd8ff" />
      <path
        d="M23.0002 179V170H25.0002V181H0V170H2V179H23.0002Z"
        fill="#7dd8ff"
      />
      {rect.map((r) => (
        <rect
          key={r}
          className={`${id} hidden`}
          x="5"
          y={r}
          width="15"
          height="3"
          fill="#7dd8ff"
        />
      ))}
    </svg>
  );
};

export const Loader = () => (
  <svg
    className="h-36 w-full"
    width="250"
    height="250"
    viewBox="0 0 250 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M75 0H175L250 75V175L175 250H75L0 175V75L75 0Z" fill="#182139" />
      <path
        d="M82.251 18.4993H167.251L231.001 82.2493V167.249L167.251 230.999H82.251L18.501 167.249V82.2493L82.251 18.4993Z"
        fill="#0f1524"
      />
      <path
        className="loader-sec-a"
        d="M81.999 5.00024L167.999 5.00024L164.999 12.5002L84.9988 12.5002L81.999 5.00024Z"
        fill="#7DD8FF"
      />
      <path
        className="loader-sec-b"
        d="M241.501 73.4998L234.001 76.4998L173.501 15.9998L176.501 8.49976L241.501 73.4998Z"
        fill="#7DD8FF"
      />
      <path
        className="loader-sec-c"
        d="M244.999 81.9998V168L237.499 165V84.9997L244.999 81.9998Z"
        fill="#7DD8FF"
      />
      <path
        className="loader-sec-d"
        d="M176.501 241.5L173.501 234L234.001 173.5L241.501 176.5L176.501 241.5Z"
        fill="#7DD8FF"
      />
      <path
        className="loader-sec-a"
        d="M168.001 245H82.001L85.001 237.5H165.001L168.001 245Z"
        fill="#7DD8FF"
      />
      <path
        className="loader-sec-b"
        d="M8.49902 176.5L15.999 173.5L76.499 234L73.499 241.5L8.49902 176.5Z"
        fill="#7DD8FF"
      />
      <path
        className="loader-sec-c"
        d="M5.00098 168L5.00098 82.0005L12.501 85.0005V165L5.00098 168Z"
        fill="#7DD8FF"
      />
      <path
        className="loader-sec-d"
        d="M73.5 8.49976L76.5 15.9998L16 76.4998L8.5 73.4998L73.5 8.49976Z"
        fill="#7DD8FF"
      />
      <g id="Group 84">
        <path
          d="M109.097 85.5H140.407L164.002 109.095V140.405L140.407 164H109.097L85.502 140.405V109.095L109.097 85.5Z"
          fill="#182139"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.476 84H141.028L165.502 108.474V141.026L141.028 165.5H108.476L84.002 141.026V108.474L108.476 84ZM140.407 164H109.097L85.502 140.405V109.095L109.097 85.5H140.407L164.002 109.095V140.405L140.407 164Z"
          fill="#182139"
        />
        <path
          className="loader-sec-a"
          d="M109.098 85.5H140.407L137.231 94.1214H112.728L109.098 85.5Z"
          fill="#7DD8FF"
        />
        <path
          className="loader-sec-b"
          d="M137.229 94.1214L140.406 85.5L164.001 109.095L155.834 112.725L137.229 94.1214Z"
          fill="#7DD8FF"
        />
        <path
          className="loader-sec-c"
          d="M155.833 112.726L164.001 109.096V140.405L155.833 137.229V112.726Z"
          fill="#7DD8FF"
        />
        <path
          className="loader-sec-d"
          d="M137.229 155.832L155.834 137.228L164.001 140.405L140.406 164L137.229 155.832Z"
          fill="#7DD8FF"
        />
        <path
          className="loader-sec-a"
          d="M112.728 155.833H137.231L140.407 164H109.098L112.728 155.833Z"
          fill="#7DD8FF"
        />
        <path
          className="loader-sec-b"
          d="M94.1233 137.228L112.727 155.832L109.097 164L85.502 140.405L94.1233 137.228Z"
          fill="#7DD8FF"
        />
        <path
          className="loader-sec-c"
          d="M85.502 109.096L94.1233 112.726V137.229L85.502 140.405V109.096Z"
          fill="#7DD8FF"
        />
        <path
          className="loader-sec-d"
          d="M109.097 85.5L112.727 94.1214L94.1233 112.725L85.502 109.095L109.097 85.5Z"
          fill="#7DD8FF"
        />
        <path
          d="M111.119 90.0786H139.037L160.076 110.921V138.578L139.037 159.42H111.119L90.0801 138.578V110.921L111.119 90.0786Z"
          fill="#121929"
        />
        <path
          d="M113.636 96.9993H136.37L153.503 113.832V136.167L136.37 152.999H113.636L96.5029 136.167V113.832L113.636 96.9993Z"
          fill="#182139"
        />
      </g>
    </g>
  </svg>
);

export const FlagCz = () => (
  <svg
    width="71"
    height="58"
    viewBox="0 0 71 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 2H47L69 23.6V56H24L2 34.4V2Z" fill="#344F96" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H47.8177L71 22.7608V58H23.1823L0 35.2392V0ZM2 2V34.4L24 56H69V23.6L47 2H2Z"
      fill="#71D4FF"
    />
    <path d="M2 2L46.5 1L69 23V29H34.5L2 2Z" fill="#71D4FF" />
    <path
      d="M23.5 57H46.5H69.5L70 29H34.5L18.25 42.5L13.5 46.5L23.5 57Z"
      fill="#2089B7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H47.8177L71 22.7608V58H23.1823L0 35.2392V0ZM2 2V34.4L24 56H69V23.6L47 2H2Z"
      fill="#71D4FF"
    />
  </svg>
);

export const FlagEn = () => (
  <svg
    width="71"
    height="58"
    viewBox="0 0 71 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 1H1V2V34.4V34.8196L1.29941 35.1136L23.2994 56.7136L23.5912 57H24H69H70V56V23.6V23.1804L69.7006 22.8864L47.7006 1.28644L47.4088 1H47H2Z"
      fill="#71D4FF"
      stroke="#71D4FF"
      strokeWidth="2"
    />
    <path d="M39 2H31V56H39V2Z" fill="#2C7B9E" />
    <path d="M69 25.0001L2 25V33H69V25.0001Z" fill="#2C7B9E" />
    <path d="M0 19V8L17 21H0V19Z" fill="#344F96" />
    <path d="M0 5.5V2H1.5L25 21H20L0 5.5Z" fill="#2C7B9E" />
    <path d="M28 2V13V21L4.5 2H28Z" fill="#344F96" />
    <path d="M70 39V50L53 37H70V39Z" fill="#344F96" />
    <path d="M70 52.5V56H68.5L45 37H50L70 52.5Z" fill="#2C7B9E" />
    <path d="M42 56V45V37L65.5 56H42Z" fill="#344F96" />
    <path d="M3 38L6 40L8.50034 43L16.5003 37H2L3 38Z" fill="#344F96" />
    <path
      d="M10.5 44L12.0002 47L12.7501 46.5L24.5001 37H19.5001L10.5 44Z"
      fill="#2C7B9E"
    />
    <path d="M28 56V37L15.75 46.5L14 48L22 56L24 57H27L28 56Z" fill="#344F96" />
    <path d="M68 21L62 14L52.9997 21L68 21Z" fill="#344F96" />
    <path d="M60 13L57.5 11L44.9996 21L49.9996 21L60 13Z" fill="#2C7B9E" />
    <path
      d="M42 2V13L42 21L53.75 11.5L56.6875 9.125L48.5 1L45.5 1L42.5 1L42 2Z"
      fill="#344F96"
    />
    <path
      d="M2 1H1V2V34.4V34.8196L1.29941 35.1136L23.2994 56.7136L23.5912 57H24H69H70V56V23.6V23.1804L69.7006 22.8864L47.7006 1.28644L47.4088 1H47H2Z"
      stroke="#71D4FF"
      strokeWidth="2"
    />
  </svg>
);
