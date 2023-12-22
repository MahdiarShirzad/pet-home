import React, { useRef, useEffect, useState } from "react";

const Collapse = () => {
  const data = [
    {
      title: "اصالت و کیفیت غذای پت رو از کجا تشخیص بدم؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "اصالت و کیفیت غذای پت رو از کجا تشخیص بدم؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "اصالت و کیفیت غذای پت رو از کجا تشخیص بدم؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "اصالت و کیفیت غذای پت رو از کجا تشخیص بدم؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
  ];

  return (
    data &&
    data.map((item, idx) => {
      return <Unit item={item} key={idx} />;
    })
  );
};

const Unit = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = open
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [open]);

  const onClickHandler = () => {
    setOpen(!open);
  };
  // semantic !!!
  return (
    <section className="wrapper bg-[#FEBF0F26] text-black px-10 py-4 rounded-3xl my-3 font-yekanReg text-base cursor-pointer ">
      <h4 className="m-0 " onClick={onClickHandler}>
        {item.title}
      </h4>
      <article
        className="mt-4 text-sm h-0 overflow-hidden transition-[0.5s]   ease-in"
        ref={contentRef}
      >
        {item.desc}
      </article>
    </section>
  );
};

export default Collapse;
