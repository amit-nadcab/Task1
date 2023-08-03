export const checkIfNumber = (event) => {
  /**
   * Allowing: Integers | Backspace | Tab | Delete | Left & Right arrow keys | Control + V (paste)
   **/

  const regex = new RegExp(
    /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/
  );

  // Allow Control + V (paste)
  if (event.ctrlKey && event.key === "v") {
    return;
  }

  // Prevent other keys that don't match the regex
  if (!event.key.match(regex)) {
    event.preventDefault();
  }
};
