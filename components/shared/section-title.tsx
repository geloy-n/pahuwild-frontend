interface TitleText {
  title: string;
  subTitle: string;
}

const SectionTitle = ({ title, subTitle }: TitleText) => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
