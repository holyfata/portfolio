import { HTMLAttributes } from "react";

const Section = (
  props: {
    title: string;
  } & HTMLAttributes<HTMLDivElement>,
) => {
  const { title, children, ...rest } = props;

  return (
    <section {...rest}>
      <div className="pt-8 pb-4">
        <div className="border-b border-gray-200"></div>
      </div>
      <section>
        <h4
          className="text-gray-500 pb-4"
          style={{ fontFamily: "Comico-Regular" }}
        >
          {title}
        </h4>
        {children}
      </section>
    </section>
  );
};

export default Section;
