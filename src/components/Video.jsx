import DateTimePretty from "./DateTimePretty";
import DateTime from "./DateTime";

export default function Video(props) {
  const DateTimeFormatted = DateTimePretty(DateTime);

  return (
      <div className="video">
          <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <DateTimeFormatted date={props.date} />
      </div>
  )
}