// Jest isn't 100% compatible with async components.
// Learn more: https://github.com/vercel/next.js/issues/47131
export async function resolveComponent<P>(Component: (props: P) => Promise<JSX.Element>, props: P) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}
