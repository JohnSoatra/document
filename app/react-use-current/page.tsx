import Markdown from '@/components/Markdown';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "React Use Current",
  description: "A tiny hook combining the synchronous mutation with the reactivity, allowing direct mutations while still triggering React updates.",
};

export default function ReactUseCurrent() {
  return <Markdown name='react-use-current' />;
}
