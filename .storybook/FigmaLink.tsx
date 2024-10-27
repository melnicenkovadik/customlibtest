// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const FigmaLink = (Story, context) => {
  return (
    <>
      {context.viewMode === 'story' && context.parameters.designs?.length &&
        context.parameters.designs.map((link) => (
          <a href={link}
             className="absolute top-0 left-0 p-2"
             target="_blank"
             key={link} rel="noreferrer"
          >
            <img src="./icons/apps-figma.svg" alt="Figma Designs" className="w-10" />
          </a>
        ))}
      <Story {...context} />
    </>
  );
};
