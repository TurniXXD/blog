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
      <path d="M0 0H11V2H2V23H11V25H0V0Z" fill="#38BDF8" />
      <path d="M181 0H170V2H179V23H170V25H181V0Z" fill="#38BDF8" />
      {rect.map((r) => (
        <rect
          key={r}
          className={`${id} hidden`}
          x={r}
          y="5"
          width="3"
          height="15"
          fill="#38BDF8"
        />
      ))}
    </svg>
  );
};

export const Loader = () => {
  return (
    <svg
      className="h-36 w-full"
      width="250"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M75 0H175L250 75V175L175 250H75L0 175V75L75 0Z"
          fill="#182139"
        />
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
            fill="#0f1524"
          />
          <path
            d="M113.636 96.9993H136.37L153.503 113.832V136.167L136.37 152.999H113.636L96.5029 136.167V113.832L113.636 96.9993Z"
            fill="#182139"
          />
        </g>
      </g>
    </svg>
  );
};
