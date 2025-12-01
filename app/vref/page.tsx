import Markdown from '@/components/Markdown';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VRef",
  description: "A Tiny Reactive library to track and respond to changes in variables, providing predictable low-level reactivity.",
};

export default function Vref() {
  return <Markdown name='vref' />;
}
