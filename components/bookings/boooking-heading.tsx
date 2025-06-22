const BookingHeading = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600 mt-2">{subTitle}</p>
    </div>
  );
};

export default BookingHeading;
