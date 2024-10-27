import React, { PropsWithChildren, useState } from 'react';

import * as Documentation from '@storybook/blocks';
import { DocsContainerProps } from '@storybook/blocks';

const Preview = ({ story }: { story: React.ReactElement & { parameters?: never } }) => {

  const { embedDesigns, embedOrientation, embedPortStyle } = story?.['parameters'] || {
    embedDesigns: [],
    embedOrientation: 'horizontal',
    embedPortStyle: {},
  };

  if (!embedDesigns?.length) return (<Documentation.DocsStory of={story} />);

  const Designs = () => (<div className="doc-embed-designs">
    {embedDesigns.map((url?: string, index?: number) => (
      <iframe title={`Embed design ${index}`} key={index} src={url} className="doc-embed-designs__iframe"
              style={{ ...(embedPortStyle || {}) }} />
    ))}
  </div>);

  return (
    <div className={`doc-preview ${embedOrientation === 'vertical' ? 'vertical' : 'horizontal'}`}>
      <Designs />
      <Documentation.DocsStory of={story} />
    </div>
  );
};

interface StoriesSelectorProps {
  stories: { name: string, config: React.ReactElement }[];
  onSelect: (config: React.ReactElement) => void;
}

const StoriesSelector = ({ stories, onSelect }: StoriesSelectorProps) => {

  const onChange = (name: string) => {
    onSelect(stories.find(o => o.name === name)!.config);
  };

  if (stories.length === 1) {
    return (
      <span className="doc-select">{stories[0].name}</span>
    );
  }

  return (

    <select
      className="doc-select"
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        // onChange((event?.nativeEvent)?.target?.['value']):
        onChange(event.target.value)
      }>
      {stories.map(({ name }) =>
        (<option key={name} value={name}>{name}</option>),
      )}
    </select>
  );
};

export const DocumentationContainer = (props: PropsWithChildren<DocsContainerProps>) => {
  const stories = props.context.componentStories().map(story => ({
    name: story.name,
    config: story.moduleExport,
  }));
  const [selectedStory, setSelectedStory] = useState(stories[0].config);
  return (
    <Documentation.DocsContainer {...props}>
      <Documentation.Title />
      <Documentation.Subtitle />
      <Documentation.Description />
      <StoriesSelector stories={stories} onSelect={(config) => setSelectedStory(config)} />
      <Preview story={selectedStory} />
      <Documentation.Controls of={selectedStory} />
    </Documentation.DocsContainer>
  );
};
