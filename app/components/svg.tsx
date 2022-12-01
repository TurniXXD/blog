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

{
  /* <svg width="100%" height="auto" viewBox="0 0 267 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="63" width="6" height="6" fill="#38BDF8" />
<rect y="27" width="6" height="6" fill="#38BDF8" />
<rect y="99" width="6" height="6" fill="#38BDF8" />
<rect y="135" width="6" height="6" fill="#38BDF8" />
<rect y="45" width="6" height="6" fill="#38BDF8" />
<rect y="9" width="6" height="6" fill="#38BDF8" />
<rect y="81" width="6" height="6" fill="#38BDF8" />
<rect y="117" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="45" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="9" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="81" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="117" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="135" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="63" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="27" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="99" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="135" width="6" height="6" fill="#38BDF8" />
<rect y="54" width="6" height="6" fill="#38BDF8" />
<rect y="18" width="6" height="6" fill="#38BDF8" />
<rect y="90" width="6" height="6" fill="#38BDF8" />
<rect y="126" width="6" height="6" fill="#38BDF8" />
<rect y="36" width="6" height="6" fill="#38BDF8" />
<rect width="6" height="6" fill="#38BDF8" />
<rect y="72" width="6" height="6" fill="#38BDF8" />
<rect y="108" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="18" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="36" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="54" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="72" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="90" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="108" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="126" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="144" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="162" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="180" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="198" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="216" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="234" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="252" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="18" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="36" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="54" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="72" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="90" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="108" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="126" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="144" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="162" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="180" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="198" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="216" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="234" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="252" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="9" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="9" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="27" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="45" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="63" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="81" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="99" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="117" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="135" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="153" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="171" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="189" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="207" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="225" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="243" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="36" width="6" height="6" fill="#38BDF8" />
<rect x="261" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="72" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="108" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="27" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="45" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="63" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="81" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="99" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="117" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="135" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="153" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="171" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="189" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="207" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="225" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="243" y="126" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="54" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="18" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="90" width="6" height="6" fill="#38BDF8" />
<rect x="261" y="126" width="6" height="6" fill="#38BDF8" />
</svg> */
}
