import DateTime from "./DateTime";

export default function DateTimePretty(props) {
  let publicationDate = new Date(props.date);

  let minLeft = Math.floor((Date.now() - publicationDate) / 60000);

  let timeLeftText;

  if (minLeft < 60) {
    let timeLeft = minLeft
    timeLeftText = `${timeLeft} минут назад`;
  } else if (minLeft < 1440) {
    let timeLeft = Math.floor(minLeft / 60);
    timeLeftText = `${timeLeft} часов назад`;
  } else { 
    let timeLeft = Math.floor(minLeft / 1440);
    timeLeftText = `${timeLeft} дней назад`;
  }

  return (
    <DateTime date={timeLeftText} />
  )
}