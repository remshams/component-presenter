export type Mock<Template> = Template &
  {
    [Prop in keyof Template]: jest.Mock;
  };
