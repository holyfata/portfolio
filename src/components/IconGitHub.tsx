const IconGitHub = () => {
  return (
    <a
      className="cursor-pointer hover:underline text-[#1f2328]"
      href="https://github.com/"
      target="_blank"
    >
      <span
        className="inline-block bg-cover size-[20] mr-1"
        style={{
          backgroundImage: `url(/images/github.gif)`,
        }}
      ></span>
      GitHub
    </a>
  );
};

export default IconGitHub;
